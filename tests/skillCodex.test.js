'use strict';

/**
 * Regression tests for the Skill Codex (index.html + app.js).
 *
 * Expected values are derived from skillData.json wherever possible, so these
 * tests fail if the app and the generated dataset disagree.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCodex, ROOT } = require('./helpers/dom-stub.js');

const skills = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'skillData.json'), 'utf8').replace(/^\uFEFF/, '')
);

function openSkillCodex(globals) {
  return loadCodex({ html: 'index.html', scripts: ['skillData.js', 'app.js'], globals });
}

/** Click a category tab, as the bubbling DOM would. */
function clickTab(page, category) {
  const target = page.targetStub('.cat-tab', { 'data-category': category });
  page.fire('categoryTabs', 'click', { target });
}

const inCategory = category => skills.filter(s => s.category === category);
const maxRatio = skill => Math.max(...(skill.ratios || [0]));

test('renders header metrics and tab badges from the dataset', () => {
  const page = openSkillCodex();

  assert.equal(page.text('metricTotal'), String(skills.length));
  ['Physical', 'Elemental', 'Support', 'Passive'].forEach(category => {
    const expected = String(inCategory(category).length);
    assert.equal(page.text(`metric${category}`), expected, `metric pill for ${category}`);
    assert.equal(page.text(`catCount${category}`), expected, `tab badge for ${category}`);
  });
  assert.equal(page.text('catCountAll'), String(skills.length));
});

test('starts on All and pages 48 skills at a time', () => {
  const page = openSkillCodex();
  const allSkills = skills;

  assert.equal(page.text('resultsCount'), `Showing ${allSkills.length} skills`);
  assert.equal(page.countChildren('skillsGrid'), 48);
  assert.equal(page.el('prevPageBtn').disabled, true);
  assert.equal(page.text('pageCurrent'), `Page 1 of ${Math.ceil(allSkills.length / 48)}`);
  assert.equal(page.text('paginationInfo'), `Showing 1–48 of ${allSkills.length}`);
});

test('category tabs switch the dataset and reset paging', () => {
  const page = openSkillCodex();
  clickTab(page, 'All');

  assert.equal(page.text('resultsCount'), `Showing ${skills.length} skills`);
  assert.equal(page.text('pageCurrent'), 'Page 1 of 16');

  page.el('nextPageBtn').dispatch('click', { target: page.el('nextPageBtn') });
  assert.equal(page.text('paginationInfo'), 'Showing 49–96 of 760');
});

test('subtype chips match the active category', () => {
  const page = openSkillCodex();
  assert.equal(page.el('subtypeChipsWrap').children.length, 5, 'All-category chips');

  clickTab(page, 'Physical');
  assert.equal(page.el('subtypeChipsWrap').children.length, 12, 'Physical subtypes');

  clickTab(page, 'Elemental');
  assert.equal(page.el('subtypeChipsWrap').children.length, 8, 'Elemental subtypes');
});

test('SP filter applies the documented ranges', () => {
  const page = openSkillCodex();
  const freeSkills = skills.filter(s => (s.sp || 0) === 0).length;

  page.el('spFilter').value = '0';
  page.fire('spFilter', 'change');
  assert.equal(page.text('resultsCount'), `Showing ${freeSkills} skills`);

  const expensive = skills.filter(s => (s.sp || 0) >= 31).length;
  page.el('spFilter').value = '31+';
  page.fire('spFilter', 'change');
  assert.equal(page.text('resultsCount'), `Showing ${expensive} skills`);
});

test('sorting by SP descending puts the most expensive skill first', () => {
  const page = openSkillCodex();
  const expected = skills.slice().sort((a, b) => (b.sp || 0) - (a.sp || 0))[0];

  page.el('sortFilter').value = 'sp-desc';
  page.fire('sortFilter', 'change');

  const firstCard = page.cardElements('skillsGrid')[0].innerHTML;
  assert.ok(firstCard.includes(expected.name), `expected ${expected.name} first`);
});

test('sorting by max potency matches the dataset maximum', () => {
  const page = openSkillCodex();
  const expected = inCategory('Physical').slice().sort((a, b) => maxRatio(b) - maxRatio(a))[0];

  page.el('sortFilter').value = 'potency-desc';
  page.fire('sortFilter', 'change');

  const firstCard = page.cardElements('skillsGrid')[0].innerHTML;
  assert.ok(firstCard.includes(expected.name), `expected ${expected.name} first`);
});

test('search filters the rendered cards after the debounce', async () => {
  const page = openSkillCodex();
  const target = inCategory('Physical')[0];

  page.el('skillSearchInput').value = target.name;
  page.fire('skillSearchInput', 'input');
  await new Promise(resolve => setTimeout(resolve, 220));

  const cards = page.cardElements('skillsGrid');
  assert.ok(cards.length >= 1, 'search returned at least one card');
  assert.ok(cards[0].innerHTML.includes(target.name));
  assert.equal(page.el('clearSearchBtn').style.display, 'block');
});

test('opening a skill renders boost scaling, ailments, and specs', () => {
  const page = openSkillCodex();
  const skillsById = new Map(skills.map(s => [s.id, s]));

  // Switch to Physical category to find a skill with hits and ailments
  clickTab(page, 'Physical');

  // Pick from the rendered page: only page-1 cards exist in the DOM
  const card = page.cardElements('skillsGrid').find(el => {
    const skill = skillsById.get(el.getAttribute('data-id'));
    return skill && skill.hits.some(h => h > 0) && skill.ailments.length > 0;
  });
  assert.ok(card, 'a Physical skill with hits and ailments is rendered on page 1');

  const target = skillsById.get(card.getAttribute('data-id'));

  card.dispatch('click', { target: page.targetStub('.not-a-fav-button') });

  assert.equal(page.el('detailModal').classList.contains('active'), true);
  assert.equal(page.text('modalSkillName'), target.name);
  assert.equal(page.text('modalCategory'), target.category);
  assert.equal(page.text('modalSubType'), target.subType);
  assert.equal(page.text('modalDescription'), target.detail);
  assert.equal(page.el('modalBoostSection').style.display, 'block');
  assert.ok(page.html('modalBoostTbody').includes(`${target.ratios[0]}%`));
  assert.equal(page.el('modalAilmentsSection').style.display, 'block');
  assert.ok(page.html('modalAilmentsList').includes(target.ailments[0].name));
  assert.equal((page.html('modalSpecsGrid').match(/spec-item/g) || []).length, 4);

  page.fire('modalDoneBtn', 'click', { target: page.el('modalDoneBtn') });
  assert.equal(page.el('detailModal').classList.contains('active'), false);
});

test('bookmarks persist under octo0_skill_favs', () => {
  const page = openSkillCodex();
  const target = inCategory('Physical')[0];
  const card = page.cardElements('skillsGrid').find(el => el.getAttribute('data-id') === target.id);

  // app.js wires the favourite button per card rather than delegating
  card.querySelector('.card-fav-btn').dispatch('click', { target: page.targetStub('.card-fav-btn') });

  assert.equal(page.text('favCount'), 'Bookmarks (1)');
  assert.equal(page.store.get('octo0_skill_favs'), JSON.stringify([target.id]));
});

test('reset restores the default category, filters, and paging', () => {
  const page = openSkillCodex();

  page.el('spFilter').value = '31+';
  page.fire('spFilter', 'change');
  page.fire('resetFiltersBtn', 'click', { target: page.el('resetFiltersBtn') });

  assert.equal(page.el('skillSearchInput').value, '');
  assert.equal(page.el('spFilter').value, 'all');
  assert.equal(page.text('resultsCount'), `Showing ${skills.length} skills`);
  assert.equal(page.text('pageCurrent'), `Page 1 of ${Math.ceil(skills.length / 48)}`);
});

test('skill modal shows character or job source links when the skill belongs to a workbook source', async () => {
  const data = {
    characterJobData: {
      skillIndex: {
        'First Aid': [{
          type: 'character',
          id: 'stia',
          label: 'Stia - Architect',
          href: 'character.html#stia'
        }]
      }
    }
  };

  const page = openSkillCodex(data);
  clickTab(page, 'Support');

  const target = skills.find(skill => skill.name === 'First Aid');
  assert.ok(target, 'First Aid is in the dataset');

  page.el('skillSearchInput').value = target.name;
  page.fire('skillSearchInput', 'input');
  await new Promise(resolve => setTimeout(resolve, 220));

  const card = page.cardElements('skillsGrid').find(el => el.getAttribute('data-id') === target.id);
  assert.ok(card, 'First Aid card appears when searched in the Support tab');

  card.dispatch('click', { target: page.targetStub('.not-a-fav-button') });

  assert.ok(page.html('modalSource').includes('href="character.html#stia"'));
  assert.ok(page.html('modalSource').includes('Stia - Architect'));
});