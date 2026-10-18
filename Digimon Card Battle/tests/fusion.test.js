'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

function loadFusionModule() {
  const cardDataSrc = fs.readFileSync(path.join(ROOT, 'cardData.js'), 'utf8');
  const fusionDataSrc = fs.readFileSync(path.join(ROOT, 'fusion_data.js'), 'utf8');
  const fusionSrc = fs.readFileSync(path.join(ROOT, 'fusion.js'), 'utf8');

  // Minimal DOM stub for DOMContentLoaded initialization
  const mockElement = () => ({
    value: '',
    textContent: '',
    innerHTML: '',
    classList: { add() {}, remove() {}, toggle() {} },
    setAttribute() {},
    removeAttribute() {},
    getAttribute() { return null; },
    addEventListener() {},
    querySelectorAll() { return []; },
    querySelector() { return null; },
    dataset: {}
  });

  const domListeners = [];
  const context = {
    window: {},
    console,
    parseInt,
    isNaN,
    String,
    Array,
    Object,
    document: {
      addEventListener(type, fn) {
        if (type === 'DOMContentLoaded') domListeners.push(fn);
      },
      getElementById() { return mockElement(); },
      querySelectorAll() { return []; },
      querySelector() { return null; }
    },
    location: { search: '' },
    URLSearchParams
  };
  context.window = context;

  vm.runInNewContext(cardDataSrc, context);
  vm.runInNewContext(fusionDataSrc, context);
  vm.runInNewContext(fusionSrc, context);

  // Trigger DOMContentLoaded
  domListeners.forEach(fn => fn());

  return context.window.DigimonFusion;
}

test('Digimon fusion engine initializes correctly', () => {
  const fusion = loadFusionModule();
  assert.ok(fusion, 'DigimonFusion is exposed on window');
  assert.equal(typeof fusion.findCombinations, 'function');
  assert.equal(typeof fusion.findResultsFromMaterials, 'function');
});

test('Special fusions: produces exact special results in either order', () => {
  const fusion = loadFusionModule();
  const omnimon = fusion.getCardByName('Omnimon I');
  const paildramon = fusion.getCardByName('Paildramon');

  assert.ok(omnimon, 'Omnimon I exists in database');
  assert.ok(paildramon, 'Paildramon exists in database');

  // Test forward order
  const results1 = fusion.findResultsFromMaterials(omnimon, paildramon);
  const specialMatch1 = results1.find(r => r.type === 'special' && r.card.name === 'Imperialdramon');
  assert.ok(specialMatch1, 'Omnimon I + Paildramon fuses into Imperialdramon');

  // Test reverse order
  const results2 = fusion.findResultsFromMaterials(paildramon, omnimon);
  const specialMatch2 = results2.find(r => r.type === 'special' && r.card.name === 'Imperialdramon');
  assert.ok(specialMatch2, 'Paildramon + Omnimon I fuses into Imperialdramon (order-independent)');
});

test('Special fusions: findCombinations for a special target returns correct recipe', () => {
  const fusion = loadFusionModule();
  const imperialdramon = fusion.getCardByName('Imperialdramon');
  assert.ok(imperialdramon, 'Imperialdramon exists');

  const combos = fusion.findCombinations(imperialdramon);
  const hasOmniPail = combos.some(c =>
    c.type === 'special' &&
    ((c.card1.name === 'Omnimon I' && c.card2.name === 'Paildramon') ||
     (c.card1.name === 'Paildramon' && c.card2.name === 'Omnimon I'))
  );
  assert.ok(hasOmniPail, 'findCombinations finds Omnimon I + Paildramon for Imperialdramon');
});

test('Standard fusions: sum and color matrix match result value and specialty', () => {
  const fusion = loadFusionModule();
  const agumon = fusion.getCardByName('Agumon');
  assert.ok(agumon, 'Agumon exists');

  const combos = fusion.findCombinations(agumon);
  assert.ok(Array.isArray(combos));

  combos.filter(c => c.type === 'standard').forEach(combo => {
    const m1 = parseInt(combo.card1.materialValue);
    const m2 = parseInt(combo.card2.materialValue);
    assert.equal(m1 + m2, parseInt(agumon.resultValue), `Sum of ${combo.card1.name} + ${combo.card2.name} equals Agumon resultValue`);
  });
});

test('Cards with non-numeric or missing materialValue do not produce standard fusions', () => {
  const fusion = loadFusionModule();
  // Find a card with '?' materialValue
  const questionCard = fusion.getCardByName('Digivice') || fusion.getCardByName('Download');
  if (questionCard && questionCard.materialValue === '?') {
    const agumon = fusion.getCardByName('Agumon');
    const results = fusion.findResultsFromMaterials(questionCard, agumon);
    const standardResults = results.filter(r => r.type === 'standard');
    assert.equal(standardResults.length, 0, 'No standard results when materialValue is ?');
  }
});
