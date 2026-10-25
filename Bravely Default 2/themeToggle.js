/**
 * Bravely Default II — Theme Toggle System
 * Synchronizes with the shared Game Guide theme ('game_guide_theme')
 * and maintains local override ('bd2_theme').
 * Fully zero-dependency and safe for file:// execution.
 */

(function () {
  const LOCAL_KEY = 'bd2_theme';
  const SHARED_KEY = 'game_guide_theme';

  function getPreferredTheme() {
    try {
      const local = localStorage.getItem(LOCAL_KEY);
      if (local === 'light' || local === 'dark') return local;
      const shared = localStorage.getItem(SHARED_KEY);
      if (shared === 'light' || shared === 'dark') return shared;
    } catch (e) {
      // localStorage may be restricted in strict file:// sandboxes
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme, save = false) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (save) {
      try {
        localStorage.setItem(LOCAL_KEY, theme);
        localStorage.setItem(SHARED_KEY, theme);
      } catch (e) {}
    }
    updateToggleButtons(theme);
  }

  function updateToggleButtons(theme) {
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach((btn) => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      btn.innerHTML =
        theme === 'dark'
          ? '<span class="theme-icon">☀️</span> <span class="theme-label">Light</span>'
          : '<span class="theme-icon">🌙</span> <span class="theme-label">Dark</span>';
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
  }

  // Initial immediate application before full DOM load
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme(), false);
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', toggleTheme);
    });

    // Cross-tab / external sync
    window.addEventListener('storage', (e) => {
      if (e.key === LOCAL_KEY || e.key === SHARED_KEY) {
        if (e.newValue === 'light' || e.newValue === 'dark') {
          applyTheme(e.newValue, false);
        }
      }
    });
  });

  window.bd2Theme = {
    get: getPreferredTheme,
    set: applyTheme,
    toggle: toggleTheme,
  };
})();
