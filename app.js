/**
 * OCTOPATH TRAVELER 0 // SKILL CODEX
 * Interactive Skill Database & Battle Inspector
 */

(function () {
  'use strict';

  // Application State
  const state = {
    activeCategory: 'All',
    activeSubtype: 'all',
    searchQuery: '',
    targetFilter: 'all',
    spFilter: 'all',
    sortFilter: 'name-asc',
    viewMode: 'grid',
    currentPage: 1,
    pageSize: 48,
    showFavoritesOnly: false,
    favorites: /** @type {Set<string>} */ (new Set(JSON.parse(localStorage.getItem('octo0_skill_favs') || '[]'))),
    selectedSkill: null
  };

  // Subtype metadata with icons
  /** @type {Record<string, SubtypeChip[]>} */
  const subtypeConfigs = {
    Physical: [
      { id: 'all', label: 'All Physical', icon: '' },
      { id: 'Sword', label: 'Sword', icon: 'assets/icons/icon_sword.png' },
      { id: 'Polearm', label: 'Polearm', icon: 'assets/icons/icon_polearm.png' },
      { id: 'Dagger', label: 'Dagger', icon: 'assets/icons/icon_dagger.png' },
      { id: 'Axe', label: 'Axe', icon: 'assets/icons/icon_axe.png' },
      { id: 'Bow', label: 'Bow', icon: 'assets/icons/icon_bow.png' },
      { id: 'Staff', label: 'Staff', icon: 'assets/icons/icon_staff.png' },
      { id: 'Tome', label: 'Tome', icon: 'assets/icons/icon_tome.png' },
      { id: 'Fan', label: 'Fan', icon: 'assets/icons/icon_fan.png' },
      { id: 'Unarmed', label: 'Unarmed', icon: 'assets/icons/icon_unarmed.svg' },
      { id: 'Weapon Select', label: 'Weapon Select' },
      { id: 'All Weapons', label: 'All Weapons' }
    ],
    Elemental: [
      { id: 'all', label: 'All Elemental', icon: '' },
      { id: 'Fire', label: 'Fire', icon: 'assets/icons/icon_fire.png' },
      { id: 'Ice', label: 'Ice', icon: 'assets/icons/icon_ice.png' },
      { id: 'Lightning', label: 'Lightning', icon: 'assets/icons/icon_lightning.png' },
      { id: 'Wind', label: 'Wind', icon: 'assets/icons/icon_wind.png' },
      { id: 'Light', label: 'Light', icon: 'assets/icons/icon_light.png' },
      { id: 'Dark', label: 'Dark', icon: 'assets/icons/icon_dark.png' },
      { id: 'Non-Elemental', label: 'Non-Elemental', icon: 'assets/icons/icon_spirit.svg' }
    ],
    Support: [
      { id: 'all', label: 'All Support', icon: '' },
      { id: 'Recovery', label: 'Healing & Recovery', icon: 'assets/icons/icon_recovery.png' },
      { id: 'Buff', label: 'Stat Buffs', icon: 'assets/icons/icon_buff.png' },
      { id: 'Debuff', label: 'Enemy Debuffs', icon: 'assets/icons/icon_debuff.png' },
      { id: 'Utility', label: 'Utility & Revive', glyph: '✦' }
    ],
    Passive: [
      { id: 'all', label: 'All Passives', icon: '' },
      { id: 'Passive Trait', label: 'Battle Traits', icon: 'assets/icons/icon_passive.png' }
    ],
    All: [
      { id: 'all', label: 'All Skills', icon: '' },
      { id: 'Physical', label: 'Physical', glyph: '⚔️' },
      { id: 'Elemental', label: 'Elemental', glyph: '✨' },
      { id: 'Support', label: 'Support', glyph: '💚' },
      { id: 'Passive', label: 'Passive', icon: 'assets/icons/icon_passive.png' }
    ]
  };

  // DOM Elements
  /** @type {SkillCodexElements} */
  const elements = {
    // Header metrics
    metricTotal: document.getElementById('metricTotal'),
    metricPhysical: document.getElementById('metricPhysical'),
    metricElemental: document.getElementById('metricElemental'),
    metricSupport: document.getElementById('metricSupport'),
    metricPassive: document.getElementById('metricPassive'),
    favToggleBtn: document.getElementById('favToggleBtn'),
    favCount: document.getElementById('favCount'),

    // Category tabs
    categoryTabs: document.getElementById('categoryTabs'),
    catCountPhysical: document.getElementById('catCountPhysical'),
    catCountElemental: document.getElementById('catCountElemental'),
    catCountSupport: document.getElementById('catCountSupport'),
    catCountPassive: document.getElementById('catCountPassive'),
    catCountAll: document.getElementById('catCountAll'),

    // Filters & Search
    skillSearchInput: document.getElementById('skillSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    subtypeChipsWrap: document.getElementById('subtypeChipsWrap'),
    targetFilter: document.getElementById('targetFilter'),
    spFilter: document.getElementById('spFilter'),
    sortFilter: document.getElementById('sortFilter'),
    viewToggleBtn: document.getElementById('viewToggleBtn'),
    resultsCount: document.getElementById('resultsCount'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Skill Grid & Empty State
    skillsGrid: document.getElementById('skillsGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),

    // Pagination
    paginationFooter: document.getElementById('paginationFooter'),
    paginationInfo: document.getElementById('paginationInfo'),
    prevPageBtn: document.getElementById('prevPageBtn'),
    nextPageBtn: document.getElementById('nextPageBtn'),
    pageCurrent: document.getElementById('pageCurrent'),

    // Modal
    detailModal: document.getElementById('detailModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalDoneBtn: document.getElementById('modalDoneBtn'),
    modalFavBtn: document.getElementById('modalFavBtn'),
    modalIconBadge: document.getElementById('modalIconBadge'),
    modalCategory: document.getElementById('modalCategory'),
    modalSubType: document.getElementById('modalSubType'),
    modalSp: document.getElementById('modalSp'),
    modalTarget: document.getElementById('modalTarget'),
    modalSkillName: document.getElementById('modalSkillName'),
    modalId: document.getElementById('modalId'),
    modalDescription: document.getElementById('modalDescription'),
    modalBoostSection: document.getElementById('modalBoostSection'),
    modalBoostTbody: document.getElementById('modalBoostTbody'),
    modalAilmentsSection: document.getElementById('modalAilmentsSection'),
    modalAilmentsList: document.getElementById('modalAilmentsList'),
    modalSourceSection: document.getElementById('modalSourceSection'),
    modalSource: document.getElementById('modalSource'),
    modalSpecsGrid: document.getElementById('modalSpecsGrid')
  };

  // Safe fallback if skillData is not loaded
  const dataset = (typeof skillData !== 'undefined' && Array.isArray(skillData)) ? skillData : [];
  /**
   * Escape dataset values before interpolating them into an HTML string.
   * Skill names, descriptions, subtypes, and ailment names come from generated
   * workbook data, so they must always be treated as text and never as markup.
   * The equipment codex has always done this; this keeps both codexes consistent.
   * @param {unknown} value
   * @returns {string}
   */
  function escapeHtml(value) {
    return String(value === undefined || value === null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Initialize Application
   */
  function init() {
    updateMetrics();
    renderSubtypeChips();
    bindEvents();
    render();

    const params = new URLSearchParams(window.location.search || '');
    const requested = params.get('skill');
    if (requested) {
      openSkillByName(requested);
      return;
    }

    const hashSkill = window.location.hash ? decodeURIComponent(window.location.hash.replace(/^#/, '')) : '';
    if (hashSkill) {
      openSkillByName(hashSkill.replace(/-/g, ' '));
    }
  }

  /**
   * Compute and display dataset counts
   */
  function updateMetrics() {
    const counts = {
      Physical: 0,
      Elemental: 0,
      Support: 0,
      Passive: 0,
      Total: dataset.length
    };

    dataset.forEach(skill => {
      if (counts[skill.category] !== undefined) {
        counts[skill.category]++;
      }
    });

    // Top metrics
    if (elements.metricTotal) elements.metricTotal.textContent = counts.Total.toLocaleString();
    if (elements.metricPhysical) elements.metricPhysical.textContent = counts.Physical.toLocaleString();
    if (elements.metricElemental) elements.metricElemental.textContent = counts.Elemental.toLocaleString();
    if (elements.metricSupport) elements.metricSupport.textContent = counts.Support.toLocaleString();
    if (elements.metricPassive) elements.metricPassive.textContent = counts.Passive.toLocaleString();

    // Tab badges
    if (elements.catCountPhysical) elements.catCountPhysical.textContent = counts.Physical.toLocaleString();
    if (elements.catCountElemental) elements.catCountElemental.textContent = counts.Elemental.toLocaleString();
    if (elements.catCountSupport) elements.catCountSupport.textContent = counts.Support.toLocaleString();
    if (elements.catCountPassive) elements.catCountPassive.textContent = counts.Passive.toLocaleString();
    if (elements.catCountAll) elements.catCountAll.textContent = counts.Total.toLocaleString();

    updateFavCount();
  }

  function updateFavCount() {
    if (elements.favCount) {
      elements.favCount.textContent = `Bookmarks (${state.favorites.size})`;
    }
  }

  /**
   * Render Subtype Chips based on active Category
   */
  function renderSubtypeChips() {
    const config = subtypeConfigs[state.activeCategory] || subtypeConfigs.All;
    elements.subtypeChipsWrap.innerHTML = '';

    config.forEach(item => {
      const chip = document.createElement('button');
      chip.className = `subtype-chip ${state.activeSubtype === item.id ? 'active' : ''}`;
      chip.type = 'button';

      let iconHtml = '';
      if (item.icon) {
        iconHtml = `<img src="${item.icon}" alt="${item.label}" class="subtype-chip-icon" />`;
      } else if (item.glyph) {
        iconHtml = `<span>${item.glyph}</span>`;
      }

      chip.innerHTML = `${iconHtml}<span>${item.label}</span>`;
      chip.addEventListener('click', () => {
        state.activeSubtype = item.id;
        state.currentPage = 1;
        renderSubtypeChips();
        render();
      });

      elements.subtypeChipsWrap.appendChild(chip);
    });
  }

  /**
   * Filter and sort the dataset based on current state
   */
  function getFilteredSkills() {
    const query = state.searchQuery.toLowerCase().trim();

    return dataset.filter(skill => {
      // 1. Favorites only toggle
      if (state.showFavoritesOnly && !state.favorites.has(skill.id)) {
        return false;
      }

      // 2. Category filter
      if (state.activeCategory !== 'All' && skill.category !== state.activeCategory) {
        return false;
      }

      // 3. Subtype filter
      if (state.activeSubtype !== 'all') {
        if (state.activeCategory === 'All') {
          if (skill.category !== state.activeSubtype) return false;
        } else {
          if (skill.subType !== state.activeSubtype) return false;
        }
      }

      // 4. Target filter
      if (state.targetFilter !== 'all') {
        if (state.targetFilter === 'Front/Back Row') {
          if (!skill.target.includes('Row')) return false;
        } else if (skill.target !== state.targetFilter) {
          return false;
        }
      }

      // 5. SP filter
      if (state.spFilter !== 'all') {
        const sp = skill.sp || 0;
        if (state.spFilter === '0' && sp !== 0) return false;
        if (state.spFilter === '1-15' && (sp < 1 || sp > 15)) return false;
        if (state.spFilter === '16-30' && (sp < 16 || sp > 30)) return false;
        if (state.spFilter === '31+' && sp < 31) return false;
      }

      // 6. Text query search
      if (query) {
        const matchName = skill.name && skill.name.toLowerCase().includes(query);
        const matchDetail = skill.detail && skill.detail.toLowerCase().includes(query);
        const matchSub = skill.subType && skill.subType.toLowerCase().includes(query);
        const matchTarget = skill.target && skill.target.toLowerCase().includes(query);
        const matchAilments = skill.ailments && skill.ailments.some(a => a.name.toLowerCase().includes(query));

        if (!matchName && !matchDetail && !matchSub && !matchTarget && !matchAilments) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      switch (state.sortFilter) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'sp-asc':
          return (a.sp || 0) - (b.sp || 0);
        case 'sp-desc':
          return (b.sp || 0) - (a.sp || 0);
        case 'potency-desc': {
          const maxA = Math.max(...(a.ratios || [0]));
          const maxB = Math.max(...(b.ratios || [0]));
          return maxB - maxA;
        }
        default:
          return 0;
      }
    });
  }

  /**
   * Main Render function
   */
  function render() {
    const filtered = getFilteredSkills();
    const total = filtered.length;
    const totalPages = Math.ceil(total / state.pageSize) || 1;

    // Boundary check for pagination
    if (state.currentPage > totalPages) state.currentPage = totalPages;
    if (state.currentPage < 1) state.currentPage = 1;

    const startIdx = (state.currentPage - 1) * state.pageSize;
    const endIdx = Math.min(startIdx + state.pageSize, total);
    const pageItems = filtered.slice(startIdx, endIdx);

    // Update Result count display
    elements.resultsCount.textContent = `Showing ${total.toLocaleString()} skill${total === 1 ? '' : 's'}`;

    // Handle Empty State
    if (total === 0) {
      elements.skillsGrid.innerHTML = '';
      elements.emptyState.style.display = 'block';
      elements.paginationFooter.style.display = 'none';
      return;
    }

    elements.emptyState.style.display = 'none';
    elements.paginationFooter.style.display = 'flex';

    // Render based on view mode
    if (state.viewMode === 'table') {
      renderSkillTable(pageItems);
    } else {
      renderSkillCards(pageItems);
    }

    // Update Pagination UI
    elements.paginationInfo.textContent = `Showing ${startIdx + 1}–${endIdx} of ${total.toLocaleString()}`;
    elements.pageCurrent.textContent = `Page ${state.currentPage} of ${totalPages}`;
    elements.prevPageBtn.disabled = state.currentPage <= 1;
    elements.nextPageBtn.disabled = state.currentPage >= totalPages;
  }

  /**
   * Render skill table view
   */
  function renderSkillTable(skills) {
    elements.skillsGrid.innerHTML = `
      <table class="skill-table" role="grid">
        <thead>
          <tr>
            <th scope="col">Icon</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Subtype</th>
            <th scope="col">SP</th>
            <th scope="col">Target</th>
            <th scope="col">Potency</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          ${skills.map(skill => {
            const isFav = state.favorites.has(skill.id);
            let iconHtml = '';
            if (skill.icon) {
              iconHtml = `<img src="${escapeHtml(skill.icon)}" alt="${escapeHtml(skill.subType)}" class="table-icon-img" />`;
            } else {
              const fallbackGlyphs = { Physical: '⚔️', Elemental: '✨', Support: '💚' };
              const fallbackIcons = { Passive: 'assets/icons/icon_passive.png', Buff: 'assets/icons/icon_buff.png', Debuff: 'assets/icons/icon_debuff.png', Recovery: 'assets/icons/icon_recovery.png' };
              if (fallbackIcons[skill.category] || fallbackIcons[skill.subType]) {
                const fbSrc = fallbackIcons[skill.subType] || fallbackIcons[skill.category];
                iconHtml = `<img src="${fbSrc}" alt="${skill.subType || skill.category}" class="table-glyph" />`;
              } else {
              iconHtml = `<span class="table-glyph">${fallbackGlyphs[skill.category] || '✦'}</span>`;
              }
            }

            const spDisplay = skill.sp > 0 ? `${skill.sp} SP` : 'PASSIVE';
            let potencyHtml = '';
            if (skill.ratios && skill.ratios.length > 0 && skill.ratios[0] > 0) {
              const basePotency = skill.ratios[0];
              const maxPotency = skill.ratios[skill.ratios.length - 1];
              if (basePotency === maxPotency) {
                potencyHtml = `${basePotency}%`;
              } else {
                potencyHtml = `${basePotency}% → ${maxPotency}%`;
              }
            } else if (skill.ailments && skill.ailments.length > 0) {
              potencyHtml = escapeHtml(skill.ailments[0].name);
            } else {
              potencyHtml = escapeHtml(skill.subType);
            }

            return `
              <tr data-id="${escapeHtml(skill.id)}">
                <td>${iconHtml}</td>
                <td>
                  <div class="table-skill-name">
                    <span>${escapeHtml(skill.name)}</span>
                    <button class="table-fav-btn ${isFav ? 'is-fav' : ''}" data-fav-id="${escapeHtml(skill.id)}" title="Bookmark Skill">
                      ${isFav ? '★' : '☆'}
                    </button>
                  </div>
                </td>
                <td><span class="table-category cat-${escapeHtml(skill.category)}">${escapeHtml(skill.category)}</span></td>
                <td>${escapeHtml(skill.subType)}</td>
                <td>${spDisplay}</td>
                <td>${escapeHtml(skill.target)}</td>
                <td>${potencyHtml}</td>
                <td><button class="table-inspect-btn" data-id="${escapeHtml(skill.id)}" title="Inspect">Inspect</button></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Add click handlers for table rows
    elements.skillsGrid.querySelectorAll('.skill-table tbody tr').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.table-fav-btn') || e.target.closest('.table-inspect-btn')) return;
        const skillId = row.getAttribute('data-id');
        const skill = dataset.find(s => s.id === skillId);
        if (skill) openModal(skill);
      });
    });

    // Favorite toggle buttons in table
    elements.skillsGrid.querySelectorAll('.table-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(btn.getAttribute('data-fav-id'));
      });
    });

    // Inspect buttons in table
    elements.skillsGrid.querySelectorAll('.table-inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const skillId = btn.getAttribute('data-id');
        const skill = dataset.find(s => s.id === skillId);
        if (skill) openModal(skill);
      });
    });
  }

  /**
   * Render individual skill cards
   */
  function renderSkillCards(skills) {
    elements.skillsGrid.innerHTML = '';

    skills.forEach(skill => {
      const isFav = state.favorites.has(skill.id);
      const card = document.createElement('article');
      card.className = `skill-card cat-${escapeHtml(skill.category)}`;
      card.setAttribute('data-id', skill.id);

      // Icon HTML
      let iconHtml = '';
      if (skill.icon) {
        iconHtml = `<img src="${escapeHtml(skill.icon)}" alt="${escapeHtml(skill.subType)}" class="card-icon-img" />`;
      } else {
        const fallbackGlyphs = {
          Physical: '⚔️',
          Elemental: '✨',
          Support: '💚'
        };
        const fallbackIcons = { Passive: 'assets/icons/icon_passive.png', Buff: 'assets/icons/icon_buff.png', Debuff: 'assets/icons/icon_debuff.png', Recovery: 'assets/icons/icon_recovery.png' };
        if (fallbackIcons[skill.category] || fallbackIcons[skill.subType]) {
          const fbSrc = fallbackIcons[skill.subType] || fallbackIcons[skill.category];
          iconHtml = `<img src="${escapeHtml(fbSrc)}" alt="${escapeHtml(skill.subType || skill.category)}" class="card-glyph" />`;
        } else {
        iconHtml = `<span class="card-glyph">${fallbackGlyphs[skill.category] || '✦'}</span>`;
        }
      }

      // SP Badge
      const spBadge = skill.sp > 0 
        ? `<span class="card-sp-badge">⚡ ${skill.sp} SP</span>`
        : `<span class="card-sp-badge sp-zero">PASSIVE</span>`;

      // Hit Count tag
      const maxHits = Math.max(...(skill.hits || [0]));
      const hitsTag = maxHits > 1 ? `<span class="card-hits-tag">⚔️ ${maxHits} Hits</span>` : '';

      // Potency Range
      let potencyHtml = '';
      if (skill.ratios && skill.ratios.length > 0 && skill.ratios[0] > 0) {
        const basePotency = skill.ratios[0];
        const maxPotency = skill.ratios[skill.ratios.length - 1];
        if (basePotency === maxPotency) {
          potencyHtml = `<span class="card-potency-range">Potency: ${basePotency}%</span>`;
        } else {
          potencyHtml = `<span class="card-potency-range">Potency: ${basePotency}% → ${maxPotency}%</span>`;
        }
      } else if (skill.ailments && skill.ailments.length > 0) {
        potencyHtml = `<span class="card-potency-range">${escapeHtml(skill.ailments[0].name)}</span>`;
      } else {
        potencyHtml = `<span class="card-potency-range">${escapeHtml(skill.subType)}</span>`;
      }

      card.innerHTML = `
        <div>
          <div class="card-header-row">
            <div class="card-type-wrap">
              <div class="card-icon-frame">${iconHtml}</div>
              <span class="card-subtype-label">${escapeHtml(skill.subType)}</span>
            </div>
            ${spBadge}
          </div>

          <div class="card-title-row">
            <h3 class="card-skill-name">${escapeHtml(skill.name)}</h3>
            <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" data-fav-id="${escapeHtml(skill.id)}" title="Bookmark Skill">
              ${isFav ? '★' : '☆'}
            </button>
          </div>

          <div class="card-meta-bar">
            <span class="card-target-tag">${escapeHtml(skill.target)}</span>
            ${hitsTag}
          </div>

          <p class="card-description">${escapeHtml(skill.detail || 'No description available.')}</p>
        </div>

        <div class="card-combat-footer">
          ${potencyHtml}
          <span class="card-inspect-hint">Inspect ↗</span>
        </div>
      `;

      // Click card opens detail modal
      card.addEventListener('click', (e) => {
        // Prevent modal if user clicked favorite star
        if (/** @type {HTMLElement} */ (e.target).closest('.card-fav-btn')) return;
        openModal(skill);
      });

      // Favorite toggle button on card
      const favBtn = card.querySelector('.card-fav-btn');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(skill.id);
      });

      card.classList.add('card-enter');
      elements.skillsGrid.appendChild(card);
    });
  }

  /**
   * Open and populate the Skill Detail Modal
   */
  function openSkillByName(name) {
    if (!name) return;
    const target = String(name).trim();
    const match = dataset.find(skill => skill && skill.name && skill.name.toLowerCase() === target.toLowerCase());
    if (match) {
      openModal(match);
    }
  }

  function openModal(skill) {
    state.selectedSkill = skill;

    // Header badge
    let iconHtml = '';
    if (skill.icon) {
      iconHtml = `<img src="${escapeHtml(skill.icon)}" alt="${escapeHtml(skill.subType)}" />`;
    } else {
      const fallbackGlyphs = { Physical: '⚔️', Elemental: '✨', Support: '💚' };
      const fallbackIcons = { Passive: 'assets/icons/icon_passive.png', Buff: 'assets/icons/icon_buff.png', Debuff: 'assets/icons/icon_debuff.png', Recovery: 'assets/icons/icon_recovery.png' };
      if (fallbackIcons[skill.category] || fallbackIcons[skill.subType]) {
        const fbSrc = fallbackIcons[skill.subType] || fallbackIcons[skill.category];
        iconHtml = `<img src="${escapeHtml(fbSrc)}" alt="${escapeHtml(skill.subType || skill.category)}" />`;
      } else {
      iconHtml = `<span>${fallbackGlyphs[skill.category] || '✦'}</span>`;
      }
    }
    elements.modalIconBadge.innerHTML = iconHtml;

    // Meta chips
    elements.modalCategory.textContent = skill.category;
    elements.modalSubType.textContent = skill.subType;
    elements.modalSp.textContent = skill.sp > 0 ? `${skill.sp} SP` : '0 SP (PASSIVE)';
    elements.modalTarget.textContent = `Target: ${skill.target}`;

    elements.modalSkillName.textContent = skill.name;
    elements.modalId.textContent = `Skill ID: #${skill.id}`;
    elements.modalDescription.textContent = skill.detail || 'No detailed lore or combat notes provided.';

    // Character / job source links from the workbook exports
    const sourceMap = (() => {
      const win = typeof window !== 'undefined' ? window : null;
      const fromWindow = win && (win.characterJobData || win.characterSourceIndex) ? (
        win.characterJobData && win.characterJobData.skillIndex ? win.characterJobData.skillIndex : win.characterSourceIndex
      ) : null;
      const fromGlobal = typeof characterJobData !== 'undefined' && characterJobData && characterJobData.skillIndex
        ? characterJobData.skillIndex
        : (typeof characterSourceIndex !== 'undefined' ? characterSourceIndex : null);
      return fromWindow || fromGlobal || {};
    })();

    const normalizeSourceName = value => String(value || '').trim().toLowerCase();
    const skillSourceEntries = (() => {
      const wanted = normalizeSourceName(skill.name);
      const direct = sourceMap[skill.name] || sourceMap[skill.name.toLowerCase()] || [];
      if (direct.length) return direct;
      const matched = Object.keys(sourceMap).flatMap(key => {
        if (normalizeSourceName(key) === wanted) return sourceMap[key] || [];
        return [];
      });
      return matched;
    })();

    const sourceMarkup = skillSourceEntries.length
      ? skillSourceEntries.map(source => {
          const label = source.label || source.name || 'Character / Job';
          const href = source.href || 'character.html';
          return `
            <a class="source-link-item" href="${escapeHtml(href)}">
              <span class="source-kind">${escapeHtml(source.type === 'job' ? 'Job' : 'Character')}</span>
              <span>${escapeHtml(label)}</span>
            </a>
          `;
        }).join('')
      : '<div class="source-link-item"><span class="source-kind">Unassigned</span><span>No character or job currently lists this skill.</span></div>';

    if (elements.modalSource) {
      elements.modalSource.innerHTML = sourceMarkup;
    }

    // Boost Scaling Table
    if (skill.ratios && skill.ratios.some(r => r > 0)) {
      elements.modalBoostSection.style.display = 'block';
      const hits = skill.hits || [0, 0, 0, 0];
      elements.modalBoostTbody.innerHTML = `
        <tr>
          <td style="text-align: left; font-weight: 600; color: var(--text-secondary);">Potency Ratio</td>
          <td>${skill.ratios[0]}%</td>
          <td>${skill.ratios[1]}%</td>
          <td>${skill.ratios[2]}%</td>
          <td>${skill.ratios[3]}%</td>
        </tr>
        ${hits.some(h => h > 0) ? `
        <tr>
          <td style="text-align: left; font-weight: 600; color: var(--text-secondary);">Hit Count</td>
          <td>${hits[0]}</td>
          <td>${hits[1]}</td>
          <td>${hits[2]}</td>
          <td>${hits[3]}</td>
        </tr>` : ''}
      `;
    } else {
      elements.modalBoostSection.style.display = 'none';
    }

    // Ailments & Effects
    if (skill.ailments && skill.ailments.length > 0) {
      elements.modalAilmentsSection.style.display = 'block';
      elements.modalAilmentsList.innerHTML = skill.ailments.map(a => `
        <div class="ailment-row">
          <span class="ailment-name">✦ ${escapeHtml(a.name)}</span>
          <span class="ailment-stats">${a.efficacy ? `Efficacy: ${escapeHtml(a.efficacy)}%` : ''} ${a.value ? `(Magnitude: ${escapeHtml(a.value)})` : ''}</span>
        </div>
      `).join('');
    } else {
      elements.modalAilmentsSection.style.display = 'none';
    }

    // Combat Specs Grid
    elements.modalSpecsGrid.innerHTML = `
      <div class="spec-item">
        <span class="spec-label">Target Scope</span>
        <span class="spec-value">${escapeHtml(skill.target)}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Duration / Turns</span>
        <span class="spec-value">${skill.turns && skill.turns !== '0,0,0,0' ? escapeHtml(skill.turns) : 'Instant / Permanent'}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Category</span>
        <span class="spec-value">${escapeHtml(skill.category)}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Subtype / Family</span>
        <span class="spec-value">${escapeHtml(skill.subType)}</span>
      </div>
    `;

    // Modal Fav Button text
    updateModalFavButton();

    // Show modal
    state.previousFocus = document.activeElement;
    elements.detailModal.classList.add('active');
    elements.detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (typeof elements.modalCloseBtn.focus === 'function') elements.modalCloseBtn.focus();
  }

  function closeModal() {
    elements.detailModal.classList.remove('active');
    elements.detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.selectedSkill = null;
    if (state.previousFocus && typeof state.previousFocus.focus === 'function') {
      state.previousFocus.focus();
    }
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }

    localStorage.setItem('octo0_skill_favs', JSON.stringify(Array.from(state.favorites)));
    updateFavCount();
    updateModalFavButton();
    render();
  }

  function updateModalFavButton() {
    if (!state.selectedSkill) return;
    const isFav = state.favorites.has(state.selectedSkill.id);
    elements.modalFavBtn.textContent = isFav ? '★ Bookmarked' : '☆ Add to Bookmarks';
    elements.modalFavBtn.classList.toggle('active', isFav);
  }

  /**
   * Bind event listeners
   */
  function bindEvents() {
    // Category Tabs
    elements.categoryTabs.addEventListener('click', (e) => {
      const tab = /** @type {HTMLElement} */ (e.target).closest('.cat-tab');
      if (!tab) return;

      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      state.activeCategory = tab.getAttribute('data-category');
      state.activeSubtype = 'all';
      state.currentPage = 1;

      renderSubtypeChips();
      render();
    });

    // Search Input with live debounce
    let searchDebounce = null;
    elements.skillSearchInput.addEventListener('input', () => {
      clearTimeout(searchDebounce);
      const val = elements.skillSearchInput.value;
      elements.clearSearchBtn.style.display = val ? 'block' : 'none';

      searchDebounce = setTimeout(() => {
        state.searchQuery = val;
        state.currentPage = 1;
        render();
      }, 150);
    });

    // Clear Search Button
    elements.clearSearchBtn.addEventListener('click', () => {
      elements.skillSearchInput.value = '';
      elements.clearSearchBtn.style.display = 'none';
      state.searchQuery = '';
      state.currentPage = 1;
      render();
    });

    // Dropdown filters
    elements.targetFilter.addEventListener('change', () => {
      state.targetFilter = elements.targetFilter.value;
      state.currentPage = 1;
      render();
    });

    elements.spFilter.addEventListener('change', () => {
      state.spFilter = elements.spFilter.value;
      state.currentPage = 1;
      render();
    });

    elements.sortFilter.addEventListener('change', () => {
      state.sortFilter = elements.sortFilter.value;
      state.currentPage = 1;
      render();
    });

    // View toggle button
    elements.viewToggleBtn.addEventListener('click', () => {
      state.viewMode = state.viewMode === 'grid' ? 'table' : 'grid';
      const isTable = state.viewMode === 'table';
      elements.viewToggleBtn.title = isTable ? 'Switch to Grid View' : 'Switch to Table View';
      const viewIcon = elements.viewToggleBtn.querySelector('.view-icon');
      const viewText = elements.viewToggleBtn.querySelector('.view-text');
      if (viewIcon) viewIcon.textContent = isTable ? '☐' : '☰';
      if (viewText) viewText.textContent = isTable ? 'Grid' : 'Table';
      render();
    });

    // Reset Filters Button
    const resetAll = () => {
      state.activeCategory = 'All';
      state.activeSubtype = 'all';
      state.searchQuery = '';
      state.targetFilter = 'all';
      state.spFilter = 'all';
      state.sortFilter = 'name-asc';
      state.viewMode = 'grid';
      state.showFavoritesOnly = false;
      state.currentPage = 1;

      elements.skillSearchInput.value = '';
      elements.clearSearchBtn.style.display = 'none';
      elements.targetFilter.value = 'all';
      elements.spFilter.value = 'all';
      elements.sortFilter.value = 'name-asc';
      elements.favToggleBtn.classList.remove('active');
      const viewIcon = elements.viewToggleBtn?.querySelector('.view-icon');
      const viewText = elements.viewToggleBtn?.querySelector('.view-text');
      if (viewIcon) viewIcon.textContent = '☰';
      if (viewText) viewText.textContent = 'Table';
      if (elements.viewToggleBtn) elements.viewToggleBtn.title = 'Switch to Table View';

      document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-category') === 'Physical');
      });

      renderSubtypeChips();
      render();
    };

    elements.resetFiltersBtn.addEventListener('click', resetAll);
    elements.emptyResetBtn.addEventListener('click', resetAll);

    // Favorites view toggle in header
    elements.favToggleBtn.addEventListener('click', () => {
      state.showFavoritesOnly = !state.showFavoritesOnly;
      elements.favToggleBtn.classList.toggle('active', state.showFavoritesOnly);
      state.currentPage = 1;
      render();
    });

    // Pagination buttons
    elements.prevPageBtn.addEventListener('click', () => {
      if (state.currentPage > 1) {
        state.currentPage--;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    elements.nextPageBtn.addEventListener('click', () => {
      state.currentPage++;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal Events
    elements.modalCloseBtn.addEventListener('click', closeModal);
    elements.modalDoneBtn.addEventListener('click', closeModal);
    elements.detailModal.addEventListener('click', (e) => {
      if (e.target === elements.detailModal) closeModal();
    });

    elements.modalFavBtn.addEventListener('click', () => {
      if (state.selectedSkill) {
        toggleFavorite(state.selectedSkill.id);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.detailModal.classList.contains('active')) {
        closeModal();
        return;
      }
      if ((e.key === 'Tab') && elements.detailModal.classList.contains('active')) {
        const focusable = elements.detailModal.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
