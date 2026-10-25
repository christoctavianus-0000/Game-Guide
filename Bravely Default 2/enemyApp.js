/**
 * Bravely Default II — Bestiary Codex App Logic
 * Zero external runtime dependencies, 100% escaped innerHTML.
 */

(function () {
  'use strict';

  const FAV_KEY = 'bd2_fav_enemies';
  const SPOILER_KEY = 'bd2_spoiler_revealed';

  let activeClass = 'all';
  let activeFamily = 'all';
  let searchQuery = '';
  // Default to revealed (true) so the Bestiary is crisp and readable on load
  let spoilersRevealed = localStorage.getItem(SPOILER_KEY) !== 'false';

  const container = document.getElementById('enemies-container');
  const countEl = document.getElementById('results-count');
  const searchInput = /** @type {HTMLInputElement} */ (document.getElementById('enemy-search'));
  const familySelect = /** @type {HTMLSelectElement} */ (document.getElementById('family-select'));
  const classButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#class-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');
  const spoilerToggle = document.getElementById('spoiler-toggle');
  const spoilerStatus = document.getElementById('spoiler-status');

  function updateSpoilerUI() {
    spoilerToggle.classList.toggle('active', spoilersRevealed);
    spoilerToggle.setAttribute('aria-pressed', String(spoilersRevealed));
    spoilerStatus.textContent = spoilersRevealed ? 'Revealed' : 'Hidden';
  }

  function populateFamilies() {
    const enemies = window.enemyData || [];
    const families = new Set();
    enemies.forEach((e) => {
      if (e.family && e.family !== '—') families.add(e.family);
    });

    [...families].sort().forEach((f) => {
      const opt = document.createElement('option');
      opt.value = f;
      opt.textContent = f;
      familySelect.appendChild(opt);
    });
  }

  function renderWeaknessChips(weaknesses) {
    if (!weaknesses || weaknesses.length === 0) {
      return '<span style="color: var(--text-muted); font-size: 0.8rem;">None / Unknown</span>';
    }

    return weaknesses.map((w) => {
      const wLower = w.toLowerCase();
      let icon = null;
      if (['sword', 'dagger', 'axe', 'spear', 'bow', 'staff'].includes(wLower)) {
        icon = `assets/icons/ui/${wLower}.svg`;
      } else if (['fire', 'water', 'wind', 'earth', 'lightning', 'light', 'dark'].includes(wLower)) {
        icon = `assets/icons/ui/${wLower}.svg`;
      }

      return `
        <span class="card-badge" style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; margin-right: 0.25rem; margin-bottom: 0.25rem;">
          ${icon ? `<img src="${window.BD2.escapeHtml(icon)}" alt="" style="width: 12px; height: 12px;">` : ''}
          ${window.BD2.escapeHtml(w)}
        </span>
      `;
    }).join('');
  }

  function renderModalEnemy(enemy) {
    const stats = enemy.stats || {};
    const isBoss = enemy.isBoss || enemy.classification === 'Boss';

    return `
      <header class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div class="job-icon-frame" style="width: 48px; height: 48px;">
            <img src="assets/icons/ui/nav-bestiary.svg" alt="" style="width: 32px; height: 32px; filter: drop-shadow(0 0 6px var(--crystal-glow));">
          </div>
          <div>
            <h2 id="modal-title" class="modal-title">${window.BD2.escapeHtml(enemy.name)}</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              ${window.BD2.escapeHtml(enemy.classification || 'Monster')} &bull; Family: <strong>${window.BD2.escapeHtml(enemy.family || 'Unknown')}</strong> &bull; Level: <strong>Lv. ${window.BD2.escapeHtml(enemy.level || '—')}</strong>
            </p>
          </div>
        </div>
      </header>
      <div class="modal-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 1.25rem;">
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="color: var(--text-muted); font-size: 0.75rem;">Max HP</div>
            <strong style="color: var(--bravery-red); font-family: var(--font-mono); font-size: 1.05rem;">${window.BD2.escapeHtml(Number(enemy.hp || 0).toLocaleString())}</strong>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="color: var(--text-muted); font-size: 0.75rem;">EXP Reward</div>
            <strong style="color: var(--text-crystal); font-family: var(--font-mono); font-size: 1.05rem;">${window.BD2.escapeHtml(Number(stats.exp || 0).toLocaleString())}</strong>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="color: var(--text-muted); font-size: 0.75rem;">JP Reward</div>
            <strong style="color: var(--asterisk-gold); font-family: var(--font-mono); font-size: 1.05rem;">${window.BD2.escapeHtml(stats.jp || '—')}</strong>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="color: var(--text-muted); font-size: 0.75rem;">pg Money</div>
            <strong style="color: var(--vitality-green); font-family: var(--font-mono); font-size: 1.05rem;">${window.BD2.escapeHtml(Number(stats.pg || 0).toLocaleString())}</strong>
          </div>
        </div>

        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          <div style="font-weight: 600; color: var(--text-crystal); margin-bottom: 0.4rem;">Elemental &amp; Weapon Weaknesses</div>
          <div>${renderWeaknessChips(enemy.weaknesses)}</div>
        </div>

        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem; font-size: 0.85rem;">
          <div style="margin-bottom: 0.4rem;">
            <strong style="color: var(--text-secondary);">Drops:</strong> ${window.BD2.escapeHtml((enemy.drops || []).filter(Boolean).join(', ') || 'None')}
          </div>
          <div>
            <strong style="color: var(--text-secondary);">Steals:</strong> ${window.BD2.escapeHtml((enemy.steals || []).filter(Boolean).join(', ') || 'None')}
          </div>
        </div>

        <div style="font-size: 0.85rem; color: var(--text-muted);">
          <strong>Encounter Locations:</strong> ${window.BD2.escapeHtml(enemy.location || 'Excillant Overworld / Dungeons')}
        </div>
      </div>
    `;
  }

  function renderEnemyCard(enemy) {
    const isFav = window.BD2.isFavorite(FAV_KEY, enemy.id);
    const isBoss = enemy.isBoss || enemy.classification === 'Boss';
    const isRare = enemy.classification === 'Rare Monster';
    const shouldBlur = (isBoss || isRare) && !spoilersRevealed;

    const badgeColor = isBoss ? 'var(--bravery-red)' : isRare ? 'var(--asterisk-gold)' : 'var(--crystal-sky)';

    return `
      <article class="codex-card ${shouldBlur ? 'spoiler-blurred' : 'spoiler-revealed'}" id="card-${window.BD2.escapeHtml(enemy.id)}" data-id="${window.BD2.escapeHtml(enemy.id)}">
        <header class="card-header">
          <div class="job-icon-frame" style="width: 44px; height: 44px;">
            <img src="assets/icons/ui/nav-bestiary.svg" alt="" style="width: 26px; height: 26px; opacity: 0.85;">
          </div>
          <div class="card-title-group">
            <h3 class="card-title">${window.BD2.escapeHtml(enemy.name)}</h3>
            <div class="card-meta">
              <span class="card-badge" style="color: ${badgeColor}; border-color: ${badgeColor};">${window.BD2.escapeHtml(enemy.classification || 'Monster')}</span>
              <span>Lv. ${window.BD2.escapeHtml(enemy.level || '—')}</span>
            </div>
          </div>
        </header>

        <div class="card-body">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.85rem;">
            <span>Family: <strong>${window.BD2.escapeHtml(enemy.family || '—')}</strong></span>
            <span>HP: <strong style="color: var(--bravery-red); font-family: var(--font-mono);">${window.BD2.escapeHtml(Number(enemy.hp || 0).toLocaleString())}</strong></span>
          </div>

          <div style="margin-bottom: 0.75rem;">
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.25rem;">Weaknesses</div>
            <div>${renderWeaknessChips(enemy.weaknesses)}</div>
          </div>

          <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">
            <div><strong>Location:</strong> ${window.BD2.escapeHtml(enemy.location || 'Excillant')}</div>
          </div>
        </div>

        <footer class="card-footer">
          <button type="button" class="btn-primary enemy-detail-btn" data-id="${window.BD2.escapeHtml(enemy.id)}">
            <span>View Stats</span> &rarr;
          </button>
          <button type="button" class="btn-fav ${isFav ? 'active' : ''}" data-id="${window.BD2.escapeHtml(enemy.id)}" aria-label="Favorite enemy" title="Favorite">
            ★
          </button>
        </footer>
      </article>
    `;
  }

  function filterEnemies() {
    const enemies = window.enemyData || [];
    const q = searchQuery.toLowerCase().trim();

    const filtered = enemies.filter((e) => {
      // Classification filter
      if (activeClass === 'fav') {
        if (!window.BD2.isFavorite(FAV_KEY, e.id)) return false;
      } else if (activeClass === 'boss') {
        if (!e.isBoss && e.classification !== 'Boss') return false;
      } else if (activeClass === 'rare') {
        if (e.classification !== 'Rare Monster') return false;
      } else if (activeClass === 'regular') {
        if (e.isBoss || e.classification === 'Boss' || e.classification === 'Rare Monster') return false;
      }

      // Family filter
      if (activeFamily !== 'all') {
        if (e.family !== activeFamily) return false;
      }

      // Search query
      if (q) {
        const matchesName = e.name.toLowerCase().includes(q);
        const matchesFamily = (e.family || '').toLowerCase().includes(q);
        const matchesLoc = (e.location || '').toLowerCase().includes(q);
        const matchesWeak = (e.weaknesses || []).some((w) => w.toLowerCase().includes(q));
        const matchesDrops = (e.drops || []).some((d) => d && d.toLowerCase().includes(q));
        const matchesSteals = (e.steals || []).some((s) => s && s.toLowerCase().includes(q));
        if (!matchesName && !matchesFamily && !matchesLoc && !matchesWeak && !matchesDrops && !matchesSteals) {
          return false;
        }
      }

      return true;
    });

    renderEnemies(filtered);
  }

  function renderEnemies(enemies) {
    if (enemies.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface-card); border-radius: 12px; border: 1px dashed var(--border-card);">
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 0.5rem;">No enemies match your filter criteria.</p>
          <button type="button" class="btn-primary" id="reset-empty-btn">Clear All Filters</button>
        </div>
      `;
      document.getElementById('reset-empty-btn')?.addEventListener('click', resetFilters);
    } else {
      container.innerHTML = enemies.map(renderEnemyCard).join('');
    }
    countEl.textContent = enemies.length;
  }

  function resetFilters() {
    activeClass = 'all';
    activeFamily = 'all';
    searchQuery = '';
    searchInput.value = '';
    familySelect.value = 'all';
    classButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.class === 'all');
    });
    filterEnemies();
  }

  function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('enemy');
    if (!targetId) return;

    const enemies = window.enemyData || [];
    const found = enemies.find((e) => e.id.toLowerCase() === targetId.toLowerCase() || e.name.toLowerCase() === targetId.toLowerCase());
    if (found) {
      window.BD2.openModal(renderModalEnemy(found));
      const card = document.getElementById(`card-${found.id}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function init() {
    window.BD2.initModal();
    updateSpoilerUI();
    populateFamilies();
    filterEnemies();

    searchInput.addEventListener('input', (e) => {
      searchQuery = (/** @type {HTMLInputElement} */ (e.target)).value;
      filterEnemies();
    });

    familySelect.addEventListener('change', (e) => {
      activeFamily = (/** @type {HTMLSelectElement} */ (e.target)).value;
      filterEnemies();
    });

    classButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        classButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeClass = btn.dataset.class || 'all';
        filterEnemies();
      });
    });

    spoilerToggle.addEventListener('click', () => {
      spoilersRevealed = !spoilersRevealed;
      localStorage.setItem(SPOILER_KEY, String(spoilersRevealed));
      updateSpoilerUI();
      filterEnemies();
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
          filterEnemies();
        }
        return;
      }

      const detailBtn = target.closest('.enemy-detail-btn');
      if (detailBtn) {
        const id = (/** @type {HTMLElement} */ (detailBtn)).dataset.id;
        const enemy = (window.enemyData || []).find((en) => en.id === id);
        if (enemy) {
          window.BD2.openModal(renderModalEnemy(enemy));
        }
      }
    });

    handleDeepLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
