/**
 * OCTOPATH TRAVELER 0 // SHOP CODEX
 * Chunk-card based Shop & Inventory Database
 */

(function () {
  'use strict';

  var shopDataState = (typeof shopData !== 'undefined')
    ? shopData
    : { wishvale: [], shops: [], allItems: [] };

  var equipmentLookup = (typeof equipmentData !== 'undefined' && Array.isArray(equipmentData)) ? equipmentData : [];

  var state = {
    activeLocation: 'all',
    searchQuery: '',
    collapsedLocations: {}
  };

  var elements = {
    metricItemCount: document.getElementById('metricItemCount'),
    metricLocationCount: document.getElementById('metricLocationCount'),
    searchInput: document.getElementById('shopSearchInput'),
    clearSearchBtn: document.getElementById('clearShopSearch'),
    locationFilter: document.getElementById('shopLocationFilter'),
    sortFilter: document.getElementById('shopSortFilter'),
    resultsCount: document.getElementById('shopResultsCount'),
    chunksGrid: document.getElementById('shopChunksGrid'),
    emptyState: document.getElementById('shopEmptyState'),
    resetBtn: document.getElementById('shopResetBtn'),
    emptyResetBtn: document.querySelector('.shop-reset-empty-btn'),

    modal: document.getElementById('detailModal'),
    modalTitle: document.getElementById('detailModalTitle'),
    modalDescription: document.getElementById('detailModalDescription'),
    modalAmitySection: document.getElementById('detailSectionAmity')
  };

  function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getAllItems() {
    return shopDataState.allItems || [];
  }

  function getLocations() {
    var locations = new Set();
    getAllItems().forEach(function (item) {
      if (item.location) locations.add(item.location);
    });
    return Array.from(locations).sort();
  }

  function findEquipmentByName(name) {
    if (!name) return null;
    var normalized = String(name).trim().toLowerCase();
    return equipmentLookup.find(function (item) {
      return String(item.name || '').trim().toLowerCase() === normalized;
    }) || null;
  }

  function getEquipmentLink(name) {
    return 'equipment.html?item=' + encodeURIComponent(name);
  }

  // ---- Grouping -----------------------------------------------------------

  function groupByLocation(items) {
    var groups = {};
    items.forEach(function (item) {
      var loc = item.location || 'Unknown';
      if (!groups[loc]) groups[loc] = [];
      groups[loc].push(item);
    });
    // Sort locations by name
    var sorted = {};
    Object.keys(groups).sort().forEach(function (loc) {
      sorted[loc] = groups[loc];
    });
    return sorted;
  }

  // ---- Filtering ----------------------------------------------------------

  function getFilteredItems() {
    var items = getAllItems();

    if (state.activeLocation !== 'all') {
      items = items.filter(function (item) { return item.location === state.activeLocation; });
    }

    if (state.searchQuery) {
      var query = state.searchQuery.toLowerCase();
      items = items.filter(function (item) {
        return (item.name || '').toLowerCase().indexOf(query) !== -1 ||
               (item.location || '').toLowerCase().indexOf(query) !== -1;
      });
    }

    return items;
  }

  // ---- Rendering ----------------------------------------------------------

  function renderMetrics() {
    var items = getAllItems();
    if (elements.metricItemCount) elements.metricItemCount.textContent = items.length;
    if (elements.metricLocationCount) elements.metricLocationCount.textContent = getLocations().length;
  }

  function populateDropdowns() {
    if (elements.locationFilter) {
      var locations = getLocations();
      var opts = '<option value="all">All Locations</option>' +
        locations.map(function (loc) {
          return '<option value="' + escapeHtml(loc) + '"' +
            (state.activeLocation === loc ? ' selected' : '') + '>' +
            escapeHtml(loc) + '</option>';
        }).join('');
      elements.locationFilter.innerHTML = opts;
      elements.locationFilter.value = state.activeLocation;
    }
    if (elements.sortFilter) {
      elements.sortFilter.value = state.sortKey + '-' + state.sortDir;
    }
  }

  function renderChunks() {
    if (!elements.chunksGrid) return;
    var items = getFilteredItems();
    var total = items.length;

    if (elements.resultsCount) {
      elements.resultsCount.textContent = 'Showing ' + total.toLocaleString() + ' item' + (total === 1 ? '' : 's');
    }

    if (total === 0) {
      elements.chunksGrid.innerHTML = '';
      if (elements.emptyState) elements.emptyState.style.display = 'block';
      if (elements.paginationFooter) elements.paginationFooter.style.display = 'none';
      return;
    }

    if (elements.emptyState) elements.emptyState.style.display = 'none';

    var groups = groupByLocation(items);

    // Render chunk cards
    var html = '';
    Object.keys(groups).forEach(function (loc) {
      var groupItems = groups[loc];
      var totalCount = groupItems.length;
      var isCollapsed = !!state.collapsedLocations[loc];

      html += '<div class="shop-chunk' + (isCollapsed ? ' collapsed' : '') + '" data-location="' + escapeHtml(loc) + '">';
      html += '<div class="shop-chunk-header" role="button" tabindex="0" aria-expanded="' + (!isCollapsed) + '">';
      html += '<div class="shop-chunk-header-left">';
      html += '<span class="shop-chunk-name">' + escapeHtml(loc) + '</span>';
      html += '<span class="shop-chunk-count">' + totalCount + ' item' + (totalCount === 1 ? '' : 's') + '</span>';
      html += '</div>';
      html += '<span class="shop-chunk-chevron">' + (isCollapsed ? '▸' : '▾') + '</span>';
      html += '</div>';
      html += '<div class="shop-chunk-body">';
      html += '<div class="shop-chunk-items">';

      groupItems.forEach(function (item) {
        var equipment = findEquipmentByName(item.name);
        var nameHtml = equipment
          ? '<a class="shop-item-link" href="' + escapeHtml(getEquipmentLink(item.name)) + '" title="View in Equipment Codex">' + escapeHtml(item.name) + '</a>'
          : '<span class="shop-item-name">' + escapeHtml(item.name) + '</span>';
        var priceHtml = item.price ? '<span class="shop-chunk-price">' + item.price.toLocaleString() + ' leaves</span>' : '<span class="shop-chunk-price">—</span>';

        html += '<div class="shop-chunk-item-row">';
        html += '<div class="shop-chunk-item-name">' + nameHtml + '</div>';
        html += priceHtml;
        html += '</div>';
      });

      html += '</div></div></div>';
    });

    elements.chunksGrid.innerHTML = html;

    // Reattach expand/collapse event listeners
    elements.chunksGrid.querySelectorAll('.shop-chunk-header').forEach(function (header) {
      header.addEventListener('click', function () {
        var chunk = header.closest('.shop-chunk');
        var loc = chunk.getAttribute('data-location');
        state.collapsedLocations[loc] = !state.collapsedLocations[loc];
        chunk.classList.toggle('collapsed');
        header.setAttribute('aria-expanded', String(!state.collapsedLocations[loc]));
        header.querySelector('.shop-chunk-chevron').textContent = state.collapsedLocations[loc] ? '▸' : '▾';
      });
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    });
  }

  // ---- Modal -------------------------------------------------------------

  function openModal(item) {
    if (!item) return;
    if (elements.modalTitle) elements.modalTitle.textContent = item.name || 'Item';
    var equipment = findEquipmentByName(item.name);
    var desc = 'Available at ' + (item.location || 'Unknown');
    if (item.price) desc += ' for ' + item.price.toLocaleString() + ' leaves.';
    if (item.type) desc += ' Type: ' + item.type + '.';
    if (item.rarity) desc += ' Rarity: ' + item.rarity + '.';
    if (equipment) {
      desc += ' This item matches equipment in the Equipment Codex.';
    }
    if (elements.modalDescription) elements.modalDescription.textContent = desc;
    if (elements.modalAmitySection) elements.modalAmitySection.style.display = 'none';
    if (elements.modal) elements.modal.style.display = 'flex';
  }

  function closeModal() {
    if (elements.modal) elements.modal.style.display = 'none';
  }

  window.closeDetailModal = closeModal;

  // ---- Events ------------------------------------------------------------

  function bindEvents() {
    if (elements.locationFilter) {
      elements.locationFilter.addEventListener('change', function () {
        state.activeLocation = elements.locationFilter.value;
      renderChunks();
    });
    }

    if (elements.sortFilter) {
      elements.sortFilter.addEventListener('change', function () {
        var parts = elements.sortFilter.value.split('-');
        var direction = parts.pop();
        state.sortKey = parts.join('-');
        state.sortDir = direction === 'asc' ? 'asc' : 'desc';
        renderChunks();
      });
    }

    var searchDebounce = null;
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', function () {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(function () {
          state.searchQuery = elements.searchInput.value.trim();
          renderChunks();
        }, 200);
      });
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener('click', function () {
        if (elements.searchInput) elements.searchInput.value = '';
        state.searchQuery = '';
        renderChunks();
      });
    }

    function doReset() {
      state.activeLocation = 'all';
      state.searchQuery = '';
      state.collapsedLocations = {};
      if (elements.searchInput) elements.searchInput.value = '';
      populateDropdowns();
      renderChunks();
    }

    if (elements.resetBtn) {
      elements.resetBtn.addEventListener('click', doReset);
    }
    if (elements.emptyResetBtn) {
      elements.emptyResetBtn.addEventListener('click', doReset);
    }

    // Click on item row opens modal (only if not a link click)
    if (elements.chunksGrid) {
      elements.chunksGrid.addEventListener('click', function (event) {
        if (event.target.closest('a')) return;
        var row = event.target.closest('.shop-chunk-item-row');
        if (!row) return;
        var nameEl = row.querySelector('.shop-chunk-item-name');
        if (!nameEl) return;
        var name = nameEl.textContent.trim();
        var item = getAllItems().find(function (i) { return i.name === name; });
        if (item) openModal(item);
      });
    }

    if (elements.modal) {
      elements.modal.addEventListener('click', function (event) {
        if (event.target === elements.modal) closeModal();
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && elements.modal && elements.modal.style.display !== 'none') {
        closeModal();
      }
    });
  }

  // ---- Init --------------------------------------------------------------

  function init() {
    var params = new URLSearchParams(window.location.search || '');
    var reqLoc = params.get('location');
    var reqItem = params.get('item');
    if (reqLoc) {
      state.activeLocation = reqLoc;
    }
    if (reqItem) {
      state.searchQuery = reqItem;
      if (elements.searchInput) elements.searchInput.value = reqItem;
    }
    renderMetrics();
    populateDropdowns();
    bindEvents();
    renderChunks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

