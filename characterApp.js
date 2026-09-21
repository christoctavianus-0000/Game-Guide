(function () {
  'use strict';

  const characterDataState = (typeof characterData !== 'undefined')
    ? characterData
    : { characters: [], jobs: [], sourceIndex: {} };
  const skillLookup = (typeof skillData !== 'undefined' && Array.isArray(skillData)) ? skillData : [];

  const state = {
    query: '',
    selected: null,
    jobFilter: 'all',
    weaponFilter: 'all',
    favorites: new Set()
  };

  const elements = {
    metricCharacterCount: document.getElementById('metricCharacterCount'),
    metricJobCount: document.getElementById('metricJobCount'),
    searchInput: document.getElementById('characterSearchInput'),
    clearSearchBtn: document.getElementById('clearCharacterSearch'),
    jobTabs: document.getElementById('characterJobTabs'),
    weaponFilter: document.getElementById('characterWeaponFilter'),
    grid: document.getElementById('characterGrid'),
    emptyState: document.getElementById('characterEmptyState'),
    resetBtn: document.getElementById('characterResetBtn'),
    modal: document.getElementById('characterDetailModal'),
    modalBadge: document.getElementById('characterModalBadge'),
    modalKind: document.getElementById('characterModalKind'),
    modalMeta: document.getElementById('characterModalMeta'),
    modalName: document.getElementById('characterModalName'),
    modalId: document.getElementById('characterModalId'),
    modalDescription: document.getElementById('characterModalDescription'),
    skillList: document.getElementById('characterSkillList'),
    jobSwitchSection: document.getElementById('characterJobSwitchSection'),
    jobSwitchList: document.getElementById('characterJobSwitchList'),
    modalClose: document.getElementById('characterModalCloseBtn'),
    modalDone: document.getElementById('characterModalDoneBtn')
  };

  function escapeHtml(value) {
    return String(value === undefined || value === null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getSkillGroups(entry) {
    const groups = new Map();
    const displaySkills = entry.skills || [];
    const order = { Battle: 0, Support: 1, Ultimate: 2 };

    displaySkills.forEach(skill => {
      const key = skill.type || 'Support';
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(skill);
    });

    return Array.from(groups.entries())
      .map(([type, skills]) => ({ type, skills }))
      .sort((a, b) => (order[a.type] ?? 99) - (order[b.type] ?? 99));
  }

  function getSkillLink(skillName) {
    const normalized = String(skillName || '').trim();
    if (!normalized) return 'index.html';

    const exact = skillLookup.find(skill =>
      skill && String(skill.name || '').trim().toLowerCase() === normalized.toLowerCase()
    );

    if (exact) {
      return `index.html?skill=${encodeURIComponent(String(exact.name))}`;
    }

    return `index.html?skill=${encodeURIComponent(normalized)}`;
  }

  function getCharacterEntries() {
    const entries = [];

    (characterDataState.characters || []).forEach(character => {
      const jobName = character.job || character.title || 'Unassigned Job';
      entries.push({
        id: character.id,
        type: 'character',
        name: character.name,
        job: jobName,
        subtitle: `Job: ${jobName}`,
        weapons: character.weapons || '',
        description: character.unlock || 'Available through story progression.',
        skills: character.skills || [],
        href: `#${character.id}`
      });
    });

    (characterDataState.jobs || []).forEach(job => {
      entries.push({
        id: job.id,
        type: 'job',
        name: job.name,
        job: job.name,
        subtitle: 'Protagonist Job',
        weapons: job.weapons || '',
        description: 'Protagonist-only job available to the main character.',
        skills: job.skills || [],
        href: `#job-${job.id}`
      });
    });
    return entries;
  }

  function renderMetrics() {
    const characters = characterDataState.characters || [];
    const jobs = characterDataState.jobs || [];

    elements.metricCharacterCount.textContent = String(characters.length);
    elements.metricJobCount.textContent = String(jobs.length);
  }

  function getWeaponOptions() {
    const values = new Set();
    (characterDataState.characters || []).forEach(character => {
      const parts = String(character.weapons || '').split(/[\/,]/).map(part => part.trim()).filter(Boolean);
      parts.forEach(part => values.add(part));
    });
    (characterDataState.jobs || []).forEach(job => {
      const parts = String(job.weapons || '').split(/[\/,]/).map(part => part.trim()).filter(Boolean);
      parts.forEach(part => values.add(part));
    });
    return Array.from(values).sort();
  }

  function getJobOptions() {
    const values = new Set();
    (characterDataState.characters || []).forEach(character => {
      if (character.job) values.add(character.job);
    });
    (characterDataState.jobs || []).forEach(job => {
      if (job.name) values.add(job.name);
    });
    if (characterDataState.protagonist && characterDataState.protagonist.job) {
      values.add(characterDataState.protagonist.job);
    }
    return Array.from(values).sort();
  }

  function renderFilterControls() {
    if (!elements.weaponFilter) return;

    const weaponOptions = getWeaponOptions();

    elements.weaponFilter.innerHTML = ['<option value="all">All Weapons</option>']
      .concat(weaponOptions.map(weapon => `<option value="${escapeHtml(weapon)}">${escapeHtml(weapon)}</option>`))
      .join('');

    elements.weaponFilter.value = state.weaponFilter;
  }

  function getFilteredEntries() {
    const query = state.query.trim().toLowerCase();
    const entries = getCharacterEntries().filter(entry => {
      const matchesJob = state.jobFilter === 'all' ||
        (entry.job && entry.job.toLowerCase() === state.jobFilter.toLowerCase()) ||
        (entry.type === 'job' && entry.name.toLowerCase() === state.jobFilter.toLowerCase());

      const entryWeapons = (entry.weapons || '').split(/[\/,]/).map(part => part.trim()).filter(Boolean);
      const matchesWeapon = state.weaponFilter === 'all' || entryWeapons.some(weapon => weapon.toLowerCase() === state.weaponFilter.toLowerCase());

      return matchesJob && matchesWeapon;
    });

    return entries.filter(entry => {
      if (!query) return true;
      const haystack = [entry.name, entry.subtitle, entry.job || '', entry.weapons, (entry.skills || []).map(skill => skill.name).join(' '), (entry.skills || []).map(skill => skill.description).join(' ')].join(' ').toLowerCase();
      return haystack.includes(query);
    });
  }

  function render() {
    const filtered = getFilteredEntries();
    if (filtered.length === 0) {
      elements.grid.innerHTML = '';
      elements.emptyState.style.display = 'block';
      return;
    }

    elements.emptyState.style.display = 'none';
    elements.grid.innerHTML = filtered.map(entry => `
      <article class="skill-card cat-Support" data-entry-id="${escapeHtml(entry.id)}" data-entry-type="${escapeHtml(entry.type)}">
        <div>
          <div class="card-header-row">
            <div class="card-type-wrap">
              <div class="card-icon-frame"><span class="card-glyph">${entry.type === 'job' ? '🧭' : '🛡️'}</span></div>
              <span class="card-subtype-label">${escapeHtml(entry.type === 'job' ? 'Job' : 'Character')}</span>
            </div>
            <span class="card-sp-badge">${escapeHtml(entry.weapons || 'Any')}</span>
          </div>

          <div class="card-title-row">
            <h3 class="card-skill-name">${escapeHtml(entry.name)}</h3>
          </div>

          <div class="card-meta-bar">
            <span class="card-target-tag">${escapeHtml(entry.subtitle)}</span>
          </div>

          <p class="card-description">${escapeHtml(entry.description)}</p>
        </div>

        <div class="card-combat-footer">
          <span class="card-potency-range">${escapeHtml((entry.skills || []).length)} skills</span>
          <span class="card-inspect-hint">Inspect ↗</span>
        </div>
      </article>
    `).join('');

    elements.grid.querySelectorAll('article').forEach(card => {
      card.addEventListener('click', () => {
        const type = card.getAttribute('data-entry-type');
        const id = card.getAttribute('data-entry-id');
        openModal(type, id);
      });
    });
  }

  function openModal(type, id) {
    const entries = getCharacterEntries();
    const entry = entries.find(item => item.type === type && item.id === id);
    if (!entry) return;

    state.selected = entry;
    const isJob = type === 'job';

    elements.modalKind.textContent = isJob ? 'Protagonist Job' : 'Character';
    elements.modalMeta.textContent = isJob
      ? (entry.weapons || 'No weapon lock')
      : `${entry.job || 'Job'} • ${entry.weapons || 'No weapon lock'}`;
    elements.modalName.textContent = entry.name;
    elements.modalId.textContent = isJob ? `Job ID: #${entry.id}` : `Character ID: #${entry.id}`;
    elements.modalDescription.textContent = isJob
      ? entry.description
      : `${entry.name} is aligned with the ${entry.job || 'assigned'} job. ${entry.description}`;
    elements.modalBadge.innerHTML = `<span>${isJob ? '🧭' : '🛡️'}</span>`;

    const skillGroups = getSkillGroups(entry);
    const sourceLinks = skillGroups.length
      ? skillGroups.map(group => `
        <div class="skill-group-block">
          <div class="skill-group-title">${escapeHtml(group.type)} (${group.skills.length})</div>
          <div class="skill-group-list">
            ${group.skills.map(skill => {
              const skillName = skill.name || 'Skill';
              const href = getSkillLink(skillName);
              const costValue = skill.cost !== undefined && skill.cost !== null && String(skill.cost).trim() !== ''
                ? String(skill.cost).trim()
                : 'Passive';
              const desc = skill.description || 'No description provided.';
              return `
                <a class="source-link-item" href="${escapeHtml(href)}" data-skill-name="${escapeHtml(skillName)}">
                  <span class="source-link-main">${escapeHtml(skillName)}</span>
                  <span class="source-link-meta">SP: ${escapeHtml(costValue)}</span>
                  <span class="source-link-desc">${escapeHtml(desc)}</span>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')
      : '<span class="source-link-item"><span class="source-kind">Info</span><span>Skills not listed.</span></span>';

    elements.skillList.innerHTML = sourceLinks;

    elements.skillList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const skillName = link.getAttribute('data-skill-name') || '';
        const skillHref = getSkillLink(skillName);
        window.location.href = skillHref;
      });
    });

    if (isJob) {
      const jobEntries = (characterDataState.jobs || []).filter(job => job.id !== id);
      elements.jobSwitchSection.style.display = jobEntries.length ? 'block' : 'none';
      elements.jobSwitchList.innerHTML = jobEntries.map(job => `
        <button class="source-link-item" type="button" data-job-switch="${escapeHtml(job.id)}">
          <span class="source-kind">Job</span>
          <span>${escapeHtml(job.name)}</span>
        </button>
      `).join('');

      elements.jobSwitchList.querySelectorAll('[data-job-switch]').forEach(button => {
        button.addEventListener('click', () => {
          const nextId = button.getAttribute('data-job-switch');
          if (nextId) openModal('job', nextId);
        });
      });
    } else {
      elements.jobSwitchSection.style.display = 'none';
      elements.jobSwitchList.innerHTML = '';
    }

    elements.modal.classList.add('active');
    elements.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    elements.modal.classList.remove('active');
    elements.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.selected = null;
  }

  function bindEvents() {
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', () => {
        state.query = elements.searchInput.value;
        if (elements.clearSearchBtn) {
          elements.clearSearchBtn.style.display = state.query ? 'block' : 'none';
        }
        render();
      });
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.query = '';
        elements.clearSearchBtn.style.display = 'none';
        render();
      });
    }

    if (elements.jobTabs) {
      elements.jobTabs.addEventListener('click', (event) => {
        const tab = event.target.closest('.cat-tab');
        if (!tab) return;

        document.querySelectorAll('#characterJobTabs .cat-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        state.jobFilter = tab.getAttribute('data-category') || 'all';
        render();
      });
    }

    if (elements.weaponFilter) {
      elements.weaponFilter.addEventListener('change', () => {
        state.weaponFilter = elements.weaponFilter.value || 'all';
        render();
      });
    }

    if (elements.resetBtn) {
      elements.resetBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.query = '';
        state.jobFilter = 'all';
        state.weaponFilter = 'all';
        if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';
        
        if (elements.jobTabs) {
          document.querySelectorAll('#characterJobTabs .cat-tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          const allTab = elements.jobTabs.querySelector('[data-category="all"]');
          if (allTab) {
            allTab.classList.add('active');
            allTab.setAttribute('aria-selected', 'true');
          }
        }
        
        renderFilterControls();
        render();
      });
    }

    if (elements.modalClose) {
      elements.modalClose.addEventListener('click', closeModal);
    }
    if (elements.modalDone) {
      elements.modalDone.addEventListener('click', closeModal);
    }
    if (elements.modal) {
      elements.modal.addEventListener('click', (event) => {
        if (event.target === elements.modal) closeModal();
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && elements.modal && elements.modal.classList.contains('active')) {
          closeModal();
        }
      });
    }
  }

  function init() {
    renderMetrics();
    renderFilterControls();
    render();
    bindEvents();

    const hash = typeof window !== 'undefined' ? (window.location && window.location.hash ? window.location.hash.replace(/^#/, '') : '') : '';
    if (!hash) return;

    const normalizedHash = hash.replace(/^job-/, '');
    const targetEntry = getCharacterEntries().find(entry => entry.id === normalizedHash);
    if (targetEntry) {
      openModal(targetEntry.type, targetEntry.id);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
