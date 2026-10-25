/**
 * Bravely Default II — Abilities Codex App Logic
 * Zero external runtime dependencies, 100% escaped innerHTML.
 */

(function () {
  'use strict';

  const FAV_KEY = 'bd2_fav_abilities';
  let activeType = 'all';
  let activeJob = 'all';
  let searchQuery = '';
  let sortField = 'job';
  let sortAsc = true;

  const tableBody = document.getElementById('abilities-body');
  const countEl = document.getElementById('results-count');
  const searchInput = /** @type {HTMLInputElement} */ (document.getElementById('ability-search'));
  const jobSelect = /** @type {HTMLSelectElement} */ (document.getElementById('job-select'));
  const typeButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#type-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');
  const tableHeaders = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#abilities-table th[data-sort]'));

  function populateJobSelect() {
    const jobs = window.jobData || [];
    const sortedJobs = [...jobs].sort((a, b) => a.name.localeCompare(b.name));
    sortedJobs.forEach((j) => {
      const opt = document.createElement('option');
      opt.value = j.name;
      opt.textContent = j.name;
      jobSelect.appendChild(opt);
    });
  }

  function renderModalAbility(ability) {
    const jobs = window.jobData || [];
    const parentJob = jobs.find((j) => j.name === ability.job || j.id === ability.job);
    const jobIcon = parentJob ? parentJob.iconPath : 'assets/icons/ui/nav-jobs.svg';
    const jobId = parentJob ? parentJob.id : '';

    return `
      <header class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <img src="${window.BD2.escapeHtml(jobIcon)}" alt="" style="width: 44px; height: 44px; object-fit: contain;">
          <div>
            <h2 id="modal-title" class="modal-title">${window.BD2.escapeHtml(ability.name)}</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              Job: <strong>${window.BD2.escapeHtml(ability.job)}</strong> &bull; Level: <strong>Lv. ${window.BD2.escapeHtml(ability.level)}</strong>
            </p>
          </div>
        </div>
      </header>
      <div class="modal-body">
        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
            <span><strong>Classification:</strong> ${window.BD2.escapeHtml(ability.type || 'Command')}</span>
            <span><strong>Cost:</strong> <span style="font-family: var(--font-mono); color: var(--text-crystal);">${window.BD2.escapeHtml(ability.cost || 'None / 0')}</span></span>
          </div>
          <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
            ${window.BD2.escapeHtml(ability.effect || 'No description available.')}
          </div>
        </div>

        ${parentJob ? `
        <div style="text-align: right;">
          <a href="index.html?job=${encodeURIComponent(jobId)}" class="btn-primary" style="display: inline-flex;">
            <span>View ${window.BD2.escapeHtml(parentJob.name)} Job Page</span> &rarr;
          </a>
        </div>` : ''}
      </div>
    `;
  }

  function filterAndSortAbilities() {
    const abilities = window.abilityData || [];
    const q = searchQuery.toLowerCase().trim();

    const filtered = abilities.filter((a) => {
      // Type filter
      if (activeType === 'fav') {
        if (!window.BD2.isFavorite(FAV_KEY, a.id)) return false;
      } else if (activeType !== 'all') {
        if (a.type !== activeType) return false;
      }

      // Job filter
      if (activeJob !== 'all') {
        if (a.job !== activeJob) return false;
      }

      // Search query
      if (q) {
        const matchesName = a.name.toLowerCase().includes(q);
        const matchesEffect = (a.effect || '').toLowerCase().includes(q);
        const matchesJob = (a.job || '').toLowerCase().includes(q);
        if (!matchesName && !matchesEffect && !matchesJob) return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (sortField === 'level') {
        valA = Number(valA) || 0;
        valB = Number(valB) || 0;
      } else {
        valA = String(valA || '').toLowerCase();
        valB = String(valB || '').toLowerCase();
      }

      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    renderTable(filtered);
  }

  function renderTable(abilities) {
    if (abilities.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            No abilities match your filter criteria.
          </td>
        </tr>
      `;
    } else {
      tableBody.innerHTML = abilities.map((a) => {
        const isFav = window.BD2.isFavorite(FAV_KEY, a.id);
        const typeBadge = a.type === 'Support'
          ? '<span class="card-badge" style="color: var(--arcana-purple); border-color: rgba(192, 132, 252, 0.3);">Passive</span>'
          : '<span class="card-badge" style="color: var(--crystal-sky);">Command</span>';

        return `
          <tr id="row-${window.BD2.escapeHtml(a.id)}">
            <td class="table-title-cell">
              <button type="button" class="ability-detail-btn" data-id="${window.BD2.escapeHtml(a.id)}" style="color: inherit; font-weight: 600; text-align: left;">
                ${window.BD2.escapeHtml(a.name)}
              </button>
            </td>
            <td>
              <a href="index.html?job=${encodeURIComponent(a.job.toLowerCase())}" style="font-weight: 500;">
                ${window.BD2.escapeHtml(a.job)}
              </a>
            </td>
            <td style="font-weight: 600; color: var(--text-crystal);">${window.BD2.escapeHtml(a.level)}</td>
            <td>${typeBadge}</td>
            <td style="font-family: var(--font-mono); font-size: 0.85rem;">${window.BD2.escapeHtml(a.cost || '—')}</td>
            <td style="font-size: 0.85rem; max-width: 380px;">${window.BD2.escapeHtml(a.effect || '—')}</td>
            <td style="text-align: center;">
              <button type="button" class="btn-fav ${isFav ? 'active' : ''}" data-id="${window.BD2.escapeHtml(a.id)}" aria-label="Favorite ability" style="width: 26px; height: 26px; font-size: 0.85rem;">
                ★
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }
    countEl.textContent = abilities.length;
  }

  function resetFilters() {
    activeType = 'all';
    activeJob = 'all';
    searchQuery = '';
    searchInput.value = '';
    jobSelect.value = 'all';
    typeButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.type === 'all');
    });
    filterAndSortAbilities();
  }

  function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('ability');
    if (!targetId) return;

    const abilities = window.abilityData || [];
    const found = abilities.find((a) => a.id.toLowerCase() === targetId.toLowerCase() || a.name.toLowerCase() === targetId.toLowerCase());
    if (found) {
      window.BD2.openModal(renderModalAbility(found));
    }
  }

  function init() {
    window.BD2.initModal();
    populateJobSelect();
    filterAndSortAbilities();

    // Search input
    searchInput.addEventListener('input', (e) => {
      searchQuery = (/** @type {HTMLInputElement} */ (e.target)).value;
      filterAndSortAbilities();
    });

    // Job select
    jobSelect.addEventListener('change', (e) => {
      activeJob = (/** @type {HTMLSelectElement} */ (e.target)).value;
      filterAndSortAbilities();
    });

    // Type pills
    typeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        typeButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeType = btn.dataset.type || 'all';
        filterAndSortAbilities();
      });
    });

    // Clear filters
    clearBtn.addEventListener('click', resetFilters);

    // Table sorting
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
        filterAndSortAbilities();
      });
    });

    // Event delegation on table body
    tableBody.addEventListener('click', (e) => {
      const target = /** @type {HTMLElement|null} */ (e.target);
      if (!target) return;

      const favBtn = target.closest('.btn-fav');
      if (favBtn) {
        const id = (/** @type {HTMLElement} */ (favBtn)).dataset.id;
        if (!id) return;
        const nowFav = window.BD2.toggleFavorite(FAV_KEY, id);
        favBtn.classList.toggle('active', nowFav);
        if (activeType === 'fav' && !nowFav) {
          filterAndSortAbilities();
        }
        return;
      }

      const detailBtn = target.closest('.ability-detail-btn');
      if (detailBtn) {
        const id = (/** @type {HTMLElement} */ (detailBtn)).dataset.id;
        const ability = (window.abilityData || []).find((a) => a.id === id);
        if (ability) {
          window.BD2.openModal(renderModalAbility(ability));
        }
      }
    });

    handleDeepLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
