#!/usr/bin/env python3
"""
Generates crisp, theme-consistent SVG UI icons for Bravely Default II.
"""

from pathlib import Path

UI_DIR = Path(__file__).resolve().parent / "assets" / "icons" / "ui"
UI_DIR.mkdir(parents=True, exist_ok=True)

ICONS = {
    "bd2-crest.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <filter id="c-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <!-- Outer Asterisk Wings -->
  <path d="M50 5 L58 35 L88 35 L64 53 L73 83 L50 65 L27 83 L36 53 L12 35 L42 35 Z" fill="none" stroke="url(#crestGrad)" stroke-width="2.5" filter="url(#c-glow)"/>
  <!-- Inner Crystal Diamond -->
  <polygon points="50,22 68,50 50,78 32,50" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="50,30 62,50 50,70 38,50" fill="url(#crestGrad)" opacity="0.8"/>
  <!-- Central Asterisk Core -->
  <circle cx="50" cy="50" r="5" fill="#ffffff" filter="url(#c-glow)"/>
</svg>""",

    "nav-jobs.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>""",

    "nav-abilities.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>""",

    "nav-equipment.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
  <path d="M13 19l6-6"/>
  <path d="M16 16l4 4"/>
  <path d="M19 21l2-2"/>
</svg>""",

    "nav-bestiary.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/>
  <path d="M4 14v1a7 7 0 0 0 14 0v-1"/>
  <path d="M10 22h4"/>
  <circle cx="9" cy="7" r="1" fill="currentColor"/>
  <circle cx="15" cy="7" r="1" fill="currentColor"/>
</svg>""",

    "nav-quests.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <polyline points="14 2 14 8 20 8"/>
  <line x1="16" y1="13" x2="8" y2="13"/>
  <line x1="16" y1="17" x2="8" y2="17"/>
  <polyline points="10 9 9 9 8 9"/>
</svg>""",

    "nav-shops.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
  <line x1="3" y1="6" x2="21" y2="6"/>
  <path d="M16 10a4 4 0 0 1-8 0"/>
</svg>""",

    "nav-bnd.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <rect x="7" y="7" width="3" height="3"/>
  <rect x="14" y="7" width="3" height="3"/>
  <rect x="7" y="14" width="3" height="3"/>
  <rect x="14" y="14" width="3" height="3"/>
</svg>""",

    "sword.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
  <line x1="13" y1="19" x2="19" y2="13"/>
  <line x1="16" y1="16" x2="20" y2="20"/>
  <line x1="19" y1="21" x2="21" y2="19"/>
</svg>""",

    "dagger.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 2l4 4-12 12-4-1 1-4 11-11z"/>
  <line x1="6" y1="18" x2="3" y2="21"/>
</svg>""",

    "axe.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 4c0 3 2 5 5 5v2c-4 0-7-3-7-7h2z"/>
  <path d="M14 4c0 3-2 5-5 5v2c4 0 7-3 7-7h-2z"/>
  <line x1="14" y1="4" x2="4" y2="20"/>
</svg>""",

    "spear.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="20" x2="19" y2="5"/>
  <polygon points="19 2 22 5 18 9 15 6" fill="currentColor"/>
</svg>""",

    "bow.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 4a15 15 0 0 0-15 15"/>
  <line x1="4" y1="19" x2="19" y2="4"/>
  <line x1="4" y1="4" x2="19" y2="19"/>
</svg>""",

    "staff.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="19" x2="16" y2="8"/>
  <circle cx="18" cy="6" r="3"/>
</svg>""",

    "shield.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
</svg>""",

    "armor.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 4h12l2 5-3 2v9H7v-9L4 9l2-5z"/>
  <line x1="12" y1="4" x2="12" y2="20"/>
</svg>""",

    "accessory.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="14" r="7"/>
  <polygon points="12 2 15 7 9 7"/>
</svg>""",

    "fire.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
</svg>""",

    "water.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
</svg>""",

    "wind.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
</svg>""",

    "earth.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>""",

    "lightning.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>""",

    "light.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>""",

    "dark.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>"""
}

def main():
    print(f"Creating {len(ICONS)} SVG icons in {UI_DIR}...")
    for filename, content in ICONS.items():
        (UI_DIR / filename).write_text(content.strip(), encoding="utf-8")
    print("Done!")

if __name__ == "__main__":
    main()
