/**
 * Bravely Default II — Jobs Codex App Logic
 * Zero external runtime dependencies, 100% escaped innerHTML.
 */

(function () {
  'use strict';

  const FAV_KEY = 'bd2_fav_jobs';
  let activeRole = 'all';
  let searchQuery = '';

  const container = document.getElementById('jobs-container');
  const countEl = document.getElementById('results-count');
  const searchInput = /** @type {HTMLInputElement} */ (document.getElementById('job-search'));
  const roleButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#role-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');

  function getAptitudeGradeClass(grade) {
    if (!grade) return 'grade-C';
    const g = grade.toUpperCase();
    return `grade-${g}`;
  }

  function renderJobCard(job) {
    const isFav = window.BD2.isFavorite(FAV_KEY, job.id);
    const holderText = job.asteriskHolder ? `Holder: ${job.asteriskHolder}` : 'Default Job';
    const chapterText = job.chapterUnlocked ? `Unlock: ${job.chapterUnlocked}` : '';

    return `
      <article class="codex-card" id="card-${window.BD2.escapeHtml(job.id)}" data-id="${window.BD2.escapeHtml(job.id)}">
        <header class="card-header">
          <div class="job-icon-frame">
            <img src="${window.BD2.escapeHtml(job.iconPath)}" 
                 alt="${window.BD2.escapeHtml(job.name)} Icon" 
                 class="job-icon-img"
                 loading="lazy"
                 onerror="this.style.display='none'">
          </div>
          <div class="card-title-group">
            <h3 class="card-title">${window.BD2.escapeHtml(job.name)}</h3>
            <div class="card-meta">
              <span class="card-badge">${window.BD2.escapeHtml(job.role || 'Specialist')}</span>
              <span>${window.BD2.escapeHtml(chapterText)}</span>
            </div>
          </div>
        </header>

        <div class="card-body">
          <p style="margin-bottom: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">${window.BD2.escapeHtml(holderText)}</p>
          
          <div class="aptitude-grid" title="Weapon & Shield Aptitudes">
            <div class="apt-cell" title="Sword">
              <img src="assets/icons/ui/sword.svg" alt="Sword" class="apt-icon">
              <div class="apt-grade ${getAptitudeGradeClass(job.aptitudes?.sword)}">${window.BD2.escapeHtml(job.aptitudes?.sword || '—')}</div>
            </div>
            <div class="apt-cell" title="Dagger">
              <img src="assets/icons/ui/dagger.svg" alt="Dagger" class="apt-icon">
              <div class="apt-grade ${getAptitudeGradeClass(job.aptitudes?.dagger)}">${window.BD2.escapeHtml(job.aptitudes?.dagger || '—')}</div>
            </div>
            <div class="apt-cell" title="Axe">
              <img src="assets/icons/ui/axe.svg" alt="Axe" class="apt-icon">
              <div class="apt-grade ${getAptitudeGradeClass(job.aptitudes?.axe)}">${window.BD2.escapeHtml(job.aptitudes?.axe || '—')}</div>
            </div>
            <div class="apt-cell" title="Spear">
              <img src="assets/icons/ui/spear.svg" alt="Spear" class="apt-icon">
              <div class="apt-grade ${getAptitudeGradeClass(job.aptitudes?.spear)}">${window.BD2.escapeHtml(job.aptitudes?.spear || '—')}</div>
            </div>
            <div class="apt-cell" title="Bow">
              <img src="assets/icons/ui/bow.svg" alt="Bow" class="apt-icon">
              <div class="apt-grade ${getAptitudeGradeClass(job.aptitudes?.bow)}">${window.BD2.escapeHtml(job.aptitudes?.bow || '—')}</div>
            </div>
            <div class="apt-cell" title="Staff">
              <img src="assets/icons/ui/staff.svg" alt="Staff" class="apt-icon">
              <div class="apt-grade ${getAptitudeGradeClass(job.aptitudes?.staff)}">${window.BD2.escapeHtml(job.aptitudes?.staff || '—')}</div>
            </div>
            <div class="apt-cell" title="Shield">
              <img src="assets/icons/ui/shield.svg" alt="Shield" class="apt-icon">
              <div class="apt-grade ${getAptitudeGradeClass(job.aptitudes?.shield)}">${window.BD2.escapeHtml(job.aptitudes?.shield || '—')}</div>
            </div>
          </div>

          <div style="font-size: 0.82rem; margin-top: 0.75rem;">
            <div style="margin-bottom: 0.35rem;">
              <strong style="color: var(--crystal-sky);">Specialty 1:</strong> 
              ${window.BD2.escapeHtml(job.specialty1 || '—')}
            </div>
            ${job.specialty2 ? `
            <div>
              <strong style="color: var(--asterisk-gold);">Specialty 2 (Lv.12):</strong> 
              ${window.BD2.escapeHtml(job.specialty2)}
            </div>` : ''}
          </div>
        </div>

        <footer class="card-footer">
          <button type="button" class="btn-primary view-abilities-btn" data-id="${window.BD2.escapeHtml(job.id)}" data-name="${window.BD2.escapeHtml(job.name)}">
            <span>View Abilities</span> &rarr;
          </button>
          <button type="button" class="btn-fav ${isFav ? 'active' : ''}" data-id="${window.BD2.escapeHtml(job.id)}" aria-label="Favorite job" title="Favorite">
            ★
          </button>
        </footer>
      </article>
    `;
  }

  function renderModalAbilities(job) {
    const allAbilities = window.abilityData || [];
    const jobAbilities = allAbilities
      .filter((a) => a.job === job.name || a.job === job.id)
      .sort((a, b) => (a.level || 0) - (b.level || 0));

    let rowsHtml = '';
    if (jobAbilities.length === 0) {
      rowsHtml = `<tr><td colspan="5" style="text-align: center; padding: 2rem;">No abilities found for this job.</td></tr>`;
    } else {
      rowsHtml = jobAbilities.map((a) => {
        const typeBadge = a.type === 'Support'
          ? '<span class="card-badge" style="color: var(--arcana-purple); border-color: rgba(192, 132, 252, 0.3);">Passive</span>'
          : '<span class="card-badge" style="color: var(--crystal-sky);">Command</span>';

        const cost = a.cost || '—';
        return `
          <tr>
            <td style="font-weight: 600; color: var(--text-crystal); width: 60px;">Lv. ${window.BD2.escapeHtml(a.level)}</td>
            <td class="table-title-cell">${window.BD2.escapeHtml(a.name)}</td>
            <td>${typeBadge}</td>
            <td style="font-family: var(--font-mono); font-size: 0.85rem;">${window.BD2.escapeHtml(cost)}</td>
            <td style="font-size: 0.85rem;">${window.BD2.escapeHtml(a.effect || '—')}</td>
          </tr>
        `;
      }).join('');
    }

    return `
      <header class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <img src="${window.BD2.escapeHtml(job.iconPath)}" alt="" style="width: 44px; height: 44px; object-fit: contain;">
          <div>
            <h2 id="modal-title" class="modal-title">${window.BD2.escapeHtml(job.name)} Abilities</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              Role: <strong>${window.BD2.escapeHtml(job.role || 'Specialist')}</strong> &bull; 
              ${window.BD2.escapeHtml(job.asteriskHolder ? 'Holder: ' + job.asteriskHolder : 'Default')}
            </p>
          </div>
        </div>
      </header>
      <div class="modal-body">
        <div class="table-wrap">
          <table class="codex-table" aria-label="${window.BD2.escapeHtml(job.name)} abilities list">
            <thead>
              <tr>
                <th>Level</th>
                <th>Ability Name</th>
                <th>Type</th>
                <th>Cost</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function filterJobs() {
    const jobs = window.jobData || [];
    const q = searchQuery.toLowerCase().trim();

    const filtered = jobs.filter((job) => {
      // Role filter
      if (activeRole === 'fav') {
        if (!window.BD2.isFavorite(FAV_KEY, job.id)) return false;
      } else if (activeRole !== 'all') {
        if (job.role !== activeRole) return false;
      }

      // Search query
      if (q) {
        const matchesName = job.name.toLowerCase().includes(q);
        const matchesHolder = (job.asteriskHolder || '').toLowerCase().includes(q);
        const matchesSpec1 = (job.specialty1 || '').toLowerCase().includes(q);
        const matchesSpec2 = (job.specialty2 || '').toLowerCase().includes(q);
        if (!matchesName && !matchesHolder && !matchesSpec1 && !matchesSpec2) {
          return false;
        }
      }

      return true;
    });

    renderJobs(filtered);
  }

  function renderJobs(jobs) {
    if (jobs.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface-card); border-radius: 12px; border: 1px dashed var(--border-card);">
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 0.5rem;">No jobs match your criteria.</p>
          <button type="button" class="btn-primary" id="reset-empty-btn">Clear All Filters</button>
        </div>
      `;
      document.getElementById('reset-empty-btn')?.addEventListener('click', resetFilters);
    } else {
      container.innerHTML = jobs.map(renderJobCard).join('');
    }
    countEl.textContent = jobs.length;
  }

  function resetFilters() {
    activeRole = 'all';
    searchQuery = '';
    searchInput.value = '';
    roleButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.role === 'all');
    });
    filterJobs();
  }

  function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetJob = urlParams.get('job');
    if (!targetJob) return;

    const jobs = window.jobData || [];
    const found = jobs.find(
      (j) => j.id.toLowerCase() === targetJob.toLowerCase() || j.name.toLowerCase() === targetJob.toLowerCase()
    );

    if (found) {
      window.BD2.openModal(renderModalAbilities(found));
      const card = document.getElementById(`card-${found.id}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function init() {
    window.BD2.initModal();

    // Render initial
    renderJobs(window.jobData || []);

    // Search listener
    searchInput.addEventListener('input', (e) => {
      searchQuery = (/** @type {HTMLInputElement} */ (e.target)).value;
      filterJobs();
    });

    // Role buttons
    roleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        roleButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeRole = btn.dataset.role || 'all';
        filterJobs();
      });
    });

    // Clear button
    clearBtn.addEventListener('click', resetFilters);

    // Event delegation on container
    container.addEventListener('click', (e) => {
      const target = /** @type {HTMLElement|null} */ (e.target);
      if (!target) return;

      const favBtn = target.closest('.btn-fav');
      if (favBtn) {
        const id = (/** @type {HTMLElement} */ (favBtn)).dataset.id;
        if (!id) return;
        const nowFav = window.BD2.toggleFavorite(FAV_KEY, id);
        favBtn.classList.toggle('active', nowFav);
        if (activeRole === 'fav' && !nowFav) {
          filterJobs();
        }
        return;
      }

      const viewBtn = target.closest('.view-abilities-btn');
      if (viewBtn) {
        const id = (/** @type {HTMLElement} */ (viewBtn)).dataset.id;
        const job = (window.jobData || []).find((j) => j.id === id);
        if (job) {
          window.BD2.openModal(renderModalAbilities(job));
        }
      }
    });

    handleDeepLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
