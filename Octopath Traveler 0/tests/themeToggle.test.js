'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

function createTestEnv(initialStorage = {}) {
  const store = new Map(Object.entries(initialStorage));
  const htmlAttributes = {};
  const listeners = {};

  const documentElement = {
    setAttribute(key, val) { htmlAttributes[key] = String(val); },
    getAttribute(key) { return htmlAttributes[key] || null; },
    removeAttribute(key) { delete htmlAttributes[key]; }
  };

  const btnListeners = {};
  const themeBtn = {
    tagName: 'BUTTON',
    textContent: '🌙',
    attributes: { class: 'theme-toggle-btn' },
    setAttribute(k, v) { this.attributes[k] = String(v); },
    getAttribute(k) { return this.attributes[k] || null; },
    closest(selector) {
      return selector.includes('theme-toggle-btn') ? this : null;
    },
    addEventListener(type, fn) { (btnListeners[type] = btnListeners[type] || []).push(fn); }
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

  return { context, window: windowObj, document, themeBtn, store, htmlAttributes };
}

test('Octopath themeToggle: starts with dark theme by default', () => {
  const env = createTestEnv();
  assert.equal(env.document.documentElement.getAttribute('data-theme'), null);
  assert.equal(env.themeBtn.textContent, '🌙');
});

test('Octopath themeToggle: toggles to light theme on document click delegation', () => {
  const env = createTestEnv();

  env.document.dispatch('click', {
    target: env.themeBtn,
    preventDefault: () => {}
  });

  assert.equal(env.document.documentElement.getAttribute('data-theme'), 'light');
  assert.equal(env.themeBtn.textContent, '☀️');
  assert.equal(env.store.get('game_guide_theme'), 'light');
  assert.equal(env.store.get('octo0_theme'), 'light');
});

test('Octopath themeToggle: persists theme across simulated page navigation', () => {
  // Page 1: user toggles to light
  const page1 = createTestEnv();
  page1.document.dispatch('click', { target: page1.themeBtn, preventDefault: () => {} });
  assert.equal(page1.document.documentElement.getAttribute('data-theme'), 'light');

  // Page 2: user opens another page with shared store
  const storedTheme = Object.fromEntries(page1.store.entries());
  const page2 = createTestEnv(storedTheme);

  assert.equal(page2.document.documentElement.getAttribute('data-theme'), 'light');
  assert.equal(page2.themeBtn.textContent, '☀️');

  // Clicking on Page 2 toggles back to dark
  page2.document.dispatch('click', { target: page2.themeBtn, preventDefault: () => {} });
  assert.equal(page2.document.documentElement.getAttribute('data-theme'), null);
  assert.equal(page2.themeBtn.textContent, '🌙');
  assert.equal(page2.store.get('game_guide_theme'), 'dark');
});
