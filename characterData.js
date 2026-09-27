const characterData = {
  "characters": [
    {
      "id": "stia",
      "name": "Stia",
      "title": "Architect",
      "job": "Architect",
      "weapons": "Axe/Dagger",
      "unlock": "In Prologue, joins automatically via story progress.",
      "skills": [
        {
          "name": "First Aid",
          "type": "Battle",
          "cost": "6.0",
          "description": "Restore HP of an ally.",
          "unmasterable": false,
          "other": "Lv 1: Healing Grape - Initial Inquire"
        },
        {
          "name": "Chop Wood",
          "type": "Battle",
          "cost": "6.0",
          "description": "Deal axe damage to a foe",
          "unmasterable": false,
          "other": "Lv 2: Invigorating Nut (M) - Reach Lv. 6 for Wishvale"
        },
        {
          "name": "Full Swing",
          "type": "Battle",
          "cost": "28.0",
          "description": "Deal axe damage to all foes",
          "unmasterable": false,
          "other": "Lv 3: Dual Axe - Reach Lv. 8 for Wishvale"
        },
        {
          "name": "Stroke of Genius",
          "type": "Battle",
          "cost": "6.0",
          "description": "Grant self 2 random attribute-raising effects for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Donate BP",
          "type": "Battle",
          "cost": "5.0",
          "description": "Grant (1/2/3/4) BP to an ally.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Share SP",
          "type": "Battle",
          "cost": "%",
          "description": "Grant (50%/100%/150%/200%) of caster's remaining SP to an ally.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Greater Distribution",
          "type": "Battle",
          "cost": "0.0",
          "description": "Grant an ally your attribute-raising effects for (2/3/4/5) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Full Cheer",
          "type": "Ultimate",
          "cost": "",
          "description": "Raise BP recovery of the entire front row or entire back row by 1, and grant SP regeneration for (2/4/6) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Incidental Heal",
          "type": "Support",
          "cost": "",
          "description": "After the equipped character acts, gain a 50% chance to restore the HP of an ally in the front row with the least HP",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Unsung Hero",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character is in the back row, nullify status ailments of paired ally.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Healing Grape - Initial Inquire; Lv 2: Invigorating Nut (M) - Reach Lv. 6 for Wishvale; Lv 3: Dual Axe - Reach Lv. 8 for Wishvale"
    },
    {
      "id": "phenn",
      "name": "Phenn",
      "title": "Hunter",
      "job": "Hunter",
      "weapons": "Bow/Axe",
      "unlock": "In Chap 1, via Wishvale Rebuilding quests level 1. Phenn can be found in the cave \"Snowshard Grotto\" in the frostlands",
      "skills": [
        {
          "name": "Repeated Shot",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal bow damage to a foe 2 times.",
          "unmasterable": false,
          "other": "Lv 1: Energizing Pomegranate - Initial Inquire"
        },
        {
          "name": "Stout Wall",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Phys. Def. for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 2: Tough Nut (M) - Reach Lv. 6 for Wishvale"
        },
        {
          "name": "Provoke",
          "type": "Battle",
          "cost": "6.0",
          "description": "Attempt to draw the attention of all foes for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 3: Rippling Shot - Reach Lv. 8 for Wishvale"
        },
        {
          "name": "Sweeping Gale",
          "type": "Battle",
          "cost": "16.0",
          "description": "Deal wind damage to a foe 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Focus",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Phys. Atk./Accuracy for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Twin Bash",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal axe damage to a foe 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Avenging Triple Shot",
          "type": "Battle",
          "cost": "32.0",
          "description": "At the end of turn, deal bow damage to a foe 3 times. More potent the more hits taken that turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Shield of Hope",
          "type": "Ultimate",
          "cost": "",
          "description": "Reduces damage taken by all allies for (2/3/4) turns. Higher levels also increase the damage reduction.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vigorous Victor",
          "type": "Support",
          "cost": "",
          "description": "Restore 30% of the equipped character's max. HP and SP upon winning the battle.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Phys. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Eye for an Eye",
          "type": "Support",
          "cost": "",
          "description": "Gain a 50% chance to counter physical attacks",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "The Strength to Protect",
          "type": "Support",
          "cost": "",
          "description": "Raise Phys. Atk. up to 5 tiers every time the equipped character takes damage.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Energizing Pomegranate - Initial Inquire; Lv 2: Tough Nut (M) - Reach Lv. 6 for Wishvale; Lv 3: Rippling Shot - Reach Lv. 8 for Wishvale"
    },
    {
      "id": "laurana",
      "name": "Laurana",
      "title": "Cleric",
      "job": "Cleric",
      "weapons": "Staff/Fan",
      "unlock": "Found in Flamesgrace. Requires Completion of Ch. 4 Keepers of the Flame",
      "skills": [
        {
          "name": "Healing Light",
          "type": "Battle",
          "cost": "8.0",
          "description": "Restore HP of an ally.",
          "unmasterable": false,
          "other": "Lv 1: Refreshing Jam - Initial Inquire"
        },
        {
          "name": "Brain Bash",
          "type": "Battle",
          "cost": "18.0",
          "description": "Select a weapon and deal damage to a foe.",
          "unmasterable": false,
          "other": "Lv 2: Invigorating Nut (M) - Give Sausage Stew"
        },
        {
          "name": "Ethereal Healing",
          "type": "Battle",
          "cost": "30.0",
          "description": "Grant HP regeneration to the entire front row or entire back row for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 3: Umbral Fan - Give Yaya's Hairpin"
        },
        {
          "name": "Soporific Ice Fog",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal ice damage to a foe, and gain a chance [30%] to inflict sleep for 2 turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Mystical Staff",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal staff damage to a foe 2 times, and restore SP equal to 10% of damage dealt.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Moonlit Repose",
          "type": "Battle",
          "cost": "8.0",
          "description": "Grant SP regeneration to an ally for (1/2/3/4) turn(s).",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Wondrous Veil",
          "type": "Battle",
          "cost": "30.0",
          "description": "Grant an effect that allows an ally to recover with (25%/50%/75%/100%) of their max. HP upon being incapacitated (one time only).",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Maiden's Miracle",
          "type": "Ultimate",
          "cost": "",
          "description": "Grant an effect that allows the entire front row or entire back row to recover with (50%/75%/100%) of their max. HP upon being incapacitated.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "HP Recovery Up",
          "type": "Support",
          "cost": "",
          "description": "Raise the amount restored by the equipped character's HP recovery/HP regeneration skills.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Encore",
          "type": "Support",
          "cost": "",
          "description": "Grant an effect that allows you to recover with 25% of your max. HP upon being incapacitated (one time only).",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Refreshing Jam - Initial Inquire; Lv 2: Invigorating Nut (M) - Give Sausage Stew; Lv 3: Umbral Fan - Give Yaya's Hairpin"
    },
    {
      "id": "heidne",
      "name": "Heidne",
      "title": "Thief",
      "job": "Thief",
      "weapons": "Sword/Dagger",
      "unlock": "Found in Sunshade Sands, Flamesgrace Wilds. Requires Completion of first two encounters and Sidequests \"One's True Worth\" and \"Heidne and the Man-Eating Miser\". Needs Sailing Unlocked",
      "skills": [
        {
          "name": "Steal",
          "type": "Battle",
          "cost": "3.0",
          "description": "Steal an item from a foe.",
          "unmasterable": false,
          "other": "Lv 1: Herb of Mending - Initial Inquire"
        },
        {
          "name": "Reaping Slash",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal dagger damage to a foe.",
          "unmasterable": false,
          "other": "Lv 2: Sharp Nut (M) - Give Roast Iridove"
        },
        {
          "name": "Inhibit Offense",
          "type": "Battle",
          "cost": "6.0",
          "description": "Lower Phys. Atk./Elem. Atk. of a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 3: Sprightly Necklace - Give \"Wish Upon the Shooting Star\""
        },
        {
          "name": "Darkest Night",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal dark damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Lower Defenses",
          "type": "Battle",
          "cost": "6.0",
          "description": "Lower Phys. Def./Elem. Def. of a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Shield Burst",
          "type": "Battle",
          "cost": "18.0",
          "description": "Select a weapon and deal damage to a foe. Lower Shield Points regardless of target's weak points.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Triple Throw",
          "type": "Battle",
          "cost": "26.0",
          "description": "Deal dagger damage to random foes 3 times. Has an increased chance of being a critical hit.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Pilfer",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal great dagger damage to a foe and steal an item when attack is successful.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Incidental Steal",
          "type": "Support",
          "cost": "",
          "description": "25% chance to steal an item when attacking a foe.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Patience",
          "type": "Support",
          "cost": "",
          "description": "Give the equipped character a 25% chance to act again at the end of turn",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "The Ring's Grace",
          "type": "Support",
          "cost": "",
          "description": "Raise Phys. Atk/Elem. Atk. when the equipped character is paired with the protagonist.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Herb of Mending - Initial Inquire; Lv 2: Sharp Nut (M) - Give Roast Iridove; Lv 3: Sprightly Necklace - Give \"Wish Upon the Shooting Star\""
    },
    {
      "id": "celsus",
      "name": "Celsus",
      "title": "Thief",
      "job": "Thief",
      "weapons": "Dagger/Sword",
      "unlock": "Found in Valore. No requirements.",
      "skills": [
        {
          "name": "Goad",
          "type": "Battle",
          "cost": "18.0",
          "description": "Attempt to draw the attention of all foes to the caster for (3/5/7/9) turns, and lower Accuracy of all foes for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 1: Inspiriting Plum (M) - Initial Inquire"
        },
        {
          "name": "Double Throw",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal dagger damage to random foes 2 times. Has an increased chance of being a critical hit.",
          "unmasterable": false,
          "other": "Lv 2: Slippery Nut (M) - Give Sautéed Veal"
        },
        {
          "name": "Divine Speed",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Evasion/Speed for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 3: Boosting Break Mastery - Give White Hollowlilies"
        },
        {
          "name": "Wild Blade",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal sword damage to random foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Sidestep",
          "type": "Battle",
          "cost": "15.0",
          "description": "Grant self the ability to dodge a physical attack (1/2/3/4) time(s).",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Winding Throw",
          "type": "Battle",
          "cost": "34.0",
          "description": "Deal dagger damage to all foes. Has a increased chance of being a critical hit.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Triple Throw",
          "type": "Battle",
          "cost": "26.0",
          "description": "Deal dagger damage to random foes 3 times. Has an increased chance of being a critical hit.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Master of Evasion",
          "type": "Ultimate",
          "cost": "",
          "description": "Makes user the target of enemy attacks, and grants the ability to dodge physical attacks for (2/3/4) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Evil Ward",
          "type": "Support",
          "cost": "",
          "description": "Raises the party's success rate [by 20%] when attempting to flee. (The effect is not cumulative.)",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Evasion +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Evasion by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vim and Vigor",
          "type": "Support",
          "cost": "",
          "description": "Restore HP of equipped character every turn.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Detect Danger",
          "type": "Support",
          "cost": "",
          "description": "At the start of turn, grant self a 25% chance to dodge physical attacks 1 time.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Inspiriting Plum (M) - Initial Inquire; Lv 2: Slippery Nut (M) - Give Sautéed Veal; Lv 3: Boosting Break Mastery - Give White Hollowlilies"
    },
    {
      "id": "macy",
      "name": "Macy",
      "title": "Apothecary",
      "job": "Apothecary",
      "weapons": "Axe/Tome",
      "unlock": "Found in Emberglow. Requires a quest to be completed also found in Emberglow.",
      "skills": [
        {
          "name": "First Aid",
          "type": "Battle",
          "cost": "6.0",
          "description": "Restore HP of an ally.",
          "unmasterable": false,
          "other": "Lv 1: Olive of Life (M) - Initial Inquire"
        },
        {
          "name": "Poisonous Touch",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal axe damage to a foe, and gain a chance [30%] to inflict poison for 2 turns.",
          "unmasterable": false,
          "other": "Lv 2: Invigorating Nut (M) - Give Nourishing Root"
        },
        {
          "name": "Paralysis Formula",
          "type": "Battle",
          "cost": "9.0",
          "description": "Gain a chance [50%] to inflict paralysis on a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 3: Book of Eastern Medicine - Give Foreign Tome"
        },
        {
          "name": "Expert First Aid",
          "type": "Battle",
          "cost": "6.0",
          "description": "Restore HP of an ally, and move to the back row.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Rest",
          "type": "Battle",
          "cost": "0.0",
          "description": "Restore own HP/SP, and cure own status ailments.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Twin Bash",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal axe damage to a foe 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Share SP",
          "type": "Battle",
          "cost": "0.5",
          "description": "Grant (50%/100%/150%/200%) of caster's remaining SP to an ally.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Prism Mist",
          "type": "Ultimate",
          "cost": "",
          "description": "Grant a random positive status effect [HP regeneration, BP, SP, or ultimate charge] to all allies.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Boon of Healing",
          "type": "Support",
          "cost": "",
          "description": "When using an HP recovery skill, extend duration of target's augmenting effects by 1 turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max HP +500",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. HP by 500.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Healing Item Expertise",
          "type": "Support",
          "cost": "",
          "description": "Increase the effect of healing items during battle.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Olive of Life (M) - Initial Inquire; Lv 2: Invigorating Nut (M) - Give Nourishing Root; Lv 3: Book of Eastern Medicine - Give Foreign Tome"
    },
    {
      "id": "alexia",
      "name": "Alexia",
      "title": "Scholar",
      "job": "Scholar",
      "weapons": "Tome/Staff",
      "unlock": "Found in Theatrepolis. No requirements.",
      "skills": [
        {
          "name": "Lightning Bolt",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal lightning damage to all foes.",
          "unmasterable": false,
          "other": "Lv 1: Thunder Soulstone (M) - Initial Inquire"
        },
        {
          "name": "Duskfall",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal dark damage to all foes",
          "unmasterable": false,
          "other": "Lv 2: Magic Nut (M) - Give Mysterious Ancient Text"
        },
        {
          "name": "Elemental Bash",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal tome damage to a foe, and lower Elem. Def. for 2 turns.",
          "unmasterable": false,
          "other": "Lv 3: Curse of Shadow Mastery - Give Bernstein Records"
        },
        {
          "name": "Analyze",
          "type": "Battle",
          "cost": "1.0",
          "description": "Discover (1/2/3/6) weak point(s) of a foe and reveal HP.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Pray",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Elem. Atk. for (3/5/7/9) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Lightning Blast",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal lightning damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Duskblight",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal dark damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Ancient Magic",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal massive non-elemental damage to all foes.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Conserve Magic",
          "type": "Support",
          "cost": "",
          "description": "Restore SP when spell is not used during turn after spell is used.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Incidental Analysis",
          "type": "Support",
          "cost": "",
          "description": "Discover a random target's weak point after the equipped character acts.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Thunder Soulstone (M) - Initial Inquire; Lv 2: Magic Nut (M) - Give Mysterious Ancient Text; Lv 3: Curse of Shadow Mastery - Give Bernstein Records"
    },
    {
      "id": "viator",
      "name": "Viator",
      "title": "Warrior",
      "job": "Warrior",
      "weapons": "Sword/Polearm",
      "unlock": "Found in Valore Tavern. Requires a Crested Key. One can be found in cave north of Theatropolis, Serpent's Burrow",
      "skills": [
        {
          "name": "Provoke",
          "type": "Battle",
          "cost": "6.0",
          "description": "Attempt to draw the attention of all foes for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 1: Healing Grape (M) - Initial Inquire"
        },
        {
          "name": "Wild Blade",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal sword damage to random foes 2 times.",
          "unmasterable": false,
          "other": "Lv 2: Tough Nut (M) - Give Sewing Kit"
        },
        {
          "name": "Evasive Stance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own evasion for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 3: Gargantuan Shield - Complete \"The Eight Sacred Treasures\""
        },
        {
          "name": "Vanguard Spear",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal polearm damage to a foe. Act faster next turn.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Charging Strike",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal sword damage to a foe 2 times. More potent if attacking from the back row.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Parry",
          "type": "Battle",
          "cost": "15.0",
          "description": "Nullify damage taken from physical attacks (3/4/5/6) times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Talon Strike",
          "type": "Battle",
          "cost": "36.0",
          "description": "Deal great sword damage to random foes 3 timess.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Fluid Stance",
          "type": "Ultimate",
          "cost": "",
          "description": "",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elemental Counter",
          "type": "Support",
          "cost": "",
          "description": "50% chance to counter elemental attacks",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Foresight",
          "type": "Support",
          "cost": "",
          "description": "The equipped character will have a 25% chance to restore 1 BP when attacked.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Healing Grape (M) - Initial Inquire; Lv 2: Tough Nut (M) - Give Sewing Kit; Lv 3: Gargantuan Shield - Complete \"The Eight Sacred Treasures\""
    },
    {
      "id": "ludo",
      "name": "Ludo",
      "title": "Merchant",
      "job": "Merchant",
      "weapons": "Polearm/Bow",
      "unlock": "Found in Sunshade. Requires Kindlers of the Flame Ch. 3 (Wishvale rebuilding questline)",
      "skills": [
        {
          "name": "Spearhead",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal polearm damage to a foe. Act faster next turn.",
          "unmasterable": false,
          "other": "Lv 1: Energizing Pomegranite (M) - Initial Inquire"
        },
        {
          "name": "Appraisal",
          "type": "Battle",
          "cost": "1.0",
          "description": "Discover (1/2/3/6) weak point(s) of a foe and reveal possessions.",
          "unmasterable": false,
          "other": "Lv 2: Nourishing Nut (M) - Give Curry with Rice"
        },
        {
          "name": "Arm-Crippling Thrust",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal polearm damage to a foe 2 times, and lower Phys. Atk. for 2 turns.",
          "unmasterable": false,
          "other": "Lv 3: Quartz Shield - Complete \"A Long-Lost Love\""
        },
        {
          "name": "Negotiation",
          "type": "Battle",
          "cost": "10.0",
          "description": "Target foe provides additional EXP and leaves at the end of battle.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Leg-Crippling Thrust",
          "type": "Battle",
          "cost": "22.0",
          "description": "Deal polearm damage to a foe 2 times, and lower Speed for 2 turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "War Cry",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Phys. Atk./Crit. for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Crippling Thrust",
          "type": "Battle",
          "cost": "27.0",
          "description": "Deal polearm damage to a foe 3 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Enervating Thrust",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal polearm damage to a foe. If broken, lower Shield Points of target by 1 upon recovery. [If damage is dealt while enemy is broken, has a -1 effect on enemy shields after recovering]",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Extra Items",
          "type": "Support",
          "cost": "",
          "description": "Enemies are more likely to drop items.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Invigorating Attack",
          "type": "Support",
          "cost": "",
          "description": "Restore HP equal to 10% of damage dealt when using Attack.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Max. HP +500",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. HP by 500.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Fierce Rush",
          "type": "Support",
          "cost": "",
          "description": "Raise the potency of multiple-hit attacks against broken foes.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Energizing Pomegranite (M) - Initial Inquire; Lv 2: Nourishing Nut (M) - Give Curry with Rice; Lv 3: Quartz Shield - Complete \"A Long-Lost Love\""
    },
    {
      "id": "pius",
      "name": "Pius",
      "title": "Cleric",
      "job": "Cleric",
      "weapons": "Staff/Fan",
      "unlock": "Found in Cragspear. Requires Completion of his quest.",
      "skills": [
        {
          "name": "Cleansing Fire",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal fire damage to a foe.",
          "unmasterable": false,
          "other": "Lv 1: Healing Grape Bunch - Initial Inquire"
        },
        {
          "name": "Stalwart Veil",
          "type": "Battle",
          "cost": "9.0",
          "description": "Raise Phys. Def. of an ally for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 2: Resistant Nut (M) - Give Fruit Yogurt"
        },
        {
          "name": "Heal Wounds",
          "type": "Battle",
          "cost": "12.0",
          "description": "Restore HP of the entire front row or entire back row.",
          "unmasterable": false,
          "other": "Lv 3: Seal of the Sacred Flame - Give Damaged Sacred Seal"
        },
        {
          "name": "Wild Strike",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal fan damage to random foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Sweep",
          "type": "Battle",
          "cost": "34.0",
          "description": "Select a weapon and deal damage to all foes.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Flames of Judgment",
          "type": "Battle",
          "cost": "13.0",
          "description": "Deal fire damage to random foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Sacred Shield",
          "type": "Battle",
          "cost": "20.0",
          "description": "Grant a shield to an ally, reducing damage taken from the next hit by (50%/60%/75%/100%).",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Scales of Justice",
          "type": "Ultimate",
          "cost": "",
          "description": "Lowers physical/elemental defense of all foes for (2/4/6) turns and raises physical/elemental attack of all allies for (4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Back Row Support",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character is in the back row, grant HP restoration to paired ally.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Recover SP",
          "type": "Support",
          "cost": "",
          "description": "Restore SP equal to 1% of damage dealt when using \"Attack.\"",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Healing Grape Bunch - Initial Inquire; Lv 2: Resistant Nut (M) - Give Fruit Yogurt; Lv 3: Seal of the Sacred Flame - Give Damaged Sacred Seal"
    },
    {
      "id": "saoirse",
      "name": "Saoirse",
      "title": "Dancer",
      "job": "Dancer",
      "weapons": "Fan/Dagger",
      "unlock": "Found in Theatropolis theater. Requires Completion of Master of Fame Ch. 3",
      "skills": [
        {
          "name": "Mole Dance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Phys. Def. of an ally for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": "Lv 1: Inspiriting Plum - Initial Inquire"
        },
        {
          "name": "Dance of Repose",
          "type": "Battle",
          "cost": "6.0",
          "description": "Grant HP regeneration to an ally for (3/5/7/9) turns. Dance skill.",
          "unmasterable": false,
          "other": "Lv 2: Light Nut (M) - Give Lamb Bourguigon"
        },
        {
          "name": "Song of Winds",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal wind damage to a foe. Song skilll.",
          "unmasterable": false,
          "other": "Lv 3: Song of Blessings Mastery - Give Run Rampart Mastery"
        },
        {
          "name": "Panther Dance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Speed of an ally for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Song of Slumber",
          "type": "Battle",
          "cost": "9.0",
          "description": "Gain a chance [30%] to inflict sleep on a foe for (2/4/6/8) turns. Song skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Song of Howling Winds",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal wind damage to all foes. Song skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Dance of Respite",
          "type": "Battle",
          "cost": "33.0",
          "description": "Grant HP regeneration to the entire front row or entire back row for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Ruinous Aria",
          "type": "Ultimate",
          "cost": "",
          "description": "Grant an ally the ability to exploit weaknesses regardless of weak points for (2/3/4) turns. Song skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Invigorate",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character grants HP regeneration with a skill, grant SP regeneration to the target for 2 turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Back Row Dancer",
          "type": "Support",
          "cost": "",
          "description": "At the end of turn, slightly fill the ultimate technique gauge of the entire front row when the equipped character is in the back row.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Inspiriting Plum - Initial Inquire; Lv 2: Light Nut (M) - Give Lamb Bourguigon; Lv 3: Song of Blessings Mastery - Give Run Rampart Mastery"
    },
    {
      "id": "carinda",
      "name": "Carinda",
      "title": "Merchant",
      "job": "Merchant",
      "weapons": "Polearm/Bow",
      "unlock": "Found in Donescu. Requires Completion of Bestower of Power Ch. 1",
      "skills": [
        {
          "name": "Penetrating Thrust",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal polearm damage to a foe.",
          "unmasterable": false,
          "other": "Lv 1: Inspiriting Plum Basket - Initial Inquire"
        },
        {
          "name": "Recuperate",
          "type": "Battle",
          "cost": "12.0",
          "description": "Restore own HP, and raise own Phys. Def. for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 2: Light Nut (M) - Give River Bean Patties"
        },
        {
          "name": "Trade Blizzard",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal ice damage to all foes.",
          "unmasterable": false,
          "other": "Lv 3: Heavy Longspear - Complete \"Donescu's Successor\""
        },
        {
          "name": "Arrow of Fortune",
          "type": "Battle",
          "cost": "35.0",
          "description": "Deal great bow damage, and obtain JP based on damage dealt [2%].",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Immobilizing Shot",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal bow damage to a foe, and gain a chance [30%] to inflict paralysis for 2 turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Soaring Javelin",
          "type": "Battle",
          "cost": "14.0",
          "description": "For (3/4/5/6) turns, deal special polearm damage to all foes at the end of turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Mystic Shot",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal bow damage to all foes, and restore SP equal to 2% of damage dealt to the entire front row.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Trick of the Trade",
          "type": "Ultimate",
          "cost": "",
          "description": "Raises physical attack of all allies for (5/7/9) turns, and grant them the ability to dodge physical attacks (1/3/5) time(s).",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Blessing of Restoration",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character is in the front row, grant HP/SP regeneration to paired ally.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Iron Will",
          "type": "Support",
          "cost": "",
          "description": "50% chance to nullify an attribute-reducing effect.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Inspiriting Plum Basket - Initial Inquire; Lv 2: Light Nut (M) - Give River Bean Patties; Lv 3: Heavy Longspear - Complete \"Donescu's Successor\""
    },
    {
      "id": "xerc",
      "name": "Xerc",
      "title": "Scholar",
      "job": "Scholar",
      "weapons": "Tome/Staff",
      "unlock": "Found in Grandport. Requires Completion of Bestower of Power Ch. 2",
      "skills": [
        {
          "name": "Icewind",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal ice damage to all foes",
          "unmasterable": false,
          "other": "Lv 1: Ice Soulstone (L) - Initial Inquire"
        },
        {
          "name": "Tornado",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal wind damage to all foes.",
          "unmasterable": false,
          "other": "Lv 2: Magic Nut (M) - Give Light Soulstone (L)"
        },
        {
          "name": "Sweep",
          "type": "Battle",
          "cost": "34.0",
          "description": "Select a weapon and deal damage to all foes.",
          "unmasterable": false,
          "other": "Lv 3: Quartz Robe - Complete \"An Assistant Like No Other\""
        },
        {
          "name": "Analyze",
          "type": "Battle",
          "cost": "1.0",
          "description": "Discover (1/2/3/6) weak point(s) of a foe and reveal HP.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Stroke of Genius",
          "type": "Battle",
          "cost": "6.0",
          "description": "Grant self 2 random attribute-raising effects for (2/4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Blizzard",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal ice damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Maelstrom",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal wind damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Soulstone's Might",
          "type": "Ultimate",
          "cost": "",
          "description": "Deals Fire/Ice/Lightning/Wind/Light/Dark damage to all foes 1 time each.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Soulstone Expertise",
          "type": "Support",
          "cost": "",
          "description": "Increase soulstone potency.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "SP Luck",
          "type": "Support",
          "cost": "",
          "description": "50% chance to reduce SP consumption to 0.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Ice Soulstone (L) - Initial Inquire; Lv 2: Magic Nut (M) - Give Light Soulstone (L); Lv 3: Quartz Robe - Complete \"An Assistant Like No Other\""
    },
    {
      "id": "reime",
      "name": "Reime",
      "title": "Warrior",
      "job": "Warrior",
      "weapons": "Sword/Polearm",
      "unlock": "Found in Victors Hollow. Requires Completion of Bestower of Wealth Chp. 3: Oskha the Trader. Level 60 Recommended.",
      "skills": [
        {
          "name": "Twofold Slash",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal sword damage to a foe 2 times.",
          "unmasterable": false,
          "other": "Lv 1: Almighty Olive - Initial Inquire"
        },
        {
          "name": "Hilt Strike",
          "type": "Battle",
          "cost": "9.0",
          "description": "Select a weapon and deal damage to a foe, and lower Phys. Def. for 2 turns.",
          "unmasterable": false,
          "other": "Lv 2: Fortifying Nut (L) - Give Chicken Skewers"
        },
        {
          "name": "Master of Shadows",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal dark damage to a foe 2 times.",
          "unmasterable": false,
          "other": "Lv 3: Physical Prowess Mastery - Inquire Further"
        },
        {
          "name": "Double Thrust",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal polearm damage to a foe 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Vengeful Blade",
          "type": "Battle",
          "cost": "14.0",
          "description": "Counter physical attacks with a sword (2/3/4/5) times. Lower Shield Points with counter regardless of target's weak points.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Judicious Blade",
          "type": "Battle",
          "cost": "18.0",
          "description": "Nullify own positive status effects, then deal polearm damage to a foe. More potent the more status effects nullified.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Stormblade",
          "type": "Battle",
          "cost": "36.0",
          "description": "Deal sword damage to a foe 3 to 5 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Lotus Blade",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal sword damage to a foe 6 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "BP Luck",
          "type": "Support",
          "cost": "",
          "description": "50% chance to reduce BP consumption to 0.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Fierce Rush",
          "type": "Support",
          "cost": "",
          "description": "Raise the potency of multiple-hit attacks against broken foes.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Battle Refinement",
          "type": "Support",
          "cost": "",
          "description": "Slightly fill the equipped character's ultimate technique gauge when exploiting a foe's weak point with physical attacks.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Almighty Olive - Initial Inquire; Lv 2: Fortifying Nut (L) - Give Chicken Skewers; Lv 3: Physical Prowess Mastery - Inquire Further"
    },
    {
      "id": "delitia",
      "name": "Delitia",
      "title": "Hunter",
      "job": "Hunter",
      "weapons": "Bow/Axe",
      "unlock": "Found in Emberglow. Requires Completion of ?",
      "skills": [
        {
          "name": "Piercing Shadow",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal bow damage to a foe, and lower Speed for 2 turns.",
          "unmasterable": false,
          "other": "Lv 1: Herb of Awakening - Initial Inquire"
        },
        {
          "name": "Stray Arrows",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal bow damage to random foes 2 times.",
          "unmasterable": false,
          "other": "Lv 2: Critical Nut (M) - Give Seafood Acqua Pizza"
        },
        {
          "name": "Soporific Ice Fog",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal ice damage to a foe, and gain a chance [30%] to inflict sleep for 2 turns.",
          "unmasterable": false,
          "other": "Lv 3: Unerring Necklace - Complete \"The Missing Brother\""
        },
        {
          "name": "Retreating Shot",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal bow damage to a foe, then move to the back row.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Mind Sap",
          "type": "Battle",
          "cost": "6.0",
          "description": "Lower Elem. Def. of a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Ice Boulder",
          "type": "Battle",
          "cost": "16.0",
          "description": "Deal ice damage to a foe 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Devastating Shot",
          "type": "Battle",
          "cost": "28.0",
          "description": "Deal great bow damage to a foe, and gain a small chance [10%] to instantly kill target.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Gift of the Aqeeq",
          "type": "Ultimate",
          "cost": "",
          "description": "Lower Phys. Atk. and Phys. Def. of all foes for (2/4/6) turns, and raise Phys. Atk. and Phys. Def of all allies for (4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Fortitude",
          "type": "Support",
          "cost": "",
          "description": "Raises the equipped character's attack skill potency the lower their HP.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Extended Enfeeblement",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character inflicts an attribute-reducing effect, extend duration by 1 turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Exacerbate",
          "type": "Support",
          "cost": "",
          "description": "When switching from the back row, extend duration of attribute-reducing effects of target by 1 turn.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Herb of Awakening - Initial Inquire; Lv 2: Critical Nut (M) - Give Seafood Acqua Pizza; Lv 3: Unerring Necklace - Complete \"The Missing Brother\""
    },
    {
      "id": "esperre",
      "name": "Esperre",
      "title": "Apothecary",
      "job": "Apothecary",
      "weapons": "Axe/Tome",
      "unlock": "Found near Sufrataljah. Requires completion of Bestower of Wealth Ch. 2",
      "skills": [
        {
          "name": "Recuperating Smash",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal axe damage to a foe. Restore own HP if attacking from the back row.",
          "unmasterable": false,
          "other": "Lv 1: Herb of Vitality - Initial Inquire"
        },
        {
          "name": "Healing Touch",
          "type": "Battle",
          "cost": "12.0",
          "description": "Restore HP of an ally, and cure status ailments.",
          "unmasterable": false,
          "other": "Lv 2: Resistant Nut (M) - Give Rejuvenating Seafood Sauté"
        },
        {
          "name": "Thunderclap",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal lightning damage to all foes.",
          "unmasterable": false,
          "other": "Lv 3: Stimulating Necklace - Give Esperre's Father's Letter"
        },
        {
          "name": "Toxify",
          "type": "Battle",
          "cost": "15.0",
          "description": "Gain a chance [30%] to inflict toxin on a foe for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Arcane Tome",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal tome damage to a foe. Restore own SP if attacking from the back row.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Vivify",
          "type": "Battle",
          "cost": "24.0",
          "description": "Revive an ally.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Weak to Poison",
          "type": "Battle",
          "cost": "4.0",
          "description": "Make a foe weak to poison for (2/4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Art of Healing",
          "type": "Ultimate",
          "cost": "",
          "description": "Remove attribute-reducing effects of all allies, and grant all allies immunity to status ailments for (2/4/6) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Prolonged Ailment",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character inflicts a status ailment, extend duration by 1 turn.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Reciprocate",
          "type": "Support",
          "cost": "",
          "description": "When inflicted with poison/bleeding/sleep/paralysis/blindness, inflict the same ailments back.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Herb of Vitality - Initial Inquire; Lv 2: Resistant Nut (M) - Give Rejuvenating Seafood Sauté; Lv 3: Stimulating Necklace - Give Esperre's Father's Letter"
    },
    {
      "id": "goodwin",
      "name": "Goodwin",
      "title": "Dancer",
      "job": "Dancer",
      "weapons": "Dagger/Fan",
      "unlock": "Found in one of the inner sea islands. Requires Kindling of the Flame Ch 5 (Town Level 6)",
      "skills": [
        {
          "name": "Dance of Mist",
          "type": "Battle",
          "cost": "9.0",
          "description": "Lower Accuracy/Evasion of a foe for (2/4/6/8) turns, and cause target to act last for 2 turns. Dance skill.",
          "unmasterable": false,
          "other": "Lv 1: Herb of Vigor - Initial Inquire"
        },
        {
          "name": "Storm's Refrain",
          "type": "Battle",
          "cost": "13.0",
          "description": "Deal lightning damage to random foes 2 times. Song skill.",
          "unmasterable": false,
          "other": "Lv 2: Critical Nut (M) - Give Good Luck Omelette"
        },
        {
          "name": "Song of Battle",
          "type": "Battle",
          "cost": "6.0",
          "description": "Make foes more likely to attack paired ally in the back row and raise their Phys. Def. for (3/5/7/9) turns, then move to back row.",
          "unmasterable": true,
          "other": "Lv 3: Song of Roaring Thunder Mastery - Give Bouillabaisse"
        },
        {
          "name": "Double Arc",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal fan damage to a foe 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Levin's Refrain",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal lightning damage to a foe, and gain a chance [30%] to inflict paralysis for 2 turns. Song skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Thunder's Refrain",
          "type": "Battle",
          "cost": "19.0",
          "description": "Deal lightning damage to random foes 3 times. Song skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Dance of Sloughs",
          "type": "Battle",
          "cost": "30.0",
          "description": "Lower Speed/Evasion of all foes for (2/4/6/8) turns, and cause targets to act last for 2 turns. Dance skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Song of Levin",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal lightning damage to all foes, and for (2/3/4) turns, deal lightning damage to all foes at the end of turn. Higher l+$vls. also boost dmg. Song skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Hang Tough",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character is not near death, they will survive an otherwise lethal attack with 1 HP remaining.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vast Energy",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character is in the back row, they will have a 25% chance to reduce paired ally's BP consumption to 0.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Herb of Vigor - Initial Inquire; Lv 2: Critical Nut (M) - Give Good Luck Omelette; Lv 3: Song of Roaring Thunder Mastery - Give Bouillabaisse"
    },
    {
      "id": "olberic",
      "name": "Olberic",
      "title": "Warrior",
      "job": "Warrior",
      "weapons": "Sword/Polearm",
      "unlock": "Found in Shepherd's Rock. After completing Finale: Trial of the Ring (Epilogue for Master of All), interact with Ivan to start a quest.",
      "skills": [
        {
          "name": "Level Slash",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal sword damage to all foes.",
          "unmasterable": false,
          "other": "Lv 1: Reinvigorating Jam - Initial Inquire"
        },
        {
          "name": "Abide",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Phys. Atk for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 2: Nourishing Nut (M) - Give Mutton Stew"
        },
        {
          "name": "Spearhead",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal polearm damage to a foe. Act faster next turn.",
          "unmasterable": false,
          "other": "Lv 3: Crest of Hornburg - Give Crest of a Ruined Nation"
        },
        {
          "name": "Provoke",
          "type": "Battle",
          "cost": "6.0",
          "description": "Attempt to draw the attention of all foes for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Cross Strike",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal sword damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Stout Wall",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Phys. Def. for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Wild Thrust",
          "type": "Battle",
          "cost": "29.0",
          "description": "Deal polearm damage to random foes 3 to 5 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Unbending Blade",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal massive sword damage to a foe.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Cover",
          "type": "Support",
          "cost": "",
          "description": "Take damage from a single hit meant for a near-death ally.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Phys Atk +50",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Phys Def +50",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Surpassing Power",
          "type": "Support",
          "cost": "",
          "description": "Equipping this skill increases the damage cap per hit of the equipping character from the default of 9,999 to 99,999",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Reinvigorating Jam - Initial Inquire; Lv 2: Nourishing Nut (M) - Give Mutton Stew; Lv 3: Crest of Hornburg - Give Crest of a Ruined Nation"
    },
    {
      "id": "tressa",
      "name": "Tressa",
      "title": "Merchant",
      "job": "Merchant",
      "weapons": "Polearm/Bow",
      "unlock": "Found in Rippletide. Requires a quest to be completed also found in Rippletide (requires a battle to be won)",
      "skills": [
        {
          "name": "Collect",
          "type": "Battle",
          "cost": "2.0",
          "description": "Collect leaves from a foe.",
          "unmasterable": false,
          "other": "Lv 1: Energizing Pomegranate (M) - Initial Inquire"
        },
        {
          "name": "Tradewinds",
          "type": "Battle",
          "cost": "6.0",
          "description": "Deal wind damage to a foe.",
          "unmasterable": false,
          "other": "Lv 2: Slippery Nut (M) - Give Tressalad"
        },
        {
          "name": "Rest",
          "type": "Battle",
          "cost": "0.0",
          "description": "Restore own HP/SP, and cure own status ailments.",
          "unmasterable": false,
          "other": "Lv 3: Lucky Coin - Give Cait Furball"
        },
        {
          "name": "Trade Tempest",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal wind damage to all foes.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Donate BP",
          "type": "Battle",
          "cost": "3.0",
          "description": "Grant (1/2/3/4) BP to a ally.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Sidestep",
          "type": "Battle",
          "cost": "8.0",
          "description": "Grant self the ability to dodge a physical attack (1/2/3/4) time(s).",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Peerless Strike",
          "type": "Battle",
          "cost": "15.0",
          "description": "Deal great polearm damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Call for Help",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal sword/dagger/axe/light damage to random foes 1 time each.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Extra Leaves",
          "type": "Support",
          "cost": "",
          "description": "Receive additional leaves at the end of battle. (The effect is not cumulative.)",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Hang Tough",
          "type": "Support",
          "cost": "",
          "description": "Survive killing blows with 1 HP if not near death.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "SP Saver",
          "type": "Support",
          "cost": "",
          "description": "Halves SP required for the equipped character's skills.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Energizing Pomegranate (M) - Initial Inquire; Lv 2: Slippery Nut (M) - Give Tressalad; Lv 3: Lucky Coin - Give Cait Furball"
    },
    {
      "id": "therion",
      "name": "Therion",
      "title": "Thief",
      "job": "Thief",
      "weapons": "Sword/Dagger",
      "unlock": "Found in Cragspear. Requires Master of All Chp 2 completed.",
      "skills": [
        {
          "name": "Steal",
          "type": "Battle",
          "cost": "3.0",
          "description": "Steal an item from a foe.",
          "unmasterable": false,
          "other": "Lv 1: Red Apple - Initial Inquire"
        },
        {
          "name": "Wildfire",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal fire damage to a foe.",
          "unmasterable": false,
          "other": "Lv 2: Light Nut (M) - Give Apple Pie"
        },
        {
          "name": "HP Thief",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal dagger damage to a foe 2 times, and steal HP equal to 50% of damage dealt.",
          "unmasterable": false,
          "other": "Lv 3: Hellfire Mastery - Give Prince of Thieves Necklace"
        },
        {
          "name": "Shackle Foe",
          "type": "Battle",
          "cost": "6.0",
          "description": "Lower Phys. Atk. of a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Armor Corrosive",
          "type": "Battle",
          "cost": "6.0",
          "description": "Lower Phys. Def. of a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "SP Thief",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal dagger damage to a foe 2 times, and steal SP equal to 5% of damage dealt.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Assassination",
          "type": "Battle",
          "cost": "35.0",
          "description": "Deal great dagger damage to a foe. More potent if attacking from the back row.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "BP Thief",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal dagger damage to a foe 2 times and restore 2 BP to self.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Incidental Attack",
          "type": "Support",
          "cost": "",
          "description": "The equipped character gains a 50% chance of also attacking when using a non-damaging skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Snatch",
          "type": "Support",
          "cost": "",
          "description": "The equipped character will seize twice the amount when using Steal or Collect.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Extended Enfeeblement",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character inflicts an attribute-reducing effect, extend duration by 1 turn.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Red Apple - Initial Inquire; Lv 2: Light Nut (M) - Give Apple Pie; Lv 3: Hellfire Mastery - Give Prince of Thieves Necklace"
    },
    {
      "id": "alfyn",
      "name": "Alfyn",
      "title": "Apothecary",
      "job": "Apothecary",
      "weapons": "Axe/Tome",
      "unlock": "Path to Waterpool Caves. Requires - Finale: Trial of the Ring (Epilogue for Master of All) to be completed.",
      "skills": [
        {
          "name": "First Aid",
          "type": "Battle",
          "cost": "6.0",
          "description": "Restore HP of an ally.",
          "unmasterable": false,
          "other": "Lv 1: Herb of Vitality - Initial Inquire"
        },
        {
          "name": "Icicle",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal ice damage to a foe.",
          "unmasterable": false,
          "other": "Lv 2: Fortifying Nut (M) - Give Clam & Fish Meuniere"
        },
        {
          "name": "Rehabilitate",
          "type": "Battle",
          "cost": "15.0",
          "description": "Grant an ally immunity to status ailments for (2/4/6/8) turns.",
          "unmasterable": true,
          "other": "Lv 3: Preventative Measures Mastery - Give Vivify Mastery"
        },
        {
          "name": "Amputation",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal axe damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Empoison",
          "type": "Battle",
          "cost": "9.0",
          "description": "Gain a chance [30%] to inflict poison on a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Vivify",
          "type": "Battle",
          "cost": "24.0",
          "description": "Revive an ally.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Vigorous Strike",
          "type": "Battle",
          "cost": "35.0",
          "description": "Deal great axe damage to a foe. More potent the more HP you have left.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Pomegranate Panacea",
          "type": "Ultimate",
          "cost": "",
          "description": "Restore 2 BP to all allies.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Resist Ailments",
          "type": "Support",
          "cost": "",
          "description": "Improve the equipped character's resistance to poison/bleeding/sleep/paralysis/blindness/silence/terror/weakness.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. HP +500",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. HP by 500.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Heightened Healing",
          "type": "Support",
          "cost": "",
          "description": "Raise the amount of HP/SP restored by the equipped character (mistranslated - actually increases HP/SP restored TO the equipped character).",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Herb of Vitality - Initial Inquire; Lv 2: Fortifying Nut (M) - Give Clam & Fish Meuniere; Lv 3: Preventative Measures Mastery - Give Vivify Mastery"
    },
    {
      "id": "h-aanit",
      "name": "H'aanit",
      "title": "Hunter",
      "job": "Hunter",
      "weapons": "Axe/Bow",
      "unlock": "Found in Victors Hollow. Requires Completion of Bestower of Wealth Ch. 1",
      "skills": [
        {
          "name": "Rain of Arrows",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal bow damage to random foes 5 to 8 times.",
          "unmasterable": false,
          "other": "Lv 1: Wind Soulstone (L) - Initial Inquire"
        },
        {
          "name": "Summon Linde",
          "type": "Battle",
          "cost": "16.0",
          "description": "Summon Linde, and deal sword damage to all foes or polearm damage to a foe.",
          "unmasterable": true,
          "other": "Lv 2: Sharp Nut (M) - Give Roast Iridove"
        },
        {
          "name": "Thunderbird",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal lightning damage to a foe.",
          "unmasterable": false,
          "other": "Lv 3: Woodland Bow - Give Worn Bow"
        },
        {
          "name": "True Strike",
          "type": "Battle",
          "cost": "15.0",
          "description": "Deal critical bow damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Ensnare",
          "type": "Battle",
          "cost": "9.0",
          "description": "Cause a foe to act last for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Arrowstorm",
          "type": "Battle",
          "cost": "36.0",
          "description": "Deal bow damage to all foes 5 to 8 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Take Aim",
          "type": "Battle",
          "cost": "12.0",
          "description": "Raise Accuracy/Crit. of the entire front row or entire back row for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Hunter's Drive",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal sword damage to all foes, polearm damage to a foe, and bow damage to all foes.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Second Serving",
          "type": "Support",
          "cost": "",
          "description": "50% chance of unleashing a follow-up strike when the equipped character uses Attack.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Crit. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Crit. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Accuracy +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Accuracy by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Patience",
          "type": "Support",
          "cost": "",
          "description": "Give the equipped character a 25% chance to act again at the end of turn.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Wind Soulstone (L) - Initial Inquire; Lv 2: Sharp Nut (M) - Give Roast Iridove; Lv 3: Woodland Bow - Give Worn Bow"
    },
    {
      "id": "ophilia",
      "name": "Ophilia",
      "title": "Cleric",
      "job": "Cleric",
      "weapons": "Staff/Fan",
      "unlock": "Found in Flamesgrace. Requires Completion of Bestower of Fame Ch2",
      "skills": [
        {
          "name": "Heal Wounds",
          "type": "Battle",
          "cost": "12.0",
          "description": "Restore HP of the entire front row or entire back row.",
          "unmasterable": false,
          "other": "Lv 1: Olive of Life (L) - Initial Inquire"
        },
        {
          "name": "Holy Light",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal light damage to a foe.",
          "unmasterable": false,
          "other": "Lv 2: Slippery Nut (L) - Give Potage"
        },
        {
          "name": "Sheltering Veil",
          "type": "Battle",
          "cost": "9.0",
          "description": "Raise Elem. Def. of an ally for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 3: Staff of the Sacred Church - Give \"A Little Prayer\""
        },
        {
          "name": "Luminescence",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal light damage to all foes.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Heal More",
          "type": "Battle",
          "cost": "38.0",
          "description": "Greatly restore HP of the entire front row or entire back row.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Stalwart Veil",
          "type": "Battle",
          "cost": "9.0",
          "description": "Raise Phys. Def. of an ally for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Revive",
          "type": "Battle",
          "cost": "75.0",
          "description": "Revive all allies.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Divine Protection",
          "type": "Ultimate",
          "cost": "",
          "description": "Nullify damage taken from physical attacks for the entire front row or entire back row (1/2/3) time(s).",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Extra JP",
          "type": "Support",
          "cost": "",
          "description": "Receive additional JP at the end of battle. (The effect is not cumulative.)",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Persistence",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character is granted an attribute-raising effect, extend duration by 1 turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Saving Grace",
          "type": "Support",
          "cost": "",
          "description": "The equipped character can be healed above their max HP",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Olive of Life (L) - Initial Inquire; Lv 2: Slippery Nut (L) - Give Potage; Lv 3: Staff of the Sacred Church - Give \"A Little Prayer\""
    },
    {
      "id": "cyrus",
      "name": "Cyrus",
      "title": "Scholar",
      "job": "Scholar",
      "weapons": "Staff/Tome",
      "unlock": "Found near Atlasdam. Requires completion of Bestower of Fame Ch 2",
      "skills": [
        {
          "name": "Fireball",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal fire damage to all foes.",
          "unmasterable": false,
          "other": "Lv 1: Fire Soulstone (L) - Initial Inquire"
        },
        {
          "name": "Icewind",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal ice damage to all foes.",
          "unmasterable": false,
          "other": "Lv 2: Magic Nut (M) - Give Exotic Savory Pizza"
        },
        {
          "name": "Lightning Bolt",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal lightning damage to all foes.",
          "unmasterable": false,
          "other": "Lv 3: Tonitrus Canere Mastery - Give Rune Grimoire"
        },
        {
          "name": "Analyze",
          "type": "Battle",
          "cost": "1.0",
          "description": "Discover (1/2/3/6) weak point(s) of a foe and reveal HP.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Fire Storm",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal fire damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Blizzard",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal ice damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Lightning Blast",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal lightning damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Grand Trinity",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal fire/lightning/ice damage to all foes 2 times each.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Study Foe",
          "type": "Support",
          "cost": "",
          "description": "At the start of battle, discover 1 weak point of each foe.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vim and Vigor",
          "type": "Support",
          "cost": "",
          "description": "Restore HP of equipped character every turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Rechant",
          "type": "Support",
          "cost": "",
          "description": "When casting magic, gain a 20% chance to recast the same spell.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Fire Soulstone (L) - Initial Inquire; Lv 2: Magic Nut (M) - Give Exotic Savory Pizza; Lv 3: Tonitrus Canere Mastery - Give Rune Grimoire"
    },
    {
      "id": "primrose",
      "name": "Primrose",
      "title": "Dancer",
      "job": "Dancer",
      "weapons": "Fan/Dagger",
      "unlock": "Found in Sunshade. Requires Completion of Master of All Chp 4. before the quest can be started to recruit Primrose.",
      "skills": [
        {
          "name": "Lion Dance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Phys. Atk. of an ally for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": "Lv 1: Shadow Soulstone (M) - Initial Inquire"
        },
        {
          "name": "Moonlight Waltz",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal dark damage to a foe. Song skill.",
          "unmasterable": false,
          "other": "Lv 2: Resistant Nut (M) - Give Stewed Chicken & Tomatoes"
        },
        {
          "name": "Peacock Strut",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Elem. Atk. of an ally for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": "Lv 3: High House Dagger - Give Cursed Dagger"
        },
        {
          "name": "Mole Dance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Phys. Def. of an ally for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Night Ode",
          "type": "Battle",
          "cost": "15.0",
          "description": "Deal dark damage to all foes. Song skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Panther Dance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Speed of an ally for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Song of Lunar Shadow",
          "type": "Battle",
          "cost": "40.0",
          "description": "Deal great dark damage to a foe. Song skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Twilight Waltz",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal dark damage to all foes 2 time(s). Grant SP regeneration to all allies for 3 turn(s). Dance skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Second Wind",
          "type": "Support",
          "cost": "",
          "description": "Restore SP of equipped character every turn.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Evasion +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Evasion by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "The Show Goes On",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character grants an attribute-raising effect, extend duration by 1 turn.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Shadow Soulstone (M) - Initial Inquire; Lv 2: Resistant Nut (M) - Give Stewed Chicken & Tomatoes; Lv 3: High House Dagger - Give Cursed Dagger"
    },
    {
      "id": "bargello",
      "name": "Bargello",
      "title": "Lord",
      "job": "Lord",
      "weapons": "Dagger only",
      "unlock": "Cragspear. Progress through Main Story: Bestower of All Ch. 2.",
      "skills": [
        {
          "name": "Double Edge",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal dagger damage to a foe 2 times.",
          "unmasterable": false,
          "other": "Lv 1: Energizing Pomegranate (L) - Initial Inquire"
        },
        {
          "name": "Lower Defenses",
          "type": "Battle",
          "cost": "6.0",
          "description": "Lower Phys. Def./Elem. Def. of a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 2: Light Nut (L) - Give Marinated Octopus & Plounder"
        },
        {
          "name": "Evasive Stance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Evasion for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 3: Defiant Spirit Mastery - Give White Grape Blossom"
        },
        {
          "name": "Tri-Edge",
          "type": "Battle",
          "cost": "27.0",
          "description": "Deal dagger damage to a foe 3 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Winding Throw",
          "type": "Battle",
          "cost": "34.0",
          "description": "Deal dagger damage to all foes. Has an increased chance of being a critical hit.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Mafioso",
          "type": "Battle",
          "cost": "35.0",
          "description": "Deal great dagger damage to a foe. More potent if first action taken that turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Frenzied Rampage",
          "type": "Battle",
          "cost": "29.0",
          "description": "Deal dagger damage to a foe 4 times, and take damage equal to 10% of own max. HP.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "For the Family",
          "type": "Ultimate",
          "cost": "",
          "description": "Summon the Bargello family and deal dagger/axe/wind/staff damage to a foe 1 time each.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "A Step Ahead",
          "type": "Support",
          "cost": "",
          "description": "The equipped character will act first at the start of battle.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Crit. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Crit. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Unbridled Courage",
          "type": "Support",
          "cost": "",
          "description": "Restore 3 BP to equipped character when breaking a foe.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Energizing Pomegranate (L) - Initial Inquire; Lv 2: Light Nut (L) - Give Marinated Octopus & Plounder; Lv 3: Defiant Spirit Mastery - Give White Grape Blossom"
    },
    {
      "id": "alaune",
      "name": "Alaune",
      "title": "Queen",
      "job": "Queen",
      "weapons": "Tome/Fan",
      "unlock": "Found in location?. Requires ? (minimum story progress, item, etc?)",
      "skills": [
        {
          "name": "Heal Wounds",
          "type": "Battle",
          "cost": "12.0",
          "description": "Restore HP of the entire front row or entire back row.",
          "unmasterable": false,
          "other": "Lv 1: Olive of Life (L) - Initial Inquire"
        },
        {
          "name": "Holy Light",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal light damage to a foe.",
          "unmasterable": false,
          "other": "Lv 2: Magic Nut (L) - Give Berry Pie"
        },
        {
          "name": "Invoke Sacred Flame",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Phys. Def./Elem. Def. of an ally for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 3: Mark of Salvation - Give White Silk Handkerchief"
        },
        {
          "name": "Gospel of Attrition",
          "type": "Battle",
          "cost": "12.0",
          "description": "Lower Elem. Def. of all foes for (2/4/6/8) turns. Song skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Heal More",
          "type": "Battle",
          "cost": "38.0",
          "description": "Greatly restore HP of the entire front row or entire back row.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Radiant Light",
          "type": "Battle",
          "cost": "19.0",
          "description": "Deal light damage to random foes 3 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Light of Judgment",
          "type": "Battle",
          "cost": "22.0",
          "description": "Deal great light damage to a foe.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Prayer for Tomorow",
          "type": "Ultimate",
          "cost": "",
          "description": "Revive and restore HP/SP of all allies.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Encourage",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character moves to the back row, paired ally acts first next turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Purification",
          "type": "Support",
          "cost": "",
          "description": "Attribute-reducing effects on the equipped character will be removed twice as quickly.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Olive of Life (L) - Initial Inquire; Lv 2: Magic Nut (L) - Give Berry Pie; Lv 3: Mark of Salvation - Give White Silk Handkerchief"
    },
    {
      "id": "richard",
      "name": "Richard",
      "title": "King",
      "job": "King",
      "weapons": "Sword/Polearm",
      "unlock": "Joins immediately after completion of Bestower of All Chapter 1",
      "skills": [
        {
          "name": "Vanguard Steel",
          "type": "Battle",
          "cost": "16.0",
          "description": "Deal sword damage to random foes 2 times. Act faster next turn.",
          "unmasterable": true,
          "other": "Lv 1: Revitalizing Jam - Initial Inquire"
        },
        {
          "name": "Defensive Command",
          "type": "Battle",
          "cost": "9.0",
          "description": "Raise Elem. Def. of an ally for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 2: Sharp Nut (L) - Give Bean Salad"
        },
        {
          "name": "Thunderbeast",
          "type": "Battle",
          "cost": "16.0",
          "description": "Deal lightning damage to a foe 2 times.",
          "unmasterable": false,
          "other": "Lv 3: Crystal Helm - Give Flag of Riven"
        },
        {
          "name": "Evasion Command",
          "type": "Battle",
          "cost": "9.0",
          "description": "Raise Evasion of an ally for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Aggressive Slash",
          "type": "Battle",
          "cost": "22.0",
          "description": "Deal sword damage to random foes 3 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Bolster",
          "type": "Battle",
          "cost": "24.0",
          "description": "Raise Phys. Atk./Elem. Atk. of the entire front row or entire back row for (2/4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Stunning Strike",
          "type": "Battle",
          "cost": "60.0",
          "description": "Select a weapon and deal great damage to all foes.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Take Command",
          "type": "Ultimate",
          "cost": "",
          "description": "Raise Phys. Atk./Phys. Def./Elem. Atk./Elem. Def. of all allies for (3/5/7) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "High Morale",
          "type": "Support",
          "cost": "",
          "description": "Raise Phys. Atk./Elem. Atk. of the entire back row for 2 turns when the equipped character uses a skill at the start of turn.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. HP +500",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. HP by 500.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Invigorate and Inspire",
          "type": "Support",
          "cost": "",
          "description": "Slightly fill the target's ultimate technique gauge when the equipped character uses a skill to grant an attribute-raising effect.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Revitalizing Jam - Initial Inquire; Lv 2: Sharp Nut (L) - Give Bean Salad; Lv 3: Crystal Helm - Give Flag of Riven"
    },
    {
      "id": "solon",
      "name": "Solon",
      "title": "Wise King",
      "job": "Wise King",
      "weapons": "Sword/Tome",
      "unlock": "Found in Cragspear. Requires completion of Bestower of All Chapter 5.",
      "skills": [
        {
          "name": "Cross Strike",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal sword damage to a foe.",
          "unmasterable": false,
          "other": "Lv 1: Revitalizing Jam - Initial Inquire"
        },
        {
          "name": "Fireball",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal fire damage to all foes.",
          "unmasterable": false,
          "other": "Lv 2: Resistant Nut (L) - Give Lamb Bourguignon"
        },
        {
          "name": "Lower Defenses",
          "type": "Battle",
          "cost": "6.0",
          "description": "Lower Phys. Def./Elem. Def. of a foe for (2/4/6/8) turns.",
          "unmasterable": false,
          "other": "Lv 3: Elemental Augmentor - Give Freshly Shorn Fleece"
        },
        {
          "name": "Analyze All",
          "type": "Battle",
          "cost": "10.0",
          "description": "Discover (1/2/3/6) weak point(s) of all foes.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vacuum Slice",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal great sword damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Gospel of Debilitation",
          "type": "Battle",
          "cost": "12.0",
          "description": "Lower Phys. Def. of all foes for (2/4/6/8) turns. Song skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Fire Storm",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal fire damage to all foes 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Hawk of Orsterra",
          "type": "Ultimate",
          "cost": "",
          "description": "Discover weak points of all foes, and raise weak point damage for (2/3/4) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Narrow Escape",
          "type": "Support",
          "cost": "",
          "description": "10% chance to survive an otherwise lethal attack with 1 HP remaining.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Of Equal Might",
          "type": "Support",
          "cost": "",
          "description": "Equalize Phys. Atk. and Elem. Atk. of the equipped character to whichever value is higher.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Revitalizing Jam - Initial Inquire; Lv 2: Resistant Nut (L) - Give Lamb Bourguignon; Lv 3: Elemental Augmentor - Give Freshly Shorn Fleece"
    },
    {
      "id": "eltrix",
      "name": "Eltrix",
      "title": "Captain",
      "job": "Captain",
      "weapons": "Sword/Bow",
      "unlock": "Cragspear. Progress through Main Story: Bestower of All Ch. 5.",
      "skills": [
        {
          "name": "Twofold Slash",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal sword damage to a foe 2 times.",
          "unmasterable": false,
          "other": "Lv 1: Almighty Olive - Initial Inquire"
        },
        {
          "name": "Stout Wall",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Phys. Def. for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 2: Tough Nut (L) - Give Bouillabaisse"
        },
        {
          "name": "Provoke",
          "type": "Battle",
          "cost": "6.0",
          "description": "Attempt to draw the attention of all foes for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 3: Enchanted Sword - Give Arcangelo's Pirate Flag"
        },
        {
          "name": "Offensive Maneuver",
          "type": "Battle",
          "cost": "12.0",
          "description": "Raise Phys. Atk. of the entire front row or entire back row for (2/4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Double Shot",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal bow damage to a foe 2 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Defensive Maneuver",
          "type": "Battle",
          "cost": "12.0",
          "description": "Raise Phys. Def. of the entire front row or entire back row for (2/4/6/8) turns",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Sublime Slash",
          "type": "Battle",
          "cost": "45.0",
          "description": "Deal great sword damage to a foe 3 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Lofty Rampart",
          "type": "Ultimate",
          "cost": "",
          "description": "Raise own Phys. Atk./Phys. Def. and take damage in place of allies for (3/5/7) turns. Survive an otherwise lethal attack with 1 HP remaining (one time only).",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Back Row Protection",
          "type": "Support",
          "cost": "",
          "description": "When moving to the back row, the equipped character will take damage (once) in place of paired ally.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Max. HP +500",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. HP by 500.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Stalwart Stance",
          "type": "Support",
          "cost": "",
          "description": "At the start of turn, raise the equipped character's Phys. Def. up to 5 tiers when in the front row. Effect is canceled when in the back row at the start of turn.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Almighty Olive - Initial Inquire; Lv 2: Tough Nut (L) - Give Bouillabaisse; Lv 3: Enchanted Sword - Give Arcangelo's Pirate Flag"
    },
    {
      "id": "rondo",
      "name": "Rondo",
      "title": "Knight Ardante",
      "job": "Knight Ardante",
      "weapons": "Sword/Staff",
      "unlock": "Found in location?. Requires ? (minimum story progress, item, etc?)",
      "skills": [
        {
          "name": "Cross Strike",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal sword damage to a foe.",
          "unmasterable": false,
          "other": "Lv 1: Reinvigorating Jam - Initial Inquire"
        },
        {
          "name": "Divine Light",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal light damage to a foe (1/2/3/4) time(s). Attack count increases based on Boost Lv.",
          "unmasterable": false,
          "other": "Lv 2: Fortifying Nut (L) - Give Milk Soup"
        },
        {
          "name": "Focus Energy",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise own Phys. Atk./Elem. Atk. for (3/5/7/9) turns.",
          "unmasterable": false,
          "other": "Lv 3: Ardante Attire - Give Ward of the Knight Ardante"
        },
        {
          "name": "Smashing Strike",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal great staff damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Sacred Flame's Blessing",
          "type": "Battle",
          "cost": "8.0",
          "description": "Restore own HP/SP for (2/4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Holy Flame",
          "type": "Battle",
          "cost": "8.0",
          "description": "Exploit fire weakness with physical attacks for (3/5/7/9) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vacuum Slice",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal great sword damage to a foe.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Sword of the Sacred Flame",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal sword/light damage to a foe 1 time each.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "BP in Adversity",
          "type": "Support",
          "cost": "",
          "description": "The equipped character will regain 2 BP when near death.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Augmented Break",
          "type": "Support",
          "cost": "",
          "description": "Raise the potency of attacks against broken foes.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Reinvigorating Jam - Initial Inquire; Lv 2: Fortifying Nut (L) - Give Milk Soup; Lv 3: Ardante Attire - Give Ward of the Knight Ardante"
    },
    {
      "id": "el",
      "name": "El",
      "title": "Warrior",
      "job": "Warrior",
      "weapons": "Sword only",
      "unlock": "Found in Cragspear Slums. Requires Master of All Chp 1 and 2 completed",
      "skills": [
        {
          "name": "Level Slash",
          "type": "Battle",
          "cost": "",
          "description": "Deal sword damage to all foes.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "First Aid",
          "type": "Battle",
          "cost": "",
          "description": "Restore HP of an ally.",
          "unmasterable": true,
          "other": "N/A"
        },
        {
          "name": "Radiant Light",
          "type": "Battle",
          "cost": "",
          "description": "Deal light damage to random foes 3 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vacuum Slice",
          "type": "Battle",
          "cost": "",
          "description": "Deal great sword damage to a foe.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Almighty",
          "type": "Battle",
          "cost": "",
          "description": "Raise own Phys. Atk./Phys. Def./Elem. Atk./Elem. Def. for (3/5/7/9) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Trifold Slash",
          "type": "Battle",
          "cost": "",
          "description": "Deal sword damage to a foe 3 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Divine Light",
          "type": "Battle",
          "cost": "",
          "description": "Deal light damage to a foe (1/2/3/4) time(s). Attack count increases based on Boost Lv.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Holy Sword",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal light damage to all foes 5 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Of Equal Might",
          "type": "Support",
          "cost": "",
          "description": "Equalize Phys. Atk. and Elem. Atk. of the equipped character to whichever value is higher.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Def. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Vast Energy",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character is in the back row, they will have a 25% chance to reduce paired ally's BP consumption to 0.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "N/A"
    },
    {
      "id": "tatloch",
      "name": "Tatloch",
      "title": "Empress",
      "job": "Empress",
      "weapons": "Fan/Axe",
      "unlock": "Cragspear. Start of Main Story: Bestower of All Ch. 4.",
      "skills": [
        {
          "name": "Wild Strike",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal fan damage to random foes 2 times.",
          "unmasterable": false,
          "other": "Lv 1: Octopath Rolls - Initial Inquire"
        },
        {
          "name": "Great Winds",
          "type": "Battle",
          "cost": "13.0",
          "description": "Deal wind damage to random foes 2 times.",
          "unmasterable": false,
          "other": "Lv 2: Critical Nut (L) - Complete \"In Search of What Remains\""
        },
        {
          "name": "Disintegrating Dance",
          "type": "Battle",
          "cost": "24.0",
          "description": "Lower Phys. Def./Elem. Def. of all foes for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": "Lv 3: Spirit of the Stage Mastery - Give Rinyuu's Stew"
        },
        {
          "name": "Dark Panther Dance",
          "type": "Battle",
          "cost": "24.0",
          "description": "Raise Phys. Atk./Speed of the entire front row or entire back row for (2/4/6/8) turns. Dance skill.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Wild Blow",
          "type": "Battle",
          "cost": "22.0",
          "description": "Deal fan damage to random foes 3 times.",
          "unmasterable": false,
          "other": ""
        },
        {
          "name": "Beguiling Dance",
          "type": "Battle",
          "cost": "15.0",
          "description": "Gain a chance [30%] to inflict enchant on all foes for (2/4/6/8) turns. Dance skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Captivating Step",
          "type": "Battle",
          "cost": "34.0",
          "description": "Deal fan damage to random foes 4 times, and gain a chance [30% per hit] to inflict enchant for 2 turns. Dance skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Royal Feast",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal fan damage to random foes 5 times. More potent if target is enchanted.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Incidental Attack",
          "type": "Support",
          "cost": "",
          "description": "The equipped character gains a 50% chance of also attacking when using a non-damaging skill.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Evasion +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Evasion by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Crit. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Crit. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Salt the Wound",
          "type": "Support",
          "cost": "",
          "description": "The equipped character gains a 50% chance of acting twice when breaking a foe. This will not trigger in succession.",
          "unmasterable": false,
          "other": ""
        }
      ],
      "amity": "Lv 1: Octopath Rolls - Initial Inquire; Lv 2: Critical Nut (L) - Complete \"In Search of What Remains\"; Lv 3: Spirit of the Stage Mastery - Give Rinyuu's Stew"
    },
    {
      "id": "sazantos",
      "name": "Sazantos",
      "title": "Flamebringer",
      "job": "Flamebringer",
      "weapons": "Sword only",
      "unlock": "Wishvale Trail (requires a battle). Joins after Master of Power, Fame and Wealth Chp 3 completed.",
      "skills": [
        {
          "name": "Aggressive Slash",
          "type": "Battle",
          "cost": "22.0",
          "description": "Deal sword damage to random foes 3 times.",
          "unmasterable": true,
          "other": "Lv 1: Nothing - Initial Inquire"
        },
        {
          "name": "Radiant Light",
          "type": "Battle",
          "cost": "19.0",
          "description": "Deal light damage to random foes 3 times.",
          "unmasterable": true,
          "other": "Lv 2: Nourishing Nut (L) - Complete \"An Indestructible Flame\""
        },
        {
          "name": "Almighty",
          "type": "Battle",
          "cost": "12.0",
          "description": "Raise own Phys. Atk., Phys.Def., Elem.Atk., Elem.Def. for (3/5/7/9) turns.",
          "unmasterable": true,
          "other": "Lv 3: Purging Flame Mastery, Champion's Shield, Champion's Helm, Champion's Armor - Give Cursed Shield, Cursed Helm, Cursed Armor"
        },
        {
          "name": "Sacred Flame's Grace",
          "type": "Battle",
          "cost": "18.0",
          "description": "Restore HP of the entire front row or entire back row, and grant HP restoration for 3 turns at Max. Boost.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Transcendent Light",
          "type": "Battle",
          "cost": "26.0",
          "description": "Deal light damage to random foes 4 times.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Divine Flame",
          "type": "Battle",
          "cost": "16.0",
          "description": "Exploit weaknesses with physical attacks regardless of weak points for (2/3/4/5) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phantom Strike",
          "type": "Battle",
          "cost": "40.0",
          "description": "Deal great sword damage to random foes (2/3/4/5) times. Attack count increases based on Boost Lv.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Shadowcleaver",
          "type": "Ultimate",
          "cost": "",
          "description": "Deal sword damage to all foes 2 times. Deal more damage if graced with Divine Flame (mistranslated, adds a third hit instead).",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Master of Offense",
          "type": "Support",
          "cost": "",
          "description": "More easily land critical hits on broken foes.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Elem. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "BP Recovery on Break",
          "type": "Support",
          "cost": "",
          "description": "The equipped character will consume no BP when breaking a foe.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Nothing - Initial Inquire; Lv 2: Nourishing Nut (L) - Complete \"An Indestructible Flame\"; Lv 3: Purging Flame Mastery, Champion's Shield, Champion's Helm, Champion's Armor - Give Cursed Shield, Cursed Helm, Cursed Armor"
    },
    {
      "id": "isla",
      "name": "Isla",
      "title": "Cait Scholar",
      "job": "Cait Scholar",
      "weapons": "Tome only",
      "unlock": "Found in Isle of Sages. Obtain \"Secret Invitation\" to gain access to the island, requires 5 Letter Fragments.",
      "skills": [
        {
          "name": "Double Slap",
          "type": "Battle",
          "cost": "21.0",
          "description": "Deal tome damage to all foes 2 times.",
          "unmasterable": true,
          "other": "Lv 1: Rejuvenating Jam - Initial Inquire"
        },
        {
          "name": "Arcane Meteor",
          "type": "Battle",
          "cost": "24.0",
          "description": "Deal great non-elemental damage to all foes.",
          "unmasterable": true,
          "other": "Lv 2: Invigorating Nut (L) - Give Tuna"
        },
        {
          "name": "Fleeting Feline",
          "type": "Battle",
          "cost": "10.0",
          "description": "Raise own Speed for (2/4/6/8) turns, and grant self the ability to dodge physical attacks (1/2/3/4) time(s).",
          "unmasterable": true,
          "other": "Lv 3: Elemental Edge Mastery - Give Elemental Augmentor"
        },
        {
          "name": "Purr-omote",
          "type": "Battle",
          "cost": "12.0",
          "description": "Raise Elem. Atk./Evasion of the entire front row or entire back row for (2/4/6/8) turns.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Curl Up",
          "type": "Battle",
          "cost": "0.0",
          "description": "Greatly restore own HP/SP.",
          "unmasterable": true,
          "other": "Lettter Fragment Location"
        },
        {
          "name": "Triple Slap",
          "type": "Battle",
          "cost": "43.0",
          "description": "Deal tome damage to all foes 3 times.",
          "unmasterable": true,
          "other": "Theatropolis: inside the library, shiny spot on a bookshelf."
        },
        {
          "name": "Arcane Comet",
          "type": "Battle",
          "cost": "36.0",
          "description": "Deal great non-elemental damage to all foes. More potent if attacking from the back row.",
          "unmasterable": true,
          "other": "Waterpool Caves: find the item among the crates and sacks."
        },
        {
          "name": "Ulti-meow",
          "type": "Ultimate",
          "cost": "",
          "description": "Use all your SP, then deal non-elemental damage to all foes. More potent the more SP spent.",
          "unmasterable": true,
          "other": "Atlasdam: require \"Animal Whisperer\" ability to entreat the item from a cat."
        },
        {
          "name": "Sage's Wisdom",
          "type": "Support",
          "cost": "",
          "description": "Elemental attacks will also deal critical damage.",
          "unmasterable": true,
          "other": "Path to Herminia's Manse: After activating the arena facility in Wishvale: find the item behind an elite monster."
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unmasterable": true,
          "other": "Golden Palace: find the item in the lowest floor. (This specific spot can be replaced by choosing this item as a \"Belonging\" when creating your character.)"
        },
        {
          "name": "Elem. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Atk. by 50.",
          "unmasterable": true,
          "other": ""
        },
        {
          "name": "Sheer Focus",
          "type": "Support",
          "cost": "",
          "description": "Focus specific spells on a single target, but raise the potency.",
          "unmasterable": true,
          "other": ""
        }
      ],
      "amity": "Lv 1: Rejuvenating Jam - Initial Inquire; Lv 2: Invigorating Nut (L) - Give Tuna; Lv 3: Elemental Edge Mastery - Give Elemental Augmentor; Lettter Fragment Location; Theatropolis: inside the library, shiny spot on a bookshelf.; Waterpool Caves: find the item among the crates and sacks.; Atlasdam: require \"Animal Whisperer\" ability to entreat the item from a cat.; Path to Herminia's Manse: After activating the arena facility in Wishvale: find the item behind an elite monster.; Golden Palace: find the item in the lowest floor. (This specific spot can be replaced by choosing this item as a \"Belonging\" when creating your character.)"
    }
  ],
  "jobs": [
    {
      "id": "warrior",
      "name": "Warrior",
      "weapons": "Sword/Spear",
      "skills": [
        {
          "name": "Cross Strike",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal sword damage to a foe",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Abide",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise your physical attack for (3/5/7/9) turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Spearhead",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal polearm damage to a foe. Act faster next turn.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Helmcleaver",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal sword damage to a foe, and lower Phys. Def. for 2 turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Counter Posture",
          "type": "Battle",
          "cost": "36.0",
          "description": "Counter physical attacks with a sword for (2/3/4/5) turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Assault",
          "type": "Battle",
          "cost": "34.0",
          "description": "Deal polearm damage to all foes. More potent if attacking from the back row.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Upending Strike",
          "type": "Battle",
          "cost": "35.0",
          "description": "Deal great sword damage to a foe 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Brand's Blade",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Deal massive sword damage to a foe. Lv 2: Increase potency. Lv 3: Further increase potency.",
          "unlock": "After beating Master of Power Ch.3",
          "unmasterable": true
        },
        {
          "name": "Peak Performance",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's attack skill potency when HP is at least 100%.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Phys. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Atk. by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Phys. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Def. by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Defiant Spirit",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character has an attribute-reducing effect, raise BP recovery by 1 at the start of turn.",
          "unlock": "",
          "unmasterable": false
        }
      ]
    },
    {
      "id": "dancer",
      "name": "Dancer",
      "weapons": "Fan/Dagger",
      "skills": [
        {
          "name": "Lion Dance",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise the Phys. Atk. of a single ally for (2/4/6/8) turns. Dance skill.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Wild Strike",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal fan damage to random foes 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Coney Caper",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise evasion of an ally for (2/4/6/8) turns. Dance skill.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Frosty Refrain",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal ice damage to a foe. (Song Skill)",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Peacock Strut",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise the Elem. Atk. of a single ally for (2/4/6/8) turns. Dance skill.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Porcupine Stomp",
          "type": "Battle",
          "cost": "6.0",
          "description": "Raise Elem. Def. of an ally for (2/4/6/8) turns. Dance skill.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Triple Arc",
          "type": "Battle",
          "cost": "27.0",
          "description": "Deal fan damage to a foe 3 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Sealticge's Seduction",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Extend the reach of an ally's specific skills to affect all for 2 turns. Dance skill. (Doesn't seem to get bonuses for dance skills) Lv 2: Extend duration by 1 turn. Lv 3: Further extend duration by 1 turn.",
          "unlock": "After beating Bestower of Power Ch.3",
          "unmasterable": true
        },
        {
          "name": "The Show Goes On",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character grants an attribute-raising effect, extend duration by 1 turn.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Extra JP",
          "type": "Support",
          "cost": "",
          "description": "Recieve additional JP at the end of battle (The effect is not cumulative).",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Boost Start",
          "type": "Support",
          "cost": "",
          "description": "At the start of battle, restore 1 BP.",
          "unlock": "",
          "unmasterable": false
        }
      ]
    },
    {
      "id": "merchant",
      "name": "Merchant",
      "weapons": "Spear/Bow",
      "skills": [
        {
          "name": "Deadly Thrust",
          "type": "Battle",
          "cost": "20.0",
          "description": "More easily land critical polearm hits on a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Rest",
          "type": "Battle",
          "cost": "0.0",
          "description": "Restore own HP/SP, and cure own status ailments.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Mystic Shot",
          "type": "Battle",
          "cost": "18.0",
          "description": "Deal bow damage to all foes, and restore SP equal to 2% of damage dealt to the entire front row.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Collect",
          "type": "Battle",
          "cost": "3.0",
          "description": "Collect leaves from a foe",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Piercing Thrust",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal critical polearm damage to a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Arrow of Fortune",
          "type": "Battle",
          "cost": "35.0",
          "description": "Deal great bow damage, and obtain JP based on damage dealt [2%]",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Donate BP",
          "type": "Battle",
          "cost": "5.0",
          "description": "Grant 1 BP to an ally",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Bifelgan's Bounty",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Deal non-elemental physical damage to a foe, and obtain leaves equal to the amount of damage dealt. Lv 2: Increase potency. Lv 3: Further increase potency.",
          "unlock": "After beating Bestower of Wealth Ch.3",
          "unmasterable": true
        },
        {
          "name": "Extra Leaves",
          "type": "Support",
          "cost": "",
          "description": "Recieve additional leaves at the end of battle (The effect is not cumulative).",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Phys. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Phys. Def. by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Elem. Def. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Borrow BP",
          "type": "Support",
          "cost": "",
          "description": "Borrow insufficient BP for Boost from paired back ally. Neither will restore BP next turn.",
          "unlock": "",
          "unmasterable": false
        }
      ]
    },
    {
      "id": "scholar",
      "name": "Scholar",
      "weapons": "Tome/Staff",
      "skills": [
        {
          "name": "Analyze",
          "type": "Battle",
          "cost": "1.0",
          "description": "Discover (1/2/3/6) weak point(s) of a foe and reveal HP.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Fireball",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal fire damage to all foes.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Tornado",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal wind damage to all foes.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Luminescence",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal light damage to all foes.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Firestorm",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal fire damage to all foes 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Maelstrom",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal wind damage to all foes 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Blinding Light",
          "type": "Battle",
          "cost": "33.0",
          "description": "Deal light damage to all foes 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Alephan's Enlightenment",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Reduce skill cost to 0 SP for all allies for 2 turns. Lv 2: Extend duration by 1 turn. Lv 3: Further extend duration by 1 turn.",
          "unlock": "After beating Master of All Ch.8",
          "unmasterable": true
        },
        {
          "name": "Study Foe",
          "type": "Support",
          "cost": "",
          "description": "At the start of battle, discover 1 weak point of each foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Elem. Atk. +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Atk. by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Lasting Memory",
          "type": "Support",
          "cost": "",
          "description": "Status effects are not removed when incapacitated.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Mystic Breath",
          "type": "Support",
          "cost": "",
          "description": "At the end of turn, raise the equipped character's Elem. Atk/Elem. Def. for 2 turns when in the back row.",
          "unlock": "",
          "unmasterable": false
        }
      ]
    },
    {
      "id": "cleric",
      "name": "Cleric",
      "weapons": "Staff/Fan",
      "skills": [
        {
          "name": "Heal Wounds",
          "type": "Battle",
          "cost": "12.0",
          "description": "Restore HP of the entire front row or entire back row.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Holy Light",
          "type": "Battle",
          "cost": "11.0",
          "description": "Deal light damage to a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Brain Bash",
          "type": "Battle",
          "cost": "18.0",
          "description": "Select a weapon and deal damage to a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Sacred Flame's Protection",
          "type": "Battle",
          "cost": "16.0",
          "description": "Grant an ally a small chance to prevent enemy attacks for (2/4/6/8) turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Light of Judgement",
          "type": "Battle",
          "cost": "22.0",
          "description": "Deal great light damage to a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Celestial Veil",
          "type": "Battle",
          "cost": "8.0",
          "description": "Grant an ally the ability to restore SP equal to 3% of damage taken for (2/4/6/8) turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Wonderous Veil",
          "type": "Battle",
          "cost": "30.0",
          "description": "Grant an effect that allows an ally to recover (25%/50%/75%/100%) of their max HP upon being incapacitated (one time only).",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Aelfric's Favor",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Restore HP and cure ailments of the entire front row or entire back row. Lv 2: Raise amount healed. Lv 3: Further raise amount healed.",
          "unlock": "After completing prologue",
          "unmasterable": true
        },
        {
          "name": "HP Recovery Up",
          "type": "Support",
          "cost": "",
          "description": "Raise the amount restored by the equipped character's HP recovery/HP regeneration skills.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Elem. Def +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Elem. Def. by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Encore",
          "type": "Support",
          "cost": "",
          "description": "Grant an effect that allows you to recover with 25% of your max HP upon being incapacitated (one time only).",
          "unlock": "",
          "unmasterable": false
        }
      ]
    },
    {
      "id": "thief",
      "name": "Thief",
      "weapons": "Dagger/Sword",
      "skills": [
        {
          "name": "Steal",
          "type": "Battle",
          "cost": "3.0",
          "description": "Steal an item from a single foe. Odds increase with BP spent.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "HP Thief",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal dagger damage to a foe 2 times, and steal HP equal to 50% of damage dealt.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Shadow Bind",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal dark damage to a foe, and lower Speed for 2 turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Level Slash",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal sword damage to all foes.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "SP Thief",
          "type": "Battle",
          "cost": "9.0",
          "description": "Deal dagger damage to a foe 2 times, and steal SP equal to 5% of damage dealt.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Master of Shadows",
          "type": "Battle",
          "cost": "8.0",
          "description": "Deal dark damage to a foe 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Tri-Edge",
          "type": "Battle",
          "cost": "27.0",
          "description": "Deal dagger damage to a foe 3 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Aeber's Artifice",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Lower Phys. Atk./Phys Def./Elem. Atk/Elem. Def. of a foe for 2 turns, and steal an item. Lv 2: Extend duration by 2 turns. Lv 3: Further extend duration by 2 turns.",
          "unlock": "After beating Master of Fame Ch. 3",
          "unmasterable": true
        },
        {
          "name": "Extended Enfeeblement",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character inflicts an attribute-reducing effect, extend duration by 1 turn.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Evasion +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Evasion by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Speed +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Speed by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Entrap",
          "type": "Support",
          "cost": "",
          "description": "When the equipped character takes physical damage, gain a 50% chance to inflict a random status-reducing effect on the foe.",
          "unlock": "",
          "unmasterable": false
        }
      ]
    },
    {
      "id": "hunter",
      "name": "Hunter",
      "weapons": "Bow/Axe",
      "skills": [
        {
          "name": "Stray Arrows",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal bow damage to random foes 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Boomerang Toss",
          "type": "Battle",
          "cost": "14.0",
          "description": "Deal axe damage to random foes 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Trade Tempest",
          "type": "Battle",
          "cost": "15.0",
          "description": "Deal wind damage to all foes.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Ensnare",
          "type": "Battle",
          "cost": "9.0",
          "description": "Cause a foe to act last for 2 turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "First Shot",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal bow damage to a foe. Next attack is guaranteed to be a critical hit. (bugged to not affect the first hit of the attack/skill)",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Rain of Arrows",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal bow damage to random foes 5 to 8 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Two-Tiered Shot",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal bow damage to a foe 2 times, then move to the back row. At the end of turn, deal special bow damage to a foe 2 times.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Draefendi's Rage",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Deal massive bow damage to all foes. Lv 2: Increase potency. Lv 3: Further increase potency.",
          "unlock": "After beating Master of Wealth Ch.3",
          "unmasterable": true
        },
        {
          "name": "Extra Experience",
          "type": "Support",
          "cost": "",
          "description": "Recieve additional EXP at the end of battle (The effect is not cumulative).",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Invigorating Break",
          "type": "Support",
          "cost": "",
          "description": "Restore the equipped character's HP when breaking a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Crit +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's Crit. by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Sniper",
          "type": "Support",
          "cost": "",
          "description": "At the end of turn, the equipped character will unleash a special attack with their equipped weapon when in the back row.",
          "unlock": "",
          "unmasterable": false
        }
      ]
    },
    {
      "id": "apothecary",
      "name": "Apothecary",
      "weapons": "Axe/Tome",
      "skills": [
        {
          "name": "First Aid",
          "type": "Battle",
          "cost": "6.0",
          "description": "Restore HP of an ally.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Amputation",
          "type": "Battle",
          "cost": "12.0",
          "description": "Deal axe damage to a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Enshroud",
          "type": "Battle",
          "cost": "9.0",
          "description": "Gain a chance [30%] to inflict blindness on a foe for (2/4/6/8) turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Rehabilitate",
          "type": "Battle",
          "cost": "15.0",
          "description": "Grant an ally immunity to status ailments for (2/4/6/8) turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Vivify",
          "type": "Battle",
          "cost": "24.0",
          "description": "Revive an ally.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Heal All",
          "type": "Battle",
          "cost": "15.0",
          "description": "Grant HP regeneration to the entire front row or entire back row for (3/5/7/9) turns.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Cross Cleave",
          "type": "Battle",
          "cost": "30.0",
          "description": "Deal great axe damage to a foe.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Dohter's Charity",
          "type": "Ultimate",
          "cost": "1000 per level",
          "description": "Extend the reach of an ally's items to affect all for 2 turns. Lv 2: Extend duration by 1 turn. Lv 3: Further extend duration by 1 turn.",
          "unlock": "After beating Bestower of Fame Ch.3",
          "unmasterable": true
        },
        {
          "name": "Resist Ailments",
          "type": "Support",
          "cost": "",
          "description": "Improve the equipped character's resistance to poison/bleeding/sleep/paralysis/blindness/silence/terror/weakness.",
          "unlock": "",
          "unmasterable": false
        },
        {
          "name": "Max. SP +50",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. SP by 50.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Max. HP +500",
          "type": "Support",
          "cost": "",
          "description": "Raise the equipped character's max. HP by 500.",
          "unlock": "",
          "unmasterable": true
        },
        {
          "name": "Inspiriting Break",
          "type": "Support",
          "cost": "",
          "description": "Restore the equipped character's SP when breaking a foe.",
          "unlock": "",
          "unmasterable": false
        }
      ]
    }
  ],
  "protagonist": {
    "id": "protagonist",
    "name": "Protagonist",
    "title": "Hero",
    "job": "Protagonist",
    "weapons": "Sword/Spear, Fan/Dagger, Spear/Bow, Tome/Staff, Staff/Fan, Dagger/Sword, Bow/Axe, Axe/Tome",
    "unlock": "Acts as the party's main character and can switch between the available protagonist jobs.",
    "skills": [
      {
        "name": "Cross Strike",
        "type": "Battle",
        "cost": "12.0",
        "description": "Deal sword damage to a foe",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Abide",
        "type": "Battle",
        "cost": "6.0",
        "description": "Raise your physical attack for (3/5/7/9) turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Spearhead",
        "type": "Battle",
        "cost": "9.0",
        "description": "Deal polearm damage to a foe. Act faster next turn.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Helmcleaver",
        "type": "Battle",
        "cost": "8.0",
        "description": "Deal sword damage to a foe, and lower Phys. Def. for 2 turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Counter Posture",
        "type": "Battle",
        "cost": "36.0",
        "description": "Counter physical attacks with a sword for (2/3/4/5) turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Assault",
        "type": "Battle",
        "cost": "34.0",
        "description": "Deal polearm damage to all foes. More potent if attacking from the back row.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Upending Strike",
        "type": "Battle",
        "cost": "35.0",
        "description": "Deal great sword damage to a foe 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Brand's Blade",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Deal massive sword damage to a foe. Lv 2: Increase potency. Lv 3: Further increase potency.",
        "unlock": "After beating Master of Power Ch.3",
        "unmasterable": true,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Peak Performance",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's attack skill potency when HP is at least 100%.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Phys. Atk. +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Phys. Atk. by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Phys. Def. +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Phys. Def. by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Defiant Spirit",
        "type": "Support",
        "cost": "",
        "description": "When the equipped character has an attribute-reducing effect, raise BP recovery by 1 at the start of turn.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Warrior",
        "sourceJobId": "warrior"
      },
      {
        "name": "Lion Dance",
        "type": "Battle",
        "cost": "6.0",
        "description": "Raise the Phys. Atk. of a single ally for (2/4/6/8) turns. Dance skill.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Wild Strike",
        "type": "Battle",
        "cost": "14.0",
        "description": "Deal fan damage to random foes 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Coney Caper",
        "type": "Battle",
        "cost": "6.0",
        "description": "Raise evasion of an ally for (2/4/6/8) turns. Dance skill.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Frosty Refrain",
        "type": "Battle",
        "cost": "11.0",
        "description": "Deal ice damage to a foe. (Song Skill)",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Peacock Strut",
        "type": "Battle",
        "cost": "6.0",
        "description": "Raise the Elem. Atk. of a single ally for (2/4/6/8) turns. Dance skill.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Porcupine Stomp",
        "type": "Battle",
        "cost": "6.0",
        "description": "Raise Elem. Def. of an ally for (2/4/6/8) turns. Dance skill.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Triple Arc",
        "type": "Battle",
        "cost": "27.0",
        "description": "Deal fan damage to a foe 3 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Sealticge's Seduction",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Extend the reach of an ally's specific skills to affect all for 2 turns. Dance skill. (Doesn't seem to get bonuses for dance skills) Lv 2: Extend duration by 1 turn. Lv 3: Further extend duration by 1 turn.",
        "unlock": "After beating Bestower of Power Ch.3",
        "unmasterable": true,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "The Show Goes On",
        "type": "Support",
        "cost": "",
        "description": "When the equipped character grants an attribute-raising effect, extend duration by 1 turn.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Extra JP",
        "type": "Support",
        "cost": "",
        "description": "Recieve additional JP at the end of battle (The effect is not cumulative).",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Speed +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Speed by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Boost Start",
        "type": "Support",
        "cost": "",
        "description": "At the start of battle, restore 1 BP.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Dancer",
        "sourceJobId": "dancer"
      },
      {
        "name": "Deadly Thrust",
        "type": "Battle",
        "cost": "20.0",
        "description": "More easily land critical polearm hits on a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Rest",
        "type": "Battle",
        "cost": "0.0",
        "description": "Restore own HP/SP, and cure own status ailments.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Mystic Shot",
        "type": "Battle",
        "cost": "18.0",
        "description": "Deal bow damage to all foes, and restore SP equal to 2% of damage dealt to the entire front row.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Collect",
        "type": "Battle",
        "cost": "3.0",
        "description": "Collect leaves from a foe",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Piercing Thrust",
        "type": "Battle",
        "cost": "30.0",
        "description": "Deal critical polearm damage to a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Arrow of Fortune",
        "type": "Battle",
        "cost": "35.0",
        "description": "Deal great bow damage, and obtain JP based on damage dealt [2%]",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Donate BP",
        "type": "Battle",
        "cost": "5.0",
        "description": "Grant 1 BP to an ally",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Bifelgan's Bounty",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Deal non-elemental physical damage to a foe, and obtain leaves equal to the amount of damage dealt. Lv 2: Increase potency. Lv 3: Further increase potency.",
        "unlock": "After beating Bestower of Wealth Ch.3",
        "unmasterable": true,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Extra Leaves",
        "type": "Support",
        "cost": "",
        "description": "Recieve additional leaves at the end of battle (The effect is not cumulative).",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Phys. Def. +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Phys. Def. by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Elem. Def. +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Elem. Def. by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Borrow BP",
        "type": "Support",
        "cost": "",
        "description": "Borrow insufficient BP for Boost from paired back ally. Neither will restore BP next turn.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Merchant",
        "sourceJobId": "merchant"
      },
      {
        "name": "Analyze",
        "type": "Battle",
        "cost": "1.0",
        "description": "Discover (1/2/3/6) weak point(s) of a foe and reveal HP.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Fireball",
        "type": "Battle",
        "cost": "12.0",
        "description": "Deal fire damage to all foes.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Tornado",
        "type": "Battle",
        "cost": "12.0",
        "description": "Deal wind damage to all foes.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Luminescence",
        "type": "Battle",
        "cost": "14.0",
        "description": "Deal light damage to all foes.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Firestorm",
        "type": "Battle",
        "cost": "33.0",
        "description": "Deal fire damage to all foes 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Maelstrom",
        "type": "Battle",
        "cost": "33.0",
        "description": "Deal wind damage to all foes 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Blinding Light",
        "type": "Battle",
        "cost": "33.0",
        "description": "Deal light damage to all foes 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Alephan's Enlightenment",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Reduce skill cost to 0 SP for all allies for 2 turns. Lv 2: Extend duration by 1 turn. Lv 3: Further extend duration by 1 turn.",
        "unlock": "After beating Master of All Ch.8",
        "unmasterable": true,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Study Foe",
        "type": "Support",
        "cost": "",
        "description": "At the start of battle, discover 1 weak point of each foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Elem. Atk. +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Elem. Atk. by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Lasting Memory",
        "type": "Support",
        "cost": "",
        "description": "Status effects are not removed when incapacitated.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Mystic Breath",
        "type": "Support",
        "cost": "",
        "description": "At the end of turn, raise the equipped character's Elem. Atk/Elem. Def. for 2 turns when in the back row.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Scholar",
        "sourceJobId": "scholar"
      },
      {
        "name": "Heal Wounds",
        "type": "Battle",
        "cost": "12.0",
        "description": "Restore HP of the entire front row or entire back row.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Holy Light",
        "type": "Battle",
        "cost": "11.0",
        "description": "Deal light damage to a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Brain Bash",
        "type": "Battle",
        "cost": "18.0",
        "description": "Select a weapon and deal damage to a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Sacred Flame's Protection",
        "type": "Battle",
        "cost": "16.0",
        "description": "Grant an ally a small chance to prevent enemy attacks for (2/4/6/8) turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Light of Judgement",
        "type": "Battle",
        "cost": "22.0",
        "description": "Deal great light damage to a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Celestial Veil",
        "type": "Battle",
        "cost": "8.0",
        "description": "Grant an ally the ability to restore SP equal to 3% of damage taken for (2/4/6/8) turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Wonderous Veil",
        "type": "Battle",
        "cost": "30.0",
        "description": "Grant an effect that allows an ally to recover (25%/50%/75%/100%) of their max HP upon being incapacitated (one time only).",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Aelfric's Favor",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Restore HP and cure ailments of the entire front row or entire back row. Lv 2: Raise amount healed. Lv 3: Further raise amount healed.",
        "unlock": "After completing prologue",
        "unmasterable": true,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "HP Recovery Up",
        "type": "Support",
        "cost": "",
        "description": "Raise the amount restored by the equipped character's HP recovery/HP regeneration skills.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Elem. Def +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Elem. Def. by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Max. SP +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's max. SP by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Encore",
        "type": "Support",
        "cost": "",
        "description": "Grant an effect that allows you to recover with 25% of your max HP upon being incapacitated (one time only).",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Cleric",
        "sourceJobId": "cleric"
      },
      {
        "name": "Steal",
        "type": "Battle",
        "cost": "3.0",
        "description": "Steal an item from a single foe. Odds increase with BP spent.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "HP Thief",
        "type": "Battle",
        "cost": "9.0",
        "description": "Deal dagger damage to a foe 2 times, and steal HP equal to 50% of damage dealt.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Shadow Bind",
        "type": "Battle",
        "cost": "8.0",
        "description": "Deal dark damage to a foe, and lower Speed for 2 turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Level Slash",
        "type": "Battle",
        "cost": "14.0",
        "description": "Deal sword damage to all foes.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "SP Thief",
        "type": "Battle",
        "cost": "9.0",
        "description": "Deal dagger damage to a foe 2 times, and steal SP equal to 5% of damage dealt.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Master of Shadows",
        "type": "Battle",
        "cost": "8.0",
        "description": "Deal dark damage to a foe 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Tri-Edge",
        "type": "Battle",
        "cost": "27.0",
        "description": "Deal dagger damage to a foe 3 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Aeber's Artifice",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Lower Phys. Atk./Phys Def./Elem. Atk/Elem. Def. of a foe for 2 turns, and steal an item. Lv 2: Extend duration by 2 turns. Lv 3: Further extend duration by 2 turns.",
        "unlock": "After beating Master of Fame Ch. 3",
        "unmasterable": true,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Extended Enfeeblement",
        "type": "Support",
        "cost": "",
        "description": "When the equipped character inflicts an attribute-reducing effect, extend duration by 1 turn.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Evasion +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Evasion by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Speed +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Speed by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Entrap",
        "type": "Support",
        "cost": "",
        "description": "When the equipped character takes physical damage, gain a 50% chance to inflict a random status-reducing effect on the foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Thief",
        "sourceJobId": "thief"
      },
      {
        "name": "Stray Arrows",
        "type": "Battle",
        "cost": "14.0",
        "description": "Deal bow damage to random foes 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Boomerang Toss",
        "type": "Battle",
        "cost": "14.0",
        "description": "Deal axe damage to random foes 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Trade Tempest",
        "type": "Battle",
        "cost": "15.0",
        "description": "Deal wind damage to all foes.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Ensnare",
        "type": "Battle",
        "cost": "9.0",
        "description": "Cause a foe to act last for 2 turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "First Shot",
        "type": "Battle",
        "cost": "30.0",
        "description": "Deal bow damage to a foe. Next attack is guaranteed to be a critical hit. (bugged to not affect the first hit of the attack/skill)",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Rain of Arrows",
        "type": "Battle",
        "cost": "12.0",
        "description": "Deal bow damage to random foes 5 to 8 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Two-Tiered Shot",
        "type": "Battle",
        "cost": "30.0",
        "description": "Deal bow damage to a foe 2 times, then move to the back row. At the end of turn, deal special bow damage to a foe 2 times.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Draefendi's Rage",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Deal massive bow damage to all foes. Lv 2: Increase potency. Lv 3: Further increase potency.",
        "unlock": "After beating Master of Wealth Ch.3",
        "unmasterable": true,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Extra Experience",
        "type": "Support",
        "cost": "",
        "description": "Recieve additional EXP at the end of battle (The effect is not cumulative).",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Invigorating Break",
        "type": "Support",
        "cost": "",
        "description": "Restore the equipped character's HP when breaking a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Crit +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's Crit. by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "Sniper",
        "type": "Support",
        "cost": "",
        "description": "At the end of turn, the equipped character will unleash a special attack with their equipped weapon when in the back row.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Hunter",
        "sourceJobId": "hunter"
      },
      {
        "name": "First Aid",
        "type": "Battle",
        "cost": "6.0",
        "description": "Restore HP of an ally.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Amputation",
        "type": "Battle",
        "cost": "12.0",
        "description": "Deal axe damage to a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Enshroud",
        "type": "Battle",
        "cost": "9.0",
        "description": "Gain a chance [30%] to inflict blindness on a foe for (2/4/6/8) turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Rehabilitate",
        "type": "Battle",
        "cost": "15.0",
        "description": "Grant an ally immunity to status ailments for (2/4/6/8) turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Vivify",
        "type": "Battle",
        "cost": "24.0",
        "description": "Revive an ally.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Heal All",
        "type": "Battle",
        "cost": "15.0",
        "description": "Grant HP regeneration to the entire front row or entire back row for (3/5/7/9) turns.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Cross Cleave",
        "type": "Battle",
        "cost": "30.0",
        "description": "Deal great axe damage to a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Dohter's Charity",
        "type": "Ultimate",
        "cost": "1000 per level",
        "description": "Extend the reach of an ally's items to affect all for 2 turns. Lv 2: Extend duration by 1 turn. Lv 3: Further extend duration by 1 turn.",
        "unlock": "After beating Bestower of Fame Ch.3",
        "unmasterable": true,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Resist Ailments",
        "type": "Support",
        "cost": "",
        "description": "Improve the equipped character's resistance to poison/bleeding/sleep/paralysis/blindness/silence/terror/weakness.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Max. SP +50",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's max. SP by 50.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Max. HP +500",
        "type": "Support",
        "cost": "",
        "description": "Raise the equipped character's max. HP by 500.",
        "unlock": "",
        "unmasterable": true,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      },
      {
        "name": "Inspiriting Break",
        "type": "Support",
        "cost": "",
        "description": "Restore the equipped character's SP when breaking a foe.",
        "unlock": "",
        "unmasterable": false,
        "sourceJob": "Apothecary",
        "sourceJobId": "apothecary"
      }
    ]
  },
  "sourceIndex": {
    "First Aid": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Chop Wood": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Battle"
      }
    ],
    "Full Swing": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Battle"
      }
    ],
    "Stroke of Genius": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Battle"
      }
    ],
    "Donate BP": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Share SP": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Battle"
      }
    ],
    "Greater Distribution": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Battle"
      }
    ],
    "Full Cheer": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Ultimate"
      }
    ],
    "Incidental Heal": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Support"
      }
    ],
    "Max. SP +50": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Elem. Def. +50": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Unsung Hero": [
      {
        "type": "character",
        "id": "stia",
        "label": "Stia - Architect",
        "href": "character.html#stia",
        "skillType": "Support"
      }
    ],
    "Repeated Shot": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Battle"
      }
    ],
    "Stout Wall": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Battle"
      }
    ],
    "Provoke": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Battle"
      }
    ],
    "Sweeping Gale": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Battle"
      }
    ],
    "Focus": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Battle"
      }
    ],
    "Twin Bash": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Battle"
      }
    ],
    "Avenging Triple Shot": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Battle"
      }
    ],
    "Shield of Hope": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Ultimate"
      }
    ],
    "Vigorous Victor": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Support"
      }
    ],
    "Phys. Def. +50": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Eye for an Eye": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Support"
      }
    ],
    "The Strength to Protect": [
      {
        "type": "character",
        "id": "phenn",
        "label": "Phenn - Hunter",
        "href": "character.html#phenn",
        "skillType": "Support"
      }
    ],
    "Healing Light": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Battle"
      }
    ],
    "Brain Bash": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Ethereal Healing": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Battle"
      }
    ],
    "Soporific Ice Fog": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Battle"
      }
    ],
    "Mystical Staff": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Battle"
      }
    ],
    "Moonlit Repose": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Battle"
      }
    ],
    "Wondrous Veil": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Battle"
      }
    ],
    "Maiden's Miracle": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Ultimate"
      }
    ],
    "HP Recovery Up": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Speed +50": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Encore": [
      {
        "type": "character",
        "id": "laurana",
        "label": "Laurana - Cleric",
        "href": "character.html#laurana",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Steal": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Reaping Slash": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Battle"
      }
    ],
    "Inhibit Offense": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Battle"
      }
    ],
    "Darkest Night": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Battle"
      }
    ],
    "Lower Defenses": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Battle"
      }
    ],
    "Shield Burst": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Battle"
      }
    ],
    "Triple Throw": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Battle"
      }
    ],
    "Pilfer": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Ultimate"
      }
    ],
    "Incidental Steal": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Support"
      }
    ],
    "Patience": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Support"
      }
    ],
    "The Ring's Grace": [
      {
        "type": "character",
        "id": "heidne",
        "label": "Heidne - Thief",
        "href": "character.html#heidne",
        "skillType": "Support"
      }
    ],
    "Goad": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Battle"
      }
    ],
    "Double Throw": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Battle"
      }
    ],
    "Divine Speed": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Battle"
      }
    ],
    "Wild Blade": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Battle"
      }
    ],
    "Sidestep": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Battle"
      }
    ],
    "Winding Throw": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Battle"
      }
    ],
    "Master of Evasion": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Ultimate"
      }
    ],
    "Evil Ward": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Support"
      }
    ],
    "Evasion +50": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Vim and Vigor": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Support"
      }
    ],
    "Detect Danger": [
      {
        "type": "character",
        "id": "celsus",
        "label": "Celsus - Thief",
        "href": "character.html#celsus",
        "skillType": "Support"
      }
    ],
    "Poisonous Touch": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Battle"
      }
    ],
    "Paralysis Formula": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Battle"
      }
    ],
    "Expert First Aid": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Battle"
      }
    ],
    "Rest": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Prism Mist": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Ultimate"
      }
    ],
    "Boon of Healing": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Support"
      }
    ],
    "Max HP +500": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Support"
      }
    ],
    "Healing Item Expertise": [
      {
        "type": "character",
        "id": "macy",
        "label": "Macy - Apothecary",
        "href": "character.html#macy",
        "skillType": "Support"
      }
    ],
    "Lightning Bolt": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Battle"
      }
    ],
    "Duskfall": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Battle"
      }
    ],
    "Elemental Bash": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Battle"
      }
    ],
    "Analyze": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Pray": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Battle"
      }
    ],
    "Lightning Blast": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Battle"
      }
    ],
    "Duskblight": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Battle"
      }
    ],
    "Ancient Magic": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Ultimate"
      }
    ],
    "Conserve Magic": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Support"
      }
    ],
    "Incidental Analysis": [
      {
        "type": "character",
        "id": "alexia",
        "label": "Alexia - Scholar",
        "href": "character.html#alexia",
        "skillType": "Support"
      }
    ],
    "Evasive Stance": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Battle"
      }
    ],
    "Vanguard Spear": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Battle"
      }
    ],
    "Charging Strike": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Battle"
      }
    ],
    "Parry": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Battle"
      }
    ],
    "Talon Strike": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Battle"
      }
    ],
    "Fluid Stance": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Ultimate"
      }
    ],
    "Elemental Counter": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Support"
      }
    ],
    "Phys. Atk. +50": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Foresight": [
      {
        "type": "character",
        "id": "viator",
        "label": "Viator - Warrior",
        "href": "character.html#viator",
        "skillType": "Support"
      }
    ],
    "Spearhead": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Appraisal": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Battle"
      }
    ],
    "Arm-Crippling Thrust": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Battle"
      }
    ],
    "Negotiation": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Battle"
      }
    ],
    "Leg-Crippling Thrust": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Battle"
      }
    ],
    "War Cry": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Battle"
      }
    ],
    "Crippling Thrust": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Battle"
      }
    ],
    "Enervating Thrust": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Ultimate"
      }
    ],
    "Extra Items": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Support"
      }
    ],
    "Invigorating Attack": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Support"
      }
    ],
    "Max. HP +500": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Fierce Rush": [
      {
        "type": "character",
        "id": "ludo",
        "label": "Ludo - Merchant",
        "href": "character.html#ludo",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Support"
      }
    ],
    "Cleansing Fire": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Battle"
      }
    ],
    "Stalwart Veil": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Battle"
      }
    ],
    "Heal Wounds": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Wild Strike": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Sweep": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Battle"
      }
    ],
    "Flames of Judgment": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Battle"
      }
    ],
    "Sacred Shield": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Battle"
      }
    ],
    "Scales of Justice": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Ultimate"
      }
    ],
    "Back Row Support": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Support"
      }
    ],
    "Recover SP": [
      {
        "type": "character",
        "id": "pius",
        "label": "Pius - Cleric",
        "href": "character.html#pius",
        "skillType": "Support"
      }
    ],
    "Mole Dance": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Battle"
      }
    ],
    "Dance of Repose": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Battle"
      }
    ],
    "Song of Winds": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Battle"
      }
    ],
    "Panther Dance": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Battle"
      }
    ],
    "Song of Slumber": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Battle"
      }
    ],
    "Song of Howling Winds": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Battle"
      }
    ],
    "Dance of Respite": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Battle"
      }
    ],
    "Ruinous Aria": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Ultimate"
      }
    ],
    "Invigorate": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Support"
      }
    ],
    "Back Row Dancer": [
      {
        "type": "character",
        "id": "saoirse",
        "label": "Saoirse - Dancer",
        "href": "character.html#saoirse",
        "skillType": "Support"
      }
    ],
    "Penetrating Thrust": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Battle"
      }
    ],
    "Recuperate": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Battle"
      }
    ],
    "Trade Blizzard": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Battle"
      }
    ],
    "Arrow of Fortune": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Immobilizing Shot": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Battle"
      }
    ],
    "Soaring Javelin": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Battle"
      }
    ],
    "Mystic Shot": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Trick of the Trade": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Ultimate"
      }
    ],
    "Blessing of Restoration": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Support"
      }
    ],
    "Iron Will": [
      {
        "type": "character",
        "id": "carinda",
        "label": "Carinda - Merchant",
        "href": "character.html#carinda",
        "skillType": "Support"
      }
    ],
    "Icewind": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Battle"
      }
    ],
    "Tornado": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Blizzard": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Battle"
      }
    ],
    "Maelstrom": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Soulstone's Might": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Ultimate"
      }
    ],
    "Soulstone Expertise": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Support"
      }
    ],
    "Elem. Atk. +50": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "SP Luck": [
      {
        "type": "character",
        "id": "xerc",
        "label": "Xerc - Scholar",
        "href": "character.html#xerc",
        "skillType": "Support"
      }
    ],
    "Twofold Slash": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Battle"
      }
    ],
    "Hilt Strike": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Battle"
      }
    ],
    "Master of Shadows": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Double Thrust": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Battle"
      }
    ],
    "Vengeful Blade": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Battle"
      }
    ],
    "Judicious Blade": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Battle"
      }
    ],
    "Stormblade": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Battle"
      }
    ],
    "Lotus Blade": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Ultimate"
      }
    ],
    "BP Luck": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Support"
      }
    ],
    "Battle Refinement": [
      {
        "type": "character",
        "id": "reime",
        "label": "Reime - Warrior",
        "href": "character.html#reime",
        "skillType": "Support"
      }
    ],
    "Piercing Shadow": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Battle"
      }
    ],
    "Stray Arrows": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Retreating Shot": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Battle"
      }
    ],
    "Mind Sap": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Battle"
      }
    ],
    "Ice Boulder": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Battle"
      }
    ],
    "Devastating Shot": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Battle"
      }
    ],
    "Gift of the Aqeeq": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Ultimate"
      }
    ],
    "Fortitude": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Support"
      }
    ],
    "Extended Enfeeblement": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Exacerbate": [
      {
        "type": "character",
        "id": "delitia",
        "label": "Delitia - Hunter",
        "href": "character.html#delitia",
        "skillType": "Support"
      }
    ],
    "Recuperating Smash": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Battle"
      }
    ],
    "Healing Touch": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Battle"
      }
    ],
    "Thunderclap": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Battle"
      }
    ],
    "Toxify": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Battle"
      }
    ],
    "Arcane Tome": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Battle"
      }
    ],
    "Vivify": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Weak to Poison": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Battle"
      }
    ],
    "Art of Healing": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Ultimate"
      }
    ],
    "Prolonged Ailment": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Support"
      }
    ],
    "Reciprocate": [
      {
        "type": "character",
        "id": "esperre",
        "label": "Esperre - Apothecary",
        "href": "character.html#esperre",
        "skillType": "Support"
      }
    ],
    "Dance of Mist": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Battle"
      }
    ],
    "Storm's Refrain": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Battle"
      }
    ],
    "Song of Battle": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Battle"
      }
    ],
    "Double Arc": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Battle"
      }
    ],
    "Levin's Refrain": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Battle"
      }
    ],
    "Thunder's Refrain": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Battle"
      }
    ],
    "Dance of Sloughs": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Battle"
      }
    ],
    "Song of Levin": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Ultimate"
      }
    ],
    "Hang Tough": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Support"
      }
    ],
    "Vast Energy": [
      {
        "type": "character",
        "id": "goodwin",
        "label": "Goodwin - Dancer",
        "href": "character.html#goodwin",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Support"
      }
    ],
    "Level Slash": [
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Abide": [
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Cross Strike": [
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Wild Thrust": [
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Battle"
      }
    ],
    "Unbending Blade": [
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Ultimate"
      }
    ],
    "Cover": [
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Support"
      }
    ],
    "Surpassing Power": [
      {
        "type": "character",
        "id": "olberic",
        "label": "Olberic - Warrior",
        "href": "character.html#olberic",
        "skillType": "Support"
      }
    ],
    "Collect": [
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Tradewinds": [
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Battle"
      }
    ],
    "Trade Tempest": [
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Peerless Strike": [
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Battle"
      }
    ],
    "Call for Help": [
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Ultimate"
      }
    ],
    "Extra Leaves": [
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "SP Saver": [
      {
        "type": "character",
        "id": "tressa",
        "label": "Tressa - Merchant",
        "href": "character.html#tressa",
        "skillType": "Support"
      }
    ],
    "Wildfire": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Battle"
      }
    ],
    "HP Thief": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Shackle Foe": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Battle"
      }
    ],
    "Armor Corrosive": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Battle"
      }
    ],
    "SP Thief": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Assassination": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Battle"
      }
    ],
    "BP Thief": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Ultimate"
      }
    ],
    "Incidental Attack": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Support"
      }
    ],
    "Snatch": [
      {
        "type": "character",
        "id": "therion",
        "label": "Therion - Thief",
        "href": "character.html#therion",
        "skillType": "Support"
      }
    ],
    "Icicle": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Battle"
      }
    ],
    "Rehabilitate": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Amputation": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Empoison": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Battle"
      }
    ],
    "Vigorous Strike": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Battle"
      }
    ],
    "Pomegranate Panacea": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Ultimate"
      }
    ],
    "Resist Ailments": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Heightened Healing": [
      {
        "type": "character",
        "id": "alfyn",
        "label": "Alfyn - Apothecary",
        "href": "character.html#alfyn",
        "skillType": "Support"
      }
    ],
    "Rain of Arrows": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Summon Linde": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Battle"
      }
    ],
    "Thunderbird": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Battle"
      }
    ],
    "True Strike": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Battle"
      }
    ],
    "Ensnare": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Arrowstorm": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Battle"
      }
    ],
    "Take Aim": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Battle"
      }
    ],
    "Hunter's Drive": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Ultimate"
      }
    ],
    "Second Serving": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Support"
      }
    ],
    "Crit. +50": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Support"
      }
    ],
    "Accuracy +50": [
      {
        "type": "character",
        "id": "h-aanit",
        "label": "H'aanit - Hunter",
        "href": "character.html#h-aanit",
        "skillType": "Support"
      }
    ],
    "Holy Light": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Sheltering Veil": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Battle"
      }
    ],
    "Luminescence": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Heal More": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Battle"
      }
    ],
    "Revive": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Battle"
      }
    ],
    "Divine Protection": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Ultimate"
      }
    ],
    "Extra JP": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Persistence": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Support"
      }
    ],
    "Saving Grace": [
      {
        "type": "character",
        "id": "ophilia",
        "label": "Ophilia - Cleric",
        "href": "character.html#ophilia",
        "skillType": "Support"
      }
    ],
    "Fireball": [
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Fire Storm": [
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Battle"
      }
    ],
    "Grand Trinity": [
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Ultimate"
      }
    ],
    "Study Foe": [
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Rechant": [
      {
        "type": "character",
        "id": "cyrus",
        "label": "Cyrus - Scholar",
        "href": "character.html#cyrus",
        "skillType": "Support"
      }
    ],
    "Lion Dance": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Moonlight Waltz": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Battle"
      }
    ],
    "Peacock Strut": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Night Ode": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Battle"
      }
    ],
    "Song of Lunar Shadow": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Battle"
      }
    ],
    "Twilight Waltz": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Ultimate"
      }
    ],
    "Second Wind": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Support"
      }
    ],
    "The Show Goes On": [
      {
        "type": "character",
        "id": "primrose",
        "label": "Primrose - Dancer",
        "href": "character.html#primrose",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Double Edge": [
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Battle"
      }
    ],
    "Tri-Edge": [
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Mafioso": [
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Battle"
      }
    ],
    "Frenzied Rampage": [
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Battle"
      }
    ],
    "For the Family": [
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Ultimate"
      }
    ],
    "A Step Ahead": [
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Support"
      }
    ],
    "Unbridled Courage": [
      {
        "type": "character",
        "id": "bargello",
        "label": "Bargello - Lord",
        "href": "character.html#bargello",
        "skillType": "Support"
      }
    ],
    "Invoke Sacred Flame": [
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Battle"
      }
    ],
    "Gospel of Attrition": [
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Battle"
      }
    ],
    "Radiant Light": [
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Battle"
      }
    ],
    "Light of Judgment": [
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Battle"
      }
    ],
    "Prayer for Tomorow": [
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Ultimate"
      }
    ],
    "Encourage": [
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Support"
      }
    ],
    "Purification": [
      {
        "type": "character",
        "id": "alaune",
        "label": "Alaune - Queen",
        "href": "character.html#alaune",
        "skillType": "Support"
      }
    ],
    "Vanguard Steel": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Battle"
      }
    ],
    "Defensive Command": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Battle"
      }
    ],
    "Thunderbeast": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Battle"
      }
    ],
    "Evasion Command": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Battle"
      }
    ],
    "Aggressive Slash": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Battle"
      }
    ],
    "Bolster": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Battle"
      }
    ],
    "Stunning Strike": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Battle"
      }
    ],
    "Take Command": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Ultimate"
      }
    ],
    "High Morale": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Support"
      }
    ],
    "Invigorate and Inspire": [
      {
        "type": "character",
        "id": "richard",
        "label": "Richard - King",
        "href": "character.html#richard",
        "skillType": "Support"
      }
    ],
    "Analyze All": [
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Battle"
      }
    ],
    "Vacuum Slice": [
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Battle"
      }
    ],
    "Gospel of Debilitation": [
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Battle"
      }
    ],
    "Hawk of Orsterra": [
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Ultimate"
      }
    ],
    "Narrow Escape": [
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Support"
      }
    ],
    "Of Equal Might": [
      {
        "type": "character",
        "id": "solon",
        "label": "Solon - Wise King",
        "href": "character.html#solon",
        "skillType": "Support"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Support"
      }
    ],
    "Offensive Maneuver": [
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Battle"
      }
    ],
    "Double Shot": [
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Battle"
      }
    ],
    "Defensive Maneuver": [
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Battle"
      }
    ],
    "Sublime Slash": [
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Battle"
      }
    ],
    "Lofty Rampart": [
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Ultimate"
      }
    ],
    "Back Row Protection": [
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Support"
      }
    ],
    "Stalwart Stance": [
      {
        "type": "character",
        "id": "eltrix",
        "label": "Eltrix - Captain",
        "href": "character.html#eltrix",
        "skillType": "Support"
      }
    ],
    "Divine Light": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Battle"
      }
    ],
    "Focus Energy": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Battle"
      }
    ],
    "Smashing Strike": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Battle"
      }
    ],
    "Sacred Flame's Blessing": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Battle"
      }
    ],
    "Holy Flame": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Battle"
      }
    ],
    "Sword of the Sacred Flame": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Ultimate"
      }
    ],
    "BP in Adversity": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Support"
      }
    ],
    "Augmented Break": [
      {
        "type": "character",
        "id": "rondo",
        "label": "Rondo - Knight Ardante",
        "href": "character.html#rondo",
        "skillType": "Support"
      }
    ],
    "Almighty": [
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Battle"
      },
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Battle"
      }
    ],
    "Trifold Slash": [
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Battle"
      }
    ],
    "Holy Sword": [
      {
        "type": "character",
        "id": "el",
        "label": "El - Warrior",
        "href": "character.html#el",
        "skillType": "Ultimate"
      }
    ],
    "Great Winds": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Battle"
      }
    ],
    "Disintegrating Dance": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Battle"
      }
    ],
    "Dark Panther Dance": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Battle"
      }
    ],
    "Wild Blow": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Battle"
      }
    ],
    "Beguiling Dance": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Battle"
      }
    ],
    "Captivating Step": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Battle"
      }
    ],
    "Royal Feast": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Ultimate"
      }
    ],
    "Salt the Wound": [
      {
        "type": "character",
        "id": "tatloch",
        "label": "Tatloch - Empress",
        "href": "character.html#tatloch",
        "skillType": "Support"
      }
    ],
    "Sacred Flame's Grace": [
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Battle"
      }
    ],
    "Transcendent Light": [
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Battle"
      }
    ],
    "Divine Flame": [
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Battle"
      }
    ],
    "Phantom Strike": [
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Battle"
      }
    ],
    "Shadowcleaver": [
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Ultimate"
      }
    ],
    "Master of Offense": [
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Support"
      }
    ],
    "BP Recovery on Break": [
      {
        "type": "character",
        "id": "sazantos",
        "label": "Sazantos - Flamebringer",
        "href": "character.html#sazantos",
        "skillType": "Support"
      }
    ],
    "Double Slap": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Battle"
      }
    ],
    "Arcane Meteor": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Battle"
      }
    ],
    "Fleeting Feline": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Battle"
      }
    ],
    "Purr-omote": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Battle"
      }
    ],
    "Curl Up": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Battle"
      }
    ],
    "Triple Slap": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Battle"
      }
    ],
    "Arcane Comet": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Battle"
      }
    ],
    "Ulti-meow": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Ultimate"
      }
    ],
    "Sage's Wisdom": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Support"
      }
    ],
    "Sheer Focus": [
      {
        "type": "character",
        "id": "isla",
        "label": "Isla - Cait Scholar",
        "href": "character.html#isla",
        "skillType": "Support"
      }
    ],
    "Helmcleaver": [
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Counter Posture": [
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Assault": [
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Upending Strike": [
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Brand's Blade": [
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Peak Performance": [
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Defiant Spirit": [
      {
        "type": "job",
        "id": "warrior",
        "label": "Warrior",
        "href": "character.html#job-warrior",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Warrior",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Coney Caper": [
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Frosty Refrain": [
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Porcupine Stomp": [
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Triple Arc": [
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Sealticge's Seduction": [
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Boost Start": [
      {
        "type": "job",
        "id": "dancer",
        "label": "Dancer",
        "href": "character.html#job-dancer",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Dancer",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Deadly Thrust": [
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Piercing Thrust": [
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Bifelgan's Bounty": [
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Borrow BP": [
      {
        "type": "job",
        "id": "merchant",
        "label": "Merchant",
        "href": "character.html#job-merchant",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Merchant",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Firestorm": [
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Blinding Light": [
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Alephan's Enlightenment": [
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Lasting Memory": [
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Mystic Breath": [
      {
        "type": "job",
        "id": "scholar",
        "label": "Scholar",
        "href": "character.html#job-scholar",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Scholar",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Sacred Flame's Protection": [
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Light of Judgement": [
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Celestial Veil": [
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Wonderous Veil": [
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Aelfric's Favor": [
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Elem. Def +50": [
      {
        "type": "job",
        "id": "cleric",
        "label": "Cleric",
        "href": "character.html#job-cleric",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Cleric",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Shadow Bind": [
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Aeber's Artifice": [
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Entrap": [
      {
        "type": "job",
        "id": "thief",
        "label": "Thief",
        "href": "character.html#job-thief",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Thief",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Boomerang Toss": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "First Shot": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Two-Tiered Shot": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Draefendi's Rage": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Extra Experience": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Invigorating Break": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Crit +50": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Sniper": [
      {
        "type": "job",
        "id": "hunter",
        "label": "Hunter",
        "href": "character.html#job-hunter",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Hunter",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ],
    "Enshroud": [
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Heal All": [
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Cross Cleave": [
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Battle"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Battle"
      }
    ],
    "Dohter's Charity": [
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Ultimate"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Ultimate"
      }
    ],
    "Inspiriting Break": [
      {
        "type": "job",
        "id": "apothecary",
        "label": "Apothecary",
        "href": "character.html#job-apothecary",
        "skillType": "Support"
      },
      {
        "type": "job",
        "id": "protagonist",
        "label": "Protagonist - Apothecary",
        "href": "character.html#protagonist",
        "skillType": "Support"
      }
    ]
  }
};
const characterSourceIndex = characterData.sourceIndex;
