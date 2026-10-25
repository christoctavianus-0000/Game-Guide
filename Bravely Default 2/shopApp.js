/**
 * Bravely Default II — Shops Codex App Logic
 * Zero external runtime dependencies, 100% escaped innerHTML.
 */

(function () {
  'use strict';

  let currentShopId = 'halcyonia';
  let activeCategory = 'all';
  let searchQuery = '';
  let sortField = 'name';
  let sortAsc = true;

  const townSelect = /** @type {HTMLSelectElement} */ (document.getElementById('town-select'));
  const townInfoCard = document.getElementById('town-info-card');
  const tableBody = document.getElementById('shop-body');
  const countEl = document.getElementById('results-count');
  const searchInput = /** @type {HTMLInputElement} */ (document.getElementById('shop-search'));
  const catButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#shop-cat-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');
  const tableHeaders = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#shop-table th[data-sort]'));

  function populateTowns() {
    const shops = window.shopData || [];
    shops.forEach((s) => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.town} (${s.chapter})`;
      townSelect.appendChild(opt);
    });
  }

  function renderTownInfo(shop) {
    townInfoCard.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
            ${window.BD2.escapeHtml(shop.name)}
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Region: <strong style="color: var(--text-crystal);">${window.BD2.escapeHtml(shop.region)}</strong> &bull; Unlock: <strong>${window.BD2.escapeHtml(shop.chapter)}</strong> &bull; Stock: <strong>${window.BD2.escapeHtml(shop.itemCount)} items</strong>
          </p>
        </div>
        <div style="font-size: 0.88rem; color: var(--text-secondary); max-width: 420px; line-height: 1.4;">
          ${window.BD2.escapeHtml(shop.description)}
        </div>
      </div>
    `;
  }

  function filterAndSortShopItems() {
    const shops = window.shopData || [];
    const currentShop = shops.find((s) => s.id === currentShopId) || shops[0];
    if (!currentShop) return;

    renderTownInfo(currentShop);

    const items = currentShop.inventory || [];
    const q = searchQuery.toLowerCase().trim();

    const filtered = items.filter((item) => {
      // Category filter
      if (activeCategory !== 'all') {
        if (item.category !== activeCategory) return false;
      }

      // Search query
      if (q) {
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCat = (item.category || '').toLowerCase().includes(q);
        const matchesDesc = (item.description || '').toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesDesc) return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      let valA, valB;
      if (sortField === 'price') {
        valA = Number(a.price) || 0;
        valB = Number(b.price) || 0;
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
          <td colspan="5" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            No items in this shop match your filter.
          </td>
        </tr>
      `;
    } else {
      tableBody.innerHTML = items.map((it) => {
        const isEquip = it.isEquipment || ['Weapon', 'Armor', 'Accessory'].includes(it.category);
        const priceFmt = it.price ? `${it.price.toLocaleString()} pg` : 'Free / Quest';

        let catBadgeColor = 'var(--text-crystal)';
        if (it.category === 'Consumable') catBadgeColor = 'var(--vitality-green)';
        else if (it.category === 'Weapon') catBadgeColor = 'var(--bravery-red)';
        else if (it.category === 'Armor') catBadgeColor = 'var(--crystal-sky)';
        else if (it.category === 'Accessory') catBadgeColor = 'var(--asterisk-gold)';

        const codexLink = it.equipId
          ? `<a href="equipment.html?item=${encodeURIComponent(it.equipId)}" class="btn-primary" style="padding: 0.25rem 0.6rem; font-size: 0.78rem;">Gear &rarr;</a>`
          : '—';

        return `
          <tr>
            <td class="table-title-cell">${window.BD2.escapeHtml(it.name)}</td>
            <td><span class="card-badge" style="color: ${catBadgeColor}; border-color: ${catBadgeColor};">${window.BD2.escapeHtml(it.category)}</span></td>
            <td style="font-family: var(--font-mono); font-weight: 600; color: var(--text-crystal);">${window.BD2.escapeHtml(priceFmt)}</td>
            <td style="font-size: 0.85rem; color: var(--text-secondary); max-width: 380px;">${window.BD2.escapeHtml(it.description || '—')}</td>
            <td style="text-align: right;">${codexLink}</td>
          </tr>
        `;
      }).join('');
    }
    countEl.textContent = items.length;
  }

  function resetFilters() {
    activeCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    catButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.cat === 'all');
    });
    filterAndSortShopItems();
  }

  function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetShop = urlParams.get('shop');
    if (!targetShop) return;

    const shops = window.shopData || [];
    const found = shops.find((s) => s.id.toLowerCase() === targetShop.toLowerCase() || s.town.toLowerCase() === targetShop.toLowerCase());
    if (found) {
      currentShopId = found.id;
      townSelect.value = found.id;
      filterAndSortShopItems();
    }
  }

  function init() {
    populateTowns();
    handleDeepLink();
    filterAndSortShopItems();

    townSelect.addEventListener('change', (e) => {
      currentShopId = (/** @type {HTMLSelectElement} */ (e.target)).value;
      filterAndSortShopItems();
    });

    searchInput.addEventListener('input', (e) => {
      searchQuery = (/** @type {HTMLInputElement} */ (e.target)).value;
      filterAndSortShopItems();
    });

    catButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        catButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.cat || 'all';
        filterAndSortShopItems();
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
        filterAndSortShopItems();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
