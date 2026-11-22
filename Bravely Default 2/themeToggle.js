/**
 * Bravely Default II — Theme Toggle System
 * Synchronizes with the shared Game Guide theme ('game_guide_theme')
 * and maintains local override ('bd2_theme'), with cookie & window.name tiers for file:// navigation.
 */

(function () {
  'use strict';

  if (window.__bd2ThemeToggleLoaded) return;
  window.__bd2ThemeToggleLoaded = true;

  const SHARED_KEY = 'game_guide_theme';
  const LOCAL_KEY = 'bd2_theme';
  const VALID = { dark: 1, light: 1 };

  function readCookie(key) {
    try {
      const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + key + '=([^;]*)'));
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
      const wn = window.name;
      return wn && VALID[wn] ? wn : null;
    } catch (e) {
      return null;
    }
  }

  function writeWindowName(val) {
    try {
      window.name = val;
    } catch (e) {}
  }

  function getPreferredTheme() {
    let t = null;
    try {
      t = localStorage.getItem(SHARED_KEY);
      if (t && VALID[t]) return t;
      t = localStorage.getItem(LOCAL_KEY);
      if (t && VALID[t]) return t;
    } catch (e) {
      // localStorage may be restricted in strict file:// sandboxes
    }

    t = readCookie(SHARED_KEY);
    if (t && VALID[t]) return t;
    t = readCookie(LOCAL_KEY);
    if (t && VALID[t]) return t;

    t = readWindowName();
    if (t && VALID[t]) return t;

    return 'dark';
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(SHARED_KEY, theme);
      localStorage.setItem(LOCAL_KEY, theme);
    } catch (e) {}
    writeCookie(SHARED_KEY, theme);
    writeCookie(LOCAL_KEY, theme);
    writeWindowName(theme);
  }

  function updateThemeMeta(theme) {
    try {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', theme === 'light' ? '#f1f5f9' : '#0c1220');
      }
    } catch (e) {}
  }

  function updateToggleButtons(theme) {
    const isLight = theme === 'light';
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach((btn) => {
      const labelText = isLight ? 'Switch to dark theme' : 'Switch to light theme';
      btn.setAttribute('aria-label', labelText);
      btn.setAttribute('title', labelText);
      btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
      const iconEl = btn.querySelector('.theme-icon');
      const textEl = btn.querySelector('.theme-label');
      if (iconEl && textEl) {
        iconEl.textContent = isLight ? '🌙' : '☀️';
        textEl.textContent = isLight ? 'Dark' : 'Light';
      } else {
        btn.innerHTML =
          isLight
            ? '<span class="theme-icon">🌙</span> <span class="theme-label">Dark</span>'
            : '<span class="theme-icon">☀️</span> <span class="theme-label">Light</span>';
      }
    });
  }

  function applyTheme(theme, save = false) {
    const resolved = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', resolved);
    if (save) {
      saveTheme(resolved);
    }
    updateThemeMeta(resolved);
    updateToggleButtons(resolved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
  }

  // 1. Apply immediately before full DOM load to prevent FOUC
  applyTheme(getPreferredTheme(), false);

  // 2. Document click delegation for any .theme-toggle-btn (works immediately & after bfcache)
  document.addEventListener('click', (e) => {
    const target = /** @type {HTMLElement|null} */ (e.target);
    const btn = target && target.closest ? target.closest('.theme-toggle-btn') : null;
    if (!btn) return;
    e.preventDefault();
    toggleTheme();
  });

  // 3. Sync button visuals as soon as DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      updateToggleButtons(getPreferredTheme());
    });
  } else {
    updateToggleButtons(getPreferredTheme());
  }

  // 4. Re-apply on bfcache restore
  window.addEventListener('pageshow', () => {
    applyTheme(getPreferredTheme(), false);
  });

  // 5. Cross-tab sync via storage event
  window.addEventListener('storage', (e) => {
    if ((e.key === SHARED_KEY || e.key === LOCAL_KEY) && e.newValue && VALID[e.newValue]) {
      applyTheme(e.newValue, false);
    }
  });

  window.bd2Theme = {
    get: getPreferredTheme,
    set: applyTheme,
    toggle: toggleTheme,
  };
})();
