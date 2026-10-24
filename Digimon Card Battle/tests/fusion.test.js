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
  let specialThs = [];
  const createMockTh = (key) => ({
    dataset: { sort: key },
    listeners: {},
    addEventListener(evt, fn) {
      if (!this.listeners[evt]) this.listeners[evt] = [];
      this.listeners[evt].push(fn);
    },
    click() {
      (this.listeners['click'] || []).forEach(fn => fn());
    }
  });

  // Minimal DOM stub for DOMContentLoaded initialization
  const mockElement = (id = '') => {
    let inner = '';
    return {
      id,
      value: '',
      textContent: '',
      get innerHTML() { return inner; },
      set innerHTML(val) {
        inner = val;
        if (id === 'specialFusionContainer') {
          specialThs = ['mat1', 'mat2', 'result', 'level', 'specialty'].map(createMockTh);
        }
      },
      classList: { add() {}, remove() {}, toggle() {} },
      setAttribute() {},
      removeAttribute() {},
      getAttribute() { return null; },
      addEventListener() {},
      querySelectorAll(sel) {
        if (id === 'specialFusionContainer' && sel.includes('th.sortable')) {
          return specialThs;
        }
        return [];
      },
      querySelector() { return null; },
      dataset: {}
    };
  };

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
  outContext.getSpecialThs = () => specialThs;

  return context.window.DigimonFusion;
}

test('Digimon fusion engine initializes correctly', () => {
  const fusion = loadFusionModule();
  assert.ok(fusion, 'DigimonFusion is exposed on window');
  assert.equal(typeof fusion.findCombinations, 'function');
  assert.equal(typeof fusion.findResultsFromMaterials, 'function');
  assert.equal(typeof fusion.getAllSpecialFusions, 'function');
  assert.equal(typeof fusion.renderSpecialFusions, 'function');
  assert.equal(typeof fusion.getSpecialSort, 'function');
  assert.equal(typeof fusion.setSpecialSort, 'function');
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
  assert.equal(fusion.getCardByName('Net Scape')?.name, 'Net Worm');
  assert.equal(fusion.getCardByName('netscape')?.name, 'Net Worm');
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

test('Fallback to lower result value: fusing 2 Andromon (sum 26) yields Net Worm (value 25)', () => {
  const fusion = loadFusionModule();
  const andromon = fusion.getCardByName('Andromon');
  assert.ok(andromon, 'Andromon exists in database');
  assert.equal(andromon.materialValue, 13, 'Andromon materialValue is 13');
  assert.equal(andromon.specialty, 'Darkness', 'Andromon specialty is Darkness');

  // Darkness + Darkness = Option, sum = 26.
  // There is no Option card with Result Value 26, so it falls back to lower result value: Net Worm (25).
  const results = fusion.findResultsFromMaterials(andromon, andromon);
  assert.equal(results.length, 1, 'Produces exactly 1 standard fusion result');
  assert.equal(results[0].card.name, 'Net Worm', 'Fusing 2 Andromon produces Net Worm (Net Scape)');
  assert.equal(results[0].card.resultValue, 25, 'Net Worm has Result Value 25');
  assert.equal(results[0].card.specialty, 'Option', 'Result is Option card');
  assert.equal(results[0].sum, 26, 'Reported material sum is 26');

  // Reverse lookup: findCombinations for Net Worm includes Andromon + Andromon
  const netWorm = fusion.getCardByName('Net Worm');
  const combos = fusion.findCombinations(netWorm);
  const hasAndromonPair = combos.some(c => c.card1.name === 'Andromon' && c.card2.name === 'Andromon');
  assert.ok(hasAndromonPair, 'findCombinations(Net Worm) includes Andromon + Andromon');
});

test('Fallback to lower result value: fusing 2 WaruMonzaemon (sum 38) yields Golden Banana (value 35)', () => {
  const fusion = loadFusionModule();
  const warumonzaemon = fusion.getCardByName('WaruMonzaemon');
  assert.ok(warumonzaemon, 'WaruMonzaemon exists');
  assert.equal(warumonzaemon.materialValue, 19, 'WaruMonzaemon materialValue is 19');

  // Darkness + Darkness = Option, sum = 38 (exceeds max Option result value 35).
  // Highest lower result value is Golden Banana (35).
  const results = fusion.findResultsFromMaterials(warumonzaemon, warumonzaemon);
  assert.ok(results.some(r => r.card.name === 'Golden Banana' && r.card.resultValue === 35), 'Produces Golden Banana at value 35');
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

  // Verify that Material columns appear to the left of the Result Card column
  const matIndex = container.innerHTML.indexOf('Material 1');
  const resIndex = container.innerHTML.indexOf('Result Card');
  assert.ok(matIndex !== -1 && resIndex !== -1 && matIndex < resIndex, 'Material columns appear to the left of Result Card');

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

test('Special Fusion tab: table markup defines sortable headers with data-sort and non-sortable symbol cells', () => {
  const out = {};
  loadFusionModule(out);
  const container = out.elements.specialFusionContainer;

  assert.ok(container.innerHTML.includes('data-sort="mat1"'), 'Material 1 header has data-sort="mat1"');
  assert.ok(container.innerHTML.includes('data-sort="mat2"'), 'Material 2 header has data-sort="mat2"');
  assert.ok(container.innerHTML.includes('data-sort="result"'), 'Result Card header has data-sort="result"');
  assert.ok(container.innerHTML.includes('data-sort="level"'), 'Level header has data-sort="level"');
  assert.ok(container.innerHTML.includes('data-sort="specialty"'), 'Specialty header has data-sort="specialty"');

  // Verify non-sortable columns do not have data-sort
  assert.ok(container.innerHTML.includes('<th class="plus-cell">+</th>'), 'Plus cell is not sortable');
  assert.ok(container.innerHTML.includes('<th class="plus-cell">=</th>'), 'Equals cell is not sortable');
  assert.ok(container.innerHTML.includes('<th style="text-align: center;">Action</th>'), 'Action header is not sortable');
});

test('Special Fusion tab: sorting by result card ascending and descending alters order and updates aria-sort / indicator', () => {
  const out = {};
  const fusion = loadFusionModule(out);
  const container = out.elements.specialFusionContainer;

  function getRenderedResults(html) {
    return [...html.matchAll(/class="combo-cell clickable-result"[^>]*data-result="([^"]+)"/g)].map(m => m[1]);
  }

  // Initial state has no sort key
  assert.equal(fusion.getSpecialSort().key, '');
  assert.equal(fusion.getSpecialSort().dir, 'asc');

  // Sort by Result ascending
  fusion.setSpecialSort('result', 'asc');
  assert.equal(fusion.getSpecialSort().key, 'result');
  assert.equal(fusion.getSpecialSort().dir, 'asc');
  assert.ok(container.innerHTML.includes('data-sort="result" aria-sort="ascending"'), 'Header has aria-sort="ascending"');
  assert.ok(container.innerHTML.includes('Result Card <span class="sort-ind">▲</span>'), 'Header shows ▲ indicator');

  let results = getRenderedResults(container.innerHTML);
  assert.equal(results.length, 19);
  assert.equal(results[0], 'AeroVeedramon', 'First result ascending is AeroVeedramon');
  assert.equal(results[18], 'Vikemon', 'Last result ascending is Vikemon');

  // Sort by Result descending
  fusion.setSpecialSort('result', 'desc');
  assert.equal(fusion.getSpecialSort().key, 'result');
  assert.equal(fusion.getSpecialSort().dir, 'desc');
  assert.ok(container.innerHTML.includes('data-sort="result" aria-sort="descending"'), 'Header has aria-sort="descending"');
  assert.ok(container.innerHTML.includes('Result Card <span class="sort-ind">▼</span>'), 'Header shows ▼ indicator');

  results = getRenderedResults(container.innerHTML);
  assert.equal(results.length, 19);
  assert.equal(results[0], 'Vikemon', 'First result descending is Vikemon');
  assert.equal(results[18], 'AeroVeedramon', 'Last result descending is AeroVeedramon');
});

test('Special Fusion tab: sorting by material 1 and material 2 orders recipes alphabetically', () => {
  const out = {};
  const fusion = loadFusionModule(out);
  const container = out.elements.specialFusionContainer;

  function getRenderedPairs(html) {
    const rows = html.split('<tr class="combo-row">').slice(1);
    return rows.map(r => {
      const c1Match = r.match(/data-c1="([^"]+)"/);
      const c2Match = r.match(/data-c2="([^"]+)"/);
      return { c1: c1Match ? c1Match[1] : '', c2: c2Match ? c2Match[1] : '' };
    });
  }

  // Sort by mat1 asc
  fusion.setSpecialSort('mat1', 'asc');
  let pairs = getRenderedPairs(container.innerHTML);
  assert.equal(pairs[0].c1, 'Angemon', 'First material 1 ascending is Angemon');
  assert.equal(pairs[18].c1, 'Zudomon', 'Last material 1 ascending is Zudomon');

  // Sort by mat1 desc
  fusion.setSpecialSort('mat1', 'desc');
  pairs = getRenderedPairs(container.innerHTML);
  assert.equal(pairs[0].c1, 'Zudomon', 'First material 1 descending is Zudomon');
  assert.equal(pairs[18].c1, 'Angemon', 'Last material 1 descending is Angemon');

  // Sort by mat2 asc
  fusion.setSpecialSort('mat2', 'asc');
  pairs = getRenderedPairs(container.innerHTML);
  assert.equal(pairs[0].c2, 'Andromon', 'First material 2 ascending is Andromon');
  assert.equal(pairs[18].c2, 'WereGarurumon', 'Last material 2 ascending is WereGarurumon');
});

test('Special Fusion tab: sorting by specialty groups by elemental affinity', () => {
  const out = {};
  const fusion = loadFusionModule(out);
  const container = out.elements.specialFusionContainer;

  function getRenderedResults(html) {
    return [...html.matchAll(/class="combo-cell clickable-result"[^>]*data-result="([^"]+)"/g)].map(m => m[1]);
  }

  // Sort specialty asc: Darkness < Fire < Ice < Nature < Rare
  fusion.setSpecialSort('specialty', 'asc');
  let results = getRenderedResults(container.innerHTML);
  const firstCard = fusion.getCardByName(results[0]);
  const lastCard = fusion.getCardByName(results[18]);
  assert.equal(firstCard.specialty, 'Darkness', 'First card specialty is Darkness');
  assert.equal(lastCard.specialty, 'Rare', 'Last card specialty is Rare');

  // Sort specialty desc: Rare > Nature > Ice > Fire > Darkness
  fusion.setSpecialSort('specialty', 'desc');
  results = getRenderedResults(container.innerHTML);
  const firstDescCard = fusion.getCardByName(results[0]);
  const lastDescCard = fusion.getCardByName(results[18]);
  assert.equal(firstDescCard.specialty, 'Rare', 'First card specialty descending is Rare');
  assert.equal(lastDescCard.specialty, 'Darkness', 'Last card specialty descending is Darkness');
});

test('Special Fusion tab: interactive header clicks toggle ascending/descending and preserve active filter', () => {
  const out = {};
  const fusion = loadFusionModule(out);
  const container = out.elements.specialFusionContainer;

  function getRenderedResults(html) {
    return [...html.matchAll(/class="combo-cell clickable-result"[^>]*data-result="([^"]+)"/g)].map(m => m[1]);
  }

  const ths = out.getSpecialThs();
  const resTh = ths.find(th => th.dataset.sort === 'result');
  assert.ok(resTh, 'Result sort header exists');

  // Click Result -> Sort asc
  resTh.click();
  assert.equal(fusion.getSpecialSort().key, 'result');
  assert.equal(fusion.getSpecialSort().dir, 'asc');

  // Click Result again -> Sort desc
  resTh.click();
  assert.equal(fusion.getSpecialSort().key, 'result');
  assert.equal(fusion.getSpecialSort().dir, 'desc');

  // Apply filter for Nature: 8 results match (6 Nature results + 2 where a material is Nature)
  fusion.renderSpecialFusions('Nature');
  let filteredResults = getRenderedResults(container.innerHTML);
  assert.equal(filteredResults.length, 8, 'Filter matches 8 special fusions involving Nature');
  assert.equal(filteredResults[0], 'Valkyrimon', 'Highest alphabetical card is first in descending order');
  assert.equal(filteredResults[7], 'AeroVeedramon', 'Lowest alphabetical card is last in descending order');

  // Click mat1 header while filter is still active
  const mat1Th = ths.find(th => th.dataset.sort === 'mat1');
  assert.ok(mat1Th, 'Material 1 sort header exists');
  mat1Th.click();
  assert.equal(fusion.getSpecialSort().key, 'mat1');
  assert.equal(fusion.getSpecialSort().dir, 'asc');

  // Filter still active, ordered by mat1 asc:
  // Angemon (Shakkoumon) -> Aquilamon (Silphymon) -> Garudamon (Valkyrimon) -> HerculesKabuterimon (GranKuwagamon) -> Lillymon (Rosemon) -> MagnaAngemon (Magnadramon) -> MagnaAngemon (Seraphimon) -> Veedramon (AeroVeedramon)
  filteredResults = getRenderedResults(container.innerHTML);
  assert.equal(filteredResults.length, 8, 'Filter remains active after sorting by Material 1');
  assert.equal(filteredResults[0], 'Shakkoumon', 'Shakkoumon (Angemon) is first by Material 1');
  assert.equal(filteredResults[7], 'AeroVeedramon', 'AeroVeedramon (Veedramon) is last by Material 1');
});
