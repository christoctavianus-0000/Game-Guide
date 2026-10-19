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

test('Special fusions: all 19 GameFAQs recipes produce correct results in both orders', () => {
  const fusion = loadFusionModule();
  const rawData = JSON.parse(fs.readFileSync(path.join(ROOT, 'fusion_data.json'), 'utf8'));

  assert.equal(rawData.special_fusions.length, 19, 'Exactly 19 special fusions in database');

  rawData.special_fusions.forEach(sf => {
    const c1 = fusion.getCardByName(sf.card1);
    const c2 = fusion.getCardByName(sf.card2);
    const expected = fusion.getCardByName(sf.result);

    assert.ok(c1, `Card 1 exists: ${sf.card1}`);
    assert.ok(c2, `Card 2 exists: ${sf.card2}`);
    assert.ok(expected, `Result card exists: ${sf.result}`);

    // Forward order
    const res1 = fusion.findResultsFromMaterials(c1, c2);
    const match1 = res1.find(r => r.type === 'special' && r.card.name === expected.name);
    assert.ok(match1, `Special fusion forward: ${c1.name} + ${c2.name} => ${expected.name}`);

    // Reverse order
    const res2 = fusion.findResultsFromMaterials(c2, c1);
    const match2 = res2.find(r => r.type === 'special' && r.card.name === expected.name);
    assert.ok(match2, `Special fusion reverse: ${c2.name} + ${c1.name} => ${expected.name}`);

    // findCombinations for the target finds this recipe
    const combos = fusion.findCombinations(expected);
    const foundRecipe = combos.some(c =>
      c.type === 'special' &&
      ((c.card1.name === c1.name && c.card2.name === c2.name) ||
       (c.card1.name === c2.name && c.card2.name === c1.name))
    );
    assert.ok(foundRecipe, `findCombinations for ${expected.name} finds ${c1.name} + ${c2.name}`);
  });
});

test('GameFAQs Basic Fusion Phoenixmon example: Result 34 correctly produces valid Red combinations', () => {
  const fusion = loadFusionModule();
  const phoenixmon = fusion.getCardByName('Phoenixmon');
  assert.ok(phoenixmon, 'Phoenixmon exists in database');
  assert.equal(phoenixmon.materialValue, 17, 'Phoenixmon materialValue is 17');
  assert.equal(phoenixmon.resultValue, 34, 'Phoenixmon resultValue is 34');

  const combos = fusion.findCombinations(phoenixmon);
  assert.ok(combos.length > 0, 'Phoenixmon has valid standard combinations');

  combos.filter(c => c.type === 'standard').forEach(combo => {
    const m1 = parseInt(combo.card1.materialValue);
    const m2 = parseInt(combo.card2.materialValue);
    assert.equal(m1 + m2, 34, `Material sum of ${combo.card1.name} + ${combo.card2.name} is 34`);
  });
});

test('Search aliases: resolves GameFAQs guide spelling variants to canonical cards', () => {
  const fusion = loadFusionModule();
  assert.equal(fusion.getCardByName('Omnimon 1')?.name, 'Omnimon I');
  assert.equal(fusion.getCardByName('Omnimon 2')?.name, 'Omnimon II');
  assert.equal(fusion.getCardByName('Sylphymon')?.name, 'Silphymon');
  assert.equal(fusion.getCardByName('H-Kabuterimon')?.name, 'HerculesKabuterimon');
  assert.equal(fusion.getCardByName('Diablomon')?.name, 'Diaboromon');
  assert.equal(fusion.getCardByName('Orgemon')?.name, 'Ogremon');
  assert.equal(fusion.getCardByName('Monocromon')?.name, 'Monochromon');
  assert.equal(fusion.getCardByName('Braciomon')?.name, 'Brachiomon');
  assert.equal(fusion.getCardByName('Gigidramon')?.name, 'Gigadramon');
});

test('Cards with non-numeric or missing materialValue do not produce standard fusions', () => {
  const fusion = loadFusionModule();
  const questionCards = ['Wild Sevens', "Rosemon's Lure", 'Download Digivolve', 'Veemon'];
  const agumon = fusion.getCardByName('Agumon');

  questionCards.forEach(name => {
    const card = fusion.getCardByName(name);
    if (card) {
      assert.equal(card.materialValue, '?', `${name} has '?' materialValue`);
      const results = fusion.findResultsFromMaterials(card, agumon);
      const standardResults = results.filter(r => r.type === 'standard');
      assert.equal(standardResults.length, 0, `No standard results when ${name} is used as material`);
    }
  });
});
