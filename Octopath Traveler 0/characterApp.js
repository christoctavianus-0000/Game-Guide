(function () {
  'use strict';

  const characterDataState = (typeof characterData !== 'undefined')
    ? characterData
    : { characters: [], jobs: [], sourceIndex: {} };
  const skillLookup = (typeof skillData !== 'undefined' && Array.isArray(skillData)) ? skillData : [];

  const JOB_ICON_MAP = {
    'warrior': 'assets/icons/jobs/job_warrior.png',
    'dancer': 'assets/icons/jobs/job_dancer.png',
    'merchant': 'assets/icons/jobs/job_merchant.png',
    'scholar': 'assets/icons/jobs/job_scholar.png',
    'cleric': 'assets/icons/jobs/job_cleric.png',
    'thief': 'assets/icons/jobs/job_thief.png',
    'hunter': 'assets/icons/jobs/job_hunter.png',
    'apothecary': 'assets/icons/jobs/job_apothecary.png',
    'architect': 'assets/icons/jobs/job_architect.png',
    'cait scholar': 'assets/icons/jobs/job_cait_scholar.png',
    'captain': 'assets/icons/jobs/job_captain.png',
    'empress': 'assets/icons/jobs/job_empress.png',
    'flamebringer': 'assets/icons/jobs/job_flameguard.png',
    'flameguard': 'assets/icons/jobs/job_flameguard.png',
    'king': 'assets/icons/jobs/job_king.png',
    'knight ardante': 'assets/icons/jobs/job_knight_ardante.png',
    'lord': 'assets/icons/jobs/job_lord.png',
    'queen': 'assets/icons/jobs/job_queen.png',
    'wise king': 'assets/icons/jobs/job_wise_king.png',
  };

  function getJobIconPath(jobName) {
    if (!jobName) return null;
    return JOB_ICON_MAP[String(jobName).trim().toLowerCase()] || null;
  }

  function getJobIconHTML(jobName, cssClass, fallbackEmoji) {
    const iconPath = getJobIconPath(jobName);
    if (iconPath) return `<img src="${iconPath}" alt="${escapeHtml(jobName || '')}" class="${cssClass}">`;
    return `<span>${fallbackEmoji}</span>`;
  }

  function getArtworkSlug(id) {
    if (!id) return '';
    return String(id).toLowerCase().trim().replace(/-/g, '');
  }

  const assetSets = { artwork: new Set(), portrait: new Set(), sprite: new Set() };

  function preloadAssets() {
    if (typeof Image === 'undefined') return Promise.resolve();
    const chars = characterDataState.characters || [];
    const suffixes = ['artwork', 'portrait', 'sprite'];
    return Promise.all(chars.map(c => {
      const slug = getArtworkSlug(c.id);
      if (!slug) return Promise.resolve();
      return Promise.all(suffixes.map(suffix => new Promise(resolve => {
        const img = new Image();
        img.onload = () => { assetSets[suffix].add(c.id); resolve(); };
        img.onerror = () => resolve();
        img.src = `assets/characters/${slug}_${suffix}.png`;
      })));
    }));
  }

  function getAssetPath(id, type) {
    if (!id) return null;
    const slug = getArtworkSlug(id);
    return `assets/characters/${slug}_${type}.png`;
  }

  function getArtworkPath(id) { return getAssetPath(id, 'artwork'); }
  function getPortraitPath(id) { return getAssetPath(id, 'portrait'); }
  function getSpritePath(id) { return getAssetPath(id, 'sprite'); }

  const state = {
    query: '',
    selected: null,
    jobFilter: 'all',
    weaponFilter: 'all',
    favorites: new Set(),
    modalImageMode: 'portrait'
  };

  const elements = {
    metricCharacterCount: document.getElementById('metricCharacterCount'),
    metricJobCount: document.getElementById('metricJobCount'),
    searchInput: document.getElementById('characterSearchInput'),
    clearSearchBtn: document.getElementById('clearCharacterSearch'),
    jobTabs: document.getElementById('characterJobTabs'),
    weaponFilter: document.getElementById('weaponIconFilter'),
    grid: document.getElementById('characterGrid'),
    emptyState: document.getElementById('characterEmptyState'),
    resetBtn: document.getElementById('characterResetBtn'),
    resultsCount: document.getElementById('characterResultsCount'),
    emptyResetBtn: document.getElementById('characterEmptyResetBtn'),
    modal: document.getElementById('characterDetailModal'),
    modalBadge: document.getElementById('characterModalBadge'),
    modalKind: document.getElementById('characterModalKind'),
    modalMeta: document.getElementById('characterModalMeta'),
    modalName: document.getElementById('characterModalName'),
    modalId: document.getElementById('characterModalId'),
    modalDescription: document.getElementById('characterModalDescription'),
    modalAmitySection: document.getElementById('characterModalAmitySection'),
    modalAmity: document.getElementById('characterModalAmity'),
    skillList: document.getElementById('characterSkillList'),
    jobSwitchSection: document.getElementById('characterJobSwitchSection'),
    jobSwitchList: document.getElementById('characterJobSwitchList'),
    modalClose: document.getElementById('characterModalCloseBtn'),
    modalDone: document.getElementById('characterModalDoneBtn'),
    modalImagePanel: document.getElementById('characterModalImagePanel'),
    modalImage: document.getElementById('characterModalImage'),
    modalImageFallback: document.getElementById('characterModalImageFallback'),
    modalPortraitBtn: document.getElementById('characterModalPortraitBtn'),
    modalSpriteBtn: document.getElementById('characterModalSpriteBtn'),
    modalImageToggle: document.getElementById('characterModalImageToggle')
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
        amity: character.amity || '',
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

  function parseWeapons(weaponStr) {
    return String(weaponStr || '').split(/[\/,]/).map(part => {
      const clean = part.trim().replace(/\s+only$/i, '').replace(/spear$/i, 'polearm');
      return clean ? clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase() : '';
    }).filter(Boolean);
  }

  function getWeaponOptions(jobFilter) {
    const values = new Set();
    const filter = (jobFilter || 'all').toLowerCase();

    (characterDataState.characters || []).forEach(character => {
      if (filter !== 'all') {
        const jobName = String(character.job || character.title || '').toLowerCase();
        if (jobName !== filter) return;
      }
      parseWeapons(character.weapons).forEach(part => values.add(part));
    });
    (characterDataState.jobs || []).forEach(job => {
      if (filter !== 'all') {
        const jobName = String(job.name || '').toLowerCase();
        if (jobName !== filter) return;
      }
      parseWeapons(job.weapons).forEach(part => values.add(part));
    });
    // Reorder to match enemy weakness sequence: Sword, Polearm, Dagger, Axe, Bow, Staff, Tome, Fan
    const order = ['sword', 'polearm', 'dagger', 'axe', 'bow', 'staff', 'tome', 'fan'];
    const sorted = Array.from(values).sort((a, b) => {
      const ai = order.indexOf(a.toLowerCase());
      const bi = order.indexOf(b.toLowerCase());
      return ai === bi ? a.localeCompare(b) : ai - bi;
    });
    return sorted;
  }

  function getWeaponIconPath(weapon) {
    const iconMap = {
      'sword': 'assets/icons/icon_sword.png',
      'dagger': 'assets/icons/icon_dagger.png',
      'axe': 'assets/icons/icon_axe.png',
      'bow': 'assets/icons/icon_bow.png',
      'polearm': 'assets/icons/icon_polearm.png',
      'spear': 'assets/icons/icon_polearm.png',
      'staff': 'assets/icons/icon_staff.png',
      'fan': 'assets/icons/icon_fan.png',
      'tome': 'assets/icons/icon_tome.png'
    };
    return iconMap[String(weapon).toLowerCase()] || '';
  }

  function renderFilterControls() {
    if (!elements.weaponFilter) return;

    const weaponOptions = getWeaponOptions(state.jobFilter);

    // Reset weapon filter if current selection no longer available
    if (state.weaponFilter !== 'all' && !weaponOptions.some(w => w.toLowerCase() === state.weaponFilter.toLowerCase())) {
      state.weaponFilter = 'all';
    }

    const buttons = ['all'].concat(weaponOptions).map(weapon => {
      const isAll = weapon === 'all';
      const isActive = state.weaponFilter === weapon;
      const iconHtml = isAll
        ? '<span class="weapon-filter-icon weapon-filter-all">✦</span>'
        : `<img src="${getWeaponIconPath(weapon)}" alt="${escapeHtml(weapon)}" class="weapon-filter-icon" />`;
      return `<button type="button" class="weapon-filter-btn ${isActive ? 'active' : ''}" data-weapon="${escapeHtml(weapon)}" role="radio" aria-checked="${isActive}" aria-label="${isAll ? 'All Weapons' : escapeHtml(weapon)}">${iconHtml}</button>`;
    }).join('');

    elements.weaponFilter.innerHTML = buttons;
  }

  function getFilteredEntries() {
    const query = state.query.trim().toLowerCase();
    const entries = getCharacterEntries().filter(entry => {
      const matchesJob = state.jobFilter === 'all' ||
        (entry.job && entry.job.toLowerCase() === state.jobFilter.toLowerCase()) ||
        (entry.type === 'job' && entry.name.toLowerCase() === state.jobFilter.toLowerCase());

      const entryWeapons = parseWeapons(entry.weapons);
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
    if (elements.resultsCount) {
      elements.resultsCount.textContent = `Showing ${filtered.length.toLocaleString()} character${filtered.length === 1 ? '' : 's'}`;
    }
    if (filtered.length === 0) {
      elements.grid.innerHTML = '';
      elements.emptyState.style.display = 'block';
      return;
    }

    elements.emptyState.style.display = 'none';
    const sorted = [...filtered].sort((a, b) => {
      const aHas = a.type !== 'job' && assetSets.artwork.has(a.id);
      const bHas = b.type !== 'job' && assetSets.artwork.has(b.id);
      return (bHas ? 1 : 0) - (aHas ? 1 : 0);
    });
    elements.grid.innerHTML = sorted.map(entry => {
      const isJob = entry.type === 'job';
      const hasArt = !isJob && assetSets.artwork.has(entry.id);
      const artPath = hasArt ? getArtworkPath(entry.id) : null;
      return `
      <article class="skill-card cat-Support${hasArt ? ' has-artwork' : ''}" data-entry-id="${escapeHtml(entry.id)}" data-entry-type="${escapeHtml(entry.type)}"${artPath ? ` style="background-image: url('${artPath}')"` : ''}>
        ${hasArt ? '<div class="card-artwork-overlay"></div>' : ''}
        <div class="card-content-wrap">
          <div class="card-header-row">
            <div class="card-type-wrap">
              <div class="card-icon-frame">${getJobIconHTML(isJob ? entry.name : entry.job, 'card-icon-img', isJob ? '🧭' : '🛡️')}</div>
              <span class="card-subtype-label">${escapeHtml(isJob ? 'Job' : 'Character')}</span>
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
    `;
    }).join('');

    elements.grid.querySelectorAll('article').forEach(card => {
      card.addEventListener('click', () => {
        const type = card.getAttribute('data-entry-type');
        const id = card.getAttribute('data-entry-id');
        openModal(type, id);
      });
    });

    // Stagger animation for character cards
    elements.grid.querySelectorAll('article').forEach((card, i) => {
      card.classList.add('card-enter');
      card.style.animationDelay = `${i * 35}ms`;
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
    if (isJob) {
      elements.modalDescription.textContent = entry.description;
    } else {
      elements.modalDescription.textContent = `${entry.name} is aligned with the ${entry.job || 'assigned'} job. ${entry.description}`;
    }
    // Amity block (characters only)
    if (!isJob && entry.amity) {
      const levels = entry.amity.split(/;\s*/).filter(Boolean);
      const amityHtml = levels.map(lv => {
        const colonIdx = lv.indexOf(':');
        if (colonIdx > -1) {
          const label = escapeHtml(lv.slice(0, colonIdx + 1));
          const value = escapeHtml(lv.slice(colonIdx + 1).trim());
          return `<div class="amity-row"><span class="amity-label">${label}</span> ${value}</div>`;
        }
        return `<div class="amity-row">${escapeHtml(lv)}</div>`;
      }).join('');
      elements.modalAmity.innerHTML = amityHtml;
      elements.modalAmitySection.style.display = '';
    } else if (elements.modalAmitySection) {
      elements.modalAmity.innerHTML = '';
      elements.modalAmitySection.style.display = 'none';
    }
    elements.modalBadge.innerHTML = getJobIconHTML(isJob ? entry.name : entry.job, 'modal-job-icon', isJob ? '🧭' : '🛡️');

    // Portrait / Sprite panel
    if (!isJob && elements.modalImagePanel) {
      const hasPortrait = assetSets.portrait.has(entry.id);
      const hasSprite = assetSets.sprite.has(entry.id);
      elements.modalImagePanel.style.display = 'flex';

      if (hasPortrait || hasSprite) {
        elements.modalImageFallback.style.display = 'none';
        elements.modalImage.style.display = 'block';

        // Default to portrait if available, else sprite
        let mode = state.modalImageMode;
        if (mode === 'portrait' && !hasPortrait && hasSprite) mode = 'sprite';
        if (mode === 'sprite' && !hasSprite && hasPortrait) mode = 'portrait';
        state.modalImageMode = mode;

        const src = mode === 'portrait' ? getPortraitPath(entry.id) : getSpritePath(entry.id);
        elements.modalImage.src = src;
        elements.modalImage.alt = `${escapeHtml(entry.name)} ${mode}`;

        // Toggle buttons
        elements.modalImageToggle.style.display = (hasPortrait && hasSprite) ? 'flex' : 'none';
        if (elements.modalPortraitBtn) {
          elements.modalPortraitBtn.classList.toggle('active', mode === 'portrait');
          elements.modalPortraitBtn.disabled = !hasPortrait;
        }
        if (elements.modalSpriteBtn) {
          elements.modalSpriteBtn.classList.toggle('active', mode === 'sprite');
          elements.modalSpriteBtn.disabled = !hasSprite;
        }
      } else {
        elements.modalImage.style.display = 'none';
        elements.modalImageFallback.style.display = 'flex';
        elements.modalImageFallback.innerHTML = getJobIconHTML(entry.job, 'modal-image-fallback-icon', '🛡️');
        elements.modalImageToggle.style.display = 'none';
      }
    } else if (elements.modalImagePanel) {
      elements.modalImagePanel.style.display = 'flex';
      elements.modalImage.style.display = 'none';
      elements.modalImageFallback.style.display = 'flex';
      elements.modalImageFallback.innerHTML = getJobIconHTML(entry.name, 'modal-image-fallback-icon', '🧭');
      elements.modalImageToggle.style.display = 'none';
    }

    // Image toggle handlers
    if (elements.modalPortraitBtn) {
      elements.modalPortraitBtn.onclick = function() {
        state.modalImageMode = 'portrait';
        const src = getPortraitPath(entry.id);
        if (src) { elements.modalImage.src = src; elements.modalImage.alt = `${escapeHtml(entry.name)} portrait`; }
        elements.modalPortraitBtn.classList.add('active');
        elements.modalSpriteBtn.classList.remove('active');
      };
    }
    if (elements.modalSpriteBtn) {
      elements.modalSpriteBtn.onclick = function() {
        state.modalImageMode = 'sprite';
        const src = getSpritePath(entry.id);
        if (src) { elements.modalImage.src = src; elements.modalImage.alt = `${escapeHtml(entry.name)} sprite`; }
        elements.modalSpriteBtn.classList.add('active');
        elements.modalPortraitBtn.classList.remove('active');
      };
    }
    // Click image to toggle
    if (elements.modalImage) {
      elements.modalImage.onclick = function() {
        if (!isJob && assetSets.portrait.has(entry.id) && assetSets.sprite.has(entry.id)) {
          const newMode = state.modalImageMode === 'portrait' ? 'sprite' : 'portrait';
          state.modalImageMode = newMode;
          const src = newMode === 'portrait' ? getPortraitPath(entry.id) : getSpritePath(entry.id);
          if (src) { elements.modalImage.src = src; elements.modalImage.alt = `${escapeHtml(entry.name)} ${newMode}`; }
          elements.modalPortraitBtn.classList.toggle('active', newMode === 'portrait');
          elements.modalSpriteBtn.classList.toggle('active', newMode === 'sprite');
        }
      };
    }

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
                  <span class="source-link-row">
                    <span class="source-link-main">${escapeHtml(skillName)}</span>
                    <span class="source-link-meta">${escapeHtml(costValue)}</span>
                  </span>
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

    state.previousFocus = document.activeElement;
    elements.modal.classList.add('active');
    elements.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (elements.modalClose && typeof elements.modalClose.focus === 'function') elements.modalClose.focus();
  }

  function closeModal() {
    elements.modal.classList.remove('active');
    elements.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.selected = null;
    if (state.previousFocus && typeof state.previousFocus.focus === 'function') {
      state.previousFocus.focus();
    }
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
        renderFilterControls();
        render();
      });
    }

    if (elements.weaponFilter) {
      elements.weaponFilter.addEventListener('click', (e) => {
        const btn = e.target.closest('.weapon-filter-btn');
        if (!btn) return;
        state.weaponFilter = btn.getAttribute('data-weapon') || 'all';
        renderFilterControls();
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

    if (elements.emptyResetBtn) {
      elements.emptyResetBtn.addEventListener('click', () => {
        elements.resetBtn.click();
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
          return;
        }
        if (event.key === 'Tab' && elements.modal && elements.modal.classList.contains('active')) {
          const focusable = elements.modal.querySelectorAll(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey) {
            if (document.activeElement === first) { event.preventDefault(); last.focus(); }
          } else {
            if (document.activeElement === last) { event.preventDefault(); first.focus(); }
          }
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
    const deferredHashEntry = hash ? (() => {
      const normalizedHash = hash.replace(/^job-/, '');
      return getCharacterEntries().find(entry => entry.id === normalizedHash);
    })() : null;

    preloadAssets().then(() => {
      render();
      if (deferredHashEntry) openModal(deferredHashEntry.type, deferredHashEntry.id);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


