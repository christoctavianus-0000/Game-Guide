/**
 * Bravely Default II — Equipment Codex App Logic
 * Zero external runtime dependencies, 100% escaped innerHTML.
 */

(function () {
  'use strict';

  const FAV_KEY = 'bd2_fav_equipment';
  let activeCategory = 'all';
  let activeSubtype = 'all';
  let searchQuery = '';
  let sortField = 'name';
  let sortAsc = true;

  const tableBody = document.getElementById('equip-body');
  const countEl = document.getElementById('results-count');
  const searchInput = /** @type {HTMLInputElement} */ (document.getElementById('equip-search'));
  const subtypeSelect = /** @type {HTMLSelectElement} */ (document.getElementById('subtype-select'));
  const catButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#category-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');
  const tableHeaders = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#equip-table th[data-sort]'));

  function getSubtypeIcon(subtype) {
    const s = (subtype || '').toLowerCase();
    if (s.includes('sword')) return 'assets/icons/ui/sword.svg';
    if (s.includes('dagger')) return 'assets/icons/ui/dagger.svg';
    if (s.includes('axe')) return 'assets/icons/ui/axe.svg';
    if (s.includes('spear')) return 'assets/icons/ui/spear.svg';
    if (s.includes('bow')) return 'assets/icons/ui/bow.svg';
    if (s.includes('staff')) return 'assets/icons/ui/staff.svg';
    if (s.includes('shield')) return 'assets/icons/ui/shield.svg';
    if (s.includes('headwear') || s.includes('armour') || s.includes('armor')) return 'assets/icons/ui/armor.svg';
    return 'assets/icons/ui/accessory.svg';
  }

  function renderModalEquipment(item) {
    const icon = getSubtypeIcon(item.subtype);
    const stats = item.stats || {};

    const statRows = [
      { label: 'Weight', val: item.weight },
      { label: 'P.Atk', val: stats.pAtk },
      { label: 'M.Atk', val: stats.mAtk },
      { label: 'P.Def', val: stats.pDef },
      { label: 'M.Def', val: stats.mDef },
      { label: 'Critical', val: stats.critical },
      { label: 'Aim / Hit', val: stats.aim },
      { label: 'Evade', val: stats.evade },
      { label: 'Speed', val: stats.speed },
      { label: 'Restorative Pts', val: stats.restorePts },
    ].filter((s) => s.val !== undefined && s.val !== null && s.val !== 0);

    const statGridHtml = statRows.map((s) => `
      <div style="background: var(--bg-surface); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-muted); font-size: 0.85rem;">${window.BD2.escapeHtml(s.label)}</span>
        <strong style="color: var(--text-crystal); font-family: var(--font-mono);">${window.BD2.escapeHtml(s.val > 0 ? '+' + s.val : s.val)}</strong>
      </div>
    `).join('');

    return `
      <header class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <img src="${window.BD2.escapeHtml(icon)}" alt="" style="width: 44px; height: 44px; object-fit: contain; filter: drop-shadow(0 0 6px var(--crystal-glow));">
          <div>
            <h2 id="modal-title" class="modal-title">${window.BD2.escapeHtml(item.name)}</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              ${window.BD2.escapeHtml(item.category)} &bull; ${window.BD2.escapeHtml(item.subtype)} &bull; Price: <strong>${window.BD2.escapeHtml(item.price ? item.price + ' pg' : 'Not sold')}</strong>
            </p>
          </div>
        </div>
      </header>
      <div class="modal-body">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-crystal); margin-bottom: 0.5rem;">Stat Modifiers</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 1.25rem;">
          ${statGridHtml || '<div style="color: var(--text-muted);">No stat modifiers.</div>'}
        </div>

        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          <div style="font-weight: 600; color: var(--asterisk-gold); margin-bottom: 0.35rem;">Special Effects &amp; Attributes</div>
          <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.5;">
            ${window.BD2.escapeHtml(item.effect || 'Standard piece of equipment with no innate elemental or passive attributes.')}
          </div>
        </div>

        ${item.source ? `
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          <strong>Acquisition:</strong> ${window.BD2.escapeHtml(item.source)}
        </div>` : ''}
      </div>
    `;
  }

  function filterAndSortEquipment() {
    const items = window.equipmentData || [];
    const q = searchQuery.toLowerCase().trim();

    const filtered = items.filter((item) => {
      // Category filter
      if (activeCategory === 'fav') {
        if (!window.BD2.isFavorite(FAV_KEY, item.id)) return false;
      } else if (activeCategory !== 'all') {
        if (item.category !== activeCategory) return false;
      }

      // Subtype filter
      if (activeSubtype !== 'all') {
        if (item.subtype !== activeSubtype) return false;
      }

      // Search query
      if (q) {
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSubtype = (item.subtype || '').toLowerCase().includes(q);
        const matchesEffect = (item.effect || '').toLowerCase().includes(q);
        const matchesSource = (item.source || '').toLowerCase().includes(q);
        if (!matchesName && !matchesSubtype && !matchesEffect && !matchesSource) return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      let valA, valB;

      if (['pAtk', 'mAtk', 'pDef', 'mDef'].includes(sortField)) {
        valA = a.stats?.[sortField] || 0;
        valB = b.stats?.[sortField] || 0;
      } else if (['weight', 'price'].includes(sortField)) {
        valA = Number(a[sortField]) || 0;
        valB = Number(b[sortField]) || 0;
      } else {
        valA = String(a[sortField] || '').toLowerCase();
        valB = String(b[sortField] || '').toLowerCase();
      }

      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    renderTable(filtered);
  }

  function renderTable(items) {
    if (items.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="10" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            No equipment found matching the selected filters.
          </td>
        </tr>
      `;
    } else {
      tableBody.innerHTML = items.map((item) => {
        const isFav = window.BD2.isFavorite(FAV_KEY, item.id);
        const icon = getSubtypeIcon(item.subtype);
        const stats = item.stats || {};

        const fmtStat = (val) => {
          if (!val) return '<span style="color: var(--text-muted); opacity: 0.5;">—</span>';
          return `<span style="font-family: var(--font-mono); font-weight: 600; color: var(--text-crystal);">${val > 0 ? '+' + val : val}</span>`;
        };

        const priceText = item.price ? `${item.price.toLocaleString()} pg` : '—';

        return `
          <tr id="row-${window.BD2.escapeHtml(item.id)}">
            <td class="table-title-cell">
              <button type="button" class="equip-detail-btn" data-id="${window.BD2.escapeHtml(item.id)}" style="color: inherit; font-weight: 600; text-align: left; display: inline-flex; align-items: center; gap: 0.4rem;">
                <img src="${window.BD2.escapeHtml(icon)}" alt="" style="width: 16px; height: 16px; opacity: 0.85;">
                <span>${window.BD2.escapeHtml(item.name)}</span>
              </button>
            </td>
            <td><span class="card-badge">${window.BD2.escapeHtml(item.subtype)}</span></td>
            <td style="font-family: var(--font-mono);">${window.BD2.escapeHtml(item.weight ?? '—')}</td>
            <td>${fmtStat(stats.pAtk)}</td>
            <td>${fmtStat(stats.mAtk)}</td>
            <td>${fmtStat(stats.pDef)}</td>
            <td>${fmtStat(stats.mDef)}</td>
            <td style="font-size: 0.82rem; max-width: 320px;">${window.BD2.escapeHtml(item.effect || '—')}</td>
            <td style="font-family: var(--font-mono); font-size: 0.85rem;">${window.BD2.escapeHtml(priceText)}</td>
            <td style="text-align: center;">
              <button type="button" class="btn-fav ${isFav ? 'active' : ''}" data-id="${window.BD2.escapeHtml(item.id)}" aria-label="Favorite equipment" style="width: 26px; height: 26px; font-size: 0.85rem;">
                ★
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }
    countEl.textContent = items.length;
  }

  function resetFilters() {
    activeCategory = 'all';
    activeSubtype = 'all';
    searchQuery = '';
    searchInput.value = '';
    subtypeSelect.value = 'all';
    catButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.cat === 'all');
    });
    filterAndSortEquipment();
  }

  function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('item');
    if (!targetId) return;

    const items = window.equipmentData || [];
    const found = items.find((i) => i.id.toLowerCase() === targetId.toLowerCase() || i.name.toLowerCase() === targetId.toLowerCase());
    if (found) {
      window.BD2.openModal(renderModalEquipment(found));
    }
  }

  function init() {
    window.BD2.initModal();
    filterAndSortEquipment();

    searchInput.addEventListener('input', (e) => {
      searchQuery = (/** @type {HTMLInputElement} */ (e.target)).value;
      filterAndSortEquipment();
    });

    subtypeSelect.addEventListener('change', (e) => {
      activeSubtype = (/** @type {HTMLSelectElement} */ (e.target)).value;
      filterAndSortEquipment();
    });

    catButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        catButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.cat || 'all';
        filterAndSortEquipment();
      });
    });

    clearBtn.addEventListener('click', resetFilters);

    tableHeaders.forEach((th) => {
      th.addEventListener('click', () => {
        const field = th.dataset.sort;
        if (!field) return;
        if (sortField === field) {
          sortAsc = !sortAsc;
        } else {
          sortField = field;
          sortAsc = true;
        }
        tableHeaders.forEach((h) => {
          const icon = h.querySelector('.sort-icon');
          if (icon) icon.textContent = '↕';
        });
        const currentIcon = th.querySelector('.sort-icon');
        if (currentIcon) currentIcon.textContent = sortAsc ? '▲' : '▼';
        filterAndSortEquipment();
      });
    });

    tableBody.addEventListener('click', (e) => {
      const target = /** @type {HTMLElement|null} */ (e.target);
      if (!target) return;

      const favBtn = target.closest('.btn-fav');
      if (favBtn) {
        const id = (/** @type {HTMLElement} */ (favBtn)).dataset.id;
        if (!id) return;
        const nowFav = window.BD2.toggleFavorite(FAV_KEY, id);
        favBtn.classList.toggle('active', nowFav);
        if (activeCategory === 'fav' && !nowFav) {
          filterAndSortEquipment();
        }
        return;
      }

      const detailBtn = target.closest('.equip-detail-btn');
      if (detailBtn) {
        const id = (/** @type {HTMLElement} */ (detailBtn)).dataset.id;
        const item = (window.equipmentData || []).find((i) => i.id === id);
        if (item) {
          window.BD2.openModal(renderModalEquipment(item));
        }
      }
    });

    handleDeepLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
