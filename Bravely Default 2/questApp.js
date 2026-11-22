/**
 * Bravely Default II — Side Quests Codex App Logic
 * Zero external runtime dependencies, 100% escaped innerHTML.
 */

(function () {
  'use strict';

  const FAV_KEY = 'bd2_fav_quests';
  const DONE_KEY = 'bd2_completed_quests';

  let activeChapter = 'all';
  let searchQuery = '';

  const container = document.getElementById('quests-container');
  const countEl = document.getElementById('results-count');
  const completedCountEl = document.getElementById('stat-completed');
  const searchInput = /** @type {HTMLInputElement} */ (document.getElementById('quest-search'));
  const chapterButtons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('#chapter-filters .filter-pill'));
  const clearBtn = document.getElementById('clear-filters');

  function getCompletedQuests() {
    try {
      const data = localStorage.getItem(DONE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function toggleQuestDone(id) {
    try {
      const done = getCompletedQuests();
      const idx = done.indexOf(id);
      if (idx === -1) {
        done.push(id);
      } else {
        done.splice(idx, 1);
      }
      localStorage.setItem(DONE_KEY, JSON.stringify(done));
      updateCompletedStat();
      return done.includes(id);
    } catch (e) {
      return false;
    }
  }

  function isQuestDone(id) {
    return getCompletedQuests().includes(id);
  }

  function updateCompletedStat(doneList) {
    if (completedCountEl) {
      const len = doneList ? doneList.length : getCompletedQuests().length;
      completedCountEl.textContent = String(len);
    }
  }

  function renderModalQuest(quest) {
    const isDone = isQuestDone(quest.id);
    const stars = "★".repeat(Math.max(1, Math.min(5, quest.stars || 1)));

    return `
      <header class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div class="job-icon-frame" style="width: 48px; height: 48px;">
            <img src="assets/icons/ui/nav-quests.svg" alt="" style="width: 28px; height: 28px; filter: drop-shadow(0 0 6px var(--crystal-glow));">
          </div>
          <div>
            <h2 id="modal-title" class="modal-title">#${window.BD2.escapeHtml(quest.number)}: ${window.BD2.escapeHtml(quest.name)}</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              ${window.BD2.escapeHtml(quest.chapter)} &bull; Difficulty: <span style="color: var(--asterisk-gold);">${window.BD2.escapeHtml(stars)}</span>
            </p>
          </div>
        </div>
      </header>
      <div class="modal-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 1.25rem;">
          <div style="background: var(--bg-surface-elevated); padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="color: var(--text-muted); font-size: 0.75rem;">Quest Giver / Client</div>
            <strong style="color: var(--text-primary); font-size: 0.95rem;">${window.BD2.escapeHtml(quest.client || 'Town Citizen')}</strong>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="color: var(--text-muted); font-size: 0.75rem;">Location</div>
            <strong style="color: var(--text-crystal); font-size: 0.95rem;">${window.BD2.escapeHtml(quest.location || 'Excillant')}</strong>
          </div>
        </div>

        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          <div style="font-weight: 600; color: var(--crystal-sky); margin-bottom: 0.4rem;">Objective</div>
          <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text-primary);">
            ${window.BD2.escapeHtml(quest.objective || 'Complete request for the client.')}
          </p>
        </div>

        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          <div style="font-weight: 600; color: var(--asterisk-gold); margin-bottom: 0.4rem;">Rewards</div>
          <p style="font-size: 0.95rem; color: var(--text-crystal-bright);">
            ${window.BD2.escapeHtml(quest.rewards || 'pg Money / Consumables')}
          </p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.5rem;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">
            Status: <strong style="color: ${isDone ? 'var(--vitality-green)' : 'var(--text-muted)'};">${isDone ? 'Completed' : 'Pending'}</strong>
          </span>
          <button type="button" class="btn-primary modal-done-btn" data-id="${window.BD2.escapeHtml(quest.id)}">
            ${isDone ? 'Mark as Incomplete' : 'Mark as Completed'}
          </button>
        </div>
      </div>
    `;
  }

  function renderQuestCard(quest, favSet, doneSet) {
    const isFav = favSet ? favSet.has(quest.id) : window.BD2.isFavorite(FAV_KEY, quest.id);
    const isDone = doneSet ? doneSet.has(quest.id) : isQuestDone(quest.id);
    const stars = "★".repeat(Math.max(1, Math.min(5, quest.stars || 1)));

    return `
      <article class="codex-card ${isDone ? 'quest-done' : ''}" id="card-${window.BD2.escapeHtml(quest.id)}" data-id="${window.BD2.escapeHtml(quest.id)}">
        <header class="card-header">
          <div class="job-icon-frame quest-num-frame">
            <span class="quest-num-text">#${window.BD2.escapeHtml(quest.number)}</span>
          </div>
          <div class="card-title-group">
            <h3 class="card-title">${window.BD2.escapeHtml(quest.name)}</h3>
            <div class="card-meta">
              <span class="card-badge">${window.BD2.escapeHtml(quest.chapter)}</span>
              <span style="color: var(--asterisk-gold);">${window.BD2.escapeHtml(stars)}</span>
            </div>
          </div>
        </header>

        <div class="card-body">
          <div style="font-size: 0.85rem; margin-bottom: 0.4rem;">
            <strong>Client:</strong> ${window.BD2.escapeHtml(quest.client || 'Town Citizen')} &bull; 
            <span style="color: var(--text-crystal);">${window.BD2.escapeHtml(quest.location || 'Excillant')}</span>
          </div>

          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.6rem; line-height: 1.4;">
            ${window.BD2.escapeHtml(quest.objective || 'Complete request for the client.')}
          </p>

          <div style="font-size: 0.82rem; background: var(--bg-surface-elevated); padding: 0.45rem 0.65rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <strong style="color: var(--asterisk-gold);">Reward:</strong> ${window.BD2.escapeHtml(quest.rewards || 'pg')}
          </div>
        </div>

        <footer class="card-footer">
          <button type="button" class="btn-primary quest-detail-btn" data-id="${window.BD2.escapeHtml(quest.id)}">
            <span>Details</span> &rarr;
          </button>
          <div style="display: flex; gap: 0.4rem; align-items: center;">
            <button type="button" class="btn-fav check-done-btn ${isDone ? 'active' : ''}" data-id="${window.BD2.escapeHtml(quest.id)}" title="${isDone ? 'Completed' : 'Mark Complete'}" aria-label="${isDone ? 'Completed (mark incomplete)' : 'Mark Complete'}">
              ✓
            </button>
            <button type="button" class="btn-fav ${isFav ? 'active' : ''}" data-id="${window.BD2.escapeHtml(quest.id)}" aria-label="Favorite quest" title="Favorite">
              ★
            </button>
          </div>
        </footer>
      </article>
    `;
  }

  function filterQuests() {
    const quests = window.questData || [];
    const q = searchQuery.toLowerCase().trim();
    const favSet = new Set(window.BD2.getFavorites(FAV_KEY));
    const doneSet = new Set(getCompletedQuests());

    const filtered = quests.filter((quest) => {
      // Chapter or status filter
      if (activeChapter === 'fav') {
        if (!favSet.has(quest.id)) return false;
      } else if (activeChapter === 'pending') {
        if (doneSet.has(quest.id)) return false;
      } else if (activeChapter === 'done') {
        if (!doneSet.has(quest.id)) return false;
      } else if (activeChapter !== 'all') {
        if (quest.chapter !== activeChapter) return false;
      }

      // Search query
      if (q) {
        const matchesName = quest.name.toLowerCase().includes(q);
        const matchesClient = (quest.client || '').toLowerCase().includes(q);
        const matchesLoc = (quest.location || '').toLowerCase().includes(q);
        const matchesObj = (quest.objective || '').toLowerCase().includes(q);
        const matchesRew = (quest.rewards || '').toLowerCase().includes(q);
        const matchesNum = String(quest.number || '').includes(q);
        if (!matchesName && !matchesClient && !matchesLoc && !matchesObj && !matchesRew && !matchesNum) {
          return false;
        }
      }

      return true;
    });

    renderQuests(filtered, favSet, doneSet);
  }

  function renderQuests(quests, favSet, doneSet) {
    const activeFavs = favSet || new Set(window.BD2.getFavorites(FAV_KEY));
    const activeDone = doneSet || new Set(getCompletedQuests());

    if (quests.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface-card); border-radius: 12px; border: 1px dashed var(--border-card);">
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 0.5rem;">No quests match your filter criteria.</p>
          <button type="button" class="btn-primary" id="reset-empty-btn">Clear All Filters</button>
        </div>
      `;
      document.getElementById('reset-empty-btn')?.addEventListener('click', resetFilters);
    } else {
      container.innerHTML = quests.map((q) => renderQuestCard(q, activeFavs, activeDone)).join('');
    }
    countEl.textContent = String(quests.length);
  }

  function resetFilters() {
    activeChapter = 'all';
    searchQuery = '';
    searchInput.value = '';
    chapterButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.ch === 'all');
    });
    filterQuests();
  }

  function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('quest');
    if (!targetId) return;

    const quests = window.questData || [];
    const found = quests.find((q) => q.id.toLowerCase() === targetId.toLowerCase() || String(q.number) === targetId);
    if (found) {
      window.BD2.openModal(renderModalQuest(found));
      const card = document.getElementById(`card-${found.id}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function init() {
    window.BD2.initModal();
    updateCompletedStat();
    filterQuests();

    const debouncedSearch = window.BD2.debounce((value) => {
      searchQuery = value;
      filterQuests();
    }, 140);

    searchInput.addEventListener('input', (e) => {
      debouncedSearch((/** @type {HTMLInputElement} */ (e.target)).value);
    });

    chapterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        chapterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeChapter = btn.dataset.ch || 'all';
        filterQuests();
      });
    });

    clearBtn.addEventListener('click', resetFilters);

    container.addEventListener('click', (e) => {
      const target = /** @type {HTMLElement|null} */ (e.target);
      if (!target) return;

      const favBtn = target.closest('.btn-fav:not(.check-done-btn)');
      if (favBtn) {
        const id = (/** @type {HTMLElement} */ (favBtn)).dataset.id;
        if (!id) return;
        const nowFav = window.BD2.toggleFavorite(FAV_KEY, id);
        favBtn.classList.toggle('active', nowFav);
        if (activeChapter === 'fav' && !nowFav) {
          filterQuests();
        }
        return;
      }

      const doneBtn = target.closest('.check-done-btn');
      if (doneBtn) {
        const id = (/** @type {HTMLElement} */ (doneBtn)).dataset.id;
        if (!id) return;
        const nowDone = toggleQuestDone(id);
        doneBtn.classList.toggle('active', nowDone);
        doneBtn.setAttribute('title', nowDone ? 'Completed' : 'Mark Complete');
        doneBtn.setAttribute('aria-label', nowDone ? 'Completed (mark incomplete)' : 'Mark Complete');
        if (activeChapter === 'pending' || activeChapter === 'done') {
          filterQuests();
          return;
        }
        const card = /** @type {HTMLElement|null} */ (document.getElementById(`card-${id}`));
        if (card) {
          card.classList.toggle('quest-done', nowDone);
        }
        return;
      }

      const detailBtn = target.closest('.quest-detail-btn');
      if (detailBtn) {
        const id = (/** @type {HTMLElement} */ (detailBtn)).dataset.id;
        const quest = (window.questData || []).find((q) => q.id === id);
        if (quest) {
          window.BD2.openModal(renderModalQuest(quest));
        }
      }
    });

    document.addEventListener('click', (e) => {
      const target = /** @type {HTMLElement|null} */ (e.target);
      if (!target) return;

      const modalDoneBtn = target.closest('.modal-done-btn');
      if (modalDoneBtn) {
        const id = (/** @type {HTMLElement} */ (modalDoneBtn)).dataset.id;
        if (!id) return;
        const nowDone = toggleQuestDone(id);
        const quest = (window.questData || []).find((q) => q.id === id);
        if (quest) {
          window.BD2.openModal(renderModalQuest(quest));
          filterQuests();
        }
      }
    });

    handleDeepLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
