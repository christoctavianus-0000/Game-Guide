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

test('Octopath & Root pages: include responsive viewport meta and mobile + desktop-on-mobile CSS rules', () => {
  const htmlFiles = ['index.html', 'equipment.html', 'character.html', 'enemy.html', 'shop.html', 'npc.html'];
  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
    assert.match(html, /<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1(?:\.0)?,\s*viewport-fit=cover"/i, `${file} missing viewport-fit=cover meta`);
  }

  const rootHtml = fs.readFileSync(path.join(ROOT, '..', 'index.html'), 'utf8');
  assert.match(rootHtml, /<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1(?:\.0)?,\s*viewport-fit=cover"/i);
  assert.match(rootHtml, /@media\s*\(pointer:\s*coarse\)/);

  const stylesCss = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8');
  assert.match(stylesCss, /@media\s*\(max-width:\s*600px\)/);
  assert.match(stylesCss, /@media\s*\(min-width:\s*901px\)\s*and\s*\(max-width:\s*1180px\)/);
  assert.match(stylesCss, /@media\s*\(pointer:\s*coarse\)/);
  assert.match(stylesCss, /touch-action:\s*manipulation/);
});

test('Octopath & Root pages: enforce cross-page rail World link, uniform SVG search icon, icon dimensions, theme-color, and footers', () => {
  const htmlFiles = ['index.html', 'equipment.html', 'character.html', 'enemy.html', 'shop.html', 'npc.html'];
  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf8');

    assert.match(html, /<meta\s+name="theme-color"/i, `${file} missing meta theme-color`);
    assert.doesNotMatch(html, /[🔍🔎]/, `${file} must use uniform vector SVG search icon instead of mixed emojis`);
    assert.match(html, /<svg[^>]*class="search-icon"[^>]*aria-hidden="true"/i, `${file} missing SVG .search-icon`);
    assert.match(html, /<button[^>]*clear-search-btn[^>]*type="button"|<button[^>]*type="button"[^>]*clear-search-btn/i, `${file} clear-search-btn must specify type="button"`);

    const railMatch = html.match(/<aside[^>]*class="[^"]*site-rail[^"]*"[\s\S]*?<\/aside>/i);
    assert.ok(railMatch, `${file} missing .site-rail`);
    assert.doesNotMatch(railMatch[0], /<span[^>]*class="[^"]*site-rail-brand/, `${file} must not use non-clickable span.site-rail-brand`);
    assert.match(railMatch[0], /<a[^>]*href="\.\.\/index\.html"[^>]*>/i, `${file} .site-rail must include clickable ../index.html World link`);
    const railIcons = [...railMatch[0].matchAll(/<img[^>]*>/gi)];
    assert.equal(railIcons.length, 7, `${file} .site-rail should have World + 6 codex icons`);
    for (const img of railIcons) {
      assert.match(img[0], /width="24"\s+height="24"/i, `${file} rail icon must be 24x24: ${img[0]}`);
    }

    const navMatch = html.match(/<div[^>]*class="site-nav-links"[\s\S]*?<\/div>/i);
    assert.ok(navMatch, `${file} missing .site-nav-links`);
    const navIcons = [...navMatch[0].matchAll(/<img[^>]*>/gi)];
    assert.equal(navIcons.length, 6, `${file} .site-nav-links should have 6 icons`);
    for (const img of navIcons) {
      assert.match(img[0], /width="16"\s+height="16"/i, `${file} top-nav icon must be 16x16: ${img[0]}`);
    }

    assert.match(html, /<footer\s+class="site-footer">/i, `${file} missing .site-footer`);
  }

  const shopHtml = fs.readFileSync(path.join(ROOT, 'shop.html'), 'utf8');
  assert.match(shopHtml, /id="shopMetricsBar"/, 'shop.html should use id="shopMetricsBar"');
  assert.doesNotMatch(shopHtml, /id="characterMetricsBar"/, 'shop.html must not duplicate characterMetricsBar ID');

  const enemyHtml = fs.readFileSync(path.join(ROOT, 'enemy.html'), 'utf8');
  assert.match(enemyHtml, /id="enemyModal"[^>]*aria-hidden="true"/i, 'enemy.html modal should initialize with aria-hidden="true"');

  for (const jsFile of ['enemyApp.js', 'shopApp.js', 'npcApp.js']) {
    const js = fs.readFileSync(path.join(ROOT, jsFile), 'utf8');
    assert.match(js, /syncClearSearchBtn/, `${jsFile} must toggle clear-search button visibility`);
  }

  const rootHtml = fs.readFileSync(path.join(ROOT, '..', 'index.html'), 'utf8');
  assert.match(rootHtml, /class="skip-link"\s+href="#main-content"/i, 'Root index.html missing skip link');
  assert.match(rootHtml, /<main\s+id="main-content">/i, 'Root index.html missing #main-content landmark');
});

