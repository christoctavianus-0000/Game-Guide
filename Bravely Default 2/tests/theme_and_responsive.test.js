import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
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

describe('Theme, Accessibility & Responsive Layout Rules', () => {
  const css = fs.readFileSync(path.join(BASE_DIR, 'styles.css'), 'utf-8');
  const themeJs = fs.readFileSync(path.join(BASE_DIR, 'themeToggle.js'), 'utf-8');

  test('styles.css contains required responsive media query breakpoints', () => {
    assert.ok(css.includes('@media (max-width: 760px)'), 'styles.css must support <= 760px mobile');
    assert.ok(
      css.includes('@media (min-width: 761px) and (max-width: 1180px)'),
      'styles.css must support 761px - 1180px desktop-on-mobile tablet view'
    );
    assert.ok(css.includes('.site-rail'), 'styles.css must style .site-rail');
    assert.ok(css.includes('[data-theme="light"]'), 'styles.css must include [data-theme="light"] variables');
    assert.ok(css.includes('prefers-reduced-motion'), 'styles.css must support prefers-reduced-motion');
  });

  test('themeToggle.js manages bd2_theme and game_guide_theme', () => {
    assert.ok(themeJs.includes('bd2_theme'), 'themeToggle.js must reference bd2_theme');
    assert.ok(themeJs.includes('game_guide_theme'), 'themeToggle.js must reference shared game_guide_theme');
    assert.ok(themeJs.includes('data-theme'), 'themeToggle.js must set data-theme attribute');
  });

  test('All 7 HTML pages contain skip links, site-rail, and theme toggle buttons', () => {
    for (const page of HTML_PAGES) {
      const htmlPath = path.join(BASE_DIR, page);
      assert.ok(fs.existsSync(htmlPath), `${page} must exist`);

      const content = fs.readFileSync(htmlPath, 'utf-8');
      assert.ok(content.includes('styles.css'), `${page} must link styles.css`);
      assert.ok(content.includes('themeToggle.js'), `${page} must load themeToggle.js`);
      assert.ok(content.includes('site-rail'), `${page} must include .site-rail navigation`);
      assert.ok(content.includes('theme-toggle-btn'), `${page} must include .theme-toggle-btn`);
      assert.ok(content.includes('Skip to main content'), `${page} must include accessible skip link`);
      assert.ok(content.includes('id="modal-backdrop"'), `${page} must include modal dialog container`);
    }
  });
});
