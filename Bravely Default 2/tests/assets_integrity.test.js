import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_DIR = path.resolve(__dirname, '..');

describe('Assets Integrity', () => {
  const jobs = JSON.parse(fs.readFileSync(path.join(BASE_DIR, 'jobData.json'), 'utf-8'));
  const cards = JSON.parse(fs.readFileSync(path.join(BASE_DIR, 'bndCardData.json'), 'utf-8'));

  test('All 24 job icon PNG files exist in assets/jobs/ and are non-empty', () => {
    for (const job of jobs) {
      const relPath = job.iconPath;
      const fullPath = path.join(BASE_DIR, relPath);
      assert.ok(fs.existsSync(fullPath), `Icon not found for job ${job.name} at ${relPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 100, `Icon file for ${job.name} is too small / empty: ${stats.size} bytes`);
    }
  });

  test('All 24 UI SVG icons exist in assets/icons/ui/ with valid SVG tags', () => {
    const requiredIcons = [
      'bd2-crest.svg',
      'nav-jobs.svg',
      'nav-abilities.svg',
      'nav-equipment.svg',
      'nav-bestiary.svg',
      'nav-quests.svg',
      'nav-shops.svg',
      'nav-bnd.svg',
      'sword.svg',
      'dagger.svg',
      'axe.svg',
      'spear.svg',
      'bow.svg',
      'staff.svg',
      'shield.svg',
      'armor.svg',
      'accessory.svg',
      'fire.svg',
      'water.svg',
      'wind.svg',
      'earth.svg',
      'lightning.svg',
      'light.svg',
      'dark.svg'
    ];

    const uiDir = path.join(BASE_DIR, 'assets', 'icons', 'ui');
    for (const icon of requiredIcons) {
      const p = path.join(uiDir, icon);
      assert.ok(fs.existsSync(p), `Missing SVG UI icon: ${icon}`);
      const content = fs.readFileSync(p, 'utf-8');
      assert.ok(content.includes('<svg') && content.includes('</svg>'), `${icon} must contain <svg> tags`);
    }
  });

  test('All 105 B n D card SVGs exist in assets/cards/', () => {
    const cardsDir = path.join(BASE_DIR, 'assets', 'cards');
    assert.ok(fs.existsSync(cardsDir), 'assets/cards/ directory must exist');

    for (const card of cards) {
      const p = path.join(cardsDir, `${card.id}.svg`);
      assert.ok(fs.existsSync(p), `Card SVG missing for ${card.name} (${card.id}.svg)`);
      const content = fs.readFileSync(p, 'utf-8');
      assert.ok(content.includes('<svg') && content.includes('</svg>'), `${card.id}.svg must contain valid SVG`);
    }
  });
});
