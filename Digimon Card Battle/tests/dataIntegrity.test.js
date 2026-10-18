'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const CATEGORY_FILES = [
  'fireCards.json',
  'iceCards.json',
  'natureCards.json',
  'darknessCards.json',
  'rareCards.json',
  'partnerCards.json',
  'optionCards.json'
];

function readJson(filename) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, filename), 'utf8'));
}

function readScriptValue(filename, propertyName) {
  const source = fs.readFileSync(path.join(ROOT, filename), 'utf8');
  const context = { window: {} };
  vm.runInNewContext(source, context);
  return context.window[propertyName];
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value));
}

test('category files, allCards.json, and CARD_DATABASE stay synchronized', () => {
  const cardsByCategory = CATEGORY_FILES.flatMap(readJson);
  const allCards = readJson('allCards.json');
  const browserCards = readScriptValue('cardData.js', 'CARD_DATABASE');

  assert.deepEqual(allCards, cardsByCategory);
  assert.deepEqual(normalize(browserCards), allCards);
  assert.equal(allCards.length, 301);

  allCards.forEach(card => {
    assert.ok(Object.hasOwn(card, 'materialValue'), `${card.name} has a material value`);
    assert.ok(Object.hasOwn(card, 'resultValue'), `${card.name} has a result value`);
    if (card.localIcon) {
      assert.ok(fs.existsSync(path.join(ROOT, card.localIcon)), `${card.name} artwork exists`);
    }
  });
});

test('fusion browser data matches its JSON inspection copy', () => {
  const jsonData = readJson('fusion_data.json');
  const browserData = readScriptValue('fusion_data.js', 'FUSION_DATA');

  assert.deepEqual(normalize(browserData), jsonData);
});

test('all Digimon UI vector icons exist in assets/ui', () => {
  const uiIcons = [
    'circle.svg',
    'triangle.svg',
    'x.svg',
    'digivice.svg',
    'nav-cards.svg',
    'nav-fusion.svg',
    'spec-all.svg',
    'spec-fire.svg',
    'spec-ice.svg',
    'spec-nature.svg',
    'spec-darkness.svg',
    'spec-rare.svg',
    'spec-partner.svg',
    'spec-option.svg'
  ];

  uiIcons.forEach(icon => {
    const iconPath = path.join(ROOT, 'assets', 'ui', icon);
    assert.ok(fs.existsSync(iconPath), `assets/ui/${icon} exists`);
  });
});

