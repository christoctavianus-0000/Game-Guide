document.addEventListener('DOMContentLoaded', () => {
  if (typeof CARD_DATABASE === 'undefined' || typeof FUSION_DATA === 'undefined') {
    console.error('Data not loaded!');
    return;
  }

  const searchInput = document.getElementById('fusionSearch');
  const resultContainer = document.getElementById('fusionResult');

  // Shared state so filtering and sorting compose
  let currentCombos = [];
  let currentSort = { key: 'mat1', dir: 'asc' };
  let currentFilter = '';

  // Map specialty to color for fusion table lookup
  const SPEC_TO_COLOR = {
    'Fire': 'Red',
    'Ice': 'Blue',
    'Nature': 'Green',
    'Darkness': 'Black',
    'Rare': 'Yellow',
    'Option': 'Option'
  };

  const SEARCH_ALIASES = {
    'omnimon 1': 'Omnimon I',
    'omnimon 2': 'Omnimon II',
    'sylphymon': 'Silphymon',
    'h-kabuterimon': 'HerculesKabuterimon',
    'diablomon': 'Diaboromon',
    'orgemon': 'Ogremon',
    'monocromon': 'Monochromon',
    'braciomon': 'Brachiomon',
    'gigidramon': 'Gigadramon',
    'warumonzaemon': 'WaruMonzaemon',
    'net scape': 'Net Worm',
    'netscape': 'Net Worm'
  };

  function getCardByName(name) {
    if (!name) return null;
    const lower = name.trim().toLowerCase();
    const resolvedName = SEARCH_ALIASES[lower] || lower;
    return CARD_DATABASE.find(c => c.name.toLowerCase() === resolvedName.toLowerCase());
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  let resultPoolCache = null;
  function getResultPool(color) {
    if (!resultPoolCache) {
      resultPoolCache = {};
      CARD_DATABASE.forEach(card => {
        const rv = parseInt(card.resultValue);
        const c = SPEC_TO_COLOR[card.specialty];
        if (!isNaN(rv) && rv > 0 && c) (resultPoolCache[c] = resultPoolCache[c] || []).push({ card, rv });
      });
    }
    return resultPoolCache[color] || [];
  }

  /**
   * Standard fusion resolution rules:
   * 1. Gap / Missing Result Value: If there is no card at the summed Result Value
   *    in the matrix color, the closest lower Result Value in that color is produced
   *    instead (e.g. 2 Andromon: 13+13=26 Option -> Net Worm/Net Scape at Result Value 25).
   * 2. Never a Material: The game never returns a card used as material. If the only
   *    card at the target Result Value is one of the materials, the next higher Result
   *    Value in that color is produced instead (e.g. Leomon + Mutant Digivolve => Togemon).
   */
  function resolveStandardFusion(c1, c2) {
    const m1 = parseInt(c1.materialValue);
    const m2 = parseInt(c2.materialValue);
    if (isNaN(m1) || isNaN(m2)) return [];
    const color1 = SPEC_TO_COLOR[c1.specialty];
    const color2 = SPEC_TO_COLOR[c2.specialty];
    const resultColor = FUSION_DATA.fusion_table[`${color1}+${color2}`] || FUSION_DATA.fusion_table[`${color2}+${color1}`];
    if (!resultColor) return [];
    const sum = m1 + m2;
    const pool = getResultPool(resultColor);
    let targetPool = pool.filter(p => p.rv === sum);
    // If no result value found at sum, check the lower result value
    if (targetPool.length === 0) {
      const lower = pool.filter(p => p.rv < sum);
      if (lower.length === 0) return [];
      const maxLower = Math.max(...lower.map(p => p.rv));
      targetPool = lower.filter(p => p.rv === maxLower);
    }
    const isMaterial = card => card.name === c1.name || card.name === c2.name;
    const allowed = targetPool.filter(p => !isMaterial(p.card));
    if (allowed.length > 0) return allowed.map(p => p.card);
    // Never returns a material card: bump to next higher result value
    const baseRv = targetPool[0].rv;
    const higher = pool.filter(p => p.rv > baseRv && !isMaterial(p.card));
    if (higher.length === 0) return [];
    const nextValue = Math.min(...higher.map(p => p.rv));
    return higher.filter(p => p.rv === nextValue).map(p => p.card);
  }

  function findCombinations(targetCard) {
    const combos = [];
    const targetName = targetCard.name.toLowerCase();
    const targetResultVal = parseInt(targetCard.resultValue);

    // 1. Special Fusions
    FUSION_DATA.special_fusions.forEach(sf => {
      if (sf.result.toLowerCase() === targetName) {
        const c1 = getCardByName(sf.card1);
        const c2 = getCardByName(sf.card2);
        if (c1 && c2) {
          combos.push({ card1: c1, card2: c2, type: 'special' });
        }
      }
    });

    // 2. Standard Fusions: resolved forward so the "never returns a material" rule applies
    if (!isNaN(targetResultVal) && targetResultVal > 0) {
      for (let i = 0; i < CARD_DATABASE.length; i++) {
        for (let j = i; j < CARD_DATABASE.length; j++) {
          const c1 = CARD_DATABASE[i];
          const c2 = CARD_DATABASE[j];
          const m1 = parseInt(c1.materialValue);
          const m2 = parseInt(c2.materialValue);
          if (isNaN(m1) || isNaN(m2)) continue;
          const col1 = SPEC_TO_COLOR[c1.specialty];
          const col2 = SPEC_TO_COLOR[c2.specialty];
          const resCol = FUSION_DATA.fusion_table[`${col1}+${col2}`] || FUSION_DATA.fusion_table[`${col2}+${col1}`];
          if (resCol !== SPEC_TO_COLOR[targetCard.specialty]) continue;
          if (!resolveStandardFusion(c1, c2).some(r => r.name === targetCard.name)) continue;
          const exists = combos.some(c =>
            (c.card1.name === c1.name && c.card2.name === c2.name) ||
            (c.card1.name === c2.name && c.card2.name === c1.name)
          );
          if (!exists) {
            combos.push({ card1: c1, card2: c2, type: 'standard', sum: m1 + m2 });
          }
        }
      }
    }
    return combos;
  }

  function renderCardStats(card) {
    const specClass = `spec-${(card.specialty || 'option').toLowerCase()}`;
    const ATTACK_ICON_LABELS = {
      circle: '[circle icon] attack',
      triangle: '[triangle icon] attack',
      x: '[x icon] attack'
    };
    function attackIconHtml(token) {
      const label = ATTACK_ICON_LABELS[token] || token;
      return `<img src="assets/ui/${token}.svg" alt="${label}" title="${label}" class="attack-type-icon" />`;
    }
    function renderIconTokens(text) {
      return escapeHtml(text || '')
        .replace(/\[\[(circle|triangle|x)\]\]/g, (m, t) => ` <span class="attack-fx-inline">${attackIconHtml(t)}</span> `)
        .replace(/\s+/g, ' ')
        .trim();
    }
    return `
      <div class="result-stats">
        <div class="stat-row"><span class="stat-label">Level</span><span class="stat-val">${card.level || '-'}</span></div>
        <div class="stat-row"><span class="stat-label">Specialty</span><span class="stat-val"><span class="spec-tag ${specClass}">${card.specialty || '-'}</span></span></div>
        <div class="stat-row"><span class="stat-label">HP</span><span class="stat-val">${card.hp || '-'}</span></div>
        <div class="stat-row"><span class="stat-label">DP</span><span class="stat-val">${card.dp || '-'}</span></div>
        <div class="stat-row"><span class="stat-label">+P</span><span class="stat-val">${card.plusP || '-'}</span></div>
        <div class="stat-row"><span class="stat-label">Circle</span><span class="stat-val">${renderIconTokens(card.circle)}</span></div>
        <div class="stat-row"><span class="stat-label">Triangle</span><span class="stat-val">${renderIconTokens(card.triangle)}</span></div>
        <div class="stat-row"><span class="stat-label">X</span><span class="stat-val">${renderIconTokens(card.x)}</span></div>
        <div class="stat-row"><span class="stat-label">Support</span><span class="stat-val support-text">${renderIconTokens(card.support)}</span></div>
        <div class="stat-row"><span class="stat-label">Material Value</span><span class="stat-val">${card.materialValue ?? '?'}</span></div>
        <div class="stat-row"><span class="stat-label">Result Value</span><span class="stat-val">${card.resultValue ?? '?'}</span></div>
      </div>
    `;
  }

  function renderResult(card) {
    if (!card) {
      resultContainer.innerHTML = `
        <div class="empty-state">
          <div class="icon"><img src="assets/ui/digivice.svg" alt="" width="48" height="48" class="empty-state-svg" /></div>
          <h3>Card not found</h3>
          <p>Try searching for another card name.</p>
        </div>
      `;
      return;
    }

    const combos = findCombinations(card);
    currentCombos = combos;
    currentSort = { key: 'mat1', dir: 'asc' };
    currentFilter = '';
    const specClass = `spec-${(card.specialty || 'option').toLowerCase()}`;

    let html = `
      <div class="result-card">
        <img src="${card.localIcon}" alt="${escapeHtml(card.name)}" class="result-icon" onerror="this.style.display='none'" />
        <div class="result-info">
          <div class="result-name">${escapeHtml(card.name)}</div>
          <div class="result-meta">
            <span class="level-badge">${escapeHtml(card.level || '-')}</span>
            <span class="spec-tag ${specClass}">${escapeHtml(card.specialty || '-')}</span>
          </div>
          ${renderCardStats(card)}
        </div>
      </div>

      <div class="combinations-section">
        <div class="combinations-header-row">
          <h3>Possible Combinations <span class="count">${combos.length}</span></h3>
          <div class="combo-filter-box">
            <input type="text" id="comboFilter" placeholder="Filter by Material Card 1 or 2..." aria-label="Filter combinations by material card name" value="${escapeHtml(currentFilter || '')}" />
          </div>
        </div>
        <div class="combinations-table-wrap">
          <table class="card-table fusion-combos-table">
            <thead>
              <tr>
                <th class="sortable" data-sort="name1">Card 1 <span class="sort-ind"></span></th>
                <th class="sortable" data-sort="spec1">Specialty 1 <span class="sort-ind"></span></th>
                <th class="sortable mat-col" data-sort="mat1">Material 1 <span class="sort-ind"></span></th>
                <th class="plus-cell">+</th>
                <th class="sortable" data-sort="name2">Card 2 <span class="sort-ind"></span></th>
                <th class="sortable" data-sort="spec2">Specialty 2 <span class="sort-ind"></span></th>
                <th class="sortable mat-col" data-sort="mat2">Material 2 <span class="sort-ind"></span></th>
                <th class="sortable mat-col" data-sort="sum">Material Sum <span class="sort-ind"></span></th>
                <th class="sortable" data-sort="type">Type <span class="sort-ind"></span></th>
              </tr>
            </thead>
            <tbody id="combosGrid"></tbody>
          </table>
        </div>
      </div>
    `;

    resultContainer.innerHTML = html;

    if (combos.length === 0) {
      document.getElementById('combosGrid').innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-muted);">No combinations found for this card.</td></tr>`;
    } else {
      renderCombos(currentCombos, currentSort.key, currentSort.dir, currentFilter);
    }

    attachSortListeners();
    attachFilterListener();
  }

  function getFilteredCombos(combos, filter) {
    const q = (filter || '').trim().toLowerCase();
    if (!q) return combos;
    return combos.filter(c =>
      c.card1.name.toLowerCase().includes(q) ||
      c.card2.name.toLowerCase().includes(q) ||
      (c.card1.specialty && c.card1.specialty.toLowerCase().includes(q)) ||
      (c.card2.specialty && c.card2.specialty.toLowerCase().includes(q))
    );
  }

  function renderCombos(combos, sortKey, sortDir, filter) {
    const filtered = getFilteredCombos(combos, filter);
    const dir = sortDir === 'desc' ? -1 : 1;
    const sorted = filtered.slice().sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'mat1') {
        const va = parseInt(a.card1.materialValue);
        const vb = parseInt(b.card1.materialValue);
        cmp = (isNaN(va) ? 999 : va) - (isNaN(vb) ? 999 : vb);
      } else if (sortKey === 'mat2') {
        const va = parseInt(a.card2.materialValue);
        const vb = parseInt(b.card2.materialValue);
        cmp = (isNaN(va) ? 999 : va) - (isNaN(vb) ? 999 : vb);
      } else if (sortKey === 'spec1') {
        const sa = a.card1.specialty || 'Option';
        const sb = b.card1.specialty || 'Option';
        cmp = sa.localeCompare(sb);
        if (cmp === 0) cmp = a.card1.name.localeCompare(b.card1.name);
      } else if (sortKey === 'spec2') {
        const sa = a.card2.specialty || 'Option';
        const sb = b.card2.specialty || 'Option';
        cmp = sa.localeCompare(sb);
        if (cmp === 0) cmp = a.card2.name.localeCompare(b.card2.name);
      } else if (sortKey === 'sum') {
        const sa = parseInt(a.card1.materialValue) + parseInt(a.card2.materialValue);
        const sb = parseInt(b.card1.materialValue) + parseInt(b.card2.materialValue);
        cmp = (isNaN(sa) ? 999 : sa) - (isNaN(sb) ? 999 : sb);
      } else if (sortKey === 'name1') {
        cmp = a.card1.name.localeCompare(b.card1.name);
      } else if (sortKey === 'name2') {
        cmp = a.card2.name.localeCompare(b.card2.name);
      } else if (sortKey === 'type') {
        cmp = a.type.localeCompare(b.type);
      }
      if (cmp === 0) cmp = a.card1.name.localeCompare(b.card1.name);
      return cmp * dir;
    });

    const grid = document.getElementById('combosGrid');
    if (!grid) return;
    if (sorted.length === 0) {
      grid.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-muted);">No combinations match this filter.</td></tr>`;
      return;
    }
    grid.innerHTML = sorted.map(combo => {
      const mv1 = parseInt(combo.card1.materialValue);
      const mv2 = parseInt(combo.card2.materialValue);
      const hasBothValues = !isNaN(mv1) && !isNaN(mv2);
      const sum = hasBothValues ? (mv1 + mv2) : '—';
      const typeBadge = combo.type === 'special'
        ? '<span class="type-badge special">Special</span>'
        : '<span class="type-badge standard">Standard</span>';
      const c1SpecClass = `spec-${(combo.card1.specialty || 'option').toLowerCase()}`;
      const c2SpecClass = `spec-${(combo.card2.specialty || 'option').toLowerCase()}`;
      const cell = (c, mv) => `
            <div class="combo-cell">
              <img src="${c.localIcon}" alt="${escapeHtml(c.name)}" onerror="this.style.display='none'" />
              <span class="combo-name">${escapeHtml(c.name)}</span>
            </div>
          `;
      return `
        <tr class="combo-row clickable-combo" data-c1="${escapeHtml(combo.card1.name)}" data-c2="${escapeHtml(combo.card2.name)}" title="Click to view this fusion in the Materials tab">
          <td>${cell(combo.card1, mv1)}</td>
          <td><span class="spec-tag ${c1SpecClass}">${escapeHtml(combo.card1.specialty || '-')}</span></td>
          <td class="mat-cell">${isNaN(mv1) ? '—' : mv1}</td>
          <td class="plus-cell">+</td>
          <td>${cell(combo.card2, mv2)}</td>
          <td><span class="spec-tag ${c2SpecClass}">${escapeHtml(combo.card2.specialty || '-')}</span></td>
          <td class="mat-cell">${isNaN(mv2) ? '—' : mv2}</td>
          <td class="mat-cell sum-cell">${sum}</td>
          <td>${typeBadge}</td>
        </tr>
      `;
    }).join('');

    // Attach click listeners to rows
    grid.querySelectorAll('.clickable-combo').forEach(row => {
      row.addEventListener('click', () => {
        const c1 = row.dataset.c1;
        const c2 = row.dataset.c2;
        switchToMaterialsTab(c1, c2);
      });
    });
  }

  function switchToMaterialsTab(name1, name2) {
    const btn = document.getElementById('tab-btn-materials');
    if (btn) btn.click();
    if (mat1Input) mat1Input.value = name1;
    if (mat2Input) mat2Input.value = name2;
    renderMaterialResults();
  }

  function switchToTargetTab(targetName) {
    const btn = document.getElementById('tab-btn-target');
    if (btn) btn.click();
    if (searchInput) {
      searchInput.value = targetName;
      const card = getCardByName(targetName);
      if (card) renderResult(card);
    }
  }

  function attachSortListeners() {
    const headers = document.querySelectorAll('#tab-target-panel .fusion-combos-table th.sortable');

    function updateIndicators() {
      headers.forEach(h => {
        const ind = h.querySelector('.sort-ind');
        if (!ind) return;
        if (h.dataset.sort === currentSort.key) {
          ind.textContent = currentSort.dir === 'asc' ? '▲' : '▼';
          h.setAttribute('aria-sort', currentSort.dir === 'asc' ? 'ascending' : 'descending');
        } else {
          ind.textContent = '';
          h.removeAttribute('aria-sort');
        }
      });
    }

    headers.forEach(h => {
      h.addEventListener('click', () => {
        const key = h.dataset.sort;
        if (currentSort.key === key) {
          currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
        } else {
          currentSort = { key, dir: 'asc' };
        }
        updateIndicators();
        const cardName = searchInput.value.trim();
        const card = getCardByName(cardName);
        if (card) {
          renderCombos(currentCombos, currentSort.key, currentSort.dir, currentFilter);
        }
      });
    });

    updateIndicators();
  }

  function attachFilterListener() {
    const input = document.getElementById('comboFilter');
    if (!input) return;
    input.addEventListener('input', (e) => {
      currentFilter = e.target.value;
      const cardName = searchInput.value.trim();
      const card = getCardByName(cardName);
      if (card) {
        renderCombos(currentCombos, currentSort.key, currentSort.dir, currentFilter);
      }
    });
  }

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length < 2) {
      resultContainer.innerHTML = '';
      return;
    }
    const card = getCardByName(query);
    if (card) {
      renderResult(card);
    } else {
      resultContainer.innerHTML = `
        <div class="empty-state">
          <div class="icon"><img src="assets/ui/digivice.svg" alt="" width="48" height="48" class="empty-state-svg" /></div>
          <h3>No exact match</h3>
          <p>Type the full name of the card you want to fuse.</p>
        </div>
      `;
    }
  });

  // Deep link from Card Codex: fusion.html?card=Angemon
  const params = new URLSearchParams(window.location.search);
  const linkedCard = params.get('card');
  if (linkedCard) {
    const card = getCardByName(linkedCard);
    searchInput.value = card ? card.name : linkedCard;
    if (card) {
      renderResult(card);
    } else {
      resultContainer.innerHTML = `
        <div class="empty-state">
          <div class="icon"><img src="assets/ui/digivice.svg" alt="" width="48" height="48" class="empty-state-svg" /></div>
          <h3>No exact match</h3>
          <p>No card named “${linkedCard.replace(/[<>]/g, '')}” found.</p>
        </div>
      `;
    }
  }

  // --- Tab Switching Logic ---
  const tabBtns = document.querySelectorAll('.fusion-tab-btn');
  const tabPanels = document.querySelectorAll('.fusion-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('hidden', '');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(targetId);
      if (panel) {
        panel.classList.add('active');
        panel.removeAttribute('hidden');
      }
    });
  });

  // Handle direct tab deep links: fusion.html?tab=special or ?tab=materials
  const tabParam = params.get('tab');
  if (tabParam === 'special') {
    const specialTabBtn = document.getElementById('tab-btn-special');
    if (specialTabBtn) specialTabBtn.click();
  } else if (tabParam === 'materials') {
    const matTabBtn = document.getElementById('tab-btn-materials');
    if (matTabBtn) matTabBtn.click();
  }

  // --- Tab 2: Predict Result from 2 Materials ---
  const mat1Input = document.getElementById('mat1Search');
  const mat2Input = document.getElementById('mat2Search');
  const mat1Preview = document.getElementById('mat1CardPreview');
  const mat2Preview = document.getElementById('mat2CardPreview');
  const materialResultContainer = document.getElementById('materialResultContainer');

  // Populate datalists for autocomplete
  const cardList1 = document.getElementById('cardList1');
  const cardList2 = document.getElementById('cardList2');
  const cardListTarget = document.getElementById('cardListTarget');
  const cardOptionsHtml = CARD_DATABASE.map(c => `<option value="${c.name}"></option>`).join('');
  [cardList1, cardList2, cardListTarget].forEach(list => {
    if (list) list.innerHTML = cardOptionsHtml;
  });

  function renderMatPreview(container, card) {
    if (!container) return;
    if (!card) {
      container.classList.add('empty');
      container.innerHTML = `<div class="preview-placeholder">Card not found</div>`;
      return;
    }
    const specClass = `spec-${(card.specialty || 'option').toLowerCase()}`;
    container.classList.remove('empty');
    container.innerHTML = `
      <img src="${card.localIcon}" alt="${escapeHtml(card.name)}" class="mat-preview-img" onerror="this.style.display='none'" />
      <div class="mat-preview-info">
        <div class="mat-preview-name">${escapeHtml(card.name)}</div>
        <div class="mat-preview-meta">
          <span class="level-badge">${escapeHtml(card.level || '-')}</span>
          <span class="spec-tag ${specClass}">${escapeHtml(card.specialty || '-')}</span>
          <span>Mat: <strong>${escapeHtml(card.materialValue ?? '?')}</strong></span>
        </div>
      </div>
    `;
  }

  function findResultsFromMaterials(c1, c2) {
    const results = [];
    if (!c1 || !c2) return results;

    const m1 = parseInt(c1.materialValue);
    const m2 = parseInt(c2.materialValue);
    const hasBothValues = !isNaN(m1) && !isNaN(m2);
    const sum = hasBothValues ? (m1 + m2) : null;

    const color1 = SPEC_TO_COLOR[c1.specialty];
    const color2 = SPEC_TO_COLOR[c2.specialty];
    const resultColor = FUSION_DATA.fusion_table[`${color1}+${color2}`] || FUSION_DATA.fusion_table[`${color2}+${color1}`];

    // 1. Special Fusions (exact pair match, order-independent)
    FUSION_DATA.special_fusions.forEach(sf => {
      const a = sf.card1.toLowerCase();
      const b = sf.card2.toLowerCase();
      const n1 = c1.name.toLowerCase();
      const n2 = c2.name.toLowerCase();
      if ((a === n1 && b === n2) || (a === n2 && b === n1)) {
        const res = getCardByName(sf.result);
        if (res) results.push({ card: res, type: 'special', sum: hasBothValues ? sum : '—' });
      }
    });

    // 2. Standard Fusions (sum + color match, never returning a material card)
    resolveStandardFusion(c1, c2).forEach(target => {
      if (!results.some(r => r.card.name === target.name)) {
        results.push({ card: target, type: 'standard', sum });
      }
    });
    return results;
  }

  function renderMaterialResults() {
    if (!mat1Input || !mat2Input || !materialResultContainer) return;
    const name1 = mat1Input.value.trim();
    const name2 = mat2Input.value.trim();
    const c1 = name1 ? getCardByName(name1) : null;
    const c2 = name2 ? getCardByName(name2) : null;

    renderMatPreview(mat1Preview, name1 ? c1 : null);
    if (name1 && !c1 && mat1Preview) {
      mat1Preview.classList.add('empty');
      mat1Preview.innerHTML = `<div class="preview-placeholder">No card named “${name1.replace(/[<>]/g, '')}”</div>`;
    } else if (!name1 && mat1Preview) {
      mat1Preview.classList.add('empty');
      mat1Preview.innerHTML = `<div class="preview-placeholder">Select Material 1</div>`;
    }

    renderMatPreview(mat2Preview, name2 ? c2 : null);
    if (name2 && !c2 && mat2Preview) {
      mat2Preview.classList.add('empty');
      mat2Preview.innerHTML = `<div class="preview-placeholder">No card named “${name2.replace(/[<>]/g, '')}”</div>`;
    } else if (!name2 && mat2Preview) {
      mat2Preview.classList.add('empty');
      mat2Preview.innerHTML = `<div class="preview-placeholder">Select Material 2</div>`;
    }

    if (!c1 || !c2) {
      materialResultContainer.innerHTML = `
        <div class="empty-state">
          <div class="icon"><img src="assets/ui/nav-fusion.svg" alt="" width="48" height="48" class="empty-state-svg" /></div>
          <h3>Select two cards above</h3>
          <p>Pick Material Card 1 and Material Card 2 to view the fusion result.</p>
        </div>
      `;
      return;
    }

    const results = findResultsFromMaterials(c1, c2);
    const m1 = parseInt(c1.materialValue);
    const m2 = parseInt(c2.materialValue);
    const hasBothValues = !isNaN(m1) && !isNaN(m2);
    const sumDisplay = hasBothValues ? String(m1 + m2) : '—';
    const color1 = SPEC_TO_COLOR[c1.specialty];
    const color2 = SPEC_TO_COLOR[c2.specialty];
    const resultColor = FUSION_DATA.fusion_table[`${color1}+${color2}`] || FUSION_DATA.fusion_table[`${color2}+${color1}`];

    if (results.length === 0) {
      materialResultContainer.innerHTML = `
        <div class="empty-state">
          <div class="icon"><img src="assets/ui/digivice.svg" alt="" width="48" height="48" class="empty-state-svg" /></div>
          <h3>No fusion result</h3>
          <p>${escapeHtml(c1.name)} (${isNaN(m1) ? '?' : m1}) + ${escapeHtml(c2.name)} (${isNaN(m2) ? '?' : m2}) = ${sumDisplay} with color ${color1}+${color2} → ${resultColor || '?'}. No card matches.</p>
        </div>
      `;
      return;
    }

    materialResultContainer.innerHTML = `
      <div class="combinations-section">
        <div class="combinations-header-row">
          <h3>Fusion Result <span class="count">${results.length}</span></h3>
          <div class="combo-filter-box">
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${escapeHtml(c1.name)} (${isNaN(m1) ? '?' : m1}) + ${escapeHtml(c2.name)} (${isNaN(m2) ? '?' : m2}) = ${sumDisplay} → ${resultColor || '?'}</span>
          </div>
        </div>
        <div class="combinations-table-wrap">
          <table class="card-table fusion-combos-table">
            <thead>
              <tr>
                <th>Result Card</th>
                <th>Level</th>
                <th>Specialty</th>
                <th>Result Value</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              ${results.map(r => {
                const specClass = `spec-${(r.card.specialty || 'option').toLowerCase()}`;
                const badge = r.type === 'special'
                  ? '<span class="type-badge special">Special</span>'
                  : '<span class="type-badge standard">Standard</span>';
                return `
                  <tr class="combo-row clickable-result" data-result="${escapeHtml(r.card.name)}" title="Click to view this card's fusion recipe in Tab 1">
                    <td>
                      <div class="combo-cell">
                        <img src="${r.card.localIcon}" alt="${escapeHtml(r.card.name)}" onerror="this.style.display='none'" />
                        <span class="combo-name">${escapeHtml(r.card.name)}</span>
                      </div>
                    </td>
                    <td><span class="level-badge">${escapeHtml(r.card.level || '-')}</span></td>
                    <td><span class="spec-tag ${specClass}">${escapeHtml(r.card.specialty || '-')}</span></td>
                    <td class="mat-cell sum-cell">${escapeHtml(r.card.resultValue ?? '?')}</td>
                    <td>${badge}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    materialResultContainer.querySelectorAll('.clickable-result').forEach(row => {
      row.addEventListener('click', () => {
        switchToTargetTab(row.dataset.result);
      });
    });
  }

  if (mat1Input && mat2Input) {
    mat1Input.addEventListener('input', renderMaterialResults);
    mat2Input.addEventListener('input', renderMaterialResults);
    mat1Input.addEventListener('change', renderMaterialResults);
    mat2Input.addEventListener('change', renderMaterialResults);
  }

  // --- Tab 3: Special Fusion List ---
  const specialSearch = document.getElementById('specialSearch');
  const specialMatSearch = document.getElementById('specialMatSearch');
  const specialResultSearch = document.getElementById('specialResultSearch');
  const cardListSpecialMat = document.getElementById('cardListSpecialMat');
  const cardListSpecialResult = document.getElementById('cardListSpecialResult');
  const specialFusionContainer = document.getElementById('specialFusionContainer');

  let specialSort = { key: '', dir: 'asc' };
  let currentSpecialFilter = { material: '', result: '', general: '' };

  const specialList = FUSION_DATA.special_fusions || [];
  const uniqueMatNames = [...new Set(specialList.flatMap(sf => [sf.card1, sf.card2]))].sort((a, b) => a.localeCompare(b));
  const uniqueResultNames = [...new Set(specialList.map(sf => sf.result))].sort((a, b) => a.localeCompare(b));

  if (cardListSpecialMat) {
    cardListSpecialMat.innerHTML = uniqueMatNames.map(name => `<option value="${escapeHtml(name)}"></option>`).join('');
  }
  if (cardListSpecialResult) {
    cardListSpecialResult.innerHTML = uniqueResultNames.map(name => `<option value="${escapeHtml(name)}"></option>`).join('');
  }

  function getAllSpecialFusions() {
    return (FUSION_DATA.special_fusions || []).map(sf => ({
      card1: sf.card1,
      card2: sf.card2,
      result: sf.result,
      resultCard: getCardByName(sf.result),
      c1: getCardByName(sf.card1),
      c2: getCardByName(sf.card2)
    }));
  }

  function compareSpecialFusions(a, b, key, dir) {
    let cmp = 0;
    const resA = getCardByName(a.result);
    const resB = getCardByName(b.result);
    const c1A = a.c1 || getCardByName(a.card1);
    const c1B = b.c1 || getCardByName(b.card1);
    const c2A = a.c2 || getCardByName(a.card2);
    const c2B = b.c2 || getCardByName(b.card2);

    if (key === 'mat1') {
      cmp = a.card1.localeCompare(b.card1);
      if (cmp === 0) cmp = a.result.localeCompare(b.result);
    } else if (key === 'spec1') {
      const s1a = c1A?.specialty || 'Option';
      const s1b = c1B?.specialty || 'Option';
      cmp = s1a.localeCompare(s1b);
      if (cmp === 0) cmp = a.card1.localeCompare(b.card1);
      if (cmp === 0) cmp = a.result.localeCompare(b.result);
    } else if (key === 'mat2') {
      cmp = a.card2.localeCompare(b.card2);
      if (cmp === 0) cmp = a.result.localeCompare(b.result);
    } else if (key === 'spec2') {
      const s2a = c2A?.specialty || 'Option';
      const s2b = c2B?.specialty || 'Option';
      cmp = s2a.localeCompare(s2b);
      if (cmp === 0) cmp = a.card2.localeCompare(b.card2);
      if (cmp === 0) cmp = a.result.localeCompare(b.result);
    } else if (key === 'result') {
      cmp = a.result.localeCompare(b.result);
      if (cmp === 0) cmp = a.card1.localeCompare(b.card1);
    } else if (key === 'level') {
      const la = resA?.level || '';
      const lb = resB?.level || '';
      cmp = la.localeCompare(lb);
      if (cmp === 0) cmp = a.result.localeCompare(b.result);
    } else if (key === 'specialty') {
      const sa = resA?.specialty || 'Rare';
      const sb = resB?.specialty || 'Rare';
      cmp = sa.localeCompare(sb);
      if (cmp === 0) cmp = a.result.localeCompare(b.result);
    }
    return cmp * dir;
  }

  function renderSpecialFusions(filterArg) {
    if (!specialFusionContainer) return;

    if (typeof filterArg === 'string') {
      currentSpecialFilter = { material: '', result: '', general: filterArg };
    } else if (filterArg && typeof filterArg === 'object') {
      currentSpecialFilter = {
        material: filterArg.material || '',
        result: filterArg.result || '',
        general: filterArg.general || ''
      };
    } else if (filterArg === undefined) {
      const matVal = specialMatSearch ? specialMatSearch.value.trim() : '';
      const resVal = specialResultSearch ? specialResultSearch.value.trim() : '';
      const genVal = specialSearch ? specialSearch.value.trim() : '';
      currentSpecialFilter = { material: matVal, result: resVal, general: genVal };
    }

    const matQ = (currentSpecialFilter.material || '').toLowerCase();
    const resQ = (currentSpecialFilter.result || '').toLowerCase();
    const genQ = (currentSpecialFilter.general || '').toLowerCase();

    const list = FUSION_DATA.special_fusions || [];

    const filtered = list.filter(recipe => {
      const resCard = getCardByName(recipe.result);
      const c1 = getCardByName(recipe.card1);
      const c2 = getCardByName(recipe.card2);

      if (matQ) {
        const matMatch = recipe.card1.toLowerCase().includes(matQ) ||
          recipe.card2.toLowerCase().includes(matQ) ||
          (c1?.specialty && c1.specialty.toLowerCase().includes(matQ)) ||
          (c2?.specialty && c2.specialty.toLowerCase().includes(matQ));
        if (!matMatch) return false;
      }

      if (resQ) {
        const resMatch = recipe.result.toLowerCase().includes(resQ) ||
          (resCard?.specialty && resCard.specialty.toLowerCase().includes(resQ)) ||
          (resCard?.level && resCard.level.toLowerCase().includes(resQ));
        if (!resMatch) return false;
      }

      if (genQ) {
        const genMatch = recipe.result.toLowerCase().includes(genQ) ||
          recipe.card1.toLowerCase().includes(genQ) ||
          recipe.card2.toLowerCase().includes(genQ) ||
          (resCard?.specialty && resCard.specialty.toLowerCase().includes(genQ)) ||
          (c1?.specialty && c1.specialty.toLowerCase().includes(genQ)) ||
          (c2?.specialty && c2.specialty.toLowerCase().includes(genQ));
        if (!genMatch) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      const queryDesc = [
        currentSpecialFilter.material ? `material "${escapeHtml(currentSpecialFilter.material)}"` : '',
        currentSpecialFilter.result ? `result "${escapeHtml(currentSpecialFilter.result)}"` : '',
        currentSpecialFilter.general ? `"${escapeHtml(currentSpecialFilter.general)}"` : ''
      ].filter(Boolean).join(' and ');

      specialFusionContainer.innerHTML = `
        <div class="empty-state">
          <div class="icon"><img src="assets/ui/digivice.svg" alt="" width="48" height="48" class="empty-state-svg" /></div>
          <h3>No special fusions found</h3>
          <p>No recipe matching ${queryDesc || 'your search'} was found.</p>
        </div>
      `;
      return;
    }

    const dir = specialSort.dir === 'desc' ? -1 : 1;
    const sorted = specialSort.key
      ? filtered.slice().sort((a, b) => compareSpecialFusions(a, b, specialSort.key, dir))
      : filtered;

    const getSortTh = (key, label) => {
      const isActive = specialSort.key === key;
      const ariaSort = isActive ? (specialSort.dir === 'asc' ? 'aria-sort="ascending"' : 'aria-sort="descending"') : '';
      const ind = isActive ? (specialSort.dir === 'asc' ? '▲' : '▼') : '';
      return `<th class="sortable" data-sort="${key}" ${ariaSort} tabindex="0" role="columnheader" aria-label="${label}, sortable">${label} <span class="sort-ind">${ind}</span></th>`;
    };

    const html = `
      <div class="combinations-section">
        <div class="combinations-header-row">
          <h3>All Special Fusions <span class="count">${sorted.length}</span></h3>
        </div>
        <div class="combinations-table-wrap">
          <table class="card-table fusion-combos-table special-fusions-table">
            <thead>
              <tr>
                ${getSortTh('mat1', 'Material 1')}
                ${getSortTh('spec1', 'Specialty 1')}
                <th class="plus-cell">+</th>
                ${getSortTh('mat2', 'Material 2')}
                ${getSortTh('spec2', 'Specialty 2')}
                <th class="plus-cell">=</th>
                ${getSortTh('result', 'Result Card')}
                ${getSortTh('level', 'Level')}
                ${getSortTh('specialty', 'Specialty')}
                <th style="text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${sorted.map(recipe => {
                const resCard = getCardByName(recipe.result);
                const c1 = getCardByName(recipe.card1);
                const c2 = getCardByName(recipe.card2);
                const resSpec = resCard ? resCard.specialty : 'Rare';
                const resLevel = resCard ? resCard.level : '-';
                const c1Spec = c1 ? c1.specialty : 'Option';
                const c2Spec = c2 ? c2.specialty : 'Option';
                const specClass = `spec-${(resSpec || 'option').toLowerCase()}`;
                const c1SpecClass = `spec-${(c1Spec || 'option').toLowerCase()}`;
                const c2SpecClass = `spec-${(c2Spec || 'option').toLowerCase()}`;

                const resIcon = resCard?.localIcon || 'assets/icons/no-image.png';
                const c1Icon = c1?.localIcon || 'assets/icons/no-image.png';
                const c2Icon = c2?.localIcon || 'assets/icons/no-image.png';

                return `
                  <tr class="combo-row">
                    <td>
                      <div class="combo-cell clickable-mat" data-c1="${escapeHtml(recipe.card1)}" data-c2="${escapeHtml(recipe.card2)}" style="cursor: pointer;" title="Click to test fusion in Materials tab">
                        <img src="${c1Icon}" alt="${escapeHtml(recipe.card1)}" onerror="this.style.display='none'" />
                        <span class="combo-name">${escapeHtml(recipe.card1)}</span>
                      </div>
                    </td>
                    <td><span class="spec-tag ${c1SpecClass}">${escapeHtml(c1Spec)}</span></td>
                    <td class="plus-cell">+</td>
                    <td>
                      <div class="combo-cell clickable-mat" data-c1="${escapeHtml(recipe.card1)}" data-c2="${escapeHtml(recipe.card2)}" style="cursor: pointer;" title="Click to test fusion in Materials tab">
                        <img src="${c2Icon}" alt="${escapeHtml(recipe.card2)}" onerror="this.style.display='none'" />
                        <span class="combo-name">${escapeHtml(recipe.card2)}</span>
                      </div>
                    </td>
                    <td><span class="spec-tag ${c2SpecClass}">${escapeHtml(c2Spec)}</span></td>
                    <td class="plus-cell">=</td>
                    <td>
                      <div class="combo-cell clickable-result" data-result="${escapeHtml(recipe.result)}" style="cursor: pointer;" title="Click to view all recipes for ${escapeHtml(recipe.result)} in Tab 1">
                        <img src="${resIcon}" alt="${escapeHtml(recipe.result)}" onerror="this.style.display='none'" />
                        <span class="combo-name">${escapeHtml(recipe.result)}</span>
                      </div>
                    </td>
                    <td><span class="level-badge">${escapeHtml(resLevel)}</span></td>
                    <td><span class="spec-tag ${specClass}">${escapeHtml(resSpec)}</span></td>
                    <td style="text-align: center;">
                      <button type="button" class="action-btn fuse-btn" data-c1="${escapeHtml(recipe.card1)}" data-c2="${escapeHtml(recipe.card2)}" title="Fuse ${escapeHtml(recipe.card1)} + ${escapeHtml(recipe.card2)} in Materials tab">
                        Fuse ➔
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    specialFusionContainer.innerHTML = html;

    specialFusionContainer.querySelectorAll('.clickable-result').forEach(el => {
      el.addEventListener('click', () => {
        switchToTargetTab(el.dataset.result);
      });
    });

    specialFusionContainer.querySelectorAll('.clickable-mat, .fuse-btn').forEach(el => {
      el.addEventListener('click', () => {
        switchToMaterialsTab(el.dataset.c1, el.dataset.c2);
      });
    });

    specialFusionContainer.querySelectorAll('.special-fusions-table th.sortable').forEach(th => {
      const onSort = () => {
        const key = th.dataset.sort;
        if (!key) return;
        if (specialSort.key === key) {
          specialSort.dir = specialSort.dir === 'asc' ? 'desc' : 'asc';
        } else {
          specialSort = { key, dir: 'asc' };
        }
        renderSpecialFusions(currentSpecialFilter);
      };

      th.addEventListener('click', onSort);
      th.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSort();
        }
      });
    });
  }

  if (specialMatSearch) {
    specialMatSearch.addEventListener('input', () => renderSpecialFusions());
  }
  if (specialResultSearch) {
    specialResultSearch.addEventListener('input', () => renderSpecialFusions());
  }
  if (specialSearch) {
    specialSearch.addEventListener('input', (e) => {
      renderSpecialFusions(e.target.value);
    });
  }

  // Initial render of special fusions
  renderSpecialFusions();

  if (typeof window !== 'undefined') {
    window.DigimonFusion = {
      findCombinations,
      findResultsFromMaterials,
      getAllSpecialFusions,
      renderSpecialFusions,
      getSpecialSort: () => ({ ...specialSort }),
      setSpecialSort: (key, dir = 'asc') => {
        specialSort = { key, dir };
        renderSpecialFusions(currentSpecialFilter);
      },
      compareSpecialFusions,
      SPEC_TO_COLOR,
      getCardByName,
      renderResult
    };
  }
});
