/**
 * Bravely Default II — B 'n' D Card Codex App Logic
 * Zero external runtime dependencies, 100% escaped innerHTML.
 */

(function () {
  'use strict';

  const FAV_KEY = 'bd2_fav_bnd';
  let activeClass = 'all';
  let activeTier = 'all';
  let searchQuery = '';

  const container = document.getElementById('cards-container');
  const countEl = document.getElementById('results-count');
  const searchInput = /** @type {HTMLInputElement} */ (document.getElementById('card-search'));
  const tierSelect = /** @type {HTMLSelectElement} */ (document.getElementById('tier-select'));
  const classButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#card-class-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');

  function getBadgeClass(classification) {
    if (classification === 'Character') return 'style="color: var(--asterisk-gold); border-color: rgba(251, 191, 36, 0.4);"';
    if (classification === 'Job') return 'style="color: var(--crystal-sky); border-color: rgba(56, 189, 248, 0.4);"';
    return 'style="color: var(--bravery-red); border-color: rgba(248, 113, 113, 0.4);"';
  }

  function renderModalCard(card) {
    const stars = '★'.repeat(Math.max(1, Math.min(5, card.tier || 1)));
    const rulesList = (card.rules || []).map((r) => `<span class="card-badge" style="color: var(--text-crystal);">${window.BD2.escapeHtml(r)}</span>`).join(' ') || '<span style="color: var(--text-muted);">None</span>';
    const imgSrc = card.image || `assets/cards/${card.id}.png`;
    const fallbackSvg = `assets/cards/${card.id}.svg`;

    return `
      <header class="modal-header">
        <div style="display: flex; align-items: center; gap: 1.25rem;">
          <img src="${window.BD2.escapeHtml(imgSrc)}" 
               alt="${window.BD2.escapeHtml(card.name)}" 
               style="width: 108px; height: 139px; object-fit: contain; border-radius: 8px; box-shadow: 0 0 16px var(--crystal-glow); border: 1px solid var(--border-subtle);"
               onerror="this.onerror=null;this.src='${window.BD2.escapeHtml(fallbackSvg)}';">
          <div>
            <h2 id="modal-title" class="modal-title">${window.BD2.escapeHtml(card.name)}</h2>
            <div style="margin-top: 0.35rem;">
              <span class="card-badge" ${getBadgeClass(card.classification)}>${window.BD2.escapeHtml(card.classification)}</span>
              <span style="color: var(--asterisk-gold); font-size: 0.95rem; margin-left: 0.5rem; letter-spacing: 1px;">${window.BD2.escapeHtml(stars)}</span>
            </div>
            ${card.family && card.family !== 'Special' && card.family !== card.classification ? `
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.35rem;">
              Family: <strong style="color: var(--text-crystal);">${window.BD2.escapeHtml(card.family)}</strong>
            </p>` : ''}
          </div>
        </div>
      </header>
      <div class="modal-body">
        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          <div style="font-weight: 600; color: var(--asterisk-gold); margin-bottom: 0.35rem;">Card Effect &amp; Territorial Control</div>
          <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.5; margin: 0;">
            ${window.BD2.escapeHtml(card.effect || 'This card has no additional effect.')}
          </p>
        </div>

        ${card.rules && card.rules.length ? `
        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          <div style="font-weight: 600; color: var(--crystal-sky); margin-bottom: 0.35rem;">Permanent Rules &amp; Triggers</div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
            ${rulesList}
          </div>
        </div>` : ''}
      </div>
    `;
  }

  function renderCard(card) {
    const isFav = window.BD2.isFavorite(FAV_KEY, card.id);
    const stars = '★'.repeat(Math.max(1, Math.min(5, card.tier || 1)));
    const rulesList = (card.rules || []).slice(0, 2).map((r) => `<span class="card-badge" style="font-size: 0.72rem; padding: 0.1rem 0.4rem; color: var(--text-crystal);">${window.BD2.escapeHtml(r)}</span>`).join(' ');
    const imgSrc = card.image || `assets/cards/${card.id}.png`;
    const fallbackSvg = `assets/cards/${card.id}.svg`;

    return `
      <article class="codex-card bnd-card" id="card-${window.BD2.escapeHtml(card.id)}" data-id="${window.BD2.escapeHtml(card.id)}">
        <!-- Left Side: Large B 'n' D Card Image -->
        <div class="bnd-card-media">
          <button type="button" class="card-image-btn" data-id="${window.BD2.escapeHtml(card.id)}" title="Click to view full card" style="background: none; border: none; padding: 0; cursor: pointer; display: block; width: 100%;">
            <img src="${window.BD2.escapeHtml(imgSrc)}" 
                 alt="${window.BD2.escapeHtml(card.name)}" 
                 onerror="this.onerror=null;this.src='${window.BD2.escapeHtml(fallbackSvg)}';"
                 loading="lazy">
          </button>
        </div>

        <!-- Right Side: Header, Classification, Star Tier, Family, and Card Effect -->
        <div class="bnd-card-body">
          <header style="margin-bottom: 0.35rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.35rem;">
              <h3 class="card-title" style="font-size: 1.05rem; line-height: 1.25; margin: 0;">${window.BD2.escapeHtml(card.name)}</h3>
              <button type="button" class="btn-fav ${isFav ? 'active' : ''}" data-id="${window.BD2.escapeHtml(card.id)}" aria-label="Favorite card" style="width: 28px; height: 28px; font-size: 0.85rem; flex-shrink: 0;">
                ★
              </button>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
              <span class="card-badge" ${getBadgeClass(card.classification)}>${window.BD2.escapeHtml(card.classification)}</span>
              <span style="color: var(--asterisk-gold); font-size: 0.85rem; letter-spacing: 1px;">${window.BD2.escapeHtml(stars)}</span>
            </div>
          </header>

          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.15rem;">
            ${card.family && card.family !== 'Special' && card.family !== card.classification ? `<div>Family: <strong style="color: var(--text-crystal);">${window.BD2.escapeHtml(card.family)}</strong></div>` : ''}
            ${rulesList ? `<div style="margin-top: 0.25rem; display: flex; flex-wrap: wrap; gap: 0.25rem;">${rulesList}</div>` : ''}
          </div>

          <!-- Card Effect on the Right Side -->
          <div class="bnd-effect-box">
            <div class="bnd-effect-title">
              <span>Card Effect</span>
            </div>
            <div class="bnd-effect-text">
              ${window.BD2.escapeHtml(card.effect || 'This card has no additional effect.')}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function filterCards() {
    const cards = window.bndCardData || [];
    const q = searchQuery.toLowerCase().trim();

    const filtered = cards.filter((card) => {
      // Classification filter
      if (activeClass === 'fav') {
        if (!window.BD2.isFavorite(FAV_KEY, card.id)) return false;
      } else if (activeClass !== 'all') {
        if (card.classification !== activeClass) return false;
      }

      // Tier filter
      if (activeTier !== 'all') {
        if (String(card.tier) !== activeTier) return false;
      }

      // Search query
      if (q) {
        const matchesName = card.name.toLowerCase().includes(q);
        const matchesClass = (card.classification || '').toLowerCase().includes(q);
        const matchesEffect = (card.effect || '').toLowerCase().includes(q);
        const matchesRules = (card.rules || []).some((r) => r.toLowerCase().includes(q));
        if (!matchesName && !matchesClass && !matchesEffect && !matchesRules) return false;
      }

      return true;
    });

    renderCards(filtered);
  }

  function renderCards(cards) {
    if (cards.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface-card); border-radius: 12px; border: 1px dashed var(--border-card);">
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 0.5rem;">No B 'n' D cards match your filter criteria.</p>
          <button type="button" class="btn-primary" id="reset-empty-btn">Clear All Filters</button>
        </div>
      `;
      document.getElementById('reset-empty-btn')?.addEventListener('click', resetFilters);
    } else {
      container.innerHTML = cards.map(renderCard).join('');
    }
    countEl.textContent = cards.length;
  }

  function resetFilters() {
    activeClass = 'all';
    activeTier = 'all';
    searchQuery = '';
    searchInput.value = '';
    tierSelect.value = 'all';
    classButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.class === 'all');
    });
    filterCards();
  }

  function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('card');
    if (!targetId) return;

    const cards = window.bndCardData || [];
    const found = cards.find((c) => c.id.toLowerCase() === targetId.toLowerCase() || c.name.toLowerCase() === targetId.toLowerCase());
    if (found) {
      window.BD2.openModal(renderModalCard(found));
      const card = document.getElementById(`card-${found.id}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function init() {
    window.BD2.initModal();
    filterCards();

    searchInput.addEventListener('input', (e) => {
      searchQuery = (/** @type {HTMLInputElement} */ (e.target)).value;
      filterCards();
    });

    tierSelect.addEventListener('change', (e) => {
      activeTier = (/** @type {HTMLSelectElement} */ (e.target)).value;
      filterCards();
    });

    classButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        classButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeClass = btn.dataset.class || 'all';
        filterCards();
      });
    });

    clearBtn.addEventListener('click', resetFilters);

    container.addEventListener('click', (e) => {
      const target = /** @type {HTMLElement|null} */ (e.target);
      if (!target) return;

      const favBtn = target.closest('.btn-fav');
      if (favBtn) {
        const id = (/** @type {HTMLElement} */ (favBtn)).dataset.id;
        if (!id) return;
        const nowFav = window.BD2.toggleFavorite(FAV_KEY, id);
        favBtn.classList.toggle('active', nowFav);
        if (activeClass === 'fav' && !nowFav) {
          filterCards();
        }
        return;
      }

      const detailBtn = target.closest('.card-detail-btn, .card-image-btn');
      if (detailBtn) {
        const id = (/** @type {HTMLElement} */ (detailBtn)).dataset.id;
        const card = (window.bndCardData || []).find((c) => c.id === id);
        if (card) {
          window.BD2.openModal(renderModalCard(card));
        }
      }
    });

    handleDeepLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
