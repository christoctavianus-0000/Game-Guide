#!/usr/bin/env python3
"""
Downloads B 'n' D card art or generates stylized SVG card fronts
for all 105 B 'n' D cards in Bravely Default II.
"""

import json
import ssl
import urllib.request
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
CARDS_DIR = BASE_DIR / "assets" / "cards"
CARDS_DIR.mkdir(parents=True, exist_ok=True)

SSL_CTX = ssl._create_unverified_context()

def load_cards():
    with open(BASE_DIR / "bndCardData.json", "r", encoding="utf-8") as f:
        return json.load(f)

def generate_card_svg(card):
    """Generate a high-quality stylized SVG card front for B 'n' D minigame cards."""
    card_id = card["id"]
    name = card["name"]
    tier = card.get("tier", 1)
    classification = card.get("classification", "Monster")
    rules = card.get("rules", [])
    strength = card.get("strength", 1)

    # Theme colors based on classification
    if classification == "Character":
        primary = "#fbbf24" # Gold / amber
        secondary = "#78350f"
        glow = "rgba(251, 191, 36, 0.4)"
        icon_path = "M50 25 L65 40 L60 65 L40 65 L35 40 Z" # Crown / Hero
    elif classification == "Job":
        primary = "#38bdf8" # Sky blue / crystal
        secondary = "#0c4a6e"
        glow = "rgba(56, 189, 248, 0.4)"
        icon_path = "M50 20 L75 50 L50 80 L25 50 Z" # Asterisk diamond
    else: # Monster
        primary = "#f87171" # Ruby / Crimson
        secondary = "#7f1d1d"
        glow = "rgba(248, 113, 113, 0.4)"
        icon_path = "M30 30 L50 20 L70 30 L65 70 L50 80 L35 70 Z" # Monster shield/crest

    stars = "★" * int(tier)

    rules_str = ""
    if rules:
        rule_badges = "".join([f'<tspan fill="{primary}" font-size="9">[{r}] </tspan>' for r in rules])
        rules_str = f'<text x="60" y="145" text-anchor="middle" font-size="9" font-family="sans-serif">{rule_badges}</text>'

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 170" width="120" height="170">
  <defs>
    <linearGradient id="bg-{card_id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="border-{card_id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="{primary}"/>
      <stop offset="100%" stop-color="{secondary}"/>
    </linearGradient>
    <filter id="glow-{card_id}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <!-- Card Background -->
  <rect x="2" y="2" width="116" height="166" rx="8" fill="url(#bg-{card_id})" stroke="url(#border-{card_id})" stroke-width="2.5"/>
  <rect x="6" y="6" width="108" height="158" rx="5" fill="none" stroke="{primary}" stroke-width="0.8" opacity="0.6"/>

  <!-- Classification Header Badge -->
  <rect x="12" y="10" width="96" height="14" rx="4" fill="{secondary}" stroke="{primary}" stroke-width="0.6"/>
  <text x="60" y="20" fill="{primary}" text-anchor="middle" font-size="8" font-weight="bold" font-family="system-ui, sans-serif" letter-spacing="1">{classification.upper()}</text>

  <!-- Stars / Tier -->
  <text x="60" y="34" fill="#fbbf24" text-anchor="middle" font-size="11" font-family="sans-serif">{stars}</text>

  <!-- Art Emblem Frame -->
  <circle cx="60" cy="72" r="30" fill="#0f172a" stroke="{primary}" stroke-width="1.5" filter="url(#glow-{card_id})"/>
  <circle cx="60" cy="72" r="26" fill="none" stroke="{primary}" stroke-width="0.5" stroke-dasharray="3,2"/>
  
  <!-- Emblem Icon -->
  <path d="{icon_path}" fill="{secondary}" stroke="{primary}" stroke-width="1.5" />

  <!-- Strength Badge -->
  <circle cx="95" cy="40" r="10" fill="#0f172a" stroke="{primary}" stroke-width="1.2"/>
  <text x="95" y="44" fill="#f8fafc" text-anchor="middle" font-size="10" font-weight="bold" font-family="monospace">{strength}</text>

  <!-- Name -->
  <text x="60" y="125" fill="#f8fafc" text-anchor="middle" font-size="10" font-weight="bold" font-family="system-ui, sans-serif">{name[:15]}</text>

  <!-- Rules -->
  {rules_str}
</svg>"""

    file_path = CARDS_DIR / f"{card_id}.svg"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(svg)

def main():
    cards = load_cards()
    print(f"Generating SVG card art for {len(cards)} B 'n' D cards...")
    for c in cards:
        generate_card_svg(c)
    print("All card SVGs created in assets/cards/")

if __name__ == "__main__":
    main()
