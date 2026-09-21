/**
 * OCTOPATH TRAVELER 0 // EQUIPMENT CODEX
 * Interactive Weapon, Armor & Accessory Database
 */

(function () {
  'use strict';

  // Stat metadata, ordered the way players read them
  const STAT_META = {
    hp:   { label: 'HP', full: 'HP' },
    sp:   { label: 'SP', full: 'SP' },
    patk: { label: 'PATK', full: 'Phys. Atk.' },
    pdef: { label: 'PDEF', full: 'Phys. Def.' },
    matk: { label: 'MATK', full: 'Elem. Atk.' },
    mdef: { label: 'MDEF', full: 'Elem. Def.' },
    spd:  { label: 'SPD', full: 'Speed' },
    crt:  { label: 'CRT', full: 'Critical' },
    acc:  { label: 'ACC', full: 'Accuracy' },
    eva:  { label: 'EVA', full: 'Evasion' }
  };

  // Stats shown as table columns and sortable headers
  const TABLE_STATS = ['patk', 'matk', 'pdef', 'mdef', 'spd', 'crt', 'acc', 'eva'];
  const STAT_ORDER = ['patk', 'matk', 'pdef', 'mdef', 'spd', 'crt', 'acc', 'eva', 'hp', 'sp'];

  const TYPE_GLYPHS = {
    Headgear: 'assets/icons/icon_headgear.svg',
    'Body Armor': 'assets/icons/icon_body_armor.svg',
    Shield: 'assets/icons/icon_shield.svg',
    Accessories: 'assets/icons/icon_accessories.svg'
  };

  const KIND_GLYPHS = { Weapon: '⚔️', Armor: '🛡️' };

  const ATTACK_TIERS = [
    { id: 'atk-300', label: 'ATK 300+', min: 300, max: Infinity },
    { id: 'atk-200', label: 'ATK 200 – 299', min: 200, max: 299 },
    { id: 'atk-100', label: 'ATK 100 – 199', min: 100, max: 199 },
    { id: 'atk-50', label: 'ATK 50 – 99', min: 50, max: 99 },
    { id: 'atk-1', label: 'ATK 1 – 49', min: 1, max: 49 },
    { id: 'atk-none', label: 'No Attack Power', min: 0, max: 0 }
  ];

  const DEFENSE_TIERS = [
    { id: 'def-200', label: 'DEF 200+', min: 200, max: Infinity },
    { id: 'def-100', label: 'DEF 100 – 199', min: 100, max: 199 },
    { id: 'def-50', label: 'DEF 50 – 99', min: 50, max: 99 },
    { id: 'def-1', label: 'DEF 1 – 49', min: 1, max: 49 },
    { id: 'def-none', label: 'No Defense', min: 0, max: 0 }
  ];

  const EFFECT_FAMILIES = ['Attack Effect', 'Equip Effect', 'Special', 'No Effect'];

  // Application State
  const state = {
    activeCategory: 'All',
    activeSubtype: 'all',
    searchQuery: '',
    statFilter: 'all',
    minStat: 0,
    sortKey: 'name',
    sortDir: 'asc',
    viewMode: 'grid',
    currentPage: 1,
    pageSize: 48,
    showFavoritesOnly: false,
    favorites: /** @type {Set<string>} */ (new Set(JSON.parse(localStorage.getItem('octo0_equip_favs') || '[]'))),
    selectedItem: null
  };

  // Subtype / filter chips per category
  /** @type {Record<string, SubtypeChip[]>} */
  const subtypeConfigs = {
    All: [
      { id: 'all', label: 'All Equipment', glyph: '🌐' },
      { id: 'Weapon', label: 'Weapons', icon: 'assets/icons/icon_sword.png' },
      { id: 'Armor', label: 'Armor', icon: 'assets/icons/icon_shield.svg' },
      { id: 'Accessories', label: 'Accessories', icon: 'assets/icons/icon_accessories.svg' }
    ],
    Weapon: [
      { id: 'all', label: 'All Weapons', glyph: '⚔️' },
      { id: 'Sword', label: 'Sword', icon: 'assets/icons/icon_sword.png' },
      { id: 'Polearm', label: 'Polearm', icon: 'assets/icons/icon_polearm.png' },
      { id: 'Dagger', label: 'Dagger', icon: 'assets/icons/icon_dagger.png' },
      { id: 'Axe', label: 'Axe', icon: 'assets/icons/icon_axe.png' },
      { id: 'Bow', label: 'Bow', icon: 'assets/icons/icon_bow.png' },
      { id: 'Staff', label: 'Staff', icon: 'assets/icons/icon_staff.png' },
      { id: 'Tome', label: 'Tome', icon: 'assets/icons/icon_tome.png' },
      { id: 'Fan', label: 'Fan', icon: 'assets/icons/icon_fan.png' }
    ],
    Armor: [
      { id: 'all', label: 'All Armor', icon: 'assets/icons/icon_shield.svg' },
      { id: 'Headgear', label: 'Headgear', icon: 'assets/icons/icon_headgear.svg' },
      { id: 'Body Armor', label: 'Body Armor', icon: 'assets/icons/icon_body_armor.svg' },
      { id: 'Shield', label: 'Shield', icon: 'assets/icons/icon_shield.svg' }
    ],
    Accessories: [
      { id: 'all', label: 'All Accessories', icon: 'assets/icons/icon_accessories.svg' }
    ]
  };

  // Sortable keys used by the Sort By select and the table headers
  const SORT_KEYS = [
    { key: 'name', label: 'Name' },
    { key: 'type', label: 'Type' },
    { key: 'attack', label: 'Attack Power' },
    { key: 'defense', label: 'Defense' }
  ].concat(
    TABLE_STATS.map(function (statKey) {
      return { key: statKey, label: STAT_META[statKey].full };
    })
  ).concat([
    { key: 'hp', label: 'HP' },
    { key: 'sp', label: 'SP' },
    { key: 'cost', label: 'Price' }
  ]);

  // DOM Elements
  /** @type {EquipmentCodexElements} */
  const elements = {
    // Header metrics
    metricTotal: document.getElementById('metricTotal'),
    metricWeapons: document.getElementById('metricWeapons'),
    metricArmor: document.getElementById('metricArmor'),
    metricAccessories: document.getElementById('metricAccessories'),
    favToggleBtn: document.getElementById('favToggleBtn'),
    favCount: document.getElementById('favCount'),

    // Category tabs
    categoryTabs: document.getElementById('categoryTabs'),
    catCountAll: document.getElementById('catCountAll'),
    catCountWeapon: document.getElementById('catCountWeapon'),
    catCountArmor: document.getElementById('catCountArmor'),
    catCountAccessories: document.getElementById('catCountAccessories'),

    // Filters & Search
    equipSearchInput: document.getElementById('equipSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    subtypeChipsWrap: document.getElementById('subtypeChipsWrap'),
    statFilter: document.getElementById('statFilter'),
    minStatFilter: document.getElementById('minStatFilter'),
    sortFilter: document.getElementById('sortFilter'),
    resultsCount: document.getElementById('resultsCount'),
    viewToggleBtn: document.getElementById('viewToggleBtn'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Views, empty state & pagination
    equipGrid: document.getElementById('equipGrid'),
    equipTableWrap: document.getElementById('equipTableWrap'),
    equipTableBody: document.getElementById('equipTableBody'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
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
    modalKind: document.getElementById('modalKind'),
    modalType: document.getElementById('modalType'),
    modalCost: document.getElementById('modalCost'),
    modalSource: document.getElementById('modalSource'),
    modalItemName: document.getElementById('modalItemName'),
    modalItemId: document.getElementById('modalItemId'),
    modalEffectSection: document.getElementById('modalEffectSection'),
    modalEffectText: document.getElementById('modalEffectText'),
    modalStatsSection: document.getElementById('modalStatsSection'),
    modalStatsGrid: document.getElementById('modalStatsGrid'),
    modalSpecsGrid: document.getElementById('modalSpecsGrid')
  };

  // ---- Dataset & Derived Values -------------------------------------------

  const dataset = (typeof equipmentData !== 'undefined' && Array.isArray(equipmentData)) ? equipmentData : [];
  const STAT_KEYS = ['hp', 'sp', 'patk', 'pdef', 'matk', 'mdef', 'spd', 'crt', 'acc', 'eva'];

  /**
   * @param {EquipmentStats | undefined} rawStats
   * @returns {Record<string, number>}
   */
  function normalizeStats(rawStats) {
    const source = rawStats || {};
    const out = /** @type {Record<string, number>} */ ({});
    STAT_KEYS.forEach(function (key) {
      const value = Number(source[key]);
      out[key] = isFinite(value) ? value : 0;
    });
    return out;
  }

  function groupOf(record) {
    if (record.kind === 'Weapon') return 'Weapon';
    if (record.type === 'Accessories') return 'Accessories';
    return 'Armor';
  }

  function effectFamilyOf(effect) {
    if (!effect) return 'No Effect';
    if (/^attack effect/i.test(effect)) return 'Attack Effect';
    if (/^equip effect/i.test(effect)) return 'Equip Effect';
    return 'Special';
  }

  function sourceRegionOf(source) {
    if (!source) return 'Unknown Source';
    const separator = source.indexOf(' - ');
    return separator > -1 ? source.slice(0, separator) : source;
  }

  function tierOf(value, tiers) {
    for (let i = 0; i < tiers.length; i++) {
      if (value >= tiers[i].min && value <= tiers[i].max) return tiers[i];
    }
    return tiers[tiers.length - 1];
  }

  // Flattened, pre-computed view of every record for fast filter/sort/search

  /**
   * An equipment record enriched with the derived values the UI needs.
   * @typedef {Object} EquipmentItem
   * @property {string} id
   * @property {string} name
   * @property {string} kind
   * @property {string} type
   * @property {string} icon
   * @property {string} effect
   * @property {string} source
   * @property {string} cost
   * @property {number|null} costValue
   * @property {Record<string, number>} stats
   * @property {string} group
   * @property {string} effectFamily
   * @property {string} sourceRegion
   * @property {number} attack
   * @property {number} defense
   * @property {string} [searchText]
   */

  /** @type {EquipmentItem[]} */
  const items = dataset.map(function (record) {
    const stats = normalizeStats(record.stats);
    const item = {
      id: record.id,
      name: record.name,
      kind: record.kind,
      type: record.type,
      icon: record.icon,
      effect: record.effect || '',
      source: record.source || '',
      cost: record.cost || '',
      costValue: (typeof record.costValue === 'number') ? record.costValue : null,
      stats: stats,
      group: groupOf(record),
      effectFamily: effectFamilyOf(record.effect),
      sourceRegion: sourceRegionOf(record.source),
      attack: Math.max(stats.patk, stats.matk),
      defense: Math.max(stats.pdef, stats.mdef)
    };

    const statWords = STAT_KEYS
      .filter(function (key) { return stats[key] > 0; })
      .map(function (key) { return STAT_META[key].label + ' ' + stats[key] + ' ' + STAT_META[key].full; });

    item.searchText = [
      item.name, item.type, item.kind, item.group, item.effect, item.source, item.cost
    ].concat(statWords).join(' ').toLowerCase();

    return item;
  });

  // ---- Display helpers ----------------------------------------------------

  function iconMarkup(item, className) {
    var iconSrc = item.icon || TYPE_GLYPHS[item.type] || KIND_GLYPHS[item.kind];
    if (iconSrc && (iconSrc.startsWith('assets/') || iconSrc.endsWith('.png') || iconSrc.endsWith('.svg'))) {
      return '<img src="' + escapeHtml(iconSrc) + '" alt="' + escapeHtml(item.type) + '" class="' + className + '" />';
    }
    return '<span class="card-glyph">' + escapeHtml(iconSrc || '🛡️') + '</span>';
  }

  function statChipsMarkup(item) {
    const chips = STAT_ORDER
      .filter(function (key) { return item.stats[key] > 0; })
      .map(function (key) {
        return '<span class="equip-stat-chip"><b>' + STAT_META[key].label + '</b> ' + item.stats[key] + '</span>';
      });
    return chips.length ? chips.join('') : '<span class="equip-stat-chip muted">No stat modifiers</span>';
  }

  function priceText(item) {
    if (item.cost) return item.cost;
    if (item.costValue !== null) return '$' + item.costValue.toLocaleString();
    return 'Price unknown';
  }

  function numericValue(item, key) {
    if (key === 'attack') return item.attack;
    if (key === 'defense') return item.defense;
    if (key === 'cost') return item.costValue === null ? -1 : item.costValue;
    return item.stats[key] || 0;
  }

  // ---- Filtering & Sorting -------------------------------------------------

  function matchesCategory(item) {
    if (state.activeCategory === 'All') return true;
    return item.group === state.activeCategory;
  }

  function matchesSubtype(item) {
    if (state.activeSubtype === 'all') return true;
    if (state.activeCategory === 'All') return item.group === state.activeSubtype;
    return item.type === state.activeSubtype;
  }

  function compareItems(a, b) {
    const direction = state.sortDir === 'desc' ? -1 : 1;
    const key = state.sortKey;

    if (key === 'name' || key === 'type') {
      const textCompare = a[key].localeCompare(b[key]);
      return textCompare !== 0 ? textCompare * direction : a.name.localeCompare(b.name);
    }

    const aValue = numericValue(a, key);
    const bValue = numericValue(b, key);

    // Items without a listed price always sort to the bottom
    if (key === 'cost' && (aValue === -1 || bValue === -1)) {
      if (aValue === bValue) return a.name.localeCompare(b.name);
      return aValue === -1 ? 1 : -1;
    }

    if (aValue === bValue) return a.name.localeCompare(b.name);
    return (aValue - bValue) * direction;
  }

  function getFilteredItems() {
    const query = state.searchQuery.trim().toLowerCase();
    const statKey = state.statFilter;
    const threshold = state.minStat;

    return items.filter(function (item) {
      if (state.showFavoritesOnly && !state.favorites.has(item.id)) return false;
      if (!matchesCategory(item)) return false;
      if (!matchesSubtype(item)) return false;

      if (statKey !== 'all') {
        const value = item.stats[statKey] || 0;
        if (value <= 0 || value < threshold) return false;
      } else if (threshold > 0) {
        const hasEnough = STAT_KEYS.some(function (key) { return item.stats[key] >= threshold; });
        if (!hasEnough) return false;
      }

      if (query && item.searchText.indexOf(query) === -1) return false;
      return true;
    }).sort(compareItems);
  }

  // ---- Setup --------------------------------------------------------------

  function escapeHtml(value) {
    return String(value === undefined || value === null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function setText(element, value) {
    if (element) element.textContent = value.toLocaleString();
  }

  function sortOptionLabel(entry, direction) {
    const suffix = (entry.key === 'name' || entry.key === 'type')
      ? (direction === 'asc' ? ' (A → Z)' : ' (Z → A)')
      : (direction === 'asc' ? ' (Low → High)' : ' (High → Low)');
    return entry.label + suffix;
  }

  function populateSortOptions() {
    elements.sortFilter.innerHTML = SORT_KEYS.map(function (entry) {
      return '<option value="' + entry.key + '-asc">' + sortOptionLabel(entry, 'asc') + '</option>' +
             '<option value="' + entry.key + '-desc">' + sortOptionLabel(entry, 'desc') + '</option>';
    }).join('');
    syncSortSelect();
  }

  function syncSortSelect() {
    if (elements.sortFilter) {
      elements.sortFilter.value = state.sortKey + '-' + state.sortDir;
    }
  }

  function updateMetrics() {
    const counts = { total: items.length, Weapon: 0, Armor: 0, Accessories: 0 };
    items.forEach(function (item) { counts[item.group]++; });

    setText(elements.metricTotal, counts.total);
    setText(elements.metricWeapons, counts.Weapon);
    setText(elements.metricArmor, counts.Armor);
    setText(elements.metricAccessories, counts.Accessories);

    setText(elements.catCountAll, counts.total);
    setText(elements.catCountWeapon, counts.Weapon);
    setText(elements.catCountArmor, counts.Armor);
    setText(elements.catCountAccessories, counts.Accessories);

    updateFavCount();
  }

  function updateFavCount() {
    if (elements.favCount) {
      elements.favCount.textContent = 'Bookmarks (' + state.favorites.size + ')';
    }
  }

  function renderSubtypeChips() {
    const config = subtypeConfigs[state.activeCategory] || subtypeConfigs.All;
    elements.subtypeChipsWrap.innerHTML = '';

    config.forEach(function (entry) {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'subtype-chip' + (state.activeSubtype === entry.id ? ' active' : '');

      let iconHtml = '';
      if (entry.icon) {
        iconHtml = '<img src="' + entry.icon + '" alt="' + entry.label + '" class="subtype-chip-icon" />';
      } else if (entry.glyph) {
        iconHtml = '<span>' + entry.glyph + '</span>';
      }

      chip.innerHTML = iconHtml + '<span>' + entry.label + '</span>';
      chip.addEventListener('click', function () {
        state.activeSubtype = entry.id;
        state.currentPage = 1;
        renderSubtypeChips();
        render();
      });

      elements.subtypeChipsWrap.appendChild(chip);
    });
  }

  // ---- Rendering ----------------------------------------------------------

  function cardMarkup(item) {
    const isFav = state.favorites.has(item.id);
    const attackBadge = item.attack > 0
      ? '<span class="card-hits-tag">⚔ ' + item.attack + ' ATK</span>'
      : '';
    const defenseBadge = item.defense > 0
      ? '<span class="card-hits-tag">🛡 ' + item.defense + ' DEF</span>'
      : '';

    return '' +
      '<article class="skill-card equip-card cat-' + item.group + '" data-id="' + escapeHtml(item.id) + '">' +
        '<div>' +
          '<div class="card-header-row">' +
            '<div class="card-type-wrap">' +
              '<div class="card-icon-frame">' + iconMarkup(item, 'card-icon-img') + '</div>' +
              '<span class="card-subtype-label">' + escapeHtml(item.type) + '</span>' +
            '</div>' +
            '<span class="card-sp-badge">' + escapeHtml(item.kind) + '</span>' +
          '</div>' +
          '<div class="card-title-row">' +
            '<h3 class="card-skill-name">' + escapeHtml(item.name) + '</h3>' +
            '<button class="card-fav-btn' + (isFav ? ' is-fav' : '') + '" data-fav-id="' + escapeHtml(item.id) + '" title="Bookmark Item">' +
              (isFav ? '★' : '☆') +
            '</button>' +
          '</div>' +
          '<div class="card-meta-bar">' + attackBadge + defenseBadge + '</div>' +
          '<div class="equip-stat-chips">' + statChipsMarkup(item) + '</div>' +
          '<p class="card-description">' + escapeHtml(item.effect || 'No effect text recorded for this item.') + '</p>' +
        '</div>' +
        '<div class="card-combat-footer">' +
          '<span class="card-potency-range equip-price">' + escapeHtml(priceText(item)) + '</span>' +
          '<span class="card-inspect-hint">Inspect ↗</span>' +
        '</div>' +
      '</article>';
  }

  function renderGrid(pageItems, filtered) {
    let html = '';
    pageItems.forEach(function (item) {
      html += cardMarkup(item);
    });
    elements.equipGrid.innerHTML = html;
  }

  function renderTable(pageItems, filtered) {
    const columnCount = TABLE_STATS.length + 4;
    let html = '';
    pageItems.forEach(function (item) {

      const isFav = state.favorites.has(item.id);
      const statCells = TABLE_STATS.map(function (key) {
        const value = item.stats[key];
        return '<td class="num' + (value > 0 ? ' has-value' : ' is-zero') + '">' + (value > 0 ? value : '—') + '</td>';
      }).join('');

      html += '<tr class="equip-row" data-id="' + escapeHtml(item.id) + '">' +
        '<td class="equip-name-cell">' +
          iconMarkup(item, 'table-icon-img') +
          '<span class="equip-name-text">' + escapeHtml(item.name) + '</span>' +
          '<button class="card-fav-btn' + (isFav ? ' is-fav' : '') + '" data-fav-id="' + escapeHtml(item.id) + '" title="Bookmark Item">' +
            (isFav ? '★' : '☆') +
          '</button>' +
        '</td>' +
        '<td>' + escapeHtml(item.type) + '</td>' +
        statCells +
        '<td class="num">' + (item.costValue === null ? '—' : item.costValue.toLocaleString()) + '</td>' +
        '<td class="equip-source-cell">' + (item.source ? escapeHtml(item.source) : '—') + '</td>' +
      '</tr>';
    });

    elements.equipTableBody.innerHTML = html;
  }

  function updateSortHeaders() {
    const headerCells = document.querySelectorAll('.equip-table th.sortable');
    headerCells.forEach(function (cell) {
      const isActive = cell.getAttribute('data-sort-key') === state.sortKey;
      cell.classList.toggle('sort-active', isActive);
      cell.classList.toggle('sort-asc', isActive && state.sortDir === 'asc');
      cell.classList.toggle('sort-desc', isActive && state.sortDir === 'desc');
    });
  }

  function updateViewToggle() {
    if (!elements.viewToggleBtn) return;
    const isTable = state.viewMode === 'table';
    elements.viewToggleBtn.title = isTable ? 'Switch to Grid View' : 'Switch to Table View';
    const viewIcon = elements.viewToggleBtn.querySelector('.view-icon');
    const viewText = elements.viewToggleBtn.querySelector('.view-text');
    if (viewIcon) viewIcon.textContent = isTable ? '☐' : '☰';
    if (viewText) viewText.textContent = isTable ? 'Grid' : 'Table';
  }

  function render() {
    const filtered = getFilteredItems();
    const total = filtered.length;
    const totalPages = Math.ceil(total / state.pageSize) || 1;

    if (state.currentPage > totalPages) state.currentPage = totalPages;
    if (state.currentPage < 1) state.currentPage = 1;

    const startIdx = (state.currentPage - 1) * state.pageSize;
    const endIdx = Math.min(startIdx + state.pageSize, total);
    const pageItems = filtered.slice(startIdx, endIdx);

    elements.resultsCount.textContent = 'Showing ' + total.toLocaleString() + ' item' + (total === 1 ? '' : 's');

    if (total === 0) {
      elements.equipGrid.innerHTML = '';
      elements.equipTableBody.innerHTML = '';
      elements.equipGrid.style.display = 'none';
      elements.equipTableWrap.style.display = 'none';
      elements.emptyState.style.display = 'block';
      elements.paginationFooter.style.display = 'none';
      updateViewToggle();
      return;
    }

    elements.emptyState.style.display = 'none';
    elements.paginationFooter.style.display = 'flex';

    if (state.viewMode === 'table') {
      elements.equipGrid.style.display = 'none';
      elements.equipTableWrap.style.display = 'block';
      renderTable(pageItems, filtered);
    } else {
      elements.equipTableWrap.style.display = 'none';
      elements.equipGrid.style.display = '';
      renderGrid(pageItems, filtered);
    }

    elements.paginationInfo.textContent = 'Showing ' + (startIdx + 1) + '–' + endIdx + ' of ' + total.toLocaleString();
    elements.pageCurrent.textContent = 'Page ' + state.currentPage + ' of ' + totalPages;
    elements.prevPageBtn.disabled = state.currentPage <= 1;
    elements.nextPageBtn.disabled = state.currentPage >= totalPages;

    updateSortHeaders();
    updateViewToggle();
  }

  // ---- Detail modal -------------------------------------------------------

  function specItem(label, value) {
    return '<div class="spec-item">' +
             '<span class="spec-label">' + escapeHtml(label) + '</span>' +
             '<span class="spec-value">' + escapeHtml(value) + '</span>' +
           '</div>';
  }

  function openModal(item) {
    state.selectedItem = item;

    elements.modalIconBadge.innerHTML = iconMarkup(item, 'modal-icon-img');
    elements.modalKind.textContent = item.group;
    elements.modalType.textContent = item.type;
    elements.modalCost.textContent = 'Price: ' + priceText(item);
    elements.modalSource.textContent = 'Source: ' + (item.source || 'Unknown');
    elements.modalItemName.textContent = item.name;
    elements.modalItemId.textContent = 'Equipment ID: #' + item.id;

    if (item.effect) {
      elements.modalEffectSection.style.display = 'block';
      elements.modalEffectText.textContent = item.effect;
    } else {
      elements.modalEffectSection.style.display = 'none';
    }

    const statTiles = STAT_ORDER
      .filter(function (key) { return item.stats[key] > 0; })
      .map(function (key) {
        return '<div class="equip-stat">' +
                 '<span class="equip-stat-label">' + STAT_META[key].full + '</span>' +
                 '<span class="equip-stat-value">+' + item.stats[key] + '</span>' +
               '</div>';
      });

    elements.modalStatsSection.style.display = 'block';
    elements.modalStatsGrid.innerHTML = statTiles.length
      ? statTiles.join('')
      : '<div class="equip-stat empty">' +
          '<span class="equip-stat-label">No stat modifiers</span>' +
          '<span class="equip-stat-value">Effect-only item</span>' +
        '</div>';

    const bestAttack = items
      .filter(function (other) { return other.type === item.type; })
      .reduce(function (max, other) { return Math.max(max, other.attack); }, 0);

    elements.modalSpecsGrid.innerHTML =
      specItem('Category', item.group === 'Accessories' ? 'Accessory' : item.group) +
      specItem('Equipment Type', item.type) +
      specItem('Attack Power', item.attack > 0 ? item.attack + ' (best ' + item.type + ': ' + bestAttack + ')' : 'None') +
      specItem('Defense Power', item.defense > 0 ? String(item.defense) : 'None') +
      specItem('Effect Family', item.effectFamily) +
      specItem('Acquisition Region', item.sourceRegion) +
      specItem('Full Source', item.source || 'Unknown') +
      specItem('Price', priceText(item));

    updateModalFavButton();

    elements.detailModal.classList.add('active');
    elements.detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    elements.detailModal.classList.remove('active');
    elements.detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.selectedItem = null;
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }

    localStorage.setItem('octo0_equip_favs', JSON.stringify(Array.from(state.favorites)));
    updateFavCount();
    updateModalFavButton();
    render();
  }

  function updateModalFavButton() {
    if (!state.selectedItem) return;
    const isFav = state.favorites.has(state.selectedItem.id);
    elements.modalFavBtn.textContent = isFav ? '★ Bookmarked' : '☆ Add to Bookmarks';
    elements.modalFavBtn.classList.toggle('active', isFav);
  }

  // ---- Events & Bootstrap -------------------------------------------------

  const itemsById = /** @type {Record<string, (typeof items)[number]>} */ ({});
  items.forEach(function (item) { itemsById[item.id] = item; });

  function resetAll() {
    state.activeCategory = 'All';
    state.activeSubtype = 'all';
    state.searchQuery = '';
    state.statFilter = 'all';
    state.minStat = 0;
    state.sortKey = 'name';
    state.sortDir = 'asc';
    state.viewMode = 'grid';
    state.showFavoritesOnly = false;
    state.currentPage = 1;

    elements.equipSearchInput.value = '';
    elements.clearSearchBtn.style.display = 'none';
    elements.statFilter.value = 'all';
    elements.minStatFilter.value = '0';
    syncSortSelect();
    elements.favToggleBtn.classList.remove('active');
    const viewIcon = elements.viewToggleBtn?.querySelector('.view-icon');
    const viewText = elements.viewToggleBtn?.querySelector('.view-text');
    if (viewIcon) viewIcon.textContent = '☰';
    if (viewText) viewText.textContent = 'Table';
    if (elements.viewToggleBtn) elements.viewToggleBtn.title = 'Switch to Table View';

    document.querySelectorAll('.cat-tab').forEach(function (tab) {
      tab.classList.toggle('active', tab.getAttribute('data-category') === 'All');
    });

    renderSubtypeChips();
    render();
  }

  function handleItemClick(event) {
    const favBtn = /** @type {HTMLElement} */ (event.target).closest('.card-fav-btn');
    if (favBtn) {
      event.stopPropagation();
      toggleFavorite(favBtn.getAttribute('data-fav-id') || '');
      return;
    }

    const target = /** @type {HTMLElement} */ (event.target).closest('[data-id]');
    if (!target) return;

    const item = itemsById[target.getAttribute('data-id')];
    if (item) openModal(item);
  }

  function bindEvents() {
    // Category tabs
    elements.categoryTabs.addEventListener('click', function (event) {
      const tab = /** @type {HTMLElement} */ (event.target).closest('.cat-tab');
      if (!tab) return;

      document.querySelectorAll('.cat-tab').forEach(function (other) {
        other.classList.remove('active');
      });
      tab.classList.add('active');

      state.activeCategory = tab.getAttribute('data-category');
      state.activeSubtype = 'all';
      state.currentPage = 1;

      renderSubtypeChips();
      render();
    });

    // Search input with live debounce
    let searchDebounce = null;
    elements.equipSearchInput.addEventListener('input', function () {
      clearTimeout(searchDebounce);
      const value = elements.equipSearchInput.value;
      elements.clearSearchBtn.style.display = value ? 'block' : 'none';

      searchDebounce = setTimeout(function () {
        state.searchQuery = value;
        state.currentPage = 1;
        render();
      }, 150);
    });

    elements.clearSearchBtn.addEventListener('click', function () {
      elements.equipSearchInput.value = '';
      elements.clearSearchBtn.style.display = 'none';
      state.searchQuery = '';
      state.currentPage = 1;
      render();
    });

    // Dropdown filters
    elements.statFilter.addEventListener('change', function () {
      state.statFilter = elements.statFilter.value;
      state.currentPage = 1;
      render();
    });

    elements.minStatFilter.addEventListener('change', function () {
      state.minStat = parseInt(elements.minStatFilter.value, 10) || 0;
      state.currentPage = 1;
      render();
    });

    elements.sortFilter.addEventListener('change', function () {
      const parts = elements.sortFilter.value.split('-');
      const direction = parts.pop();
      state.sortKey = parts.join('-');
      state.sortDir = direction === 'asc' ? 'asc' : 'desc';
      state.currentPage = 1;
      render();
    });

    // View toggle button
    elements.viewToggleBtn.addEventListener('click', function () {
      state.viewMode = state.viewMode === 'grid' ? 'table' : 'grid';
      updateViewToggle();
      render();
    });

    // Reset filters
    elements.resetFiltersBtn.addEventListener('click', resetAll);
    elements.emptyResetBtn.addEventListener('click', resetAll);

    // Bookmark-only view toggle
    elements.favToggleBtn.addEventListener('click', function () {
      state.showFavoritesOnly = !state.showFavoritesOnly;
      elements.favToggleBtn.classList.toggle('active', state.showFavoritesOnly);
      state.currentPage = 1;
      render();
    });

    // Pagination
    elements.prevPageBtn.addEventListener('click', function () {
      if (state.currentPage > 1) {
        state.currentPage--;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    elements.nextPageBtn.addEventListener('click', function () {
      if (state.currentPage < Math.ceil(getFilteredItems().length / state.pageSize)) {
        state.currentPage++;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Card grid & table row interaction (delegated)
    elements.equipGrid.addEventListener('click', handleItemClick);
    elements.equipTableBody.addEventListener('click', handleItemClick);

    // Sortable table headers
    document.querySelectorAll('.equip-table th.sortable').forEach(function (header) {
      header.addEventListener('click', function () {
        const key = header.getAttribute('data-sort-key');
        if (!key) return;

        if (state.sortKey === key) {
          state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          state.sortKey = key;
          state.sortDir = (key === 'name' || key === 'type') ? 'asc' : 'desc';
        }

        state.currentPage = 1;
        syncSortSelect();
        render();
      });
    });

    // Modal events
    elements.modalCloseBtn.addEventListener('click', closeModal);
    elements.modalDoneBtn.addEventListener('click', closeModal);
    elements.detailModal.addEventListener('click', function (event) {
      if (event.target === elements.detailModal) closeModal();
    });

    elements.modalFavBtn.addEventListener('click', function () {
      if (state.selectedItem) toggleFavorite(state.selectedItem.id);
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && elements.detailModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function init() {
    populateSortOptions();
    updateMetrics();
    renderSubtypeChips();
    bindEvents();
    render();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();