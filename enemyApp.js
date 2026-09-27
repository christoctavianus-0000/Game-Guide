(function () {
  'use strict';

  const ALL_ATTACK_TYPES = [
    { key: 'Sword', name: 'Sword', icon: 'assets/icons/icon_sword.png' },
    { key: 'Spear', name: 'Spear', icon: 'assets/icons/icon_polearm.png' },
    { key: 'Dagger', name: 'Dagger', icon: 'assets/icons/icon_dagger.png' },
    { key: 'Axe', name: 'Axe', icon: 'assets/icons/icon_axe.png' },
    { key: 'Bow', name: 'Bow', icon: 'assets/icons/icon_bow.png' },
    { key: 'Staff', name: 'Staff', icon: 'assets/icons/icon_staff.png' },
    { key: 'Tome', name: 'Tome', icon: 'assets/icons/icon_tome.png' },
    { key: 'Fan', name: 'Fan', icon: 'assets/icons/icon_fan.png' },
    { key: 'Fire', name: 'Fire', icon: 'assets/icons/icon_fire.png' },
    { key: 'Ice', name: 'Ice', icon: 'assets/icons/icon_ice.png' },
    { key: 'Thunder', name: 'Thunder', icon: 'assets/icons/icon_lightning.png' },
    { key: 'Wind', name: 'Wind', icon: 'assets/icons/icon_wind.png' },
    { key: 'Light', name: 'Light', icon: 'assets/icons/icon_light.png' },
    { key: 'Dark', name: 'Dark', icon: 'assets/icons/icon_dark.png' }
  ];

  const ENEMY_STAT_META = [
    { key: 'hp',       label: 'HP',   icon: 'assets/icons/icon_hp.png' },
    { key: 'sp',       label: 'SP',   icon: 'assets/icons/icon_sp.png' },
    { key: 'patk',     label: 'PATK', icon: 'assets/icons/icon_patk.png' },
    { key: 'pdef',     label: 'PDEF', icon: 'assets/icons/icon_pdef.png' },
    { key: 'matk',     label: 'MATK', icon: 'assets/icons/icon_matk.png' },
    { key: 'mdef',     label: 'MDEF', icon: 'assets/icons/icon_mdef.png' },
    { key: 'speed',    label: 'SPD',  icon: 'assets/icons/icon_spd.png' },
    { key: 'crit',     label: 'CRT',  icon: 'assets/icons/icon_crt.png' },
    { key: 'accuracy', label: 'ACC',  icon: 'assets/icons/icon_acc.png' },
    { key: 'evasion',  label: 'EVA',  icon: 'assets/icons/icon_eva.png' }
  ];

  function renderStatTable(enemy) {
    var ths = ENEMY_STAT_META.map(function (s) {
      return '<th><img src="' + s.icon + '" alt="" class="th-stat-icon"> ' + s.label + '</th>';
    }).join('');
    var tds = ENEMY_STAT_META.map(function (s) {
      var val = enemy[s.key] != null ? Number(enemy[s.key]) : null;
      return '<td class="num' + (val ? ' has-value' : ' is-zero') + '">' + (val ? val.toLocaleString() : '—') + '</td>';
    }).join('');
    return '<div class="enemy-modal-stats-wrap"><table class="enemy-modal-stats-table"><thead><tr>' + ths + '</tr></thead><tbody><tr>' + tds + '</tr></tbody></table></div>';
  }

  const state = {
    searchQuery: '',
    area: 'all',
    subArea: 'all',
    weakness: 'all',
    type: 'all',
    sortKey: 'name',
    sortDir: 'asc',
    weaknessSort: null,
    modalEnemy: null,
    currentPage: 1,
    pageSize: 48
  };

  const dataset = Array.isArray(window.enemyData)
    ? window.enemyData
    : (typeof enemyData !== 'undefined' && Array.isArray(enemyData) ? enemyData : []);

  const elements = {
    enemyMetricTotal: document.getElementById('enemyMetricTotal'),
    enemyMetricAreas: document.getElementById('enemyMetricAreas'),
    enemySearchInput: document.getElementById('enemySearchInput'),
    enemyClearSearch: document.getElementById('enemyClearSearch'),
    enemyAreaFilter: document.getElementById('enemyAreaFilter'),
    enemySubAreaFilter: document.getElementById('enemySubAreaFilter'),
    enemyWeaknessFilter: document.getElementById('enemyWeaknessFilter'),
    enemyTypeTabs: document.getElementById('enemyTypeTabs'),
    enemyCatCountAll: document.getElementById('enemyCatCountAll'),
    enemyCatCountRegular: document.getElementById('enemyCatCountRegular'),
    enemyCatCountBoss: document.getElementById('enemyCatCountBoss'),
    enemyCatCountElite: document.getElementById('enemyCatCountElite'),
    enemyCatCountArena: document.getElementById('enemyCatCountArena'),
    enemyCatCountSidequest: document.getElementById('enemyCatCountSidequest'),
    enemyCatCountRare: document.getElementById('enemyCatCountRare'),
    enemySortFilter: document.getElementById('enemySortFilter'),
    enemyResultsCount: document.getElementById('enemyResultsCount'),
    enemyResetBtn: document.getElementById('enemyResetBtn'),
    enemyTableBody: document.getElementById('enemyTableBody'),
    enemyEmptyState: document.getElementById('enemyEmptyState'),
    enemyEmptyResetBtn: document.getElementById('enemyEmptyResetBtn'),
    enemyModal: document.getElementById('enemyModal'),
    enemyModalClose: document.getElementById('enemyModalClose'),
    enemyModalContent: document.getElementById('enemyModalContent'),
    enemyPaginationFooter: document.getElementById('enemyPaginationFooter'),
    enemyPaginationInfo: document.getElementById('enemyPaginationInfo'),
    enemyPrevPageBtn: document.getElementById('enemyPrevPageBtn'),
    enemyNextPageBtn: document.getElementById('enemyNextPageBtn'),
    enemyPageCurrent: document.getElementById('enemyPageCurrent')
  };

  function cleanText(value) {
    return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
  }

  function normalizeWeaknesses(raw) {
    if (!Array.isArray(raw)) return [];
    const values = raw
      .map(item => cleanText(item))
      .filter(Boolean)
      .filter(item => item !== 'None' && item !== 'X' && item !== '—');
    return values;
  }

  function getUniqueValues(key) {
    const set = new Set();
    dataset.forEach(enemy => {
      const value = enemy[key];
      if (value === undefined || value === null || value === '') return;
      const text = cleanText(value);
      if (text) set.add(text);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }

  function renderFilters() {
    const areas = getUniqueValues('area');
    const subAreas = getUniqueValues('subArea');
    const weaknesses = [...new Set(dataset.flatMap(enemy => normalizeWeaknesses(enemy.weaknesses)))].sort((a, b) => a.localeCompare(b));
    const types = getUniqueValues('type');

    const populate = (select, values, current) => {
      select.innerHTML = '<option value="all">All</option>';
      values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        if (value === current) option.selected = true;
        select.appendChild(option);
      });
      if (current && !values.includes(current)) {
        select.value = 'all';
      }
    };

    populate(elements.enemyAreaFilter, areas, state.area);
    populate(elements.enemySubAreaFilter, subAreas, state.subArea);
    populate(elements.enemyWeaknessFilter, weaknesses, state.weakness);
    updateCategoryTabCounts();
    syncSortSelect();
  }

  function updateCategoryTabCounts() {
    const counts = { Regular: 0, Boss: 0, Rare: 0, Elite: 0, Arena: 0, Sidequest: 0 };
    dataset.forEach(enemy => {
      const type = enemy.type || 'Regular';
      if (counts.hasOwnProperty(type)) counts[type]++;
    });
    if (elements.enemyCatCountAll) elements.enemyCatCountAll.textContent = String(dataset.length);
    if (elements.enemyCatCountRegular) elements.enemyCatCountRegular.textContent = String(counts.Regular);
    if (elements.enemyCatCountBoss) elements.enemyCatCountBoss.textContent = String(counts.Boss);
    if (elements.enemyCatCountElite) elements.enemyCatCountElite.textContent = String(counts.Elite);
    if (elements.enemyCatCountArena) elements.enemyCatCountArena.textContent = String(counts.Arena);
    if (elements.enemyCatCountSidequest) elements.enemyCatCountSidequest.textContent = String(counts.Sidequest);
    if (elements.enemyCatCountRare) elements.enemyCatCountRare.textContent = String(counts.Rare);
  }

  function syncSortSelect() {
    if (!elements.enemySortFilter) return;
    const compound = `${state.sortKey}-${state.sortDir}`;
    // Fallback if exact compound option doesn't exist
    if (Array.from(elements.enemySortFilter.options || []).some(opt => opt.value === compound)) {
      elements.enemySortFilter.value = compound;
    } else {
      elements.enemySortFilter.value = `${state.sortKey}-desc`;
    }
  }

  function updateHeaderSortIndicators() {
    const headerCells = document.querySelectorAll('.enemy-table th.sortable');
    headerCells.forEach(cell => {
      const key = cell.getAttribute('data-sort-key');
      const isActive = key === state.sortKey;
      cell.classList.toggle('sort-active', isActive);
      cell.classList.toggle('sort-asc', isActive && state.sortDir === 'asc');
      cell.classList.toggle('sort-desc', isActive && state.sortDir === 'desc');
    });
  }

  function updateWeaknessHeaderIcons() {
    document.querySelectorAll('.weakness-icon').forEach(icon => {
      const weakness = icon.getAttribute('data-weakness');
      const isActive = state.sortKey === 'weakness' && state.weaknessSort === weakness;
      icon.classList.toggle('active', isActive);
    });
  }

  function openEnemyModal(enemy) {
    state.modalEnemy = enemy;
    const weaknesses = normalizeWeaknesses(enemy.weaknesses);
    const weaknessGrid = renderWeaknessGrid(weaknesses);
    const skillList = (enemy.skills || []).map(skill => 
      `<li>${cleanText(skill.name || '')} <span class="skill-type">(${cleanText(skill.type || '')})</span></li>`
    ).join('');

    const modalHTML = `
      <div class="modal-header">
        <h2 class="modal-title" id="enemyModalTitle">${cleanText(enemy.name)}</h2>
        <button class="modal-close-btn" id="enemyModalClose">×</button>
      </div>
      <div class="modal-body">
        <div class="enemy-modal-grid">
          <div class="enemy-modal-field">
            <span class="field-label">Type:</span>
            <span class="enemy-type-badge" data-type="${cleanText(enemy.type || 'Regular')}">${cleanText(enemy.type || 'Regular')}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Level:</span>
            <span class="field-value">${Number(enemy.level) || 0}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Area:</span>
            <span class="field-value">${cleanText(enemy.area)}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Sub Area:</span>
            <span class="field-value">${cleanText(enemy.subArea)}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Shield:</span>
            <span class="field-value">${Number(enemy.shields) || 0}</span>
          </div>
          <div class="enemy-modal-field full-width">
            <span class="field-label">Stats:</span>
            ${renderStatTable(enemy)}
          </div>
          <div class="enemy-modal-field full-width">
            <span class="field-label">Weaknesses:</span>
            <div class="enemy-weakness-grid">${weaknessGrid}</div>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Steal:</span>
            <span class="field-value">${enemy.steal || '—'}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Drop:</span>
            <span class="field-value">${enemy.drop || '—'}</span>
          </div>
          <div class="enemy-modal-field full-width">
            <span class="field-label">Status Immunities:</span>
            <span class="field-value">${enemy.immunities || '—'}</span>
          </div>
          <div class="enemy-modal-field full-width">
            <span class="field-label">Skills:</span>
            <ul class="enemy-skills-list">${skillList || '<li>—</li>'}</ul>
          </div>
        </div>
      </div>
    `;

    elements.enemyModalContent.innerHTML = modalHTML;
    state.previousFocus = document.activeElement;
    elements.enemyModal.classList.add('active');
    elements.enemyModal.setAttribute('aria-hidden', 'false');
    const closeBtn = document.getElementById('enemyModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeEnemyModal);
    if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
  }

  function closeEnemyModal() {
    state.modalEnemy = null;
    elements.enemyModal.classList.remove('active');
    elements.enemyModal.setAttribute('aria-hidden', 'true');
    if (state.previousFocus && typeof state.previousFocus.focus === 'function') {
      state.previousFocus.focus();
    }
  }

  function getFilteredEnemies() {
    const query = state.searchQuery.toLowerCase();

    return dataset.filter(enemy => {
      const weaknessValues = normalizeWeaknesses(enemy.weaknesses);
      const skillText = (enemy.skills || []).map(skill => skill.name || '').join(' ');

      if (state.area !== 'all' && enemy.area !== state.area) return false;
      if (state.subArea !== 'all' && enemy.subArea !== state.subArea) return false;
      if (state.weakness !== 'all' && !weaknessValues.includes(state.weakness)) return false;
      if (state.type !== 'all' && enemy.type !== state.type) return false;

      if (query) {
        const haystack = [enemy.name, enemy.area, enemy.subArea, enemy.type, weaknessValues.join(' '), skillText].join(' ').toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      return true;
    }).sort((a, b) => {
      const dir = state.sortDir === 'desc' ? -1 : 1;
      const key = state.sortKey;

      if (key === 'name' || key === 'area' || key === 'subArea' || key === 'type' || key === 'steal' || key === 'drop') {
        const valA = cleanText(a[key]);
        const valB = cleanText(b[key]);
        const cmp = valA.localeCompare(valB);
        return cmp !== 0 ? cmp * dir : a.name.localeCompare(b.name);
      }

      if (key === 'weakness') {
        if (state.weaknessSort) {
          const target = state.weaknessSort;
          const hasA = normalizeWeaknesses(a.weaknesses).includes(target) ? 1 : 0;
          const hasB = normalizeWeaknesses(b.weaknesses).includes(target) ? 1 : 0;
          if (hasA !== hasB) {
            return (hasA - hasB) * dir;
          }
          const countA = normalizeWeaknesses(a.weaknesses).length;
          const countB = normalizeWeaknesses(b.weaknesses).length;
          if (countA !== countB) return countB - countA;
          return a.name.localeCompare(b.name);
        }

        const countA = normalizeWeaknesses(a.weaknesses).length;
        const countB = normalizeWeaknesses(b.weaknesses).length;
        if (countA !== countB) {
          return (countA - countB) * dir;
        }
        return a.name.localeCompare(b.name);
      }

      // Numeric keys: shields, level, hp, patk, pdef
      const numA = Number(a[key]) || 0;
      const numB = Number(b[key]) || 0;
      if (numA !== numB) {
        return (numA - numB) * dir;
      }
      return a.name.localeCompare(b.name);
    });
  }

  function renderWeaknessGrid(weaknesses) {
    const weakSet = new Set(weaknesses);
    return ALL_ATTACK_TYPES.map(type => {
      const isWeak = weakSet.has(type.key);
      const statusClass = isWeak ? 'is-weak' : 'not-weak';
      const title = isWeak ? `${type.name}: Weakness` : `${type.name}: Not Weak`;
      return `
        <span class="enemy-atk-icon ${statusClass}" title="${title}">
          <img src="${type.icon}" alt="${type.name}" loading="lazy" />
        </span>
      `;
    }).join('');
  }

  function renderTable() {
    const filtered = getFilteredEnemies();
    const total = filtered.length;
    const totalPages = Math.ceil(total / state.pageSize) || 1;
    if (state.currentPage > totalPages) state.currentPage = totalPages;
    if (state.currentPage < 1) state.currentPage = 1;
    const startIdx = (state.currentPage - 1) * state.pageSize;
    const endIdx = Math.min(startIdx + state.pageSize, total);
    const pageItems = filtered.slice(startIdx, endIdx);

    const rows = pageItems.map(enemy => {
      const weaknesses = normalizeWeaknesses(enemy.weaknesses);
      const weaknessGrid = renderWeaknessGrid(weaknesses);

      return `
        <tr class="enemy-row" data-enemy-id="${enemy.id}">
          <td class="enemy-name-cell"><button class="enemy-name-btn" data-enemy-id="${enemy.id}">${cleanText(enemy.name)}</button></td>
          <td>${cleanText(enemy.area)}</td>
          <td>${cleanText(enemy.subArea)}</td>
          <td><span class="enemy-type-badge" data-type="${cleanText(enemy.type || 'Regular')}">${cleanText(enemy.type || 'Regular')}</span></td>
          <td class="num font-num enemy-shield-val">${Number(enemy.shields) || 0}</td>
          <td class="enemy-weakness-cell">
            <div class="enemy-weakness-grid">${weaknessGrid}</div>
          </td>
          <td class="num font-num">${Number(enemy.level) || 0}</td>
          <td>${enemy.steal || '—'}</td>
          <td>${enemy.drop || '—'}</td>
        </tr>
      `;
    }).join('');

    elements.enemyTableBody.innerHTML = rows;
    // Stagger animation for table rows
    elements.enemyTableBody.querySelectorAll('tr').forEach((tr, i) => {
      tr.classList.add('row-enter');
      tr.style.animationDelay = `${i * 25}ms`;
    });
    elements.enemyMetricTotal.textContent = String(dataset.length);
    elements.enemyMetricAreas.textContent = String(new Set(dataset.map(enemy => cleanText(enemy.area))).size);
    elements.enemyResultsCount.textContent = `Showing ${total} enemies`;
    elements.enemyEmptyState.style.display = total ? 'none' : 'block';
    updateHeaderSortIndicators();
    updateWeaknessHeaderIcons();

    // Pagination footer
    if (total === 0) {
      elements.enemyPaginationFooter.style.display = 'none';
    } else {
      elements.enemyPaginationFooter.style.display = 'flex';
      elements.enemyPaginationInfo.textContent = 'Showing ' + (startIdx + 1) + '–' + endIdx + ' of ' + total.toLocaleString();
      elements.enemyPageCurrent.textContent = 'Page ' + state.currentPage + ' of ' + totalPages;
      elements.enemyPrevPageBtn.disabled = state.currentPage <= 1;
      elements.enemyNextPageBtn.disabled = state.currentPage >= totalPages;
    }

    // Bind enemy name clicks to open modal
    document.querySelectorAll('.enemy-name-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const enemyId = btn.getAttribute('data-enemy-id');
        const enemy = dataset.find(e => String(e.id) === String(enemyId));
        if (enemy) openEnemyModal(enemy);
      });
    });
  }

  function handleHeaderClick(header) {
    const key = header.getAttribute('data-sort-key');
    if (!key) return;

    if (state.sortKey === key) {
      if (key === 'weakness' && state.weaknessSort !== null) {
        state.weaknessSort = null;
        state.sortDir = 'desc';
      } else {
        state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
      }
    } else {
      state.sortKey = key;
      state.weaknessSort = null;
      const isNumeric = ['shields', 'level', 'hp', 'patk', 'pdef', 'weakness'].includes(key);
      state.sortDir = isNumeric ? 'desc' : 'asc';
    }

    syncSortSelect();
    renderTable();
  }

  function handleWeaknessIconClick(e, weakness) {
    e.stopPropagation();
    if (state.sortKey === 'weakness' && state.weaknessSort === weakness) {
      state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = 'weakness';
      state.weaknessSort = weakness;
      state.sortDir = 'desc';
    }
    syncSortSelect();
    renderTable();
  }

  function bindEvents() {
    elements.enemySearchInput.addEventListener('input', () => {
      state.searchQuery = elements.enemySearchInput.value.trim().toLowerCase();
      state.currentPage = 1;
      renderTable();
    });

    elements.enemyAreaFilter.addEventListener('change', () => {
      state.area = elements.enemyAreaFilter.value;
      state.currentPage = 1;
      renderTable();
    });

    elements.enemySubAreaFilter.addEventListener('change', () => {
      state.subArea = elements.enemySubAreaFilter.value;
      state.currentPage = 1;
      renderTable();
    });

    elements.enemyWeaknessFilter.addEventListener('change', () => {
      state.weakness = elements.enemyWeaknessFilter.value;
      state.currentPage = 1;
      renderTable();
    });

    if (elements.enemyTypeTabs) {
      elements.enemyTypeTabs.addEventListener('click', (event) => {
        const tab = event.target.closest('.cat-tab');
        if (!tab) return;
        
        document.querySelectorAll('#enemyTypeTabs .cat-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        
        state.type = tab.getAttribute('data-category') || 'all';
        state.currentPage = 1;
        renderTable();
      });
    }

    elements.enemySortFilter.addEventListener('change', () => {
      const val = elements.enemySortFilter.value;
      if (val.startsWith('shield-')) {
        state.sortKey = 'shields';
        state.weaknessSort = null;
        state.sortDir = val.endsWith('-desc') ? 'desc' : 'asc';
      } else {
        const lastDash = val.lastIndexOf('-');
        if (lastDash > -1) {
          state.sortKey = val.slice(0, lastDash);
          state.weaknessSort = null;
          state.sortDir = val.slice(lastDash + 1);
        } else {
          state.sortKey = val;
          state.weaknessSort = null;
          state.sortDir = 'asc';
        }
      }
      renderTable();
    });

    document.querySelectorAll('.enemy-table th.sortable').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('.weakness-icon')) return;
        handleHeaderClick(header);
      });
    });

    document.querySelectorAll('.weakness-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        const weakness = icon.getAttribute('data-weakness');
        handleWeaknessIconClick(e, weakness);
      });
    });

    elements.enemyClearSearch.addEventListener('click', () => {
      state.searchQuery = '';
      elements.enemySearchInput.value = '';
      state.currentPage = 1;
      renderTable();
    });

    elements.enemyResetBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.area = 'all';
      state.subArea = 'all';
      state.weakness = 'all';
      state.type = 'all';
      state.sortKey = 'name';
      state.sortDir = 'asc';
      state.weaknessSort = null;
      elements.enemySearchInput.value = '';
      if (elements.enemyTypeTabs) {
        document.querySelectorAll('#enemyTypeTabs .cat-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        const allTab = elements.enemyTypeTabs.querySelector('[data-category="all"]');
        if (allTab) {
          allTab.classList.add('active');
          allTab.setAttribute('aria-selected', 'true');
        }
      }
      state.currentPage = 1;
      renderFilters();
      renderTable();
    });

    elements.enemyEmptyResetBtn.addEventListener('click', () => {
      elements.enemyResetBtn.click();
    });

    // Pagination buttons
    if (elements.enemyPrevPageBtn) {
      elements.enemyPrevPageBtn.addEventListener('click', () => {
        if (state.currentPage > 1) {
          state.currentPage--;
          renderTable();
        }
      });
    }
    if (elements.enemyNextPageBtn) {
      elements.enemyNextPageBtn.addEventListener('click', () => {
        const filtered = getFilteredEnemies();
        const totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
        if (state.currentPage < totalPages) {
          state.currentPage++;
          renderTable();
        }
      });
    }

    elements.enemyModal.addEventListener('click', (e) => {
      if (e.target === elements.enemyModal) {
        closeEnemyModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.modalEnemy) {
        closeEnemyModal();
        return;
      }
      if (e.key === 'Tab' && elements.enemyModal.classList.contains('active')) {
        const focusable = elements.enemyModal.querySelectorAll(
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

  function init() {
    renderFilters();
    bindEvents();
    renderTable();
  }

  init();
})();
