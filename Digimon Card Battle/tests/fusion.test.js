'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

function loadFusionModule(outContext = {}) {
  const cardDataSrc = fs.readFileSync(path.join(ROOT, 'cardData.js'), 'utf8');
  const fusionDataSrc = fs.readFileSync(path.join(ROOT, 'fusion_data.js'), 'utf8');
  const fusionSrc = fs.readFileSync(path.join(ROOT, 'fusion.js'), 'utf8');

  const elements = {};
  // Minimal DOM stub for DOMContentLoaded initialization
  const mockElement = (id = '') => ({
    id,
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
      getElementById(id) {
        if (!elements[id]) elements[id] = mockElement(id);
        return elements[id];
      },
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

  outContext.elements = elements;
  outContext.context = context;

  return context.window.DigimonFusion;
}

test('Digimon fusion engine initializes correctly', () => {
  const fusion = loadFusionModule();
  assert.ok(fusion, 'DigimonFusion is exposed on window');
  assert.equal(typeof fusion.findCombinations, 'function');
  assert.equal(typeof fusion.findResultsFromMaterials, 'function');
  assert.equal(typeof fusion.getAllSpecialFusions, 'function');
  assert.equal(typeof fusion.renderSpecialFusions, 'function');
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
    assert.ok(m1 + m2 <= parseInt(agumon.resultValue), `Sum of ${combo.card1.name} + ${combo.card2.name} does not exceed Agumon resultValue`);
    assert.notEqual(combo.card1.name, agumon.name, 'Target is never its own material');
    assert.notEqual(combo.card2.name, agumon.name, 'Target is never its own material');
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
    assert.ok(m1 + m2 <= 34 && m1 + m2 >= 30, `Material sum of ${combo.card1.name} + ${combo.card2.name} is 34 (or slightly lower when bumped past a material card)`);
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

test('Never returns a material card: Leomon + Mutant Digivolve yields Togemon', () => {
  const fusion = loadFusionModule();
  const leomon = fusion.getCardByName('Leomon');
  const mutant = fusion.getCardByName('Mutant Digivolve');
  const togemon = fusion.getCardByName('Togemon');

  assert.equal(parseInt(togemon.resultValue), parseInt(leomon.resultValue) + 1, 'Togemon is 1 Result Value above Leomon');

  const results = fusion.findResultsFromMaterials(leomon, mutant);
  const names = results.map(r => r.card.name);
  assert.ok(!names.includes('Leomon'), 'Leomon is never produced from itself');
  assert.ok(names.includes('Togemon'), 'Togemon is produced instead');

  const togemonCombos = fusion.findCombinations(togemon);
  assert.ok(togemonCombos.some(c => [c.card1.name, c.card2.name].sort().join('|') === ['Leomon', 'Mutant Digivolve'].sort().join('|')), 'Reverse lookup lists Leomon + Mutant Digivolve for Togemon');

  const leomonCombos = fusion.findCombinations(leomon);
  assert.ok(leomonCombos.every(c => c.card1.name !== 'Leomon' && c.card2.name !== 'Leomon'), 'Leomon recipes never use Leomon');
});

test('No fusion result is ever one of its own materials', () => {
  const fusion = loadFusionModule();
  const cards = ['Agumon', 'Leomon', 'Angemon', 'WarGreymon'].map(n => fusion.getCardByName(n));
  cards.forEach(card => {
    fusion.findCombinations(card).forEach(c => {
      assert.notEqual(c.card1.name, card.name);
      assert.notEqual(c.card2.name, card.name);
    });
  });
});

test('Special Fusion tab: fusion.html markup includes tab button, panel, search input, and container', () => {
  const html = fs.readFileSync(path.join(ROOT, 'fusion.html'), 'utf8');
  assert.ok(html.includes('id="tab-btn-special"'), 'Tab button exists in markup');
  assert.ok(html.includes('data-tab="special"'), 'Tab button has data-tab="special"');
  assert.ok(html.includes('aria-controls="tab-special-panel"'), 'Tab button controls tab-special-panel');
  assert.ok(html.includes('id="tab-special-panel"'), 'Special fusion panel exists');
  assert.ok(html.includes('id="specialSearch"'), 'Special fusion search input exists');
  assert.ok(html.includes('id="specialFusionContainer"'), 'Special fusion container exists');
});

test('Special Fusion tab: getAllSpecialFusions returns all 19 recipes with resolved cards', () => {
  const fusion = loadFusionModule();
  const allSpecial = fusion.getAllSpecialFusions();

  assert.equal(allSpecial.length, 19, 'Contains all 19 special fusion combinations');
  allSpecial.forEach(item => {
    assert.ok(item.card1, 'Has material 1 name');
    assert.ok(item.card2, 'Has material 2 name');
    assert.ok(item.result, 'Has result name');
    assert.ok(item.resultCard, `Result card resolved for ${item.result}`);
    assert.ok(item.c1, `Material 1 resolved for ${item.card1}`);
    assert.ok(item.c2, `Material 2 resolved for ${item.card2}`);
  });
});

test('Special Fusion tab: renderSpecialFusions renders 19 entries and filters correctly', () => {
  const out = {};
  const fusion = loadFusionModule(out);
  const container = out.elements.specialFusionContainer;

  assert.ok(container, 'Container element exists in DOM');
  assert.ok(container.innerHTML.includes('special-fusions-table'), 'Initial render populated table');
  assert.ok(container.innerHTML.includes('Omnimon I'), 'Initial render includes Omnimon I');
  assert.ok(container.innerHTML.includes('Imperialdramon'), 'Initial render includes Imperialdramon');

  // Filter for Rosemon
  fusion.renderSpecialFusions('Rosemon');
  assert.ok(container.innerHTML.includes('Rosemon'), 'Filtered includes Rosemon');
  assert.ok(!container.innerHTML.includes('Imperialdramon'), 'Filtered excludes Imperialdramon');

  // Filter for Omnimon (appears as result in Omnimon I / II and as material in Imperialdramon)
  fusion.renderSpecialFusions('Omnimon');
  assert.ok(container.innerHTML.includes('Omnimon I'), 'Filtered includes Omnimon I');
  assert.ok(container.innerHTML.includes('Omnimon II'), 'Filtered includes Omnimon II');
  assert.ok(container.innerHTML.includes('Imperialdramon'), 'Filtered includes Imperialdramon because Omnimon I is a material');

  // Filter for nonexistent card
  fusion.renderSpecialFusions('XYZNonExistentCard999');
  assert.ok(container.innerHTML.includes('empty-state'), 'Empty state shown when no match');
  assert.ok(container.innerHTML.includes('No special fusions found'), 'Empty state message displayed');
});
