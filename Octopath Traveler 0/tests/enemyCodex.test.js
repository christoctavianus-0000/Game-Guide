'use strict';

/**
 * Regression tests for the Enemy Codex (enemy.html + enemyApp.js).
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCodex } = require('./helpers/dom-stub.js');

function openEnemyCodex() {
  return loadCodex({ html: 'enemy.html', scripts: ['enemyData.js', 'enemyApp.js'] });
}

function countRows(page) {
  return (page.html('enemyChunksGrid').match(/class="enemy-row"/g) || []).length;
}

test('renders metrics for enemies and areas', () => {
  const page = openEnemyCodex();
  assert.ok(Number(page.text('enemyMetricTotal')) > 0, 'Enemy metric populated');
  assert.ok(Number(page.text('enemyMetricAreas')) > 0, 'Area metric populated');
  assert.ok(Number(page.text('enemyCatCountAll')) === Number(page.text('enemyMetricTotal')), 'All tab count matches total');
});

test('populates area chunks with enemy rows', () => {
  const page = openEnemyCodex();
  const grid = page.html('enemyChunksGrid');
  assert.ok(/class="shop-chunk\b/.test(grid), 'renders chunk cards');
  const rows = countRows(page);
  assert.ok(rows > 0, 'renders enemy rows');
  assert.ok(rows <= Number(page.text('enemyMetricTotal')), 'rows do not exceed total');
});

test('area filter updates displayed rows', () => {
  const page = openEnemyCodex();
  const select = page.el('enemyAreaFilter');
  select.value = 'Wishvale';
  page.fire('enemyAreaFilter', 'change', { target: select });
  const rows = countRows(page);
  assert.ok(rows > 0, 'Wishvale area has enemies');
  assert.equal(page.text('enemyResultsCount'), `Showing ${rows} enemies`);
});

test('type tab counts match dataset', () => {
  const page = openEnemyCodex();
  const regular = Number(page.text('enemyCatCountRegular'));
  const boss = Number(page.text('enemyCatCountBoss'));
  const elite = Number(page.text('enemyCatCountElite'));
  const total = Number(page.text('enemyMetricTotal'));
  assert.ok(regular > 0 && boss > 0 && elite > 0, 'all type tabs populated');
  assert.equal(regular + boss + elite, total, 'type counts sum to total');
});

test('enemyData entries expose modal fields', () => {
  const page = openEnemyCodex();
  const data = page.window().enemyData;
  const sample = data.find(e => e.invite);
  assert.ok(sample, 'at least one enemy has an invite');
  assert.ok(typeof sample.inviteDesc === 'string', 'inviteDesc present');
  const leader = data.find(e => e.adds && e.adds.length);
  assert.ok(leader, 'at least one leader enemy has battle adds');
  assert.equal(leader.adds[0].type, 'Add', 'adds keep type Add');
});
