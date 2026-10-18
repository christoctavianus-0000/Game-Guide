'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

function createDigimonTestEnv(initialStorage = {}) {
  const store = new Map(Object.entries(initialStorage));
  const htmlAttributes = {};
  const listeners = {};

  const documentElement = {
    setAttribute(key, val) { htmlAttributes[key] = String(val); },
    getAttribute(key) { return htmlAttributes[key] || null; },
    removeAttribute(key) { delete htmlAttributes[key]; }
  };

  const themeIcon = {
    tagName: 'SPAN',
    textContent: '☀️',
    attributes: { class: 'theme-icon' },
    closest(sel) { return themeBtn.closest(sel); }
  };

  const themeLabel = {
    tagName: 'SPAN',
    textContent: 'Light',
    attributes: { class: 'theme-label' }
  };

  const themeBtn = {
    tagName: 'BUTTON',
    attributes: { id: 'theme-toggle-btn', class: 'theme-toggle-btn' },
    setAttribute(k, v) { this.attributes[k] = String(v); },
    getAttribute(k) { return this.attributes[k] || null; },
    querySelector(sel) {
      if (sel === '.theme-icon') return themeIcon;
      if (sel === '.theme-label') return themeLabel;
      return null;
    },
    closest(selector) {
      return (selector.includes('theme-toggle-btn') || selector.includes('#theme-toggle-btn')) ? this : null;
    }
  };

  const document = {
    documentElement,
    readyState: 'complete',
    cookie: '',
    querySelectorAll(selector) {
      if (selector.includes('theme-toggle-btn')) return [themeBtn];
      return [];
    },
    addEventListener(type, fn) {
      (listeners[type] = listeners[type] || []).push(fn);
    },
    dispatch(type, event) {
      (listeners[type] || []).forEach(fn => fn(event));
    }
  };

  const windowListeners = {};
  const windowObj = {
    name: '',
    document,
    localStorage: {
      getItem(k) { return store.has(k) ? store.get(k) : null; },
      setItem(k, v) { store.set(k, String(v)); },
      removeItem(k) { store.delete(k); }
    },
    addEventListener(type, fn) {
      (windowListeners[type] = windowListeners[type] || []).push(fn);
    },
    dispatch(type, event) {
      (windowListeners[type] || []).forEach(fn => fn(event));
    }
  };

  const context = vm.createContext({
    window: windowObj,
    document,
    localStorage: windowObj.localStorage,
    RegExp
  });

  const code = fs.readFileSync(path.join(ROOT, 'themeToggle.js'), 'utf8');
  vm.runInContext(code, context);

  return { context, window: windowObj, document, themeBtn, themeIcon, themeLabel, store, htmlAttributes };
}

test('Digimon themeToggle: starts with dark theme by default', () => {
  const env = createDigimonTestEnv();
  assert.equal(env.document.documentElement.getAttribute('data-theme'), null);
  assert.equal(env.themeIcon.textContent, '☀️');
  assert.equal(env.themeBtn.getAttribute('aria-pressed'), 'false');
});

test('Digimon themeToggle: toggles to light theme on document click delegation', () => {
  const env = createDigimonTestEnv();

  env.document.dispatch('click', {
    target: env.themeIcon, // clicking child icon bubbles to button
    preventDefault: () => {}
  });

  assert.equal(env.document.documentElement.getAttribute('data-theme'), 'light');
  assert.equal(env.themeIcon.textContent, '🌙');
  assert.equal(env.themeBtn.getAttribute('aria-pressed'), 'true');
  assert.equal(env.store.get('game_guide_theme'), 'light');
  assert.equal(env.store.get('digimon_codex_theme'), 'light');
});

test('Digimon themeToggle: persists theme across simulated page navigation', () => {
  // Page 1: user toggles to light
  const page1 = createDigimonTestEnv();
  page1.document.dispatch('click', { target: page1.themeBtn, preventDefault: () => {} });
  assert.equal(page1.document.documentElement.getAttribute('data-theme'), 'light');

  // Page 2: user opens fusion.html with shared store
  const storedTheme = Object.fromEntries(page1.store.entries());
  const page2 = createDigimonTestEnv(storedTheme);

  assert.equal(page2.document.documentElement.getAttribute('data-theme'), 'light');
  assert.equal(page2.themeIcon.textContent, '🌙');
  assert.equal(page2.themeBtn.getAttribute('aria-pressed'), 'true');

  // Clicking on Page 2 toggles back to dark
  page2.document.dispatch('click', { target: page2.themeBtn, preventDefault: () => {} });
  assert.equal(page2.document.documentElement.getAttribute('data-theme'), null);
  assert.equal(page2.themeIcon.textContent, '☀️');
  assert.equal(page2.themeBtn.getAttribute('aria-pressed'), 'false');
  assert.equal(page2.store.get('game_guide_theme'), 'dark');
});
