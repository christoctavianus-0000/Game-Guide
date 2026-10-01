/**
 * OCTOPATH TRAVELER 0 // NPC CODEX
 * Area-chunk NPC database: type tabs, path-action modals,
 * invite/helper tables, enemy-style stats, weaknesses, drops.
 */
(function () {
  'use strict';

  var dataset = (typeof npcData !== 'undefined' && Array.isArray(npcData)) ? npcData : [];

  var WEAKNESS_META = [
    { key: 'Sword', icon: 'assets/icons/icon_sword.png' },
    { key: 'Spear', icon: 'assets/icons/icon_polearm.png' },
    { key: 'Dagger', icon: 'assets/icons/icon_dagger.png' },
    { key: 'Axe', icon: 'assets/icons/icon_axe.png' },
    { key: 'Bow', icon: 'assets/icons/icon_bow.png' },
    { key: 'Staff', icon: 'assets/icons/icon_staff.png' },
    { key: 'Tome', icon: 'assets/icons/icon_tome.png' },
    { key: 'Fan', icon: 'assets/icons/icon_fan.png' },
    { key: 'Fire', icon: 'assets/icons/icon_fire.png' },
    { key: 'Ice', icon: 'assets/icons/icon_ice.png' },
    { key: 'Thunder', icon: 'assets/icons/icon_lightning.png' },
    { key: 'Wind', icon: 'assets/icons/icon_wind.png' },
    { key: 'Light', icon: 'assets/icons/icon_light.png' },
    { key: 'Dark', icon: 'assets/icons/icon_dark.png' }
  ];

  var HELPER_TYPE_ICONS = {
    'Sword': 'assets/icons/icon_sword.png',
    'Spear': 'assets/icons/icon_polearm.png',
    'Dagger': 'assets/icons/icon_dagger.png',
    'Axe': 'assets/icons/icon_axe.png',
    'Bow': 'assets/icons/icon_bow.png',
    'Staff': 'assets/icons/icon_staff.png',
    'Tome': 'assets/icons/icon_tome.png',
    'Fan': 'assets/icons/icon_fan.png',
    'Fire': 'assets/icons/icon_fire.png',
    'Ice': 'assets/icons/icon_ice.png',
    'Thunder': 'assets/icons/icon_lightning.png',
    'Wind': 'assets/icons/icon_wind.png',
    'Light': 'assets/icons/icon_light.png',
    'Dark': 'assets/icons/icon_dark.png',
    'Buff': 'assets/icons/icon_buff.png',
    'Debuff': 'assets/icons/icon_debuff.png',
    'Support': 'assets/icons/icon_passive.png'
  };

  var TYPE_ICONS = { Fame: '🌟', Power: '⚔️', Wealth: '💰' };
  var PATH_ACTIONS = { Fame: 'Entreat', Power: 'Contend', Wealth: 'Purchase' };
  var TYPES = ['Fame', 'Power', 'Wealth'];

  var state = {
    type: 'all',
    searchQuery: '',
    area: 'all',
    sortKey: 'area',
    sortDir: 'asc',
    collapsedAreas: {},
    chunkSort: {}
  };

  var el = {
    metricTotal: document.getElementById('npcMetricTotal'),
    metricAreas: document.getElementById('npcMetricAreas'),
    searchInput: document.getElementById('npcSearchInput'),
    clearSearchBtn: document.getElementById('npcClearSearch'),
    areaFilter: document.getElementById('npcAreaFilter'),
    sortFilter: document.getElementById('npcSortFilter'),
    resultsCount: document.getElementById('npcResultsCount'),
    resetBtn: document.getElementById('npcResetBtn'),
    chunksGrid: document.getElementById('npcChunksGrid'),
    emptyState: document.getElementById('npcEmptyState'),
    emptyResetBtn: document.querySelector('.npc-reset-empty-btn'),
    modal: document.getElementById('npcModal'),
    modalContent: document.getElementById('npcModalContent')
  };

  function cleanText(v) { return String(v == null ? '' : v).replace(/\s+/g, ' ').trim(); }

  function esc(t) {
    if (t == null) return '';
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function helperTypeIcon(typeText) {
    var primary = cleanText(typeText).split('/')[0].trim();
    var icon = HELPER_TYPE_ICONS[primary];
    if (icon && icon.indexOf('.') > 0) {
      return '<img src="' + icon + '" alt="' + esc(primary) + '" class="npc-helper-icon" loading="lazy" />'; }
    return '<span class="npc-helper-icon">' + esc(icon) + '</span>';
  }

  function typeIcon(type) { return TYPE_ICONS[type] || '✦'; }

  function fmtNum(v) { return v != null && v !== '' ? Number(v).toLocaleString() : '—'; }

  function nonEmpty(list) { return (list || []).filter(function (v) { return cleanText(v) !== ''; }); }

  function pathAction(type) { return PATH_ACTIONS[type] || 'Purchase'; }

  function getHaystack(npc) {
    var parts = [
      npc.name, npc.area, npc.subArea, npc.type, npc.levelText,
      npc.inquire, npc.invite, npc.inviteDesc, npc.required, npc.inviteFacility,
      npc.helperSkill, npc.helperType, npc.helperDesc, npc.drop, npc.obtain, npc.note
    ];
    nonEmpty(npc.items).forEach(function (i) { parts.push(i); });
    (npc.adds || []).forEach(function (a) {
      parts.push(a.name);
      nonEmpty(a.items).forEach(function (i) { parts.push(i); });
    });
    return parts.join(' ').toLowerCase();
  }

  function getFilteredNpcs() {
    var items = dataset;
    if (state.type !== 'all') {
      items = items.filter(function (n) { return n.type === state.type; });
    }
    if (state.area !== 'all') {
      items = items.filter(function (n) { return n.area === state.area; });
    }
    if (state.searchQuery) {
      var q = state.searchQuery.toLowerCase();
      items = items.filter(function (n) { return getHaystack(n).indexOf(q) !== -1; });
    }
    return items;
  }

  function compareValues(a, b, key, dir) {
    var sign = dir === 'desc' ? -1 : 1;
    if (key === 'name') return sign * String(a.name || '').localeCompare(String(b.name || ''));
    if (key === 'area') {
      var s = (a.sort || 0) - (b.sort || 0);
      return s !== 0 ? sign * s : String(a.name || '').localeCompare(String(b.name || ''));
    }
    var av = a[key], bv = b[key];
    var aNull = av == null || av === '', bNull = bv == null || bv === '';
    if (aNull && bNull) return 0;
    if (aNull) return 1;
    if (bNull) return -1;
    if (typeof av === 'number' && typeof bv === 'number') return sign * (av - bv);
    return sign * String(av).localeCompare(String(bv));
  }

  function groupByArea(items) {
    var groups = {};
    items.forEach(function (npc) {
      var area = npc.area || 'Unknown';
      if (!groups[area]) groups[area] = [];
      groups[area].push(npc);
    });
    var areas = Object.keys(groups).sort(function (a, b) {
      var sa = Math.min.apply(null, groups[a].map(function (n) { return n.sort || 0; }));
      var sb = Math.min.apply(null, groups[b].map(function (n) { return n.sort || 0; }));
      return sa - sb;
    });
    var sorted = {};
    areas.forEach(function (area) {
      var members = groups[area].slice();
      if (state.sortKey === 'area') {
        members.sort(function (a, b) { return (a.sort || 0) - (b.sort || 0); });
      } else {
        members.sort(function (a, b) { return compareValues(a, b, state.sortKey, state.sortDir); });
      }
      sorted[area] = members;
    });
    return sorted;
  }

  function renderMetrics() {
    if (el.metricTotal) el.metricTotal.textContent = dataset.length;
    if (el.metricAreas) {
      var areas = {};
      dataset.forEach(function (n) { areas[n.area] = 1; });
      el.metricAreas.textContent = Object.keys(areas).length;
    }
    TYPES.forEach(function (type) {
      var count = dataset.filter(function (n) { return n.type === type; }).length;
      var cnt = document.getElementById('npcCatCount' + type);
      if (cnt) cnt.textContent = count;
    });
    var all = document.getElementById('npcCatCountAll');
    if (all) all.textContent = dataset.length;
  }

  function populateAreaDropdown() {
    if (!el.areaFilter) return;
    var seen = {}, areas = [];
    dataset.slice().sort(function (a, b) { return (a.sort || 0) - (b.sort || 0); })
      .forEach(function (n) {
        if (!seen[n.area]) { seen[n.area] = 1; areas.push(n.area); }
      });
    el.areaFilter.innerHTML = '<option value="all">All Areas</option>' + areas.map(function (a) {
      return '<option value="' + esc(a) + '">' + esc(a) + '</option>';
    }).join('');
    el.areaFilter.value = state.area;
  }

  function renderTypeTabs() {
    Array.prototype.forEach.call(document.querySelectorAll('.cat-tab'), function (tab) {
      var cat = tab.getAttribute('data-category');
      var active = cat === state.type;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
  }

  function renderNpcRow(npc) {
    var inviteCell = npc.invite
      ? '<span class="npc-invite-name">' + esc(npc.invite) + '</span>'
      : '<span class="npc-dash">—</span>';
    var helperCell = npc.helperSkill
      ? '<span class="npc-helper-chip" title="' + esc(npc.helperDesc) + '">' +
        '<span class="npc-helper-icon" aria-hidden="true">' + helperTypeIcon(npc.helperType) + '</span>' +
        esc(npc.helperSkill) + '</span>'
      : '<span class="npc-dash">—</span>';
    var items = nonEmpty(npc.items);
    var itemsCell = items.length
      ? '<span class="npc-items-cell" title="' + esc(items.join(', ')) + '">' + esc(items.join(', ')) + '</span>'
      : '<span class="npc-dash">—</span>';

    return '<tr class="npc-row" data-npc-id="' + esc(npc.id) + '" tabindex="0">' +
      '<td class="npc-name-cell">' + esc(npc.name) + '</td>' +
      '<td><span class="npc-type-badge" data-type="' + esc(npc.type) + '">' +
        typeIcon(npc.type) + ' ' + esc(npc.type) + '</span></td>' +
      '<td class="num">' + esc(npc.levelText || '—') + '</td>' +
      '<td>' + inviteCell + '</td>' +
      '<td class="num">' + fmtNum(npc.danger) + '</td>' +
      '<td>' + helperCell + '</td>' +
      '<td class="npc-items-col">' + itemsCell + '</td>' +
      '</tr>';
  }

  function renderChunkTable(members, chunkKey) {
    var html = '<table class="npc-table"><thead><tr>' +
      '<th class="sortable" data-sort-key="name" data-chunk="' + esc(chunkKey) + '">Name</th>' +
      '<th class="sortable" data-sort-key="type" data-chunk="' + esc(chunkKey) + '">Type</th>' +
      '<th class="sortable" data-sort-key="levelText" data-chunk="' + esc(chunkKey) + '">Level</th>' +
      '<th class="sortable" data-sort-key="invite" data-chunk="' + esc(chunkKey) + '">Invite</th>' +
      '<th class="sortable" data-sort-key="danger" data-chunk="' + esc(chunkKey) + '">Danger</th>' +
      '<th class="sortable" data-sort-key="helperSkill" data-chunk="' + esc(chunkKey) + '">Helper Skill</th>' +
      '<th class="sortable" data-sort-key="items" data-chunk="' + esc(chunkKey) + '">Items</th>' +
      '</tr></thead><tbody>';
    members.forEach(function (n) { html += renderNpcRow(n); });
    html += '</tbody></table>';
    return html;
  }

  function sortChunkMembers(area, key) {
    var groups = groupByArea(getFilteredNpcs());
    var members = groups[area];
    if (!members) return;
    var prev = state.chunkSort[area];
    var oldKey = prev ? prev.key : null;
    var oldDir = prev ? prev.dir : 'asc';
    var newDir = (key === oldKey && oldDir === 'asc') ? 'desc' : 'asc';
    members.sort(function (a, b) {
      var sign = newDir === 'desc' ? -1 : 1;
      var av, bv;
      if (key === 'items') {
        av = nonEmpty(a.items).join(', ');
        bv = nonEmpty(b.items).join(', ');
      } else if (key === 'danger') {
        av = a.danger; bv = b.danger;
        var aNull = av == null || av === '', bNull = bv == null || bv === '';
        if (aNull && bNull) return 0;
        if (aNull) return 1;
        if (bNull) return -1;
        return sign * (Number(av) - Number(bv));
      } else {
        av = a[key]; bv = b[key];
      }
      if (av == null) av = '';
      if (bv == null) bv = '';
      return sign * String(av).localeCompare(String(bv), undefined, { numeric: true });
    });
    state.chunkSort[area] = { key: key, dir: newDir };
    var chunk = document.querySelector('.shop-chunk[data-area="' + area.replace(/"/g, '\\"') + '"]');
    if (chunk) {
      var tableWrap = chunk.querySelector('.npc-chunk-table-wrap');
      if (tableWrap) {
        tableWrap.innerHTML = renderChunkTable(members, area);
        attachSortHandlers();
        updateSortIndicators(area, key, newDir);
      }
    }
  }

  function updateSortIndicators(area, key, dir) {
    var chunk = document.querySelector('.shop-chunk[data-area="' + area.replace(/"/g, '\\"') + '"]');
    if (!chunk) return;
    Array.prototype.forEach.call(chunk.querySelectorAll('th.sortable'), function (th) {
      var k = th.getAttribute('data-sort-key');
      var active = k === key;
      th.classList.toggle('sort-active', active);
      var arrow = th.querySelector('.sort-arrow');
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
      th.addEventListener('click', function (e) {
        e.stopPropagation();
        var key = th.getAttribute('data-sort-key');
        var chunk = th.getAttribute('data-chunk');
        sortChunkMembers(chunk, key);
      });
    });
  }

  function renderChunks() {
    if (!el.chunksGrid) return;
    var items = getFilteredNpcs();
    var total = items.length;

    if (el.resultsCount) {
      el.resultsCount.textContent = 'Showing ' + total.toLocaleString() + ' NPC' + (total === 1 ? '' : 's');
    }
    if (total === 0) {
      el.chunksGrid.innerHTML = '';
      if (el.emptyState) el.emptyState.style.display = 'block';
      return;
    }
    if (el.emptyState) el.emptyState.style.display = 'none';

    var groups = groupByArea(items);
    var html = '';
    Object.keys(groups).forEach(function (area) {
      var members = groups[area];
      var collapsed = !!state.collapsedAreas[area];
      html += '<div class="shop-chunk' + (collapsed ? ' collapsed' : '') + '" data-area="' + esc(area) + '">';
      html += '<div class="shop-chunk-header" role="button" tabindex="0" aria-expanded="' + (!collapsed) + '">';
      html += '<div class="shop-chunk-header-left">';
      html += '<span class="shop-chunk-name">' + esc(area) + '</span>';
      html += '<span class="shop-chunk-count">' + members.length + ' NPC' + (members.length === 1 ? '' : 's') + '</span>';
      html += '</div>';
      html += '<span class="shop-chunk-chevron">' + (collapsed ? '▸' : '▾') + '</span>';
      html += '</div>';
      html += '<div class="shop-chunk-body"><div class="shop-chunk-items npc-chunk-table-wrap">';
      html += renderChunkTable(members, area);
      html += '</div></div></div>';
    });
    el.chunksGrid.innerHTML = html;

    Array.prototype.forEach.call(el.chunksGrid.querySelectorAll('.shop-chunk-header'), function (header) {
      function toggle() {
        var chunk = header.parentNode;
        var area = chunk.getAttribute('data-area');
        state.collapsedAreas[area] = !state.collapsedAreas[area];
        chunk.classList.toggle('collapsed');
        header.setAttribute('aria-expanded', String(!state.collapsedAreas[area]));
        var chev = header.querySelector('.shop-chunk-chevron');
        if (chev) chev.textContent = state.collapsedAreas[area] ? '▸' : '▾';
      }
      header.addEventListener('click', toggle);
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });

    attachSortHandlers();
  }

  // ---- Modal --------------------------------------------------------------

  function renderWeaknessGrid(weaknesses) {
    var weakSet = {};
    (weaknesses || []).forEach(function (w) { weakSet[w] = 1; });
    return WEAKNESS_META.map(function (t) {
      var isWeak = !!weakSet[t.key];
      var cls = isWeak ? 'is-weak' : 'not-weak';
      var title = t.key + ': ' + (isWeak ? 'Weakness' : 'Not Weak');
      return '<span class="enemy-atk-icon ' + cls + '" title="' + title + '">' +
        '<img src="' + t.icon + '" alt="' + t.key + '" loading="lazy" /></span>';
    }).join('');
  }

  function renderStatTable(npc) {
    var stats = [
      { label: 'Danger', value: npc.danger },
      { label: 'Shields', value: npc.shields },
      { label: 'HP', value: npc.hp },
      { label: 'EXP', value: npc.exp },
      { label: 'JP', value: npc.jp },
      { label: 'Leaf', value: npc.leaf }
    ];
    var ths = stats.map(function (s) {
      return '<th>' + s.label + '</th>';
    }).join('');
    var tds = stats.map(function (s) {
      var val = s.value != null ? Number(s.value) : null;
      return '<td class="' + (val ? 'has-value' : 'is-zero') + '">' + (val ? val.toLocaleString() : '—') + '</td>';
    }).join('');
    return '<div class="npc-helper-table-wrap"><table class="npc-table npc-helper-table stats-table"><thead><tr>' +
      ths + '</tr></thead><tbody><tr>' + tds + '</tr></tbody></table></div>';
  }

  function hasHelperData(npc) {
    return !!(npc.helperSkill || npc.uses || npc.strength || (npc.helperType && npc.helperType !== 'n/a'));
  }

  function renderHelperTable(npc) {
    if (!hasHelperData(npc)) return '';
    var rows = '<tr>' +
      '<td>' + esc(npc.strength || '—') + '</td>' +
      '<td>' + esc(npc.helperSkill || '—') + '</td>' +
      '<td>' + (npc.helperType
        ? '<span class="npc-helper-chip"><span class="npc-helper-icon" aria-hidden="true">' +
          helperTypeIcon(npc.helperType) + '</span>' + esc(npc.helperType) + '</span>'
        : '—') + '</td>' +
      '<td class="num">' + esc(npc.uses || '—') + '</td>' +
      '<td>' + esc(npc.helperDesc || '—') + '</td>' +
      '</tr>';
    return '<div class="modal-section">' +
      '<h4 class="modal-section-heading">Hire / Impress / Recruit</h4>' +
      '<p class="modal-helper-intro">The character joins you as a helper and provides an effect in battle.</p>' +
      '<div class="npc-helper-table-wrap"><table class="npc-table npc-helper-table"><thead><tr>' +
      '<th>Strength</th><th>Helper Skill</th><th>Type</th><th>Uses</th><th>Description</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '</div>';
  }

  function renderAddsSection(npc) {
    if (!npc.adds || !npc.adds.length) return '';
    var rows = npc.adds.map(function (a) {
      var items = nonEmpty(a.items);
      var weakIcons = (a.weaknesses || []).map(function (w) {
        var meta = null;
        for (var i = 0; i < WEAKNESS_META.length; i++) {
          if (WEAKNESS_META[i].key === w) { meta = WEAKNESS_META[i]; break; }
        }
        if (!meta) return '<span class="enemy-atk-icon is-weak" title="' + esc(w) + '">' + esc(w) + '</span>';
        return '<span class="enemy-atk-icon is-weak" title="' + esc(w) + '">' +
          '<img src="' + meta.icon + '" alt="' + esc(w) + '" loading="lazy" /></span>';
      }).join('');
      return '<tr>' +
        '<td>' + esc(a.name) + '</td>' +
        '<td>' + esc(a.levelText || a.level || '—') + '</td>' +
        '<td>' + (a.shields != null ? esc(a.shields) : '—') + '</td>' +
        '<td><div class="enemy-weakness-grid">' + (weakIcons || '—') + '</div></td>' +
        '<td>' + esc(items.join(', ') || '—') + '</td>' +
        '</tr>';
    }).join('');
    return '<div class="modal-section">' +
      '<h4 class="modal-section-heading">⚔️ Battle Adds</h4>' +
      '<p class="modal-helper-intro">These NPCs join the battle when you fight the leader.</p>' +
      '<div class="npc-helper-table-wrap"><table class="npc-table npc-helper-table"><thead><tr>' +
      '<th>Name</th><th>Level</th><th>Shields</th><th>Weakness</th><th>Items</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '</div>';
  }

  function renderModal(npc) {
    var html = '';
    var pathActionLabel = pathAction(npc.type);
    var items = nonEmpty(npc.items);

    // Header
    html += '<div class="enemy-modal-header">';
    html += '<button class="modal-close-btn" id="npcModalCloseBtn" aria-label="Close">✕</button>';
    html += '<div class="enemy-modal-title-block">';
    html += '<h3 class="enemy-modal-name" id="npcModalTitle">' + esc(npc.name) + '</h3>';
    html += '<div class="enemy-modal-meta-line">';
    html += '<span class="enemy-modal-area">' + esc(npc.area) + ' | ' + esc(npc.subArea || '—') + '</span>';
    html += '<span class="enemy-modal-sep">•</span>';
    html += '<span>Level ' + esc(npc.levelText || npc.level || '—') + '</span>';
    html += '<span class="enemy-modal-sep">•</span>';
    html += '<span class="npc-type-badge" data-type="' + esc(npc.type) + '">' +
      typeIcon(npc.type) + ' ' + esc(npc.type) + '</span>';
    html += '</div></div></div>';

    html += '<div class="enemy-modal-body">';

    // Inquire
    if (npc.inquire) {
      html += '<div class="modal-section"><h4 class="modal-section-heading">💬 Inquire</h4>' +
        '<p class="modal-text">' + esc(npc.inquire) + '</p></div>';
    }

    // Path action items (Purchase/Contend/Entreat)
    if (items.length) {
      html += '<div class="modal-section"><h4 class="modal-section-heading">' +
        typeIcon(npc.type) + ' ' + pathActionLabel + '</h4>' +
        '<ul class="modal-item-list">' + items.map(function (i) {
          return '<li class="modal-item">' + esc(i) + '</li>';
        }).join('') + '</ul></div>';
    }

    // Invite
    if (npc.invite) {
      html += '<div class="modal-section"><h4 class="modal-section-heading">🏠 Invite</h4>';
      html += '<div class="modal-invite-block">';
      html += '<span class="npc-invite-name modal-invite-skill">' + esc(npc.invite) + '</span>';
      if (npc.inviteDesc) html += '<p class="modal-text">' + esc(npc.inviteDesc) + '</p>';
      if (npc.required) html += '<p class="modal-requires">Requires: ' + esc(npc.required) + '</p>';
      if (npc.inviteFacility) html += '<p class="modal-requires">Facility: ' + esc(npc.inviteFacility) + '</p>';
      html += '</div></div>';
    }

    // Hire/Impress/Recruit helper table
    html += renderHelperTable(npc);

    // Stats
    var hasStats = npc.shields != null || npc.hp != null || npc.exp != null || npc.jp != null || npc.leaf != null;
    if (hasStats) {
      html += '<div class="modal-section"><h4 class="modal-section-heading">📊 Stats</h4>' +
        renderStatTable(npc) + '</div>';
    }

    // Weakness
    if (npc.weaknesses && npc.weaknesses.length) {
      html += '<div class="modal-section"><h4 class="modal-section-heading">⚔️ Weakness</h4>' +
        '<div class="enemy-weakness-grid">' + renderWeaknessGrid(npc.weaknesses) + '</div></div>';
    }

    // Drop
    if (npc.obtain || npc.drop) {
      var dropLabel = npc.drop || npc.obtain;
      var dropPct = npc.dropPct != null ? ' (' + npc.dropPct + '%)' : '';
      html += '<div class="modal-section"><h4 class="modal-section-heading">🎁 Drop</h4>' +
        '<p class="modal-text">' + esc(dropLabel) + esc(dropPct) + '</p></div>';
    }

    // Battle adds
    html += renderAddsSection(npc);

    // Notes (Wishvale only)
    if (npc.isWishvale && npc.note) {
      html += '<div class="modal-section"><h4 class="modal-section-heading">📝 Notes</h4>' +
        '<p class="modal-text">' + esc(npc.note) + '</p></div>';
    }

    html += '</div>';
    return html;
  }

  var lastFocusedRow = null;

  function openModal(npc, triggerEl) {
    if (!el.modal || !el.modalContent) return;
    lastFocusedRow = triggerEl || null;
    el.modalContent.innerHTML = renderModal(npc);
    el.modal.classList.add('open');
    el.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var closeBtn = document.getElementById('npcModalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      closeBtn.focus();
    }
  }

  function closeModal() {
    if (!el.modal || !el.modalContent) return;
    el.modal.classList.remove('open');
    el.modal.setAttribute('aria-hidden', 'true');
    el.modalContent.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocusedRow && typeof lastFocusedRow.focus === 'function') {
      lastFocusedRow.focus();
    }
    lastFocusedRow = null;
  }

  function findNpcById(id) {
    for (var i = 0; i < dataset.length; i++) {
      if (dataset[i].id === id) return dataset[i];
    }
    return null;
  }

  // ---- Events -------------------------------------------------------------

  function bindEvents() {
    Array.prototype.forEach.call(document.querySelectorAll('.cat-tab'), function (tab) {
      tab.addEventListener('click', function () {
        state.type = tab.getAttribute('data-category') || 'all';
        renderTypeTabs();
        renderChunks();
      });
    });

    var searchTimer = null;
    if (el.searchInput) {
      el.searchInput.addEventListener('input', function () {
        clearTimeout(searchTimer);
        var val = el.searchInput.value;
        searchTimer = setTimeout(function () {
          state.searchQuery = cleanText(val);
          renderChunks();
        }, 200);
      });
    }
    if (el.clearSearchBtn) {
      el.clearSearchBtn.addEventListener('click', function () {
        if (el.searchInput) el.searchInput.value = '';
        state.searchQuery = '';
        renderChunks();
      });
    }
    if (el.areaFilter) {
      el.areaFilter.addEventListener('change', function () {
        state.area = el.areaFilter.value || 'all';
        renderChunks();
      });
    }
    if (el.sortFilter) {
      el.sortFilter.addEventListener('change', function () {
        var val = el.sortFilter.value || 'area-asc';
        var parts = val.split('-');
        state.sortDir = parts[parts.length - 1] || 'asc';
        state.sortKey = parts.slice(0, -1).join('-') || 'area';
        renderChunks();
      });
    }
    function resetFilters() {
      state.type = 'all';
      state.searchQuery = '';
      state.area = 'all';
      state.sortKey = 'area';
      state.sortDir = 'asc';
      if (el.searchInput) el.searchInput.value = '';
      if (el.areaFilter) el.areaFilter.value = 'all';
      if (el.sortFilter) el.sortFilter.value = 'area-asc';
      renderTypeTabs();
      populateAreaDropdown();
      renderChunks();
    }
    if (el.resetBtn) el.resetBtn.addEventListener('click', resetFilters);
    if (el.emptyResetBtn) el.emptyResetBtn.addEventListener('click', resetFilters);

    // Row clicks + keyboard
    if (el.chunksGrid) {
      el.chunksGrid.addEventListener('click', function (e) {
        var row = e.target.closest ? e.target.closest('.npc-row') : null;
        if (!row) return;
        var id = row.getAttribute('data-npc-id');
        var npc = findNpcById(id);
        if (npc) openModal(npc, row);
      });
      el.chunksGrid.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        var row = e.target.closest ? e.target.closest('.npc-row') : null;
        if (!row) return;
        e.preventDefault();
        var npc = findNpcById(row.getAttribute('data-npc-id'));
        if (npc) openModal(npc, row);
      });
    }

    // Modal dismiss
    if (el.modal) {
      el.modal.addEventListener('click', function (e) {
        if (e.target === el.modal) closeModal();
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && el.modal && el.modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  function init() {
    if (!dataset.length) return;
    renderMetrics();
    populateAreaDropdown();
    renderTypeTabs();
    renderChunks();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
