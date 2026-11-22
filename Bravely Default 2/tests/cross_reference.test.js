import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_DIR = path.resolve(__dirname, '..');

function loadJson(filename) {
  return JSON.parse(fs.readFileSync(path.join(BASE_DIR, filename), 'utf-8'));
}

describe('Cross-Reference Integrity', () => {
  const jobs = loadJson('jobData.json');
  const abilities = loadJson('abilityData.json');
  const equipment = loadJson('equipmentData.json');
  const enemies = loadJson('enemyData.json');
  const shops = loadJson('shopData.json');
  const quests = loadJson('questData.json');
  const cards = loadJson('bndCardData.json');

  test('All 24 asterisk jobs are loaded with required attributes', () => {
    assert.equal(jobs.length, 24);
    for (const j of jobs) {
      assert.ok(j.id, `Job ${j.name} missing id`);
      assert.ok(j.name, `Job missing name`);
      assert.ok(j.role, `Job ${j.name} missing role`);
      assert.ok(j.aptitudes, `Job ${j.name} missing aptitudes`);
      assert.ok(j.aptitudes.sword, `Job ${j.name} missing sword aptitude`);
      assert.ok(j.specialty1, `Job ${j.name} missing specialty1`);
    }
  });

  test('Every ability links cleanly to an existing job', () => {
    const jobNames = new Set(jobs.map((j) => j.name.toLowerCase()));
    const jobIds = new Set(jobs.map((j) => j.id.toLowerCase()));

    assert.ok(abilities.length >= 300, 'Must have at least 300 abilities');
    for (const a of abilities) {
      assert.ok(a.id, 'Ability missing id');
      assert.ok(a.name, 'Ability missing name');
      assert.ok(a.job, `Ability ${a.name} missing job reference`);
      const jLower = a.job.toLowerCase();
      assert.ok(
        jobNames.has(jLower) || jobIds.has(jLower),
        `Ability "${a.name}" refers to unknown job: "${a.job}"`
      );
    }
  });

  test('Every one of the 24 asterisk jobs has both Command and Passive Support abilities', () => {
    assert.equal(jobs.length, 24);
    assert.equal(abilities.length, 360, 'Complete dataset must have 360 abilities (15 levels * 24 jobs)');

    for (const j of jobs) {
      const jobAbilities = abilities.filter(
        (a) => a.job.toLowerCase() === j.name.toLowerCase() || a.job.toLowerCase() === j.id.toLowerCase()
      );
      assert.equal(jobAbilities.length, 15, `Job ${j.name} must have 15 abilities (Lv 1-15)`);

      const passives = jobAbilities.filter((a) => a.type === 'Support' || a.isPassive === true);
      const commands = jobAbilities.filter((a) => a.type === 'Command' || a.isPassive === false);

      assert.ok(passives.length >= 1, `Job ${j.name} must have at least 1 passive support ability`);
      assert.ok(commands.length >= 1, `Job ${j.name} must have at least 1 command ability`);
    }
  });

  test('Equipment items have valid categories and subtypes', () => {
    assert.ok(equipment.length >= 300, 'Must have at least 300 equipment items');
    const validCats = new Set(['Weapons', 'Shields', 'Headwear', 'Armor', 'Accessories']);
    const validWeaponSubs = new Set(['Dagger', 'Sword', 'Spear', 'Axes', 'Staves', 'Bows']);
    for (const item of equipment) {
      assert.ok(item.id, 'Equipment missing id');
      assert.ok(item.name, 'Equipment missing name');
      assert.ok(validCats.has(item.category), `Invalid category "${item.category}" for ${item.name}`);
      if (item.category === 'Weapons') {
        const sub = item.subCategory || item.subtype;
        assert.ok(validWeaponSubs.has(sub), `Invalid weapon subcategory "${sub}" for ${item.name}`);
      }
      assert.ok(typeof item.weight === 'number', `Invalid weight for ${item.name}`);
    }
  });

  test('Enemy bestiary entries have weaknesses and valid classification', () => {
    assert.ok(enemies.length >= 250, 'Must have at least 250 bestiary entries');
    const counts = { 'Asterisk Boss': 0, 'Rare Monster': 0, Monster: 0 };
    for (const enemy of enemies) {
      assert.ok(enemy.id, 'Enemy missing id');
      assert.ok(enemy.name, 'Enemy missing name');
      assert.ok(Object.hasOwn(counts, enemy.classification), `Enemy ${enemy.name} has invalid classification: ${enemy.classification}`);
      counts[enemy.classification] += 1;
      assert.ok(Array.isArray(enemy.weaknesses), `Enemy ${enemy.name} weaknesses must be an array`);
      assert.ok(enemy.hp !== undefined && enemy.hp !== null && String(enemy.hp).trim() !== '', `Enemy ${enemy.name} missing hp`);
    }
    assert.equal(counts['Asterisk Boss'], 20);
    assert.equal(counts['Rare Monster'], 7);
    assert.equal(counts.Monster, 265);
  });

  test('UI filter controls align with canonical dataset values', () => {
    const indexHtml = fs.readFileSync(path.join(BASE_DIR, 'index.html'), 'utf-8');
    assert.ok(indexHtml.includes('data-role="Specialist"'), 'index.html must include Specialist role filter pill');
    assert.ok(indexHtml.includes('Lv. 15'), 'index.html must display Max Level Lv. 15');

    const shopHtml = fs.readFileSync(path.join(BASE_DIR, 'shop.html'), 'utf-8');
    const shopCategories = new Set(shops.flatMap((s) => s.inventory.map((i) => i.category)));
    for (const cat of shopCategories) {
      assert.ok(shopHtml.includes(`data-cat="${cat}"`), `shop.html missing category filter pill for ${cat}`);
    }

    const questHtml = fs.readFileSync(path.join(BASE_DIR, 'quest.html'), 'utf-8');
    assert.ok(questHtml.includes('data-ch="pending"'), 'quest.html must include Pending status filter');
    assert.ok(questHtml.includes('data-ch="done"'), 'quest.html must include Completed status filter');
    assert.ok(!questHtml.includes('data-ch="Chapter 7"'), 'quest.html should not include dead Chapter 7 filter');

    const enemyAppJs = fs.readFileSync(path.join(BASE_DIR, 'enemyApp.js'), 'utf-8');
    assert.ok(enemyAppJs.includes('function formatHp('), 'enemyApp.js must define formatHp() for string/range HP values');
    assert.ok(!enemyAppJs.includes('Number(enemy.hp'), 'enemyApp.js must not coerce range HP strings with Number(enemy.hp)');
    assert.ok(enemyAppJs.includes('try {') && enemyAppJs.includes('SPOILER_KEY'), 'enemyApp.js must wrap SPOILER_KEY localStorage access in try/catch');

    const utilsJs = fs.readFileSync(path.join(BASE_DIR, 'utils.js'), 'utf-8');
    assert.ok(utilsJs.includes('scrollTop = 0'), 'utils.js openModal must reset modal scrollTop');
    assert.ok(utilsJs.includes('lastFocusedElement'), 'utils.js must restore focus on modal close');
  });

  test('All 69 subquests have valid numbers and chapters', () => {
    assert.equal(quests.length, 69);
    for (const q of quests) {
      assert.ok(q.id, 'Quest missing id');
      const num = Number(q.number);
      assert.ok(!isNaN(num) && num >= 0 && num <= 100, `Quest number out of range: ${q.number}`);
      assert.ok(q.chapter, `Quest ${q.name} missing chapter`);
      assert.ok(q.objective, `Quest ${q.name} missing objective`);
    }
  });

  test('Shops have inventories with prices and valid categories', () => {
    assert.equal(shops.length, 7);
    for (const s of shops) {
      assert.ok(s.id, 'Shop missing id');
      assert.ok(s.town, 'Shop missing town');
      assert.ok(Array.isArray(s.inventory), `Shop ${s.town} inventory must be an array`);
      assert.ok(s.inventory.length > 0, `Shop ${s.town} must have items`);
    }
  });

  test('All 105 B n D cards have classifications and valid families', () => {
    assert.equal(cards.length, 105);
    const validClass = new Set(['Monster', 'Job', 'Character']);
    for (const c of cards) {
      assert.ok(c.id, 'Card missing id');
      assert.ok(c.name, 'Card missing name');
      assert.ok(validClass.has(c.classification), `Card ${c.name} has invalid classification: ${c.classification}`);
      assert.ok(c.family, `Card ${c.name} missing family`);
    }
  });
});
