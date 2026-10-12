/**
 * Theme Toggle — persisted in localStorage, applied before paint via <script> in <head>.
 * This module provides the runtime toggle logic.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'octo0_theme';
  var VALID = { dark: 1, light: 1 };
  var btns = document.querySelectorAll('.theme-toggle-btn');

  /* ---- helpers ---- */
  function readCookie() {
    try {
      var m = document.cookie.match('(?:^|;\s*)' + STORAGE_KEY + '=([^;]*)');
      return m ? decodeURIComponent(m[1]) : null;
    } catch (e) { return null; }
  }
  function writeCookie(val) {
    try {
      document.cookie = STORAGE_KEY + '=' + encodeURIComponent(val) + ';path=/;max-age=31536000';
    } catch (e) { /* ignore */ }
  }
  function readWindowName() {
    try {
      var wn = window.name;
      return (wn && VALID[wn]) ? wn : null;
    } catch (e) { return null; }
  }
  function writeWindowName(val) {
    try { window.name = val; } catch (e) { /* ignore */ }
  }

  function getTheme() {
    // 1. localStorage  2. cookie  3. window.name  4. default dark
    var t = null;
    try { t = localStorage.getItem(STORAGE_KEY); } catch (e) { /* Firefox file:// */ }
    if (t && VALID[t]) return t;
    t = readCookie();  if (t && VALID[t]) return t;
    t = readWindowName();  if (t) return t;
    return 'dark';
  }

  function saveTheme(val) {
    try { localStorage.setItem(STORAGE_KEY, val); } catch (e) { /* ignore */ }
    writeCookie(val);
    writeWindowName(val);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var isLight = theme === 'light';
    btns.forEach(function (btn) {
      btn.textContent = isLight ? '☀️' : '🌙';
      btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
      btn.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    });
  }

  // Apply saved theme immediately (inline script in <head> also does this before paint)
  applyTheme(getTheme());

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = getTheme() === 'dark' ? 'light' : 'dark';
      saveTheme(next);
      applyTheme(next);
    });
  });

  // Re-apply on bfcache restore (Firefox back/forward)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) applyTheme(getTheme());
  });

  // Cross-tab sync via storage event (works when localStorage is shared, e.g. Chrome)
  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY && e.newValue && VALID[e.newValue]) {
      applyTheme(e.newValue);
    }
  });
})();


