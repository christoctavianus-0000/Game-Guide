'use strict';

/**
 * Regression tests for the Shop Codex (shop.html + shopApp.js).
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('vm');
const path = require('node:path');
const { loadCodex, ROOT } = require('./helpers/dom-stub.js');

function openShopCodex(options) {
  return loadCodex(Object.assign({
    html: 'shop.html',
    scripts: ['shopData.js', 'equipmentData.js', 'shopApp.js']
  }, options || {}));
}

function getAllItems(page) {
  return vm.runInContext('shopData.allItems', page.context);
}

test('renders metrics for shop items and locations', () => {
  const page = openShopCodex();
  const allItems = getAllItems(page);
  assert.equal(Number(page.text('metricItemCount')), allItems.length);
  assert.ok(Number(page.text('metricLocationCount')) > 0);
});

test('starts on all items and populates table rows', () => {
  const page = openShopCodex();
  const allItems = getAllItems(page);
  const rowCount = page.countChildren('shopTableBody');
  // tableBody uses innerHTML to render <tr> rows; stub parses <article> only,
  // so check via innerHTML regex
  const trCount = (page.html('shopTableBody').match(/<tr\b/g) || []).length;
  assert.ok(trCount > 0, 'should render table rows');
  assert.ok(trCount <= 48, 'should not exceed page size');
  assert.ok(trCount <= allItems.length, 'should not exceed total items');
});

test('location filter updates displayed items', () => {
  const page = openShopCodex();
  const allItems = getAllItems(page);
  const select = page.el('shopLocationFilter');

  select.value = 'Wishvale';
  page.fire('shopLocationFilter', 'change', { target: select });

  const wishvaleCount = allItems.filter(i => i.location === 'Wishvale').length;
  assert.equal(page.text('shopResultsCount'), `Showing ${wishvaleCount} items`);
});

test('search filters items by name', () => {
  const page = openShopCodex();
  const allItems = getAllItems(page);
  const input = page.el('shopSearchInput');

  input.value = 'Necronomicon';
  page.fire('shopSearchInput', 'input', { target: input });

  // Debounce is 200ms; wait for it
  return new Promise(resolve => setTimeout(() => {
    const matchCount = allItems.filter(i =>
      i.name.toLowerCase().indexOf('necronomicon') !== -1
    ).length;
    const suffix = matchCount === 1 ? 'item' : 'items';
    assert.equal(page.text('shopResultsCount'), `Showing ${matchCount} ${suffix}`);
    resolve();
  }, 250));
});

test('deep-link with ?location= pre-selects a location', () => {
  const page = openShopCodex({ search: '?location=Flamesgrace (Frostlands)' });
  const allItems = getAllItems(page);

  const count = allItems.filter(i => i.location === 'Flamesgrace (Frostlands)').length;
  assert.equal(page.text('shopResultsCount'), `Showing ${count} items`);
});

test('table columns are in order: Location, Item, Price', () => {
  const fs = require('fs');
  const html = fs.readFileSync(path.join(ROOT, 'shop.html'), 'utf8');
  const keys = [...html.matchAll(/data-sort-key="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(keys, ['location', 'name', 'price']);
});

test('reset button clears all filters and sorting', () => {
  const page = openShopCodex();
  const allItems = getAllItems(page);
  const select = page.el('shopLocationFilter');
  select.value = 'Flamesgrace (Frostlands)';
  page.fire('shopLocationFilter', 'change', { target: select });
  const filtered = allItems.filter(i => i.location === 'Flamesgrace (Frostlands)');
  assert.ok(filtered.length < allItems.length, 'filtered before reset');

  page.fire('shopResetBtn', 'click', { target: page.el('shopResetBtn') });
  assert.equal(page.text('shopResultsCount'), `Showing ${allItems.length} items`);
});
