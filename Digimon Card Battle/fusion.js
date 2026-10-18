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

  function getCardByName(name) {
    return CARD_DATABASE.find(c => c.name.toLowerCase() === name.toLowerCase());
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  function findCombinations(targetCard) {
    const combos = [];
    const targetName = targetCard.name.toLowerCase();
    const targetColor = SPEC_TO_COLOR[targetCard.specialty];
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

    // 2. Standard Fusions (Material A + Material B = Result Target)
    if (!isNaN(targetResultVal) && targetResultVal > 0) {
      for (let i = 0; i < CARD_DATABASE.length; i++) {
        for (let j = i; j < CARD_DATABASE.length; j++) {
          const c1 = CARD_DATABASE[i];
          const c2 = CARD_DATABASE[j];

          const m1 = parseInt(c1.materialValue);
          const m2 = parseInt(c2.materialValue);

          if (!isNaN(m1) && !isNaN(m2) && (m1 + m2 === targetResultVal)) {
            // Check color matrix
            const color1 = SPEC_TO_COLOR[c1.specialty];
            const color2 = SPEC_TO_COLOR[c2.specialty];
            const resultColor = FUSION_DATA.fusion_table[`${color1}+${color2}`] || FUSION_DATA.fusion_table[`${color2}+${color1}`];

            if (resultColor === targetColor) {
              // Avoid duplicates if already added by special fusion
              const exists = combos.some(c =>
                (c.card1.name === c1.name && c.card2.name === c2.name) ||
                (c.card1.name === c2.name && c.card2.name === c1.name)
              );
              if (!exists) {
                combos.push({ card1: c1, card2: c2, type: 'standard', sum: targetResultVal });
              }
            }
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
      return `<img src="assets/ui/${token}.gif" alt="${label}" title="${label}" class="attack-type-icon" />`;
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
          <div class="icon">⚠️</div>
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
                <th class="sortable mat-col" data-sort="mat1">Material 1 <span class="sort-ind"></span></th>
                <th class="plus-cell">+</th>
                <th class="sortable" data-sort="name2">Card 2 <span class="sort-ind"></span></th>
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
      document.getElementById('combosGrid').innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">No combinations found for this card.</td></tr>`;
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
      c.card2.name.toLowerCase().includes(q)
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
      grid.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">No combinations match this filter.</td></tr>`;
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
      const cell = (c, mv) => `
            <div class="combo-cell">
              <img src="${c.localIcon}" alt="${escapeHtml(c.name)}" onerror="this.style.display='none'" />
              <span class="combo-name">${escapeHtml(c.name)}</span>
            </div>
          `;
      return `
        <tr class="combo-row clickable-combo" data-c1="${escapeHtml(combo.card1.name)}" data-c2="${escapeHtml(combo.card2.name)}" title="Click to view this fusion in the Materials tab">
          <td>${cell(combo.card1, mv1)}</td>
          <td class="mat-cell">${isNaN(mv1) ? '—' : mv1}</td>
          <td class="plus-cell">+</td>
          <td>${cell(combo.card2, mv2)}</td>
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
    const headers = document.querySelectorAll('.fusion-combos-table th.sortable');
    // currentSort already declared in outer scope

    function updateIndicators() {
      headers.forEach(h => {
        const ind = h.querySelector('.sort-ind');
        if (!ind) return;
        if (h.dataset.sort === currentSort.key) {
          ind.textContent = currentSort.dir === 'asc' ? '▲' : '▼';
        } else {
          ind.textContent = '';
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
          <div class="icon">🔍</div>
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
          <div class="icon">🔍</div>
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

    // 2. Standard Fusions (sum + color match)
    if (hasBothValues && resultColor) {
      CARD_DATABASE.forEach(target => {
        const tv = parseInt(target.resultValue);
        if (!isNaN(tv) && tv === sum && SPEC_TO_COLOR[target.specialty] === resultColor) {
          const exists = results.some(r => r.card.name === target.name);
          if (!exists) results.push({ card: target, type: 'standard', sum });
        }
      });
    }

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
          <div class="icon">🧪</div>
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
          <div class="icon">⚠️</div>
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

  if (typeof window !== 'undefined') {
    window.DigimonFusion = {
      findCombinations,
      findResultsFromMaterials,
      SPEC_TO_COLOR,
      getCardByName
    };
  }
});

