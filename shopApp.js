/**
 * OCTOPATH TRAVELER 0 // SHOP CODEX
 * Table-based Shop & Inventory Database
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
    sortKey: 'location',
    sortDir: 'asc',
    currentPage: 1,
    pageSize: 48
  };

  var elements = {
    metricItemCount: document.getElementById('metricItemCount'),
    metricLocationCount: document.getElementById('metricLocationCount'),
    searchInput: document.getElementById('shopSearchInput'),
    clearSearchBtn: document.getElementById('clearShopSearch'),
    locationFilter: document.getElementById('shopLocationFilter'),
    sortFilter: document.getElementById('shopSortFilter'),
    resultsCount: document.getElementById('shopResultsCount'),
    tableWrap: document.getElementById('shopTableWrap'),
    tableBody: document.getElementById('shopTableBody'),
    emptyState: document.getElementById('shopEmptyState'),
    resetBtn: document.getElementById('shopResetBtn'),
    emptyResetBtn: document.querySelector('.shop-reset-empty-btn'),
    paginationFooter: document.getElementById('shopPaginationFooter'),
    paginationInfo: document.getElementById('shopPaginationInfo'),
    resultsCountFooter: document.getElementById('shopResultsCountFooter'),
    prevPageBtn: document.getElementById('shopPrevPageBtn'),
    nextPageBtn: document.getElementById('shopNextPageBtn'),
    pageCurrent: document.getElementById('shopPageCurrent'),
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

  // ---- Filtering & Sorting ------------------------------------------------

  function getFilteredItems() {
    var items = getAllItems();

    if (state.activeLocation !== 'all') {
      items = items.filter(function (item) { return item.location === state.activeLocation; });
    }

    if (state.searchQuery) {
      var query = state.searchQuery.toLowerCase();
      items = items.filter(function (item) {
        return (item.name || '').toLowerCase().indexOf(query) !== -1 ||
               (item.location || '').toLowerCase().indexOf(query) !== -1 ||
               (item.type || '').toLowerCase().indexOf(query) !== -1;
      });
    }

    var key = state.sortKey;
    var dir = state.sortDir === 'desc' ? -1 : 1;

    items.sort(function (a, b) {
      if (key === 'price') {
        var aVal = a.price || 0;
        var bVal = b.price || 0;
        if (aVal === bVal) return (a.name || '').localeCompare(b.name || '');
        return (aVal - bVal) * dir;
      }
      var aStr = String(a[key] || '').toLowerCase();
      var bStr = String(b[key] || '').toLowerCase();
      var cmp = aStr.localeCompare(bStr);
      if (cmp !== 0) return cmp * dir;
      return (a.name || '').localeCompare(b.name || '');
    });

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

  function renderTable() {
    if (!elements.tableBody) return;
    var items = getFilteredItems();
    var total = items.length;
    var totalPages = Math.ceil(total / state.pageSize) || 1;

    if (state.currentPage > totalPages) state.currentPage = totalPages;
    if (state.currentPage < 1) state.currentPage = 1;

    var startIdx = (state.currentPage - 1) * state.pageSize;
    var endIdx = Math.min(startIdx + state.pageSize, total);
    var pageItems = items.slice(startIdx, endIdx);

    if (elements.resultsCount) {
      elements.resultsCount.textContent = 'Showing ' + total.toLocaleString() + ' item' + (total === 1 ? '' : 's');
    }

    if (total === 0) {
      elements.tableBody.innerHTML = '';
      if (elements.tableWrap) elements.tableWrap.style.display = 'none';
      if (elements.emptyState) elements.emptyState.style.display = 'block';
      if (elements.paginationFooter) elements.paginationFooter.style.display = 'none';
      return;
    }
    if (elements.emptyState) elements.emptyState.style.display = 'none';
    if (elements.tableWrap) elements.tableWrap.style.display = '';
    if (elements.paginationFooter) elements.paginationFooter.style.display = 'flex';

    if (elements.resultsCountFooter) {
      elements.resultsCountFooter.textContent = 'Showing ' + (startIdx + 1) + '–' + endIdx + ' of ' + total.toLocaleString();
    }
    if (elements.paginationInfo) {
      elements.paginationInfo.textContent = 'Showing ' + (startIdx + 1) + '–' + endIdx + ' of ' + total.toLocaleString();
    }
    if (elements.pageCurrent) {
      elements.pageCurrent.textContent = 'Page ' + state.currentPage + ' of ' + totalPages;
    }
    if (elements.prevPageBtn) elements.prevPageBtn.disabled = state.currentPage <= 1;
    if (elements.nextPageBtn) elements.nextPageBtn.disabled = state.currentPage >= totalPages;

    var html = '';
    pageItems.forEach(function (item) {
      var equipment = findEquipmentByName(item.name);
      var nameCell = equipment
        ? '<a class="shop-item-link" href="' + escapeHtml(getEquipmentLink(item.name)) + '" title="View in Equipment Codex">' + escapeHtml(item.name) + '</a>'
        : escapeHtml(item.name);
      var priceCell = item.price ? item.price.toLocaleString() + ' leaves' : '—';

      html += '<tr class="equip-row">' +
        '<td>' + escapeHtml(item.location || '—') + '</td>' +
        '<td><div class="equip-name-cell"><span class="equip-name-text">' + nameCell + '</span></div></td>' +
        '<td class="num">' + priceCell + '</td>' +
      '</tr>';
    });

    elements.tableBody.innerHTML = html;

    elements.tableBody.querySelectorAll('tr').forEach(function (tr, i) {
      tr.classList.add('row-enter');
      tr.style.animationDelay = (i * 20) + 'ms';
    });

    updateSortHeaders();
  }

  // ---- Modal -------------------------------------------------------------

  function openModal(item) {
    if (!item) return;
    elements.modalTitle.textContent = item.name || 'Item';
    var equipment = findEquipmentByName(item.name);
    var desc = 'Available at ' + (item.location || 'Unknown');
    if (item.price) desc += ' for ' + item.price.toLocaleString() + ' leaves.';
    if (item.type) desc += ' Type: ' + item.type + '.';
    if (item.rarity) desc += ' Rarity: ' + item.rarity + '.';
    if (equipment) {
      desc += ' This item matches equipment in the Equipment Codex.';
    }
    elements.modalDescription.textContent = desc;
    if (elements.modalAmitySection) elements.modalAmitySection.style.display = 'none';
    elements.modal.style.display = 'flex';
  }

  function closeModal() {
    if (elements.modal) elements.modal.style.display = 'none';
  }

  window.closeDetailModal = closeModal;

  // ---- Events -----------------------------------------------------------

  function updateSortHeaders() {
    if (!elements.tableWrap) return;
    elements.tableWrap.querySelectorAll('th.sortable').forEach(function (cell) {
      var isActive = cell.getAttribute('data-sort-key') === state.sortKey;
      cell.classList.toggle('sort-active', isActive);
      cell.classList.toggle('sort-asc', isActive && state.sortDir === 'asc');
      cell.classList.toggle('sort-desc', isActive && state.sortDir === 'desc');
    });
  }

  function bindEvents() {
    if (elements.locationFilter) {
      elements.locationFilter.addEventListener('change', function () {
        state.activeLocation = elements.locationFilter.value;
        state.currentPage = 1;
        renderTable();
      });
    }

    if (elements.sortFilter) {
      elements.sortFilter.addEventListener('change', function () {
        var parts = elements.sortFilter.value.split('-');
        var direction = parts.pop();
        state.sortKey = parts.join('-');
        state.sortDir = direction === 'asc' ? 'asc' : 'desc';
        state.currentPage = 1;
        renderTable();
      });
    }

    var searchDebounce = null;
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', function () {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(function () {
          state.searchQuery = elements.searchInput.value.trim();
          state.currentPage = 1;
          renderTable();
        }, 200);
      });
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener('click', function () {
        if (elements.searchInput) elements.searchInput.value = '';
        state.searchQuery = '';
        state.currentPage = 1;
        renderTable();
      });
    }

    function doReset() {
      state.activeLocation = 'all';
      state.searchQuery = '';
      state.sortKey = 'location';
      state.sortDir = 'asc';
      state.currentPage = 1;
      if (elements.searchInput) elements.searchInput.value = '';
      populateDropdowns();
      renderTable();
    }

    if (elements.resetBtn) {
      elements.resetBtn.addEventListener('click', doReset);
    }
    if (elements.emptyResetBtn) {
      elements.emptyResetBtn.addEventListener('click', doReset);
    }

    if (elements.prevPageBtn) {
      elements.prevPageBtn.addEventListener('click', function () {
        if (state.currentPage > 1) {
          state.currentPage--;
          renderTable();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    if (elements.nextPageBtn) {
      elements.nextPageBtn.addEventListener('click', function () {
        var totalPages = Math.ceil(getFilteredItems().length / state.pageSize);
        if (state.currentPage < totalPages) {
          state.currentPage++;
          renderTable();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    if (elements.tableWrap) {
      elements.tableWrap.querySelectorAll('th.sortable').forEach(function (header) {
        header.addEventListener('click', function () {
          var key = header.getAttribute('data-sort-key');
          if (!key) return;
          if (state.sortKey === key) {
            state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
          } else {
            state.sortKey = key;
            state.sortDir = (key === 'name' || key === 'location') ? 'asc' : 'desc';
          }
          state.currentPage = 1;
          if (elements.sortFilter) elements.sortFilter.value = state.sortKey + '-' + state.sortDir;
          renderTable();
        });
      });
    }

    if (elements.tableBody) {
      elements.tableBody.addEventListener('click', function (event) {
        if (event.target.closest('a')) return;
        var row = event.target.closest('tr');
        if (!row) return;
        var nameEl = row.querySelector('.equip-name-text');
        if (!nameEl) return;
        var name = nameEl.textContent.replace(' ↗', '').trim();
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
    renderTable();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
