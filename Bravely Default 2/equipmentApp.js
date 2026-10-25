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
  const weaponSubButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#weapon-sub-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');
  const tableHeaders = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#equip-table th[data-sort]'));

  function getSubtypeIcon(subtype) {
    const s = (subtype || '').toLowerCase();
    if (s.includes('sword')) return 'assets/icons/ui/sword.svg';
    if (s.includes('dagger')) return 'assets/icons/ui/dagger.svg';
    if (s.includes('axe')) return 'assets/icons/ui/axe.svg';
    if (s.includes('spear')) return 'assets/icons/ui/spear.svg';
    if (s.includes('bow')) return 'assets/icons/ui/bow.svg';
    if (s.includes('staff') || s.includes('stave')) return 'assets/icons/ui/staff.svg';
    if (s.includes('shield')) return 'assets/icons/ui/shield.svg';
    if (s.includes('headwear') || s.includes('head')) return 'assets/icons/ui/armor.svg';
    if (s.includes('armour') || s.includes('armor')) return 'assets/icons/ui/armor.svg';
    return 'assets/icons/ui/accessory.svg';
  }

  function normalizeSubtype(str) {
    if (!str) return '';
    const s = str.toLowerCase().trim();
    if (s.startsWith('dagger')) return 'dagger';
    if (s.startsWith('sword')) return 'sword';
    if (s.startsWith('spear')) return 'spear';
    if (s.startsWith('axe')) return 'axes';
    if (s.startsWith('staf') || s.startsWith('stav') || s.startsWith('rod')) return 'staves';
    if (s.startsWith('bow')) return 'bows';
    if (s.startsWith('shield')) return 'shield';
    if (s.startsWith('head')) return 'headwear';
    if (s.startsWith('arm')) return 'armor';
    if (s.startsWith('acc')) return 'accessory';
    return s;
  }

  function renderModalEquipment(item) {
    const sub = item.subCategory || item.subtype || item.type || 'Gear';
    const icon = getSubtypeIcon(sub);
    const stats = item.stats || {};

    const pAtk = item.pAtk ?? stats.pAtk ?? 0;
    const mAtk = item.mAtk ?? stats.mAtk ?? 0;
    const pDef = item.pDef ?? stats.pDef ?? 0;
    const mDef = item.mDef ?? stats.mDef ?? 0;
    const aim = item.aim ?? stats.aim ?? 0;
    const crit = item.crit ?? stats.crit ?? stats.critical ?? 0;
    const evasion = item.evasion ?? stats.evasion ?? stats.evade ?? 0;
    const speed = item.speed ?? stats.speed ?? 0;
    const price = item.cost ?? item.price;
    const source = item.acquire || item.source;

    const statRows = [
      { label: 'Weight', val: item.weight },
      { label: 'P.Atk', val: pAtk },
      { label: 'M.Atk', val: mAtk },
      { label: 'P.Def', val: pDef },
      { label: 'M.Def', val: mDef },
      { label: 'Critical', val: crit },
      { label: 'Aim / Hit', val: aim },
      { label: 'Evade', val: evasion },
      { label: 'Speed', val: speed },
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
              ${window.BD2.escapeHtml(item.category)} &bull; ${window.BD2.escapeHtml(sub)} &bull; Price: <strong>${window.BD2.escapeHtml(price ? Number(price).toLocaleString() + ' pg' : 'Not sold')}</strong>
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
            ${window.BD2.escapeHtml(item.effect || item.description || 'Standard piece of equipment with no innate elemental or passive attributes.')}
          </div>
        </div>

        ${source ? `
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          <strong>Acquisition:</strong> ${window.BD2.escapeHtml(source)}
        </div>` : ''}
      </div>
    `;
  }

  function filterAndSortEquipment() {
    const items = window.equipmentData || [];
    const q = searchQuery.toLowerCase().trim();

    const filtered = items.filter((item) => {
      const itemCat = item.category || '';
      const itemSub = item.subCategory || item.subtype || item.type || '';

      // Category filter
      if (activeCategory === 'fav') {
        if (!window.BD2.isFavorite(FAV_KEY, item.id)) return false;
      } else if (activeCategory !== 'all') {
        const catNorm = activeCategory.toLowerCase().replace(/s$/, '');
        const itemCatNorm = itemCat.toLowerCase().replace(/s$/, '');
        if (catNorm !== itemCatNorm) return false;
      }

      // Subtype filter
      if (activeSubtype !== 'all') {
        if (normalizeSubtype(itemSub) !== normalizeSubtype(activeSubtype)) return false;
      }

      // Search query
      if (q) {
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCat = itemCat.toLowerCase().includes(q);
        const matchesSub = itemSub.toLowerCase().includes(q);
        const matchesEffect = (item.effect || item.description || '').toLowerCase().includes(q);
        const matchesSource = (item.acquire || item.source || '').toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesSub && !matchesEffect && !matchesSource) return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      let valA, valB;

      if (['pAtk', 'mAtk', 'pDef', 'mDef', 'aim', 'crit', 'evasion', 'speed'].includes(sortField)) {
        valA = a[sortField] ?? a.stats?.[sortField] ?? 0;
        valB = b[sortField] ?? b.stats?.[sortField] ?? 0;
      } else if (sortField === 'price' || sortField === 'cost') {
        valA = Number(a.cost ?? a.price) || 0;
        valB = Number(b.cost ?? b.price) || 0;
      } else if (sortField === 'weight') {
        valA = Number(a.weight) || 0;
        valB = Number(b.weight) || 0;
      } else {
        valA = String(a[sortField] || a.name || '').toLowerCase();
        valB = String(b[sortField] || b.name || '').toLowerCase();
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
        const sub = item.subCategory || item.subtype || item.type || 'Gear';
        const icon = getSubtypeIcon(sub);
        const stats = item.stats || {};

        const pAtkVal = item.pAtk ?? stats.pAtk ?? 0;
        const mAtkVal = item.mAtk ?? stats.mAtk ?? 0;
        const pDefVal = item.pDef ?? stats.pDef ?? 0;
        const mDefVal = item.mDef ?? stats.mDef ?? 0;
        const costVal = item.cost ?? item.price;

        const fmtStat = (val) => {
          if (!val) return '<span style="color: var(--text-muted); opacity: 0.5;">—</span>';
          return `<span style="font-family: var(--font-mono); font-weight: 600; color: var(--text-crystal);">${val > 0 ? '+' + val : val}</span>`;
        };

        const priceText = costVal ? `${Number(costVal).toLocaleString()} pg` : '—';

        return `
          <tr id="row-${window.BD2.escapeHtml(item.id)}">
            <td class="table-title-cell">
              <button type="button" class="equip-detail-btn" data-id="${window.BD2.escapeHtml(item.id)}" style="color: inherit; font-weight: 600; text-align: left; display: inline-flex; align-items: center; gap: 0.4rem;">
                <img src="${window.BD2.escapeHtml(icon)}" alt="" style="width: 16px; height: 16px; opacity: 0.85;">
                <span>${window.BD2.escapeHtml(item.name)}</span>
              </button>
            </td>
            <td><span class="card-badge">${window.BD2.escapeHtml(sub)}</span></td>
            <td style="font-family: var(--font-mono);">${window.BD2.escapeHtml(item.weight ?? '—')}</td>
            <td>${fmtStat(pAtkVal)}</td>
            <td>${fmtStat(mAtkVal)}</td>
            <td>${fmtStat(pDefVal)}</td>
            <td>${fmtStat(mDefVal)}</td>
            <td style="font-size: 0.82rem; max-width: 320px;">${window.BD2.escapeHtml(item.effect || item.description || '—')}</td>
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

  function syncSubtypeControls(subVal) {
    activeSubtype = subVal;
    subtypeSelect.value = subVal;
    weaponSubButtons.forEach((btn) => {
      btn.classList.toggle('active', (btn.dataset.sub || 'all') === subVal);
    });
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
    weaponSubButtons.forEach((btn) => {
      btn.classList.toggle('active', (btn.dataset.sub || 'all') === 'all');
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
      const val = (/** @type {HTMLSelectElement} */ (e.target)).value;
      syncSubtypeControls(val);
      filterAndSortEquipment();
    });

    weaponSubButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const subVal = btn.dataset.sub || 'all';
        syncSubtypeControls(subVal);
        filterAndSortEquipment();
      });
    });

    catButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        catButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.cat || 'all';
        // If clicking a non-weapon category, reset weapon subcategory
        if (activeCategory !== 'all' && activeCategory !== 'Weapons') {
          syncSubtypeControls('all');
        }
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
