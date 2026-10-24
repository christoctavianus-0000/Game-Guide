# Digimon Digital Card Battle - Fusion Rules

## Color Mapping
- **Red** = Fire specialty
- **Blue** = Ice specialty
- **Green** = Nature specialty
- **Black** = Darkness specialty
- **Yellow** = Rare specialty
- **Option** = Option cards

## Fusion Mechanics

### Sheet 1: Result Color Matrix
Determines the output color/specialty of a fusion based on the colors of the two combined cards.

|  | Red | Blue | Green | Black | Yellow | Option |
|--|-----|------|-------|-------|--------|--------|
| **Red** | Option | Green | Black | Yellow | Blue | Red |
| **Blue** | Green | Option | Yellow | Red | Green | Blue |
| **Green** | Black | Yellow | Option | Blue | Black | Green |
| **Black** | Yellow | Red | Blue | Option | Red | Black |
| **Yellow** | Blue | Green | Black | Red | Option | Yellow |
| **Option** | Red | Blue | Green | Black | Yellow | Option |

### Sheet 2: Material & Result Values (Standard Fusions)
- Every card has a hidden **Material Value** and **Result Value**.
- **Rule:** 
  1. Combined Material Value of Card A + Card B = Target Card's Result Value.
  2. The combined colors of Card A and Card B must match the Target Card's color via the Fusion Table (Sheet 1).

### Sheet 3: Special Fusions
- Exceptions and specific card combinations that break standard rules (Material/Result values or color matrix).

| Card 1 | Card 2 | Result | In-Game Database Names |
|--------|--------|--------|------------------------|
| Omnimon 1 | Paildramon | Imperialdramon | Omnimon I + Paildramon => Imperialdramon |
| Garudamon | Sylphymon | Valkyrimon | Garudamon + Silphymon => Valkyrimon |
| Zudomon | Shakkoumon | Vikemon | Zudomon + Shakkoumon => Vikemon |
| Angemon | Ankylomon | Shakkoumon | Angemon + Ankylomon => Shakkoumon |
| Aquilamon | R-Gatomon | Sylphymon | Aquilamon + R-Gatomon => Silphymon |
| Exveemon | Stingmon | Paildramon | ExVeemon + Stingmon => Paildramon |
| H-Kabuterimon | Megadramon | GranKuwagamon | HerculesKabuterimon + Megadramon => GranKuwagamon |
| Infermon | Digitamamon | Diablomon | Infermon + Digitamamon => Diaboromon |
| MegaSeadramon | WaruSeadramon | MetalSeadramon | MegaSeadramon + WaruSeadramon => MetalSeadramon |
| MagnaAngemon | Angewomon | Magnadramon | MagnaAngemon + Angewomon => Magnadramon |
| MagnaAngemon | Jijimon | Seraphimon | MagnaAngemon + Jijimon => Seraphimon |
| Veedramon | Phoenixmon | AeroVeedramon | Veedramon + Phoenixmon => AeroVeedramon |
| Lillymon | Myotismon | Rosemon | Lillymon + Myotismon => Rosemon |
| Myotismon | LadyDevimon | VenomMyotismon | Myotismon + LadyDevimon => VenomMyotismon |
| Vademon | MarineAngemon | SuperStarmon | Vademon + MarineAngemon => SuperStarmon |
| Etemon | Andromon | MetalEtemon | Etemon + Andromon => MetalEtemon |
| Monzaemon | Warumonzaemon | Puppetmon | Monzaemon + WaruMonzaemon => Puppetmon |
| WarGreymon | MetalGarurumon | Omnimon 1 | WarGreymon + MetalGarurumon => Omnimon I |
| RealMetalGreymon | WereGarurumon | Omnimon 2 | RealMetalGreymon + WereGarurumon => Omnimon II |

### Non-Fusable & Exception Cards (`Material = ?, Result = ?`)
- **Partner & Armor Digimon (19 cards)**: Cannot be fused or used as fusion materials in standard fusion (Flamedramon, Magnamon, Baronmon, Veemon, Submarimon, Quetzalmon, Tylomon, Halsemon, Pegasusmon, Nefertimon, Hawkmon, Patamon, Gatomon, Raidramon, Shadramon, Wormmon, Shurimon, Digmon, Armadillomon).
- **The "Sevens" Cards (7 cards)**: Cannot be fused (Wild Sevens, Holy Sevens, Dark Sevens, Grand Sevens, Mystic Sevens, Speed Sevens, Reverse Sevens).
- **Special Option Cards (2 cards)**: Rosemon's Lure and Download Digivolve.
- **Special-Only Result Cards**: Cards like Imperialdramon, Vikemon, Valkyrimon, Seraphimon, Magnadramon, Rosemon, Apokarimon, GranKuwagamon, Diaboromon, Puppetmon, and Omnimon II have `Material = ?, Result = ?` because they cannot be made through standard arithmetic fusion.
- **18 Cards with `Result = 0`**: Special fusion results that can be used as fusion materials (`Omnimon I`, `MetalSeadramon`, `AeroVeedramon`, `SuperStarmon`, `MetalEtemon`, `Fake Sevens`, and 12 `Digi-*` gems including `Digi-Sapphire`).

## No-self-material rule

The game never gives a card used as material. If the only card at the target Result Value (in the matrix color) is one of the materials, the next higher Result Value in that color is produced (e.g. Leomon + Mutant Digivolve => Togemon).

## Missing Result Value / Gap Fallback Rule

If there is no card with the exact summed Result Value in the resulting color (e.g. Option gaps at Result Values 26 and 31, or sums exceeding the color's maximum Result Value), the game checks the next closest lower Result Value in that color pool.
- Example: Fusing 2 Andromon (Darkness, Material Value 13 each) produces an Option card with sum 26. Since there is no Option card with Result Value 26, the fusion yields **Net Worm** (Net Scape, Result Value 25).
- Example: Fusing 2 WaruMonzaemon (Darkness, Material Value 19 each) produces sum 38. The highest available Option Result Value is **Golden Banana** (Result Value 35).

## Special Fusion Directory (Fusion Codex Tab 3)

The Fusion Codex (`fusion.html`) provides a dedicated 3rd tab listing all 19 special fusions:
- **Left-to-Right Equation Layout**: `Material 1 + Material 2 = Result Card (Level, Specialty, Action)`.
- **Search & Filter**: Real-time filtering by result card, material cards, or specialty.
- **Cross-Tab Links**: Result card links to Tab 1; material cards / "Fuse ➔" link to Tab 2.
- **Direct Link**: `fusion.html?tab=special`.
