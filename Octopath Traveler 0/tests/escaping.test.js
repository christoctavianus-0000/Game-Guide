'use strict';

/**
 * Untrusted-data tests: dataset values must render as text, never as markup.
 *
 * Skill and equipment text comes from generated workbook data, so a name or
 * description containing HTML must be escaped before it reaches innerHTML.
 * These tests feed hostile records through the real apps and assert, for every
 * rendered region, that the raw payload is absent and its escaped form present.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCodex } = require('./helpers/dom-stub.js');

const HOSTILE_SKILL = {
  id: 'x1"><script>alert(1)</script>',
  name: '<img src=x onerror=alert(1)>',
  detail: '</p><script>alert(2)</script>',
  category: 'Physical',
  subType: '<b>Sub</b>',
  icon: 'x" onerror="alert(3)',
  sp: 12,
  target: '<svg onload=alert(4)>',
  turns: '<x>,<y>',
  ratios: [120, 240, 360, 480],
  hits: [1, 2, 3, 4],
  ailments: [{ name: '<i>ail</i>', value: '<v>', efficacy: '<e>' }]
};

const HOSTILE_EQUIPMENT = {
  id: 'w1"><b>',
  recordType: 'equipment',
  kind: 'Weapon',
  name: '<img src=x onerror=alert(5)>',
  type: 'Sword',
  icon: 'x" onerror="alert(6)',
  stats: { hp: 0, sp: 0, patk: 90, pdef: 0, matk: 0, mdef: 0, spd: 0, crt: 0, acc: 0, eva: 0 },
  effect: '</p><script>alert(7)</script>',
  source: '<b>Wishvale</b>',
  cost: '<x>',
  costValue: 5
};

const HOSTILE_ENEMY = {
  id: 'e1"><script>alert(8)</script>',
  name: '<img src=x onerror=alert(9)>',
  area: '<b>Ruins</b>',
  subArea: '<i>Depths</i>',
  type: 'Regular',
  level: '50',
  shields: '4',
  weaknesses: ['Sword', 'Fire'],
  steal: '<x>Steal</x>',
  drop: '<y>Drop</y>',
  immunities: '<z>Poison</z>',
  skills: [{ name: '<skill>Slash</skill>', type: '<b>Phys</b>' }]
};

/** Escape a payload exactly the way the apps are required to. */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Every payload must appear only in its escaped form inside this region.
 * @param {string} html rendered innerHTML
 * @param {string} label region name for the assertion message
 * @param {string[]} payloads raw hostile values expected in this region
 */
function assertEscaped(html, label, payloads) {
  payloads.forEach(raw => {
    assert.ok(!html.includes(raw), `${label}: raw payload absent (${raw})`);
    assert.ok(html.includes(escapeHtml(raw)), `${label}: escaped payload present (${raw})`);
  });
}

test('skill cards escape hostile dataset values', () => {
  const page = loadCodex({ html: 'index.html', scripts: ['app.js'], globals: { skillData: [HOSTILE_SKILL] } });

  const card = page.cardElements('skillsGrid')[0];
  assert.ok(card, 'the hostile skill still renders a card');

  assertEscaped(card.innerHTML, 'skill card', [
    HOSTILE_SKILL.name,
    HOSTILE_SKILL.detail,
    HOSTILE_SKILL.subType,
    HOSTILE_SKILL.target,
    HOSTILE_SKILL.id,   // interpolated into the data-fav-id attribute
    HOSTILE_SKILL.icon  // interpolated into the img src attribute
  ]);
});

test('the skill modal escapes hostile dataset values', () => {
  const page = loadCodex({ html: 'index.html', scripts: ['app.js'], globals: { skillData: [HOSTILE_SKILL] } });

  const card = page.cardElements('skillsGrid')[0];
  card.dispatch('click', { target: page.targetStub('.not-a-fav-button') });

  assertEscaped(page.html('modalIconBadge'), 'modal icon badge', [HOSTILE_SKILL.icon]);
  assertEscaped(page.html('modalAilmentsList'), 'ailments list', [
    HOSTILE_SKILL.ailments[0].name,
    HOSTILE_SKILL.ailments[0].value,
    HOSTILE_SKILL.ailments[0].efficacy
  ]);
  assertEscaped(page.html('modalSpecsGrid'), 'specs grid', [
    HOSTILE_SKILL.target,
    HOSTILE_SKILL.turns,
    HOSTILE_SKILL.subType
  ]);
  // Safe literals must render verbatim (escaping must not mangle normal data)
  assert.ok(page.html('modalSpecsGrid').includes(HOSTILE_SKILL.category), 'safe category renders verbatim');

  // Fields written through textContent keep their original characters safely
  assert.equal(page.text('modalSkillName'), HOSTILE_SKILL.name);
  assert.equal(page.text('modalDescription'), HOSTILE_SKILL.detail);
});

test('equipment cards and rows escape hostile dataset values', () => {
  const page = loadCodex({ html: 'equipment.html', scripts: ['equipmentApp.js'], globals: { equipmentData: [HOSTILE_EQUIPMENT] } });

  assertEscaped(page.html('equipGrid'), 'equipment card', [
    HOSTILE_EQUIPMENT.name,
    HOSTILE_EQUIPMENT.effect,
    HOSTILE_EQUIPMENT.cost,  // rendered as the price text
    HOSTILE_EQUIPMENT.icon   // interpolated into the img src attribute
  ]);

  page.fire('viewToggleBtn', 'click', { target: page.el('viewToggleBtn') });
  assertEscaped(page.html('equipTableBody'), 'equipment table row', [
    HOSTILE_EQUIPMENT.name,
    HOSTILE_EQUIPMENT.source
  ]);
});

test('the equipment modal escapes hostile dataset values', () => {
  const page = loadCodex({ html: 'equipment.html', scripts: ['equipmentApp.js'], globals: { equipmentData: [HOSTILE_EQUIPMENT] } });

  page.fire('equipGrid', 'click', { target: page.targetStub('[data-id]', { 'data-id': HOSTILE_EQUIPMENT.id }) });

  assertEscaped(page.html('modalIconBadge'), 'modal icon badge', [HOSTILE_EQUIPMENT.icon]);
  assertEscaped(page.html('modalSpecsGrid'), 'modal specs grid', [
    HOSTILE_EQUIPMENT.source,
    HOSTILE_EQUIPMENT.cost
  ]);
  // Safe literals must render verbatim (escaping must not mangle normal data)
  assert.ok(page.html('modalSpecsGrid').includes(HOSTILE_EQUIPMENT.type), 'safe type renders verbatim');

  // Fields written through textContent keep their original characters safely
  assert.equal(page.text('modalItemName'), HOSTILE_EQUIPMENT.name);
  assert.equal(page.text('modalEffectText'), HOSTILE_EQUIPMENT.effect);
});

test('enemy chunk table and modal escape hostile dataset values', () => {
  const page = loadCodex({ html: 'enemy.html', scripts: ['enemyApp.js'], globals: { enemyData: [HOSTILE_ENEMY] } });

  const chunkHtml = page.html('enemyChunksGrid');
  assertEscaped(chunkHtml, 'enemy chunk table', [
    HOSTILE_ENEMY.name,
    HOSTILE_ENEMY.subArea,
    HOSTILE_ENEMY.area,
    HOSTILE_ENEMY.steal,
    HOSTILE_ENEMY.drop
  ]);

  page.fire('enemyChunksGrid', 'click', {
    target: page.targetStub('.enemy-name-btn', { 'data-enemy-id': HOSTILE_ENEMY.id })
  });

  const modalHtml = page.html('enemyModalContent');
  assertEscaped(modalHtml, 'enemy modal', [
    HOSTILE_ENEMY.name,
    HOSTILE_ENEMY.area,
    HOSTILE_ENEMY.subArea,
    HOSTILE_ENEMY.steal,
    HOSTILE_ENEMY.drop,
    HOSTILE_ENEMY.immunities,
    HOSTILE_ENEMY.skills[0].name,
    HOSTILE_ENEMY.skills[0].type
  ]);
});