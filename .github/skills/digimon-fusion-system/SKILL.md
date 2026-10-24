---
name: digimon-fusion-system
description: Maintain, calculate, and verify Digimon Digital Card Battle card fusion mechanics, formulas, and databases against authoritative GameFAQs rules and in-game data contracts.
---

# Digimon Digital Card Battle — Fusion System Skill

Use this skill when modifying, debugging, or verifying the fusion mechanics, data extraction, card values, or combination algorithms for the **Digimon Card Battle** codex (`Digimon Card Battle/fusion.html`, `fusion.js`, `FUSION_RULES.md`, `merge_fusion.py`, `fusion_data.js`).

---

## 1. Authoritative Rules & Mechanics (GameFAQs FAQ 75834)

The fusion engine is grounded in the PS1 game mechanics documented by Ephraim225 on GameFAQs (`/faqs/75834/basic-fusion` and `/faqs/75834/special-fusion`):

### A. Color Matrix (36 pairs)
Determines output specialty:
- **Red** = Fire
- **Blue** = Ice
- **Green** = Nature
- **Black** = Darkness
- **Yellow** = Rare
- **Option** = Option cards

| Matrix | Red | Blue | Green | Black | Yellow | Option |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Red** | Option | Green | Black | Yellow | Blue | Red |
| **Blue** | Green | Option | Yellow | Red | Green | Blue |
| **Green** | Black | Yellow | Option | Blue | Black | Green |
| **Black** | Yellow | Red | Blue | Option | Red | Black |
| **Yellow** | Blue | Green | Black | Red | Option | Yellow |
| **Option** | Red | Blue | Green | Black | Yellow | Option |

### B. Standard Fusion Math
A standard combination between Material Card A and Material Card B produces Target Card T if and only if:
1. `materialValue(A) + materialValue(B) === target.resultValue`
2. `matrix[specialty(A) + specialty(B)] === target.specialty`
3. Neither material card has `materialValue === '?'`.
4. The target card has a positive numeric `resultValue > 0`.

*(Note: When multiple option or Digimon cards share the same Result Value and Color, the in-game shop selects one at random. The Fusion Codex correctly lists all valid matches).*

### C. No-Self-Material Fusion Rule
The game never returns a card that was used as a material. If the only card at the summed Result Value (in the matrix color) is one of the materials, the result bumps to the next higher Result Value in that color (`Leomon + Mutant Digivolve` => `Togemon`, 1 higher than Leomon). Implemented in `resolveStandardFusion()` in `fusion.js` and shared by both `findResultsFromMaterials` and `findCombinations` (which runs a forward simulation so reverse lookups list bumped recipes and never list a target as its own material).

### D. Missing Result Value / Gap Fallback Rule
If there is no card at the summed Result Value in the resulting matrix color (such as Option card gaps at Result Values 26 and 31, or sums exceeding the color's maximum Result Value), the game engine checks the next closest lower Result Value in that color pool.
- Example: Fusing 2 Andromon (Darkness, Material Value 13 each) gives sum 26 in Option. Since there is no Option card with Result Value 26, the fusion yields **Net Worm** (Net Scape, Result Value 25).
- Example: Fusing 2 WaruMonzaemon (Darkness, Material Value 19 each) gives sum 38 in Option. The highest available Option Result Value is **Golden Banana** (Result Value 35).

### E. Special Fusions (19 recipes)
Special fusions completely override standard math and color rules. They are exact, order-independent pairs:
1. `Omnimon I + Paildramon => Imperialdramon`
2. `Garudamon + Silphymon => Valkyrimon`
3. `Zudomon + Shakkoumon => Vikemon`
4. `Angemon + Ankylomon => Shakkoumon`
5. `Aquilamon + R-Gatomon => Silphymon`
6. `ExVeemon + Stingmon => Paildramon`
7. `HerculesKabuterimon + Megadramon => GranKuwagamon`
8. `Infermon + Digitamamon => Diaboromon`
9. `MegaSeadramon + WaruSeadramon => MetalSeadramon`
10. `MagnaAngemon + Angewomon => Magnadramon`
11. `MagnaAngemon + Jijimon => Seraphimon`
12. `Veedramon + Phoenixmon => AeroVeedramon`
13. `Lillymon + Myotismon => Rosemon`
14. `Myotismon + LadyDevimon => VenomMyotismon`
15. `Vademon + MarineAngemon => SuperStarmon`
16. `Etemon + Andromon => MetalEtemon`
17. `Monzaemon + WaruMonzaemon => Puppetmon`
18. `WarGreymon + MetalGarurumon => Omnimon I`
19. `RealMetalGreymon + WereGarurumon => Omnimon II`

---

## 2. Fusion Codex UI Architecture & Mode Tabs

The Fusion Codex (`fusion.html`, `fusion.js`, `fusion.css`) provides 3 operational modes:
1. **Tab 1 ("Find Recipe (By Result)")**: Search any card to list all valid material pairs that fuse into it (both standard math and special fusions).
2. **Tab 2 ("Fuse 2 Cards (By Materials)")**: Select two material cards to calculate and preview the resulting Digimon card (with forward standard simulation and special overrides).
3. **Tab 3 ("Special Fusion")**: Complete directory listing of all 19 predetermined special fusion recipes.
   - **Formula Layout**: Displays materials on the left and the resulting card on the right: `Material 1` `+` `Material 2` `=` `Result Card` `Level` `Specialty` `Action (Fuse ➔)`.
   - **Interactive Column Sorting**: Clickable headers for `Material 1`, `Material 2`, `Result Card`, `Level`, and `Specialty` toggle ascending (`▲`) and descending (`▼`) order; non-sortable columns (`+`, `=`, `Action`) maintain `cursor: default`.
   - **Real-Time Filter**: Filter by result name, material name, or specialty (`#specialSearch`), seamlessly preserved across column sorting.
   - **Cross-Tab Linking**: Clicking result jumps to Tab 1 to see all recipes; clicking materials or "Fuse ➔" jumps to Tab 2 to test fusion.
   - **Deep Linking**: `fusion.html?tab=special` activates Tab 3 on page load.

---

## 3. Dataset Invariants (301 Cards)

- **273 Authoritative Cards**: Exactly match the 273 rows of GameFAQs Table 1 and `Digimon Card Battle - Fusion.xlsx`.
- **28 Non-Fusable Exception Cards (`materialValue: '?'`, `resultValue: '?'`)**:
  - **19 Partner & Armor Digimon** (Cards 172–190: Flamedramon, Magnamon, Baronmon, Veemon, Submarimon, Quetzalmon, Tylomon, Halsemon, Pegasusmon, Nefertimon, Hawkmon, Patamon, Gatomon, Raidramon, Shadramon, Wormmon, Shurimon, Digmon, Armadillomon).
  - **7 "Sevens" Cards** (Wild, Holy, Dark, Grand, Mystic, Speed, Reverse Sevens).
  - **Rosemon's Lure** and **Download Digivolve**.
- **18 Special Result & Gem Cards (`resultValue: 0`)**: Cards obtainable through special fusion or events that can serve as materials with positive material values but cannot be targeted via standard fusion (`Omnimon I`, `MetalSeadramon`, `AeroVeedramon`, `SuperStarmon`, `MetalEtemon`, `Fake Sevens`, and 12 `Digi-*` gems including `Digi-Sapphire`).
- **Special-Only Result Cards (`materialValue: '?'`, `resultValue: '?'`)**: Cards like `Imperialdramon`, `Vikemon`, `Valkyrimon`, `Seraphimon`, `Magnadramon`, `Rosemon`, `Apokarimon`, `GranKuwagamon`, `Diaboromon`, `Puppetmon`, and `Omnimon II`.

---

## 4. Name Normalization & Aliases

When parsing source files or processing user search queries, always resolve spelling differences between GameFAQs and official in-game card names:

### Extraction Aliases (`merge_fusion.py`)
- `Pheonixmon` → `Phoenixmon`
- `Gigidramon` → `Gigadramon`
- `Monocromon` → `Monochromon`
- `Braciomon` → `Brachiomon`
- `Sylphymon` → `Silphymon`
- `Orgemon` → `Ogremon`
- `Dark lord cape` → `Dark Lord's Cape`
- `Ice alter`, `Nature alter`, `Darkness alter`, `Rare alter` → `* Altar`
- `Sukas Curse` → `Suka's Curse`
- `Cherrymons mist` → `Cherrymon's Mist`
- `Speed-digivolve` → `Speed Digivolve`
- `Digi-Saphire` → `Digi-Sapphire`
- Disk cards (222, 223, 224, 267, 268, 269, 270, 271, 272) mapped by Card ID to avoid symbol/mojibake mismatches.

### Runtime Search Aliases (`fusion.js` `SEARCH_ALIASES`)
- `Omnimon 1` / `Omnimon 2` → `Omnimon I` / `Omnimon II`
- `Sylphymon` → `Silphymon`
- `H-Kabuterimon` → `HerculesKabuterimon`
- `Diablomon` → `Diaboromon`
- `Orgemon` → `Ogremon`
- `Monocromon` → `Monochromon`
- `Braciomon` → `Brachiomon`
- `Gigidramon` → `Gigadramon`
- `WaruMonzaemon` / `Warumonzaemon`
- `Net Scape` / `netscape` → `Net Worm`

---

## 5. Verification Checklist

When updating fusion data or algorithms:
- [ ] Run `python merge_fusion.py` and verify all 7 category files match expected counts (fire 34/34, ice 35/35, nature 34/34, darkness 36/36, rare 33/33, option 101/110, partner 0/19).
- [ ] Run `node download_all_assets.js` to synchronize `allCards.json` and `cardData.js`.
- [ ] Run `npm.cmd test --prefix "Digimon Card Battle"` and verify all unit tests pass (27/27).
- [ ] Run `npm.cmd run check` from repository root and verify 0 TypeScript errors and 90/90 tests passing.
