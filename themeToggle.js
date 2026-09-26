/**
 * Theme Toggle — persisted in localStorage, applied before paint via <script> in <head>.
 * This module provides the runtime toggle logic.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'octo0_theme';
  var btns = document.querySelectorAll('.theme-toggle-btn');

  function getTheme() {
    // Try localStorage first, then window.name fallback for file:// isolation
    var t = localStorage.getItem(STORAGE_KEY);
    if (t) return t;
    try {
      var wn = window.name;
      if (wn && (wn === 'light' || wn === 'dark')) return wn;
    } catch (e) { /* ignore */ }
    return 'dark';
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
      localStorage.setItem(STORAGE_KEY, next);
      try { window.name = next; } catch (e) { /* ignore */ }
      applyTheme(next);
    });
  });
})();
