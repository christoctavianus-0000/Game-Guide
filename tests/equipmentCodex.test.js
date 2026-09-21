'use strict';

/**
 * Regression tests for the Equipment Codex (equipment.html + equipmentApp.js).
 *
 * Expected values are derived from equipmentData.json wherever possible, so
 * these tests fail if the app and the generated dataset disagree.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCodex, ROOT } = require('./helpers/dom-stub.js');

const equipment = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'equipmentData.json'), 'utf8').replace(/^\uFEFF/, '')
);

const attackOf = record => Math.max(record.stats.patk || 0, record.stats.matk || 0);
const defenseOf = record => Math.max(record.stats.pdef || 0, record.stats.mdef || 0);
const groupOf = record => (record.kind === 'Weapon' ? 'Weapon' : (record.type === 'Accessories' ? 'Accessories' : 'Armor'));

function openEquipmentCodex() {
  return loadCodex({ html: 'equipment.html', scripts: ['equipmentData.js', 'equipmentApp.js'] });
}

function clickTab(page, category) {
  page.fire('categoryTabs', 'click', { target: page.targetStub('.cat-tab', { 'data-category': category }) });
}

/** Click a card/row by id, as event delegation would. */
function clickItem(page, containerId, id) {
  page.fire(containerId, 'click', { target: page.targetStub('[data-id]', { 'data-id': id }) });
}

test('renders metrics for every equipment group', () => {
  const page = openEquipmentCodex();
  const counts = { Weapon: 0, Armor: 0, Accessories: 0 };
  equipment.forEach(record => counts[groupOf(record)]++);

  assert.equal(page.text('metricTotal'), String(equipment.length));
  assert.equal(page.text('metricWeapons'), String(counts.Weapon));
  assert.equal(page.text('metricArmor'), String(counts.Armor));
  assert.equal(page.text('metricAccessories'), String(counts.Accessories));
  assert.equal(page.text('catCountAll'), String(equipment.length));
  assert.equal(page.text('resultsCount'), `Showing ${equipment.length} items`);
});

test('starts on All Equipment and pages 48 items at a time', () => {
  const page = openEquipmentCodex();
  const totalPages = Math.ceil(equipment.length / 48);

  assert.equal(page.countCards('equipGrid'), 48);
  assert.equal(page.text('pageCurrent'), `Page 1 of ${totalPages}`);
  assert.equal(page.text('paginationInfo'), `Showing 1–48 of ${equipment.length}`);
  assert.equal(page.el('prevPageBtn').disabled, true);

  page.fire('nextPageBtn', 'click', { target: page.el('nextPageBtn') });
  assert.equal(page.text('pageCurrent'), `Page 2 of ${totalPages}`);
  assert.equal(page.text('paginationInfo'), 'Showing 49–96 of 610');
});

test('category tabs scope the item counts', () => {
  const page = openEquipmentCodex();

  clickTab(page, 'Weapon');
  assert.equal(page.text('resultsCount'), 'Showing 348 items');
  assert.equal(page.el('subtypeChipsWrap').children.length, 9, 'weapon subtype chips');

  clickTab(page, 'Accessories');
  assert.equal(page.text('resultsCount'), 'Showing 136 items');
  assert.equal(page.el('subtypeChipsWrap').children.length, 1, 'accessory chip list');

  clickTab(page, 'All');
  assert.equal(page.text('resultsCount'), 'Showing 610 items');
});

test('stat + minimum filter narrows to the expected rows', () => {
  const page = openEquipmentCodex();
  const expected = equipment.filter(r => (r.stats.patk || 0) >= 300).length;

  page.el('statFilter').value = 'patk';
  page.fire('statFilter', 'change');
  page.el('minStatFilter').value = '300';
  page.fire('minStatFilter', 'change');

  assert.equal(page.text('resultsCount'), `Showing ${expected} items`);
  assert.equal(page.countCards('equipGrid'), expected);
  assert.equal(expected, 36, 'dataset contains 36 items with PATK 300+');
});

test('the table view mirrors the filtered set and hides the grid', () => {
  const page = openEquipmentCodex();

  page.el('statFilter').value = 'patk';
  page.fire('statFilter', 'change');
  page.el('minStatFilter').value = '300';
  page.fire('minStatFilter', 'change');

  page.fire('viewToggleBtn', 'click', { target: page.el('viewToggleBtn') });

  assert.equal(page.el('equipGrid').style.display, 'none');
  assert.equal(page.el('equipTableWrap').style.display, 'block');
  assert.equal(page.countRows('equipTableBody'), 36);
});

test('table headers sort and stay in sync with the Sort By select', () => {
  const page = openEquipmentCodex();
  const header = page.sortHeaders.find(h => h.getAttribute('data-sort-key') === 'matk');

  header.dispatch('click', { target: header });
  assert.equal(page.el('sortFilter').value, 'matk-desc');
  assert.equal(header.classList.contains('sort-active'), true);
  assert.equal(header.classList.contains('sort-desc'), true);

  header.dispatch('click', { target: header });
  assert.equal(page.el('sortFilter').value, 'matk-asc');
  assert.equal(header.classList.contains('sort-asc'), true);
});

test('sorting by attack power matches the dataset maximum', () => {
  const page = openEquipmentCodex();
  const expected = equipment.slice().sort((a, b) => attackOf(b) - attackOf(a))[0];

  page.el('sortFilter').value = 'attack-desc';
  page.fire('sortFilter', 'change');

  const first = page.html('equipGrid');
  const firstName = (first.match(/card-skill-name">([^<]+)</) || [])[1];
  assert.equal(firstName, expected.name);
});

test('items without a price sort last regardless of direction', () => {
  const page = openEquipmentCodex();

  // Unpriced items are pushed past every priced item, so while 287 priced
  // items exist, page 1 must contain only priced rows in either direction.
  // Price digits are locale-formatted, so match any non-dash cell.
  const priceCells = () =>
    [...page.html('equipTableBody').matchAll(/<td class="num">([^<]*)<\/td>/g)].map(m => m[1]);

  page.fire('viewToggleBtn', 'click', { target: page.el('viewToggleBtn') });

  page.el('sortFilter').value = 'cost-asc';
  page.fire('sortFilter', 'change');
  let cells = priceCells();
  assert.equal(cells.length, 48, 'one price cell per row');
  assert.equal(cells.filter(c => c === '—').length, 0, 'no unpriced rows ascending');

  page.el('sortFilter').value = 'cost-desc';
  page.fire('sortFilter', 'change');
  cells = priceCells();
  assert.equal(cells.filter(c => c === '—').length, 0, 'no unpriced rows descending');

  const unpriced = equipment.filter(r => r.costValue === null).length;
  assert.equal(unpriced, equipment.length - 287, 'dataset price coverage unchanged');
});

test('bookmarks use their own storage key and toggle from the modal', () => {
  const page = openEquipmentCodex();
  const first = equipment[0];

  const favStub = page.targetStub('.card-fav-btn', { 'data-fav-id': first.id });
  page.fire('equipGrid', 'click', { target: favStub });

  assert.equal(page.text('favCount'), 'Bookmarks (1)');
  assert.equal(page.store.get('octo0_equip_favs'), JSON.stringify([first.id]));

  clickItem(page, 'equipGrid', first.id);
  assert.equal(page.el('detailModal').classList.contains('active'), true);
  assert.equal(page.text('modalItemName'), first.name);
  assert.equal(page.text('modalType'), first.type);
  assert.equal(page.text('modalFavBtn'), '★ Bookmarked');

  page.fire('modalFavBtn', 'click', { target: page.el('modalFavBtn') });
  assert.equal(page.text('favCount'), 'Bookmarks (0)');
  assert.equal(page.text('modalFavBtn'), '☆ Add to Bookmarks');

  page.fire('modalDoneBtn', 'click', { target: page.el('modalDoneBtn') });
  assert.equal(page.el('detailModal').classList.contains('active'), false);
});

test('a stat-bearing item renders stat tiles; an effect-only item does not', () => {
  const page = openEquipmentCodex();

  const withStats = equipment.find(r => Object.values(r.stats).some(v => v > 0));
  clickItem(page, 'equipGrid', withStats.id);
  const tiles = (page.html('modalStatsGrid').match(/class="equip-stat"/g) || []).length;
  assert.ok(tiles > 0, 'stat tiles rendered for an item with stats');
  assert.ok(page.html('modalStatsGrid').includes('Phys. Atk.'), 'stat tiles use full stat labels');

  const effectOnly = equipment.find(r => Object.values(r.stats).every(v => v === 0));
  assert.ok(effectOnly, 'dataset contains an effect-only item');
  clickItem(page, 'equipGrid', effectOnly.id);
  assert.ok(page.html('modalStatsGrid').includes('equip-stat empty'), 'empty branch used');
  assert.equal(page.text('modalItemName'), effectOnly.name);
});

test('reset clears stat threshold and paging', () => {
  const page = openEquipmentCodex();

  page.el('statFilter').value = 'patk';
  page.fire('statFilter', 'change');
  page.el('minStatFilter').value = '300';
  page.fire('minStatFilter', 'change');
  page.fire('nextPageBtn', 'click', { target: page.el('nextPageBtn') });

  page.fire('resetFiltersBtn', 'click', { target: page.el('resetFiltersBtn') });

  assert.equal(page.el('statFilter').value, 'all');
  assert.equal(page.el('minStatFilter').value, '0');
  assert.equal(page.text('resultsCount'), 'Showing 610 items');
  assert.equal(page.text('pageCurrent'), 'Page 1 of 13');
});