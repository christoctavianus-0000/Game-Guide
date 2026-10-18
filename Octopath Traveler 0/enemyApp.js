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
    collapsedAreas: {},
    chunkSort: {}
  };

  const dataset = Array.isArray(window.enemyData)
    ? window.enemyData
    : (typeof enemyData !== 'undefined' && Array.isArray(enemyData) ? enemyData : []);

  /** @type {EnemyCodexElements} */
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
    enemyChunksGrid: document.getElementById('enemyChunksGrid'),
    enemyEmptyState: document.getElementById('enemyEmptyState'),
    enemyEmptyResetBtn: document.getElementById('enemyEmptyResetBtn'),
    enemyModal: document.getElementById('enemyModal'),
    enemyModalClose: document.getElementById('enemyModalClose'),
    enemyModalContent: document.getElementById('enemyModalContent')
  };

  function cleanText(value) {
    return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
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
      `<li>${escapeHtml(skill.name || '')} <span class="skill-type">(${escapeHtml(skill.type || '')})</span></li>`
    ).join('');

    const modalHTML = `
      <div class="modal-header">
        <h2 class="modal-title" id="enemyModalTitle">${escapeHtml(enemy.name)}</h2>
        <button class="modal-close-btn" id="enemyModalClose">×</button>
      </div>
      <div class="modal-body">
        <div class="enemy-modal-grid">
          <div class="enemy-modal-field">
            <span class="field-label">Type:</span>
            <span class="enemy-type-badge" data-type="${escapeHtml(enemy.type || 'Regular')}">${escapeHtml(enemy.type || 'Regular')}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Level:</span>
            <span class="field-value">${Number(enemy.level) || 0}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Area:</span>
            <span class="field-value">${escapeHtml(enemy.area)}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Sub Area:</span>
            <span class="field-value">${escapeHtml(enemy.subArea)}</span>
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
            <span class="field-value">${escapeHtml(enemy.steal || '—')}</span>
          </div>
          <div class="enemy-modal-field">
            <span class="field-label">Drop:</span>
            <span class="field-value">${escapeHtml(enemy.drop || '—')}</span>
          </div>
          <div class="enemy-modal-field full-width">
            <span class="field-label">Status Immunities:</span>
            <span class="field-value">${escapeHtml(enemy.immunities || '—')}</span>
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
        const haystack = [enemy.name, enemy.area, enemy.subArea, enemy.type, weaknessValues.join(' '), skillText, enemy.steal, enemy.drop].join(' ').toLowerCase();
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

  function groupByArea(items) {
    const groups = {};
    items.forEach(enemy => {
      const area = enemy.area || 'Unknown';
      if (!groups[area]) groups[area] = [];
      groups[area].push(enemy);
    });

    const areas = Object.keys(groups).sort();
    const sorted = {};
    areas.forEach(area => {
      let members = groups[area].slice();
      if (state.sortKey === 'area') {
        members.sort((a, b) => cleanText(a.name).localeCompare(cleanText(b.name)));
      } else {
        members.sort((a, b) => {
          const dir = state.sortDir === 'desc' ? -1 : 1;
          const key = state.sortKey;

          if (key === 'name' || key === 'subArea' || key === 'type' || key === 'steal' || key === 'drop') {
            const valA = cleanText(a[key]);
            const valB = cleanText(b[key]);
            const cmp = valA.localeCompare(valB);
            return cmp !== 0 ? cmp * dir : cleanText(a.name).localeCompare(cleanText(b.name));
          }

          if (key === 'weakness') {
            if (state.weaknessSort) {
              const target = state.weaknessSort;
              const hasA = normalizeWeaknesses(a.weaknesses).includes(target) ? 1 : 0;
              const hasB = normalizeWeaknesses(b.weaknesses).includes(target) ? 1 : 0;
              if (hasA !== hasB) return (hasA - hasB) * dir;
              const countA = normalizeWeaknesses(a.weaknesses).length;
              const countB = normalizeWeaknesses(b.weaknesses).length;
              if (countA !== countB) return countB - countA;
              return cleanText(a.name).localeCompare(cleanText(b.name));
            }
            const countA = normalizeWeaknesses(a.weaknesses).length;
            const countB = normalizeWeaknesses(b.weaknesses).length;
            if (countA !== countB) return (countA - countB) * dir;
            return cleanText(a.name).localeCompare(cleanText(b.name));
          }

          const numA = Number(a[key]) || 0;
          const numB = Number(b[key]) || 0;
          if (numA !== numB) return (numA - numB) * dir;
          return cleanText(a.name).localeCompare(cleanText(b.name));
        });
      }
      sorted[area] = members;
    });
    return sorted;
  }

  function renderEnemyRow(enemy) {
    const weaknesses = normalizeWeaknesses(enemy.weaknesses);
    const weaknessGrid = renderWeaknessGrid(weaknesses);
    return `
      <tr class="enemy-row" data-enemy-id="${escapeHtml(enemy.id)}">
        <td class="enemy-name-cell"><button class="enemy-name-btn" data-enemy-id="${escapeHtml(enemy.id)}">${escapeHtml(enemy.name)}</button></td>
        <td>${escapeHtml(enemy.subArea)}</td>
        <td><span class="enemy-type-badge" data-type="${escapeHtml(enemy.type || 'Regular')}">${escapeHtml(enemy.type || 'Regular')}</span></td>
        <td class="num font-num enemy-shield-val">${Number(enemy.shields) || 0}</td>
        <td class="enemy-weakness-cell">
          <div class="enemy-weakness-grid">${weaknessGrid}</div>
        </td>
        <td class="num font-num">${Number(enemy.level) || 0}</td>
        <td>${escapeHtml(enemy.steal || '—')}</td>
        <td>${escapeHtml(enemy.drop || '—')}</td>
      </tr>
    `;
  }

  function renderChunkTable(members, chunkKey) {
    let html = '<table class="enemy-table"><thead><tr>' +
      '<th class="sortable" data-sort-key="name" data-chunk="' + escapeHtml(chunkKey) + '">Name</th>' +
      '<th class="sortable" data-sort-key="subArea" data-chunk="' + escapeHtml(chunkKey) + '">Sub Area</th>' +
      '<th class="sortable" data-sort-key="type" data-chunk="' + escapeHtml(chunkKey) + '">Type</th>' +
      '<th class="sortable num" data-sort-key="shields" data-chunk="' + escapeHtml(chunkKey) + '">Shield</th>' +
      '<th class="sortable weakness-header" data-sort-key="weakness" data-chunk="' + escapeHtml(chunkKey) + '">Weaknesses</th>' +
      '<th class="sortable num" data-sort-key="level" data-chunk="' + escapeHtml(chunkKey) + '">Lvl</th>' +
      '<th class="sortable" data-sort-key="steal" data-chunk="' + escapeHtml(chunkKey) + '">Steal</th>' +
      '<th class="sortable" data-sort-key="drop" data-chunk="' + escapeHtml(chunkKey) + '">Drop</th>' +
      '</tr></thead><tbody>';
    members.forEach(e => { html += renderEnemyRow(e); });
    html += '</tbody></table>';
    return html;
  }

  function sortChunkMembers(area, key) {
    const groups = groupByArea(getFilteredEnemies());
    const members = groups[area];
    if (!members) return;

    const prev = state.chunkSort[area];
    const oldKey = prev ? prev.key : null;
    const oldDir = prev ? prev.dir : 'asc';
    const newDir = (key === oldKey && oldDir === 'asc') ? 'desc' : 'asc';

    members.sort((a, b) => {
      const sign = newDir === 'desc' ? -1 : 1;
      let av, bv;

      if (key === 'subArea' || key === 'type' || key === 'steal' || key === 'drop') {
        av = cleanText(a[key]);
        bv = cleanText(b[key]);
      } else if (key === 'shields' || key === 'level') {
        av = Number(a[key]) || 0;
        bv = Number(b[key]) || 0;
        if (av !== bv) return sign * (av - bv);
        return cleanText(a.name).localeCompare(cleanText(b.name));
      } else if (key === 'weakness') {
        const weakA = normalizeWeaknesses(a.weaknesses).length;
        const weakB = normalizeWeaknesses(b.weaknesses).length;
        if (weakA !== weakB) return sign * (weakA - weakB);
        return cleanText(a.name).localeCompare(cleanText(b.name));
      } else {
        av = cleanText(a[key] || 'name');
        bv = cleanText(b[key] || 'name');
      }

      if (av == null) av = '';
      if (bv == null) bv = '';
      return sign * String(av).localeCompare(String(bv));
    });

    state.chunkSort[area] = { key, dir: newDir };

    const chunk = document.querySelector('.shop-chunk[data-area="' + area.replace(/"/g, '\\"') + '"]');
    if (chunk) {
      const tableWrap = chunk.querySelector('.enemy-chunk-table-wrap');
      if (tableWrap) {
        tableWrap.innerHTML = renderChunkTable(members, area);
        attachSortHandlers();
        updateSortIndicators(area, key, newDir);
        bindEnemyRowEvents();
      }
    }
  }

  function updateSortIndicators(area, key, dir) {
    const chunk = document.querySelector('.shop-chunk[data-area="' + area.replace(/"/g, '\\"') + '"]');
    if (!chunk) return;
    Array.prototype.forEach.call(chunk.querySelectorAll('th.sortable'), function (th) {
      const k = th.getAttribute('data-sort-key');
      const active = k === key;
      th.classList.toggle('sort-active', active);
      let arrow = th.querySelector('.sort-arrow');
      if (!arrow) {
        arrow = document.createElement('span');
        arrow.className = 'sort-arrow';
        th.appendChild(arrow);
      }
      arrow.textContent = active ? (dir === 'asc' ? '▲' : '▼') : '';
    });
  }

  function attachSortHandlers() {
    Array.prototype.forEach.call(document.querySelectorAll('th.sortable'), function (th) {
      th.removeEventListener('click', handleChunkSort);
      th.addEventListener('click', handleChunkSort);
    });
  }

  function handleChunkSort(e) {
    e.stopPropagation();
    const th = e.currentTarget;
    const key = th.getAttribute('data-sort-key');
    const chunk = th.getAttribute('data-chunk');
    sortChunkMembers(chunk, key);
  }

  function bindEnemyRowEvents() {
    // Delegated at enemyChunksGrid level
  }

  function handleEnemyRowClick(e) {
    const btn = (e.target && e.target.closest) ? e.target.closest('.enemy-name-btn') : (this && this.getAttribute ? this : null);
    if (!btn || !btn.getAttribute) return;
    e.preventDefault();
    const enemyId = btn.getAttribute('data-enemy-id');
    const enemy = dataset.find(item => String(item.id) === String(enemyId));
    if (enemy) openEnemyModal(enemy);
  }

  function renderChunks() {
    if (!elements.enemyChunksGrid) return;
    const items = getFilteredEnemies();
    const total = items.length;

    if (elements.enemyResultsCount) {
      elements.enemyResultsCount.textContent = 'Showing ' + total.toLocaleString() + ' ' + (total === 1 ? 'enemy' : 'enemies');
    }

    if (total === 0) {
      elements.enemyChunksGrid.innerHTML = '';
      if (elements.enemyEmptyState) elements.enemyEmptyState.style.display = 'block';
      return;
    }

    if (elements.enemyEmptyState) elements.enemyEmptyState.style.display = 'none';

    const groups = groupByArea(items);
    let html = '';
    Object.keys(groups).forEach(area => {
      const members = groups[area];
      const collapsed = !!state.collapsedAreas[area];
      html += '<div class="shop-chunk' + (collapsed ? ' collapsed' : '') + '" data-area="' + escapeHtml(area) + '">';
      html += '<div class="shop-chunk-header" role="button" tabindex="0" aria-expanded="' + (!collapsed) + '">';
      html += '<div class="shop-chunk-header-left">';
      html += '<span class="shop-chunk-name">' + escapeHtml(area) + '</span>';
      html += '<span class="shop-chunk-count">' + members.length + ' ' + (members.length === 1 ? 'enemy' : 'enemies') + '</span>';
      html += '</div>';
      html += '<span class="shop-chunk-chevron">' + (collapsed ? '▸' : '▾') + '</span>';
      html += '</div>';
      html += '<div class="shop-chunk-body"><div class="shop-chunk-items enemy-chunk-table-wrap">';
      html += renderChunkTable(members, area);
      html += '</div></div></div>';
    });

    elements.enemyChunksGrid.innerHTML = html;

    Array.prototype.forEach.call(elements.enemyChunksGrid.querySelectorAll('.shop-chunk-header'), function (header) {
      function toggle() {
        const chunk = header.parentNode;
        const area = chunk.getAttribute('data-area');
        state.collapsedAreas[area] = !state.collapsedAreas[area];
        chunk.classList.toggle('collapsed');
        header.setAttribute('aria-expanded', String(!state.collapsedAreas[area]));
        const chev = header.querySelector('.shop-chunk-chevron');
        if (chev) chev.textContent = state.collapsedAreas[area] ? '▸' : '▾';
      }
      header.addEventListener('click', toggle);
      header.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });

    elements.enemyMetricTotal.textContent = String(dataset.length);
    elements.enemyMetricAreas.textContent = String(new Set(dataset.map(e => cleanText(e.area))).size);

    attachSortHandlers();
    bindEnemyRowEvents();
  }

  function renderTable() {
    renderChunks();
  }

  function handleHeaderClick(header) {
    const key = header.getAttribute('data-sort-key');
    if (!key) return;

    if (state.sortKey === key) {
      state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = key;
      state.weaknessSort = null;
      const isNumeric = ['shields', 'level', 'hp', 'patk', 'pdef', 'weakness'].includes(key);
      state.sortDir = isNumeric ? 'desc' : 'asc';
    }

    renderChunks();
  }

  function bindEvents() {
    elements.enemySearchInput.addEventListener('input', () => {
      state.searchQuery = elements.enemySearchInput.value.trim().toLowerCase();
      renderChunks();
    });

    elements.enemyAreaFilter.addEventListener('change', () => {
      state.area = elements.enemyAreaFilter.value;
      renderChunks();
    });

    elements.enemySubAreaFilter.addEventListener('change', () => {
      state.subArea = elements.enemySubAreaFilter.value;
      renderChunks();
    });

    elements.enemyWeaknessFilter.addEventListener('change', () => {
      state.weakness = elements.enemyWeaknessFilter.value;
      renderChunks();
    });

    if (elements.enemyTypeTabs) {
      elements.enemyTypeTabs.addEventListener('click', (event) => {
        const tab = /** @type {HTMLElement} */ (event.target).closest('.cat-tab');
        if (!tab) return;
        
        document.querySelectorAll('#enemyTypeTabs .cat-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        
        state.type = tab.getAttribute('data-category') || 'all';
        renderChunks();
      });
    }

    if (elements.enemyAreaFilter) {
      elements.enemyAreaFilter.addEventListener('change', () => {
        state.area = elements.enemyAreaFilter.value;
        state.subArea = 'all';
        if (elements.enemySubAreaFilter) elements.enemySubAreaFilter.value = 'all';
        renderChunks();
      });
    }

    if (elements.enemySubAreaFilter) {
      elements.enemySubAreaFilter.addEventListener('change', () => {
        state.subArea = elements.enemySubAreaFilter.value;
        renderChunks();
      });
    }

    if (elements.enemyWeaknessFilter) {
      elements.enemyWeaknessFilter.addEventListener('change', () => {
        state.weakness = elements.enemyWeaknessFilter.value;
        renderChunks();
      });
    }

    elements.enemySortFilter.addEventListener('change', () => {
      const val = elements.enemySortFilter.value;
      if (val.startsWith('shields-')) {
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
      renderChunks();
    });

    elements.enemyClearSearch.addEventListener('click', () => {
      state.searchQuery = '';
      elements.enemySearchInput.value = '';
      renderChunks();
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
      state.collapsedAreas = {};
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
      elements.enemyAreaFilter.value = 'all';
      elements.enemySubAreaFilter.value = 'all';
      elements.enemyWeaknessFilter.value = 'all';
      elements.enemySortFilter.value = 'name-asc';
      renderChunks();
    });

    if (elements.enemyEmptyResetBtn) {
      elements.enemyEmptyResetBtn.addEventListener('click', () => {
        elements.enemyResetBtn.click();
      });
    }

    if (elements.enemyChunksGrid) {
      elements.enemyChunksGrid.addEventListener('click', handleEnemyRowClick);
    }

    if (elements.enemyModalClose) {
      elements.enemyModalClose.addEventListener('click', closeEnemyModal);
    }

    elements.enemyModal.addEventListener('click', (e) => {
      if (e.target === elements.enemyModal) closeEnemyModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.modalEnemy) {
        closeEnemyModal();
        return;
      }
      if (e.key === 'Tab' && elements.enemyModal.classList.contains('active')) {
        const focusable = /** @type {NodeListOf<HTMLElement>} */ (elements.enemyModal.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ));
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


