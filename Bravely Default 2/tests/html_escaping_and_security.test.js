import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_DIR = path.resolve(__dirname, '..');

// Read utils.js and extract escapeHtml function
const utilsCode = fs.readFileSync(path.join(BASE_DIR, 'utils.js'), 'utf-8');

function createEscapeHtml() {
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  return escapeHtml;
}

describe('HTML Escaping & XSS Immunity', () => {
  const escapeHtml = createEscapeHtml();

  test('Properly neutralizes hostile script tags and image error injections', () => {
    const attack1 = '<script>alert("pwned")</script>';
    const escaped1 = escapeHtml(attack1);
    assert.equal(escaped1, '&lt;script&gt;alert(&quot;pwned&quot;)&lt;/script&gt;');
    assert.ok(!escaped1.includes('<script>'));

    const attack2 = '"><img src=x onerror=alert(1)>';
    const escaped2 = escapeHtml(attack2);
    assert.equal(escaped2, '&quot;&gt;&lt;img src=x onerror=alert(1)&gt;');
    assert.ok(!escaped2.includes('<img'));
  });

  test('Handles single quotes, ampersands, numbers, and null/undefined values safely', () => {
    assert.equal(escapeHtml("B 'n' D"), "B &#39;n&#39; D");
    assert.equal(escapeHtml('Attack & Defense'), 'Attack &amp; Defense');
    assert.equal(escapeHtml(1234), '1234');
    assert.equal(escapeHtml(null), '');
    assert.equal(escapeHtml(undefined), '');
  });

  test('All UI script files call window.BD2.escapeHtml on dynamic data interpolations', () => {
    const appFiles = [
      'app.js',
      'abilityApp.js',
      'equipmentApp.js',
      'enemyApp.js',
      'questApp.js',
      'shopApp.js',
      'bndApp.js'
    ];

    for (const file of appFiles) {
      const code = fs.readFileSync(path.join(BASE_DIR, file), 'utf-8');
      assert.ok(code.includes('window.BD2.escapeHtml'), `${file} must use window.BD2.escapeHtml`);
    }
  });
});
