'use strict';

/**
 * Regression tests for the NPC Codex (npc.html + npcApp.js).
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const { loadCodex } = require('./helpers/dom-stub.js');

function openNpcCodex(options) {
  return loadCodex(Object.assign({
    html: 'npc.html',
    scripts: ['npcData.js', 'npcApp.js']
  }, options || {}));
}

function countRows(page) {
  return (page.html('npcChunksGrid').match(/class="npc-row"/g) || []).length;
}

test('renders metrics for NPCs and areas', () => {
  const page = openNpcCodex();
  assert.ok(Number(page.text('npcMetricTotal')) > 0, 'NPC metric populated');
  assert.ok(Number(page.text('npcMetricAreas')) > 0, 'Area metric populated');
  assert.ok(Number(page.text('npcCatCountAll')) === Number(page.text('npcMetricTotal')), 'All tab count matches total');
});

test('populates area chunks with npc rows', () => {
  const page = openNpcCodex();
  const grid = page.html('npcChunksGrid');
  assert.ok(/class="shop-chunk\b/.test(grid), 'renders chunk cards');
  const rows = countRows(page);
  assert.ok(rows > 0, 'renders npc rows');
  assert.ok(rows <= Number(page.text('npcMetricTotal')), 'rows do not exceed total');
});

test('area filter updates displayed rows', () => {
  const page = openNpcCodex();
  const select = page.el('npcAreaFilter');
  select.value = 'Wishvale';
  page.fire('npcAreaFilter', 'change', { target: select });
  const rows = countRows(page);
  assert.ok(rows > 0, 'Wishvale area has NPCs');
  assert.equal(page.text('npcResultsCount'), `Showing ${rows} NPCs`);
});

test('type tab counts match dataset', () => {
  const page = openNpcCodex();
  const fame = Number(page.text('npcCatCountFame'));
  const power = Number(page.text('npcCatCountPower'));
  const wealth = Number(page.text('npcCatCountWealth'));
  const total = Number(page.text('npcMetricTotal'));
  assert.ok(fame > 0 && power > 0 && wealth > 0, 'all type tabs populated');
  assert.equal(fame + power + wealth, total, 'type counts sum to total');
});

test('npcData entries expose modal fields', () => {
  const page = openNpcCodex();
  const data = vm.runInContext('npcData', page.context);
  const sample = data.find(n => n.invite);
  assert.ok(sample, 'at least one NPC has an invite');
  assert.ok(typeof sample.inviteDesc === 'string', 'inviteDesc present');
  const leader = data.find(n => n.adds && n.adds.length);
  assert.ok(leader, 'at least one leader NPC has battle adds');
  assert.equal(leader.adds[0].type, 'Add', 'adds keep type Add');
});
