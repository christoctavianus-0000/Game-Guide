// Part 1: Variables, Reset, Base, Header, Tabs, Filters
// Run: node write_original_css_p1.js >> output.css
module.exports = `/* ==========================================================================
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

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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

.site-wrapper { position: relative; z-index: 1; display: flex; flex-direction: column; min-height: 100vh; }`;
