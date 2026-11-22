import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_DIR = path.resolve(__dirname, '..');

function makeElement(tag, attrs = {}) {
  const attributes = Object.assign({}, attrs);
  const classes = new Set(String(attributes.class || '').split(/\s+/).filter(Boolean));
  const dataset = {};
  for (const [k, v] of Object.entries(attributes)) {
    if (k.startsWith('data-')) {
      const camel = k.slice(5).replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
      dataset[camel] = String(v);
    }
  }

  let focused = false;
  const element = {
    tagName: String(tag || 'div').toUpperCase(),
    id: attributes.id || '',
    innerHTML: '',
    textContent: '',
    value: attributes.value || '',
    style: {},
    dataset,
    children: [],
    scrollTop: 99,
    _listeners: {},
    classList: {
      add: (n) => classes.add(n),
      remove: (n) => classes.delete(n),
      contains: (n) => classes.has(n),
      toggle: (n, force) => {
        const on = force === undefined ? !classes.has(n) : Boolean(force);
        if (on) classes.add(n);
        else classes.delete(n);
        return on;
      }
    },
    setAttribute(k, v) {
      attributes[k] = String(v);
      if (k.startsWith('data-')) {
        const camel = k.slice(5).replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
        dataset[camel] = String(v);
      }
    },
    getAttribute(k) {
      return Object.prototype.hasOwnProperty.call(attributes, k) ? attributes[k] : null;
    },
    removeAttribute(k) {
      delete attributes[k];
    },
    addEventListener(type, fn) {
      (this._listeners[type] = this._listeners[type] || []).push(fn);
    },
    appendChild(child) {
      this.children.push(child);
      return child;
    },
    querySelector(sel) {
      if (sel === '.sort-icon') return { textContent: '' };
      if (sel === '.modal-window') return element._modalWindow || null;
      if (sel === '.modal-close-btn') return element._modalCloseBtn || null;
      return null;
    },
    focus() {
      focused = true;
    },
    isFocused() {
      return focused;
    },
    closest() {
      return null;
    },
    scrollIntoView() {},
    dispatch(type, event = {}) {
      const payload = Object.assign({ target: element, preventDefault() {} }, event);
      (this._listeners[type] || []).forEach((fn) => fn(payload));
    }
  };
  return element;
}

function parseAttributes(attrText) {
  const result = {};
  const pattern = /([\w-]+)(?:="([^"]*)")?/g;
  let match;
  while ((match = pattern.exec(attrText))) {
    result[match[1]] = match[2] === undefined ? '' : match[2];
  }
  return result;
}

function loadBd2Page(htmlFile, scripts, initialStorage = {}) {
  const html = fs.readFileSync(path.join(BASE_DIR, htmlFile), 'utf-8');
  const byId = new Map();
  const bySelector = new Map();

  // Extract elements with id="..."
  const idRegex = /<([a-z0-9-]+)\b([^>]*\bid="([^"]+)"[^>]*)>/gi;
  let m;
  while ((m = idRegex.exec(html))) {
    const [, tag, attrStr, id] = m;
    byId.set(id, makeElement(tag, parseAttributes(attrStr)));
  }

  // Extract filter pills inside known filter containers
  const pillContainers = ['class-filters', 'shop-cat-filters', 'role-filters', 'chapter-filters', 'type-filters'];
  for (const cid of pillContainers) {
    const regex = new RegExp(`id="${cid}"[^>]*>([\\s\\S]*?)<\\/div>`, 'i');
    const block = html.match(regex);
    if (block) {
      const pills = [];
      const btnRegex = /<button\b([^>]*)>/gi;
      let bm;
      while ((bm = btnRegex.exec(block[1]))) {
        pills.push(makeElement('button', parseAttributes(bm[1])));
      }
      bySelector.set(`#${cid} .filter-pill`, pills);
    }
  }

  // Extract th[data-sort]
  const thList = [];
  const thRegex = /<th\b([^>]*\bdata-sort="[^"]+"[^>]*)>/gi;
  while ((m = thRegex.exec(html))) {
    thList.push(makeElement('th', parseAttributes(m[1])));
  }
  if (thList.length > 0) {
    for (const tid of ['shop-table', 'abilities-table', 'equip-table']) {
      bySelector.set(`#${tid} th[data-sort]`, thList);
    }
  }

  // Wire modal child elements for utils.js
  const backdrop = byId.get('modal-backdrop');
  const modalWindow = makeElement('div', { class: 'modal-window' });
  modalWindow.scrollTop = 120;
  const modalCloseBtn = makeElement('button', { class: 'modal-close-btn' });
  if (backdrop) {
    backdrop._modalWindow = modalWindow;
    backdrop._modalCloseBtn = modalCloseBtn;
  }

  const triggerBtn = makeElement('button', { id: 'trigger-btn' });
  const docListeners = {};
  const store = new Map(Object.entries(initialStorage));

  const document = {
    readyState: 'complete',
    activeElement: triggerBtn,
    body: { style: {} },
    contains: () => true,
    getElementById: (id) => byId.get(id) || null,
    createElement: (tag) => makeElement(tag),
    querySelectorAll: (sel) => bySelector.get(sel) || [],
    addEventListener(type, fn) {
      (docListeners[type] = docListeners[type] || []).push(fn);
    },
    dispatch(type, event = {}) {
      (docListeners[type] || []).forEach((fn) => fn(event));
    }
  };

  const windowObj = {
    location: { search: '' },
    document,
    BD2: null
  };

  const localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k)
  };

  const context = vm.createContext({
    window: windowObj,
    document,
    localStorage,
    URLSearchParams,
    Set,
    setTimeout,
    clearTimeout,
    Number,
    String,
    Array,
    Object,
    Math,
    JSON,
    console
  });

  for (const script of scripts) {
    const code = fs.readFileSync(path.join(BASE_DIR, script), 'utf-8');
    vm.runInContext(code, context);
  }

  document.dispatch('DOMContentLoaded');

  return {
    html,
    context,
    window: windowObj,
    document,
    byId,
    bySelector,
    triggerBtn,
    modalWindow,
    modalCloseBtn,
    store
  };
}

describe('Bravely Default II UI Regressions & Bug Fixes', () => {
  test('Bestiary renders real HP values (no NaN), separates Asterisk/Rare/Regular bosses, and renders Resistances/Immunities/Notes in modal', () => {
    const page = loadBd2Page('enemy.html', ['utils.js', 'enemyData.js', 'enemyApp.js']);
    const grid = page.byId.get('enemies-container');
    assert.ok(grid.innerHTML.length > 0, 'Enemies grid should render entries');
    assert.ok(!grid.innerHTML.includes('NaN'), 'Enemy cards must never display HP: NaN');
    assert.equal(page.byId.get('results-count').textContent, '292');

    const pills = page.bySelector.get('#class-filters .filter-pill');
    const findPill = (cls) => pills.find((p) => p.dataset.class === cls);

    // Filter to Asterisk Bosses (20)
    findPill('boss').dispatch('click');
    assert.equal(page.byId.get('results-count').textContent, '20');
    assert.ok(grid.innerHTML.includes('Selene &amp; Dag'));
    assert.ok(!grid.innerHTML.includes('Mushussu'), 'Rare boss should not be inside Asterisk Boss filter');

    // Filter to Rare Bosses (7)
    findPill('rare').dispatch('click');
    assert.equal(page.byId.get('results-count').textContent, '7');
    assert.ok(grid.innerHTML.includes('Mushussu'));

    // Filter to Regular Monsters (265)
    findPill('regular').dispatch('click');
    assert.equal(page.byId.get('results-count').textContent, '265');

    // Open modal on boss-selene-dag and verify Resistances, Immunities, Notes, and HP appear cleanly
    const detailBtn = makeElement('button', { class: 'enemy-detail-btn', 'data-id': 'boss-selene-dag' });
    grid.dispatch('click', { target: { closest: (s) => (s.includes('enemy-detail-btn') ? detailBtn : null) } });
    const modalHtml = page.byId.get('modal-content').innerHTML;
    assert.ok(modalHtml.includes('Selene: 1,840 / Dag: 1,568'));
    assert.ok(modalHtml.includes('Resistances:'));
    assert.ok(modalHtml.includes('Status Immunities:'));
    assert.ok(modalHtml.includes('Strategy &amp; Field Notes'));
    assert.ok(!modalHtml.includes('NaN'));
  });

  test('Shops Codex category filters match real shopData categories across all towns', () => {
    const page = loadBd2Page('shop.html', ['utils.js', 'shopData.js', 'shopApp.js']);
    const pills = page.bySelector.get('#shop-cat-filters .filter-pill');
    const resultsCount = page.byId.get('results-count');
    const townSelect = page.byId.get('town-select');

    // Halcyonia is default town and sells Consumables, Weapons, Shields, Headwear, Armor, Accessories
    townSelect.value = 'halcyonia';
    townSelect.dispatch('change', { target: townSelect });

    for (const cat of ['Consumable', 'Weapons', 'Shields', 'Headwear', 'Armor', 'Accessories']) {
      const pill = pills.find((p) => p.dataset.cat === cat);
      assert.ok(pill, `Missing shop filter pill for ${cat}`);
      pill.dispatch('click');
      assert.ok(Number(resultsCount.textContent) > 0, `Category ${cat} should match items in Halcyonia`);
    }
  });

  test('Jobs Codex exposes Specialist role pill returning all 4 Specialist jobs and displays Lv. 15 cap', () => {
    const page = loadBd2Page('index.html', ['utils.js', 'jobData.js', 'abilityData.js', 'app.js']);
    assert.ok(page.html.includes('Lv. 15'), 'Jobs hero stat chip must reflect Lv. 15 cap');

    const pills = page.bySelector.get('#role-filters .filter-pill');
    const specPill = pills.find((p) => p.dataset.role === 'Specialist');
    assert.ok(specPill, 'Jobs role filter must include Specialist pill');
    specPill.dispatch('click');
    assert.equal(page.byId.get('results-count').textContent, '4');
    assert.ok(page.byId.get('jobs-container').innerHTML.includes('Bravebearer'));
  });

  test('Side Quests Codex removes empty Chapter 7 filter and supports Pending / Completed status filters', () => {
    const page = loadBd2Page('quest.html', ['utils.js', 'questData.js', 'questApp.js'], {
      bd2_completed_quests: JSON.stringify(['quest-000', 'quest-001'])
    });
    const pills = page.bySelector.get('#chapter-filters .filter-pill');
    assert.equal(pills.find((p) => p.dataset.ch === 'Chapter 7'), undefined, 'Chapter 7 filter must not exist');

    const donePill = pills.find((p) => p.dataset.ch === 'done');
    const pendingPill = pills.find((p) => p.dataset.ch === 'pending');
    assert.ok(donePill && pendingPill, 'Must include pending and done status pills');

    donePill.dispatch('click');
    assert.equal(page.byId.get('results-count').textContent, '2');

    pendingPill.dispatch('click');
    assert.equal(page.byId.get('results-count').textContent, '67');
  });

  test('Modal utilities reset scrollTop, toggle aria-hidden, and restore focus on close', () => {
    const page = loadBd2Page('index.html', ['utils.js']);
    page.window.BD2.initModal();
    const backdrop = page.byId.get('modal-backdrop');
    assert.equal(backdrop.getAttribute('aria-hidden'), 'true');

    page.window.BD2.openModal('<p>Test Modal</p>');
    assert.equal(backdrop.getAttribute('aria-hidden'), 'false');
    assert.equal(page.modalWindow.scrollTop, 0, 'Opening modal must reset scrollTop to 0');
    assert.equal(page.modalCloseBtn.isFocused(), true, 'Opening modal must focus close button');

    page.window.BD2.closeModal();
    assert.equal(backdrop.getAttribute('aria-hidden'), 'true');
    assert.equal(page.triggerBtn.isFocused(), true, 'Closing modal must restore focus to triggering element');
  });
});
