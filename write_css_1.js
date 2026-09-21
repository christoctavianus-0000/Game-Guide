const fs = require('fs');
const path = 'd:/My AI Project/Game Guide/styles.css';

const css = `
:root {
  --bg-primary: #09090b;
  --bg-surface: #18181b;
  --bg-elevated: #27272a;
  --bg-hover: #3f3f46;
  --bg-input: #09090b;
  --border: rgba(255, 255, 255, 0.08);
  --border-focus: #a1a1aa;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --accent: #e4e4e7;
  --cat-physical: #f59e0b;
  --cat-physical-bg: rgba(245, 158, 11, 0.1);
  --cat-elemental: #3b82f6;
  --cat-elemental-bg: rgba(59, 130, 246, 0.1);
  --cat-support: #10b981;
  --cat-support-bg: rgba(16, 185, 129, 0.1);
  --cat-passive: #a78bfa;
  --cat-passive-bg: rgba(167, 139, 250, 0.1);
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --radius: 8px;
  --radius-sm: 4px;
  --transition: 0.15s ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.site-wrapper { display: flex; flex-direction: column; min-height: 100vh; }

.site-nav {
  position: sticky; top: 0; z-index: 60;
  background: rgba(9, 9, 11, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.site-nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 12px 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
}
.site-nav-brand {
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
  color: var(--text-secondary); text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 8px;
}
.nav-crest { color: var(--text-primary); }
.site-nav-links { display: flex; gap: 4px; flex-wrap: wrap; }
.site-nav-link {
  font-size: 13px; font-weight: 500; color: var(--text-muted);
  text-decoration: none; padding: 6px 14px; border-radius: var(--radius);
  transition: var(--transition);
}
.site-nav-link:hover { color: var(--text-primary); background: var(--bg-elevated); }
.site-nav-link.active { color: var(--text-primary); background: var(--bg-elevated); }

.site-rail { display: none; }

@media (min-width: 1100px) {
  .site-wrapper { padding-left: 100px; }
  .site-nav-links { display: none; }
  .site-nav-inner { justify-content: center; }
  .site-rail { display: block; position: fixed; z-index: 70; top: 50%; left: 12px; width: 76px; transform: translateY(-50%); }
  .site-rail-inner { display: flex; flex-direction: column; align-items: stretch; gap: 6px; padding: 12px 8px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--bg-surface); }
  .site-rail-brand { display: block; color: var(--text-primary); font-size: 1rem; text-align: center; line-height: 1; }
  .site-rail-caption { color: var(--text-muted); font-size: 9px; font-weight: 700; letter-spacing: 0.16em; text-align: center; text-transform: uppercase; }
  .site-rail-links { display: flex; flex-direction: column; gap: 4px; }
  .site-rail-link { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; min-height: 72px; padding: 10px 4px; border: 1px solid transparent; border-radius: var(--radius); color: var(--text-muted); background: transparent; text-decoration: none; transition: var(--transition); }
  .site-rail-icon { font-size: 1.2rem; line-height: 1; }
  .site-rail-text { font-size: 9px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
  .site-rail-link:hover { color: var(--text-primary); background: var(--bg-elevated); }
  .site-rail-link.active { color: var(--text-primary); background: var(--bg-elevated); border-color: var(--border); }
}

.top-header { border-bottom: 1px solid var(--border); background: var(--bg-primary); }
.header-container { max-width: 1200px; margin: 0 auto; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
.brand-area { display: flex; align-items: center; gap: 14px; }
.brand-crest { width: 40px; height: 40px; border-radius: var(--radius); background: var(--bg-surface); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; }
.crest-icon { font-size: 20px; }
.brand-kicker { font-size: 10px; font-weight: 600; letter-spacing: 2px; color: var(--text-muted); text-transform: uppercase; }
.brand-title { font-size: 18px; font-weight: 700; color: var(--text-primary); line-height: 1.3; }
.metrics-bar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.metric-pill { background: var(--bg-surface); border: 1px solid var(--border); padding: 5px 12px; border-radius: var(--radius); display: flex; align-items: center; gap: 6px; font-size: 12px; }
.metric-label { color: var(--text-muted); font-weight: 500; }
.metric-val { font-weight: 700; color: var(--text-primary); }
.metric-pill.physical .metric-val { color: var(--cat-physical); }
.metric-pill.elemental .metric-val { color: var(--cat-elemental); }
.metric-pill.support .metric-val { color: var(--cat-support); }
.metric-pill.passive .metric-val { color: var(--cat-passive); }

.ghost-pill-btn { background: transparent; border: 1px solid var(--border); color: var(--text-secondary); padding: 6px 14px; border-radius: var(--radius); font-size: 13px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: var(--transition); }
.ghost-pill-btn:hover { background: var(--bg-elevated); color: var(--text-primary); }
.ghost-pill-btn.active { background: var(--text-primary); color: var(--bg-primary); font-weight: 600; }
.ghost-pill-btn.compact { padding: 4px 10px; font-size: 12px; }
.ghost-pill-btn.compact.active { color: var(--text-primary); border-color: var(--border); }

.main-content { max-width: 1200px; width: 100%; margin: 0 auto; padding: 24px; flex: 1; }
.category-nav-section { margin-bottom: 20px; }
.category-tabs { display: flex; gap: 4px; background: var(--bg-surface); padding: 4px; border-radius: var(--radius); border: 1px solid var(--border); overflow-x: auto; }
.cat-tab { flex: 1; min-width: 140px; background: transparent; border: 1px solid transparent; padding: 10px 14px; border-radius: 6px; color: var(--text-muted); font-size: 13px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: var(--transition); white-space: nowrap; }
.cat-tab:hover { color: var(--text-primary); background: var(--bg-elevated); }
.cat-tab.active { background: var(--bg-elevated); color: var(--text-primary); font-weight: 600; }
.cat-tab .cat-icon { font-size: 14px; }
.cat-badge { background: var(--bg-hover); padding: 1px 6px; border-radius: var(--radius-sm); font-size: 11px; color: var(--text-muted); }
.cat-tab.active .cat-badge { background: rgba(255,255,255,0.1); color: var(--text-secondary); }
.cat-tab[data-category="Physical"].active { border-color: var(--cat-physical); }
.cat-tab[data-category="Physical"].active .cat-badge { background: var(--cat-physical-bg); color: var(--cat-physical); }
.cat-tab[data-category="Elemental"].active { border-color: var(--cat-elemental); }
.cat-tab[data-category="Elemental"].active .cat-badge { background: var(--cat-elemental-bg); color: var(--cat-elemental); }
.cat-tab[data-category="Support"].active { border-color: var(--cat-support); }
.cat-tab[data-category="Support"].active .cat-badge { background: var(--cat-support-bg); color: var(--cat-support); }
.cat-tab[data-category="Passive"].active { border-color: var(--cat-passive); }
.cat-tab[data-category="Passive"].active .cat-badge { background: var(--cat-passive-bg); color: var(--cat-passive); }

.view-toggle-btn { background: transparent; border: 1px solid var(--border); padding: 8px 12px; border-radius: var(--radius); color: var(--text-muted); font-size: 13px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: var(--transition); white-space: nowrap; }
.view-toggle-btn:hover { background: var(--bg-elevated); color: var(--text-primary); }
.view-toggle-btn.active { background: var(--bg-elevated); color: var(--text-primary); border-color: var(--border); }
.view-icon { font-size: 13px; }

.filter-panel { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; margin-bottom: 24px; }
.search-and-subtypes { display: flex; flex-direction: column; gap: 12px; margin-bottom: 12px; }
.search-input-wrap { position: relative; width: 100%; }
.search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 13px; color: var(--text-muted); pointer-events: none; }
.search-input-wrap input { width: 100%; background: var(--bg-input); border: 1px solid var(--border); color: var(--text-primary); font-family: var(--font-body); font-size: 13px; padding: 10px 36px 10px 36px; border-radius: var(--radius); outline: none; transition: var(--transition); }
.search-input-wrap input:focus { border-color: var(--border-focus); }
.search-input-wrap input::placeholder { color: var(--text-muted); }
.clear-search-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-muted); font-size: 13px; cursor: pointer; padding: 4px; display: none; }
.clear-search-btn:hover { color: var(--text-primary); }

.subtype-chips-wrap { display: flex; align-items: center; gap: 6px; overflow-x: auto; padding-bottom: 4px; }
.subtype-chip { background: var(--bg-elevated); border: 1px solid var(--border); color: var(--text-secondary); font-size: 12px; font-weight: 500; padding: 5px 12px; border-radius: var(--radius); cursor: pointer; display: flex; align-items: center; gap: 6px; white-space: nowrap; transition: var(--transition); }
.subtype-chip:hover { background: var(--bg-hover); color: var(--text-primary); }
.subtype-chip.active { background: var(--bg-elevated); border-color: var(--text-muted); color: var(--text-primary); }
.subtype-chip-icon { width: 16px; height: 16px; object-fit: contain; display: inline-block; }

.secondary-filter-row { display: flex; align-items: center; gap: 12px; padding-top: 12px; border-top: 1px solid var(--border); flex-wrap: wrap; }
.filter-group { display: flex; align-items: center; gap: 6px; }
.filter-label { font-size: 11px; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.filter-select { background: var(--bg-input); border: 1px solid var(--border); color: var(--text-primary); font-family: var(--font-body); font-size: 12px; padding: 5px 10px; border-radius: var(--radius); outline: none; cursor: pointer; }
.filter-select:focus { border-color: var(--border-focus); }
.filter-status { margin-left: auto; display: flex; align-items: center; gap: 12px; font-size: 12px; color: var(--text-muted); }
.reset-link-btn { background: none; border: none; color: var(--text-secondary); font-size: 12px; cursor: pointer; text-decoration: underline; text-underline-offset: 2px; padding: 0; }
.reset-link-btn:hover { color: var(--text-primary); }
`;

fs.writeFileSync(path, css, 'utf8');
console.log('Part 1 written:', css.length, 'bytes');
