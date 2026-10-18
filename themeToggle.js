/**
 * Theme Toggle — persisted across storage tiers, synchronized across pages.
 * Supports execution in <head> or at bottom of <body>.
 */
(function () {
  'use strict';

  if (window.__rootThemeToggleLoaded) return;
  window.__rootThemeToggleLoaded = true;

  var SHARED_KEY = 'game_guide_theme';
  var VALID = { dark: 1, light: 1 };

  function readCookie(key) {
    try {
      var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + key + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (e) {
      return null;
    }
  }

  function writeCookie(key, val) {
    try {
      document.cookie = key + '=' + encodeURIComponent(val) + ';path=/;max-age=31536000;SameSite=Lax';
    } catch (e) {}
  }

  function readWindowName() {
    try {
      var wn = window.name;
      return (wn && VALID[wn]) ? wn : null;
    } catch (e) {
      return null;
    }
  }

  function writeWindowName(val) {
    try {
      window.name = val;
    } catch (e) {}
  }

  function getTheme() {
    var t = null;
    try {
      t = localStorage.getItem(SHARED_KEY);
      if (t && VALID[t]) return t;
      t = localStorage.getItem('octo0_theme');
      if (t && VALID[t]) return t;
      t = localStorage.getItem('digimon_codex_theme');
      if (t && VALID[t]) return t;
    } catch (e) {}

    t = readCookie(SHARED_KEY);
    if (t && VALID[t]) return t;

    t = readWindowName();
    if (t && VALID[t]) return t;

    return 'dark';
  }

  function saveTheme(val) {
    try {
      localStorage.setItem(SHARED_KEY, val);
      localStorage.setItem('octo0_theme', val);
      localStorage.setItem('digimon_codex_theme', val);
    } catch (e) {}
    writeCookie(SHARED_KEY, val);
    writeWindowName(val);
  }

  function updateButtons(theme) {
    var isLight = theme === 'light';
    var btns = document.querySelectorAll('.theme-toggle-btn');
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      btn.textContent = isLight ? '☀️' : '🌙';
      btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
      btn.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    }
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateButtons(theme);
  }

  function toggleTheme() {
    var isCurrentLight = document.documentElement.getAttribute('data-theme') === 'light';
    var next = isCurrentLight ? 'dark' : 'light';
    saveTheme(next);
    applyTheme(next);
  }

  // 1. Apply theme immediately upon script evaluation
  applyTheme(getTheme());

  // 2. Delegate click on document so ANY .theme-toggle-btn works immediately
  document.addEventListener('click', function (e) {
    var target = e.target;
    var btn = target && target.closest ? target.closest('.theme-toggle-btn') : null;
    if (!btn) return;
    e.preventDefault();
    toggleTheme();
  });

  // 3. Update button visuals as soon as DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      updateButtons(getTheme());
    });
  } else {
    updateButtons(getTheme());
  }

  // 4. Re-apply on bfcache restore
  window.addEventListener('pageshow', function () {
    applyTheme(getTheme());
  });

  // 5. Cross-tab sync via storage event
  window.addEventListener('storage', function (e) {
    if (e.key === SHARED_KEY && e.newValue && VALID[e.newValue]) {
      applyTheme(e.newValue);
    }
  });
})();
