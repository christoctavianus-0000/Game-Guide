/**
 * Bravely Default II — Shared Codex Utilities
 * Zero dependencies, file:// safe, strict HTML escaping.
 */

(function () {
  'use strict';

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatValue(val) {
    if (val === null || val === undefined || val === '' || val === '?') {
      return '<span class="val-missing">—</span>';
    }
    return escapeHtml(val);
  }

  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function getFavorites(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function toggleFavorite(key, id) {
    try {
      const favs = getFavorites(key);
      const index = favs.indexOf(id);
      if (index === -1) {
        favs.push(id);
      } else {
        favs.splice(index, 1);
      }
      localStorage.setItem(key, JSON.stringify(favs));
      return favs.includes(id);
    } catch (e) {
      return false;
    }
  }

  function isFavorite(key, id) {
    return getFavorites(key).includes(id);
  }

  /** @type {HTMLElement|null} */
  let lastFocusedElement = null;

  function openModal(contentHtml) {
    const backdrop = document.getElementById('modal-backdrop');
    const container = document.getElementById('modal-content');
    if (!backdrop || !container) return;

    if (!backdrop.classList.contains('open') && document.activeElement && typeof /** @type {any} */ (document.activeElement).focus === 'function') {
      lastFocusedElement = /** @type {HTMLElement} */ (document.activeElement);
    }

    container.innerHTML = contentHtml;
    const modalWindow = /** @type {HTMLElement|null} */ (backdrop.querySelector('.modal-window'));
    if (modalWindow) modalWindow.scrollTop = 0;

    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    const closeBtn = /** @type {HTMLElement|null} */ (backdrop.querySelector('.modal-close-btn'));
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    const backdrop = document.getElementById('modal-backdrop');
    if (!backdrop) return;
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    const toFocus = lastFocusedElement;
    lastFocusedElement = null;
    if (toFocus && (!document.contains || document.contains(toFocus)) && typeof toFocus.focus === 'function') {
      toFocus.focus();
    }
  }

  function initModal() {
    const backdrop = document.getElementById('modal-backdrop');
    if (!backdrop) return;
    backdrop.setAttribute('aria-hidden', 'true');

    backdrop.addEventListener('click', (e) => {
      const target = /** @type {HTMLElement|null} */ (e.target);
      if (target === backdrop || (target && target.closest('.modal-close-btn'))) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // Export to global window
  window.BD2 = {
    escapeHtml,
    formatValue,
    debounce,
    getFavorites,
    toggleFavorite,
    isFavorite,
    openModal,
    closeModal,
    initModal,
  };
})();
