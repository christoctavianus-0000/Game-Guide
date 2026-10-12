document.addEventListener('DOMContentLoaded', () => {
  if (typeof CARD_DATABASE === 'undefined') {
    console.error('CARD_DATABASE is not loaded!');
    return;
  }

  const tableBody = document.getElementById('cardTableBody');
  const searchInput = document.getElementById('cardSearch');
  const levelFilter = document.getElementById('levelFilter');
  const categoryTabs = document.querySelectorAll('.tab-btn');

  let currentCategory = 'all';
  let currentSearch = '';
  let currentLevel = 'all';
  let sortKey = 'no';
  let sortDir = 1;

  function parseNum(value) {
    const n = parseInt(String(value || '').replace(/[^0-9-]/g, ''), 10);
    return Number.isNaN(n) ? -1 : n;
  }

  function attackPower(text) {
    const m = String(text || '').match(/\((\d+)\)/);
    return m ? parseInt(m[1], 10) : -1;
  }

  function sortVal(card, key) {
    switch (key) {
      case 'no': return parseNum(card.no);
      case 'hp': return parseNum(card.hp);
      case 'dp': return parseNum(card.dp);
      case 'plusP': return parseNum(card.plusP);
      case 'circle': return attackPower(card.circle);
      case 'triangle': return attackPower(card.triangle);
      case 'x': return attackPower(card.x);
      case 'name': return (card.name || '').toLowerCase();
      case 'level': return (card.level || '').toLowerCase();
      case 'specialty': return (card.specialty || '').toLowerCase();
      case 'support': return (card.support || '').toLowerCase();
      default: return '';
    }
  }

  function sortRows(rows) {
    return rows.slice().sort((a, b) => {
      const va = sortVal(a, sortKey);
      const vb = sortVal(b, sortKey);
      let cmp = 0;
      if (typeof va === 'number' && typeof vb === 'number') cmp = va - vb;
      else cmp = String(va).localeCompare(String(vb));
      if (cmp === 0) cmp = parseNum(a.no) - parseNum(b.no);
      return cmp * sortDir;
    });
  }

  function updateSortIndicators() {
    document.querySelectorAll('.th-sort').forEach(btn => {
      const key = btn.getAttribute('data-sort-btn');
      const ind = btn.querySelector('.sort-ind');
      const th = btn.closest('th');
      if (key === sortKey) {
        if (ind) ind.textContent = sortDir === 1 ? '▲' : '▼';
        if (th) th.setAttribute('aria-sort', sortDir === 1 ? 'ascending' : 'descending');
        btn.classList.add('sorted');
      } else {
        if (ind) ind.textContent = '';
        if (th) th.removeAttribute('aria-sort');
        btn.classList.remove('sorted');
      }
    });
  }

  // Initialize metrics
  document.getElementById('metricTotal').textContent = CARD_DATABASE.length;
  document.getElementById('metricU').textContent = CARD_DATABASE.filter(c => c.level === 'U').length;
  document.getElementById('metricC').textContent = CARD_DATABASE.filter(c => c.level === 'C').length;
  document.getElementById('metricR').textContent = CARD_DATABASE.filter(c => c.level === 'R').length;

  const ATTACK_ICON_LABELS = {
    circle: 'Circle attack',
    triangle: 'Triangle attack',
    x: 'X attack'
  };

  function attackIconHtml(token) {
    const label = ATTACK_ICON_LABELS[token] || token;
    return `<img src="assets/ui/${token}.gif" alt="${label}" title="${label}" class="attack-type-icon" />`;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderIconTokens(text) {
    return escapeHtml(text || '')
      .replace(
        /\[\[(circle|triangle|x)\]\]/g,
        (match, token) => ` <span class="attack-fx-inline">${attackIconHtml(token)}</span> `
      )
      .replace(/\s+/g, ' ')
      .replace(/\s+([,.;:])/g, '$1')
      .trim();
  }

  function formatAttack(text, effects) {
    if (!text && (!effects || effects.length === 0)) return '-';
    return `<span class="attack-text">${renderIconTokens(text)}</span>`;
  }

  function formatEffectText(text) {
    if (!text) return '-';
    return renderIconTokens(text);
  }

  function cardIconHtml(card) {
    if (card.localIcon) {
      return `<img src="${card.localIcon}" alt="${card.name}" class="card-icon-img" loading="lazy" onerror="this.outerHTML='<span class=\\'no-art\\'>No art</span>'" />`;
    }
    return `<span class="no-art">No art</span>`;
  }

  function renderTable() {
    const filtered = sortRows(CARD_DATABASE.filter(card => {
      if (currentCategory !== 'all' && card.category.toLowerCase() !== currentCategory.toLowerCase()) {
        return false;
      }
      if (currentLevel !== 'all' && card.level !== currentLevel) {
        return false;
      }
      if (currentSearch) {
        const query = currentSearch.toLowerCase();
        const matchName = card.name.toLowerCase().includes(query);
        const matchNo = card.no.toLowerCase().includes(query);
        if (!matchName && !matchNo) return false;
      }
      return true;
    }));
    updateSortIndicators();

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="12" style="text-align: center; padding: 3rem; color: var(--text-muted);">No cards found matching your criteria.</td></tr>`;
      return;
    }

    tableBody.innerHTML = filtered.map(card => {
      const specClass = `spec-${(card.specialty || 'option').toLowerCase()}`;

      const circleCell = formatAttack(card.circle, card.circleEffects);
      const triangleCell = formatAttack(card.triangle, card.triangleEffects);
      const xCell = formatAttack(card.x, card.xEffects);

      return `
        <tr>
          <td style="font-family: var(--font-display); font-weight: 600;">#${card.no}</td>
          <td>${cardIconHtml(card)}</td>
          <td style="font-weight: 600; color: var(--text-primary);">${card.name}</td>
          <td><span class="level-badge">${card.level || '-'}</span></td>
          <td><span class="spec-tag ${specClass}">${card.specialty || '-'}</span></td>
          <td>${card.hp || '-'}</td>
          <td>${card.dp || '-'}</td>
          <td>${card.plusP || '-'}</td>
          <td>${circleCell}</td>
          <td>${triangleCell}</td>
          <td>${xCell}</td>
          <td class="support-text">${formatEffectText(card.support)}</td>
        </tr>
      `;
    }).join('');
  }

  // Category tab clicks
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderTable();
    });
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    renderTable();
  });

  // Level filter
  levelFilter.addEventListener('change', (e) => {
    currentLevel = e.target.value;
    renderTable();
  });

  // Sortable column headers
  document.querySelectorAll('.th-sort').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-sort-btn');
      if (sortKey === key) sortDir = -sortDir;
      else { sortKey = key; sortDir = 1; }
      renderTable();
    });
  });

  // Initial render
  renderTable();
});
