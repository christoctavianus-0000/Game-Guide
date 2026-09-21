const fs = require('fs');
const path = 'd:/My AI Project/Game Guide/styles.css';

// Reconstructed original CSS - Octopath Traveler 0 HD-2D RPG Aesthetic
const css = `/* ==========================================================================
   OCTOPATH TRAVELER 0 // SKILL CODEX DESIGN SYSTEM
   HD-2D RPG Aesthetic: Deep Abyss, Antique Gold, Runes & Glowing Elements
   ========================================================================== */

:root {
  /* Core Backgrounds */
  --bg-abyss: #050a10;
  --bg-canvas: #08101a;
  --bg-surface: #0e1a29;
  --bg-surface-elevated: #142438;
  --bg-surface-card: #0f1c2d;
  --bg-surface-hover: #192d46;

  /* Borders & Lines */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-card: rgba(212, 175, 55, 0.18);
  --border-gold: #d4af37;
  --border-gold-glow: rgba(212, 175, 55, 0.4);

  /* Typography Colors */
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-gold: #e5c158;
  --text-gold-bright: #fff0a8;

  /* Category Accents */
  --cat-physical: #f59e0b;
  --cat-physical-glow: rgba(245, 158, 11, 0.25);
  --cat-physical-bg: rgba(245, 158, 11, 0.1);

  --cat-elemental: #38bdf8;
  --cat-elemental-glow: rgba(56, 189, 248, 0.25);
  --cat-elemental-bg: rgba(56, 189, 248, 0.1);

  --cat-support: #10b981;
  --cat-support-glow: rgba(16, 185, 129, 0.25);
  --cat-support-bg: rgba(16, 185, 129, 0.1);

  --cat-passive: #a855f7;
  --cat-passive-glow: rgba(168, 85, 247, 0.25);
  --cat-passive-bg: rgba(168, 85, 247, 0.1);

  /* Fonts */
  --font-display: 'Cinzel', 'Rajdhani', Georgia, serif;
  --font-tech: 'Rajdhani', 'Inter', sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  /* Transitions & Shadows */
  --transition-fast: 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-card: 0 4px 20px -2px rgba(0, 0, 0, 0.55);
  --shadow-card-hover: 0 12px 30px -4px rgba(0, 0, 0, 0.75), 0 0 15px rgba(212, 175, 55, 0.2);
}

/* Base Reset & Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-abyss);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.55;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background-image: 
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.08), transparent 70%),
    radial-gradient(circle at 15% 35%, rgba(56, 189, 248, 0.04), transparent 45%),
    radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.04), transparent 45%);
}

/* Subtle RPG grid pattern */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
  z-index: 0;
}

.site-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ==========================================================================
   TOP HEADER & HERO
   ========================================================================== */
.top-header {
  border-bottom: 1px solid var(--border-subtle);
  background: rgba(8, 16, 26, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.brand-area {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-crest {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1b324b, #0d1a29);
  border: 1px solid var(--border-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px rgba(212, 175, 55, 0.25);
}

.crest-icon {
  font-size: 22px;
  color: var(--text-gold);
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.7);
}

.brand-kicker {
  font-family: var(--font-tech);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  color: var(--text-gold);
  text-transform: uppercase;
}

.brand-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #ffffff;
  line-height: 1.2;
}

/* Metrics Pill Bar */
.metrics-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.metric-pill {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  padding: 5px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.metric-label {
  color: var(--text-muted);
  font-weight: 500;
}

.metric-val {
  font-family: var(--font-tech);
  font-weight: 700;
  color: var(--text-primary);
}

.metric-pill.physical .metric-val { color: var(--cat-physical); }
.metric-pill.elemental .metric-val { color: var(--cat-elemental); }
.metric-pill.support .metric-val { color: var(--cat-support); }
.metric-pill.passive .metric-val { color: var(--cat-passive); }

/* Header Action Buttons */
.ghost-pill-btn {
  background: transparent;
  border: 1px solid var(--border-gold);
  color: var(--text-gold);
  padding: 7px 16px;
  border-radius: 20px;
  font-family: var(--font-tech);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition-fast);
}

.ghost-pill-btn:hover {
  background: rgba(212, 175, 55, 0.15);
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.3);
}

.ghost-pill-btn.active {
  background: var(--text-gold);
  color: var(--bg-abyss);
  font-weight: 700;
}

/* ==========================================================================
   MAIN LAYOUT & CATEGORY TABS
   ========================================================================== */
.main-content {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  flex: 1;
}

/* Category Navigation */
.category-nav-section {
  margin-bottom: 20px;
}

.category-tabs {
  display: flex;
  gap: 10px;
  background: var(--bg-surface);
  padding: 6px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  overflow-x: auto;
}

.cat-tab {
  flex: 1;
  min-width: 160px;
  background: transparent;
  border: 1px solid transparent;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--text-secondary);
  font-family: var(--font-tech);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: var(--transition-fast);
  white-space: nowrap;
}

.cat-tab:hover {
  background: var(--bg-surface-elevated);
  color: var(--text-primary);
}

.cat-tab.active {
  background: var(--bg-surface-elevated);
  color: #ffffff;
  border-color: var(--border-gold);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4), 0 0 10px rgba(212, 175, 55, 0.2);
}

.cat-tab .cat-icon {
  font-size: 16px;
}

.cat-badge {
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  color: var(--text-muted);
}

.cat-tab.active .cat-badge {
  background: rgba(212, 175, 55, 0.2);
  color: var(--text-gold);
}

/* Tab color accents */
.cat-tab[data-category="Physical"].active { border-color: var(--cat-physical); }
.cat-tab[data-category="Physical"].active .cat-badge { background: var(--cat-physical-bg); color: var(--cat-physical); }

.cat-tab[data-category="Elemental"].active { border-color: var(--cat-elemental); }
.cat-tab[data-category="Elemental"].active .cat-badge { background: var(--cat-elemental-bg); color: var(--cat-elemental); }

.cat-tab[data-category="Support"].active { border-color: var(--cat-support); }
.cat-tab[data-category="Support"].active .cat-badge { background: var(--cat-support-bg); color: var(--cat-support); }

.cat-tab[data-category="Passive"].active { border-color: var(--cat-passive); }
.cat-tab[data-category="Passive"].active .cat-badge { background: var(--cat-passive-bg); color: var(--cat-passive); }

/* View Toggle Buttons */
.view-toggle-btn {
  background: transparent;
  border: 1px solid var(--border-subtle);
  padding: 10px 14px;
  border-radius: 6px;
  color: var(--text-secondary);
  font-family: var(--font-tech);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition-fast);
  white-space: nowrap;
}

.view-toggle-btn:hover {
  background: var(--bg-surface-elevated);
  color: var(--text-primary);
  border-color: var(--border-gold-glow);
}

.view-toggle-btn.active {
  background: var(--bg-surface-elevated);
  color: #ffffff;
  border-color: var(--border-gold);
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
}

.view-icon {
  font-size: 14px;
  display: inline-block;
}

.view-text {
  display: inline;
}

/* ==========================================================================
   FILTER COMMAND BAR
   ========================================================================== */
.filter-panel {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 24px;
}

.search-and-subtypes {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 16px;
}

.search-input-wrap {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: var(--text-muted);
  pointer-events: none;
}

.search-input-wrap input {
  width: 100%;
  background: var(--bg-abyss);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 14px;
  padding: 12px 40px 12px 42px;
  border-radius: 8px;
  outline: none;
  transition: var(--transition-fast);
}

.search-input-wrap input:focus {
  border-color: var(--border-gold);
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.15);
}

.clear-search-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 14px;
  cursor: pointer;
  padding: 4px;
  display: none;
}

.clear-search-btn:hover { color: var(--text-primary); }

/* Subtype Chips Carousel / Wrap */
.subtype-chips-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.subtype-chip {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-family: var(--font-tech);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  transition: var(--transition-fast);
}

.subtype-chip:hover {
  background: var(--bg-surface-hover);
  color: var(--text-primary);
}

.subtype-chip.active {
  background: rgba(212, 175, 55, 0.15);
  border-color: var(--border-gold);
  color: var(--text-gold-bright);
}

.subtype-chip-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  display: inline-block;
  image-rendering: -webkit-optimize-contrast;
}

/* Secondary Filters (Dropdowns & Counter) */
.secondary-filter-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  flex-wrap