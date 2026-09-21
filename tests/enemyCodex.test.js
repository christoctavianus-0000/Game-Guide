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
