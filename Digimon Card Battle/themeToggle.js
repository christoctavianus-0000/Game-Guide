(function () {
  'use strict';

  const STORAGE_KEY = 'digimon_codex_theme';

  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (_) {}
    return 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateToggleButton(theme);
  }

  function updateToggleButton(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    const isLight = theme === 'light';
    btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    btn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    const icon = btn.querySelector('.theme-icon');
    if (icon) icon.textContent = isLight ? '🌙' : '☀️';
    const label = btn.querySelector('.theme-label');
    if (label) label.textContent = isLight ? 'Dark' : 'Light';
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
      const initial = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : getStoredTheme();
      updateToggleButton(initial);
    }
  });

  applyTheme(getStoredTheme());
})();
