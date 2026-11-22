import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_DIR = path.resolve(__dirname, '..');

const HTML_PAGES = [
  'index.html',
  'ability.html',
  'equipment.html',
  'enemy.html',
  'quest.html',
  'shop.html',
  'bnd.html'
];

function createBd2ThemeTestEnv(initialStorage = {}, initialWindowName = '') {
  const store = new Map(Object.entries(initialStorage));
  const htmlAttributes = {};
  const listeners = {};
  const metaTheme = {
    attributes: { name: 'theme-color', content: '#0c1220' },
    setAttribute(k, v) { this.attributes[k] = String(v); },
    getAttribute(k) { return this.attributes[k] || null; }
  };

  const documentElement = {
    setAttribute(key, val) { htmlAttributes[key] = String(val); },
    getAttribute(key) { return htmlAttributes[key] || null; },
    removeAttribute(key) { delete htmlAttributes[key]; }
  };

  const themeBtn = {
    tagName: 'BUTTON',
    innerHTML: '',
    attributes: { class: 'theme-toggle-btn' },
    setAttribute(k, v) { this.attributes[k] = String(v); },
    getAttribute(k) { return this.attributes[k] || null; },
    querySelector() { return null; },
    closest(selector) {
      return selector.includes('theme-toggle-btn') ? this : null;
    }
  };

  const cookieJar = new Map();
  const document = {
    documentElement,
    readyState: 'complete',
    get cookie() {
      return [...cookieJar.entries()].map(([k, v]) => `${k}=${v}`).join('; ');
    },
    set cookie(val) {
      const pair = String(val).split(';')[0];
      const eqIdx = pair.indexOf('=');
      if (eqIdx > 0) {
        cookieJar.set(pair.slice(0, eqIdx).trim(), pair.slice(eqIdx + 1).trim());
      }
    },
    querySelector(selector) {
      if (selector === 'meta[name="theme-color"]') return metaTheme;
      return null;
    },
    querySelectorAll(selector) {
      if (selector.includes('theme-toggle-btn')) return [themeBtn];
      return [];
    },
    addEventListener(type, fn) {
      (listeners[type] = listeners[type] || []).push(fn);
    },
    dispatch(type, event) {
      (listeners[type] || []).forEach((fn) => fn(event));
    }
  };

  const windowListeners = {};
  const windowObj = {
    name: initialWindowName,
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
      (windowListeners[type] || []).forEach((fn) => fn(event));
    }
  };

  const context = vm.createContext({
    window: windowObj,
    document,
    localStorage: windowObj.localStorage,
    RegExp,
    encodeURIComponent,
    decodeURIComponent
  });

  const code = fs.readFileSync(path.join(BASE_DIR, 'themeToggle.js'), 'utf8');
  vm.runInContext(code, context);

  return { context, window: windowObj, document, themeBtn, metaTheme, store, htmlAttributes };
}

describe('Theme, Accessibility & Responsive Layout Rules', () => {
  const css = fs.readFileSync(path.join(BASE_DIR, 'styles.css'), 'utf-8');
  const themeJs = fs.readFileSync(path.join(BASE_DIR, 'themeToggle.js'), 'utf-8');

  test('styles.css contains required responsive media query breakpoints and mobile/desktop-on-mobile rules', () => {
    assert.ok(css.includes('@media (max-width: 760px)'), 'styles.css must support <= 760px mobile');
    assert.ok(
      css.includes('@media (min-width: 761px) and (max-width: 1180px)'),
      'styles.css must support 761px - 1180px desktop-on-mobile tablet view'
    );
    assert.ok(css.includes('@media (pointer: coarse)'), 'styles.css must support coarse pointer touch targets');
    assert.ok(css.includes('@media (hover: none)'), 'styles.css must disable hover transforms on touch devices');
    assert.ok(css.includes('touch-action: manipulation'), 'styles.css must enable touch-action: manipulation');
    assert.ok(css.includes('overscroll-behavior: contain'), 'styles.css modals must contain overscroll');
    assert.ok(css.includes('.skip-link:focus'), 'styles.css must style .skip-link:focus');
    assert.ok(css.includes('env(safe-area-inset'), 'styles.css must support safe-area-inset padding');
    assert.ok(!css.includes('background-attachment: fixed'), 'styles.css must avoid background-attachment: fixed mobile scroll jank');
    assert.ok(css.includes('.site-rail'), 'styles.css must style .site-rail');
    assert.ok(css.includes('[data-theme="light"]'), 'styles.css must include [data-theme="light"] variables');
    assert.ok(css.includes('prefers-reduced-motion'), 'styles.css must support prefers-reduced-motion');
  });

  test('themeToggle.js manages bd2_theme and game_guide_theme', () => {
    assert.ok(themeJs.includes('bd2_theme'), 'themeToggle.js must reference bd2_theme');
    assert.ok(themeJs.includes('game_guide_theme'), 'themeToggle.js must reference shared game_guide_theme');
    assert.ok(themeJs.includes('data-theme'), 'themeToggle.js must set data-theme attribute');
    assert.ok(
      themeJs.indexOf('localStorage.getItem(SHARED_KEY)') < themeJs.indexOf('localStorage.getItem(LOCAL_KEY)'),
      'themeToggle.js must prioritize shared game_guide_theme over local bd2_theme'
    );
    assert.ok(themeJs.includes('window.name'), 'themeToggle.js must include window.name fallback for file://');
    assert.ok(themeJs.includes("document.addEventListener('click'"), 'themeToggle.js must use document click delegation');
  });

  test('themeToggle.js prioritizes game_guide_theme over stale bd2_theme and updates all tiers on toggle', () => {
    const env = createBd2ThemeTestEnv({
      game_guide_theme: 'light',
      bd2_theme: 'dark'
    });
    assert.equal(env.htmlAttributes['data-theme'], 'light', 'SHARED_KEY game_guide_theme must take precedence over stale bd2_theme');
    assert.equal(env.metaTheme.getAttribute('content'), '#f1f5f9', 'meta theme-color must match light theme');

    // Toggle back to dark via click delegation
    env.document.dispatch('click', {
      target: env.themeBtn,
      preventDefault: () => {}
    });
    assert.equal(env.htmlAttributes['data-theme'], 'dark');
    assert.equal(env.store.get('game_guide_theme'), 'dark');
    assert.equal(env.store.get('bd2_theme'), 'dark');
    assert.ok(env.document.cookie.includes('game_guide_theme=dark'));
    assert.ok(env.document.cookie.includes('bd2_theme=dark'));
    assert.equal(env.window.name, 'dark');
    assert.equal(env.metaTheme.getAttribute('content'), '#0c1220');
  });

  test('All 7 HTML pages contain skip links, site-rail, theme-color, viewport-fit, and theme toggle buttons', () => {
    for (const page of HTML_PAGES) {
      const htmlPath = path.join(BASE_DIR, page);
      assert.ok(fs.existsSync(htmlPath), `${page} must exist`);

      const content = fs.readFileSync(htmlPath, 'utf-8');
      assert.ok(content.includes('viewport-fit=cover'), `${page} must include viewport-fit=cover`);
      assert.ok(content.includes('styles.css'), `${page} must link styles.css`);
      assert.ok(content.includes('themeToggle.js'), `${page} must load themeToggle.js`);
      assert.ok(content.includes('name="theme-color"'), `${page} must include theme-color meta tag`);
      assert.ok(content.includes('site-rail'), `${page} must include .site-rail navigation`);
      assert.ok(content.includes('theme-toggle-btn'), `${page} must include .theme-toggle-btn`);
      assert.ok(content.includes('Skip to main content'), `${page} must include accessible skip link`);
      assert.ok(!content.includes('onfocus="this.style.position'), `${page} must use CSS .skip-link instead of sticky inline onfocus`);
      assert.ok(content.includes('id="modal-backdrop"'), `${page} must include modal dialog container`);
    }
  });
});
