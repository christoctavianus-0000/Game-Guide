'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCodex } = require('./helpers/dom-stub.js');

function openCharacterCodex(options = {}) {
  return loadCodex({
    html: 'character.html',
    scripts: ['characterData.js', 'characterApp.js'],
    ...options
  });
}

test('character page renders real character and job cards', () => {
  const page = openCharacterCodex();

  assert.ok(page.el('metricCharacterCount').textContent !== '0');
  assert.ok(page.el('metricJobCount').textContent !== '0');
  assert.ok(page.el('characterGrid').children.length > 0);
  assert.ok(page.el('characterGrid').innerHTML.includes('Phenn'));
  assert.ok(page.el('characterGrid').innerHTML.includes('Hunter'));
});

test('character modal includes battle skills and links to the skill codex', () => {
  const page = openCharacterCodex();
  const battleCharacter = page.context.characterData.characters.find(character =>
    (character.skills || []).some(skill => skill.type === 'Battle')
  );

  assert.ok(battleCharacter, 'a character with a Battle skill exists');

  const card = page.el('characterGrid').children.find(child => child.innerHTML.includes(battleCharacter.name));
  assert.ok(card, 'character card is rendered');

  card.dispatch('click', { target: card });
  assert.ok(page.html('characterSkillList').includes('Battle'));
  assert.ok(page.html('characterSkillList').includes('index.html?skill='));
  assert.ok(page.html('characterSkillList').includes(battleCharacter.skills.find(skill => skill.type === 'Battle').name));
});

test('battle skills follow the workbook record, including Alfyn and H\'aanit', () => {
  const page = openCharacterCodex();
  const alfyn = page.context.characterData.characters.find(character => character.name === 'Alfyn');
  const haanit = page.context.characterData.characters.find(character => character.name === "H'aanit");

  assert.ok(alfyn, 'Alfyn exists');
  assert.ok(haanit, "H'aanit exists");
  assert.equal(
    JSON.stringify((alfyn.skills || []).filter(skill => skill.type === 'Battle').map(skill => skill.name)),
    JSON.stringify(['First Aid', 'Icicle', 'Rehabilitate', 'Amputation', 'Empoison', 'Vivify', 'Vigorous Strike'])
  );
  assert.equal(
    JSON.stringify((haanit.skills || []).filter(skill => skill.type === 'Battle').map(skill => skill.name)),
    JSON.stringify(['Rain of Arrows', 'Summon Linde', 'Thunderbird', 'True Strike', 'Ensnare', 'Arrowstorm', 'Take Aim'])
  );

  const battleCharacters = page.context.characterData.characters.filter(character => (character.skills || []).some(skill => skill.type === 'Battle'));

  assert.ok(battleCharacters.length > 0, 'at least one character has a battle skill');
  assert.ok(
    battleCharacters.some(character => (character.skills || []).filter(skill => skill.type === 'Battle').length > 1),
    'the workbook includes characters with multiple battle skills, such as Alfyn'
  );
});

test('character records keep each character job metadata', () => {
  const page = openCharacterCodex();
  const phenn = page.context.characterData.characters.find(character => character.name === 'Phenn');

  assert.ok(phenn, 'Phenn exists in the character set');
  assert.equal(phenn.job, 'Hunter');
  assert.equal(phenn.title, 'Hunter');
});

test('job export keeps battle skills when the job label and skill share the row', () => {
  const page = openCharacterCodex();
  const warrior = page.context.characterData.jobs.find(job => job.name === 'Warrior');

  assert.ok(warrior, 'Warrior job exists');
  assert.ok((warrior.skills || []).some(skill => skill.type === 'Battle'), 'Warrior keeps its battle skill');
  assert.equal(
    JSON.stringify((warrior.skills || []).filter(skill => skill.type === 'Battle').map(skill => skill.name)),
    JSON.stringify(['Cross Strike', 'Abide', 'Spearhead', 'Helmcleaver', 'Counter Posture', 'Assault', 'Upending Strike'])
  );
});

test('character page opens the matching modal from a hash link', async () => {
  const page = openCharacterCodex({ hash: '#phenn' });
  // modal opens after preloadAssets resolves (microtask)
  await Promise.resolve();

  assert.ok(page.el('characterDetailModal').classList.contains('active'));
  assert.equal(page.el('characterModalName').textContent, 'Phenn');
  assert.ok(page.html('characterSkillList').includes('Shield of Hope'));
});
