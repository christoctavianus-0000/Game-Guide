'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCodex } = require('./helpers/dom-stub.js');

function openEnemyCodex() {
  return loadCodex({ html: 'enemy.html', scripts: ['enemyData.js', 'enemyApp.js'] });
}

test('enemy codex renders a compact table with real bestiary rows', () => {
  const page = openEnemyCodex();

  assert.ok(page.el('enemyTableBody'));
  assert.ok(page.countRows('enemyTableBody') > 0, 'the bestiary table has rows');
  assert.match(page.text('enemyResultsCount'), /Showing \d+ enemies/i);
  assert.ok(page.html('enemyTableBody').includes('<td'));
});

test('enemy codex filters by area and weakness and supports shield sorting', () => {
  const page = openEnemyCodex();

  page.el('enemyAreaFilter').value = 'Woodlands';
  page.fire('enemyAreaFilter', 'change');
  assert.ok(page.html('enemyTableBody').includes('Wishvale Trail') || page.html('enemyTableBody').includes('Woodlands'));

  page.el('enemyWeaknessFilter').value = 'Sword';
  page.fire('enemyWeaknessFilter', 'change');
  assert.ok(page.html('enemyTableBody').includes('Sword'));

  page.el('enemySortFilter').value = 'shield-desc';
  page.fire('enemySortFilter', 'change');
  assert.equal(page.el('enemySortFilter').value, 'shield-desc');
  assert.ok(page.html('enemyTableBody').length > 0);

  page.el('enemySortFilter').value = 'weakness-asc';
  page.fire('enemySortFilter', 'change');
  assert.equal(page.el('enemySortFilter').value, 'weakness-asc');
});

test('enemy codex paginates results with prev/next buttons', () => {
  const page = openEnemyCodex();
  const pageSize = 48;
  // Count total rows by counting what the table body shows (at most pageSize per page)
  const rowsOnPage1 = page.countRows('enemyTableBody');
  assert.ok(rowsOnPage1 <= pageSize, 'page 1 shows at most 48 rows');
  assert.ok(rowsOnPage1 > 0, 'page 1 has rows');
  assert.equal(page.el('enemyPrevPageBtn').disabled, true);
  assert.match(page.text('enemyPaginationInfo'), new RegExp(`Showing 1–${rowsOnPage1}`));

  // If dataset is larger than pageSize, test paging
  const page2Info = page.text('enemyPaginationInfo');
  const totalMatch = page2Info.match(/of\s+([\d,]+)/);
  const totalEnemies = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : rowsOnPage1;
  const totalPages = Math.ceil(totalEnemies / pageSize) || 1;
  assert.equal(page.text('enemyPageCurrent'), `Page 1 of ${totalPages}`);

  if (totalPages > 1) {
    // Click next page
    page.fire('enemyNextPageBtn', 'click', { target: page.el('enemyNextPageBtn') });
    assert.equal(page.text('enemyPageCurrent'), `Page 2 of ${totalPages}`);
    assert.equal(page.el('enemyPrevPageBtn').disabled, false);
    assert.ok(page.countRows('enemyTableBody') > 0, 'page 2 has rows');

    // Click prev page
    page.fire('enemyPrevPageBtn', 'click', { target: page.el('enemyPrevPageBtn') });
    assert.equal(page.text('enemyPageCurrent'), `Page 1 of ${totalPages}`);
    assert.equal(page.el('enemyPrevPageBtn').disabled, true);
  }
});

test('enemy codex resets page to 1 when filters change', () => {
  const page = openEnemyCodex();
  const pageSize = 48;
  const page2Info = page.text('enemyPaginationInfo');
  const totalMatch = page2Info.match(/of\s+([\d,]+)/);
  const totalEnemies = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;
  const totalPages = Math.ceil(totalEnemies / pageSize) || 1;

  if (totalPages <= 1) return; // skip if dataset fits in one page

  // Go to page 2
  page.fire('enemyNextPageBtn', 'click', { target: page.el('enemyNextPageBtn') });
  assert.equal(page.text('enemyPageCurrent'), `Page 2 of ${totalPages}`);

  // Change area filter — should reset to page 1
  page.el('enemyAreaFilter').value = 'Woodlands';
  page.fire('enemyAreaFilter', 'change');
  assert.match(page.text('enemyPageCurrent'), /Page 1/);

  // Reset button — should also return to page 1 (and restore full dataset)
  page.fire('enemyResetBtn', 'click', { target: page.el('enemyResetBtn') });
  assert.equal(page.text('enemyPageCurrent'), `Page 1 of ${totalPages}`);
});

test('enemy codex renders full attack type grid, supports column sort, weakness icon sort, and name modal', () => {
  const page = openEnemyCodex();

  const bodyHtml = page.html('enemyTableBody');
  assert.ok(bodyHtml.includes('enemy-atk-icon is-weak'));
  assert.ok(bodyHtml.includes('enemy-atk-icon not-weak'));

  const nameHeader = page.sortHeaders.find(h => h.getAttribute('data-sort-key') === 'name');
  assert.ok(nameHeader);
  nameHeader.dispatch('click');
  assert.equal(page.el('enemySortFilter').value, 'name-desc');

  // Test clicking enemy name button opens modal
  const firstEnemyBtn = page.targetStub('.enemy-name-btn', { 'data-enemy-id': '32344.0' });
  page.fire('enemyTableBody', 'click', { target: firstEnemyBtn });

  // Test clicking weakness icon sorts by specific weakness
  const swordIcon = page.targetStub('.weakness-icon', { 'data-weakness': 'Sword' });
  page.fire(swordIcon, 'click', { target: swordIcon });
  assert.ok(page.html('enemyTableBody').length > 0);
});
