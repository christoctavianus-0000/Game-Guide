const enemyData = [
  {
    "id": "32344.0",
    "name": "Shambling Weed",
    "area": "Woodlands",
    "subArea": "Wishvale Trail",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Fire",
      "Thunder",
      "Dark"
    ],
    "level": 1,
    "hp": 145,
    "patk": 104,
    "pdef": 24,
    "matk": 69,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Lash",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      }
    ],
    "steal": "Beast Horn, Rusty Coin, Shiny Coin",
    "drop": "Antidote Herb (M)",
    "immunities": "None"
  },
  {
    "id": "32334.0",
    "name": "Scaled Viper",
    "area": "Woodlands",
    "subArea": "Wishvale Trail",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 1,
    "hp": 153,
    "patk": 104,
    "pdef": 24,
    "matk": 69,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Constrict",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (L)",
    "drop": "Hydra Scale, Kraken Ink",
    "immunities": "None"
  },
  {
    "id": "32343.0",
    "name": "Marmot",
    "area": "Woodlands",
    "subArea": "Wishvale Trail",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 1,
    "hp": 142,
    "patk": 104,
    "pdef": 24,
    "matk": 69,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      }
    ],
    "steal": "Beast Claw, Rusty Coin, Basilisk Eye",
    "drop": "Gold",
    "immunities": "Paralysis, Confusion"
  },
  {
    "id": "32347.0",
    "name": "Howler",
    "area": "Woodlands",
    "subArea": "Cerulean Caverns",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 2,
    "hp": 146,
    "patk": 114,
    "pdef": 18,
    "matk": 114,
    "mdef": 18,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Tusk, Holy Water",
    "drop": "Beast Fang, Olive of Life (M), Gold Dust",
    "immunities": "Paralysis"
  },
  {
    "id": "32393.0",
    "name": "White Bat",
    "area": "Woodlands",
    "subArea": "Cerulean Caverns",
    "type": "Regular",
    "shields": 2,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 2,
    "hp": 142,
    "patk": 114,
    "pdef": 18,
    "matk": 76,
    "mdef": 18,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Flap",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb, Hydra Scale",
    "drop": "Olive of Life (M)",
    "immunities": "Confusion, Poison"
  },
  {
    "id": "32345.0",
    "name": "Wolf",
    "area": "Woodlands",
    "subArea": "Cerulean Caverns",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 2,
    "hp": 137,
    "patk": 114,
    "pdef": 18,
    "matk": 76,
    "mdef": 18,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Howl",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (L), Beast Hide, Rare Beast Fang",
    "drop": "Basilisk Eye, Shiny Coin, Rare Beast Fang",
    "immunities": "Paralysis"
  },
  {
    "id": "98602.0",
    "name": "Scarlet Wing",
    "area": "Woodlands",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Staff",
      "Light"
    ],
    "level": 3,
    "hp": 500,
    "patk": 120,
    "pdef": 70,
    "matk": 119,
    "mdef": 70,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Healing Grape",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam",
    "drop": "Quality Beast Claw, Shiny Coin, Moonstone",
    "immunities": "None"
  },
  {
    "id": "32353.0",
    "name": "Majestic Marmot",
    "area": "Woodlands",
    "subArea": "Valore Trail",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 4,
    "hp": 187,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      }
    ],
    "steal": "Nut",
    "drop": "Quality Beast Horn",
    "immunities": "Stun"
  },
  {
    "id": "32355.0",
    "name": "Spud Bug",
    "area": "Woodlands",
    "subArea": "Valore Trail",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 4,
    "hp": 205,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Curl Up",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb (L), Rare Beast Fang, Quality Beast Meat",
    "drop": "Old Coin",
    "immunities": "Petrification"
  },
  {
    "id": "32354.0",
    "name": "Mossy Meep",
    "area": "Woodlands",
    "subArea": "Valore Trail",
    "type": "Regular",
    "shields": 2,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 4,
    "hp": 194,
    "patk": 134,
    "pdef": 19,
    "matk": 134,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Eat Mushroom",
        "type": "Unknown"
      }
    ],
    "steal": "Copper Ore, Basilisk Eye, Rusty Coin",
    "drop": "Sphinx Feather, Gold, Phoenix Feather",
    "immunities": "None"
  },
  {
    "id": "32349.0",
    "name": "Forest Ratkin I",
    "area": "Woodlands",
    "subArea": "Valore Trail",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Thunder",
      "Light"
    ],
    "level": 4,
    "hp": 182,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Shot",
        "type": "Phys"
      },
      {
        "name": "Dual Shot",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L)",
    "drop": "Sphinx Feather, Beast Tusk",
    "immunities": "Blind"
  },
  {
    "id": "32383.0",
    "name": "Ice Lizardman I",
    "area": "Frostlands",
    "subArea": "Emberglow Wilds",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 4,
    "hp": 208,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Double Stab",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive (L)",
    "drop": "Holy Water, Olive of Life (M), Holy Water (M)",
    "immunities": "Paralysis"
  },
  {
    "id": "32382.0",
    "name": "Ash Raven",
    "area": "Frostlands",
    "subArea": "Emberglow Wilds",
    "type": "Regular",
    "shields": 2,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 4,
    "hp": 200,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Updraft",
        "type": "Unknown"
      }
    ],
    "steal": "Sunshard",
    "drop": "Rare Beast Tusk",
    "immunities": "None"
  },
  {
    "id": "32379.0",
    "name": "Snow Marmot",
    "area": "Frostlands",
    "subArea": "Emberglow Wilds",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Thunder",
      "Wind"
    ],
    "level": 4,
    "hp": 182,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Sling Mud",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (L), SP-Restoring Nut (M)",
    "drop": "Quality Beast Tusk",
    "immunities": "Petrification"
  },
  {
    "id": "32380.0",
    "name": "White Howler",
    "area": "Frostlands",
    "subArea": "Emberglow Wilds",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Fire",
      "Thunder",
      "Dark"
    ],
    "level": 4,
    "hp": 190,
    "patk": 134,
    "pdef": 19,
    "matk": 134,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Stormbound",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Claw, Blessed Olive (L), Healing Grape",
    "drop": "Leaf",
    "immunities": "None"
  },
  {
    "id": "32304.0",
    "name": "Night Raven",
    "area": "Flatlands",
    "subArea": "Theatropolis Plains",
    "type": "Regular",
    "shields": 2,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Thunder",
      "Light"
    ],
    "level": 4,
    "hp": 184,
    "patk": 134,
    "pdef": 19,
    "matk": 100,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Claw",
        "type": "Phys"
      },
      {
        "name": "Intimidate",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Horn",
    "drop": "Rare Beast Hide, Leaf, Star Fragment",
    "immunities": "Poison, Paralysis"
  },
  {
    "id": "32306.0",
    "name": "Shaggy Meep",
    "area": "Flatlands",
    "subArea": "Theatropolis Plains",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 4,
    "hp": 182,
    "patk": 134,
    "pdef": 19,
    "matk": 100,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Eat Mushroom",
        "type": "Unknown"
      }
    ],
    "steal": "Lightning Soulstone, Holy Water (M), Inspiring Plum Basket",
    "drop": "Gold",
    "immunities": "Confusion"
  },
  {
    "id": "32307.0",
    "name": "Wanderweed",
    "area": "Flatlands",
    "subArea": "Theatropolis Plains",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fan",
      "Fire",
      "Thunder"
    ],
    "level": 4,
    "hp": 199,
    "patk": 134,
    "pdef": 19,
    "matk": 100,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Roll Attack",
        "type": "Phys"
      },
      {
        "name": "Photosynthesis",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life (M), Sunshard",
    "drop": "EXP, Holy Water (L)",
    "immunities": "Sleep, Paralysis"
  },
  {
    "id": "32300.0",
    "name": "Flatlands Froggen I",
    "area": "Flatlands",
    "subArea": "Theatropolis Plains",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 4,
    "hp": 182,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 17,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Double Stab",
        "type": "Phys"
      }
    ],
    "steal": "Gold Dust",
    "drop": "HP-Restoring Herb, EXP",
    "immunities": "None"
  },
  {
    "id": "32301.0",
    "name": "Flatlands Froggen II",
    "area": "Flatlands",
    "subArea": "Theatropolis Plains",
    "type": "Regular",
    "shields": 2,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 4,
    "hp": 208,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 17,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      }
    ],
    "steal": "Star Fragment, Manticore Stinger, Revitalizing Jam (L)",
    "drop": "Inspiring Plum Basket",
    "immunities": "Silence"
  },
  {
    "id": "32302.0",
    "name": "Meep",
    "area": "Flatlands",
    "subArea": "Theatropolis Plains",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 4,
    "hp": 186,
    "patk": 134,
    "pdef": 19,
    "matk": 134,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Eat Mushroom",
        "type": "Unknown"
      }
    ],
    "steal": "Shadow Soulstone",
    "drop": "Grape, Beast Tusk",
    "immunities": "None"
  },
  {
    "id": "32303.0",
    "name": "Aggressive Ant",
    "area": "Flatlands",
    "subArea": "Theatropolis Plains",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 4,
    "hp": 198,
    "patk": 134,
    "pdef": 19,
    "matk": 89,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "Minotaur Horn",
    "immunities": "None"
  },
  {
    "id": "32384.0",
    "name": "Ice Lizardman II",
    "area": "Frostlands",
    "subArea": "Snowshard Grotto",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 5,
    "hp": 218,
    "patk": 144,
    "pdef": 19,
    "matk": 96,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Wild Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Kraken Ink, Antidote Herb (L)",
    "drop": "SP-Restoring Nut (L), Shiny Coin",
    "immunities": "Poison"
  },
  {
    "id": "32389.0",
    "name": "Snow Lizard",
    "area": "Frostlands",
    "subArea": "Snowshard Grotto",
    "type": "Regular",
    "shields": 2,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Fire",
      "Dark"
    ],
    "level": 5,
    "hp": 205,
    "patk": 144,
    "pdef": 19,
    "matk": 96,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Numbing Thorn Storm",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk",
    "drop": "Phoenix Feather, Antidote Herb (L), Manticore Stinger",
    "immunities": "None"
  },
  {
    "id": "32390.0",
    "name": "Majestic Snow Marmot",
    "area": "Frostlands",
    "subArea": "Snowshard Grotto",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Fire",
      "Thunder",
      "Wind"
    ],
    "level": 5,
    "hp": 209,
    "patk": 144,
    "pdef": 19,
    "matk": 96,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "These Nuts",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Light Soulstone",
    "drop": "Revitalizing Jam (L), Herb, Rare Beast Hide",
    "immunities": "Blind"
  },
  {
    "id": "32388.0",
    "name": "Frostwing Serpent",
    "area": "Frostlands",
    "subArea": "Snowshard Grotto",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Tome",
      "Thunder"
    ],
    "level": 5,
    "hp": 198,
    "patk": 144,
    "pdef": 19,
    "matk": 144,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Whiteout",
        "type": "Elem"
      },
      {
        "name": "Double Claw",
        "type": "Phys"
      }
    ],
    "steal": "Shadow Soulstone, Healing Grape Bunch",
    "drop": "Manticore Stinger, Healing Grape Bunch",
    "immunities": "Silence"
  },
  {
    "id": "32337.0",
    "name": "Wind Wisp",
    "area": "Flatlands",
    "subArea": "Serpent's Burrow",
    "type": "Regular",
    "shields": 2,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fire",
      "Thunder",
      "Dark"
    ],
    "level": 6,
    "hp": 220,
    "patk": 103,
    "pdef": 17,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Gale Strike",
        "type": "Elem"
      },
      {
        "name": "Repeated Gale Strike",
        "type": "Elem"
      },
      {
        "name": "Mighty Gale",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Horn",
    "drop": "Beast Horn",
    "immunities": "Petrification, Blind"
  },
  {
    "id": "32336.0",
    "name": "Red Viper",
    "area": "Flatlands",
    "subArea": "Serpent's Burrow",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Bow",
      "Ice",
      "Thunder"
    ],
    "level": 6,
    "hp": 215,
    "patk": 132,
    "pdef": 17,
    "matk": 109,
    "mdef": 17,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Venomous Fang",
        "type": "Phys"
      }
    ],
    "steal": "Fire Soulstone, Ancient Coin",
    "drop": "Quality Beast Claw, Sphinx Feather, Rusty Coin",
    "immunities": "Curse"
  },
  {
    "id": "98757.0",
    "name": "Ettin Serpent",
    "area": "Flatlands",
    "subArea": "Serpent's Burrow",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire"
    ],
    "level": 6,
    "hp": 752,
    "patk": 177,
    "pdef": 20,
    "matk": 177,
    "mdef": 23,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Fang",
        "type": "Phys"
      },
      {
        "name": "Mass Venomous Fang",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (M), Wind Soulstone, Rare Beast Hide",
    "drop": "Beast Meat, SP-Restoring Nut",
    "immunities": "Paralysis, Confusion"
  },
  {
    "id": "32335.0",
    "name": "Venomous Viper",
    "area": "Flatlands",
    "subArea": "Serpent's Burrow",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 6,
    "hp": 239,
    "patk": 132,
    "pdef": 20,
    "matk": 103,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Constrict",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Inspiring Plum Basket",
    "drop": "Old Coin, Beast Horn, Minotaur Horn",
    "immunities": "Curse"
  },
  {
    "id": "32308.0",
    "name": "Flatlands Froggen III",
    "area": "Flatlands",
    "subArea": "Serpent's Burrow",
    "type": "Regular",
    "shields": 2,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Ice"
    ],
    "level": 6,
    "hp": 252,
    "patk": 132,
    "pdef": 20,
    "matk": 103,
    "mdef": 17,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Double Stab",
        "type": "Phys"
      }
    ],
    "steal": "Beast Horn",
    "drop": "Dragon Scale, Rare Beast Hide, Moonstone",
    "immunities": "Paralysis"
  },
  {
    "id": "32357.0",
    "name": "Gabbrodillo",
    "area": "Woodlands",
    "subArea": "Path to Herminia's Manse",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 6,
    "hp": 233,
    "patk": 132,
    "pdef": 23,
    "matk": 103,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Whirling Attack",
        "type": "Phys"
      },
      {
        "name": "Curl Up",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Horn",
    "drop": "Plum, Grape, Soulstone",
    "immunities": "Sleep, Curse"
  },
  {
    "id": "32323.0",
    "name": "Sentinel Mk.II",
    "area": "Woodlands",
    "subArea": "Path to Herminia's Manse",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Fire",
      "Thunder",
      "Dark"
    ],
    "level": 6,
    "hp": 246,
    "patk": 132,
    "pdef": 20,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spellshot",
        "type": "Elem"
      },
      {
        "name": "Augmented Magic",
        "type": "Unknown"
      }
    ],
    "steal": "Unicorn Horn, Quality Beast Horn",
    "drop": "Shiny Coin, Grape",
    "immunities": "Terror, Petrification"
  },
  {
    "id": "32358.0",
    "name": "Rampant Weed",
    "area": "Woodlands",
    "subArea": "Path to Herminia's Manse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fire",
      "Wind",
      "Dark"
    ],
    "level": 6,
    "hp": 230,
    "patk": 132,
    "pdef": 20,
    "matk": 103,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Lash",
        "type": "Phys"
      },
      {
        "name": "Double Whip",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L), HP-Restoring Herb",
    "drop": "JP, Quality Beast Tusk",
    "immunities": "Blind, Poison"
  },
  {
    "id": "32359.0",
    "name": "Shadow Bat",
    "area": "Woodlands",
    "subArea": "Path to Herminia's Manse",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Ice",
      "Wind",
      "Light"
    ],
    "level": 6,
    "hp": 245,
    "patk": 132,
    "pdef": 20,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Blackout",
        "type": "Elem"
      },
      {
        "name": "Drink Blood",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, Hydra Scale",
    "drop": "Inspiring Plum Basket, Ancient Coin",
    "immunities": "Blind"
  },
  {
    "id": "98743.0",
    "name": "Manticore",
    "area": "Woodlands",
    "subArea": "Path to Herminia's Manse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Wind"
    ],
    "level": 6,
    "hp": 752,
    "patk": 177,
    "pdef": 20,
    "matk": 177,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rend",
        "type": "Phys"
      },
      {
        "name": "Wild Ripper",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide",
    "drop": "JP",
    "immunities": "None"
  },
  {
    "id": "32391.0",
    "name": "Snow Fox",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory: Entrance",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 6,
    "hp": 223,
    "patk": 132,
    "pdef": 20,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Ice Claw",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Tusk, Revitalizing Jam (L), Wind Soulstone",
    "drop": "Grape, Rare Beast Fang, Leaf",
    "immunities": "Stun"
  },
  {
    "id": "98765.0",
    "name": "Snow Yak",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory: Entrance",
    "type": "Boss",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Staff",
      "Thunder"
    ],
    "level": 6,
    "hp": 752,
    "patk": 177,
    "pdef": 20,
    "matk": 177,
    "mdef": 23,
    "skills": [
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Silencing Strike",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (M), Beast Hide",
    "drop": "Basilisk Eye",
    "immunities": "Petrification"
  },
  {
    "id": "32321.0",
    "name": "Dark Sentinel",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory: Entrance Emberglow Laboratory",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Tome",
      "Fire",
      "Light"
    ],
    "level": 6,
    "hp": 228,
    "patk": 103,
    "pdef": 17,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Dead of Night",
        "type": "Elem"
      },
      {
        "name": "Abyssal Shot",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Meat, Beast Meat, Quality Beast Horn",
    "drop": "Herb",
    "immunities": "Poison"
  },
  {
    "id": "32346.0",
    "name": "Shadow Wisp",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory: Entrance Emberglow Laboratory",
    "type": "Regular",
    "shields": 2,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Ice",
      "Wind",
      "Light"
    ],
    "level": 6,
    "hp": 239,
    "patk": 103,
    "pdef": 17,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Darkstrike",
        "type": "Elem"
      },
      {
        "name": "Repeated Darkstrike",
        "type": "Elem"
      },
      {
        "name": "Abyssal Strike",
        "type": "Elem"
      }
    ],
    "steal": "Revitalizing Jam (M), Blessed Olive (L)",
    "drop": "Minotaur Horn, Quality Beast Tusk, Olive of Life (M)",
    "immunities": "Poison, Curse"
  },
  {
    "id": "32392.0",
    "name": "Researcher I",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory",
    "type": "Regular",
    "shields": 2,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Staff",
      "Ice",
      "Wind"
    ],
    "level": 6,
    "hp": 222,
    "patk": 132,
    "pdef": 17,
    "matk": 132,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Bottled Flame",
        "type": "Elem"
      }
    ],
    "steal": "Shiny Coin",
    "drop": "Griffin Claw, Sunshard, Quality Beast Fang",
    "immunities": "Confusion"
  },
  {
    "id": "98774.0",
    "name": "Senior Fellow",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 6,
    "hp": 752,
    "patk": 177,
    "pdef": 20,
    "matk": 168,
    "mdef": 23,
    "skills": [
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Bottled Flame",
        "type": "Elem"
      },
      {
        "name": "Wild Numbing Dust",
        "type": "Phys"
      }
    ],
    "steal": "Light Soulstone, Dragon Scale, Kraken Ink",
    "drop": "Beast Meat, Herb",
    "immunities": "Sleep"
  },
  {
    "id": "32311.0",
    "name": "Thespian (Dancer)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Rehearsal Room Amphitheatre: Dressing Room",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Tome",
      "Thunder",
      "Wind"
    ],
    "level": 6,
    "hp": 215,
    "patk": 132,
    "pdef": 17,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Moonlight Waltz",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Fang",
    "drop": "Silver Nugget",
    "immunities": "Blind"
  },
  {
    "id": "32313.0",
    "name": "Thespian (Scholar)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Rehearsal Room Amphitheatre: Dressing Room",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 6,
    "hp": 232,
    "patk": 132,
    "pdef": 17,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Bottled Flame",
        "type": "Elem"
      }
    ],
    "steal": "Rusty Coin, Revitalizing Jam (M), Minotaur Horn",
    "drop": "Soulstone",
    "immunities": "Poison"
  },
  {
    "id": "32316.0",
    "name": "Fire Sentinel",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Rehearsal Room Amphitheatre: Dressing Room",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Ice",
      "Wind",
      "Light"
    ],
    "level": 6,
    "hp": 247,
    "patk": 103,
    "pdef": 17,
    "matk": 132,
    "mdef": 20,
    "skills": [
      {
        "name": "Fireshot",
        "type": "Elem"
      },
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "Wild Fireshot",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Meat, Holy Water (M), Ancient Coin",
    "drop": "Revitalizing Jam, Sphinx Feather",
    "immunities": "Sleep, Silence"
  },
  {
    "id": "32312.0",
    "name": "Thespian (Aristocrat)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Rehearsal Room Amphitheatre: Dressing Room",
    "type": "Regular",
    "shields": 2,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 6,
    "hp": 226,
    "patk": 132,
    "pdef": 20,
    "matk": 103,
    "mdef": 17,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (M), Olive of Life",
    "drop": "Kraken Ink",
    "immunities": "None"
  },
  {
    "id": "98754.0",
    "name": "Thespian (Warrior)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Dressing Room",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Ice",
      "Light"
    ],
    "level": 6,
    "hp": 752,
    "patk": 177,
    "pdef": 20,
    "matk": 177,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Cleave in Two",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut, Copper Ore",
    "drop": "Hydra Scale, Silver Nugget, Rare Beast Tusk",
    "immunities": "Silence, Terror"
  },
  {
    "id": "32322.0",
    "name": "Dark Sentinel Mk.II",
    "area": "Frostlands",
    "subArea": "Snowbloom Ruins Subterranean Snow Ruins",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 10,
    "hp": 330,
    "patk": 129,
    "pdef": 19,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Repeated Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Wild Shadowshot",
        "type": "Elem"
      }
    ],
    "steal": "Holy Water (L)",
    "drop": "Copper Ore",
    "immunities": "Confusion, Paralysis"
  },
  {
    "id": "32329.0",
    "name": "Dark Guardian",
    "area": "Frostlands",
    "subArea": "Snowbloom Ruins Subterranean Snow Ruins",
    "type": "Boss",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 10,
    "hp": 351,
    "patk": 166,
    "pdef": 22,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Shadow Slice",
        "type": "Elem"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      }
    ],
    "steal": "Ice Soulstone, Iron Ore, Griffin Claw",
    "drop": "Star Fragment, Beast Meat, Antidote Herb (M)",
    "immunities": "Petrification, Paralysis"
  },
  {
    "id": "32395.0",
    "name": "High Wolf",
    "area": "Frostlands",
    "subArea": "Snowbloom Ruins Subterranean Snow Ruins",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Bow",
      "Thunder",
      "Dark"
    ],
    "level": 10,
    "hp": 307,
    "patk": 166,
    "pdef": 22,
    "matk": 137,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Double Bite",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water (M), Dragon Scale",
    "drop": "HP-Restoring Herb (M)",
    "immunities": "None"
  },
  {
    "id": "32394.0",
    "name": "Albino Bat",
    "area": "Frostlands",
    "subArea": "Snowbloom Ruins Subterranean Snow Ruins",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 10,
    "hp": 346,
    "patk": 166,
    "pdef": 22,
    "matk": 129,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Double Claw",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (L), Sunshard, Star Fragment",
    "drop": "Quality Beast Claw, Holy Water (L), HP-Restoring Herb (L)",
    "immunities": "None"
  },
  {
    "id": "98767.0",
    "name": "Reptalios",
    "area": "Frostlands",
    "subArea": "Subterranean Snow Ruins",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 10,
    "hp": 1075,
    "patk": 208,
    "pdef": 22,
    "matk": 200,
    "mdef": 22,
    "skills": [
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Camouflage",
        "type": "Unknown"
      }
    ],
    "steal": "Star Fragment",
    "drop": "Minotaur Horn, SP-Restoring Nut (M), Inspiring Plum Basket",
    "immunities": "Paralysis"
  },
  {
    "id": "32305.0",
    "name": "Dire Night Raven",
    "area": "Flatlands",
    "subArea": "Knights Ardante Garrison",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Tome",
      "Ice",
      "Thunder",
      "Light"
    ],
    "level": 10,
    "hp": 346,
    "patk": 166,
    "pdef": 22,
    "matk": 129,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Claw",
        "type": "Phys"
      },
      {
        "name": "Intimidate",
        "type": "Unknown"
      }
    ],
    "steal": "Manticore Stinger, Kraken Ink",
    "drop": "Revitalizing Jam (M)",
    "immunities": "None"
  },
  {
    "id": "32310.0",
    "name": "Antagonistic Ant",
    "area": "Flatlands",
    "subArea": "Knights Ardante Garrison",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 10,
    "hp": 307,
    "patk": 166,
    "pdef": 22,
    "matk": 129,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Mandible Crush",
        "type": "Phys"
      }
    ],
    "steal": "Beast Tusk",
    "drop": "Dragon Scale",
    "immunities": "None"
  },
  {
    "id": "98756.0",
    "name": "Bloody Bull",
    "area": "Flatlands",
    "subArea": "Knights Ardante Garrison",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 10,
    "hp": 1075,
    "patk": 208,
    "pdef": 22,
    "matk": 200,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Extreme Charge",
        "type": "Phys"
      },
      {
        "name": "Double Horn",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam, Antidote Herb",
    "drop": "Manticore Stinger",
    "immunities": "Stun"
  },
  {
    "id": "32320.0",
    "name": "Wind Sentinel",
    "area": "Flatlands",
    "subArea": "Knights Ardante Garrison",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 10,
    "hp": 342,
    "patk": 129,
    "pdef": 19,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Gale Shot",
        "type": "Elem"
      },
      {
        "name": "Zephyr Breeze",
        "type": "Elem"
      },
      {
        "name": "Wild Gale Shot",
        "type": "Elem"
      }
    ],
    "steal": "Minotaur Horn, Beast Fang",
    "drop": "Antidote Herb (L), Revitalizing Jam",
    "immunities": "Silence"
  },
  {
    "id": "32327.0",
    "name": "Wind Guardian",
    "area": "Flatlands",
    "subArea": "Knights Ardante Garrison",
    "type": "Boss",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 10,
    "hp": 336,
    "patk": 166,
    "pdef": 22,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Quick Strike",
        "type": "Elem"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Antidote Herb",
    "drop": "Antidote Herb (L)",
    "immunities": "Blind, Sleep"
  },
  {
    "id": "32397.0",
    "name": "Avalanche Mushroom",
    "area": "Frostlands",
    "subArea": "Emberglow Slopes",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Tome",
      "Fire",
      "Light"
    ],
    "level": 10,
    "hp": 311,
    "patk": 166,
    "pdef": 22,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Ice Sting",
        "type": "Elem"
      },
      {
        "name": "Photosynthesis",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water (M), Ice Soulstone, Holy Water (L)",
    "drop": "Quality Beast Claw, Chimera Fang, Sphinx Feather",
    "immunities": "Petrification"
  },
  {
    "id": "32396.0",
    "name": "Ice Wisp",
    "area": "Frostlands",
    "subArea": "Emberglow Slopes",
    "type": "Regular",
    "shields": 2,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fire",
      "Thunder",
      "Dark"
    ],
    "level": 10,
    "hp": 307,
    "patk": 129,
    "pdef": 22,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Gelid Strike",
        "type": "Elem"
      },
      {
        "name": "Repeated Gelid Strike",
        "type": "Elem"
      },
      {
        "name": "Congealing Strike",
        "type": "Elem"
      }
    ],
    "steal": "Sphinx Feather, Nut",
    "drop": "Beast Tusk",
    "immunities": "None"
  },
  {
    "id": "98768.0",
    "name": "Ice Lizardking I",
    "area": "Frostlands",
    "subArea": "Emberglow Slopes",
    "type": "Boss",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 10,
    "hp": 1075,
    "patk": 208,
    "pdef": 22,
    "matk": 200,
    "mdef": 22,
    "skills": [
      {
        "name": "Slumber Slash",
        "type": "Phys"
      },
      {
        "name": "Ice Dragon",
        "type": "Elem"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      }
    ],
    "steal": "Kraken Ink",
    "drop": "Quality Beast Claw, Blessed Olive (M)",
    "immunities": "Instant Death"
  },
  {
    "id": "32385.0",
    "name": "Ice Lizardman III",
    "area": "Frostlands",
    "subArea": "Emberglow Slopes",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Tome",
      "Fire",
      "Wind"
    ],
    "level": 10,
    "hp": 324,
    "patk": 166,
    "pdef": 22,
    "matk": 129,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Stab",
        "type": "Phys"
      },
      {
        "name": "Wild Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive (M), Wind Soulstone",
    "drop": "Beast Hide, Silver Nugget, Inspiring Plum Basket",
    "immunities": "Instant Death"
  },
  {
    "id": "32398.0",
    "name": "Frost Fox",
    "area": "Frostlands",
    "subArea": "Emberglow Slopes",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Staff",
      "Fire",
      "Thunder"
    ],
    "level": 10,
    "hp": 352,
    "patk": 166,
    "pdef": 22,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Ice Claw",
        "type": "Elem"
      },
      {
        "name": "Wild Ice Claw",
        "type": "Elem"
      }
    ],
    "steal": "Gold Dust, SP-Restoring Nut, Antidote Herb (L)",
    "drop": "Unicorn Horn",
    "immunities": "Poison"
  },
  {
    "id": "32363.0",
    "name": "Bodyguard I",
    "area": "Woodlands",
    "subArea": "Auguste's Villa: Entrance Auguste's Villa",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Staff",
      "Thunder",
      "Dark"
    ],
    "level": 10,
    "hp": 318,
    "patk": 166,
    "pdef": 22,
    "matk": 129,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Cleave in Two",
        "type": "Phys"
      }
    ],
    "steal": "Beast Meat, Blessed Olive (M), HP-Restoring Herb",
    "drop": "Olive",
    "immunities": "Paralysis"
  },
  {
    "id": "32362.0",
    "name": "Guard Dog",
    "area": "Woodlands",
    "subArea": "Auguste's Villa: Entrance Auguste's Villa",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 10,
    "hp": 307,
    "patk": 166,
    "pdef": 22,
    "matk": 129,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Armor Bite",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Claw",
    "drop": "Rare Beast Tusk, Rare Beast Hide, Kraken Ink",
    "immunities": "Instant Death, Confusion"
  },
  {
    "id": "98745.0",
    "name": "Thunder Curator",
    "area": "Woodlands",
    "subArea": "Auguste's Villa: Entrance",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 10,
    "hp": 1075,
    "patk": 224,
    "pdef": 22,
    "matk": 200,
    "mdef": 22,
    "skills": [
      {
        "name": "Lightning Shot",
        "type": "Elem"
      },
      {
        "name": "Repeated Lightning Shot",
        "type": "Elem"
      },
      {
        "name": "Wild Lightning Shot",
        "type": "Elem"
      }
    ],
    "steal": "Sphinx Feather, Rare Beast Fang, Healing Grape",
    "drop": "SP-Restoring Nut, Leaf, Rare Beast Hide",
    "immunities": "Instant Death, Petrification"
  },
  {
    "id": "32319.0",
    "name": "Thunder Sentinel",
    "area": "Woodlands",
    "subArea": "Auguste's Villa: Entrance Auguste's Villa",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 10,
    "hp": 329,
    "patk": 129,
    "pdef": 19,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Lightning Shot",
        "type": "Elem"
      },
      {
        "name": "Repeated Lightning Shot",
        "type": "Elem"
      },
      {
        "name": "Wild Lightning Shot",
        "type": "Elem"
      }
    ],
    "steal": "Sunshard, Beast Hide, Quality Beast Claw",
    "drop": "Rare Beast Horn, Leaf, SP-Restoring Nut",
    "immunities": "None"
  },
  {
    "id": "32328.0",
    "name": "Thunder Guardian",
    "area": "Woodlands",
    "subArea": "Auguste's Villa: Entrance Auguste's Villa",
    "type": "Boss",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 10,
    "hp": 343,
    "patk": 166,
    "pdef": 22,
    "matk": 166,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Lightning Slash",
        "type": "Elem"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "Copper Ore, Olive of Life (M)",
    "immunities": "Confusion, Instant Death"
  },
  {
    "id": "32360.0",
    "name": "Herminia's Soldier I",
    "area": "Woodlands",
    "subArea": "Herminia's Manse Herminia's Manse: Cellars",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 16,
    "hp": 473,
    "patk": 190,
    "pdef": 24,
    "matk": 169,
    "mdef": 21,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Cleave in Two",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (L), Unicorn Horn, Wind Soulstone",
    "drop": "Herb, Sunshard, Silver Nugget",
    "immunities": "None"
  },
  {
    "id": "32361.0",
    "name": "Herminia's Soldier II",
    "area": "Woodlands",
    "subArea": "Herminia's Manse Herminia's Manse: Cellars",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 16,
    "hp": 492,
    "patk": 190,
    "pdef": 24,
    "matk": 169,
    "mdef": 21,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk, Gold Dust, SP-Restoring Nut",
    "drop": "Minotaur Horn, Revitalizing Jam (M), Grape",
    "immunities": "Terror"
  },
  {
    "id": "98744.0",
    "name": "Remnant",
    "area": "Woodlands",
    "subArea": "Herminia's Manse Herminia's Manse: Cellars",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light",
      "Dark"
    ],
    "level": 16,
    "hp": 1600,
    "patk": 246,
    "pdef": 24,
    "matk": 263,
    "mdef": 24,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Violent Charge",
        "type": "Phys"
      },
      {
        "name": "Lower Defenses",
        "type": "Unknown"
      }
    ],
    "steal": "Old Coin, SP-Restoring Nut (L), Moonstone",
    "drop": "Holy Water",
    "immunities": "None"
  },
  {
    "id": "32326.0",
    "name": "Ice Guardian",
    "area": "Woodlands Frostlands",
    "subArea": "Herminia's Manse Ceremonial Square Cathedral of Tytos",
    "type": "Boss",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 16,
    "hp": 534,
    "patk": 190,
    "pdef": 24,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Gelid Slash",
        "type": "Elem"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Claw, Antidote Herb",
    "drop": "SP-Restoring Nut, Quality Beast Tusk, Leaf",
    "immunities": "None"
  },
  {
    "id": "32325.0",
    "name": "Flame Guardian",
    "area": "Woodlands Flatlands",
    "subArea": "Herminia's Manse Amphitheatre: Backstage Amphitheatre: Underground",
    "type": "Boss",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 16,
    "hp": 518,
    "patk": 190,
    "pdef": 24,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flame Cut",
        "type": "Elem"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Fire Soulstone, Rare Beast Tusk, Sphinx Feather",
    "drop": "Kraken Ink",
    "immunities": "Petrification"
  },
  {
    "id": "32331.0",
    "name": "Flame Remnant",
    "area": "Woodlands",
    "subArea": "Herminia's Manse: Cellars",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Ice",
      "Wind"
    ],
    "level": 16,
    "hp": 516,
    "patk": 190,
    "pdef": 24,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Mass Ignition",
        "type": "Elem"
      }
    ],
    "steal": "Dragon Scale, Antidote Herb (L)",
    "drop": "SP-Restoring Nut, Revitalizing Jam (M), Antidote Herb (M)",
    "immunities": "Curse, Silence"
  },
  {
    "id": "32332.0",
    "name": "Ice Remnant",
    "area": "Woodlands",
    "subArea": "Herminia's Manse: Cellars",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 16,
    "hp": 533,
    "patk": 190,
    "pdef": 24,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Mass Ice Thaw",
        "type": "Elem"
      }
    ],
    "steal": "Revitalizing Jam, Minotaur Horn",
    "drop": "Blessed Olive (M)",
    "immunities": "Terror, Confusion"
  },
  {
    "id": "32317.0",
    "name": "Ice Sentinel",
    "area": "Frostlands",
    "subArea": "Ceremonial Square Cathedral of Tytos",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 16,
    "hp": 493,
    "patk": 169,
    "pdef": 21,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Freeze Shot",
        "type": "Elem"
      },
      {
        "name": "Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "Wild Freeze Shot",
        "type": "Elem"
      }
    ],
    "steal": "Shadow Soulstone",
    "drop": "Quality Beast Fang",
    "immunities": "None"
  },
  {
    "id": "32400.0",
    "name": "Research Fellow",
    "area": "Frostlands",
    "subArea": "Ceremonial Square Cathedral of Tytos",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Bow",
      "Fan",
      "Ice",
      "Light"
    ],
    "level": 16,
    "hp": 477,
    "patk": 190,
    "pdef": 21,
    "matk": 190,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Shadow Soulstone",
        "type": "Elem"
      },
      {
        "name": "Fire Soulstone",
        "type": "Elem"
      }
    ],
    "steal": "Fire Soulstone, Gold Dust, Nut",
    "drop": "Rare Beast Meat",
    "immunities": "Confusion"
  },
  {
    "id": "32399.0",
    "name": "Scarlet Wing Believer",
    "area": "Frostlands",
    "subArea": "Ceremonial Square Cathedral of Tytos",
    "type": "Regular",
    "shields": 2,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Tome",
      "Fan",
      "Thunder",
      "Light"
    ],
    "level": 16,
    "hp": 457,
    "patk": 190,
    "pdef": 21,
    "matk": 190,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mental Concentration",
        "type": "Unknown"
      },
      {
        "name": "Restore Health",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Horn, Minotaur Horn",
    "drop": "Sunshard, SP-Restoring Nut (L)",
    "immunities": "Instant Death, Paralysis"
  },
  {
    "id": "98775.0",
    "name": "Ice Curator",
    "area": "Frostlands",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Fire",
      "Wind"
    ],
    "level": 16,
    "hp": 1600,
    "patk": 246,
    "pdef": 24,
    "matk": 242,
    "mdef": 24,
    "skills": [
      {
        "name": "Freeze Shot",
        "type": "Elem"
      },
      {
        "name": "Repeated Freeze Shot",
        "type": "Elem"
      },
      {
        "name": "Wild Freeze Shot",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb (M), Rare Beast Claw, Griffin Claw",
    "drop": "Holy Water, SP-Restoring Nut (L), Minotaur Horn",
    "immunities": "Confusion, Instant Death"
  },
  {
    "id": "32315.0",
    "name": "Thespian (Lecturer)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Backstage Amphitheatre: Underground",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Thunder",
      "Wind"
    ],
    "level": 16,
    "hp": 467,
    "patk": 190,
    "pdef": 21,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Bottled Ice",
        "type": "Elem"
      }
    ],
    "steal": "Basilisk Eye, Rare Beast Tusk, Ice Soulstone",
    "drop": "Olive of Life (M), Phoenix Feather",
    "immunities": "Terror"
  },
  {
    "id": "32314.0",
    "name": "Thespian (Professor)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Backstage Amphitheatre: Underground",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Tome",
      "Wind",
      "Light"
    ],
    "level": 16,
    "hp": 457,
    "patk": 190,
    "pdef": 21,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Bottled Lightning",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Hide",
    "drop": "Inspiring Plum Basket, Copper Ore",
    "immunities": "Paralysis"
  },
  {
    "id": "98755.0",
    "name": "Fire Elemental",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Backstage Amphitheatre: Underground",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 16,
    "hp": 1600,
    "patk": 246,
    "pdef": 24,
    "matk": 242,
    "mdef": 24,
    "skills": [
      {
        "name": "Fireshot",
        "type": "Elem"
      },
      {
        "name": "Fireshots",
        "type": "Elem"
      },
      {
        "name": "Wild Fireshot",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb",
    "drop": "Cerberus Fang, Quality Beast Fang",
    "immunities": "None"
  },
  {
    "id": "32330.0",
    "name": "Flame Curator",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Backstage Amphitheatre: Underground",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 16,
    "hp": 532,
    "patk": 190,
    "pdef": 24,
    "matk": 190,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Fireshot",
        "type": "Elem"
      },
      {
        "name": "Flaming Impact",
        "type": "Elem"
      }
    ],
    "steal": "Beast Fang, Shiny Coin, Quality Beast Meat",
    "drop": "Rare Beast Meat, HP-Restoring Herb",
    "immunities": "Confusion"
  },
  {
    "id": "98043.0",
    "name": "Sea Birdian I",
    "area": "Coastlands",
    "subArea": "Rippletide Coast",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 20,
    "hp": 1186,
    "patk": 235,
    "pdef": 26,
    "matk": 235,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Shot",
        "type": "Phys"
      },
      {
        "name": "Multi-Shot",
        "type": "Phys"
      }
    ],
    "steal": "Minotaur Horn, Copper Ore, Silver Nugget",
    "drop": "Unicorn Horn, Sunshard",
    "immunities": "Instant Death, Silence"
  },
  {
    "id": "98044.0",
    "name": "Sea Birdian II",
    "area": "Coastlands",
    "subArea": "Rippletide Coast",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 20,
    "hp": 1229,
    "patk": 235,
    "pdef": 26,
    "matk": 235,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Shot",
        "type": "Phys"
      },
      {
        "name": "Electrocute",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Horn, Quality Beast Horn, Olive of Life",
    "drop": "Sunshard, Blessed Olive (L), Antidote Herb",
    "immunities": "None"
  },
  {
    "id": "98045.0",
    "name": "Scissor Crab",
    "area": "Coastlands",
    "subArea": "Rippletide Coast",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Wind"
    ],
    "level": 20,
    "hp": 1279,
    "patk": 235,
    "pdef": 26,
    "matk": 235,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Icicle",
        "type": "Elem"
      },
      {
        "name": "Poison Strike",
        "type": "Phys"
      }
    ],
    "steal": "Meteorite, Silver Nugget",
    "drop": "Beast Meat, Olive, Cerberus Fang",
    "immunities": "Curse"
  },
  {
    "id": "98046.0",
    "name": "Hermit Conch",
    "area": "Coastlands",
    "subArea": "Rippletide Coast",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Fire",
      "Thunder"
    ],
    "level": 20,
    "hp": 1388,
    "patk": 235,
    "pdef": 30,
    "matk": 235,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Hide in Shell",
        "type": "Unknown"
      }
    ],
    "steal": "Ice Soulstone, Herb",
    "drop": "Holy Water (M), Herb, Cerberus Fang",
    "immunities": "Confusion, Terror"
  },
  {
    "id": "98047.0",
    "name": "Sea Birdian III",
    "area": "Coastlands",
    "subArea": "Isle of Orsa Isle of Orsa: Depths",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 21,
    "hp": 1240,
    "patk": 240,
    "pdef": 26,
    "matk": 240,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Electrocute",
        "type": "Elem"
      },
      {
        "name": "Physical Boost",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb, Basilisk Eye, Inspiring Plum Basket",
    "drop": "Olive",
    "immunities": "Petrification, Paralysis"
  },
  {
    "id": "98048.0",
    "name": "Sea Birdian IV",
    "area": "Coastlands",
    "subArea": "Isle of Orsa Isle of Orsa: Depths",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 21,
    "hp": 1254,
    "patk": 240,
    "pdef": 26,
    "matk": 240,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Shot",
        "type": "Phys"
      },
      {
        "name": "Barrage",
        "type": "Phys"
      }
    ],
    "steal": "Moonstone, Star Fragment, HP-Restoring Herb",
    "drop": "Quality Beast Meat",
    "immunities": "Confusion"
  },
  {
    "id": "98052.0",
    "name": "Brine Anemone",
    "area": "Coastlands",
    "subArea": "Isle of Orsa Isle of Orsa: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Bow",
      "Fan",
      "Wind"
    ],
    "level": 21,
    "hp": 1369,
    "patk": 240,
    "pdef": 26,
    "matk": 240,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      },
      {
        "name": "Physical Boost",
        "type": "Unknown"
      }
    ],
    "steal": "Iron Ore, Quality Beast Claw, Chimera Fang",
    "drop": "Beast Fang, Kraken Ink, Dragon Scale",
    "immunities": "Terror"
  },
  {
    "id": "98051.0",
    "name": "Barnacle Crab",
    "area": "Coastlands",
    "subArea": "Isle of Orsa Isle of Orsa: Depths",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Wind"
    ],
    "level": 21,
    "hp": 1327,
    "patk": 240,
    "pdef": 26,
    "matk": 240,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Icicle",
        "type": "Elem"
      },
      {
        "name": "Poison Strike",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (M)",
    "drop": "Revitalizing Jam (M), Revitalizing Jam, Leaf",
    "immunities": "None"
  },
  {
    "id": "98762.0",
    "name": "Winged Serpent",
    "area": "Coastlands",
    "subArea": "Isle of Orsa: Depths",
    "type": "Regular",
    "shields": 6,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Tome",
      "Wind"
    ],
    "level": 21,
    "hp": 2170,
    "patk": 276,
    "pdef": 26,
    "matk": 268,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Swoop",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      }
    ],
    "steal": "Lightning Soulstone",
    "drop": "Antidote Herb (L), Rare Beast Meat, HP-Restoring Herb (M)",
    "immunities": "Terror"
  },
  {
    "id": "98333.0",
    "name": "Pufferfish",
    "area": "Coastlands",
    "subArea": "Middlesea",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Thunder"
    ],
    "level": 25,
    "hp": 1454,
    "patk": 287,
    "pdef": 28,
    "matk": 287,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Water Cannon",
        "type": "Elem"
      },
      {
        "name": "Needle Cannon",
        "type": "Phys"
      }
    ],
    "steal": "Beast Fang, Silver Nugget, Griffin Claw",
    "drop": "Quality Beast Fang, Hydra Scale, SP-Restoring Nut",
    "immunities": "Confusion"
  },
  {
    "id": "98334.0",
    "name": "Seahorse",
    "area": "Coastlands",
    "subArea": "Middlesea",
    "type": "Regular",
    "shields": 3,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 25,
    "hp": 1477,
    "patk": 287,
    "pdef": 28,
    "matk": 287,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Water Cannon",
        "type": "Elem"
      },
      {
        "name": "Tail Spin",
        "type": "Phys"
      }
    ],
    "steal": "Beast Hide, Healing Grape, Cerberus Fang",
    "drop": "EXP",
    "immunities": "Poison"
  },
  {
    "id": "98335.0",
    "name": "Blue Jellyfish",
    "area": "Coastlands",
    "subArea": "Middlesea",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fire",
      "Light"
    ],
    "level": 25,
    "hp": 1569,
    "patk": 287,
    "pdef": 28,
    "matk": 287,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Coil",
        "type": "Phys"
      },
      {
        "name": "Silencing Sting",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water, Olive of Life (M)",
    "drop": "Hydra Scale, Sphinx Feather",
    "immunities": "Silence, Terror"
  },
  {
    "id": "98336.0",
    "name": "Scythe Crab",
    "area": "Coastlands",
    "subArea": "Middlesea",
    "type": "Regular",
    "shields": 3,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fire",
      "Wind"
    ],
    "level": 25,
    "hp": 1660,
    "patk": 287,
    "pdef": 28,
    "matk": 287,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Icicle",
        "type": "Elem"
      },
      {
        "name": "Poison Strike",
        "type": "Phys"
      }
    ],
    "steal": "Copper Ore, Beast Horn, Shiny Coin",
    "drop": "Herb, Basilisk Eye",
    "immunities": "None"
  },
  {
    "id": "32350.0",
    "name": "Forest Ratkin II",
    "area": "Woodlands",
    "subArea": "West Valore Trail",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 24,
    "hp": 1388,
    "patk": 282,
    "pdef": 28,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Shot",
        "type": "Phys"
      },
      {
        "name": "Dual Shot",
        "type": "Phys"
      }
    ],
    "steal": "Cerberus Fang, SP-Restoring Nut (L), Manticore Stinger",
    "drop": "Cerberus Fang",
    "immunities": "None"
  },
  {
    "id": "32338.0",
    "name": "Vampire Bat",
    "area": "Woodlands",
    "subArea": "West Valore Trail",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Dark"
    ],
    "level": 24,
    "hp": 1471,
    "patk": 282,
    "pdef": 28,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Drink Blood",
        "type": "Phys"
      },
      {
        "name": "Slumberwave",
        "type": "Phys"
      }
    ],
    "steal": "Phoenix Feather",
    "drop": "Soulstone, Quality Beast Claw",
    "immunities": "Silence"
  },
  {
    "id": "32351.0",
    "name": "Forest Ratkin III",
    "area": "Woodlands",
    "subArea": "West Valore Trail",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Fire"
    ],
    "level": 24,
    "hp": 1412,
    "patk": 282,
    "pdef": 28,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Shot",
        "type": "Phys"
      },
      {
        "name": "Super Shot",
        "type": "Phys"
      }
    ],
    "steal": "Old Coin, Quality Beast Tusk",
    "drop": "EXP",
    "immunities": "Blind"
  },
  {
    "id": "32356.0",
    "name": "Mortal Mushroom",
    "area": "Woodlands",
    "subArea": "West Valore Trail",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 24,
    "hp": 1533,
    "patk": 282,
    "pdef": 24,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      },
      {
        "name": "Toxic Cloud",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water, Iron Ore, Quality Beast Tusk",
    "drop": "Iron Ore, Olive, HP-Restoring Herb",
    "immunities": "Curse, Silence"
  },
  {
    "id": "98073.0",
    "name": "Withered Wanderweed",
    "area": "Cliftlands",
    "subArea": "Cragspear Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Fire"
    ],
    "level": 24,
    "hp": 1456,
    "patk": 282,
    "pdef": 28,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Windblown Dust",
        "type": "Elem"
      },
      {
        "name": "Photosynthesis",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life",
    "drop": "HP-Restoring Herb (L), Rusty Coin, Griffin Claw",
    "immunities": "None"
  },
  {
    "id": "98072.0",
    "name": "Cliff Birdian I",
    "area": "Cliftlands",
    "subArea": "Cragspear Pass",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 24,
    "hp": 1388,
    "patk": 282,
    "pdef": 28,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget, Revitalizing Jam (M), Sunshard",
    "drop": "Rare Beast Meat, Healing Grape Bunch",
    "immunities": "Stun, Petrification"
  },
  {
    "id": "98075.0",
    "name": "Lloris",
    "area": "Cliftlands",
    "subArea": "Cragspear Pass",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Tome",
      "Fire",
      "Wind"
    ],
    "level": 24,
    "hp": 1535,
    "patk": 282,
    "pdef": 28,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Rushing Scratch",
        "type": "Phys"
      }
    ],
    "steal": "Griffin Claw, SP-Restoring Nut, Herb",
    "drop": "Silver Nugget, Basilisk Eye",
    "immunities": "Stun, Poison"
  },
  {
    "id": "98074.0",
    "name": "Laughing Hyaena",
    "area": "Cliftlands",
    "subArea": "Cragspear Pass",
    "type": "Regular",
    "shields": 3,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 24,
    "hp": 1481,
    "patk": 282,
    "pdef": 28,
    "matk": 282,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Fang",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      }
    ],
    "steal": "Star Fragment",
    "drop": "Holy Water",
    "immunities": "Terror"
  },
  {
    "id": "98076.0",
    "name": "Cliff Birdian II",
    "area": "Cliftlands",
    "subArea": "Gray Grotto Gray Grotto: Depths",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 25,
    "hp": 1454,
    "patk": 287,
    "pdef": 28,
    "matk": 287,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Double Slash",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (L), Rare Beast Tusk",
    "drop": "Rare Beast Fang, Soulstone",
    "immunities": "None"
  },
  {
    "id": "98078.0",
    "name": "Armor Eater",
    "area": "Cliftlands",
    "subArea": "Gray Grotto Gray Grotto: Depths",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Wind"
    ],
    "level": 25,
    "hp": 1645,
    "patk": 287,
    "pdef": 33,
    "matk": 287,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Whirling Attack",
        "type": "Phys"
      },
      {
        "name": "Rock of the Heavens",
        "type": "Unknown"
      }
    ],
    "steal": "Copper Ore, Rare Beast Fang, HP-Restoring Herb (M)",
    "drop": "Grape, Quality Beast Tusk",
    "immunities": "Stun, Petrification"
  },
  {
    "id": "98077.0",
    "name": "Cliff Birdian III",
    "area": "Cliftlands",
    "subArea": "Gray Grotto Gray Grotto: Depths",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fire",
      "Dark"
    ],
    "level": 25,
    "hp": 1494,
    "patk": 287,
    "pdef": 28,
    "matk": 287,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Desperation Attack",
        "type": "Phys"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Meat, Light Soulstone",
    "drop": "SP-Restoring Nut, Olive of Life (M)",
    "immunities": "Blind"
  },
  {
    "id": "98079.0",
    "name": "Eggling",
    "area": "Cliftlands",
    "subArea": "Gray Grotto",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder"
    ],
    "level": 25,
    "hp": 1677,
    "patk": 287,
    "pdef": 33,
    "matk": 287,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Hide in Shell",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Claw, Inspiring Plum Basket",
    "drop": "Dragon Scale, SP-Restoring Nut",
    "immunities": "Silence"
  },
  {
    "id": "98735.0",
    "name": "Giant Eagle",
    "area": "Cliftlands",
    "subArea": "Gray Grotto: Depths",
    "type": "Regular",
    "shields": 6,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Staff",
      "Ice",
      "Thunder"
    ],
    "level": 25,
    "hp": 2545,
    "patk": 322,
    "pdef": 28,
    "matk": 317,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Tornado Slash",
        "type": "Elem"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      }
    ],
    "steal": "Kraken Ink, Nut",
    "drop": "Quality Beast Horn, Soulstone",
    "immunities": "None"
  },
  {
    "id": "98080.0",
    "name": "Hatchling",
    "area": "Cliftlands",
    "subArea": "Gray Grotto: Depths",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder"
    ],
    "level": 25,
    "hp": 1713,
    "patk": 287,
    "pdef": 33,
    "matk": 287,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Hide with Ally",
        "type": "Unknown"
      }
    ],
    "steal": "Meteorite",
    "drop": "Blessed Olive (M), Rare Beast Horn, Manticore Stinger",
    "immunities": "None"
  },
  {
    "id": "98084.0",
    "name": "Long-Eared Lloris",
    "area": "Cliftlands",
    "subArea": "Geist Canyon: South",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 26,
    "hp": 1733,
    "patk": 291,
    "pdef": 29,
    "matk": 291,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Whirling Slash",
        "type": "Phys"
      },
      {
        "name": "Light My Fire",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone, Antidote Herb, Sunshard",
    "drop": "Blessed Olive (M)",
    "immunities": "None"
  },
  {
    "id": "98081.0",
    "name": "Cliff Birdian IV",
    "area": "Cliftlands",
    "subArea": "Geist Canyon: South Geist Canyon",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder"
    ],
    "level": 26,
    "hp": 1522,
    "patk": 291,
    "pdef": 29,
    "matk": 291,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slash",
        "type": "Phys"
      },
      {
        "name": "Rush Stab",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, Beast Claw",
    "drop": "Rare Beast Fang, Quality Beast Claw",
    "immunities": "Sleep, Silence"
  },
  {
    "id": "98083.0",
    "name": "Crawly Fledgling",
    "area": "Cliftlands",
    "subArea": "Geist Canyon: South",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Thunder"
    ],
    "level": 26,
    "hp": 1710,
    "patk": 291,
    "pdef": 33,
    "matk": 291,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Whirling Slash",
        "type": "Phys"
      }
    ],
    "steal": "Beast Meat, Healing Grape, Antidote Herb (L)",
    "drop": "Gold",
    "immunities": "Stun, Confusion"
  },
  {
    "id": "98082.0",
    "name": "Cliff Birdian V",
    "area": "Cliftlands",
    "subArea": "Geist Canyon: South Geist Canyon",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder"
    ],
    "level": 26,
    "hp": 1542,
    "patk": 291,
    "pdef": 29,
    "matk": 291,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slash",
        "type": "Phys"
      },
      {
        "name": "Updraft",
        "type": "Unknown"
      }
    ],
    "steal": "Ice Soulstone, Rare Beast Tusk",
    "drop": "Sphinx Feather, Ancient Coin",
    "immunities": "None"
  },
  {
    "id": "98736.0",
    "name": "Raging Treant",
    "area": "Cliftlands",
    "subArea": "Geist Canyon",
    "type": "Regular",
    "shields": 6,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 26,
    "hp": 2751,
    "patk": 327,
    "pdef": 29,
    "matk": 327,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Silencing Sting",
        "type": "Phys"
      },
      {
        "name": "Photosynthesis",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water (M)",
    "drop": "Antidote Herb (L)",
    "immunities": "None"
  },
  {
    "id": "98085.0",
    "name": "Two-Handed Hatchling",
    "area": "Cliftlands",
    "subArea": "Geist Canyon",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder"
    ],
    "level": 26,
    "hp": 1684,
    "patk": 291,
    "pdef": 33,
    "matk": 291,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Ingest Nutrients",
        "type": "Unknown"
      }
    ],
    "steal": "Dragon Scale, Beast Claw",
    "drop": "Soulstone, Minotaur Horn, Antidote Herb (M)",
    "immunities": "None"
  },
  {
    "id": "98086.0",
    "name": "Great Condor",
    "area": "Cliftlands",
    "subArea": "Geist Canyon",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fan",
      "Thunder"
    ],
    "level": 26,
    "hp": 1676,
    "patk": 291,
    "pdef": 29,
    "matk": 291,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "Stun Press",
        "type": "Phys"
      }
    ],
    "steal": "Beast Fang",
    "drop": "Holy Water (L), Griffin Claw",
    "immunities": "Paralysis, Silence"
  },
  {
    "id": "98159.0",
    "name": "River Froggen I",
    "area": "Riverlands",
    "subArea": "Clearbrook Traverse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 27,
    "hp": 1580,
    "patk": 308,
    "pdef": 29,
    "matk": 308,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slash",
        "type": "Phys"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk, Old Coin, Antidote Herb (L)",
    "drop": "Plum, EXP",
    "immunities": "None"
  },
  {
    "id": "98161.0",
    "name": "Giant Slug",
    "area": "Riverlands",
    "subArea": "Clearbrook Traverse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 27,
    "hp": 1723,
    "patk": 308,
    "pdef": 29,
    "matk": 308,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hail",
        "type": "Elem"
      },
      {
        "name": "Hydration",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Claw",
    "drop": "Beast Fang, Antidote Herb",
    "immunities": "Sleep"
  },
  {
    "id": "98160.0",
    "name": "River Wasp",
    "area": "Riverlands",
    "subArea": "Clearbrook Traverse East Clearbrook Traverse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire"
    ],
    "level": 27,
    "hp": 1624,
    "patk": 308,
    "pdef": 29,
    "matk": 308,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Numbing Needle",
        "type": "Phys"
      },
      {
        "name": "Mandible Crush",
        "type": "Phys"
      }
    ],
    "steal": "Wind Soulstone",
    "drop": "Holy Water (M), JP",
    "immunities": "Terror, Paralysis"
  },
  {
    "id": "98162.0",
    "name": "River Fly",
    "area": "Riverlands",
    "subArea": "Clearbrook Traverse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Wind"
    ],
    "level": 27,
    "hp": 1806,
    "patk": 308,
    "pdef": 29,
    "matk": 308,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Jaws",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Claw",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Silver Nugget",
    "drop": "Rare Beast Hide, Quality Beast Fang",
    "immunities": "Sleep, Stun"
  },
  {
    "id": "98169.0",
    "name": "Horse Fly",
    "area": "Riverlands",
    "subArea": "Path to Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Wind"
    ],
    "level": 28,
    "hp": 1838,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Claw",
        "type": "Phys"
      },
      {
        "name": "Deafening Buzz",
        "type": "Unknown"
      }
    ],
    "steal": "Dragon Scale",
    "drop": "Iron Ore, Star Fragment",
    "immunities": "None"
  },
  {
    "id": "98168.0",
    "name": "River Bug",
    "area": "Riverlands",
    "subArea": "Path to Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Dark"
    ],
    "level": 28,
    "hp": 1761,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Soporific Claw",
        "type": "Phys"
      },
      {
        "name": "Sharpening Claw",
        "type": "Unknown"
      }
    ],
    "steal": "Rusty Coin, Inspiring Plum",
    "drop": "Gold Dust",
    "immunities": "Petrification"
  },
  {
    "id": "98167.0",
    "name": "Sea Snake",
    "area": "Riverlands",
    "subArea": "Path to Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fire",
      "Thunder"
    ],
    "level": 28,
    "hp": 1655,
    "patk": 312,
    "pdef": 26,
    "matk": 312,
    "mdef": 26,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Fang",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      }
    ],
    "steal": "Moonstone, Dragon Scale",
    "drop": "Old Coin, Antidote Herb (L), Shiny Coin",
    "immunities": "Silence"
  },
  {
    "id": "98166.0",
    "name": "River Froggen III",
    "area": "Riverlands",
    "subArea": "Path to Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 28,
    "hp": 1652,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Slash",
        "type": "Phys"
      },
      {
        "name": "Stab Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Herb, Sphinx Feather, HP-Restoring Herb (L)",
    "drop": "Phoenix Feather, Silver Nugget, Rare Beast Hide",
    "immunities": "None"
  },
  {
    "id": "98170.0",
    "name": "Thief I",
    "area": "Riverlands",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Thunder",
      "Dark"
    ],
    "level": 28,
    "hp": 1652,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Running Slash",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut",
    "drop": "Quality Beast Horn, Gold",
    "immunities": "None"
  },
  {
    "id": "98171.0",
    "name": "Thief II",
    "area": "Riverlands",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 28,
    "hp": 1728,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Running Slash",
        "type": "Phys"
      },
      {
        "name": "Armor Pierce",
        "type": "Unknown"
      }
    ],
    "steal": "Blessed Olive (L), Light Soulstone, Rare Beast Horn",
    "drop": "Rare Beast Hide, Holy Water (M), Manticore Stinger",
    "immunities": "Poison"
  },
  {
    "id": "98758.0",
    "name": "Master Thief",
    "area": "Riverlands",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 28,
    "hp": 2891,
    "patk": 350,
    "pdef": 30,
    "matk": 345,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Stab Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Cerberus Fang, Quality Beast Hide",
    "drop": "Holy Water, Gold Dust",
    "immunities": "Paralysis, Stun"
  },
  {
    "id": "98172.0",
    "name": "Thief Leader I",
    "area": "Riverlands",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Thunder",
      "Dark"
    ],
    "level": 28,
    "hp": 1781,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "Blade Breaker",
        "type": "Unknown"
      }
    ],
    "steal": "Shadow Soulstone",
    "drop": "Revitalizing Jam (M), Plum",
    "immunities": "Confusion"
  },
  {
    "id": "98173.0",
    "name": "Thief Leader II",
    "area": "Riverlands",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 28,
    "hp": 1846,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Stab Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Old Coin, SP-Restoring Nut (L), Sunshard",
    "drop": "Ancient Coin, Chimera Fang",
    "immunities": "None"
  },
  {
    "id": "98164.0",
    "name": "Motley Slug",
    "area": "Riverlands",
    "subArea": "East Clearbrook Traverse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Fire",
      "Ice",
      "Light"
    ],
    "level": 27,
    "hp": 1691,
    "patk": 308,
    "pdef": 29,
    "matk": 308,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Expel Mucus",
        "type": "Phys"
      },
      {
        "name": "Hydration",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (L), Chimera Fang, Rusty Coin",
    "drop": "Gold Dust",
    "immunities": "Paralysis, Poison"
  },
  {
    "id": "98163.0",
    "name": "River Froggen II",
    "area": "Riverlands",
    "subArea": "East Clearbrook Traverse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 27,
    "hp": 1580,
    "patk": 308,
    "pdef": 29,
    "matk": 308,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Poison Slash",
        "type": "Phys"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      }
    ],
    "steal": "Copper Ore, Blessed Olive (L)",
    "drop": "Ancient Coin",
    "immunities": "Stun"
  },
  {
    "id": "98165.0",
    "name": "Killer Bug",
    "area": "Riverlands",
    "subArea": "East Clearbrook Traverse",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Dark"
    ],
    "level": 27,
    "hp": 1758,
    "patk": 308,
    "pdef": 29,
    "matk": 308,
    "mdef": 29,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bloody Claw",
        "type": "Phys"
      },
      {
        "name": "Sharpening Claw",
        "type": "Unknown"
      }
    ],
    "steal": "Fire Soulstone",
    "drop": "HP-Restoring Herb (M)",
    "immunities": "Petrification, Sleep"
  },
  {
    "id": "98099.0",
    "name": "Dark Roller",
    "area": "Sunlands",
    "subArea": "Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Thunder",
      "Dark"
    ],
    "level": 28,
    "hp": 1764,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Roll Attack",
        "type": "Phys"
      },
      {
        "name": "Poison Strike",
        "type": "Phys"
      }
    ],
    "steal": "Old Coin, Quality Beast Hide",
    "drop": "Sunshard, Beast Tusk, JP",
    "immunities": "Terror"
  },
  {
    "id": "98100.0",
    "name": "Army Ant",
    "area": "Sunlands",
    "subArea": "Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Dark"
    ],
    "level": 28,
    "hp": 1887,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Acid Spray",
        "type": "Phys"
      }
    ],
    "steal": "Meteorite, Star Fragment, Revitalizing Jam (L)",
    "drop": "SP-Restoring Nut (M)",
    "immunities": "Sleep, Silence"
  },
  {
    "id": "98097.0",
    "name": "Sand Lizardman I",
    "area": "Sunlands",
    "subArea": "Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Ice",
      "Dark"
    ],
    "level": 28,
    "hp": 1652,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Double Blow",
        "type": "Phys"
      }
    ],
    "steal": "Healing Grape Bunch",
    "drop": "Gold",
    "immunities": "None"
  },
  {
    "id": "98098.0",
    "name": "Sand Lizardman II",
    "area": "Sunlands",
    "subArea": "Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Ice",
      "Dark"
    ],
    "level": 28,
    "hp": 1671,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Hurricane Blow",
        "type": "Elem"
      }
    ],
    "steal": "Dragon Scale",
    "drop": "Iron Ore, Revitalizing Jam (L)",
    "immunities": "None"
  },
  {
    "id": "98101.0",
    "name": "Sand Lizardman III",
    "area": "Sunlands",
    "subArea": "Eastern Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Thunder",
      "Dark"
    ],
    "level": 28,
    "hp": 1652,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Double Blow",
        "type": "Phys"
      }
    ],
    "steal": "Ancient Coin, Holy Water (M)",
    "drop": "Antidote Herb (M), Cerberus Fang, Revitalizing Jam (L)",
    "immunities": "None"
  },
  {
    "id": "98102.0",
    "name": "Giant Scorpion",
    "area": "Sunlands",
    "subArea": "Eastern Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 28,
    "hp": 1702,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scissor Claw",
        "type": "Phys"
      },
      {
        "name": "Venomous Claw",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather",
    "drop": "Herb, Leaf, Rare Beast Meat",
    "immunities": "Curse, Petrification"
  },
  {
    "id": "98103.0",
    "name": "Cactus Roller",
    "area": "Sunlands",
    "subArea": "Eastern Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 28,
    "hp": 1751,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Roll Attack",
        "type": "Phys"
      },
      {
        "name": "A Ball of a Time",
        "type": "Unknown"
      }
    ],
    "steal": "Iron Ore, Antidote Herb (M)",
    "drop": "Revitalizing Jam",
    "immunities": "Petrification"
  },
  {
    "id": "98104.0",
    "name": "Dire Army Ant",
    "area": "Sunlands",
    "subArea": "Eastern Sunshade Sands",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Dark"
    ],
    "level": 28,
    "hp": 1836,
    "patk": 312,
    "pdef": 30,
    "matk": 312,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Double Bite",
        "type": "Phys"
      }
    ],
    "steal": "Beast Tusk, Quality Beast Horn",
    "drop": "Meteorite, SP-Restoring Nut (L), Rare Beast Tusk",
    "immunities": "Sleep, Poison"
  },
  {
    "id": "98740.0",
    "name": "Sandworm",
    "area": "Sunlands",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 29,
    "hp": 3098,
    "patk": 354,
    "pdef": 35,
    "matk": 434,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Sand Strike",
        "type": "Phys"
      }
    ],
    "steal": "Griffin Claw, Rare Beast Claw",
    "drop": "Antidote Herb (M), Olive of Life (M)",
    "immunities": "None"
  },
  {
    "id": "98105.0",
    "name": "Flame Remnant Mk.II",
    "area": "Sunlands",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice"
    ],
    "level": 29,
    "hp": 1710,
    "patk": 316,
    "pdef": 30,
    "matk": 299,
    "mdef": 30,
    "skills": [
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Mass Ignition",
        "type": "Elem"
      }
    ],
    "steal": "Basilisk Eye, Healing Grape, Beast Fang",
    "drop": "Nut, Cerberus Fang, Antidote Herb",
    "immunities": "Terror, Confusion"
  },
  {
    "id": "98106.0",
    "name": "Blood Remnant",
    "area": "Sunlands",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice"
    ],
    "level": 29,
    "hp": 1776,
    "patk": 316,
    "pdef": 30,
    "matk": 299,
    "mdef": 30,
    "skills": [
      {
        "name": "Scorch and Burn",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Scorched Earth",
        "type": "Elem"
      }
    ],
    "steal": "Star Fragment, Beast Tusk",
    "drop": "Iron Ore",
    "immunities": "None"
  },
  {
    "id": "98107.0",
    "name": "Dark Remnant",
    "area": "Sunlands",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 29,
    "hp": 1871,
    "patk": 316,
    "pdef": 30,
    "matk": 299,
    "mdef": 30,
    "skills": [
      {
        "name": "Earth Cleave",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Solar Eclipse",
        "type": "Elem"
      }
    ],
    "steal": "Holy Water (M), Quality Beast Meat, Griffin Claw",
    "drop": "Minotaur Horn",
    "immunities": "Petrification, Silence"
  },
  {
    "id": "98108.0",
    "name": "Carnivorous Bat",
    "area": "Sunlands",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Ice"
    ],
    "level": 29,
    "hp": 1952,
    "patk": 316,
    "pdef": 30,
    "matk": 316,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Drink Blood",
        "type": "Phys"
      },
      {
        "name": "Soporific Fang",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (M), HP-Restoring Herb (M)",
    "drop": "Gold, SP-Restoring Nut (M)",
    "immunities": "Curse"
  },
  {
    "id": "98128.0",
    "name": "Highland Ratkin I",
    "area": "Highlands",
    "subArea": "Shepherd's Rock Pass",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Wind",
      "Light"
    ],
    "level": 29,
    "hp": 1710,
    "patk": 316,
    "pdef": 30,
    "matk": 316,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slash",
        "type": "Phys"
      },
      {
        "name": "Mighty Slash",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (L), Blessed Olive (L), Olive of Life",
    "drop": "Revitalizing Jam (M), Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98129.0",
    "name": "Highland Ratkin II",
    "area": "Highlands",
    "subArea": "Shepherd's Rock Pass",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Light"
    ],
    "level": 29,
    "hp": 1750,
    "patk": 316,
    "pdef": 30,
    "matk": 316,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slash",
        "type": "Phys"
      },
      {
        "name": "Stab Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water, Shiny Coin",
    "drop": "Sphinx Feather, Moonstone, Inspiring Plum Basket",
    "immunities": "None"
  },
  {
    "id": "98130.0",
    "name": "Giant Falcon",
    "area": "Highlands",
    "subArea": "Shepherd's Rock Pass",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Dark"
    ],
    "level": 29,
    "hp": 1873,
    "patk": 316,
    "pdef": 30,
    "matk": 299,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Galeforce Slash",
        "type": "Elem"
      }
    ],
    "steal": "Holy Water (M), Herb",
    "drop": "Nut",
    "immunities": "Blind, Paralysis"
  },
  {
    "id": "98131.0",
    "name": "Rockadillo",
    "area": "Highlands",
    "subArea": "Shepherd's Rock Pass",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Dark"
    ],
    "level": 29,
    "hp": 1941,
    "patk": 316,
    "pdef": 35,
    "matk": 316,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Big Boulder Blast",
        "type": "Phys"
      }
    ],
    "steal": "Inspiring Plum Basket",
    "drop": "Beast Horn",
    "immunities": "Blind"
  },
  {
    "id": "32401.0",
    "name": "Frost Bear",
    "area": "Frostlands",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Wind"
    ],
    "level": 30,
    "hp": 1792,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Wild Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Improved Offense",
        "type": "Unknown"
      }
    ],
    "steal": "Ancient Coin, Blessed Olive (L), Phoenix Feather",
    "drop": "Nut, Unicorn Horn, Manticore Stinger",
    "immunities": "Sleep"
  },
  {
    "id": "32402.0",
    "name": "Winter Wanderweed",
    "area": "Frostlands",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Wind"
    ],
    "level": 30,
    "hp": 1988,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Roll Attack",
        "type": "Phys"
      },
      {
        "name": "Mass Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "Soporific Sting",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Claw, Blessed Olive (L), Wind Soulstone",
    "drop": "Beast Horn, Quality Beast Horn",
    "immunities": "None"
  },
  {
    "id": "32381.0",
    "name": "Hoary Howler",
    "area": "Frostlands",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Wind"
    ],
    "level": 30,
    "hp": 1919,
    "patk": 319,
    "pdef": 31,
    "matk": 311,
    "mdef": 31,
    "skills": [
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "Galeforce Slash",
        "type": "Elem"
      },
      {
        "name": "Soporific Claw",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather",
    "drop": "Quality Beast Fang",
    "immunities": "Blind, Instant Death"
  },
  {
    "id": "32386.0",
    "name": "Ice Lizardman IV",
    "area": "Frostlands",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 30,
    "hp": 1772,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Icicle",
        "type": "Elem"
      },
      {
        "name": "Rush Stab",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive (L)",
    "drop": "Quality Beast Tusk",
    "immunities": "Silence"
  },
  {
    "id": "98766.0",
    "name": "Snow Leopard",
    "area": "Frostlands",
    "subArea": "Path to the Flamebearer's Shrine",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fire",
      "Dark"
    ],
    "level": 33,
    "hp": 2183,
    "patk": 358,
    "pdef": 24,
    "matk": 358,
    "mdef": 24,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "The Ripper",
        "type": "Phys"
      },
      {
        "name": "Hard Claw",
        "type": "Phys"
      }
    ],
    "steal": "Beast Meat, Rare Beast Tusk",
    "drop": "Chimera Fang",
    "immunities": "Terror, Instant Death"
  },
  {
    "id": "98777.0",
    "name": "Ice Lizardman V",
    "area": "Frostlands",
    "subArea": "Path to the Flamebearer's Shrine",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Thunder"
    ],
    "level": 33,
    "hp": 2051,
    "patk": 358,
    "pdef": 32,
    "matk": 358,
    "mdef": 32,
    "skills": [
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Rush Stab",
        "type": "Phys"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      }
    ],
    "steal": "Healing Grape, Holy Water",
    "drop": "Rare Beast Fang, Rusty Coin",
    "immunities": "Paralysis, Silence"
  },
  {
    "id": "98776.0",
    "name": "War Wolf",
    "area": "Frostlands",
    "subArea": "Path to the Flamebearer's Shrine",
    "type": "Regular",
    "shields": 4,
    "weakness": "Staff",
    "weaknesses": [
      "Staff",
      "Tome",
      "Fan",
      "Light",
      "Dark"
    ],
    "level": 33,
    "hp": 1940,
    "patk": 358,
    "pdef": 32,
    "matk": 358,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Bite",
        "type": "Phys"
      },
      {
        "name": "Sharp Fang",
        "type": "Phys"
      }
    ],
    "steal": "Unicorn Horn",
    "drop": "Beast Hide",
    "immunities": "Poison, Petrification"
  },
  {
    "id": "32409.0",
    "name": "Snow Drake",
    "area": "Frostlands",
    "subArea": "Path to the Flamebearer's Shrine",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Thunder"
    ],
    "level": 33,
    "hp": 2033,
    "patk": 358,
    "pdef": 35,
    "matk": 358,
    "mdef": 35,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Wild Ice Claw",
        "type": "Elem"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life (M), Phoenix Feather",
    "drop": "Revitalizing Jam (L), EXP",
    "immunities": "Petrification"
  },
  {
    "id": "98135.0",
    "name": "Mountain Goat",
    "area": "Highlands",
    "subArea": "Valley of Death: East Valley of Death Valley of Death: West",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Fan",
      "Light"
    ],
    "level": 30,
    "hp": 1887,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Soporific Strike",
        "type": "Phys"
      }
    ],
    "steal": "Fire Soulstone, Olive of Life",
    "drop": "Meteorite, Star Fragment",
    "immunities": "None"
  },
  {
    "id": "98134.0",
    "name": "Shaggy Aurochs",
    "area": "Highlands",
    "subArea": "Valley of Death: East",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Ice"
    ],
    "level": 30,
    "hp": 1943,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Silencing Strike",
        "type": "Phys"
      },
      {
        "name": "Masticate",
        "type": "Unknown"
      }
    ],
    "steal": "Dragon Scale, Antidote Herb",
    "drop": "Blessed Olive (M)",
    "immunities": "Instant Death"
  },
  {
    "id": "98133.0",
    "name": "Tempest Falcon",
    "area": "Highlands",
    "subArea": "Valley of Death: East Valley of Death",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Wind"
    ],
    "level": 30,
    "hp": 1829,
    "patk": 319,
    "pdef": 31,
    "matk": 311,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Tornado Slash",
        "type": "Elem"
      },
      {
        "name": "Galeforce Slash",
        "type": "Elem"
      }
    ],
    "steal": "Silver Nugget, Revitalizing Jam (L)",
    "drop": "Silver Nugget, Olive",
    "immunities": "Instant Death"
  },
  {
    "id": "98132.0",
    "name": "Highland Ratkin III",
    "area": "Highlands",
    "subArea": "Valley of Death: East",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Dark"
    ],
    "level": 30,
    "hp": 1772,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Silencing Slash",
        "type": "Phys"
      },
      {
        "name": "Gather Strength",
        "type": "Unknown"
      }
    ],
    "steal": "Blessed Olive, Quality Beast Hide, Silver Nugget",
    "drop": "Sunshard",
    "immunities": "None"
  },
  {
    "id": "98136.0",
    "name": "Highland Ratkin IV",
    "area": "Highlands",
    "subArea": "Valley of Death Valley of Death: West",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Wind",
      "Light"
    ],
    "level": 30,
    "hp": 1772,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slash",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L), Wind Soulstone, Revitalizing Jam (L)",
    "drop": "SP-Restoring Nut (L)",
    "immunities": "Sleep"
  },
  {
    "id": "98749.0",
    "name": "Spiked Skink",
    "area": "Highlands",
    "subArea": "Valley of Death",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Staff",
      "Dark"
    ],
    "level": 30,
    "hp": 3101,
    "patk": 358,
    "pdef": 31,
    "matk": 446,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Violent Charge",
        "type": "Phys"
      },
      {
        "name": "Strong Thorn Storm",
        "type": "Phys"
      }
    ],
    "steal": "Hydra Scale, Copper Ore, Inspiring Plum",
    "drop": "Grape, HP-Restoring Herb (M), Quality Beast Horn",
    "immunities": "Confusion, Stun"
  },
  {
    "id": "98137.0",
    "name": "Highland Goat",
    "area": "Highlands",
    "subArea": "Valley of Death Valley of Death: West",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Light"
    ],
    "level": 30,
    "hp": 1984,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Bam!",
        "type": "Phys"
      }
    ],
    "steal": "Basilisk Eye, SP-Restoring Nut (L)",
    "drop": "Gold Dust",
    "immunities": "None"
  },
  {
    "id": "98138.0",
    "name": "Highland Ratkin V",
    "area": "Highlands",
    "subArea": "Valley of Death: West",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Wind",
      "Light"
    ],
    "level": 30,
    "hp": 1815,
    "patk": 319,
    "pdef": 31,
    "matk": 319,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Silencing Slash",
        "type": "Phys"
      },
      {
        "name": "Hack",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, Basilisk Eye, Holy Water (L)",
    "drop": "Rare Beast Horn",
    "immunities": "None"
  },
  {
    "id": "98174.0",
    "name": "Wind Remnant",
    "area": "Riverlands",
    "subArea": "Stillwater Subterrane",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder"
    ],
    "level": 31,
    "hp": 1842,
    "patk": 323,
    "pdef": 31,
    "matk": 303,
    "mdef": 31,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Zephyr Breeze",
        "type": "Elem"
      },
      {
        "name": "Mighty Gale",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Horn, Gold Dust, SP-Restoring Nut (L)",
    "drop": "Beast Tusk, Inspiring Plum Basket, Silver Nugget",
    "immunities": "None"
  },
  {
    "id": "98175.0",
    "name": "Thunder Remnant",
    "area": "Riverlands Coastlands",
    "subArea": "Stillwater Subterrane Man-Eating Miser's Hideout",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Wind"
    ],
    "level": 31,
    "hp": 1917,
    "patk": 323,
    "pdef": 31,
    "matk": 303,
    "mdef": 31,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Lightning Strike",
        "type": "Elem"
      },
      {
        "name": "Electrical Discharge",
        "type": "Elem"
      }
    ],
    "steal": "Wind Soulstone, Rare Beast Tusk, Quality Beast Meat",
    "drop": "Healing Grape Bunch, Rare Beast Meat",
    "immunities": "Poison"
  },
  {
    "id": "98176.0",
    "name": "Light Remnant",
    "area": "Riverlands Coastlands",
    "subArea": "Stillwater Subterrane Man-Eating Miser's Hideout",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 31,
    "hp": 1956,
    "patk": 323,
    "pdef": 31,
    "matk": 303,
    "mdef": 31,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Luminance",
        "type": "Elem"
      },
      {
        "name": "Midnight Sun",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Hide, Lightning Soulstone, Rare Beast Hide",
    "drop": "Olive of Life (M), Moonstone",
    "immunities": "Silence"
  },
  {
    "id": "98177.0",
    "name": "Shadow Remnant",
    "area": "Riverlands",
    "subArea": "Stillwater Subterrane",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 31,
    "hp": 2038,
    "patk": 323,
    "pdef": 31,
    "matk": 303,
    "mdef": 31,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Dead of Night",
        "type": "Elem"
      },
      {
        "name": "Solar Eclipse",
        "type": "Elem"
      }
    ],
    "steal": "Antidote Herb",
    "drop": "HP-Restoring Herb (L), Sphinx Feather, Beast Horn",
    "immunities": "Curse"
  },
  {
    "id": "98309.0",
    "name": "Light Guardian",
    "area": "Riverlands Coastlands",
    "subArea": "Castle Riven Man-Eating Miser's Hideout",
    "type": "Boss",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Dark"
    ],
    "level": 31,
    "hp": 1930,
    "patk": 323,
    "pdef": 31,
    "matk": 303,
    "mdef": 27,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slash",
        "type": "Elem"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "SP-Restoring Nut",
    "immunities": "None"
  },
  {
    "id": "98308.0",
    "name": "Light Sentinel",
    "area": "Riverlands Coastlands",
    "subArea": "Castle Riven Man-Eating Miser's Hideout",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 31,
    "hp": 1806,
    "patk": 323,
    "pdef": 27,
    "matk": 303,
    "mdef": 31,
    "skills": [
      {
        "name": "Light Shot",
        "type": "Elem"
      },
      {
        "name": "Luminance",
        "type": "Elem"
      },
      {
        "name": "Repeated Light Shot",
        "type": "Elem"
      }
    ],
    "steal": "Sunshard",
    "drop": "SP-Restoring Nut (L)",
    "immunities": "None"
  },
  {
    "id": "98759.0",
    "name": "Revenant",
    "area": "Riverlands",
    "subArea": "Castle Riven",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Light",
      "Dark"
    ],
    "level": 31,
    "hp": 3224,
    "patk": 362,
    "pdef": 31,
    "matk": 332,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Impact",
        "type": "Phys"
      },
      {
        "name": "Meteor Storm",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "Sphinx Feather, Antidote Herb, Antidote Herb (M)",
    "immunities": "None"
  },
  {
    "id": "98310.0",
    "name": "Riven Soldier I",
    "area": "Riverlands",
    "subArea": "Castle Riven",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 31,
    "hp": 1979,
    "patk": 323,
    "pdef": 31,
    "matk": 303,
    "mdef": 27,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Grand Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      }
    ],
    "steal": "Basilisk Eye, Beast Claw",
    "drop": "Copper Ore",
    "immunities": "Curse"
  },
  {
    "id": "98311.0",
    "name": "Riven Soldier II",
    "area": "Riverlands",
    "subArea": "Castle Riven",
    "type": "Regular",
    "shields": 3,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Staff",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 31,
    "hp": 2110,
    "patk": 323,
    "pdef": 31,
    "matk": 303,
    "mdef": 27,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Desperation Attack",
        "type": "Phys"
      },
      {
        "name": "Hold Strong!",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Claw, SP-Restoring Nut (M)",
    "drop": "Leaf, Herb",
    "immunities": "None"
  },
  {
    "id": "98087.0",
    "name": "Cliff Birdkin I",
    "area": "Cliftlands",
    "subArea": "Road to Castle Edoras",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Staff",
      "Thunder"
    ],
    "level": 32,
    "hp": 1920,
    "patk": 355,
    "pdef": 32,
    "matk": 350,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Multi-Shot",
        "type": "Phys"
      },
      {
        "name": "Silencing Arrow",
        "type": "Phys"
      }
    ],
    "steal": "Rusty Coin, Beast Fang, Sunshard",
    "drop": "HP-Restoring Herb (L), Beast Claw",
    "immunities": "Poison"
  },
  {
    "id": "98088.0",
    "name": "Cliff Birdkin II",
    "area": "Cliftlands",
    "subArea": "Road to Castle Edoras",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Staff",
      "Thunder"
    ],
    "level": 32,
    "hp": 1997,
    "patk": 355,
    "pdef": 32,
    "matk": 350,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sturdy Shot",
        "type": "Phys"
      },
      {
        "name": "Silencing Arrow",
        "type": "Phys"
      }
    ],
    "steal": "Hydra Scale",
    "drop": "Gold Dust, HP-Restoring Herb",
    "immunities": "None"
  },
  {
    "id": "98737.0",
    "name": "King Condor",
    "area": "Cliftlands",
    "subArea": "Road to Castle Edoras",
    "type": "Boss",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fan",
      "Thunder"
    ],
    "level": 32,
    "hp": 3360,
    "patk": 388,
    "pdef": 32,
    "matk": 376,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "Swoop",
        "type": "Phys"
      }
    ],
    "steal": "Sunshard",
    "drop": "Shiny Coin, Rare Beast Tusk",
    "immunities": "Stun, Curse"
  },
  {
    "id": "98089.0",
    "name": "Cliff Birdkin III",
    "area": "Cliftlands",
    "subArea": "Road to Castle Edoras",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Dark"
    ],
    "level": 32,
    "hp": 2089,
    "patk": 355,
    "pdef": 32,
    "matk": 350,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sturdy Shot",
        "type": "Phys"
      },
      {
        "name": "Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Light Soulstone, Rare Beast Tusk",
    "drop": "SP-Restoring Nut (L)",
    "immunities": "Paralysis, Instant Death"
  },
  {
    "id": "98090.0",
    "name": "Ettin Snake",
    "area": "Cliftlands",
    "subArea": "Road to Castle Edoras",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire"
    ],
    "level": 32,
    "hp": 2141,
    "patk": 355,
    "pdef": 32,
    "matk": 350,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Horrible Breath",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive (M)",
    "drop": "Herb, Quality Beast Fang, Revitalizing Jam",
    "immunities": "Blind"
  },
  {
    "id": "98091.0",
    "name": "Edoras Soldier I",
    "area": "Cliftlands",
    "subArea": "Castle Edoras Castle Edoras: Upper Floor",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Ice",
      "Thunder"
    ],
    "level": 32,
    "hp": 1920,
    "patk": 355,
    "pdef": 32,
    "matk": 350,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Speed Up",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water (L), Quality Beast Hide, Sunshard",
    "drop": "Revitalizing Jam (L), EXP, Iron Ore",
    "immunities": "Terror, Paralysis"
  },
  {
    "id": "98092.0",
    "name": "Edoras Soldier II",
    "area": "Cliftlands",
    "subArea": "Castle Edoras Castle Edoras: Upper Floor",
    "type": "Regular",
    "shields": 3,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Thunder",
      "Wind"
    ],
    "level": 32,
    "hp": 1920,
    "patk": 355,
    "pdef": 32,
    "matk": 350,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Grand Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Uncritical Eye",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Horn",
    "drop": "SP-Restoring Nut (M), Silver Nugget",
    "immunities": "None"
  },
  {
    "id": "98093.0",
    "name": "Edoras Soldier III",
    "area": "Cliftlands",
    "subArea": "Castle Edoras Castle Edoras: Upper Floor Castle Edoras: Courtyard",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Ice"
    ],
    "level": 32,
    "hp": 1920,
    "patk": 355,
    "pdef": 32,
    "matk": 350,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Trifold Bash",
        "type": "Phys"
      },
      {
        "name": "Fiery Blow",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Silver Nugget",
    "drop": "Quality Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98094.0",
    "name": "Edoras Knight I",
    "area": "Cliftlands",
    "subArea": "Castle Edoras Castle Edoras: Upper Floor Castle Edoras: Courtyard",
    "type": "Regular",
    "shields": 3,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 32,
    "hp": 2012,
    "patk": 355,
    "pdef": 32,
    "matk": 360,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Greatsword of Darkness",
        "type": "Elem"
      },
      {
        "name": "Charge!",
        "type": "Unknown"
      }
    ],
    "steal": "Minotaur Horn, Blessed Olive, Quality Beast Claw",
    "drop": "Olive of Life (M)",
    "immunities": "Curse"
  },
  {
    "id": "98095.0",
    "name": "Edoras Knight II",
    "area": "Cliftlands",
    "subArea": "Castle Edoras: Upper Floor Castle Edoras: Courtyard",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Staff",
      "Tome",
      "Fire",
      "Ice"
    ],
    "level": 32,
    "hp": 2096,
    "patk": 355,
    "pdef": 32,
    "matk": 360,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Greatsword of Thunder",
        "type": "Elem"
      },
      {
        "name": "Hold Strong!",
        "type": "Unknown"
      }
    ],
    "steal": "Inspiring Plum Basket",
    "drop": "Dragon Scale, Quality Beast Meat",
    "immunities": "Paralysis"
  },
  {
    "id": "98096.0",
    "name": "Edoras Knight III",
    "area": "Cliftlands",
    "subArea": "Castle Edoras Castle Edoras: Upper Floor Castle Edoras: Courtyard",
    "type": "Regular",
    "shields": 3,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 32,
    "hp": 2135,
    "patk": 355,
    "pdef": 32,
    "matk": 360,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Greataxe of Light",
        "type": "Elem"
      },
      {
        "name": "March Order",
        "type": "Unknown"
      }
    ],
    "steal": "Cerberus Fang",
    "drop": "Quality Beast Meat, Holy Water (M)",
    "immunities": "Curse"
  },
  {
    "id": "98738.0",
    "name": "Light Curator Mk.II",
    "area": "Cliftlands",
    "subArea": "Castle Edoras",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 32,
    "hp": 3360,
    "patk": 388,
    "pdef": 32,
    "matk": 376,
    "mdef": 32,
    "skills": [
      {
        "name": "Light Shot",
        "type": "Elem"
      },
      {
        "name": "Luminescent Impact",
        "type": "Elem"
      },
      {
        "name": "Wild Light Shot",
        "type": "Elem"
      }
    ],
    "steal": "Gold Dust, Basilisk Eye, Silver Nugget",
    "drop": "Chimera Fang",
    "immunities": "None"
  },
  {
    "id": "98739.0",
    "name": "Light Guardian Mk.II",
    "area": "Cliftlands",
    "subArea": "Castle Edoras: Upper Floor",
    "type": "Boss",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Dark"
    ],
    "level": 32,
    "hp": 3360,
    "patk": 388,
    "pdef": 32,
    "matk": 376,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slash",
        "type": "Elem"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (M), Herb",
    "drop": "Soulstone, SP-Restoring Nut",
    "immunities": "None"
  },
  {
    "id": "98750.0",
    "name": "Wild Weasel",
    "area": "Highlands",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 6,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Ice",
      "Thunder"
    ],
    "level": 33,
    "hp": 3395,
    "patk": 397,
    "pdef": 32,
    "matk": 397,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "The Ripper",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Claw",
    "drop": "Shiny Coin, Antidote Herb",
    "immunities": "Petrification"
  },
  {
    "id": "98139.0",
    "name": "Bandit I",
    "area": "Highlands",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Wind",
      "Dark"
    ],
    "level": 33,
    "hp": 1940,
    "patk": 358,
    "pdef": 32,
    "matk": 358,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Brandish",
        "type": "Phys"
      }
    ],
    "steal": "Iron Ore",
    "drop": "EXP, Holy Water (M)",
    "immunities": "Silence, Instant Death"
  },
  {
    "id": "98140.0",
    "name": "Bandit II",
    "area": "Highlands",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Wind",
      "Dark"
    ],
    "level": 33,
    "hp": 1977,
    "patk": 358,
    "pdef": 32,
    "matk": 358,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Brandish",
        "type": "Phys"
      }
    ],
    "steal": "Old Coin, Quality Beast Fang, Antidote Herb (L)",
    "drop": "Rare Beast Tusk",
    "immunities": "Blind"
  },
  {
    "id": "98141.0",
    "name": "Bandit III",
    "area": "Highlands",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Thunder",
      "Dark"
    ],
    "level": 33,
    "hp": 2110,
    "patk": 358,
    "pdef": 32,
    "matk": 358,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Brandish",
        "type": "Phys"
      },
      {
        "name": "Multi-Cleave",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L)",
    "drop": "Minotaur Horn, Kraken Ink",
    "immunities": "None"
  },
  {
    "id": "98142.0",
    "name": "Blood Viper",
    "area": "Highlands",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 33,
    "hp": 2228,
    "patk": 358,
    "pdef": 32,
    "matk": 358,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Fireshots",
        "type": "Elem"
      },
      {
        "name": "Venomous Fang",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, Holy Water (L), Hydra Scale",
    "drop": "Beast Claw, Leaf, Rusty Coin",
    "immunities": "None"
  },
  {
    "id": "32366.0",
    "name": "Wild Boar",
    "area": "Woodlands",
    "subArea": "Victors Hollow Trail",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Tome",
      "Dark"
    ],
    "level": 34,
    "hp": 2302,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Gather Strength",
        "type": "Unknown"
      }
    ],
    "steal": "Phoenix Feather, Basilisk Eye",
    "drop": "Blessed Olive (L)",
    "immunities": "Blind, Terror"
  },
  {
    "id": "32348.0",
    "name": "Horned Howler",
    "area": "Woodlands",
    "subArea": "Victors Hollow Trail",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fan",
      "Thunder"
    ],
    "level": 34,
    "hp": 2179,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Soporific Claw",
        "type": "Phys"
      }
    ],
    "steal": "Sunshard",
    "drop": "Ancient Coin",
    "immunities": "None"
  },
  {
    "id": "32352.0",
    "name": "Forest Ratkin IV",
    "area": "Woodlands",
    "subArea": "Victors Hollow Trail",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 34,
    "hp": 2028,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Multi-Shot",
        "type": "Phys"
      },
      {
        "name": "Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Meteorite, Moonstone, Hydra Scale",
    "drop": "Quality Beast Horn, HP-Restoring Herb",
    "immunities": "Blind"
  },
  {
    "id": "32365.0",
    "name": "Forest Fox",
    "area": "Woodlands",
    "subArea": "Victors Hollow Trail",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Wind"
    ],
    "level": 34,
    "hp": 2109,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      }
    ],
    "steal": "Unicorn Horn",
    "drop": "Grape, Moonstone",
    "immunities": "Stun, Paralysis"
  },
  {
    "id": "98746.0",
    "name": "Shield Wielder",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 7,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Fan",
      "Wind"
    ],
    "level": 36,
    "hp": 3770,
    "patk": 413,
    "pdef": 33,
    "matk": 413,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "Strong Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Griffin Claw, HP-Restoring Herb (L), Beast Meat",
    "drop": "Minotaur Horn, Rare Beast Fang",
    "immunities": "Instant Death, Terror"
  },
  {
    "id": "32369.0",
    "name": "Combatant (Scholar)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 36,
    "hp": 2367,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Electrocute",
        "type": "Elem"
      },
      {
        "name": "Lightning Bolt",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Tusk, Healing Grape, Basilisk Eye",
    "drop": "SP-Restoring Nut, Moonstone, Inspiring Plum Basket",
    "immunities": "Petrification, Confusion"
  },
  {
    "id": "32370.0",
    "name": "Combatant (Dancer)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Thunder",
      "Wind"
    ],
    "level": 36,
    "hp": 2326,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Moonlight Waltz",
        "type": "Elem"
      },
      {
        "name": "Song of Raging Fire",
        "type": "Elem"
      },
      {
        "name": "Master's Inspiration",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Meat, Light Soulstone",
    "drop": "Rare Beast Meat, Cerberus Fang, Antidote Herb (M)",
    "immunities": "None"
  },
  {
    "id": "32368.0",
    "name": "Combatant (Apothecary)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Thunder",
      "Wind"
    ],
    "level": 36,
    "hp": 2353,
    "patk": 373,
    "pdef": 33,
    "matk": 373,
    "mdef": 33,
    "skills": [
      {
        "name": "Bottled Flame",
        "type": "Elem"
      },
      {
        "name": "Bottled Lightning",
        "type": "Elem"
      },
      {
        "name": "Wild Numbing Dust",
        "type": "Phys"
      }
    ],
    "steal": "Copper Ore",
    "drop": "Sunshard, Cerberus Fang",
    "immunities": "Poison, Petrification"
  },
  {
    "id": "32367.0",
    "name": "Combatant (Hunter)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Thunder",
      "Dark"
    ],
    "level": 36,
    "hp": 2328,
    "patk": 373,
    "pdef": 33,
    "matk": 373,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flurry",
        "type": "Phys"
      },
      {
        "name": "Critical Eye",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Claw",
    "drop": "Copper Ore",
    "immunities": "Blind, Petrification"
  },
  {
    "id": "32371.0",
    "name": "Combatant (Thief)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Thunder",
      "Dark"
    ],
    "level": 36,
    "hp": 2188,
    "patk": 373,
    "pdef": 33,
    "matk": 373,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "HP Thief",
        "type": "Phys"
      },
      {
        "name": "Armor Corrosive",
        "type": "Unknown"
      }
    ],
    "steal": "Light Soulstone, Rare Beast Horn",
    "drop": "Rare Beast Hide",
    "immunities": "Poison, Instant Death"
  },
  {
    "id": "32372.0",
    "name": "Combatant (Merchant)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 36,
    "hp": 2365,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Icestone",
        "type": "Elem"
      },
      {
        "name": "Windstone",
        "type": "Elem"
      },
      {
        "name": "Light Soulstone",
        "type": "Elem"
      }
    ],
    "steal": "Blessed Olive (M), Hydra Scale",
    "drop": "Grape, Silver Nugget, Revitalizing Jam",
    "immunities": "Silence"
  },
  {
    "id": "32373.0",
    "name": "Combatant (Cleric)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 36,
    "hp": 2305,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Traumatic Bash",
        "type": "Phys"
      },
      {
        "name": "Protective Aura",
        "type": "Unknown"
      },
      {
        "name": "Heal Wounds",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (M), Quality Beast Meat",
    "drop": "Revitalizing Jam (L), Quality Beast Hide, Quality Beast Fang",
    "immunities": "Blind"
  },
  {
    "id": "98748.0",
    "name": "Creeping Treant",
    "area": "Woodlands",
    "subArea": "Great Tree's Tears",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fire",
      "Thunder"
    ],
    "level": 34,
    "hp": 3549,
    "patk": 407,
    "pdef": 32,
    "matk": 407,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Windblown Dust",
        "type": "Elem"
      },
      {
        "name": "Mass Silencing Sting",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget, Rare Beast Meat",
    "drop": "Leaf, Basilisk Eye, Grape",
    "immunities": "Instant Death"
  },
  {
    "id": "32375.0",
    "name": "Assassin Bug",
    "area": "Woodlands",
    "subArea": "Great Tree's Tears",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Dark"
    ],
    "level": 34,
    "hp": 2028,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Blinding Claw",
        "type": "Phys"
      },
      {
        "name": "Bug Eater",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (L)",
    "drop": "SP-Restoring Nut",
    "immunities": "Poison"
  },
  {
    "id": "32376.0",
    "name": "Green Scissors",
    "area": "Woodlands",
    "subArea": "Great Tree's Tears",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Wind"
    ],
    "level": 34,
    "hp": 2126,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Toxic Breath",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Horn",
    "drop": "Antidote Herb (L)",
    "immunities": "Sleep, Paralysis"
  },
  {
    "id": "32377.0",
    "name": "Mutant Mushroom",
    "area": "Woodlands",
    "subArea": "Great Tree's Tears",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire"
    ],
    "level": 34,
    "hp": 2156,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Soporific Sting",
        "type": "Phys"
      },
      {
        "name": "Augmented Spore",
        "type": "Unknown"
      },
      {
        "name": "Photosynthesis",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb",
    "drop": "Moonstone, Copper Ore, Hydra Scale",
    "immunities": "None"
  },
  {
    "id": "32378.0",
    "name": "Skulking Fungoid",
    "area": "Woodlands",
    "subArea": "Great Tree's Tears",
    "type": "Boss",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Ice"
    ],
    "level": 34,
    "hp": 2236,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Blinding Sting",
        "type": "Phys"
      },
      {
        "name": "Silencing Sting",
        "type": "Phys"
      }
    ],
    "steal": "Dragon Scale, Basilisk Eye, Inspiring Plum",
    "drop": "Beast Hide, HP-Restoring Herb (L)",
    "immunities": "Petrification"
  },
  {
    "id": "98178.0",
    "name": "River Froggen IV",
    "area": "Riverlands",
    "subArea": "Donescu Traverse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 34,
    "hp": 2028,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slumber Slash",
        "type": "Phys"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Tusk, Copper Ore, Antidote Herb (L)",
    "drop": "Soulstone, Quality Beast Fang",
    "immunities": "Paralysis"
  },
  {
    "id": "98181.0",
    "name": "Salamander",
    "area": "Riverlands",
    "subArea": "Donescu Traverse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Fan",
      "Ice",
      "Light"
    ],
    "level": 34,
    "hp": 2314,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Toxic Breath",
        "type": "Phys"
      }
    ],
    "steal": "Copper Ore, Rare Beast Tusk",
    "drop": "Rare Beast Tusk, Plum",
    "immunities": "None"
  },
  {
    "id": "98180.0",
    "name": "Woolly Spider",
    "area": "Riverlands",
    "subArea": "Donescu Traverse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Thunder"
    ],
    "level": 34,
    "hp": 2166,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Spider's Web",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb, Light Soulstone",
    "drop": "Rare Beast Fang, Phoenix Feather",
    "immunities": "Paralysis"
  },
  {
    "id": "98179.0",
    "name": "Savage Scorpion",
    "area": "Riverlands",
    "subArea": "Donescu Traverse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 34,
    "hp": 2100,
    "patk": 367,
    "pdef": 32,
    "matk": 367,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Claw",
        "type": "Phys"
      },
      {
        "name": "Quick Stab",
        "type": "Phys"
      }
    ],
    "steal": "Hydra Scale, Dragon Scale, Quality Beast Horn",
    "drop": "Rare Beast Hide, Copper Ore, Chimera Fang",
    "immunities": "Blind, Instant Death"
  },
  {
    "id": "98760.0",
    "name": "Rock Tortoise",
    "area": "Riverlands",
    "subArea": "East Cyphlo Banks Cyphlo Banks",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fan",
      "Light"
    ],
    "level": 36,
    "hp": 3770,
    "patk": 413,
    "pdef": 33,
    "matk": 395,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spark",
        "type": "Elem"
      },
      {
        "name": "Shell Shield",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Hide, Herb, Nut",
    "drop": "Beast Fang, Quality Beast Fang",
    "immunities": "Instant Death"
  },
  {
    "id": "98182.0",
    "name": "Barnacle Tortoise",
    "area": "Riverlands",
    "subArea": "East Cyphlo Banks Cyphlo Banks",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Wind"
    ],
    "level": 36,
    "hp": 2154,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Electrocute",
        "type": "Elem"
      },
      {
        "name": "Enfeebling Bite",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive",
    "drop": "Basilisk Eye",
    "immunities": "Curse, Confusion"
  },
  {
    "id": "98183.0",
    "name": "Sea Slug",
    "area": "Riverlands",
    "subArea": "East Cyphlo Banks Cyphlo Banks",
    "type": "Regular",
    "shields": 4,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Fire",
      "Wind",
      "Dark"
    ],
    "level": 36,
    "hp": 2180,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hail",
        "type": "Elem"
      },
      {
        "name": "Icy Tempest",
        "type": "Elem"
      }
    ],
    "steal": "Phoenix Feather, Rare Beast Claw",
    "drop": "Nut",
    "immunities": "None"
  },
  {
    "id": "98184.0",
    "name": "River Froggen V",
    "area": "Riverlands",
    "subArea": "East Cyphlo Banks Cyphlo Banks",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 36,
    "hp": 2367,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slumber Slash",
        "type": "Phys"
      },
      {
        "name": "Water Hammer",
        "type": "Elem"
      }
    ],
    "steal": "Revitalizing Jam (L), Beast Tusk",
    "drop": "Copper Ore, Iron Ore, Rare Beast Fang",
    "immunities": "Terror, Poison"
  },
  {
    "id": "98185.0",
    "name": "Collared Salamander",
    "area": "Riverlands",
    "subArea": "East Cyphlo Banks Cyphlo Banks",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 36,
    "hp": 2378,
    "patk": 373,
    "pdef": 33,
    "matk": 378,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Horrible Breath",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "Olive, Basilisk Eye",
    "immunities": "Curse, Sleep"
  },
  {
    "id": "98761.0",
    "name": "Light Elemental",
    "area": "Riverlands",
    "subArea": "Misty Falls",
    "type": "Regular",
    "shields": 7,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 38,
    "hp": 3994,
    "patk": 431,
    "pdef": 34,
    "matk": 406,
    "mdef": 34,
    "skills": [
      {
        "name": "Light Shot",
        "type": "Elem"
      },
      {
        "name": "Repeated Light Shot",
        "type": "Elem"
      },
      {
        "name": "Wild Light Shot",
        "type": "Elem"
      }
    ],
    "steal": "Healing Grape",
    "drop": "EXP, SP-Restoring Nut",
    "immunities": "None"
  },
  {
    "id": "98186.0",
    "name": "River Frogking I",
    "area": "Riverlands",
    "subArea": "Misty Falls",
    "type": "Boss",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 38,
    "hp": 2282,
    "patk": 395,
    "pdef": 34,
    "matk": 395,
    "mdef": 34,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Water Hammer",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb (L)",
    "drop": "Quality Beast Horn, Antidote Herb, Rare Beast Meat",
    "immunities": "Blind, Sleep"
  },
  {
    "id": "98187.0",
    "name": "Slayer Bug",
    "area": "Riverlands",
    "subArea": "Misty Falls",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Dark"
    ],
    "level": 38,
    "hp": 2367,
    "patk": 395,
    "pdef": 34,
    "matk": 369,
    "mdef": 34,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Shadow Sweep",
        "type": "Elem"
      },
      {
        "name": "Blinding Claw",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam, Quality Beast Hide, Ancient Coin",
    "drop": "Manticore Stinger, Blessed Olive (L), Antidote Herb",
    "immunities": "None"
  },
  {
    "id": "98188.0",
    "name": "Giant Gator",
    "area": "Riverlands",
    "subArea": "Misty Falls",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 38,
    "hp": 2413,
    "patk": 395,
    "pdef": 34,
    "matk": 395,
    "mdef": 34,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Chew to Bits",
        "type": "Phys"
      }
    ],
    "steal": "Fire Soulstone, HP-Restoring Herb (M)",
    "drop": "Blessed Olive (L)",
    "immunities": "Poison, Sleep"
  },
  {
    "id": "98189.0",
    "name": "Light Wisp",
    "area": "Riverlands",
    "subArea": "Misty Falls",
    "type": "Regular",
    "shields": 4,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 38,
    "hp": 2538,
    "patk": 369,
    "pdef": 34,
    "matk": 369,
    "mdef": 34,
    "skills": [
      {
        "name": "Luminescent Strike",
        "type": "Elem"
      },
      {
        "name": "Twofold Luminescent Strike",
        "type": "Elem"
      },
      {
        "name": "Luminance",
        "type": "Elem"
      }
    ],
    "steal": "Revitalizing Jam, Quality Beast Tusk",
    "drop": "Plum, Silver Nugget",
    "immunities": "Terror"
  },
  {
    "id": "32403.0",
    "name": "Test Subject (Beast)",
    "area": "Frostlands",
    "subArea": "Cathedral of Tytos: Underground Emberglow Laboratory: Inner Chambers",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Fire"
    ],
    "level": 36,
    "hp": 2154,
    "patk": 373,
    "pdef": 33,
    "matk": 373,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Tusk",
    "drop": "Griffin Claw",
    "immunities": "Stun"
  },
  {
    "id": "32404.0",
    "name": "Test Subject (Insect)",
    "area": "Frostlands",
    "subArea": "Cathedral of Tytos: Underground Emberglow Laboratory: Inner Chambers",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire"
    ],
    "level": 36,
    "hp": 2255,
    "patk": 373,
    "pdef": 33,
    "matk": 373,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mandible Crush",
        "type": "Phys"
      },
      {
        "name": "Numbing Needle",
        "type": "Phys"
      }
    ],
    "steal": "Minotaur Horn",
    "drop": "Holy Water (M), Plum",
    "immunities": "Instant Death"
  },
  {
    "id": "32405.0",
    "name": "Test Subject (Bandit)",
    "area": "Frostlands",
    "subArea": "Cathedral of Tytos: Underground Emberglow Laboratory: Inner Chambers",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Light",
      "Dark"
    ],
    "level": 36,
    "hp": 2355,
    "patk": 373,
    "pdef": 33,
    "matk": 373,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Brandish",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Claw, Rare Beast Horn",
    "drop": "EXP, Rare Beast Meat",
    "immunities": "Poison"
  },
  {
    "id": "32406.0",
    "name": "Test Subject (Thief)",
    "area": "Frostlands",
    "subArea": "Cathedral of Tytos: Underground",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Thunder",
      "Dark"
    ],
    "level": 36,
    "hp": 2417,
    "patk": 373,
    "pdef": 33,
    "matk": 373,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "Running Slash",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L), HP-Restoring Herb, Manticore Stinger",
    "drop": "Blessed Olive",
    "immunities": "None"
  },
  {
    "id": "98770.0",
    "name": "Manticore Subject",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory: Inner Chambers",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Wind"
    ],
    "level": 36,
    "hp": 3770,
    "patk": 413,
    "pdef": 33,
    "matk": 413,
    "mdef": 33,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Ripper",
        "type": "Phys"
      },
      {
        "name": "Double Cleave",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (M), Old Coin",
    "drop": "Rusty Coin",
    "immunities": "Confusion"
  },
  {
    "id": "98109.0",
    "name": "Ivory Scorpion",
    "area": "Sunlands",
    "subArea": "Sufrataljah Sands",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 39,
    "hp": 2360,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Claw",
        "type": "Phys"
      },
      {
        "name": "Venomous Claw",
        "type": "Phys"
      }
    ],
    "steal": "Hydra Scale, Healing Grape Bunch",
    "drop": "Basilisk Eye",
    "immunities": "Blind, Stun"
  },
  {
    "id": "98110.0",
    "name": "Assassin Bug (Silversand)",
    "area": "Sunlands",
    "subArea": "Sufrataljah Sands",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Ice",
      "Thunder"
    ],
    "level": 39,
    "hp": 2460,
    "patk": 398,
    "pdef": 35,
    "matk": 409,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Windy Sweep",
        "type": "Elem"
      },
      {
        "name": "Numbing Bite",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Meat, Rare Beast Hide",
    "drop": "Beast Meat, Rare Beast Horn",
    "immunities": "Petrification, Terror"
  },
  {
    "id": "98111.0",
    "name": "Ivory Roller",
    "area": "Sunlands",
    "subArea": "Sufrataljah Sands",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Thunder",
      "Dark"
    ],
    "level": 39,
    "hp": 2593,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Roll Attack",
        "type": "Phys"
      },
      {
        "name": "Run Over",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (L), Quality Beast Fang",
    "drop": "Quality Beast Hide, Holy Water (M)",
    "immunities": "Silence"
  },
  {
    "id": "98112.0",
    "name": "Silversand Lizardman I",
    "area": "Sunlands",
    "subArea": "Sufrataljah Sands",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 39,
    "hp": 2709,
    "patk": 398,
    "pdef": 35,
    "matk": 409,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Blow",
        "type": "Phys"
      },
      {
        "name": "Hurricane Blow",
        "type": "Elem"
      }
    ],
    "steal": "Beast Claw, Iron Ore",
    "drop": "Rare Beast Fang, HP-Restoring Herb (M), Antidote Herb",
    "immunities": "Petrification"
  },
  {
    "id": "98113.0",
    "name": "Insurgent (Staff)",
    "area": "Sunlands",
    "subArea": "Sufrataljah: Palace Sufrataljah: Palace - Upper Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 40,
    "hp": 2440,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mental Concentration",
        "type": "Unknown"
      },
      {
        "name": "Restore Health",
        "type": "Unknown"
      }
    ],
    "steal": "Fire Soulstone, Blessed Olive (M), Revitalizing Jam (M)",
    "drop": "JP, Quality Beast Tusk, Antidote Herb",
    "immunities": "Confusion"
  },
  {
    "id": "98114.0",
    "name": "Insurgent (Axe)",
    "area": "Sunlands",
    "subArea": "Sufrataljah: Palace Sufrataljah: Palace - Upper Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 40,
    "hp": 2552,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Multi-Cleave",
        "type": "Phys"
      }
    ],
    "steal": "Phoenix Feather",
    "drop": "Leaf, Gold, Revitalizing Jam (L)",
    "immunities": "Sleep, Confusion"
  },
  {
    "id": "98115.0",
    "name": "Insurgent (Fan)",
    "area": "Sunlands",
    "subArea": "Sufrataljah: Palace Sufrataljah: Palace - Upper Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 40,
    "hp": 2679,
    "patk": 406,
    "pdef": 35,
    "matk": 370,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Night Ode",
        "type": "Elem"
      },
      {
        "name": "Spirited Mole Dance",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (M)",
    "drop": "Antidote Herb (L), Iron Ore, SP-Restoring Nut",
    "immunities": "Terror"
  },
  {
    "id": "98116.0",
    "name": "Silver Wind Sentinel",
    "area": "Sunlands",
    "subArea": "Sufrataljah: Palace Sufrataljah: Palace - Upper Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 40,
    "hp": 2758,
    "patk": 370,
    "pdef": 35,
    "matk": 370,
    "mdef": 35,
    "skills": [
      {
        "name": "Gale Shot",
        "type": "Elem"
      },
      {
        "name": "Zephyr Breeze",
        "type": "Elem"
      },
      {
        "name": "Wild Gale Shot",
        "type": "Elem"
      }
    ],
    "steal": "Blessed Olive",
    "drop": "Dragon Scale, Hydra Scale, HP-Restoring Herb (L)",
    "immunities": "Blind, Confusion"
  },
  {
    "id": "98741.0",
    "name": "Gold Flame Guardian",
    "area": "Sunlands",
    "subArea": "Sufrataljah: Palace - Upper Floor",
    "type": "Boss",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 40,
    "hp": 4270,
    "patk": 442,
    "pdef": 35,
    "matk": 417,
    "mdef": 35,
    "skills": [
      {
        "name": "Flame Cut",
        "type": "Elem"
      },
      {
        "name": "Fiery Sweep",
        "type": "Elem"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      }
    ],
    "steal": "Healing Grape Bunch, Phoenix Feather",
    "drop": "SP-Restoring Nut (M), Dragon Scale",
    "immunities": "Curse, Confusion"
  },
  {
    "id": "98337.0",
    "name": "Barbed Fish",
    "area": "Coastlands",
    "subArea": "Outersea",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Thunder"
    ],
    "level": 39,
    "hp": 2360,
    "patk": 398,
    "pdef": 35,
    "matk": 363,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Water Cannon",
        "type": "Elem"
      },
      {
        "name": "Wild Needle Cannon",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Fang, Rare Beast Fang",
    "drop": "Rare Beast Horn, Chimera Fang, Cerberus Fang",
    "immunities": "None"
  },
  {
    "id": "98338.0",
    "name": "Sea Dragon",
    "area": "Coastlands",
    "subArea": "Outersea",
    "type": "Boss",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 39,
    "hp": 2444,
    "patk": 398,
    "pdef": 35,
    "matk": 363,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Water Cannon",
        "type": "Elem"
      },
      {
        "name": "Sunshine",
        "type": "Elem"
      }
    ],
    "steal": "Holy Water, Cerberus Fang, Blessed Olive (M)",
    "drop": "SP-Restoring Nut (L)",
    "immunities": "Stun"
  },
  {
    "id": "98339.0",
    "name": "Dire Blue Jellyfish",
    "area": "Coastlands",
    "subArea": "Outersea",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fire",
      "Light"
    ],
    "level": 39,
    "hp": 2512,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Coil",
        "type": "Phys"
      },
      {
        "name": "Brutal Bash",
        "type": "Phys"
      }
    ],
    "steal": "Beast Tusk, Rare Beast Hide",
    "drop": "Chimera Fang, JP, Kraken Ink",
    "immunities": "Blind, Curse"
  },
  {
    "id": "98340.0",
    "name": "Maneater",
    "area": "Coastlands",
    "subArea": "Outersea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 39,
    "hp": 2692,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mandible Crush",
        "type": "Phys"
      },
      {
        "name": "Tear to Pieces",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water",
    "drop": "Blessed Olive (L), Antidote Herb, Rare Beast Tusk",
    "immunities": "Instant Death, Petrification"
  },
  {
    "id": "98349.0",
    "name": "Duca",
    "area": "Coastlands",
    "subArea": "Shipwreck Island",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Bow",
      "Fire"
    ],
    "level": 43,
    "hp": 2658,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flap",
        "type": "Elem"
      },
      {
        "name": "Duca Kick",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (L)",
    "drop": "SP-Restoring Nut, Rare Beast Claw, Moonstone",
    "immunities": "Instant Death, Curse"
  },
  {
    "id": "98350.0",
    "name": "Blue Betta",
    "area": "Coastlands",
    "subArea": "Shipwreck Island",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Thunder",
      "Dark"
    ],
    "level": 43,
    "hp": 2689,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Water Cannon",
        "type": "Elem"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      }
    ],
    "steal": "Shiny Coin, Holy Water (L)",
    "drop": "Hydra Scale, Silver Nugget",
    "immunities": "Petrification, Curse"
  },
  {
    "id": "98351.0",
    "name": "Landwalker",
    "area": "Coastlands",
    "subArea": "Shipwreck Island",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 43,
    "hp": 2839,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Rip and Tear",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (L)",
    "drop": "Star Fragment, HP-Restoring Herb (L)",
    "immunities": "Instant Death, Poison"
  },
  {
    "id": "98352.0",
    "name": "Reptalion",
    "area": "Coastlands",
    "subArea": "Shipwreck Island",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 43,
    "hp": 2991,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Silencing Lick",
        "type": "Phys"
      }
    ],
    "steal": "Lightning Soulstone",
    "drop": "Beast Horn, HP-Restoring Herb (M)",
    "immunities": "Poison, Instant Death"
  },
  {
    "id": "98053.0",
    "name": "Stormy Sea Birdian I",
    "area": "Coastlands",
    "subArea": "Grandport Coast",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 39,
    "hp": 2360,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Shot",
        "type": "Phys"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      }
    ],
    "steal": "Manticore Stinger, Dragon Scale",
    "drop": "Copper Ore",
    "immunities": "Blind, Confusion"
  },
  {
    "id": "98054.0",
    "name": "Black Scissors",
    "area": "Coastlands",
    "subArea": "Grandport Coast",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Wind"
    ],
    "level": 39,
    "hp": 2475,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Claw",
        "type": "Phys"
      },
      {
        "name": "Toxic Breath",
        "type": "Phys"
      }
    ],
    "steal": "Manticore Stinger, Kraken Ink, Gold Dust",
    "drop": "Ancient Coin, Rare Beast Claw, EXP",
    "immunities": "None"
  },
  {
    "id": "98055.0",
    "name": "Kingfisher",
    "area": "Coastlands",
    "subArea": "Grandport Coast",
    "type": "Boss",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fan",
      "Wind"
    ],
    "level": 39,
    "hp": 2526,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Swoop",
        "type": "Phys"
      }
    ],
    "steal": "Nut, Meteorite",
    "drop": "Dragon Scale, Old Coin, Star Fragment",
    "immunities": "None"
  },
  {
    "id": "98056.0",
    "name": "Stormy Sea Birdian II",
    "area": "Coastlands",
    "subArea": "Grandport Coast",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 39,
    "hp": 2637,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      }
    ],
    "steal": "Wind Soulstone, Healing Grape",
    "drop": "Holy Water (L)",
    "immunities": "Petrification, Silence"
  },
  {
    "id": "98061.0",
    "name": "Warrior Bones",
    "area": "Coastlands",
    "subArea": "Grandport Sewers Grandport Sewers: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Fan",
      "Fire",
      "Light"
    ],
    "level": 40,
    "hp": 2440,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sap Soul",
        "type": "Phys"
      },
      {
        "name": "Helmcleaver",
        "type": "Phys"
      }
    ],
    "steal": "Rusty Coin",
    "drop": "HP-Restoring Herb (M), Ancient Coin",
    "immunities": "Blind, Instant Death"
  },
  {
    "id": "98062.0",
    "name": "Bandit Bones II",
    "area": "Coastlands",
    "subArea": "Grandport Sewers Grandport Sewers: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 40,
    "hp": 2523,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Strip Armaments",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk, Olive of Life (M), Quality Beast Hide",
    "drop": "Griffin Claw, Quality Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98063.0",
    "name": "Davy Bones",
    "area": "Coastlands",
    "subArea": "Grandport Sewers Grandport Sewers: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Wind",
      "Light"
    ],
    "level": 40,
    "hp": 2678,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Poison Strike",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Attack",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water (L), Kraken Ink",
    "drop": "Griffin Claw, HP-Restoring Herb (M)",
    "immunities": "None"
  },
  {
    "id": "98064.0",
    "name": "Gooey Slug",
    "area": "Coastlands",
    "subArea": "Grandport Sewers",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Tome",
      "Fan",
      "Light"
    ],
    "level": 40,
    "hp": 2729,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrible Strike",
        "type": "Phys"
      },
      {
        "name": "Expel Mucus",
        "type": "Phys"
      }
    ],
    "steal": "Wind Soulstone, Rare Beast Meat, Healing Grape Bunch",
    "drop": "Rare Beast Hide",
    "immunities": "Terror"
  },
  {
    "id": "98065.0",
    "name": "Dark Elemental",
    "area": "Coastlands",
    "subArea": "Grandport Sewers: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Fan",
      "Fire",
      "Light"
    ],
    "level": 40,
    "hp": 2721,
    "patk": 406,
    "pdef": 35,
    "matk": 370,
    "mdef": 35,
    "skills": [
      {
        "name": "Darkstrike",
        "type": "Elem"
      },
      {
        "name": "Repeated Darkstrike",
        "type": "Elem"
      },
      {
        "name": "Wild Shadowshot",
        "type": "Elem"
      }
    ],
    "steal": "SP-Restoring Nut (M), Beast Horn, Rare Beast Meat",
    "drop": "Olive of Life (M)",
    "immunities": "Instant Death, Curse"
  },
  {
    "id": "98763.0",
    "name": "Animated Armor",
    "area": "Coastlands",
    "subArea": "Grandport Sewers: Depths",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 40,
    "hp": 4270,
    "patk": 442,
    "pdef": 35,
    "matk": 417,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      }
    ],
    "steal": "Sunshard, Phoenix Feather",
    "drop": "JP, Beast Meat, HP-Restoring Herb",
    "immunities": "Terror"
  },
  {
    "id": "32339.0",
    "name": "Flatlands Frogking I",
    "area": "Flatlands",
    "subArea": "West Theatropolis Plains Atlasdam Flats",
    "type": "Boss",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 39,
    "hp": 2443,
    "patk": 398,
    "pdef": 35,
    "matk": 363,
    "mdef": 35,
    "skills": [
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Wild Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Unearthly Roar",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (L), Rare Beast Horn",
    "drop": "Antidote Herb (L), Blessed Olive (L)",
    "immunities": "Stun"
  },
  {
    "id": "32340.0",
    "name": "Dire Ash Raven",
    "area": "Flatlands",
    "subArea": "West Theatropolis Plains Atlasdam Flats",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Wind"
    ],
    "level": 39,
    "hp": 2497,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Updraft",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone",
    "drop": "SP-Restoring Nut (M), Iron Ore",
    "immunities": "None"
  },
  {
    "id": "32342.0",
    "name": "Shaggy Spider",
    "area": "Flatlands",
    "subArea": "West Theatropolis Plains",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 39,
    "hp": 2677,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Wild Bite",
        "type": "Phys"
      },
      {
        "name": "Toxic Breath",
        "type": "Phys"
      },
      {
        "name": "Spider's Web",
        "type": "Phys"
      }
    ],
    "steal": "Beast Claw",
    "drop": "Beast Hide",
    "immunities": "Stun, Sleep"
  },
  {
    "id": "32309.0",
    "name": "Flatlands Froggen V",
    "area": "Flatlands",
    "subArea": "West Theatropolis Plains Atlasdam Flats",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 39,
    "hp": 2360,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Repeated Thrust",
        "type": "Phys"
      },
      {
        "name": "Rush Stab",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb, Sphinx Feather",
    "drop": "Beast Hide, Leaf",
    "immunities": "None"
  },
  {
    "id": "32341.0",
    "name": "Mammoth Sheep",
    "area": "Flatlands",
    "subArea": "Atlasdam Flats",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fan",
      "Dark"
    ],
    "level": 39,
    "hp": 2696,
    "patk": 398,
    "pdef": 35,
    "matk": 398,
    "mdef": 35,
    "skills": [
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Soporific Strike",
        "type": "Phys"
      }
    ],
    "steal": "Healing Grape Bunch, Gold Dust",
    "drop": "Shiny Coin",
    "immunities": "Petrification, Instant Death"
  },
  {
    "id": "98771.0",
    "name": "Snowstorm Mushroom",
    "area": "Frostlands",
    "subArea": "Valley of the Flame",
    "type": "Regular",
    "shields": 7,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Fire",
      "Light"
    ],
    "level": 40,
    "hp": 4270,
    "patk": 442,
    "pdef": 35,
    "matk": 395,
    "mdef": 35,
    "skills": [
      {
        "name": "Ice Sting",
        "type": "Elem"
      },
      {
        "name": "Soporific Sting",
        "type": "Phys"
      },
      {
        "name": "Photosynthesis",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Hide, Antidote Herb (L)",
    "drop": "Sphinx Feather, Revitalizing Jam",
    "immunities": "Petrification"
  },
  {
    "id": "32387.0",
    "name": "Ice Lizardman VI",
    "area": "Frostlands",
    "subArea": "Valley of the Flame Path to the Cave Of Origin Cave Of Origin",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 40,
    "hp": 2440,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Rush Stab",
        "type": "Phys"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone",
    "drop": "Beast Claw, HP-Restoring Herb, Beast Meat",
    "immunities": "None"
  },
  {
    "id": "32407.0",
    "name": "Ice Lizardking II",
    "area": "Frostlands",
    "subArea": "Valley of the Flame Path to the Cave Of Origin Cave Of Origin",
    "type": "Boss",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fire",
      "Dark"
    ],
    "level": 40,
    "hp": 2468,
    "patk": 406,
    "pdef": 35,
    "matk": 370,
    "mdef": 35,
    "skills": [
      {
        "name": "Ice Dragon",
        "type": "Elem"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Slumber Slash",
        "type": "Phys"
      }
    ],
    "steal": "Kraken Ink",
    "drop": "JP, Blessed Olive",
    "immunities": "Paralysis"
  },
  {
    "id": "32408.0",
    "name": "Blue Bull",
    "area": "Frostlands",
    "subArea": "Valley of the Flame Path to the Cave Of Origin",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Fan",
      "Light"
    ],
    "level": 40,
    "hp": 2587,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Extreme Charge",
        "type": "Phys"
      }
    ],
    "steal": "Beast Meat",
    "drop": "Blessed Olive (M)",
    "immunities": "None"
  },
  {
    "id": "98778.0",
    "name": "Plains Drake",
    "area": "Frostlands",
    "subArea": "Valley of the Flame Path to the Cave Of Origin",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fire"
    ],
    "level": 40,
    "hp": 2727,
    "patk": 406,
    "pdef": 35,
    "matk": 406,
    "mdef": 35,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Wild Ice Claw",
        "type": "Elem"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (M), Holy Water (L)",
    "drop": "Revitalizing Jam (L), Rare Beast Tusk, JP",
    "immunities": "Sleep"
  },
  {
    "id": "98772.0",
    "name": "Hoary Bear",
    "area": "Frostlands",
    "subArea": "Cave Of Origin",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fire",
      "Wind"
    ],
    "level": 40,
    "hp": 4270,
    "patk": 442,
    "pdef": 35,
    "matk": 417,
    "mdef": 35,
    "skills": [
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Embrace",
        "type": "Phys"
      },
      {
        "name": "Extreme Charge",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget, Griffin Claw, Quality Beast Hide",
    "drop": "Silver Nugget",
    "immunities": "None"
  },
  {
    "id": "32318.0",
    "name": "Ice Sentinel Mk.II",
    "area": "Frostlands",
    "subArea": "Cave Of Origin",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire"
    ],
    "level": 40,
    "hp": 2782,
    "patk": 370,
    "pdef": 35,
    "matk": 370,
    "mdef": 35,
    "skills": [
      {
        "name": "Freeze Shot",
        "type": "Elem"
      },
      {
        "name": "Wild Freeze Shot",
        "type": "Elem"
      },
      {
        "name": "Augmented Magic",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Fang, HP-Restoring Herb",
    "drop": "Sphinx Feather",
    "immunities": "Poison, Curse"
  },
  {
    "id": "32333.0",
    "name": "Ice Remnant Mk.II",
    "area": "Frostlands",
    "subArea": "Cave Of Origin",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire"
    ],
    "level": 40,
    "hp": 2670,
    "patk": 406,
    "pdef": 35,
    "matk": 412,
    "mdef": 35,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "Mass Ice Thaw",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Hide",
    "drop": "Rare Beast Tusk, Gold Dust",
    "immunities": "None"
  },
  {
    "id": "32364.0",
    "name": "Bodyguard II",
    "area": "Woodlands",
    "subArea": "Herminia's Former Manse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 42,
    "hp": 2671,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Improved Offense",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam, Holy Water (M)",
    "drop": "HP-Restoring Herb",
    "immunities": "Stun"
  },
  {
    "id": "32324.0",
    "name": "Sentinel Mk.III",
    "area": "Woodlands",
    "subArea": "Herminia's Former Manse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fan",
      "Light",
      "Dark"
    ],
    "level": 42,
    "hp": 2578,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Wild Spellshot",
        "type": "Elem"
      },
      {
        "name": "Bloody Claw",
        "type": "Phys"
      }
    ],
    "steal": "Ancient Coin, Inspiring Plum, Light Soulstone",
    "drop": "Shiny Coin",
    "immunities": "Confusion, Sleep"
  },
  {
    "id": "98747.0",
    "name": "Remnant Mk.II",
    "area": "Woodlands",
    "subArea": "Herminia's Former Manse",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire",
      "Ice"
    ],
    "level": 42,
    "hp": 4512,
    "patk": 453,
    "pdef": 36,
    "matk": 560,
    "mdef": 36,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Improved Offense",
        "type": "Unknown"
      }
    ],
    "steal": "Shiny Coin",
    "drop": "Cerberus Fang, Rusty Coin, Iron Ore",
    "immunities": "None"
  },
  {
    "id": "32374.0",
    "name": "Oskha's Minion",
    "area": "Woodlands",
    "subArea": "Herminia's Former Manse",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Wind",
      "Dark"
    ],
    "level": 42,
    "hp": 2763,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Poison Blade",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive, Blessed Olive (M)",
    "drop": "Inspiring Plum Basket, Rare Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98117.0",
    "name": "Silversand Lizardman II",
    "area": "Sunlands",
    "subArea": "Eternal Quicksand",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 42,
    "hp": 2578,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hurricane Blow",
        "type": "Elem"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Fang",
    "drop": "EXP, Beast Fang, Holy Water (M)",
    "immunities": "Petrification, Sleep"
  },
  {
    "id": "98118.0",
    "name": "Silversand Lizardman III",
    "area": "Sunlands",
    "subArea": "Eternal Quicksand",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 42,
    "hp": 2635,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Blow",
        "type": "Phys"
      },
      {
        "name": "Poison Rush",
        "type": "Phys"
      }
    ],
    "steal": "Shadow Soulstone, HP-Restoring Herb (M), SP-Restoring Nut (M)",
    "drop": "Sunshard, Phoenix Feather, HP-Restoring Herb",
    "immunities": "Instant Death, Curse"
  },
  {
    "id": "98119.0",
    "name": "Whiteworm",
    "area": "Sunlands",
    "subArea": "Eternal Quicksand",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 42,
    "hp": 2749,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Sand Strike",
        "type": "Phys"
      }
    ],
    "steal": "Beast Tusk, Antidote Herb (M)",
    "drop": "Rare Beast Meat",
    "immunities": "Terror, Stun"
  },
  {
    "id": "98120.0",
    "name": "Overlord of the Flies",
    "area": "Sunlands",
    "subArea": "Eternal Quicksand",
    "type": "Boss",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Wind"
    ],
    "level": 42,
    "hp": 2963,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Paralyzing Claw",
        "type": "Phys"
      },
      {
        "name": "Improved Offense",
        "type": "Unknown"
      }
    ],
    "steal": "Shadow Soulstone, Quality Beast Hide, Rare Beast Hide",
    "drop": "HP-Restoring Herb (M), Soulstone",
    "immunities": "None"
  },
  {
    "id": "98742.0",
    "name": "Light Revenant",
    "area": "Sunlands",
    "subArea": "Golden Palace: Upper Floor Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Dark"
    ],
    "level": 44,
    "hp": 4800,
    "patk": 458,
    "pdef": 37,
    "matk": 458,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Moonlight",
        "type": "Elem"
      },
      {
        "name": "Solar Ray",
        "type": "Elem"
      }
    ],
    "steal": "Antidote Herb, Holy Water (L)",
    "drop": "SP-Restoring Nut, Rare Beast Hide",
    "immunities": "Confusion, Terror"
  },
  {
    "id": "98121.0",
    "name": "Skull Roller",
    "area": "Sunlands",
    "subArea": "Golden Palace: Upper Floor Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 44,
    "hp": 2742,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Run Over",
        "type": "Phys"
      },
      {
        "name": "Poison Strike",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Horn, Hydra Scale",
    "drop": "Basilisk Eye, Plum",
    "immunities": "Silence, Curse"
  },
  {
    "id": "98122.0",
    "name": "Brigand Bones II",
    "area": "Sunlands",
    "subArea": "Golden Palace: Upper Floor Golden Palace: Middle Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 44,
    "hp": 2844,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Strip Armaments",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Fang",
    "drop": "Gold",
    "immunities": "Poison"
  },
  {
    "id": "98123.0",
    "name": "Ivory Guardian",
    "area": "Sunlands",
    "subArea": "Golden Palace: Upper Floor Golden Palace: Middle Floor",
    "type": "Boss",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Ice",
      "Light"
    ],
    "level": 44,
    "hp": 2891,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Repeated Light Shot",
        "type": "Elem"
      },
      {
        "name": "Blackout",
        "type": "Elem"
      }
    ],
    "steal": "Revitalizing Jam (M), Antidote Herb (M), Phoenix Feather",
    "drop": "Beast Horn",
    "immunities": "Stun"
  },
  {
    "id": "98124.0",
    "name": "Ivory Curator",
    "area": "Sunlands",
    "subArea": "Golden Palace: Upper Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 44,
    "hp": 3129,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Wild Spellshot",
        "type": "Elem"
      },
      {
        "name": "Augmented Magic",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Horn, Griffin Claw",
    "drop": "Beast Tusk, Quality Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98125.0",
    "name": "Fierce Fly",
    "area": "Sunlands",
    "subArea": "Golden Palace: Middle Floor Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Wind"
    ],
    "level": 44,
    "hp": 2742,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Deafening Buzz",
        "type": "Unknown"
      }
    ],
    "steal": "Kraken Ink, Rusty Coin",
    "drop": "HP-Restoring Herb (M)",
    "immunities": "Sleep, Terror"
  },
  {
    "id": "98126.0",
    "name": "Ivory Remnant",
    "area": "Sunlands",
    "subArea": "Golden Palace: Middle Floor Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 44,
    "hp": 2928,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Repeated Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Midnight Sun",
        "type": "Elem"
      }
    ],
    "steal": "Phoenix Feather, Chimera Fang",
    "drop": "Inspiring Plum Basket, HP-Restoring Herb (M)",
    "immunities": "Sleep"
  },
  {
    "id": "98127.0",
    "name": "Gold Remnant",
    "area": "Sunlands",
    "subArea": "Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 44,
    "hp": 3145,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Double Bite",
        "type": "Phys"
      },
      {
        "name": "Boulder Rain",
        "type": "Elem"
      }
    ],
    "steal": "Wind Soulstone",
    "drop": "Herb, EXP, Chimera Fang",
    "immunities": "Sleep"
  },
  {
    "id": "98764.0",
    "name": "Killer Chameleon",
    "area": "Coastlands",
    "subArea": "Sea Cavern",
    "type": "Regular",
    "shields": 7,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 45,
    "hp": 4130,
    "patk": 480,
    "pdef": 35,
    "matk": 480,
    "mdef": 35,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Hard Claw",
        "type": "Phys"
      }
    ],
    "steal": "Beast Hide, Sunshard, Shadow Soulstone",
    "drop": "Unicorn Horn",
    "immunities": "Curse"
  },
  {
    "id": "98057.0",
    "name": "Stormy Sea Birdian III",
    "area": "Coastlands",
    "subArea": "Sea Cavern",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 45,
    "hp": 2824,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 44,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Electrocute",
        "type": "Elem"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk",
    "drop": "Holy Water (L), Unicorn Horn, Silver Nugget",
    "immunities": "None"
  },
  {
    "id": "98058.0",
    "name": "Reaper Crab",
    "area": "Coastlands",
    "subArea": "Sea Cavern",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Thunder"
    ],
    "level": 45,
    "hp": 2922,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Double Claws",
        "type": "Phys"
      }
    ],
    "steal": "Beast Horn, Chimera Fang",
    "drop": "Herb, Gold, Dragon Scale",
    "immunities": "Paralysis"
  },
  {
    "id": "98059.0",
    "name": "Mossy Tortoise",
    "area": "Coastlands",
    "subArea": "Sea Cavern",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 45,
    "hp": 3072,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Bite",
        "type": "Phys"
      },
      {
        "name": "Spark",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Horn, Fire Soulstone",
    "drop": "Dragon Scale",
    "immunities": "Silence, Blind"
  },
  {
    "id": "98060.0",
    "name": "Cetus Maximus",
    "area": "Coastlands",
    "subArea": "Sea Cavern",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light",
      "Dark"
    ],
    "level": 45,
    "hp": 3241,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Ice Dragon",
        "type": "Elem"
      }
    ],
    "steal": "Holy Water (M)",
    "drop": "Rare Beast Fang, Healing Grape Bunch, Leaf",
    "immunities": "Poison, Curse"
  },
  {
    "id": "98067.0",
    "name": "Sea Birdian V",
    "area": "Coastlands",
    "subArea": "Isle in the Middlesea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Fire",
      "Wind"
    ],
    "level": 49,
    "hp": 5586,
    "patk": 449,
    "pdef": 39,
    "matk": 461,
    "mdef": 39,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Electrocute",
        "type": "Elem"
      },
      {
        "name": "Poison Arrow",
        "type": "Phys"
      }
    ],
    "steal": "Ice Soulstone, Antidote Herb (M), SP-Restoring Nut (M)",
    "drop": "Beast Tusk, Minotaur Horn",
    "immunities": "Confusion, Sleep"
  },
  {
    "id": "98068.0",
    "name": "Killer Conch",
    "area": "Coastlands",
    "subArea": "Isle in the Middlesea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Fire",
      "Thunder"
    ],
    "level": 49,
    "hp": 6013,
    "patk": 449,
    "pdef": 39,
    "matk": 461,
    "mdef": 39,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Icicle",
        "type": "Elem"
      },
      {
        "name": "Hide in Shell",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Fang, Chimera Fang, Phoenix Feather",
    "drop": "Manticore Stinger, Leaf, Star Fragment",
    "immunities": "None"
  },
  {
    "id": "98069.0",
    "name": "Butcher Crab",
    "area": "Coastlands",
    "subArea": "Isle in the Middlesea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Thunder"
    ],
    "level": 49,
    "hp": 6219,
    "patk": 449,
    "pdef": 39,
    "matk": 461,
    "mdef": 39,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Double Claws",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Claw, Antidote Herb (L)",
    "drop": "Beast Hide, Rare Beast Horn",
    "immunities": "Silence, Confusion"
  },
  {
    "id": "98071.0",
    "name": "Cetus Colossus",
    "area": "Coastlands",
    "subArea": "Isle in the Middlesea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light",
      "Dark"
    ],
    "level": 49,
    "hp": 5763,
    "patk": 449,
    "pdef": 39,
    "matk": 461,
    "mdef": 39,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stun Press",
        "type": "Phys"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Fang, Olive of Life (M)",
    "drop": "Antidote Herb (L), Rare Beast Fang, Inspiring Plum Basket",
    "immunities": "None"
  },
  {
    "id": "98345.0",
    "name": "Sea Angel",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: West",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Fan",
      "Thunder"
    ],
    "level": 50,
    "hp": 5736,
    "patk": 457,
    "pdef": 40,
    "matk": 469,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Coil",
        "type": "Phys"
      },
      {
        "name": "Armor Bite",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, HP-Restoring Herb (M)",
    "drop": "Rare Beast Fang, Quality Beast Horn, SP-Restoring Nut",
    "immunities": "Curse, Silence"
  },
  {
    "id": "98346.0",
    "name": "Portly Penguin",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: West",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Light",
      "Dark"
    ],
    "level": 50,
    "hp": 5955,
    "patk": 457,
    "pdef": 40,
    "matk": 469,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Silencing Blow",
        "type": "Phys"
      },
      {
        "name": "Body Press",
        "type": "Phys"
      }
    ],
    "steal": "Gold Dust",
    "drop": "Beast Claw, Rare Beast Tusk",
    "immunities": "Silence, Blind"
  },
  {
    "id": "98347.0",
    "name": "Greater Kingfisher",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: West",
    "type": "Boss",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Tome",
      "Light"
    ],
    "level": 50,
    "hp": 6175,
    "patk": 457,
    "pdef": 40,
    "matk": 469,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Icicle",
        "type": "Elem"
      },
      {
        "name": "Swoop",
        "type": "Phys"
      }
    ],
    "steal": "Inspiring Plum, Blessed Olive (L)",
    "drop": "SP-Restoring Nut (M), Manticore Stinger",
    "immunities": "None"
  },
  {
    "id": "98348.0",
    "name": "Sailfish",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: West",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Thunder",
      "Light"
    ],
    "level": 50,
    "hp": 6375,
    "patk": 457,
    "pdef": 40,
    "matk": 469,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Leap",
        "type": "Unknown"
      }
    ],
    "steal": "Basilisk Eye",
    "drop": "Revitalizing Jam (M), Holy Water (M), Gold Dust",
    "immunities": "Confusion, Sleep"
  },
  {
    "id": "98353.0",
    "name": "Barnacle Bat",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: East",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Light",
      "Dark"
    ],
    "level": 50,
    "hp": 5736,
    "patk": 457,
    "pdef": 40,
    "matk": 469,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Drink Blood",
        "type": "Phys"
      },
      {
        "name": "Venomous Fang",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Hide, Shadow Soulstone",
    "drop": "Rusty Coin, Griffin Claw, Chimera Fang",
    "immunities": "Stun"
  },
  {
    "id": "98354.0",
    "name": "Ebony Eel",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: East",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Thunder"
    ],
    "level": 50,
    "hp": 5903,
    "patk": 457,
    "pdef": 40,
    "matk": 469,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Drink Blood",
        "type": "Phys"
      },
      {
        "name": "Soporific Fang",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Horn, Manticore Stinger, Herb",
    "drop": "Gold Dust, Silver Nugget",
    "immunities": "Curse"
  },
  {
    "id": "98355.0",
    "name": "Demon Jellyfish",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: East",
    "type": "Boss",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Thunder"
    ],
    "level": 50,
    "hp": 6120,
    "patk": 457,
    "pdef": 40,
    "matk": 463,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Numbing Needle",
        "type": "Phys"
      },
      {
        "name": "Eclipse",
        "type": "Elem"
      }
    ],
    "steal": "Meteorite, Holy Water",
    "drop": "Grape",
    "immunities": "Stun, Terror"
  },
  {
    "id": "98356.0",
    "name": "Sapphire Betta",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: East",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fire",
      "Dark"
    ],
    "level": 50,
    "hp": 6458,
    "patk": 457,
    "pdef": 40,
    "matk": 469,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Water Cannon",
        "type": "Elem"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (L), Beast Horn",
    "drop": "SP-Restoring Nut (L), Chimera Fang",
    "immunities": "Stun"
  },
  {
    "id": "98143.0",
    "name": "Volcano Ratkin I",
    "area": "Highlands",
    "subArea": "Berecain Pass: Base Berecain Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Staff",
    "weaknesses": [
      "Staff",
      "Tome",
      "Fan",
      "Ice"
    ],
    "level": 42,
    "hp": 2578,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flame Cut",
        "type": "Elem"
      },
      {
        "name": "Mighty Slash",
        "type": "Phys"
      }
    ],
    "steal": "Wind Soulstone, Dragon Scale, Antidote Herb (L)",
    "drop": "Unicorn Horn",
    "immunities": "None"
  },
  {
    "id": "98144.0",
    "name": "Dread Falcon",
    "area": "Highlands",
    "subArea": "Berecain Pass: Base Berecain Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Dark"
    ],
    "level": 42,
    "hp": 2618,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      }
    ],
    "steal": "Beast Fang, Unicorn Horn, Rare Beast Meat",
    "drop": "Olive of Life (M), Rare Beast Fang",
    "immunities": "Stun"
  },
  {
    "id": "98145.0",
    "name": "Storm Falcon",
    "area": "Highlands",
    "subArea": "Berecain Pass: Base Berecain Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Wind"
    ],
    "level": 42,
    "hp": 2827,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "Wild Ripper",
        "type": "Phys"
      }
    ],
    "steal": "Herb",
    "drop": "Plum",
    "immunities": "None"
  },
  {
    "id": "98146.0",
    "name": "Demon Yak",
    "area": "Highlands",
    "subArea": "Berecain Pass: Base Berecain Pass",
    "type": "Boss",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Ice"
    ],
    "level": 42,
    "hp": 2961,
    "patk": 411,
    "pdef": 36,
    "matk": 411,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stun Press",
        "type": "Phys"
      },
      {
        "name": "Silencing Strike",
        "type": "Phys"
      }
    ],
    "steal": "Healing Grape",
    "drop": "Silver Nugget, EXP",
    "immunities": "Petrification, Sleep"
  },
  {
    "id": "98752.0",
    "name": "Volcano Ratking I",
    "area": "Highlands",
    "subArea": "Mt. Berecain",
    "type": "Boss",
    "shields": 8,
    "weakness": "Staff",
    "weaknesses": [
      "Staff",
      "Tome",
      "Fan",
      "Ice"
    ],
    "level": 43,
    "hp": 4652,
    "patk": 456,
    "pdef": 36,
    "matk": 456,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flame Cut",
        "type": "Elem"
      },
      {
        "name": "Fiery Sweep",
        "type": "Elem"
      }
    ],
    "steal": "SP-Restoring Nut, Holy Water (L), Blessed Olive",
    "drop": "Holy Water (M), Star Fragment",
    "immunities": "None"
  },
  {
    "id": "98147.0",
    "name": "Volcano Ratkin II",
    "area": "Highlands",
    "subArea": "Mt. Berecain Mt. Berecain: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fan",
      "Ice"
    ],
    "level": 43,
    "hp": 2658,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flame Cut",
        "type": "Elem"
      },
      {
        "name": "Mighty Slash",
        "type": "Phys"
      }
    ],
    "steal": "Nut",
    "drop": "Soulstone",
    "immunities": "Instant Death"
  },
  {
    "id": "98148.0",
    "name": "Silver Eater",
    "area": "Highlands",
    "subArea": "Mt. Berecain Mt. Berecain: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Wind"
    ],
    "level": 43,
    "hp": 2759,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stun Press",
        "type": "Phys"
      },
      {
        "name": "Whet",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb",
    "drop": "Olive of Life (M), Inspiring Plum Basket",
    "immunities": "Blind, Instant Death"
  },
  {
    "id": "98149.0",
    "name": "Granadillo",
    "area": "Highlands",
    "subArea": "Mt. Berecain Mt. Berecain: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 43,
    "hp": 2921,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Whirling Attack",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Horn",
    "drop": "Basilisk Eye",
    "immunities": "None"
  },
  {
    "id": "98150.0",
    "name": "Fire Sentinel Mk.III",
    "area": "Highlands",
    "subArea": "Mt. Berecain Mt. Berecain: Depths",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 43,
    "hp": 3036,
    "patk": 414,
    "pdef": 36,
    "matk": 414,
    "mdef": 36,
    "skills": [
      {
        "name": "Fireshot",
        "type": "Elem"
      },
      {
        "name": "Scorched Earth",
        "type": "Elem"
      },
      {
        "name": "Fiery Sweep",
        "type": "Elem"
      }
    ],
    "steal": "Kraken Ink",
    "drop": "Antidote Herb (L), Quality Beast Meat, Dragon Scale",
    "immunities": "Curse, Stun"
  },
  {
    "id": "98753.0",
    "name": "Flame Revenant",
    "area": "Highlands",
    "subArea": "Forbidden Temple",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Ice"
    ],
    "level": 44,
    "hp": 4800,
    "patk": 458,
    "pdef": 37,
    "matk": 458,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Volcano",
        "type": "Elem"
      },
      {
        "name": "Inferno",
        "type": "Elem"
      }
    ],
    "steal": "SP-Restoring Nut (M), Revitalizing Jam (L), Sunshard",
    "drop": "Hydra Scale, SP-Restoring Nut (L), Ancient Coin",
    "immunities": "Confusion"
  },
  {
    "id": "98151.0",
    "name": "Salamandra",
    "area": "Highlands",
    "subArea": "Forbidden Temple",
    "type": "Regular",
    "shields": 4,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Fan",
      "Ice",
      "Light"
    ],
    "level": 44,
    "hp": 2742,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Flame Strike",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Claw, HP-Restoring Herb (L), Rare Beast Fang",
    "drop": "Quality Beast Fang",
    "immunities": "Blind"
  },
  {
    "id": "98152.0",
    "name": "Shadow Guardian",
    "area": "Highlands",
    "subArea": "Forbidden Temple",
    "type": "Boss",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Fire",
      "Dark"
    ],
    "level": 44,
    "hp": 2829,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Repeated Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (M)",
    "drop": "Sphinx Feather, JP",
    "immunities": "Terror"
  },
  {
    "id": "98153.0",
    "name": "Spirited Armor",
    "area": "Highlands",
    "subArea": "Forbidden Temple",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 44,
    "hp": 2996,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "Bloody Claw",
        "type": "Phys"
      }
    ],
    "steal": "Beast Tusk, Holy Water (L), Olive of Life",
    "drop": "Copper Ore, HP-Restoring Herb",
    "immunities": "None"
  },
  {
    "id": "98154.0",
    "name": "Shadow Remnant Mk.II",
    "area": "Highlands",
    "subArea": "Forbidden Temple",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 44,
    "hp": 3080,
    "patk": 416,
    "pdef": 37,
    "matk": 416,
    "mdef": 37,
    "skills": [
      {
        "name": "Solar Eclipse",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Double Bite",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water, Beast Horn, Rare Beast Fang",
    "drop": "Hydra Scale, Rare Beast Hide, Quality Beast Horn",
    "immunities": "None"
  },
  {
    "id": "98751.0",
    "name": "Blackhorn",
    "area": "Highlands",
    "subArea": "Sweltering Cave",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 45,
    "hp": 4942,
    "patk": 480,
    "pdef": 37,
    "matk": 480,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Charge",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (L), Antidote Herb",
    "drop": "Ancient Coin, Antidote Herb",
    "immunities": "None"
  },
  {
    "id": "98155.0",
    "name": "Flesh-Eating Bat",
    "area": "Highlands",
    "subArea": "Sweltering Cave",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Ice"
    ],
    "level": 45,
    "hp": 2824,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Drink Blood",
        "type": "Phys"
      },
      {
        "name": "Bloody Bite",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Meat, Blessed Olive (L)",
    "drop": "Old Coin",
    "immunities": "None"
  },
  {
    "id": "98156.0",
    "name": "Lava Slug",
    "area": "Highlands",
    "subArea": "Sweltering Cave",
    "type": "Regular",
    "shields": 4,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Ice",
      "Wind",
      "Dark"
    ],
    "level": 45,
    "hp": 2882,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 37,
    "skills": [
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "Mass Ignition",
        "type": "Elem"
      }
    ],
    "steal": "Rusty Coin, Olive of Life (M), Herb",
    "drop": "Griffin Claw, Nut",
    "immunities": "Stun, Instant Death"
  },
  {
    "id": "98157.0",
    "name": "Diabolical Goat",
    "area": "Highlands",
    "subArea": "Sweltering Cave",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Fan",
      "Light"
    ],
    "level": 45,
    "hp": 3030,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrible Strike",
        "type": "Phys"
      },
      {
        "name": "Crash",
        "type": "Phys"
      }
    ],
    "steal": "Sunshard",
    "drop": "Olive of Life (M), Meteorite",
    "immunities": "Sleep"
  },
  {
    "id": "98158.0",
    "name": "Magma Drake",
    "area": "Highlands",
    "subArea": "Sweltering Cave",
    "type": "Regular",
    "shields": 4,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 45,
    "hp": 3230,
    "patk": 435,
    "pdef": 37,
    "matk": 447,
    "mdef": 37,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "Fiery Sweep",
        "type": "Elem"
      }
    ],
    "steal": "Silver Nugget",
    "drop": "Rare Beast Hide, Plum",
    "immunities": "None"
  },
  {
    "id": "98252.0",
    "name": "Fallen Laughing Hyaena",
    "area": "Cliftlands",
    "subArea": "Hell: Cragspear Pass Hell: South Cragspear Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fan",
      "Fire"
    ],
    "level": 48,
    "hp": 5433,
    "patk": 447,
    "pdef": 45,
    "matk": 459,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Fang",
        "type": "Phys"
      },
      {
        "name": "Bite Off",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (M), Fire Soulstone, Unicorn Horn",
    "drop": "Quality Beast Fang",
    "immunities": "Stun, Terror"
  },
  {
    "id": "98253.0",
    "name": "Fallen Birdian I",
    "area": "Cliftlands",
    "subArea": "Hell: Cragspear Pass Hell: South Cragspear Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Thunder",
      "Light"
    ],
    "level": 48,
    "hp": 5521,
    "patk": 447,
    "pdef": 45,
    "matk": 459,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Shadow Strike",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Sunshard, Beast Horn, Herb",
    "drop": "Minotaur Horn, Olive",
    "immunities": "Silence"
  },
  {
    "id": "98254.0",
    "name": "Fallen Birdian II",
    "area": "Cliftlands",
    "subArea": "Hell: Cragspear Pass Hell: South Cragspear Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Thunder",
      "Light"
    ],
    "level": 48,
    "hp": 5910,
    "patk": 447,
    "pdef": 45,
    "matk": 459,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Tear Apart",
        "type": "Phys"
      },
      {
        "name": "Avian Awakening",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Meat, Blessed Olive, Quality Beast Tusk",
    "drop": "Silver Nugget, Rare Beast Hide, Star Fragment",
    "immunities": "Confusion"
  },
  {
    "id": "98255.0",
    "name": "Fallen Birdking",
    "area": "Cliftlands",
    "subArea": "Hell: Cragspear Pass",
    "type": "Boss",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 48,
    "hp": 6089,
    "patk": 447,
    "pdef": 45,
    "matk": 459,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Silencing Arrow",
        "type": "Phys"
      },
      {
        "name": "Vampiric Arrow",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb, Antidote Herb (L)",
    "drop": "Unicorn Horn, Holy Water, Herb",
    "immunities": "Blind, Confusion"
  },
  {
    "id": "98256.0",
    "name": "Fallen Armor Eater",
    "area": "Cliftlands",
    "subArea": "Hell: South Cragspear Pass",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 48,
    "hp": 6176,
    "patk": 447,
    "pdef": 45,
    "matk": 459,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Skewer",
        "type": "Phys"
      },
      {
        "name": "Big Boulder Blast",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life (M), Beast Claw, HP-Restoring Herb (M)",
    "drop": "Beast Horn",
    "immunities": "None"
  },
  {
    "id": "98257.0",
    "name": "Infernal Insect I",
    "area": "Cliftlands",
    "subArea": "Hell: Geist Canyon South Hell: Geist Canyon",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire"
    ],
    "level": 49,
    "hp": 5586,
    "patk": 449,
    "pdef": 46,
    "matk": 461,
    "mdef": 46,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      },
      {
        "name": "Drink Blood",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Light Soulstone, HP-Restoring Herb",
    "drop": "Quality Beast Fang, Silver Nugget, Revitalizing Jam (M)",
    "immunities": "Instant Death"
  },
  {
    "id": "98260.0",
    "name": "Fallen Two-Handed Hatchling",
    "area": "Cliftlands",
    "subArea": "Hell: Geist Canyon South Hell: Geist Canyon",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 49,
    "hp": 5680,
    "patk": 449,
    "pdef": 46,
    "matk": 461,
    "mdef": 46,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Whirling Slash",
        "type": "Phys"
      },
      {
        "name": "Strange Fruit",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Sunshard",
    "drop": "Meteorite, Rare Beast Tusk, SP-Restoring Nut (L)",
    "immunities": "Silence"
  },
  {
    "id": "98262.0",
    "name": "Fallen Edoras Soldier I",
    "area": "Cliftlands",
    "subArea": "Hell: Geist Canyon South",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 49,
    "hp": 6249,
    "patk": 449,
    "pdef": 46,
    "matk": 461,
    "mdef": 46,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Incoherent Murmur",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Sunshard",
    "drop": "Beast Claw, Griffin Claw, Unicorn Horn",
    "immunities": "Curse"
  },
  {
    "id": "98261.0",
    "name": "Fallen Ghoul Weed",
    "area": "Cliftlands",
    "subArea": "Hell: Geist Canyon",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 49,
    "hp": 5958,
    "patk": 449,
    "pdef": 46,
    "matk": 461,
    "mdef": 46,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Roll Attack",
        "type": "Phys"
      },
      {
        "name": "Dissolving Liquid",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Tusk",
    "drop": "Blessed Olive (L)",
    "immunities": "Terror"
  },
  {
    "id": "98263.0",
    "name": "Fallen Edoras Soldier II",
    "area": "Cliftlands",
    "subArea": "Hell: Geist Canyon",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Fire",
      "Thunder",
      "Light"
    ],
    "level": 53,
    "hp": 7042,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Shield Bash",
        "type": "Phys"
      },
      {
        "name": "Accursed Words",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Claw, Inspiring Plum Basket",
    "drop": "Quality Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98265.0",
    "name": "Fallen Marmot",
    "area": "Woodlands",
    "subArea": "Hell: Valore Forest Hell: Path to White Grape Hill",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Tome",
      "Fire"
    ],
    "level": 51,
    "hp": 5892,
    "patk": 459,
    "pdef": 48,
    "matk": 471,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Old Coin, Silver Nugget",
    "drop": "Beast Hide, Holy Water (M), SP-Restoring Nut",
    "immunities": "Sleep"
  },
  {
    "id": "98266.0",
    "name": "Fallen Ratkin I",
    "area": "Woodlands",
    "subArea": "Hell: Valore Forest Hell: Path to White Grape Hill",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 51,
    "hp": 5993,
    "patk": 459,
    "pdef": 47,
    "matk": 471,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Dual Shot",
        "type": "Phys"
      },
      {
        "name": "Poison Arrow",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Ice Soulstone, Cerberus Fang, Moonstone",
    "drop": "Silver Nugget, Leaf, Plum",
    "immunities": "Confusion, Sleep"
  },
  {
    "id": "98268.0",
    "name": "Fallen Blackrobe (Sword)",
    "area": "Woodlands",
    "subArea": "Hell: Valore Forest Hell: Path to White Grape Hill",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 51,
    "hp": 6326,
    "patk": 459,
    "pdef": 47,
    "matk": 471,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Running Slash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (L), Beast Claw, Sphinx Feather",
    "drop": "Hydra Scale",
    "immunities": "Curse"
  },
  {
    "id": "98269.0",
    "name": "Infernal Insect II",
    "area": "Woodlands",
    "subArea": "Hell: Valore Forest Hell: Path to White Grape Hill",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 51,
    "hp": 6674,
    "patk": 459,
    "pdef": 47,
    "matk": 471,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrible Strike",
        "type": "Phys"
      },
      {
        "name": "Expel Mucus",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb",
    "drop": "Rare Beast Fang, Revitalizing Jam (L), HP-Restoring Herb (M)",
    "immunities": "None"
  },
  {
    "id": "98258.0",
    "name": "Infernal Pest I",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 1F/2F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice"
    ],
    "level": 53,
    "hp": 5793,
    "patk": 468,
    "pdef": 47,
    "matk": 474,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Numbing Needle",
        "type": "Phys"
      },
      {
        "name": "Spirit Drain",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk",
    "drop": "Blessed Olive (M), Beast Hide, Beast Fang",
    "immunities": "Instant Death, Sleep"
  },
  {
    "id": "98264.0",
    "name": "Fallen Edoras Soldier III",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 1F/2F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 53,
    "hp": 6808,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Fiery Blow",
        "type": "Phys"
      },
      {
        "name": "Trifold Bash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water (L)",
    "drop": "Quality Beast Hide",
    "immunities": "None"
  },
  {
    "id": "98270.0",
    "name": "Fallen Pauper",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 1F/2F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 53,
    "hp": 6339,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Cling",
        "type": "Phys"
      },
      {
        "name": "Reproach",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Inspiring Plum Basket, Copper Ore",
    "drop": "Holy Water (M), Quality Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98271.0",
    "name": "Infernal Refuse",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 1F/2F/3F/4F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 53,
    "hp": 6204,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rush",
        "type": "Phys"
      },
      {
        "name": "Cacophony",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Healing Grape Bunch",
    "drop": "Sphinx Feather, Chimera Fang, Rusty Coin",
    "immunities": "None"
  },
  {
    "id": "98272.0",
    "name": "Fallen Aristocrat",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 3F/4F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 53,
    "hp": 6323,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Cajole",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Iron Ore",
    "drop": "Quality Beast Hide",
    "immunities": "Stun, Instant Death"
  },
  {
    "id": "98273.0",
    "name": "Fallen Maid",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 3F/4F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 53,
    "hp": 6593,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Moonlight Waltz",
        "type": "Elem"
      },
      {
        "name": "Scream",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Griffin Claw, Old Coin, Blessed Olive",
    "drop": "Rare Beast Horn, Grape, Beast Tusk",
    "immunities": "Blind"
  },
  {
    "id": "98274.0",
    "name": "Cursed Flame Curator",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 3F/4F/5F/6F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Thunder",
      "Light"
    ],
    "level": 53,
    "hp": 6204,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Cursed Fireblast",
        "type": "Elem"
      },
      {
        "name": "Wild Cursed Fireblast",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Hide",
    "drop": "Ancient Coin, HP-Restoring Herb (L)",
    "immunities": "Stun, Petrification"
  },
  {
    "id": "98275.0",
    "name": "Infernal Insect III",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 5F/6F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 53,
    "hp": 6005,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Soporific Claw",
        "type": "Phys"
      },
      {
        "name": "Poison Bite",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Shiny Coin, Silver Nugget",
    "drop": "Holy Water (M)",
    "immunities": "Silence"
  },
  {
    "id": "98276.0",
    "name": "Fallen Edoras Knight I",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 5F/6F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 53,
    "hp": 6780,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Greatsword of Darkness",
        "type": "Elem"
      },
      {
        "name": "Charge!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Gold Dust, Beast Tusk",
    "drop": "Olive, Beast Tusk, Olive of Life (M)",
    "immunities": "None"
  },
  {
    "id": "98277.0",
    "name": "Fallen Edoras Knight II",
    "area": "Cliftlands",
    "subArea": "Hell: Castle Edoras - 5F/6F",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Fire"
    ],
    "level": 53,
    "hp": 6872,
    "patk": 468,
    "pdef": 48,
    "matk": 474,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Greatsword of Thunder",
        "type": "Elem"
      },
      {
        "name": "Hold Strong!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Hide",
    "drop": "JP, Rare Beast Claw",
    "immunities": "Sleep"
  },
  {
    "id": "98773.0",
    "name": "Swordfish",
    "area": "Coastlands",
    "subArea": "Sunken Ship",
    "type": "Regular",
    "shields": 8,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fire",
      "Thunder",
      "Wind"
    ],
    "level": 65,
    "hp": 10980,
    "patk": 525,
    "pdef": 47,
    "matk": 638,
    "mdef": 47,
    "skills": [
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "Leap",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Tusk",
    "drop": "Blessed Olive (M), Revitalizing Jam (M)",
    "immunities": "Sleep"
  },
  {
    "id": "98357.0",
    "name": "Winged Landwalker",
    "area": "Coastlands",
    "subArea": "Sunken Ship",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 65,
    "hp": 8235,
    "patk": 507,
    "pdef": 47,
    "matk": 507,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Mighty Tackle",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life (M), Basilisk Eye, Herb",
    "drop": "Rare Beast Hide, Iron Ore, Chimera Fang",
    "immunities": "Stun"
  },
  {
    "id": "98358.0",
    "name": "Sea Seraphim",
    "area": "Coastlands",
    "subArea": "Sunken Ship",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Fan",
      "Thunder"
    ],
    "level": 65,
    "hp": 8644,
    "patk": 507,
    "pdef": 47,
    "matk": 507,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Chew to Bits",
        "type": "Phys"
      },
      {
        "name": "Jaw Crunch",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget, Beast Meat",
    "drop": "Revitalizing Jam (M)",
    "immunities": "Poison, Terror"
  },
  {
    "id": "98359.0",
    "name": "Shipeater",
    "area": "Coastlands",
    "subArea": "Sunken Ship",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Thunder",
      "Dark"
    ],
    "level": 65,
    "hp": 8847,
    "patk": 507,
    "pdef": 47,
    "matk": 507,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mandible Crush",
        "type": "Phys"
      },
      {
        "name": "Shark Strike",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb",
    "drop": "Shiny Coin",
    "immunities": "None"
  },
  {
    "id": "98360.0",
    "name": "Dark Manta",
    "area": "Coastlands",
    "subArea": "Sunken Ship",
    "type": "Regular",
    "shields": 7,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 65,
    "hp": 9235,
    "patk": 507,
    "pdef": 47,
    "matk": 507,
    "mdef": 47,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Venomous Sting",
        "type": "Phys"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Horn",
    "drop": "Gold, Shiny Coin, SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "98267.0",
    "name": "Fallen Ratkin II",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Pass",
    "type": "Regular",
    "shields": 5,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 54,
    "hp": 6366,
    "patk": 470,
    "pdef": 48,
    "matk": 482,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slash",
        "type": "Phys"
      },
      {
        "name": "Mighty Slash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Meat, Phoenix Feather, Shadow Soulstone",
    "drop": "Antidote Herb, Leaf",
    "immunities": "None"
  },
  {
    "id": "98278.0",
    "name": "Fallen Highland Goat",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Pass",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Light"
    ],
    "level": 54,
    "hp": 6455,
    "patk": 470,
    "pdef": 48,
    "matk": 482,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Bam!",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (L)",
    "drop": "Healing Grape Bunch, Sunshard",
    "immunities": "Curse, Blind"
  },
  {
    "id": "98279.0",
    "name": "Fallen Giant Falcon",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Pass",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Light"
    ],
    "level": 54,
    "hp": 6800,
    "patk": 470,
    "pdef": 48,
    "matk": 482,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Galeforce Slash",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Claw, Blessed Olive",
    "drop": "Cerberus Fang",
    "immunities": "Confusion, Sleep"
  },
  {
    "id": "98280.0",
    "name": "Cursed Bones",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Castle - Entrance Areas Hell: Hornburg Castle - Central Areas",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 55,
    "hp": 6525,
    "patk": 471,
    "pdef": 49,
    "matk": 489,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Attack",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Healing Grape, Dragon Scale",
    "drop": "Manticore Stinger",
    "immunities": "None"
  },
  {
    "id": "98282.0",
    "name": "Fallen Hornburg Soldier",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Castle - Entrance Areas Hell: Hornburg Castle - Central Areas",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 55,
    "hp": 6976,
    "patk": 471,
    "pdef": 49,
    "matk": 483,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Uncritical Eye",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Manticore Stinger, SP-Restoring Nut (L)",
    "drop": "EXP, Beast Hide",
    "immunities": "Confusion"
  },
  {
    "id": "98283.0",
    "name": "Fallen Guard Hound",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Castle - Entrance Areas",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Thunder"
    ],
    "level": 55,
    "hp": 7275,
    "patk": 471,
    "pdef": 49,
    "matk": 483,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Armor Bite",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Ancient Coin",
    "drop": "Phoenix Feather, Revitalizing Jam (L), Holy Water (M)",
    "immunities": "Paralysis"
  },
  {
    "id": "98281.0",
    "name": "Azure Curator",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Castle - Entrance Areas Hell: Hornburg Castle - Central Areas",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 55,
    "hp": 6718,
    "patk": 471,
    "pdef": 49,
    "matk": 483,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Fireshot",
        "type": "Elem"
      },
      {
        "name": "Flaming Impact",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Sunshard",
    "drop": "Beast Horn, Herb, SP-Restoring Nut (L)",
    "immunities": "Silence"
  },
  {
    "id": "98284.0",
    "name": "Defending Armor",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Castle - Central Areas",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 55,
    "hp": 7337,
    "patk": 471,
    "pdef": 49,
    "matk": 483,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "Bloody Claw",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Herb, Rusty Coin",
    "drop": "Iron Ore, Rare Beast Fang",
    "immunities": "Confusion"
  },
  {
    "id": "98259.0",
    "name": "Infernal Mite I",
    "area": "The Gate of Finis",
    "subArea": "Corridors of Contrition Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 59,
    "hp": 7188,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Lacerating Sting",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Ancient Coin, Revitalizing Jam (L), Olive of Life",
    "drop": "Soulstone",
    "immunities": "None"
  },
  {
    "id": "98285.0",
    "name": "Infernal Insect IV",
    "area": "The Gate of Finis",
    "subArea": "Corridors of Contrition",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Thunder"
    ],
    "level": 59,
    "hp": 7396,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Jaws",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Claw",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Herb, Blessed Olive (M)",
    "drop": "Rare Beast Horn, Antidote Herb, EXP",
    "immunities": "Confusion"
  },
  {
    "id": "98287.0",
    "name": "Fallen Aberration I",
    "area": "The Gate of Finis",
    "subArea": "Corridors of Contrition Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 59,
    "hp": 7540,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Entwine",
        "type": "Phys"
      },
      {
        "name": "Thrice Rent",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk",
    "drop": "Revitalizing Jam, Gold, Holy Water (M)",
    "immunities": "Confusion"
  },
  {
    "id": "98288.0",
    "name": "Fallen Aberration II",
    "area": "The Gate of Finis",
    "subArea": "Corridors of Contrition Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 59,
    "hp": 7661,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flatten",
        "type": "Phys"
      },
      {
        "name": "Thrice Rent",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Gold Dust, Basilisk Eye, Revitalizing Jam (M)",
    "drop": "Quality Beast Hide, Antidote Herb (M), Nut",
    "immunities": "Instant Death"
  },
  {
    "id": "98289.0",
    "name": "Fallen Monster",
    "area": "The Gate of Finis",
    "subArea": "Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 59,
    "hp": 8012,
    "patk": 483,
    "pdef": 61,
    "matk": 513,
    "mdef": 61,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Furious Embrace",
        "type": "Phys"
      },
      {
        "name": "Doping",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Wind Soulstone, Blessed Olive (M), Olive of Life (M)",
    "drop": "HP-Restoring Herb (L), Nut, Meteorite",
    "immunities": "Confusion, Sleep"
  },
  {
    "id": "98286.0",
    "name": "Infernal Pest IV",
    "area": "The Gate of Finis",
    "subArea": "The Bridge Beyond",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fire",
      "Thunder"
    ],
    "level": 59,
    "hp": 8202,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Paralyzing Jaws",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut",
    "drop": "Quality Beast Meat, Herb, SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "98290.0",
    "name": "Fallen Herminia's Soldier",
    "area": "The Gate of Finis",
    "subArea": "The Bridge Beyond",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 59,
    "hp": 7188,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Cerberus Fang, HP-Restoring Herb (L), Healing Grape",
    "drop": "Quality Beast Fang, Rare Beast Claw, Basilisk Eye",
    "immunities": "None"
  },
  {
    "id": "98291.0",
    "name": "Fallen Blackrobe (Bow)",
    "area": "The Gate of Finis",
    "subArea": "The Bridge Beyond",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 59,
    "hp": 7514,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rapid Shot",
        "type": "Phys"
      },
      {
        "name": "Multi-Shot",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Claw, Beast Claw, Shadow Soulstone",
    "drop": "Leaf, Beast Claw",
    "immunities": "Confusion, Silence"
  },
  {
    "id": "98292.0",
    "name": "Infernal Insect V",
    "area": "The Gate of Finis",
    "subArea": "The Bridge Beyond Crimson River Traverse",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fire",
      "Dark"
    ],
    "level": 59,
    "hp": 7188,
    "patk": 483,
    "pdef": 51,
    "matk": 513,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Whirling Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Shiny Coin, Copper Ore",
    "drop": "Rare Beast Fang, Quality Beast Tusk, Revitalizing Jam",
    "immunities": "None"
  },
  {
    "id": "98293.0",
    "name": "Fallen Thespian (Dancer)",
    "area": "The Gate of Finis",
    "subArea": "Crimson River Traverse",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 59,
    "hp": 7441,
    "patk": 483,
    "pdef": 51,
    "matk": 500,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Night Ode",
        "type": "Elem"
      },
      {
        "name": "Moonlight Waltz",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Lightning Soulstone, Inspiring Plum Basket",
    "drop": "Chimera Fang",
    "immunities": "None"
  },
  {
    "id": "98294.0",
    "name": "Fallen Thespian (Scholar)",
    "area": "The Gate of Finis",
    "subArea": "Crimson River Traverse",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 59,
    "hp": 7902,
    "patk": 483,
    "pdef": 51,
    "matk": 500,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "Fiery Sweep",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Old Coin, Manticore Stinger, Healing Grape Bunch",
    "drop": "Antidote Herb, Antidote Herb (M)",
    "immunities": "Terror"
  },
  {
    "id": "98295.0",
    "name": "Fallen Thespian (Leader)",
    "area": "The Gate of Finis",
    "subArea": "Crimson River Traverse",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 59,
    "hp": 7986,
    "patk": 483,
    "pdef": 61,
    "matk": 500,
    "mdef": 61,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Gale Shot",
        "type": "Elem"
      },
      {
        "name": "Trade Tempest",
        "type": "Elem"
      },
      {
        "name": "Restore Health",
        "type": "Unknown"
      },
      {
        "name": "Divine Prayer of Death",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Gold Dust, Rusty Coin",
    "drop": "Nut",
    "immunities": "Stun"
  },
  {
    "id": "98297.0",
    "name": "Divine Soldier (Polearm)",
    "area": "The Heavens",
    "subArea": "Seas of Servility Seas of Servility: Hollow Path",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 63,
    "hp": 8164,
    "patk": 494,
    "pdef": 53,
    "matk": 494,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Penetrating Thrust",
        "type": "Phys"
      },
      {
        "name": "Rapid Thrust",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Fang",
    "drop": "Beast Fang",
    "immunities": "Curse"
  },
  {
    "id": "98298.0",
    "name": "Divine Soldier (Bow)",
    "area": "The Heavens",
    "subArea": "Seas of Servility Seas of Servility: Divine Path Skies of Vanity",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Thunder",
      "Dark"
    ],
    "level": 63,
    "hp": 8648,
    "patk": 494,
    "pdef": 53,
    "matk": 494,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hindering Arrows",
        "type": "Phys"
      },
      {
        "name": "Flurry of Arrows",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Blessed Olive (M), Quality Beast Claw, SP-Restoring Nut (L)",
    "drop": "Phoenix Feather, Antidote Herb (M)",
    "immunities": "None"
  },
  {
    "id": "98299.0",
    "name": "Celestial White Whale",
    "area": "The Heavens",
    "subArea": "Seas of Servility Seas of Servility: Hollow Path Seas of Servility: Divine Path",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 63,
    "hp": 9043,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Icebomb",
        "type": "Elem"
      },
      {
        "name": "Ice Storm",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Nut, Fire Soulstone, Basilisk Eye",
    "drop": "Herb, Nut, Quality Beast Horn",
    "immunities": "None"
  },
  {
    "id": "98296.0",
    "name": "Sacred Flame Curator",
    "area": "The Heavens",
    "subArea": "Seas of Servility Seas of Servility: Hollow Path Seas of Servility: Divine Path",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 63,
    "hp": 7881,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Fireshot",
        "type": "Elem"
      },
      {
        "name": "Wild Fireshot",
        "type": "Elem"
      },
      {
        "name": "Fireshots",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Horn, Quality Beast Meat, Revitalizing Jam (M)",
    "drop": "SP-Restoring Nut (L), Beast Tusk, Revitalizing Jam (M)",
    "immunities": "None"
  },
  {
    "id": "98300.0",
    "name": "Sacred Flame Servant",
    "area": "The Heavens",
    "subArea": "Seas of Servility: Hollow Path Sands of Rapacity",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 63,
    "hp": 7881,
    "patk": 494,
    "pdef": 53,
    "matk": 494,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Holy Fire",
        "type": "Elem"
      },
      {
        "name": "Transpierce",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Iron Ore",
    "drop": "Healing Grape Bunch, Meteorite, Antidote Herb (L)",
    "immunities": "Silence, Petrification"
  },
  {
    "id": "98301.0",
    "name": "Divine Soldier (Hammer)",
    "area": "The Heavens",
    "subArea": "Seas of Servility: Hollow Path",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 63,
    "hp": 8637,
    "patk": 494,
    "pdef": 53,
    "matk": 494,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Bash",
        "type": "Phys"
      },
      {
        "name": "Mass Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Wind Soulstone, Rare Beast Hide",
    "drop": "Moonstone",
    "immunities": "None"
  },
  {
    "id": "98302.0",
    "name": "Divine Soldier (Axe)",
    "area": "The Heavens",
    "subArea": "Seas of Servility: Hollow Path Sands of Rapacity",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 63,
    "hp": 8124,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Threefold Cleave",
        "type": "Phys"
      },
      {
        "name": "Thunderous Flash",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Shiny Coin, Revitalizing Jam (M)",
    "drop": "Olive",
    "immunities": "None"
  },
  {
    "id": "98303.0",
    "name": "Sacred Remnant",
    "area": "The Heavens",
    "subArea": "Sands of Rapacity",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 63,
    "hp": 8479,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Luminance",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Fang",
    "drop": "Rare Beast Fang, Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98304.0",
    "name": "Sacral Warrior",
    "area": "The Heavens",
    "subArea": "Sands of Rapacity",
    "type": "Regular",
    "shields": 6,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fan",
      "Thunder"
    ],
    "level": 63,
    "hp": 8958,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Vinebind",
        "type": "Phys"
      },
      {
        "name": "Dappled Sunlight",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water (M), Iron Ore",
    "drop": "Holy Water (L), Beast Hide",
    "immunities": "Instant Death, Confusion"
  },
  {
    "id": "98305.0",
    "name": "Holy Howler",
    "area": "The Heavens",
    "subArea": "Skies of Vanity",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Thunder",
      "Dark"
    ],
    "level": 63,
    "hp": 7881,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Blinding Glare",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Shiny Coin, SP-Restoring Nut (L), Kraken Ink",
    "drop": "Rare Beast Claw",
    "immunities": "Terror"
  },
  {
    "id": "98306.0",
    "name": "Elemental Prism",
    "area": "The Heavens",
    "subArea": "Skies of Vanity",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fan",
      "Dark"
    ],
    "level": 63,
    "hp": 8222,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Radiance",
        "type": "Elem"
      },
      {
        "name": "Blinding Glare",
        "type": "Elem"
      },
      {
        "name": "Raging Luminescence",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Inspiring Plum Basket, Revitalizing Jam (M), Blessed Olive (L)",
    "drop": "Soulstone, Blessed Olive (M)",
    "immunities": "Curse"
  },
  {
    "id": "98307.0",
    "name": "Great Holy Eagle",
    "area": "The Heavens",
    "subArea": "Skies of Vanity",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Wind",
      "Dark"
    ],
    "level": 63,
    "hp": 8982,
    "patk": 494,
    "pdef": 53,
    "matk": 511,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Soaring Feathers",
        "type": "Elem"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "Beast Claw",
    "immunities": "Confusion"
  },
  {
    "id": "98341.0",
    "name": "Ducaduca",
    "area": "Coastlands",
    "subArea": "Desert Island in the Outersea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Fire",
      "Dark"
    ],
    "level": 55,
    "hp": 6090,
    "patk": 471,
    "pdef": 42,
    "matk": 483,
    "mdef": 42,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flying Kick",
        "type": "Phys"
      },
      {
        "name": "Ducaduca Kick",
        "type": "Phys"
      }
    ],
    "steal": "Cerberus Fang",
    "drop": "Rare Beast Tusk",
    "immunities": "Petrification, Paralysis"
  },
  {
    "id": "98342.0",
    "name": "Thorny Eel",
    "area": "Coastlands",
    "subArea": "Desert Island in the Outersea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Thunder"
    ],
    "level": 55,
    "hp": 6319,
    "patk": 471,
    "pdef": 42,
    "matk": 483,
    "mdef": 42,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Squeeze",
        "type": "Phys"
      },
      {
        "name": "Guzzle Blood",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L), Sunshard",
    "drop": "Beast Hide",
    "immunities": "None"
  },
  {
    "id": "98343.0",
    "name": "Great Landwalker",
    "area": "Coastlands",
    "subArea": "Desert Island in the Outersea",
    "type": "Regular",
    "shields": 5,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 55,
    "hp": 6402,
    "patk": 471,
    "pdef": 42,
    "matk": 483,
    "mdef": 42,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rip and Tear",
        "type": "Phys"
      },
      {
        "name": "Ingest",
        "type": "Phys"
      }
    ],
    "steal": "Minotaur Horn",
    "drop": "Soulstone, Silver Nugget",
    "immunities": "Stun"
  },
  {
    "id": "98344.0",
    "name": "Devious Dolphin",
    "area": "Coastlands",
    "subArea": "Desert Island in the Outersea",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 55,
    "hp": 6723,
    "patk": 471,
    "pdef": 42,
    "matk": 483,
    "mdef": 42,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Tail Spin",
        "type": "Phys"
      },
      {
        "name": "Silencing Voice",
        "type": "Unknown"
      }
    ],
    "steal": "Ice Soulstone, Hydra Scale",
    "drop": "Holy Water (M), Beast Hide, Phoenix Feather",
    "immunities": "Silence"
  },
  {
    "id": "98002.0",
    "name": "Emerald Direwolf",
    "area": "Prologue",
    "subArea": "Cerulean Caverns",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Ice",
      "Wind",
      "Dark"
    ],
    "level": 4,
    "hp": 4000,
    "patk": 210,
    "pdef": 60,
    "matk": 120,
    "mdef": 60,
    "skills": [
      {
        "name": "Vicious Charge",
        "type": "Phys"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Intimidate",
        "type": "Unknown"
      },
      {
        "name": "Maiming Bite",
        "type": "Phys"
      },
      {
        "name": "Divine Speed",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> stands ready!",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb (M), Wind Soulstone",
    "drop": "Beast Hide, Hydra Scale",
    "immunities": "Paralysis"
  },
  {
    "id": "98008.0",
    "name": "Scarlet Wing",
    "area": "Prologue",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Staff",
      "Light"
    ],
    "level": 3,
    "hp": 500,
    "patk": 120,
    "pdef": 70,
    "matk": 119,
    "mdef": 70,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Healing Grape",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (M), Manticore Stinger",
    "drop": "Phoenix Feather, Beast Meat",
    "immunities": "Terror"
  },
  {
    "id": "98020.0",
    "name": "Scarlet Wings Corporal",
    "area": "Prologue",
    "subArea": "Wishvale Trail",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Staff",
      "Ice",
      "Thunder"
    ],
    "level": 5,
    "hp": 3500,
    "patk": 145,
    "pdef": 70,
    "matk": 119,
    "mdef": 70,
    "skills": [
      {
        "name": "Trifold Slash",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "Mighty Sweep",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> can take more actions!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> stands ready!",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water (M)",
    "drop": "Blessed Olive, Silver Nugget",
    "immunities": "None"
  },
  {
    "id": "98030.0",
    "name": "Scarlet Wing",
    "area": "Prologue",
    "subArea": "Wishvale Trail",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Staff",
      "Light"
    ],
    "level": 3,
    "hp": 750,
    "patk": 130,
    "pdef": 60,
    "matk": 119,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life (M)",
    "drop": "Quality Beast Horn, Manticore Stinger, EXP",
    "immunities": "Curse, Instant Death"
  },
  {
    "id": "98246.0",
    "name": "Spiked Skink",
    "area": "Kindlers Ch. 1",
    "subArea": "Snowshard Grotto",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Thunder"
    ],
    "level": 8,
    "hp": 1300,
    "patk": 185,
    "pdef": 20,
    "matk": 185,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thorn Storm",
        "type": "Phys"
      },
      {
        "name": "Speed Up",
        "type": "Unknown"
      },
      {
        "name": "Violent Charge",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Strong Thorn Storm",
        "type": "Phys"
      }
    ],
    "steal": "Chimera Fang, Rusty Coin",
    "drop": "Chimera Fang, Gold Dust",
    "immunities": "None"
  },
  {
    "id": "5000.0",
    "name": "Burly Blackrobe",
    "area": "Master of Wealth Ch. 1",
    "subArea": "Valore: Main Boulevard",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Bow",
      "Ice"
    ],
    "level": 1,
    "hp": 1500,
    "patk": 130,
    "pdef": 70,
    "matk": 118,
    "mdef": 70,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Kraken Ink, Quality Beast Tusk, Shadow Soulstone",
    "drop": "SP-Restoring Nut",
    "immunities": "Blind"
  },
  {
    "id": "5001.0",
    "name": "Blackrobe",
    "area": "Master of Wealth Ch. 1",
    "subArea": "Valore: Main Boulevard",
    "type": "Regular",
    "shields": 3,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Staff",
      "Tome",
      "Fire",
      "Wind"
    ],
    "level": 1,
    "hp": 300,
    "patk": 115,
    "pdef": 60,
    "matk": 100,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      }
    ],
    "steal": "Nut",
    "drop": "Minotaur Horn",
    "immunities": "Terror, Silence"
  },
  {
    "id": "5002.0",
    "name": "Captain Tristan",
    "area": "Master of Wealth Ch. 1",
    "subArea": "Herminia's Manse: Entrance",
    "type": "Regular",
    "shields": 9,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fire",
      "Dark"
    ],
    "level": 10,
    "hp": 10609,
    "patk": 258,
    "pdef": 22,
    "matk": 206,
    "mdef": 18,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Skull Slash",
        "type": "Phys"
      },
      {
        "name": "Skull Slash",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (M), Hydra Scale",
    "drop": "Meteorite, Herb",
    "immunities": "Stun, Petrification"
  },
  {
    "id": "5003.0",
    "name": "Mercenary",
    "area": "Master of Wealth Ch. 1",
    "subArea": "Herminia's Manse: Entrance",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Ice",
      "Thunder",
      "Light"
    ],
    "level": 8,
    "hp": 2652,
    "patk": 226,
    "pdef": 22,
    "matk": 178,
    "mdef": 18,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Fang, Beast Horn, Meteorite",
    "drop": "Antidote Herb (M), Gold Dust",
    "immunities": "None"
  },
  {
    "id": "5011.0",
    "name": "Abnormal Ruffian",
    "area": "Master of Power Ch. 1",
    "subArea": "Emberglow: East District",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Staff",
      "Tome",
      "Light"
    ],
    "level": 1,
    "hp": 4000,
    "patk": 230,
    "pdef": 25,
    "matk": 160,
    "mdef": 16,
    "skills": [
      {
        "name": "Graaargh!",
        "type": "Elem"
      },
      {
        "name": "Run Rampant",
        "type": "Elem"
      }
    ],
    "steal": "Moonstone, Quality Beast Fang",
    "drop": "Beast Fang, Rare Beast Meat",
    "immunities": "Instant Death, Poison"
  },
  {
    "id": "5012.0",
    "name": "Al the Servant",
    "area": "Master of Power Ch. 1",
    "subArea": "Emberglow Laboratory",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff",
      "Wind",
      "Light"
    ],
    "level": 6,
    "hp": 8000,
    "patk": 300,
    "pdef": 30,
    "matk": 300,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Ebony Claw",
        "type": "Elem"
      },
      {
        "name": "Dual Ebony Claw",
        "type": "Elem"
      },
      {
        "name": "Bite Off",
        "type": "Phys"
      },
      {
        "name": "Wild Bloodclaw",
        "type": "Phys"
      },
      {
        "name": "Wild Ebony Claw",
        "type": "Elem"
      }
    ],
    "steal": "Holy Water (M), Gold Dust, Nut",
    "drop": "Rare Beast Meat",
    "immunities": "None"
  },
  {
    "id": "5025.0",
    "name": "Aide (Vanguard)",
    "area": "Master of Fame Ch. 1",
    "subArea": "Amphitheatre: Dressing Room",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Tome",
      "Ice",
      "Dark"
    ],
    "level": 6,
    "hp": 3500,
    "patk": 210,
    "pdef": 25,
    "matk": 140,
    "mdef": 15,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Deadly Thrust",
        "type": "Phys"
      },
      {
        "name": "Double Thrust",
        "type": "Phys"
      },
      {
        "name": "Stimulant",
        "type": "Unknown"
      },
      {
        "name": "Peerless Strike",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (L), Holy Water (L), Inspiring Plum Basket",
    "drop": "Rare Beast Fang, Phoenix Feather",
    "immunities": "Instant Death, Poison"
  },
  {
    "id": "5026.0",
    "name": "Aide (Rearguard)",
    "area": "Master of Fame Ch. 1",
    "subArea": "Amphitheatre: Dressing Room",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Tome",
      "Light",
      "Dark"
    ],
    "level": 6,
    "hp": 3500,
    "patk": 140,
    "pdef": 15,
    "matk": 210,
    "mdef": 25,
    "skills": [
      {
        "name": "Spark of Fire",
        "type": "Elem"
      },
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "First Aid",
        "type": "Unknown"
      },
      {
        "name": "Miracle First Aid",
        "type": "Unknown"
      },
      {
        "name": "Fire Dragon's Breath",
        "type": "Elem"
      }
    ],
    "steal": "Light Soulstone, Beast Claw",
    "drop": "Sunshard, Copper Ore",
    "immunities": "None"
  },
  {
    "id": "5004.0",
    "name": "Sonia",
    "area": "Master of Wealth Ch. 2",
    "subArea": "Subterranean Snow Ruins",
    "type": "Regular",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Thunder",
      "Wind"
    ],
    "level": 12,
    "hp": 20400,
    "patk": 282,
    "pdef": 25,
    "matk": 271,
    "mdef": 25,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Repeated Piercing Thrust",
        "type": "Phys"
      },
      {
        "name": "Numbing Stab",
        "type": "Phys"
      },
      {
        "name": "Swift Stance",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> is focusing intently...",
        "type": "Unknown"
      },
      {
        "name": "Spike Step",
        "type": "Phys"
      },
      {
        "name": "Storm Spike",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (L)",
    "drop": "Sphinx Feather",
    "immunities": "Sleep, Curse"
  },
  {
    "id": "5014.0",
    "name": "Jurgen",
    "area": "Master of Power Ch. 2",
    "subArea": "Emberglow Slopes",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Tome",
      "Dark"
    ],
    "level": 14,
    "hp": 9882,
    "patk": 263,
    "pdef": 25,
    "matk": 265,
    "mdef": 25,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      },
      {
        "name": "Lethargy Needle",
        "type": "Phys"
      },
      {
        "name": "Vitalizing Agent",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his minions!",
        "type": "Unknown"
      },
      {
        "name": "Mass Lethargy Sting",
        "type": "Phys"
      },
      {
        "name": "Punishment to those who defy Lord Tytos!",
        "type": "Phys"
      },
      {
        "name": "Piercing Wild Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk, Rare Beast Hide, Holy Water (L)",
    "drop": "Rare Beast Hide, Beast Meat, Rare Beast Tusk",
    "immunities": "Poison"
  },
  {
    "id": "5015.0",
    "name": "Scarlet Wing",
    "area": "Master of Power Ch. 2",
    "subArea": "Emberglow Slopes",
    "type": "Regular",
    "shields": 6,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Fan",
      "Ice"
    ],
    "level": 12,
    "hp": 5967,
    "patk": 264,
    "pdef": 25,
    "matk": 232,
    "mdef": 25,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      }
    ],
    "steal": "Inspiring Plum, Basilisk Eye, Unicorn Horn",
    "drop": "Iron Ore",
    "immunities": "Terror"
  },
  {
    "id": "5027.0",
    "name": "Francesca the Actress",
    "area": "Master of Fame Ch. 2",
    "subArea": "Auguste's Villa",
    "type": "Regular",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 14,
    "hp": 20000,
    "patk": 246,
    "pdef": 23,
    "matk": 292,
    "mdef": 28,
    "skills": [
      {
        "name": "AHAHAHA!",
        "type": "Elem"
      },
      {
        "name": "I'll chop you to pieces!",
        "type": "Elem"
      },
      {
        "name": "I'll kill all of you!",
        "type": "Elem"
      },
      {
        "name": "Song of a Broken Soul",
        "type": "Elem"
      },
      {
        "name": "I won't let anyone get in his way!",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Meat, Beast Hide, HP-Restoring Herb (M)",
    "drop": "Rare Beast Meat, Beast Hide, Phoenix Feather",
    "immunities": "Sleep, Curse"
  },
  {
    "id": "5007.0",
    "name": "Rosso",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Valore: Main Boulevard",
    "type": "Regular",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Thunder",
      "Wind"
    ],
    "level": 14,
    "hp": 17136,
    "patk": 301,
    "pdef": 28,
    "matk": 239,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Pummel",
        "type": "Phys"
      },
      {
        "name": "Wild Bash",
        "type": "Phys"
      },
      {
        "name": "Roundhouse Kick",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> grew stronger and gained further resistance to physical attacks!",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> grew stronger and gained further resistance to elemental attacks!",
        "type": "Unknown"
      },
      {
        "name": "Inhale",
        "type": "Unknown"
      },
      {
        "name": "Quash",
        "type": "Phys"
      },
      {
        "name": "Hard Hit",
        "type": "Phys"
      },
      {
        "name": "Swift Stance",
        "type": "Phys"
      },
      {
        "name": "Swift Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Dragon Scale, Phoenix Feather, Kraken Ink",
    "drop": "Meteorite, Gold",
    "immunities": "None"
  },
  {
    "id": "5008.0",
    "name": "Lady Herminia",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 12,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 20,
    "hp": 14469,
    "patk": 324,
    "pdef": 25,
    "matk": 317,
    "mdef": 25,
    "skills": [
      {
        "name": "Eclipse of the Soul",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Phys"
      },
      {
        "name": "Abundant Light",
        "type": "Elem"
      },
      {
        "name": "Shining Stone",
        "type": "Elem"
      },
      {
        "name": "Blazing Aurora",
        "type": "Elem"
      },
      {
        "name": "Mindrot Powder",
        "type": "Unknown"
      },
      {
        "name": "Enrage Powder",
        "type": "Unknown"
      },
      {
        "name": "Safeguard Powder",
        "type": "Unknown"
      },
      {
        "name": "Ruinous Powder",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s fan rends space asunder!",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Fang, Quality Beast Tusk, Copper Ore",
    "drop": "Holy Water, Holy Water (L)",
    "immunities": "Confusion, Poison"
  },
  {
    "id": "5009.0",
    "name": "Lady In Waiting",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 8,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Fan",
      "Wind"
    ],
    "level": 20,
    "hp": 5883,
    "patk": 287,
    "pdef": 25,
    "matk": 279,
    "mdef": 25,
    "skills": [
      {
        "name": "Knife Throw",
        "type": "Phys"
      },
      {
        "name": "Wild Knife Throw",
        "type": "Phys"
      },
      {
        "name": "Fan of Knives",
        "type": "Phys"
      },
      {
        "name": "First Aid",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Meat, Beast Tusk",
    "drop": "Kraken Ink",
    "immunities": "None"
  },
  {
    "id": "5010.0",
    "name": "Herminia the Huntress",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 15,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 20,
    "hp": 23940,
    "patk": 325,
    "pdef": 25,
    "matk": 317,
    "mdef": 25,
    "skills": [
      {
        "name": "Shot",
        "type": "Phys"
      },
      {
        "name": "Fathomless Arrow",
        "type": "Phys"
      },
      {
        "name": "Radiant Arrow",
        "type": "Phys"
      },
      {
        "name": "Spill of Moonlight",
        "type": "Elem"
      },
      {
        "name": "Temptation of the Night",
        "type": "Unknown"
      },
      {
        "name": "Predation",
        "type": "Phys"
      },
      {
        "name": "The Huntress's Lament",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> has loosed arrows of light into the heavens!",
        "type": "Unknown"
      },
      {
        "name": "Arrows of light rain from the sky!",
        "type": "Elem"
      },
      {
        "name": "Rapacious Strike",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      }
    ],
    "steal": "Shiny Coin, Revitalizing Jam",
    "drop": "Rare Beast Horn, Olive of Life (M)",
    "immunities": "Stun, Blind"
  },
  {
    "id": "5147.0",
    "name": "Lady Herminia",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 12,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 22,
    "hp": 19950,
    "patk": 324,
    "pdef": 25,
    "matk": 317,
    "mdef": 25,
    "skills": [
      {
        "name": "Eclipse of the Soul",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Phys"
      },
      {
        "name": "Abundant Light",
        "type": "Elem"
      },
      {
        "name": "Shining Stone",
        "type": "Elem"
      },
      {
        "name": "Blazing Aurora",
        "type": "Elem"
      },
      {
        "name": "Mindrot Powder",
        "type": "Unknown"
      },
      {
        "name": "Enrage Powder",
        "type": "Unknown"
      },
      {
        "name": "Safeguard Powder",
        "type": "Unknown"
      },
      {
        "name": "Ruinous Powder",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s fan rends space asunder!",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (M), Manticore Stinger, Shadow Soulstone",
    "drop": "Old Coin",
    "immunities": "Paralysis"
  },
  {
    "id": "5148.0",
    "name": "Lady In Waiting",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 8,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Fan",
      "Wind"
    ],
    "level": 22,
    "hp": 8575,
    "patk": 293,
    "pdef": 25,
    "matk": 286,
    "mdef": 25,
    "skills": [
      {
        "name": "Knife Throw",
        "type": "Phys"
      },
      {
        "name": "Wild Knife Throw",
        "type": "Phys"
      },
      {
        "name": "Fan of Knives",
        "type": "Phys"
      },
      {
        "name": "First Aid",
        "type": "Unknown"
      }
    ],
    "steal": "Inspiring Plum Basket, Quality Beast Fang, Copper Ore",
    "drop": "Basilisk Eye, Beast Tusk, SP-Restoring Nut (M)",
    "immunities": "Instant Death, Paralysis"
  },
  {
    "id": "5151.0",
    "name": "Herminia the Huntress",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 17,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 22,
    "hp": 29900,
    "patk": 388,
    "pdef": 24,
    "matk": 323,
    "mdef": 22,
    "skills": [
      {
        "name": "Shot",
        "type": "Phys"
      },
      {
        "name": "Fathomless Arrow",
        "type": "Phys"
      },
      {
        "name": "Radiant Arrow",
        "type": "Phys"
      },
      {
        "name": "Spill of Moonlight",
        "type": "Elem"
      },
      {
        "name": "Temptation of the Night",
        "type": "Unknown"
      },
      {
        "name": "Predation",
        "type": "Phys"
      },
      {
        "name": "The Huntress's Lament",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> has loosed arrows of light into the heavens!",
        "type": "Unknown"
      },
      {
        "name": "Arrows of light rain from the sky!",
        "type": "Elem"
      },
      {
        "name": "Rapacious Strike",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> weaves a zone of mental collapse!",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb",
    "drop": "EXP, Beast Hide, Basilisk Eye",
    "immunities": "Confusion"
  },
  {
    "id": "98219.0",
    "name": "Manifestation of Mental Decay",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 20,
    "hp": 1830,
    "patk": 1,
    "pdef": 21,
    "matk": 1,
    "mdef": 22,
    "skills": [
      {
        "name": "Countdown to Ruin",
        "type": "Unknown"
      },
      {
        "name": "Flame of Ruination",
        "type": "Elem"
      },
      {
        "name": "The zone vanished!",
        "type": "Unknown"
      },
      {
        "name": "Debilitating Flash",
        "type": "Phys"
      },
      {
        "name": "It bides its time...",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Hide, Rare Beast Fang, Beast Meat",
    "drop": "Beast Claw",
    "immunities": "Curse"
  },
  {
    "id": "98249.0",
    "name": "Manifestation of Mental Decay",
    "area": "Master of Wealth Ch. 3",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 20,
    "hp": 2030,
    "patk": 1,
    "pdef": 21,
    "matk": 1,
    "mdef": 22,
    "skills": [
      {
        "name": "Countdown to Ruin",
        "type": "Unknown"
      },
      {
        "name": "Flame of Ruination",
        "type": "Elem"
      },
      {
        "name": "The zone vanished!",
        "type": "Unknown"
      },
      {
        "name": "All-Attack Counter Stance",
        "type": "Unknown"
      },
      {
        "name": "It bides its time...",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb",
    "drop": "Rare Beast Claw, Old Coin",
    "immunities": "None"
  },
  {
    "id": "5020.0",
    "name": "Snow Yak",
    "area": "Master of Power Ch. 3",
    "subArea": "Emberglow Slopes",
    "type": "Boss",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 16,
    "hp": 7728,
    "patk": 297,
    "pdef": 25,
    "matk": 291,
    "mdef": 25,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Silencing Strike",
        "type": "Phys"
      },
      {
        "name": "Scream of Silence",
        "type": "Unknown"
      }
    ],
    "steal": "Unicorn Horn, Revitalizing Jam (L)",
    "drop": "Olive, EXP",
    "immunities": "Poison"
  },
  {
    "id": "5022.0",
    "name": "Jurgen",
    "area": "Master of Power Ch. 3",
    "subArea": "Emberglow Slopes",
    "type": "Regular",
    "shields": 16,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Tome",
      "Dark"
    ],
    "level": 18,
    "hp": 14000,
    "patk": 300,
    "pdef": 35,
    "matk": 200,
    "mdef": 25,
    "skills": [
      {
        "name": "Triple Piercing Thrust",
        "type": "Phys"
      },
      {
        "name": "Venomous Sting",
        "type": "Phys"
      },
      {
        "name": "Mass Lethargy Sting",
        "type": "Phys"
      },
      {
        "name": "Stimulant",
        "type": "Unknown"
      },
      {
        "name": "Enervating Drug",
        "type": "Unknown"
      },
      {
        "name": "Die! Die! DIE!",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut",
    "drop": "Star Fragment, Beast Meat, Beast Fang",
    "immunities": "None"
  },
  {
    "id": "5023.0",
    "name": "Commander Tytos",
    "area": "Master of Power Ch. 3",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 17,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Wind",
      "Light"
    ],
    "level": 20,
    "hp": 16975,
    "patk": 349,
    "pdef": 28,
    "matk": 349,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Condemn",
        "type": "Phys"
      },
      {
        "name": "Quick as a Flash",
        "type": "Elem"
      },
      {
        "name": "Brutal Sweep",
        "type": "Phys"
      },
      {
        "name": "Oppression",
        "type": "Unknown"
      },
      {
        "name": "Rule by Fear",
        "type": "Phys"
      },
      {
        "name": "Precipice of Fear",
        "type": "Phys"
      },
      {
        "name": "Thunderbeast",
        "type": "Elem"
      },
      {
        "name": "Stormwind",
        "type": "Elem"
      },
      {
        "name": "Allaying Flash",
        "type": "Phys"
      },
      {
        "name": "Dual Thunderblades",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Horn",
    "drop": "Rare Beast Claw, Beast Tusk",
    "immunities": "Poison"
  },
  {
    "id": "5024.0",
    "name": "Tytos the Thunderblade",
    "area": "Master of Power Ch. 3",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 19,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Wind",
      "Light"
    ],
    "level": 20,
    "hp": 27604,
    "patk": 365,
    "pdef": 28,
    "matk": 365,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thundering Gale",
        "type": "Elem"
      },
      {
        "name": "Brutal Sweep",
        "type": "Phys"
      },
      {
        "name": "Suppression",
        "type": "Phys"
      },
      {
        "name": "Rule by Fear",
        "type": "Phys"
      },
      {
        "name": "Precipice of Fear",
        "type": "Phys"
      },
      {
        "name": "Thunderbeast Reversal",
        "type": "Elem"
      },
      {
        "name": "Thundersquall",
        "type": "Elem"
      },
      {
        "name": "Wail of the Thunderblade",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> unleashes the energy he absorbed!",
        "type": "Elem"
      },
      {
        "name": "Physical/Magic Intercept Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> bolsters his defense.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> has created an energy-draining barrier!",
        "type": "Unknown"
      }
    ],
    "steal": "Copper Ore, Basilisk Eye",
    "drop": "Quality Beast Horn, Revitalizing Jam, Gold Dust",
    "immunities": "Instant Death"
  },
  {
    "id": "5157.0",
    "name": "Commander Tytos",
    "area": "Master of Power Ch. 3",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 17,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Wind",
      "Light"
    ],
    "level": 22,
    "hp": 20608,
    "patk": 363,
    "pdef": 28,
    "matk": 363,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Condemn",
        "type": "Phys"
      },
      {
        "name": "Quick as a Flash",
        "type": "Elem"
      },
      {
        "name": "Brutal Sweep",
        "type": "Phys"
      },
      {
        "name": "Oppression",
        "type": "Unknown"
      },
      {
        "name": "Rule by Fear",
        "type": "Phys"
      },
      {
        "name": "Precipice of Fear",
        "type": "Phys"
      },
      {
        "name": "Thunderbeast",
        "type": "Elem"
      },
      {
        "name": "Stormwind",
        "type": "Elem"
      },
      {
        "name": "Allaying Flash",
        "type": "Phys"
      },
      {
        "name": "Dual Thunderblades",
        "type": "Elem"
      }
    ],
    "steal": "Ancient Coin, Antidote Herb",
    "drop": "Griffin Claw, Rare Beast Hide",
    "immunities": "Instant Death"
  },
  {
    "id": "5159.0",
    "name": "Tytos the Thunderblade",
    "area": "Master of Power Ch. 3",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 19,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Wind",
      "Light"
    ],
    "level": 22,
    "hp": 29078,
    "patk": 380,
    "pdef": 28,
    "matk": 380,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thundering Gale",
        "type": "Elem"
      },
      {
        "name": "Brutal Sweep",
        "type": "Phys"
      },
      {
        "name": "Suppression",
        "type": "Phys"
      },
      {
        "name": "Rule by Fear",
        "type": "Phys"
      },
      {
        "name": "Precipice of Fear",
        "type": "Phys"
      },
      {
        "name": "Thunderbeast Reversal",
        "type": "Elem"
      },
      {
        "name": "Thundersquall",
        "type": "Elem"
      },
      {
        "name": "Wail of the Thunderblade",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> unleashes the energy he absorbed!",
        "type": "Elem"
      },
      {
        "name": "Physical/Magic Intercept Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> bolsters his defense.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> has created an energy-draining barrier!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> has created an energy-draining barrier!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> has created an energy-draining barrier!",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (M)",
    "drop": "Revitalizing Jam (L), Nut",
    "immunities": "Curse"
  },
  {
    "id": "5030.0",
    "name": "Auguste the Playwright",
    "area": "Master of Fame Ch. 3",
    "subArea": "Amphitheatre: Backstage",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 20,
    "hp": 17264,
    "patk": 286,
    "pdef": 23,
    "matk": 340,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Passion",
        "type": "Elem"
      },
      {
        "name": "Widespread Fury",
        "type": "Elem"
      },
      {
        "name": "Toxic Dust",
        "type": "Unknown"
      },
      {
        "name": "Fatal Sentence",
        "type": "Unknown"
      },
      {
        "name": "Rhythm Unto Quietus",
        "type": "Phys"
      },
      {
        "name": "Muzzling Meter",
        "type": "Phys"
      },
      {
        "name": "In my script, you perform last.",
        "type": "Unknown"
      },
      {
        "name": "And now the grand finale!",
        "type": "Elem"
      },
      {
        "name": "Auguste's resistances to attacks outside of his weak points have increased!",
        "type": "Unknown"
      }
    ],
    "steal": "Manticore Stinger, Blessed Olive (L)",
    "drop": "Quality Beast Fang, HP-Restoring Herb (L)",
    "immunities": "None"
  },
  {
    "id": "5031.0",
    "name": "Auguste the Prince of Thieves",
    "area": "Master of Fame Ch. 3",
    "subArea": "Amphitheatre: Backstage",
    "type": "Regular",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 20,
    "hp": 19980,
    "patk": 289,
    "pdef": 23,
    "matk": 345,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Fury Unchained",
        "type": "Elem"
      },
      {
        "name": "Widespread Fury",
        "type": "Elem"
      },
      {
        "name": "Darkness of the Heart",
        "type": "Elem"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "Noxious Breath",
        "type": "Elem"
      },
      {
        "name": "Rhythm Unto Quietus",
        "type": "Phys"
      },
      {
        "name": "Silencing Octet",
        "type": "Phys"
      },
      {
        "name": "Ire of the Prince of Thieves",
        "type": "Elem"
      },
      {
        "name": "Noxious Breath",
        "type": "Elem"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> creates a deadly zone!",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb (M)",
    "drop": "SP-Restoring Nut",
    "immunities": "Stun"
  },
  {
    "id": "5165.0",
    "name": "Auguste the Playwright",
    "area": "Master of Fame Ch. 3",
    "subArea": "Amphitheatre: Backstage",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 22,
    "hp": 20125,
    "patk": 297,
    "pdef": 23,
    "matk": 356,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Passion",
        "type": "Elem"
      },
      {
        "name": "Widespread Fury",
        "type": "Elem"
      },
      {
        "name": "Toxic Dust",
        "type": "Unknown"
      },
      {
        "name": "Fatal Sentence",
        "type": "Unknown"
      },
      {
        "name": "Rhythm Unto Quietus",
        "type": "Phys"
      },
      {
        "name": "Muzzling Meter",
        "type": "Phys"
      },
      {
        "name": "In my script, you perform last.",
        "type": "Unknown"
      },
      {
        "name": "And now the grand finale!",
        "type": "Elem"
      },
      {
        "name": "Auguste's resistances to attacks outside of his weak points have increased!",
        "type": "Unknown"
      }
    ],
    "steal": "Gold Dust",
    "drop": "Herb, SP-Restoring Nut",
    "immunities": "Sleep"
  },
  {
    "id": "5167.0",
    "name": "Auguste the Prince of Thieves",
    "area": "Master of Fame Ch. 3",
    "subArea": "Amphitheatre: Backstage",
    "type": "Regular",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 22,
    "hp": 21090,
    "patk": 301,
    "pdef": 23,
    "matk": 360,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Fury Unchained",
        "type": "Elem"
      },
      {
        "name": "Widespread Fury",
        "type": "Elem"
      },
      {
        "name": "Darkness of the Heart",
        "type": "Elem"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "Noxious Breath",
        "type": "Elem"
      },
      {
        "name": "Rhythm Unto Quietus",
        "type": "Phys"
      },
      {
        "name": "Silencing Octet",
        "type": "Phys"
      },
      {
        "name": "Ire of the Prince of Thieves",
        "type": "Elem"
      },
      {
        "name": "Noxious Breath",
        "type": "Elem"
      },
      {
        "name": "Weakness Shifting Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> creates a deadly zone!",
        "type": "Unknown"
      }
    ],
    "steal": "Fire Soulstone, Herb, Rare Beast Tusk",
    "drop": "Rare Beast Fang, Gold, Revitalizing Jam (M)",
    "immunities": "None"
  },
  {
    "id": "98221.0",
    "name": "Ruinous Rancor",
    "area": "Master of Fame Ch. 3",
    "subArea": "Amphitheatre: Backstage",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 20,
    "hp": 1560,
    "patk": 270,
    "pdef": 25,
    "matk": 263,
    "mdef": 25,
    "skills": [
      {
        "name": "Fatal Sentence",
        "type": "Unknown"
      },
      {
        "name": "Fatal Sentence",
        "type": "Unknown"
      },
      {
        "name": "Fatal Sentence",
        "type": "Unknown"
      },
      {
        "name": "Fatal Sentence",
        "type": "Unknown"
      }
    ],
    "steal": "Inspiring Plum",
    "drop": "Antidote Herb, Basilisk Eye",
    "immunities": "Poison, Petrification"
  },
  {
    "id": "98010.0",
    "name": "Sazantos",
    "area": "Finale",
    "subArea": "Wishvale Trail",
    "type": "Regular",
    "shields": 13,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 25,
    "hp": 28274,
    "patk": 394,
    "pdef": 30,
    "matk": 386,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Aggressive Slash",
        "type": "Phys"
      },
      {
        "name": "Radiant Light",
        "type": "Elem"
      },
      {
        "name": "Almighty",
        "type": "Unknown"
      },
      {
        "name": "Sacred Flame's Grace",
        "type": "Unknown"
      },
      {
        "name": "Transcendent Light",
        "type": "Elem"
      },
      {
        "name": "Phantom Strike",
        "type": "Phys"
      },
      {
        "name": "Divine Flame",
        "type": "Unknown"
      },
      {
        "name": "Shadowcleaver",
        "type": "Phys"
      },
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Aggressive Slash",
        "type": "Phys"
      },
      {
        "name": "Phantom Strike",
        "type": "Phys"
      },
      {
        "name": "Shadowcleaver",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb",
    "drop": "HP-Restoring Herb (M)",
    "immunities": "None"
  },
  {
    "id": "5136.0",
    "name": "Ring-Sealed Beast",
    "area": "Finale",
    "subArea": "Isle of Orsa: Altar",
    "type": "Regular",
    "shields": 18,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Staff",
      "Wind",
      "Light"
    ],
    "level": 25,
    "hp": 19496,
    "patk": 380,
    "pdef": 36,
    "matk": 380,
    "mdef": 24,
    "skills": [
      {
        "name": "It prepares to attack a target!",
        "type": "Unknown"
      },
      {
        "name": "It prepares to attack the party!",
        "type": "Unknown"
      },
      {
        "name": "Flame of Nil",
        "type": "Elem"
      },
      {
        "name": "Repeated Flame of Nil",
        "type": "Elem"
      },
      {
        "name": "Hard Hit",
        "type": "Phys"
      },
      {
        "name": "Hard Pummel",
        "type": "Phys"
      },
      {
        "name": "Crush and Grind",
        "type": "Phys"
      },
      {
        "name": "Infernal Flame of Nil",
        "type": "Elem"
      },
      {
        "name": "Countdown to Ruin",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (M), Quality Beast Horn",
    "drop": "HP-Restoring Herb (L), Ancient Coin, Rusty Coin",
    "immunities": "None"
  },
  {
    "id": "5032.0",
    "name": "Mesara the Thief",
    "area": "Master of All Ch. 1",
    "subArea": "Gray Grotto: Depths",
    "type": "Regular",
    "shields": 11,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Fire",
      "Light"
    ],
    "level": 30,
    "hp": 23000,
    "patk": 350,
    "pdef": 40,
    "matk": 290,
    "mdef": 30,
    "skills": [
      {
        "name": "With a daunting look, <skl_user_name> takes aim.",
        "type": "Unknown"
      },
      {
        "name": "Emboldened Slash",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Preemptive Slash",
        "type": "Phys"
      },
      {
        "name": "Lifesteal Sword",
        "type": "Phys"
      },
      {
        "name": "Lifesteal Rush",
        "type": "Phys"
      },
      {
        "name": "Gouge",
        "type": "Phys"
      },
      {
        "name": "Skull Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, Quality Beast Horn",
    "drop": "Olive of Life (M), Blessed Olive, Beast Hide",
    "immunities": "Confusion"
  },
  {
    "id": "5033.0",
    "name": "Thief",
    "area": "Master of All Ch. 1",
    "subArea": "Gray Grotto: Depths",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Fan",
      "Thunder",
      "Light"
    ],
    "level": 30,
    "hp": 7000,
    "patk": 300,
    "pdef": 25,
    "matk": 220,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Lifesteal Sword",
        "type": "Phys"
      },
      {
        "name": "Twofold Slash",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Iron Ore, Meteorite",
    "drop": "HP-Restoring Herb (L)",
    "immunities": "Sleep"
  },
  {
    "id": "5034.0",
    "name": "Thief",
    "area": "Master of All Ch. 1",
    "subArea": "Gray Grotto: Depths",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Fan",
      "Thunder",
      "Light"
    ],
    "level": 30,
    "hp": 7000,
    "patk": 300,
    "pdef": 25,
    "matk": 220,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Lifesteal Sword",
        "type": "Phys"
      },
      {
        "name": "Twofold Slash",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Iron Ore, Healing Grape Bunch",
    "drop": "Revitalizing Jam (M)",
    "immunities": "None"
  },
  {
    "id": "5035.0",
    "name": "M'suhi the Viper",
    "area": "Master of All Ch. 2",
    "subArea": "Geist Canyon",
    "type": "Regular",
    "shields": 14,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Staff",
      "Fan",
      "Fire",
      "Light"
    ],
    "level": 35,
    "hp": 26000,
    "patk": 420,
    "pdef": 45,
    "matk": 350,
    "mdef": 38,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Poison Sword",
        "type": "Phys"
      },
      {
        "name": "Wild Poison Sword",
        "type": "Phys"
      },
      {
        "name": "Flash Sweep",
        "type": "Phys"
      },
      {
        "name": "Serpent's Bite",
        "type": "Phys"
      },
      {
        "name": "Slithering Serpent",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> readied himself!",
        "type": "Unknown"
      },
      {
        "name": "Reprisal Stance",
        "type": "Unknown"
      },
      {
        "name": "Serpent's Blade",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Beast Horn, Quality Beast Claw",
    "drop": "Revitalizing Jam (M)",
    "immunities": "Poison, Curse"
  },
  {
    "id": "5191.0",
    "name": "Thief",
    "area": "Master of All Ch. 2",
    "subArea": "Geist Canyon",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Fan",
      "Thunder",
      "Light"
    ],
    "level": 35,
    "hp": 7000,
    "patk": 310,
    "pdef": 25,
    "matk": 220,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Inspiring Plum, Rusty Coin, Quality Beast Horn",
    "drop": "Ancient Coin, Olive, SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "5192.0",
    "name": "Thief",
    "area": "Master of All Ch. 2",
    "subArea": "Geist Canyon",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Fan",
      "Thunder",
      "Light"
    ],
    "level": 35,
    "hp": 7000,
    "patk": 310,
    "pdef": 25,
    "matk": 220,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget, Quality Beast Claw, Wind Soulstone",
    "drop": "Blessed Olive (L), Antidote Herb (M)",
    "immunities": "None"
  },
  {
    "id": "5036.0",
    "name": "Edoras Infantryman I",
    "area": "Master of All Ch. 3",
    "subArea": "Cragspear: Slums",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Staff",
      "Tome",
      "Thunder"
    ],
    "level": 36,
    "hp": 3172,
    "patk": 317,
    "pdef": 52,
    "matk": 264,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Offensive Formation",
        "type": "Unknown"
      }
    ],
    "steal": "Shadow Soulstone",
    "drop": "Beast Claw, Griffin Claw, Rare Beast Claw",
    "immunities": "Silence"
  },
  {
    "id": "5037.0",
    "name": "Edoras Infantryman II",
    "area": "Master of All Ch. 3",
    "subArea": "Cragspear: Slums",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Wind"
    ],
    "level": 36,
    "hp": 3172,
    "patk": 317,
    "pdef": 52,
    "matk": 264,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Defensive Formation",
        "type": "Unknown"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Beast Meat",
    "drop": "Moonstone",
    "immunities": "Confusion"
  },
  {
    "id": "5038.0",
    "name": "Gimel the Brigand Leader",
    "area": "Master of All Ch. 3",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 10,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 40,
    "hp": 28000,
    "patk": 430,
    "pdef": 50,
    "matk": 380,
    "mdef": 38,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Skill Steal",
        "type": "Phys"
      },
      {
        "name": "Wild Skill Steal",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> hides behind his lackeys!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his lackeys!",
        "type": "Unknown"
      },
      {
        "name": "Mass Skill Steal",
        "type": "Phys"
      }
    ],
    "steal": "Herb, Basilisk Eye",
    "drop": "Blessed Olive, Moonstone, Chimera Fang",
    "immunities": "None"
  },
  {
    "id": "5039.0",
    "name": "Thief",
    "area": "Master of All Ch. 3",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 40,
    "hp": 7500,
    "patk": 330,
    "pdef": 40,
    "matk": 200,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Repeated Piercing Thrust",
        "type": "Phys"
      },
      {
        "name": "Piercing Wild Thrust",
        "type": "Phys"
      },
      {
        "name": "Pilfer Magic",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, SP-Restoring Nut",
    "drop": "Quality Beast Meat, Sphinx Feather, Blessed Olive (M)",
    "immunities": "Confusion"
  },
  {
    "id": "5040.0",
    "name": "Thief",
    "area": "Master of All Ch. 3",
    "subArea": "Waterpool Caves",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 40,
    "hp": 7500,
    "patk": 330,
    "pdef": 40,
    "matk": 200,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Repeated Piercing Thrust",
        "type": "Phys"
      },
      {
        "name": "Piercing Wild Thrust",
        "type": "Phys"
      },
      {
        "name": "Pilfer Magic",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb, Chimera Fang",
    "drop": "Beast Claw, Rare Beast Hide",
    "immunities": "None"
  },
  {
    "id": "98549.0",
    "name": "Desert Lizardking I",
    "area": "Kindlers Ch. 3",
    "subArea": "Finesand Ruins",
    "type": "Boss",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Tome",
      "Fan",
      "Wind",
      "Dark"
    ],
    "level": 29,
    "hp": 8000,
    "patk": 380,
    "pdef": 80,
    "matk": 200,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Smash",
        "type": "Phys"
      },
      {
        "name": "Wild Bash",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (M), Old Coin, Herb",
    "drop": "Nut",
    "immunities": "None"
  },
  {
    "id": "98248.0",
    "name": "Desert Lizardking",
    "area": "Kindlers Ch. 3",
    "subArea": "Finesand Ruins",
    "type": "Boss",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Tome",
      "Fan",
      "Wind",
      "Dark"
    ],
    "level": 29,
    "hp": 8000,
    "patk": 380,
    "pdef": 80,
    "matk": 200,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Smash",
        "type": "Phys"
      },
      {
        "name": "Wild Bash",
        "type": "Phys"
      }
    ],
    "steal": "Gold Dust, Rare Beast Horn",
    "drop": "Rusty Coin, HP-Restoring Herb (M)",
    "immunities": "Petrification, Paralysis"
  },
  {
    "id": "98247.0",
    "name": "Lizardmen Leader",
    "area": "Kindlers Ch. 3",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 17,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 29,
    "hp": 25000,
    "patk": 480,
    "pdef": 100,
    "matk": 300,
    "mdef": 80,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Poison Strike",
        "type": "Phys"
      },
      {
        "name": "Smash",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his minions!",
        "type": "Unknown"
      },
      {
        "name": "Bombardment",
        "type": "Phys"
      }
    ],
    "steal": "Minotaur Horn, Gold Dust, Herb",
    "drop": "Beast Fang",
    "immunities": "Sleep"
  },
  {
    "id": "98591.0",
    "name": "Emerald Direwolf",
    "area": "Kindlers Ch. 5",
    "subArea": "Path to the Flamebearer's Shrine",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Ice",
      "Wind",
      "Dark"
    ],
    "level": 33,
    "hp": 58893,
    "patk": 453,
    "pdef": 60,
    "matk": 444,
    "mdef": 60,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Vicious Charge",
        "type": "Phys"
      },
      {
        "name": "Sharp Claw",
        "type": "Phys"
      },
      {
        "name": "Demolishing Flames",
        "type": "Elem"
      },
      {
        "name": "Hellish Inferno",
        "type": "Elem"
      },
      {
        "name": "Bestial Roar",
        "type": "Unknown"
      },
      {
        "name": "Wild Rend",
        "type": "Phys"
      },
      {
        "name": "Hard Claw",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> stands ready!",
        "type": "Unknown"
      },
      {
        "name": "Vortex of the Flame",
        "type": "Elem"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Claw, Iron Ore",
    "drop": "Beast Fang",
    "immunities": "Blind"
  },
  {
    "id": "98592.0",
    "name": "Emerald Direwolf",
    "area": "Kindlers Ch. 5",
    "subArea": "Path to the Flamebearer's Shrine",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Ice",
      "Wind",
      "Dark"
    ],
    "level": 33,
    "hp": 58893,
    "patk": 521,
    "pdef": 60,
    "matk": 497,
    "mdef": 60,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Vicious Charge",
        "type": "Phys"
      },
      {
        "name": "Sharp Claw",
        "type": "Phys"
      },
      {
        "name": "Demolishing Flames",
        "type": "Elem"
      },
      {
        "name": "Hellish Inferno",
        "type": "Elem"
      },
      {
        "name": "Bestial Roar",
        "type": "Unknown"
      },
      {
        "name": "Wild Rend",
        "type": "Phys"
      },
      {
        "name": "Hard Claw",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> stands ready!",
        "type": "Unknown"
      },
      {
        "name": "Vortex of the Flame",
        "type": "Elem"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      }
    ],
    "steal": "Hydra Scale",
    "drop": "Nut, Beast Meat",
    "immunities": "None"
  },
  {
    "id": "5041.0",
    "name": "Cerro the Emissary",
    "area": "Master of All Ch. 4",
    "subArea": "Sunshade Sands",
    "type": "Regular",
    "shields": 14,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 43,
    "hp": 41580,
    "patk": 486,
    "pdef": 44,
    "matk": 394,
    "mdef": 36,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Double Claw",
        "type": "Phys"
      },
      {
        "name": "Claw All",
        "type": "Phys"
      },
      {
        "name": "Crushing Claw",
        "type": "Phys"
      },
      {
        "name": "Paralyzing Claw",
        "type": "Phys"
      },
      {
        "name": "Deadly Claw",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive, HP-Restoring Herb (L)",
    "drop": "Antidote Herb (L), Beast Meat",
    "immunities": "None"
  },
  {
    "id": "5043.0",
    "name": "Gonzalez the Ironarm",
    "area": "Master of All Ch. 5",
    "subArea": "Valley of Death",
    "type": "Regular",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 31,
    "hp": 34188,
    "patk": 537,
    "pdef": 48,
    "matk": 354,
    "mdef": 32,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Chop",
        "type": "Phys"
      },
      {
        "name": "Ram",
        "type": "Phys"
      },
      {
        "name": "Riot Ball",
        "type": "Phys"
      },
      {
        "name": "Wrecking Ball",
        "type": "Phys"
      },
      {
        "name": "Rage of Iron",
        "type": "Phys"
      },
      {
        "name": "Knock Down",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> bolsters his defense!",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water, Ice Soulstone",
    "drop": "Leaf",
    "immunities": "Confusion"
  },
  {
    "id": "5044.0",
    "name": "General Krauser",
    "area": "Master of All Ch. 5",
    "subArea": "Valley of Death: West",
    "type": "Boss",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 32,
    "hp": 37488,
    "patk": 452,
    "pdef": 40,
    "matk": 418,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stalwart Spear",
        "type": "Phys"
      },
      {
        "name": "Tempest Spear",
        "type": "Phys"
      },
      {
        "name": "Double Stalwart Spear",
        "type": "Phys"
      },
      {
        "name": "Tempest Greatspear",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> orders a defensive formation!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> orders an offensive formation!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s subordinates come running!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> unleashes his true power!",
        "type": "Unknown"
      }
    ],
    "steal": "Ice Soulstone, Wind Soulstone, Light Soulstone",
    "drop": "Healing Grape Bunch, SP-Restoring Nut (M)",
    "immunities": "Silence"
  },
  {
    "id": "5045.0",
    "name": "General's Subordinate",
    "area": "Master of All Ch. 5",
    "subArea": "Valley of Death: West",
    "type": "Boss",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 32,
    "hp": 5070,
    "patk": 381,
    "pdef": 40,
    "matk": 347,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (M)",
    "drop": "Silver Nugget, Dragon Scale",
    "immunities": "Curse"
  },
  {
    "id": "5046.0",
    "name": "General's Subordinate",
    "area": "Master of All Ch. 5",
    "subArea": "Valley of Death: West",
    "type": "Boss",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 32,
    "hp": 5070,
    "patk": 381,
    "pdef": 40,
    "matk": 347,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      }
    ],
    "steal": "Minotaur Horn, Hydra Scale",
    "drop": "SP-Restoring Nut (M), Rare Beast Fang",
    "immunities": "Terror"
  },
  {
    "id": "5047.0",
    "name": "King Pardis III",
    "area": "Master of All Ch. 5",
    "subArea": "Valley of Death: West",
    "type": "Boss",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 32,
    "hp": 100000,
    "patk": 380,
    "pdef": 80,
    "matk": 380,
    "mdef": 80,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "On Your Knees",
        "type": "Phys"
      },
      {
        "name": "Sword of Ruin",
        "type": "Phys"
      },
      {
        "name": "Wild Infernal Blade",
        "type": "Elem"
      },
      {
        "name": "Know your place...",
        "type": "Phys"
      },
      {
        "name": "The power of the ring has been unleashed!",
        "type": "Unknown"
      }
    ],
    "steal": "Unicorn Horn, Rare Beast Horn",
    "drop": "Shiny Coin, Revitalizing Jam",
    "immunities": "None"
  },
  {
    "id": "5048.0",
    "name": "Mysterious Assassin",
    "area": "Master of All Ch. 6",
    "subArea": "Cragspear",
    "type": "Regular",
    "shields": 8,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Tome",
      "Fire",
      "Light"
    ],
    "level": 32,
    "hp": 27783,
    "patk": 450,
    "pdef": 50,
    "matk": 420,
    "mdef": 41,
    "skills": [
      {
        "name": "Gelid Slash",
        "type": "Elem"
      },
      {
        "name": "Wild Gelid Slash",
        "type": "Elem"
      },
      {
        "name": "Enfeebling Sword",
        "type": "Phys"
      },
      {
        "name": "Dual Enfeebling Sword",
        "type": "Phys"
      },
      {
        "name": "Lifesucker Slash",
        "type": "Phys"
      },
      {
        "name": "What this realm truly needs is an absolute ruler!",
        "type": "Phys"
      }
    ],
    "steal": "Kraken Ink, Meteorite",
    "drop": "Cerberus Fang",
    "immunities": "Poison, Curse"
  },
  {
    "id": "5140.0",
    "name": "Edoras Soldier",
    "area": "Master of All Ch. 6",
    "subArea": "Cragspear",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Thunder"
    ],
    "level": 32,
    "hp": 5450,
    "patk": 401,
    "pdef": 45,
    "matk": 367,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Soldiers of Edoras bar the path!",
        "type": "Unknown"
      }
    ],
    "steal": "Fire Soulstone",
    "drop": "Quality Beast Claw, Olive, Inspiring Plum Basket",
    "immunities": "Stun, Poison"
  },
  {
    "id": "5141.0",
    "name": "Edoras Soldier",
    "area": "Master of All Ch. 6",
    "subArea": "Cragspear",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Thunder"
    ],
    "level": 32,
    "hp": 5450,
    "patk": 401,
    "pdef": 45,
    "matk": 367,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Soldiers of Edoras bar the path!",
        "type": "Unknown"
      }
    ],
    "steal": "Phoenix Feather, Minotaur Horn",
    "drop": "Rare Beast Claw, Revitalizing Jam",
    "immunities": "Curse"
  },
  {
    "id": "5142.0",
    "name": "Edoras Soldier",
    "area": "Master of All Ch. 6",
    "subArea": "Cragspear",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Thunder"
    ],
    "level": 32,
    "hp": 5450,
    "patk": 401,
    "pdef": 45,
    "matk": 367,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Soldiers of Edoras bar the path!",
        "type": "Unknown"
      }
    ],
    "steal": "Ancient Coin, Chimera Fang",
    "drop": "Revitalizing Jam (L)",
    "immunities": "None"
  },
  {
    "id": "5064.0",
    "name": "Edoras Defender of Wealth",
    "area": "Master of All Ch. 6",
    "subArea": "Cragspear",
    "type": "Regular",
    "shields": 11,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Dark"
    ],
    "level": 34,
    "hp": 47154,
    "patk": 421,
    "pdef": 45,
    "matk": 503,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mental Concentration",
        "type": "Phys"
      },
      {
        "name": "Bombardment",
        "type": "Phys"
      },
      {
        "name": "Explosive Hit",
        "type": "Phys"
      },
      {
        "name": "Light Soulstone (M)",
        "type": "Elem"
      },
      {
        "name": "First Aid",
        "type": "Phys"
      },
      {
        "name": "Light Soulstone (L)",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Hide, Revitalizing Jam (L)",
    "drop": "HP-Restoring Herb (L), Sunshard, Silver Nugget",
    "immunities": "Sleep"
  },
  {
    "id": "5065.0",
    "name": "Edoras Defender of Fame",
    "area": "Master of All Ch. 6",
    "subArea": "Cragspear",
    "type": "Regular",
    "shields": 11,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 34,
    "hp": 47154,
    "patk": 491,
    "pdef": 60,
    "matk": 480,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "Spirited Strike",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Protective Shield",
        "type": "Unknown"
      },
      {
        "name": "Full Swing",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (L)",
    "drop": "Gold",
    "immunities": "Poison, Petrification"
  },
  {
    "id": "5066.0",
    "name": "Edoras Defender of Power",
    "area": "Master of All Ch. 6",
    "subArea": "Cragspear",
    "type": "Regular",
    "shields": 11,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 34,
    "hp": 47154,
    "patk": 514,
    "pdef": 55,
    "matk": 412,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Numbing Thrust",
        "type": "Phys"
      },
      {
        "name": "Lacerating Thrust",
        "type": "Phys"
      },
      {
        "name": "Lance of Loyalty",
        "type": "Unknown"
      },
      {
        "name": "Vigorous Assault",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life (M), Kraken Ink, Cerberus Fang",
    "drop": "Quality Beast Fang, Rare Beast Claw, Beast Fang",
    "immunities": "Stun"
  },
  {
    "id": "5049.0",
    "name": "Gonska the Jester",
    "area": "Master of All Ch. 7",
    "subArea": "Castle Riven",
    "type": "Regular",
    "shields": 11,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 33,
    "hp": 54873,
    "patk": 480,
    "pdef": 45,
    "matk": 537,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Bewitchment",
        "type": "Elem"
      },
      {
        "name": "Wild Bewitchment",
        "type": "Elem"
      },
      {
        "name": "Energy Absorption",
        "type": "Elem"
      },
      {
        "name": "Black Magic",
        "type": "Elem"
      },
      {
        "name": "Shadow Magic",
        "type": "Elem"
      },
      {
        "name": "Tenebrae Operire",
        "type": "Elem"
      },
      {
        "name": "Blessing of Protection",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> readies himself!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> readies himself!",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> unleashes his energy!",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> readies himself!",
        "type": "Elem"
      }
    ],
    "steal": "Old Coin, Beast Meat",
    "drop": "Olive, Minotaur Horn",
    "immunities": "Sleep, Stun"
  },
  {
    "id": "5050.0",
    "name": "General Krauser",
    "area": "Master of All Ch. 8",
    "subArea": "Cragspear",
    "type": "Boss",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 34,
    "hp": 49600,
    "patk": 507,
    "pdef": 60,
    "matk": 453,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stalwart Spear",
        "type": "Phys"
      },
      {
        "name": "Tempest Spear",
        "type": "Phys"
      },
      {
        "name": "Ultra Stalwart Spear",
        "type": "Phys"
      },
      {
        "name": "Ultra Tempest Spear",
        "type": "Phys"
      },
      {
        "name": "Stalwart Tempest Spear",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> orders a defensive formation!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s subordinates come running!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> orders an offensive formation!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> unleashes his true power!",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (M), Quality Beast Hide",
    "drop": "Iron Ore, HP-Restoring Herb (M), Gold",
    "immunities": "None"
  },
  {
    "id": "5051.0",
    "name": "General's Subordinate",
    "area": "Master of All Ch. 8",
    "subArea": "Cragspear",
    "type": "Boss",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 34,
    "hp": 9842,
    "patk": 412,
    "pdef": 50,
    "matk": 383,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      }
    ],
    "steal": "Shiny Coin, Hydra Scale",
    "drop": "Quality Beast Claw",
    "immunities": "None"
  },
  {
    "id": "5052.0",
    "name": "General's Subordinate",
    "area": "Master of All Ch. 8",
    "subArea": "Cragspear",
    "type": "Boss",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 34,
    "hp": 9842,
    "patk": 412,
    "pdef": 50,
    "matk": 383,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      }
    ],
    "steal": "Kraken Ink, HP-Restoring Herb",
    "drop": "Griffin Claw",
    "immunities": "Instant Death"
  },
  {
    "id": "5058.0",
    "name": "Edoras Defender of Power",
    "area": "Master of All Ch. 8",
    "subArea": "Castle Edoras",
    "type": "Regular",
    "shields": 11,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 34,
    "hp": 47154,
    "patk": 514,
    "pdef": 55,
    "matk": 412,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Numbing Thrust",
        "type": "Phys"
      },
      {
        "name": "Lacerating Thrust",
        "type": "Phys"
      },
      {
        "name": "Lance of Loyalty",
        "type": "Unknown"
      },
      {
        "name": "Vigorous Assault",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive (L)",
    "drop": "Rare Beast Horn",
    "immunities": "None"
  },
  {
    "id": "5057.0",
    "name": "Edoras Defender of Fame",
    "area": "Master of All Ch. 8",
    "subArea": "Castle Edoras: Upper Floor",
    "type": "Regular",
    "shields": 11,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 34,
    "hp": 47154,
    "patk": 491,
    "pdef": 60,
    "matk": 480,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "Spirited Strike",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Protective Shield",
        "type": "Unknown"
      },
      {
        "name": "Full Swing",
        "type": "Phys"
      }
    ],
    "steal": "Old Coin",
    "drop": "Blessed Olive, Phoenix Feather, Iron Ore",
    "immunities": "None"
  },
  {
    "id": "5056.0",
    "name": "Edoras Defender of Wealth",
    "area": "Master of All Ch. 8",
    "subArea": "Castle Edoras: Throne Room",
    "type": "Regular",
    "shields": 11,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Dark"
    ],
    "level": 34,
    "hp": 47154,
    "patk": 421,
    "pdef": 45,
    "matk": 503,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mental Concentration",
        "type": "Phys"
      },
      {
        "name": "Bombardment",
        "type": "Phys"
      },
      {
        "name": "Explosive Hit",
        "type": "Phys"
      },
      {
        "name": "Light Soulstone (M)",
        "type": "Elem"
      },
      {
        "name": "First Aid",
        "type": "Phys"
      },
      {
        "name": "Light Soulstone (L)",
        "type": "Elem"
      }
    ],
    "steal": "Ancient Coin",
    "drop": "Quality Beast Horn, Sphinx Feather",
    "immunities": "Poison"
  },
  {
    "id": "5053.0",
    "name": "King Pardis III",
    "area": "Master of All Ch. 8",
    "subArea": "Castle Edoras: Throne Room",
    "type": "Boss",
    "shields": 99,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 34,
    "hp": 52640,
    "patk": 507,
    "pdef": 60,
    "matk": 496,
    "mdef": 60,
    "skills": [
      {
        "name": "Flood of Despair",
        "type": "Unknown"
      },
      {
        "name": "Unyielding Blade of the Absolute",
        "type": "Phys"
      },
      {
        "name": "Unyielding Blade of Destruction",
        "type": "Phys"
      },
      {
        "name": "On Your Knees",
        "type": "Phys"
      },
      {
        "name": "Men! Fight with everything you have!",
        "type": "Unknown"
      },
      {
        "name": "Men! Fight with everything you have!",
        "type": "Unknown"
      },
      {
        "name": "Men! Fight with everything you have!",
        "type": "Unknown"
      },
      {
        "name": "Men! Fight with everything you have!",
        "type": "Unknown"
      },
      {
        "name": "Men! Fight with everything you have!",
        "type": "Unknown"
      },
      {
        "name": "Men! Fight with everything you have!",
        "type": "Unknown"
      },
      {
        "name": "Men! Fight with everything you have!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s mighty shield has weakened!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Horn",
    "drop": "Quality Beast Claw, SP-Restoring Nut (L)",
    "immunities": "Curse"
  },
  {
    "id": "5054.0",
    "name": "Pardis the Scholarking",
    "area": "Master of All Ch. 8",
    "subArea": "Castle Edoras: Throne Room",
    "type": "Boss",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 34,
    "hp": 84194,
    "patk": 544,
    "pdef": 75,
    "matk": 513,
    "mdef": 75,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Threatening Pressure",
        "type": "Elem"
      },
      {
        "name": "Wild Infernal Blade",
        "type": "Elem"
      },
      {
        "name": "Flood of Despair",
        "type": "Unknown"
      },
      {
        "name": "Unyielding Blade of the Absolute",
        "type": "Phys"
      },
      {
        "name": "Unyielding Blade of Ruin",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s ring emits an eerie light!",
        "type": "Unknown"
      },
      {
        "name": "On Your Knees",
        "type": "Phys"
      },
      {
        "name": "Divine Blow",
        "type": "Elem"
      },
      {
        "name": "Physical Counter Stance",
        "type": "Unknown"
      },
      {
        "name": "Magic Counter Stance",
        "type": "Unknown"
      },
      {
        "name": "Lightning of the Absolute",
        "type": "Elem"
      },
      {
        "name": "Wave of the Absolute",
        "type": "Phys"
      },
      {
        "name": "Bow down to me.",
        "type": "Unknown"
      }
    ],
    "steal": "Unicorn Horn, Iron Ore, Old Coin",
    "drop": "Quality Beast Tusk",
    "immunities": "Instant Death"
  },
  {
    "id": "5055.0",
    "name": "Master of All",
    "area": "Master of All Ch. 8",
    "subArea": "Castle Edoras: Throne Room",
    "type": "Regular",
    "shields": 18,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 34,
    "hp": 120995,
    "patk": 587,
    "pdef": 100,
    "matk": 577,
    "mdef": 100,
    "skills": [
      {
        "name": "BeATiNG",
        "type": "Phys"
      },
      {
        "name": "CrUshINg DeATh",
        "type": "Elem"
      },
      {
        "name": "CruSh",
        "type": "Phys"
      },
      {
        "name": "PuLveRiZe",
        "type": "Phys"
      },
      {
        "name": "RIp AnD TeaR",
        "type": "Phys"
      },
      {
        "name": "UraaaaAAARGHHHH!",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s ring emits a mysterious light!",
        "type": "Unknown"
      },
      {
        "name": "Ominous power flows forth from the ring.",
        "type": "Unknown"
      },
      {
        "name": "SubMit to ME!",
        "type": "Phys"
      },
      {
        "name": "DiviNe BloW",
        "type": "Elem"
      },
      {
        "name": "Bright Evil Eye",
        "type": "Unknown"
      },
      {
        "name": "Roaring Wave",
        "type": "Elem"
      },
      {
        "name": "Ultimate Barrier of the Absolute",
        "type": "Unknown"
      },
      {
        "name": "DiViNe iMpAcT",
        "type": "Elem"
      },
      {
        "name": "Chaos Vortex",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Tusk, Revitalizing Jam (M), Copper Ore",
    "drop": "Quality Beast Hide, Old Coin",
    "immunities": "Curse, Terror"
  },
  {
    "id": "5188.0",
    "name": "Sazantos",
    "area": "Finale",
    "subArea": "Isle of Orsa: Depths",
    "type": "Regular",
    "shields": 19,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 35,
    "hp": 28496,
    "patk": 485,
    "pdef": 100,
    "matk": 456,
    "mdef": 100,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Aggressive Slash",
        "type": "Phys"
      },
      {
        "name": "Radiant Light",
        "type": "Elem"
      },
      {
        "name": "Almighty",
        "type": "Unknown"
      },
      {
        "name": "Sacred Flame's Grace",
        "type": "Unknown"
      },
      {
        "name": "Transcendent Light",
        "type": "Elem"
      },
      {
        "name": "Phantom Strike",
        "type": "Phys"
      },
      {
        "name": "Divine Flame",
        "type": "Unknown"
      },
      {
        "name": "Shadowcleaver",
        "type": "Phys"
      },
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Aggressive Slash",
        "type": "Phys"
      },
      {
        "name": "Phantom Strike",
        "type": "Phys"
      },
      {
        "name": "Shadowcleaver",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (M), Wind Soulstone",
    "drop": "Holy Water (L), Revitalizing Jam (M)",
    "immunities": "None"
  },
  {
    "id": "5062.0",
    "name": "Blackrobe (Axe)",
    "area": "Bestower of Wealth Prologue",
    "subArea": "Herminia's Manse: Entrance",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fan",
      "Fire",
      "Thunder"
    ],
    "level": 37,
    "hp": 9044,
    "patk": 519,
    "pdef": 55,
    "matk": 519,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "Gory Cleave",
        "type": "Phys"
      },
      {
        "name": "Full Swing",
        "type": "Phys"
      },
      {
        "name": "Protect Allies",
        "type": "Unknown"
      },
      {
        "name": "Protect Allies",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Tusk, Olive of Life, Ice Soulstone",
    "drop": "Beast Tusk",
    "immunities": "Instant Death, Paralysis"
  },
  {
    "id": "5063.0",
    "name": "Blackrobe (Bow)",
    "area": "Bestower of Wealth Prologue",
    "subArea": "Herminia's Manse: Entrance",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 37,
    "hp": 9101,
    "patk": 490,
    "pdef": 55,
    "matk": 490,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rapid Shot",
        "type": "Phys"
      },
      {
        "name": "Barrage",
        "type": "Phys"
      },
      {
        "name": "Multi-Shot",
        "type": "Phys"
      },
      {
        "name": "Protect Allies",
        "type": "Unknown"
      },
      {
        "name": "Protect Allies",
        "type": "Unknown"
      }
    ],
    "steal": "Rusty Coin, Beast Fang",
    "drop": "Rare Beast Tusk",
    "immunities": "Curse"
  },
  {
    "id": "5070.0",
    "name": "Blackrobe (Dagger)",
    "area": "Bestower of Wealth Prologue",
    "subArea": "Herminia's Manse: Entrance",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 37,
    "hp": 9025,
    "patk": 500,
    "pdef": 55,
    "matk": 500,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sting",
        "type": "Phys"
      },
      {
        "name": "Double Sting",
        "type": "Phys"
      },
      {
        "name": "Poison Sting",
        "type": "Phys"
      },
      {
        "name": "Protect Allies",
        "type": "Unknown"
      },
      {
        "name": "Protect Allies",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Fang, Holy Water, Meteorite",
    "drop": "Beast Claw",
    "immunities": "Poison"
  },
  {
    "id": "5074.0",
    "name": "Foreign Emissary (Circle Blade)",
    "area": "Bestower of Power Prologue",
    "subArea": "Castle Edoras Gate",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 36,
    "hp": 28000,
    "patk": 500,
    "pdef": 58,
    "matk": 400,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Boomerang Blade",
        "type": "Phys"
      },
      {
        "name": "Vanguard Slash",
        "type": "Phys"
      },
      {
        "name": "Waltz Slash",
        "type": "Phys"
      },
      {
        "name": "Resurrection Ritual",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is moving suspiciously...",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> says a prayer...",
        "type": "Unknown"
      }
    ],
    "steal": "Copper Ore, Antidote Herb (L), Chimera Fang",
    "drop": "Holy Water (M), Olive, Holy Water (L)",
    "immunities": "Petrification, Confusion"
  },
  {
    "id": "5075.0",
    "name": "Foreign Emissary (Staff)",
    "area": "Bestower of Power Prologue",
    "subArea": "Castle Edoras Gate",
    "type": "Regular",
    "shields": 11,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 36,
    "hp": 32000,
    "patk": 493,
    "pdef": 50,
    "matk": 430,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rallying Cry",
        "type": "Unknown"
      },
      {
        "name": "Line Shaker",
        "type": "Phys"
      },
      {
        "name": "Numbing Trap",
        "type": "Unknown"
      },
      {
        "name": "Resurrection Ritual",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is moving suspiciously...",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> says a prayer...",
        "type": "Unknown"
      }
    ],
    "steal": "Herb",
    "drop": "Copper Ore, Antidote Herb",
    "immunities": "Poison"
  },
  {
    "id": "5076.0",
    "name": "Black Scarlet (Polearm)",
    "area": "Bestower of Fame Prologue",
    "subArea": "Emberglow",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 36,
    "hp": 28000,
    "patk": 515,
    "pdef": 55,
    "matk": 423,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Big Swing",
        "type": "Phys"
      },
      {
        "name": "Typhoon",
        "type": "Elem"
      },
      {
        "name": "Mighty Charge",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> draws their weapon!",
        "type": "Unknown"
      },
      {
        "name": "Runaway Stampede",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (L)",
    "drop": "Gold, SP-Restoring Nut",
    "immunities": "Petrification, Blind"
  },
  {
    "id": "5077.0",
    "name": "Black Scarlet (Hammer)",
    "area": "Bestower of Fame Prologue",
    "subArea": "Emberglow",
    "type": "Regular",
    "shields": 11,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Tome",
      "Fire",
      "Dark"
    ],
    "level": 36,
    "hp": 26000,
    "patk": 500,
    "pdef": 61,
    "matk": 423,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Traumatic Bash",
        "type": "Phys"
      },
      {
        "name": "Wild Ebonstrike",
        "type": "Elem"
      },
      {
        "name": "Healing Grape (M)",
        "type": "Unknown"
      },
      {
        "name": "Protective Shield",
        "type": "Unknown"
      }
    ],
    "steal": "Iron Ore",
    "drop": "Antidote Herb (L)",
    "immunities": "Poison"
  },
  {
    "id": "5071.0",
    "name": "Delvecchio",
    "area": "Bestower of Wealth Ch. 1",
    "subArea": "Victors Hollow: Old Quarter",
    "type": "Regular",
    "shields": 9,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Wind",
      "Light"
    ],
    "level": 39,
    "hp": 36380,
    "patk": 531,
    "pdef": 61,
    "matk": 440,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Poison Slash",
        "type": "Phys"
      },
      {
        "name": "Lacerating Stab",
        "type": "Phys"
      },
      {
        "name": "Axe Storm",
        "type": "Phys"
      },
      {
        "name": "Healing Cleave",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> is protected by his lackeys.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his lackeys!",
        "type": "Unknown"
      },
      {
        "name": "Virulent Dust Storm",
        "type": "Unknown"
      },
      {
        "name": "Fierce Sanguine Explosive",
        "type": "Elem"
      },
      {
        "name": "Useless cretins!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his lackeys!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his lackeys!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his lackeys!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his lackeys!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> calls for his lackeys!",
        "type": "Unknown"
      }
    ],
    "steal": "Manticore Stinger, Copper Ore, Quality Beast Hide",
    "drop": "JP, Rare Beast Tusk, Rusty Coin",
    "immunities": "None"
  },
  {
    "id": "5078.0",
    "name": "Delvecchio's Lackey (Axe)",
    "area": "Bestower of Wealth Ch. 1",
    "subArea": "Victors Hollow: Old Quarter",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fan",
      "Fire",
      "Thunder"
    ],
    "level": 38,
    "hp": 9044,
    "patk": 519,
    "pdef": 55,
    "matk": 519,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "Gory Cleave",
        "type": "Phys"
      },
      {
        "name": "Full Swing",
        "type": "Phys"
      },
      {
        "name": "Protect Delvecchio",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Horn, Shadow Soulstone",
    "drop": "JP, Blessed Olive (M), Basilisk Eye",
    "immunities": "Silence"
  },
  {
    "id": "5079.0",
    "name": "Delvecchio's Lackey (Bow)",
    "area": "Bestower of Wealth Ch. 1",
    "subArea": "Victors Hollow: Old Quarter",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 38,
    "hp": 9101,
    "patk": 490,
    "pdef": 55,
    "matk": 490,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rapid Shot",
        "type": "Phys"
      },
      {
        "name": "Barrage",
        "type": "Phys"
      },
      {
        "name": "Multi-Shot",
        "type": "Phys"
      },
      {
        "name": "Protect Delvecchio",
        "type": "Unknown"
      }
    ],
    "steal": "Griffin Claw, Holy Water (L), Blessed Olive (L)",
    "drop": "Healing Grape Bunch",
    "immunities": "None"
  },
  {
    "id": "5080.0",
    "name": "Delvecchio's Lackey (Dagger)",
    "area": "Bestower of Wealth Ch. 1",
    "subArea": "Victors Hollow: Old Quarter",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 38,
    "hp": 9025,
    "patk": 500,
    "pdef": 55,
    "matk": 500,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sting",
        "type": "Phys"
      },
      {
        "name": "Double Sting",
        "type": "Phys"
      },
      {
        "name": "Poison Sting",
        "type": "Phys"
      },
      {
        "name": "Protect Delvecchio",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life (M), Herb, Ice Soulstone",
    "drop": "SP-Restoring Nut (M), Unicorn Horn",
    "immunities": "Stun, Paralysis"
  },
  {
    "id": "5072.0",
    "name": "Mandarino",
    "area": "Bestower of Wealth Ch. 1",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Dark"
    ],
    "level": 39,
    "hp": 46173,
    "patk": 600,
    "pdef": 66,
    "matk": 395,
    "mdef": 44,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Overhead Swing",
        "type": "Phys"
      },
      {
        "name": "Axe Hack",
        "type": "Phys"
      },
      {
        "name": "Starfall",
        "type": "Phys"
      },
      {
        "name": "Axe Whirlwind",
        "type": "Phys"
      },
      {
        "name": "Weaknesses have been swapped!",
        "type": "Unknown"
      },
      {
        "name": "Animosity",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> failed to swap weaknesses...",
        "type": "Unknown"
      },
      {
        "name": "Repeated Soaring Strike",
        "type": "Phys"
      },
      {
        "name": "Thunderous Hack",
        "type": "Phys"
      },
      {
        "name": "...Enforcement.",
        "type": "Unknown"
      },
      {
        "name": "...Annihilation.",
        "type": "Unknown"
      },
      {
        "name": "Animosity",
        "type": "Unknown"
      },
      {
        "name": "Animosity",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb (M), Inspiring Plum, Unicorn Horn",
    "drop": "Holy Water, Star Fragment",
    "immunities": "Curse, Instant Death"
  },
  {
    "id": "5073.0",
    "name": "Remone",
    "area": "Bestower of Wealth Ch. 1",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Dark"
    ],
    "level": 39,
    "hp": 46173,
    "patk": 420,
    "pdef": 44,
    "matk": 600,
    "mdef": 66,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Windfury",
        "type": "Elem"
      },
      {
        "name": "Shake Down",
        "type": "Elem"
      },
      {
        "name": "Swiftshock",
        "type": "Elem"
      },
      {
        "name": "Divine Wind Buffet",
        "type": "Elem"
      },
      {
        "name": "Thunderfury",
        "type": "Elem"
      },
      {
        "name": "Weaknesses have been swapped!",
        "type": "Unknown"
      },
      {
        "name": "Animosity",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> failed to swap weaknesses...",
        "type": "Unknown"
      },
      {
        "name": "Caretaker Form",
        "type": "Unknown"
      },
      {
        "name": "Stalwart Aegis Form",
        "type": "Unknown"
      },
      {
        "name": "...Take aim.",
        "type": "Unknown"
      },
      {
        "name": "...Disappear.",
        "type": "Unknown"
      },
      {
        "name": "Unassailable Defense Form",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Claw, HP-Restoring Herb (L), Light Soulstone",
    "drop": "Antidote Herb, Gold Dust, Gold",
    "immunities": "Paralysis, Terror"
  },
  {
    "id": "5081.0",
    "name": "Cavalry (Bow)",
    "area": "Bestower of Power Ch. 1",
    "subArea": "Cyphlo Banks",
    "type": "Regular",
    "shields": 8,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 38,
    "hp": 13500,
    "patk": 500,
    "pdef": 55,
    "matk": 432,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stall Arrow",
        "type": "Phys"
      },
      {
        "name": "Rain Arrow",
        "type": "Phys"
      },
      {
        "name": "Wild Stall Arrow",
        "type": "Phys"
      }
    ],
    "steal": "Herb, Minotaur Horn",
    "drop": "Hydra Scale, SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "5082.0",
    "name": "Cavalry (Polearm)",
    "area": "Bestower of Power Ch. 1",
    "subArea": "Cyphlo Banks",
    "type": "Regular",
    "shields": 7,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 38,
    "hp": 12500,
    "patk": 495,
    "pdef": 58,
    "matk": 450,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Frenzy",
        "type": "Phys"
      },
      {
        "name": "Wild Hunting Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Hide",
    "drop": "SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "5083.0",
    "name": "Captain Na'gu",
    "area": "Bestower of Power Ch. 1",
    "subArea": "Cyphlo Banks",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 38,
    "hp": 49300,
    "patk": 560,
    "pdef": 61,
    "matk": 500,
    "mdef": 53,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Blackout Claw",
        "type": "Phys"
      },
      {
        "name": "Blackout Claw",
        "type": "Phys"
      },
      {
        "name": "Mass Blackout Claw",
        "type": "Phys"
      },
      {
        "name": "Mass Blackout Claw",
        "type": "Phys"
      },
      {
        "name": "Rallying Cry",
        "type": "Phys"
      },
      {
        "name": "Rallying Cry",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> runs astride the panther!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s panther stops.",
        "type": "Unknown"
      },
      {
        "name": "Frenzied Claw",
        "type": "Phys"
      },
      {
        "name": "Frenzied Claw",
        "type": "Phys"
      },
      {
        "name": "Mass Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Mass Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Mass Double Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Mass Double Hard Claw",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life, Herb",
    "drop": "Sunshard",
    "immunities": "Paralysis"
  },
  {
    "id": "5084.0",
    "name": "Empress Tatloch",
    "area": "Bestower of Power Ch. 1",
    "subArea": "Cyphlo Banks",
    "type": "Regular",
    "shields": 25,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Thunder"
    ],
    "level": 39,
    "hp": 150000,
    "patk": 565,
    "pdef": 65,
    "matk": 530,
    "mdef": 65,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Dance of Battle",
        "type": "Unknown"
      },
      {
        "name": "Foot Swipe",
        "type": "Phys"
      },
      {
        "name": "Men!",
        "type": "Unknown"
      },
      {
        "name": "Fan Flurry",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> absorbed the man's soul!",
        "type": "Unknown"
      },
      {
        "name": "Enough games.",
        "type": "Unknown"
      },
      {
        "name": "Gale Dance",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb (M)",
    "drop": "Healing Grape Bunch, Blessed Olive (M)",
    "immunities": "None"
  },
  {
    "id": "5085.0",
    "name": "Cavalry (Bow)",
    "area": "Bestower of Power Ch. 1",
    "subArea": "Cyphlo Banks",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 39,
    "hp": 15000,
    "patk": 510,
    "pdef": 60,
    "matk": 432,
    "mdef": 52,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stall Arrow",
        "type": "Phys"
      },
      {
        "name": "Rain Arrow",
        "type": "Phys"
      },
      {
        "name": "Wild Stall Arrow",
        "type": "Phys"
      }
    ],
    "steal": "Wind Soulstone, Rare Beast Hide, SP-Restoring Nut (M)",
    "drop": "Antidote Herb (L), Holy Water, JP",
    "immunities": "Silence, Terror"
  },
  {
    "id": "5086.0",
    "name": "Cavalry (Polearm)",
    "area": "Bestower of Power Ch. 1",
    "subArea": "Cyphlo Banks",
    "type": "Regular",
    "shields": 8,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 39,
    "hp": 14000,
    "patk": 505,
    "pdef": 62,
    "matk": 450,
    "mdef": 52,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Frenzy",
        "type": "Phys"
      },
      {
        "name": "Wild Hunting Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Herb",
    "drop": "Holy Water (L)",
    "immunities": "Poison"
  },
  {
    "id": "5093.0",
    "name": "Monster (Townsperson)",
    "area": "Bestower of Fame Ch. 1",
    "subArea": "Cathedral of Tytos: Entrance",
    "type": "Regular",
    "shields": 18,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 37,
    "hp": 49868,
    "patk": 520,
    "pdef": 59,
    "matk": 437,
    "mdef": 40,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Double Scratch",
        "type": "Phys"
      },
      {
        "name": "Scratch All",
        "type": "Phys"
      },
      {
        "name": "Mass Double Scratch",
        "type": "Phys"
      },
      {
        "name": "Grrgh...gh...",
        "type": "Phys"
      },
      {
        "name": "Help...me...",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s flesh begins to swell...",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flesh begins to swell...",
        "type": "Unknown"
      }
    ],
    "steal": "Blessed Olive (M), Shiny Coin, HP-Restoring Herb (L)",
    "drop": "Quality Beast Meat, Plum",
    "immunities": "None"
  },
  {
    "id": "98819.0",
    "name": "Scarlet Wing",
    "area": "Bestower of Fame Ch. 1",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 34,
    "hp": 11781,
    "patk": 473,
    "pdef": 55,
    "matk": 473,
    "mdef": 55,
    "skills": [
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Mince",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Horn, Ice Soulstone",
    "drop": "Shiny Coin, Holy Water (L), Gold",
    "immunities": "Paralysis"
  },
  {
    "id": "98820.0",
    "name": "Scarlet Wing",
    "area": "Bestower of Fame Ch. 1",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 34,
    "hp": 9537,
    "patk": 473,
    "pdef": 55,
    "matk": 473,
    "mdef": 55,
    "skills": [
      {
        "name": "Sunder",
        "type": "Phys"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "Spin Swing",
        "type": "Phys"
      }
    ],
    "steal": "Lightning Soulstone, Ice Soulstone, Beast Tusk",
    "drop": "Beast Tusk, Meteorite, Quality Beast Hide",
    "immunities": "Poison"
  },
  {
    "id": "98821.0",
    "name": "Scarlet Wing",
    "area": "Bestower of Fame Ch. 1",
    "subArea": "Cathedral of Tytos",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 34,
    "hp": 7293,
    "patk": 473,
    "pdef": 55,
    "matk": 473,
    "mdef": 55,
    "skills": [
      {
        "name": "Light Bash",
        "type": "Phys"
      },
      {
        "name": "Traumatic Bash",
        "type": "Phys"
      },
      {
        "name": "Wild Bash",
        "type": "Phys"
      }
    ],
    "steal": "Sunshard",
    "drop": "Star Fragment",
    "immunities": "Sleep"
  },
  {
    "id": "5091.0",
    "name": "Monster (Man)",
    "area": "Bestower of Fame Ch. 1",
    "subArea": "Emberglow Laboratory: Inner Chambers",
    "type": "Regular",
    "shields": 15,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 38,
    "hp": 39479,
    "patk": 536,
    "pdef": 65,
    "matk": 506,
    "mdef": 60,
    "skills": [
      {
        "name": "Head Bash",
        "type": "Phys"
      },
      {
        "name": "Tackle",
        "type": "Phys"
      },
      {
        "name": "Toppling Backfist",
        "type": "Phys"
      },
      {
        "name": "Eagle Claw",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> begins to lose control...",
        "type": "Unknown"
      },
      {
        "name": "Megaquake",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Fang",
    "drop": "Herb",
    "immunities": "None"
  },
  {
    "id": "5092.0",
    "name": "Monster (Woman)",
    "area": "Bestower of Fame Ch. 1",
    "subArea": "Emberglow Laboratory: Inner Chambers",
    "type": "Regular",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 38,
    "hp": 28611,
    "patk": 552,
    "pdef": 60,
    "matk": 506,
    "mdef": 60,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Roundhouse Kick",
        "type": "Phys"
      },
      {
        "name": "Furious Embrace",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> begins to lose control...",
        "type": "Unknown"
      },
      {
        "name": "Berserker Blow",
        "type": "Phys"
      }
    ],
    "steal": "Inspiring Plum Basket, Blessed Olive",
    "drop": "Phoenix Feather",
    "immunities": "Stun"
  },
  {
    "id": "5087.0",
    "name": "Monaris the Monstrous",
    "area": "Bestower of Fame Ch. 1",
    "subArea": "Emberglow Laboratory: Inner Chambers",
    "type": "Regular",
    "shields": 20,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 39,
    "hp": 77220,
    "patk": 579,
    "pdef": 66,
    "matk": 465,
    "mdef": 54,
    "skills": [
      {
        "name": "Wallop",
        "type": "Phys"
      },
      {
        "name": "Crush",
        "type": "Phys"
      },
      {
        "name": "Breakdown",
        "type": "Phys"
      },
      {
        "name": "Heart Gouge",
        "type": "Phys"
      },
      {
        "name": "Silence",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> begins to lose control...",
        "type": "Unknown"
      },
      {
        "name": "Frenzied Flesh",
        "type": "Phys"
      },
      {
        "name": "Miza... My only hope...",
        "type": "Unknown"
      },
      {
        "name": "MIIIZAAAAAA!",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s flesh swells terribly.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flesh peels off.",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Horn, Rare Beast Claw",
    "drop": "SP-Restoring Nut (L), Quality Beast Hide, JP",
    "immunities": "Stun"
  },
  {
    "id": "5088.0",
    "name": "Lookout (Whip)",
    "area": "Bestower of Wealth Ch. 2",
    "subArea": "Sufrataljah: Palace Entrance",
    "type": "Regular",
    "shields": 8,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Ice",
      "Thunder"
    ],
    "level": 44,
    "hp": 13272,
    "patk": 510,
    "pdef": 66,
    "matk": 496,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Whip",
        "type": "Phys"
      },
      {
        "name": "Double Whip",
        "type": "Phys"
      },
      {
        "name": "Circle Whip",
        "type": "Phys"
      },
      {
        "name": "Paralyzing Whip",
        "type": "Phys"
      }
    ],
    "steal": "Copper Ore, Hydra Scale",
    "drop": "Antidote Herb (L), Quality Beast Hide, Rare Beast Fang",
    "immunities": "None"
  },
  {
    "id": "5097.0",
    "name": "Lookout (Polearm)",
    "area": "Bestower of Wealth Ch. 2",
    "subArea": "Sufrataljah: Palace Entrance",
    "type": "Regular",
    "shields": 9,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Ice",
      "Wind"
    ],
    "level": 44,
    "hp": 10910,
    "patk": 510,
    "pdef": 66,
    "matk": 496,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mighty Charge",
        "type": "Phys"
      },
      {
        "name": "Wild Thrust",
        "type": "Phys"
      },
      {
        "name": "Repeated Thrust",
        "type": "Phys"
      },
      {
        "name": "Peerless Strike",
        "type": "Phys"
      }
    ],
    "steal": "Fire Soulstone, Inspiring Plum Basket",
    "drop": "Phoenix Feather",
    "immunities": "Terror"
  },
  {
    "id": "5089.0",
    "name": "Judah the Believer",
    "area": "Bestower of Wealth Ch. 2",
    "subArea": "Sufrataljah: Palace - Upper Floor",
    "type": "Regular",
    "shields": 16,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 47,
    "hp": 42268,
    "patk": 515,
    "pdef": 48,
    "matk": 520,
    "mdef": 72,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Silencing Sheep",
        "type": "Unknown"
      },
      {
        "name": "Enfeebling Sheep",
        "type": "Unknown"
      },
      {
        "name": "Lost Sheep",
        "type": "Elem"
      },
      {
        "name": "Pitiful Sheep",
        "type": "Elem"
      },
      {
        "name": "Lamentation for Salvation",
        "type": "Elem"
      },
      {
        "name": "Judgment for Repentance",
        "type": "Elem"
      },
      {
        "name": "Sheep Scripture",
        "type": "Phys"
      },
      {
        "name": "Submission to the Lord",
        "type": "Unknown"
      },
      {
        "name": "Plunge to Hell",
        "type": "Elem"
      },
      {
        "name": "O lord... Give me power...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Give me power...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Give me power...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Give me power...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Give me power...",
        "type": "Unknown"
      },
      {
        "name": "I deliver salvation unto you!",
        "type": "Unknown"
      }
    ],
    "steal": "Shadow Soulstone",
    "drop": "Antidote Herb",
    "immunities": "Poison"
  },
  {
    "id": "5098.0",
    "name": "Judah's Aide (Axe)",
    "area": "Bestower of Wealth Ch. 2",
    "subArea": "Sufrataljah: Palace - Upper Floor",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 46,
    "hp": 12250,
    "patk": 515,
    "pdef": 72,
    "matk": 450,
    "mdef": 48,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Multi-Cleave",
        "type": "Phys"
      },
      {
        "name": "A prayer is spoken...",
        "type": "Unknown"
      },
      {
        "name": "A prayer is spoken...",
        "type": "Unknown"
      },
      {
        "name": "A prayer is spoken...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Grant me salvation...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Grant me salvation...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Grant me salvation...",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Horn, Quality Beast Horn",
    "drop": "Beast Tusk",
    "immunities": "Terror"
  },
  {
    "id": "5099.0",
    "name": "Judah's Aide (Fan)",
    "area": "Bestower of Wealth Ch. 2",
    "subArea": "Sufrataljah: Palace - Upper Floor",
    "type": "Regular",
    "shields": 11,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 46,
    "hp": 11625,
    "patk": 495,
    "pdef": 66,
    "matk": 520,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Night Ode",
        "type": "Elem"
      },
      {
        "name": "Moonlight Waltz",
        "type": "Elem"
      },
      {
        "name": "A prayer is spoken...",
        "type": "Unknown"
      },
      {
        "name": "A prayer is spoken...",
        "type": "Unknown"
      },
      {
        "name": "A prayer is spoken...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Grant me salvation...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Grant me salvation...",
        "type": "Unknown"
      },
      {
        "name": "O lord... Grant me salvation...",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone",
    "drop": "Inspiring Plum Basket, Beast Fang",
    "immunities": "Blind"
  },
  {
    "id": "5103.0",
    "name": "G'roha Commander",
    "area": "Bestower of Power Ch. 2",
    "subArea": "Grandport Sewers: Depths",
    "type": "Regular",
    "shields": 17,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 41,
    "hp": 60000,
    "patk": 585,
    "pdef": 62,
    "matk": 550,
    "mdef": 57,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sickle Reprise",
        "type": "Phys"
      },
      {
        "name": "Sickle Blade Dance",
        "type": "Phys"
      },
      {
        "name": "Rallying Cry",
        "type": "Unknown"
      },
      {
        "name": "Wild Sickle Dance",
        "type": "Phys"
      },
      {
        "name": "Sickle Storm",
        "type": "Phys"
      },
      {
        "name": "Resurrection Ritual",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is moving suspiciously...",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> says a prayer...",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Claw",
    "drop": "Holy Water (L), Beast Horn, Leaf",
    "immunities": "Poison, Instant Death"
  },
  {
    "id": "5114.0",
    "name": "G'roha Soldier",
    "area": "Bestower of Power Ch. 2",
    "subArea": "Grandport Sewers: Depths",
    "type": "Regular",
    "shields": 11,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 41,
    "hp": 16500,
    "patk": 510,
    "pdef": 60,
    "matk": 450,
    "mdef": 52,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Frenzy",
        "type": "Phys"
      },
      {
        "name": "Wild Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Power Thrust",
        "type": "Phys"
      },
      {
        "name": "Cover",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Horn, Healing Grape Bunch",
    "drop": "Beast Claw, Beast Horn, Holy Water",
    "immunities": "Instant Death, Confusion"
  },
  {
    "id": "5090.0",
    "name": "Pelagia the Conjurer",
    "area": "Bestower of Power Ch. 2",
    "subArea": "Grandport Bazaar",
    "type": "Regular",
    "shields": 18,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Light"
    ],
    "level": 42,
    "hp": 113878,
    "patk": 518,
    "pdef": 68,
    "matk": 621,
    "mdef": 83,
    "skills": [
      {
        "name": "No tricks or schemes.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s weaknesses will change!",
        "type": "Unknown"
      },
      {
        "name": "Scorch and Burn",
        "type": "Elem"
      },
      {
        "name": "Crystallize",
        "type": "Elem"
      },
      {
        "name": "Solar Eclipse",
        "type": "Elem"
      },
      {
        "name": "Chilly Sneer",
        "type": "Elem"
      },
      {
        "name": "Scatter Blossom",
        "type": "Elem"
      },
      {
        "name": "Drama at Dusk",
        "type": "Elem"
      },
      {
        "name": "Medica",
        "type": "Unknown"
      },
      {
        "name": "Empty Dream",
        "type": "Unknown"
      },
      {
        "name": "Illusion and Reality",
        "type": "Unknown"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Icewind",
        "type": "Elem"
      },
      {
        "name": "Black Magic",
        "type": "Elem"
      },
      {
        "name": "Fool's Firestorm",
        "type": "Elem"
      },
      {
        "name": "Fool's Glacier",
        "type": "Elem"
      }
    ],
    "steal": "Ice Soulstone, Manticore Stinger, Dragon Scale",
    "drop": "EXP, Copper Ore, Moonstone",
    "immunities": "Sleep, Paralysis"
  },
  {
    "id": "5094.0",
    "name": "Elite Black Scarlet",
    "area": "Bestower of Fame Ch. 2",
    "subArea": "Atlasdam Palace Gate",
    "type": "Rare",
    "shields": 10,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Staff",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 40,
    "hp": 28864,
    "patk": 560,
    "pdef": 61,
    "matk": 437,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Non-weak Point Intercept Stance",
        "type": "Unknown"
      },
      {
        "name": "Physical Interceptor Stance",
        "type": "Unknown"
      },
      {
        "name": "Magic Interceptor Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Claw",
    "drop": "Quality Beast Claw, Herb",
    "immunities": "Stun"
  },
  {
    "id": "5104.0",
    "name": "Monster (Man)",
    "area": "Bestower of Fame Ch. 2",
    "subArea": "Flamesgrace Cathedral",
    "type": "Regular",
    "shields": 15,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 40,
    "hp": 63420,
    "patk": 569,
    "pdef": 79,
    "matk": 511,
    "mdef": 72,
    "skills": [
      {
        "name": "Head Bash",
        "type": "Phys"
      },
      {
        "name": "Tackle",
        "type": "Phys"
      },
      {
        "name": "Toppling Backfist",
        "type": "Phys"
      },
      {
        "name": "Eagle Claw",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> begins to lose control...",
        "type": "Unknown"
      },
      {
        "name": "Megaquake",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk",
    "drop": "Holy Water",
    "immunities": "Terror"
  },
  {
    "id": "5105.0",
    "name": "Monster (Woman)",
    "area": "Bestower of Fame Ch. 2",
    "subArea": "Flamesgrace Cathedral",
    "type": "Regular",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 40,
    "hp": 58212,
    "patk": 555,
    "pdef": 75,
    "matk": 537,
    "mdef": 75,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Roundhouse Kick",
        "type": "Phys"
      },
      {
        "name": "Furious Embrace",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> begins to lose control...",
        "type": "Unknown"
      },
      {
        "name": "Berserker Blow",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life (M), SP-Restoring Nut",
    "drop": "Rare Beast Meat, Holy Water, Olive",
    "immunities": "Instant Death"
  },
  {
    "id": "5095.0",
    "name": "Monster (Black Scarlet)",
    "area": "Bestower of Fame Ch. 2",
    "subArea": "Flamesgrace Cathedral",
    "type": "Regular",
    "shields": 22,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Fan",
      "Fire",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 41,
    "hp": 97395,
    "patk": 594,
    "pdef": 81,
    "matk": 513,
    "mdef": 72,
    "skills": [
      {
        "name": "Tackle",
        "type": "Phys"
      },
      {
        "name": "Knock Back",
        "type": "Phys"
      },
      {
        "name": "Knock Around",
        "type": "Phys"
      },
      {
        "name": "Knock Away",
        "type": "Phys"
      },
      {
        "name": "Monstrous Battle Cry",
        "type": "Unknown"
      },
      {
        "name": "The Black Scarlet's body is mutating...",
        "type": "Unknown"
      },
      {
        "name": "Knock Further Away",
        "type": "Phys"
      },
      {
        "name": "The Black Scarlet's body is mutating...",
        "type": "Unknown"
      }
    ],
    "steal": "Ice Soulstone, Cerberus Fang",
    "drop": "Basilisk Eye",
    "immunities": "None"
  },
  {
    "id": "5096.0",
    "name": "Guardian of the Tainted Flame",
    "area": "Bestower of Fame Ch. 2",
    "subArea": "Cave Of Origin",
    "type": "Boss",
    "shields": 22,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Ice",
      "Wind"
    ],
    "level": 42,
    "hp": 95094,
    "patk": 579,
    "pdef": 75,
    "matk": 568,
    "mdef": 75,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Pyre",
        "type": "Elem"
      },
      {
        "name": "Baleful Star",
        "type": "Elem"
      },
      {
        "name": "Fell Baleful Star",
        "type": "Elem"
      },
      {
        "name": "Cataclysmic Baleful Star",
        "type": "Elem"
      },
      {
        "name": "The Trial Begins",
        "type": "Unknown"
      },
      {
        "name": "The Trial Begins",
        "type": "Unknown"
      },
      {
        "name": "The Trial Begins",
        "type": "Unknown"
      },
      {
        "name": "Trial of the Darkest Depths",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Meat",
    "drop": "Moonstone, Dragon Scale, Plum",
    "immunities": "Confusion"
  },
  {
    "id": "5106.0",
    "name": "Dark Wisp of Ruin",
    "area": "Bestower of Fame Ch. 2",
    "subArea": "Cave Of Origin",
    "type": "Regular",
    "shields": 0,
    "weakness": "None",
    "weaknesses": [
      "None"
    ],
    "level": 42,
    "hp": 13156,
    "patk": 600,
    "pdef": 1,
    "matk": 600,
    "mdef": 1,
    "skills": [
      {
        "name": "<skl_user_name>'s darkness is amplified.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s darkness writhes.",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone, Quality Beast Fang",
    "drop": "Holy Water (M)",
    "immunities": "Poison, Instant Death"
  },
  {
    "id": "5109.0",
    "name": "Dark Wisp of Death",
    "area": "Bestower of Fame Ch. 2",
    "subArea": "Cave Of Origin",
    "type": "Regular",
    "shields": 0,
    "weakness": "None",
    "weaknesses": [
      "None"
    ],
    "level": 42,
    "hp": 7974,
    "patk": 600,
    "pdef": 1,
    "matk": 600,
    "mdef": 1,
    "skills": [
      {
        "name": "<skl_user_name> unleashes a dark miasma!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s darkness writhes.",
        "type": "Unknown"
      }
    ],
    "steal": "Phoenix Feather, Light Soulstone",
    "drop": "Manticore Stinger, Quality Beast Fang",
    "immunities": "Petrification"
  },
  {
    "id": "5108.0",
    "name": "Oskha the Have-Not",
    "area": "Bestower of Wealth Ch. 3",
    "subArea": "Herminia's Former Manse",
    "type": "Regular",
    "shields": 20,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Tome",
      "Fan",
      "Ice",
      "Wind",
      "Dark"
    ],
    "level": 47,
    "hp": 84586,
    "patk": 684,
    "pdef": 77,
    "matk": 549,
    "mdef": 63,
    "skills": [
      {
        "name": "Lacerate",
        "type": "Phys"
      },
      {
        "name": "Swift Slash",
        "type": "Phys"
      },
      {
        "name": "Dual Ruinous Slash",
        "type": "Phys"
      },
      {
        "name": "Physical Evasion Stance",
        "type": "Unknown"
      },
      {
        "name": "This is beyond you...",
        "type": "Phys"
      },
      {
        "name": "Infernal Fire",
        "type": "Elem"
      },
      {
        "name": "Purgation Slash",
        "type": "Phys"
      },
      {
        "name": "Swift Ruinous Slash",
        "type": "Phys"
      },
      {
        "name": "I am the Have-Not...",
        "type": "Unknown"
      },
      {
        "name": "I am the Have-Not...",
        "type": "Unknown"
      },
      {
        "name": "I am the Have-Not...",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Meat",
    "drop": "Star Fragment",
    "immunities": "None"
  },
  {
    "id": "5115.0",
    "name": "Oskha the Have-Not",
    "area": "Bestower of Wealth Ch. 3",
    "subArea": "Silver Spring",
    "type": "Regular",
    "shields": 20,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Fan",
      "Ice",
      "Wind",
      "Dark"
    ],
    "level": 48,
    "hp": 87507,
    "patk": 684,
    "pdef": 90,
    "matk": 631,
    "mdef": 90,
    "skills": [
      {
        "name": "Lacerate",
        "type": "Phys"
      },
      {
        "name": "Swift Slash",
        "type": "Phys"
      },
      {
        "name": "Dual Ruinous Slash",
        "type": "Phys"
      },
      {
        "name": "Physical Evasion Stance",
        "type": "Unknown"
      },
      {
        "name": "This is beyond you...",
        "type": "Phys"
      },
      {
        "name": "Infernal Fire",
        "type": "Elem"
      },
      {
        "name": "Purgation Slash",
        "type": "Phys"
      },
      {
        "name": "Swift Ruinous Slash",
        "type": "Phys"
      },
      {
        "name": "I am the Have-Not...",
        "type": "Unknown"
      },
      {
        "name": "I am the Have-Not...",
        "type": "Unknown"
      },
      {
        "name": "I am the Have-Not...",
        "type": "Unknown"
      },
      {
        "name": "I am the Have-Not...",
        "type": "Unknown"
      },
      {
        "name": "Shift",
        "type": "Unknown"
      },
      {
        "name": "Issue Artillery Strike",
        "type": "Unknown"
      },
      {
        "name": "Issue Assault Strike",
        "type": "Unknown"
      },
      {
        "name": "Issue Defensive Guard",
        "type": "Unknown"
      }
    ],
    "steal": "Sphinx Feather, Quality Beast Tusk, Rare Beast Horn",
    "drop": "Copper Ore, Basilisk Eye, Rare Beast Fang",
    "immunities": "Paralysis, Sleep"
  },
  {
    "id": "5116.0",
    "name": "Altered Ivory Remnant",
    "area": "Bestower of Wealth Ch. 3",
    "subArea": "Silver Spring",
    "type": "Regular",
    "shields": 8,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Fan",
      "Wind",
      "Dark"
    ],
    "level": 47,
    "hp": 13000,
    "patk": 558,
    "pdef": 60,
    "matk": 586,
    "mdef": 60,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Sonic Wave",
        "type": "Elem"
      },
      {
        "name": "Flurry",
        "type": "Phys"
      },
      {
        "name": "Charge Barrier",
        "type": "Unknown"
      },
      {
        "name": "Resonance Crusher",
        "type": "Elem"
      },
      {
        "name": "Diamondray Cannon",
        "type": "Elem"
      },
      {
        "name": "Self-Destruct",
        "type": "Elem"
      },
      {
        "name": "Fourfold Lotusfang",
        "type": "Phys"
      }
    ],
    "steal": "Fire Soulstone, Dragon Scale",
    "drop": "Star Fragment, Antidote Herb (M), Nut",
    "immunities": "Silence, Terror"
  },
  {
    "id": "5117.0",
    "name": "Altered Gold Remnant",
    "area": "Bestower of Wealth Ch. 3",
    "subArea": "Silver Spring",
    "type": "Regular",
    "shields": 8,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Ice",
      "Dark"
    ],
    "level": 47,
    "hp": 13000,
    "patk": 558,
    "pdef": 60,
    "matk": 586,
    "mdef": 60,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Healing",
        "type": "Unknown"
      },
      {
        "name": "Bolt Wave",
        "type": "Elem"
      },
      {
        "name": "Charge Barrier",
        "type": "Unknown"
      },
      {
        "name": "Resonance Crusher",
        "type": "Elem"
      },
      {
        "name": "Diamondray Cannon",
        "type": "Elem"
      },
      {
        "name": "Self-Destruct",
        "type": "Elem"
      },
      {
        "name": "Fourfold Lotusfang",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Horn, Antidote Herb (M)",
    "drop": "Quality Beast Meat, Phoenix Feather, Antidote Herb (M)",
    "immunities": "Terror, Silence"
  },
  {
    "id": "5107.0",
    "name": "Oskha the Trader",
    "area": "Bestower of Wealth Ch. 3",
    "subArea": "Silver Spring",
    "type": "Regular",
    "shields": 20,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Tome",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 48,
    "hp": 238602,
    "patk": 741,
    "pdef": 117,
    "matk": 654,
    "mdef": 95,
    "skills": [
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Raging Flame Strike",
        "type": "Elem"
      },
      {
        "name": "Twin Flash",
        "type": "Phys"
      },
      {
        "name": "Blazing Twin Flash",
        "type": "Elem"
      },
      {
        "name": "Skyfire",
        "type": "Phys"
      },
      {
        "name": "Lifeblow",
        "type": "Phys"
      },
      {
        "name": "Mindblow",
        "type": "Phys"
      },
      {
        "name": "Spiritblow",
        "type": "Phys"
      },
      {
        "name": "Hands of Isolation",
        "type": "Phys"
      },
      {
        "name": "Disarray",
        "type": "Phys"
      },
      {
        "name": "Physical Evasion Stance",
        "type": "Unknown"
      },
      {
        "name": "A Thousand Arms",
        "type": "Unknown"
      },
      {
        "name": "Wrath of the Trader",
        "type": "Elem"
      },
      {
        "name": "Thou shall have not.",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Claw",
    "drop": "Rare Beast Meat, Griffin Claw, Rare Beast Fang",
    "immunities": "Sleep"
  },
  {
    "id": "5211.0",
    "name": "G'roha Soldier (Polearm)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Event Battles",
    "type": "Regular",
    "shields": 6,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 44,
    "hp": 8288,
    "patk": 430,
    "pdef": 60,
    "matk": 409,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Frenzy",
        "type": "Phys"
      },
      {
        "name": "Wild Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Power Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Meat, Holy Water, Antidote Herb (L)",
    "drop": "Holy Water, Meteorite",
    "immunities": "None"
  },
  {
    "id": "5212.0",
    "name": "Cavalry (Bow)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Event Battles",
    "type": "Regular",
    "shields": 8,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 44,
    "hp": 8990,
    "patk": 490,
    "pdef": 63,
    "matk": 405,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stall Arrow",
        "type": "Phys"
      },
      {
        "name": "Rain Arrow",
        "type": "Phys"
      },
      {
        "name": "Wild Stall Arrow",
        "type": "Phys"
      }
    ],
    "steal": "Nut, Star Fragment, Kraken Ink",
    "drop": "Copper Ore, Antidote Herb",
    "immunities": "Confusion, Poison"
  },
  {
    "id": "5213.0",
    "name": "Cavalry (Polearm)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Event Battles",
    "type": "Regular",
    "shields": 7,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 44,
    "hp": 8580,
    "patk": 490,
    "pdef": 63,
    "matk": 405,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Frenzy",
        "type": "Phys"
      },
      {
        "name": "Wild Hunting Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget, Revitalizing Jam",
    "drop": "Antidote Herb (L), Beast Fang",
    "immunities": "Curse"
  },
  {
    "id": "5214.0",
    "name": "G'roha Soldier (Circle Blade)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Event Battles",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 44,
    "hp": 8288,
    "patk": 430,
    "pdef": 60,
    "matk": 409,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Boomerang Blade",
        "type": "Phys"
      },
      {
        "name": "Vanguard Slash",
        "type": "Phys"
      },
      {
        "name": "Waltz Slash",
        "type": "Phys"
      }
    ],
    "steal": "Healing Grape",
    "drop": "JP, Rare Beast Meat, Rare Beast Claw",
    "immunities": "Silence, Terror"
  },
  {
    "id": "5215.0",
    "name": "G'roha Soldier (Staff)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Event Battles",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 44,
    "hp": 8288,
    "patk": 430,
    "pdef": 60,
    "matk": 409,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rallying Cry",
        "type": "Unknown"
      },
      {
        "name": "Line Shaker",
        "type": "Phys"
      },
      {
        "name": "Numbing Trap",
        "type": "Unknown"
      }
    ],
    "steal": "Healing Grape, Rare Beast Horn",
    "drop": "Healing Grape Bunch",
    "immunities": "Sleep"
  },
  {
    "id": "5210.0",
    "name": "G'roha Commander",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Event Battles",
    "type": "Regular",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Ice",
      "Dark"
    ],
    "level": 44,
    "hp": 14500,
    "patk": 460,
    "pdef": 60,
    "matk": 468,
    "mdef": 60,
    "skills": [
      {
        "name": "Sickle Reprise",
        "type": "Phys"
      },
      {
        "name": "Sickle Blade Dance",
        "type": "Phys"
      },
      {
        "name": "Rallying Cry",
        "type": "Unknown"
      },
      {
        "name": "Wild Sickle Dance",
        "type": "Phys"
      },
      {
        "name": "Sickle Storm",
        "type": "Phys"
      }
    ],
    "steal": "Nut, Rare Beast Fang",
    "drop": "Quality Beast Hide",
    "immunities": "Terror, Instant Death"
  },
  {
    "id": "5208.0",
    "name": "Cavalry (Bow)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Final Event Battle",
    "type": "Regular",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 44,
    "hp": 11900,
    "patk": 500,
    "pdef": 63,
    "matk": 405,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Stall Arrow",
        "type": "Phys"
      },
      {
        "name": "Rain Arrow",
        "type": "Phys"
      },
      {
        "name": "Wild Stall Arrow",
        "type": "Phys"
      }
    ],
    "steal": "Beast Horn, SP-Restoring Nut (M)",
    "drop": "Basilisk Eye",
    "immunities": "Poison"
  },
  {
    "id": "5209.0",
    "name": "Cavalry (Polearm)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Middlesea Final Event Battle",
    "type": "Regular",
    "shields": 13,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 44,
    "hp": 11900,
    "patk": 500,
    "pdef": 63,
    "matk": 405,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Hunting Thrust",
        "type": "Phys"
      },
      {
        "name": "Frenzy",
        "type": "Phys"
      },
      {
        "name": "Wild Hunting Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Herb",
    "drop": "JP",
    "immunities": "None"
  },
  {
    "id": "5112.0",
    "name": "Pelagia the Conjurer (Ruin)",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Tatloch's Ship",
    "type": "Regular",
    "shields": 21,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Light"
    ],
    "level": 45,
    "hp": 86944,
    "patk": 536,
    "pdef": 81,
    "matk": 643,
    "mdef": 99,
    "skills": [
      {
        "name": "No tricks, no bluffs.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s weaknesses will change!",
        "type": "Unknown"
      },
      {
        "name": "Scorch and Burn",
        "type": "Elem"
      },
      {
        "name": "Crystallize",
        "type": "Elem"
      },
      {
        "name": "Solar Eclipse",
        "type": "Elem"
      },
      {
        "name": "Chilly Sneer",
        "type": "Elem"
      },
      {
        "name": "Scatter Blossom",
        "type": "Elem"
      },
      {
        "name": "Drama at Dusk",
        "type": "Elem"
      },
      {
        "name": "Medica",
        "type": "Unknown"
      },
      {
        "name": "Empty Dream",
        "type": "Unknown"
      },
      {
        "name": "Illusion and Reality",
        "type": "Unknown"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Icewind",
        "type": "Elem"
      },
      {
        "name": "Black Magic",
        "type": "Elem"
      },
      {
        "name": "Fool's Firestorm",
        "type": "Elem"
      },
      {
        "name": "Fool's Glacier",
        "type": "Elem"
      }
    ],
    "steal": "Griffin Claw, Ancient Coin",
    "drop": "Quality Beast Tusk, Antidote Herb",
    "immunities": "None"
  },
  {
    "id": "5204.0",
    "name": "Phantom Soldier",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Tatloch's Ship",
    "type": "Regular",
    "shields": 0,
    "weakness": "None",
    "weaknesses": [
      "None"
    ],
    "level": 45,
    "hp": 9999,
    "patk": 467,
    "pdef": 9999,
    "matk": 665,
    "mdef": 9999,
    "skills": [
      {
        "name": "Dark Ally",
        "type": "Elem"
      },
      {
        "name": "Dark Impact",
        "type": "Elem"
      },
      {
        "name": "Dark Offering",
        "type": "Unknown"
      },
      {
        "name": "Annihilate",
        "type": "Unknown"
      }
    ],
    "steal": "Meteorite, Ice Soulstone, Antidote Herb (L)",
    "drop": "Old Coin",
    "immunities": "Terror, Blind"
  },
  {
    "id": "5100.0",
    "name": "Empress Tatloch",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Tatloch's Ship",
    "type": "Regular",
    "shields": 20,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Staff",
      "Thunder"
    ],
    "level": 47,
    "hp": 76475,
    "patk": 570,
    "pdef": 66,
    "matk": 513,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Dance of Battle",
        "type": "Unknown"
      },
      {
        "name": "Foot Swipe",
        "type": "Phys"
      },
      {
        "name": "Fan Flurry",
        "type": "Phys"
      },
      {
        "name": "Frenzied Gale",
        "type": "Elem"
      },
      {
        "name": "Winds of Misfortune",
        "type": "Elem"
      },
      {
        "name": "Be charmed.",
        "type": "Unknown"
      },
      {
        "name": "Kneel before me...",
        "type": "Unknown"
      },
      {
        "name": "Triple Tempest",
        "type": "Elem"
      },
      {
        "name": "Slowing Strike",
        "type": "Phys"
      },
      {
        "name": "Instigate",
        "type": "Unknown"
      },
      {
        "name": "Men!",
        "type": "Unknown"
      },
      {
        "name": "Men!",
        "type": "Unknown"
      },
      {
        "name": "Men!",
        "type": "Unknown"
      },
      {
        "name": "Sacrifice yourselves...",
        "type": "Unknown"
      },
      {
        "name": "Panther's Offering",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life",
    "drop": "Grape, Blessed Olive, Blessed Olive (L)",
    "immunities": "None"
  },
  {
    "id": "5101.0",
    "name": "Maa'fa the Black Panther",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Tatloch's Ship",
    "type": "Regular",
    "shields": 16,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Fire",
      "Ice"
    ],
    "level": 47,
    "hp": 43932,
    "patk": 570,
    "pdef": 90,
    "matk": 480,
    "mdef": 90,
    "skills": [
      {
        "name": "<skl_user_name> protects its master.",
        "type": "Unknown"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Violent Scratch",
        "type": "Phys"
      },
      {
        "name": "Bite Off",
        "type": "Phys"
      },
      {
        "name": "Innate Recovery",
        "type": "Unknown"
      },
      {
        "name": "Draining Bite",
        "type": "Phys"
      },
      {
        "name": "Gorge",
        "type": "Unknown"
      },
      {
        "name": "Intimidating Howl",
        "type": "Phys"
      },
      {
        "name": "Wild Rampage",
        "type": "Phys"
      }
    ],
    "steal": "Light Soulstone, Moonstone, Iron Ore",
    "drop": "Phoenix Feather, HP-Restoring Herb (M), Quality Beast Hide",
    "immunities": "None"
  },
  {
    "id": "5110.0",
    "name": "Tatloch the Lady of Grace",
    "area": "Bestower of Power Ch. 3",
    "subArea": "Tatloch's Ship",
    "type": "Regular",
    "shields": 28,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 48,
    "hp": 213486,
    "patk": 600,
    "pdef": 108,
    "matk": 600,
    "mdef": 108,
    "skills": [
      {
        "name": "Heighten",
        "type": "Unknown"
      },
      {
        "name": "Tentacles",
        "type": "Phys"
      },
      {
        "name": "Toxic Tentacles",
        "type": "Phys"
      },
      {
        "name": "Be charmed.",
        "type": "Unknown"
      },
      {
        "name": "Kneel before me...",
        "type": "Unknown"
      },
      {
        "name": "Oh, power of the ring, grant me strength!",
        "type": "Unknown"
      },
      {
        "name": "Become one with me!",
        "type": "Unknown"
      },
      {
        "name": "Twilight Strike",
        "type": "Elem"
      },
      {
        "name": "Dark Frenzy",
        "type": "Elem"
      },
      {
        "name": "Call to the Abyss",
        "type": "Elem"
      },
      {
        "name": "All bow to me!",
        "type": "Unknown"
      },
      {
        "name": "The Lady of Grace's Delight",
        "type": "Phys"
      },
      {
        "name": "Have a taste of this!",
        "type": "Unknown"
      },
      {
        "name": "Have a taste of this!",
        "type": "Unknown"
      },
      {
        "name": "Heighten",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is in a state of bliss.",
        "type": "Unknown"
      }
    ],
    "steal": "Ancient Coin, HP-Restoring Herb (L), Olive of Life (M)",
    "drop": "Manticore Stinger",
    "immunities": "Petrification"
  },
  {
    "id": "5113.0",
    "name": "Towering Idol",
    "area": "Bestower of Fame Ch. 3",
    "subArea": "Forbidden Temple: Lower Floor",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 45,
    "hp": 96064,
    "patk": 701,
    "pdef": 180,
    "matk": 688,
    "mdef": 90,
    "skills": [
      {
        "name": "Boulder Bash",
        "type": "Phys"
      },
      {
        "name": "Heavy Boulder Bash",
        "type": "Phys"
      },
      {
        "name": "Spinning Boulder Bash",
        "type": "Phys"
      },
      {
        "name": "Arms of Steel",
        "type": "Unknown"
      },
      {
        "name": "Curse of Sealing",
        "type": "Unknown"
      },
      {
        "name": "Cliff Crusher",
        "type": "Phys"
      },
      {
        "name": "Magical power flows from <skl_user_name>.",
        "type": "Unknown"
      },
      {
        "name": "Dark Wailing Shot",
        "type": "Elem"
      },
      {
        "name": "Dark Wailing Surge",
        "type": "Elem"
      },
      {
        "name": "Battering Ram",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget",
    "drop": "Silver Nugget, Soulstone, Quality Beast Meat",
    "immunities": "None"
  },
  {
    "id": "5111.0",
    "name": "Ceraphina the Charitable",
    "area": "Bestower of Fame Ch. 3",
    "subArea": "Forbidden Temple: Lower Floor",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Thunder",
      "Wind",
      "Dark"
    ],
    "level": 47,
    "hp": 122794,
    "patk": 585,
    "pdef": 76,
    "matk": 600,
    "mdef": 94,
    "skills": [
      {
        "name": "No one shall stop me...!",
        "type": "Unknown"
      },
      {
        "name": "Punish",
        "type": "Phys"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "Snowy Slumber",
        "type": "Elem"
      },
      {
        "name": "The divine power courses through me...!",
        "type": "Unknown"
      },
      {
        "name": "Ebony Wings",
        "type": "Elem"
      },
      {
        "name": "Luminous Wings",
        "type": "Elem"
      },
      {
        "name": "Divine Great Axe",
        "type": "Phys"
      },
      {
        "name": "Heathen...!",
        "type": "Unknown"
      },
      {
        "name": "The heavens await...!",
        "type": "Unknown"
      },
      {
        "name": "Light's Ashes",
        "type": "Elem"
      },
      {
        "name": "The Time of End",
        "type": "Elem"
      },
      {
        "name": "Mercy of the Charitable",
        "type": "Elem"
      },
      {
        "name": "Dark Hex",
        "type": "Unknown"
      },
      {
        "name": "Dark Hex",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk",
    "drop": "Quality Beast Fang, EXP",
    "immunities": "Curse"
  },
  {
    "id": "5102.0",
    "name": "Lyblac",
    "area": "Bestower of Fame Ch. 3",
    "subArea": "Forbidden Temple: Lower Floor",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 48,
    "hp": 198237,
    "patk": 559,
    "pdef": 81,
    "matk": 671,
    "mdef": 99,
    "skills": [
      {
        "name": "Forceful Blow",
        "type": "Phys"
      },
      {
        "name": "Shadowmist Blade",
        "type": "Phys"
      },
      {
        "name": "Dark Matter",
        "type": "Elem"
      },
      {
        "name": "Protection",
        "type": "Unknown"
      },
      {
        "name": "Desolation",
        "type": "Elem"
      },
      {
        "name": "Soul Healing",
        "type": "Unknown"
      },
      {
        "name": "Full Desolation",
        "type": "Elem"
      },
      {
        "name": "Shadow Wave",
        "type": "Elem"
      },
      {
        "name": "Stygian Sorcery",
        "type": "Elem"
      },
      {
        "name": "Weakness",
        "type": "Unknown"
      },
      {
        "name": "Distortion",
        "type": "Elem"
      },
      {
        "name": "Ward of the Accurst Flame",
        "type": "Unknown"
      },
      {
        "name": "Sinister Shroud",
        "type": "Unknown"
      },
      {
        "name": "Sinister Shroud",
        "type": "Unknown"
      },
      {
        "name": "Sinister Shroud",
        "type": "Unknown"
      },
      {
        "name": "Sinister Shroud",
        "type": "Unknown"
      }
    ],
    "steal": "Healing Grape Bunch, Basilisk Eye",
    "drop": "Quality Beast Meat",
    "immunities": "Stun, Petrification"
  },
  {
    "id": "5118.0",
    "name": "Suffering Soul",
    "area": "Finale (3)",
    "subArea": "Isle of Orsa: Underground Altar",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fire",
      "Wind",
      "Light"
    ],
    "level": 49,
    "hp": 50308,
    "patk": 467,
    "pdef": 120,
    "matk": 456,
    "mdef": 120,
    "skills": [
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Freeze Magic",
        "type": "Elem"
      },
      {
        "name": "Curse of Life",
        "type": "Unknown"
      },
      {
        "name": "Curse of Spirit",
        "type": "Unknown"
      },
      {
        "name": "Explosion",
        "type": "Elem"
      },
      {
        "name": "Eternal Rancour",
        "type": "Elem"
      },
      {
        "name": "Wailing Ember",
        "type": "Elem"
      },
      {
        "name": "Wailing Blaze",
        "type": "Elem"
      },
      {
        "name": "Encroaching Darkness",
        "type": "Elem"
      },
      {
        "name": "Shatter Soul",
        "type": "Elem"
      }
    ],
    "steal": "SP-Restoring Nut (L), Shadow Soulstone",
    "drop": "Quality Beast Meat",
    "immunities": "None"
  },
  {
    "id": "31521.0",
    "name": "Seething Soul",
    "area": "Finale (3)",
    "subArea": "Isle of Orsa: Underground Altar",
    "type": "Regular",
    "shields": 5,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 49,
    "hp": 41923,
    "patk": 570,
    "pdef": 110,
    "matk": 456,
    "mdef": 90,
    "skills": [
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Overpower",
        "type": "Phys"
      },
      {
        "name": "Seething Strike",
        "type": "Phys"
      },
      {
        "name": "Heart Gouge",
        "type": "Phys"
      },
      {
        "name": "Raging Rend",
        "type": "Phys"
      }
    ],
    "steal": "Gold Dust",
    "drop": "Minotaur Horn",
    "immunities": "Petrification"
  },
  {
    "id": "31522.0",
    "name": "Shrieking Soul",
    "area": "Finale (3)",
    "subArea": "Isle of Orsa: Underground Altar",
    "type": "Boss",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fire",
      "Ice",
      "Light"
    ],
    "level": 49,
    "hp": 42665,
    "patk": 467,
    "pdef": 90,
    "matk": 557,
    "mdef": 110,
    "skills": [
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Delusion",
        "type": "Unknown"
      },
      {
        "name": "Infection",
        "type": "Unknown"
      },
      {
        "name": "Debilitation",
        "type": "Phys"
      },
      {
        "name": "Venom Claw",
        "type": "Phys"
      },
      {
        "name": "Umbral Strike",
        "type": "Phys"
      },
      {
        "name": "Wild Venom Claw",
        "type": "Phys"
      },
      {
        "name": "Fatal Sentence",
        "type": "Unknown"
      },
      {
        "name": "Sentence to Ruin",
        "type": "Unknown"
      },
      {
        "name": "Infestation",
        "type": "Unknown"
      }
    ],
    "steal": "Sphinx Feather, Nut",
    "drop": "Beast Fang, Beast Tusk, SP-Restoring Nut (L)",
    "immunities": "Blind"
  },
  {
    "id": "5119.0",
    "name": "Fallen Mahrez",
    "area": "Bestower of All 1",
    "subArea": "Hell: Geist Canyon",
    "type": "Regular",
    "shields": 18,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Fan",
      "Wind"
    ],
    "level": 51,
    "hp": 183768,
    "patk": 692,
    "pdef": 156,
    "matk": 583,
    "mdef": 117,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mighty Blade",
        "type": "Phys"
      },
      {
        "name": "Sleeping Blade",
        "type": "Phys"
      },
      {
        "name": "Swift Blade",
        "type": "Phys"
      },
      {
        "name": "Thunderclap Slash",
        "type": "Elem"
      },
      {
        "name": "Stalwart Strike",
        "type": "Phys"
      },
      {
        "name": "Wild Stalwart Thrash",
        "type": "Phys"
      },
      {
        "name": "Lion Stance",
        "type": "Unknown"
      },
      {
        "name": "The memory of love fades and <skl_user_name> becomes enraged!",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> wails in grief!",
        "type": "Unknown"
      }
    ],
    "steal": "Ancient Coin, Old Coin",
    "drop": "HP-Restoring Herb (M), Star Fragment, HP-Restoring Herb (L)",
    "immunities": "None"
  },
  {
    "id": "31552.0",
    "name": "Vile Memory",
    "area": "Bestower of All 1",
    "subArea": "Hell: Geist Canyon",
    "type": "Regular",
    "shields": 0,
    "weakness": "None",
    "weaknesses": [
      "None"
    ],
    "level": 51,
    "hp": 999,
    "patk": 1,
    "pdef": 1,
    "matk": 1,
    "mdef": 1,
    "skills": [
      {
        "name": "<skl_user_name> writhes...",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> spreads wide the darkness...",
        "type": "Unknown"
      },
      {
        "name": "Annihilate",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Claw",
    "drop": "Hydra Scale",
    "immunities": "Curse"
  },
  {
    "id": "31553.0",
    "name": "Beloved Memory",
    "area": "Bestower of All 1",
    "subArea": "Hell: Geist Canyon",
    "type": "Regular",
    "shields": 0,
    "weakness": "None",
    "weaknesses": [
      "None"
    ],
    "level": 51,
    "hp": 999,
    "patk": 1,
    "pdef": 1,
    "matk": 1,
    "mdef": 1,
    "skills": [
      {
        "name": "<skl_user_name> takes control of the fallen Mahrez.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> cancels fallen Mahrez's immunity to attacks!",
        "type": "Unknown"
      },
      {
        "name": "Annihilate",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Tusk",
    "drop": "Quality Beast Tusk, Healing Grape Bunch, Quality Beast Meat",
    "immunities": "Paralysis, Instant Death"
  },
  {
    "id": "5120.0",
    "name": "Fallen Sonia",
    "area": "Bestower of All 2",
    "subArea": "Hell: White Grape Hill",
    "type": "Regular",
    "shields": 17,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 53,
    "hp": 142647,
    "patk": 675,
    "pdef": 150,
    "matk": 663,
    "mdef": 150,
    "skills": [
      {
        "name": "Swift Stance",
        "type": "Unknown"
      },
      {
        "name": "Clawing Rancour",
        "type": "Phys"
      },
      {
        "name": "Storm of Rancour",
        "type": "Phys"
      },
      {
        "name": "Fourfold Rancour",
        "type": "Phys"
      },
      {
        "name": "Debilitating Winds",
        "type": "Elem"
      },
      {
        "name": "Ghastly Gusts",
        "type": "Elem"
      },
      {
        "name": "Malefic Gale",
        "type": "Elem"
      },
      {
        "name": "Pang of Jealousy",
        "type": "Phys"
      },
      {
        "name": "Fit of Jealousy",
        "type": "Phys"
      },
      {
        "name": "Winds of Envy",
        "type": "Elem"
      }
    ],
    "steal": "Beast Tusk",
    "drop": "Grape, Beast Claw, SP-Restoring Nut",
    "immunities": "None"
  },
  {
    "id": "5121.0",
    "name": "Fallen Elrica",
    "area": "Bestower of All 2",
    "subArea": "Castle Edoras",
    "type": "Regular",
    "shields": 21,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 53,
    "hp": 179142,
    "patk": 682,
    "pdef": 152,
    "matk": 730,
    "mdef": 180,
    "skills": [
      {
        "name": "Ghostly Blade",
        "type": "Phys"
      },
      {
        "name": "Fulgent Light",
        "type": "Elem"
      },
      {
        "name": "Dream Blade",
        "type": "Phys"
      },
      {
        "name": "Decrepit Blade",
        "type": "Phys"
      },
      {
        "name": "Radiant Verse",
        "type": "Elem"
      },
      {
        "name": "Fettering Brilliance",
        "type": "Elem"
      },
      {
        "name": "Physical Evasion Stance",
        "type": "Unknown"
      },
      {
        "name": "Stand Firm",
        "type": "Unknown"
      },
      {
        "name": "Ward of the Black Flame",
        "type": "Unknown"
      },
      {
        "name": "Holy Sword",
        "type": "Elem"
      },
      {
        "name": "O wicked of heart...",
        "type": "Phys"
      },
      {
        "name": "You shall face my fiery wrath...",
        "type": "Elem"
      },
      {
        "name": "Walk the path of righteousness...",
        "type": "Phys"
      }
    ],
    "steal": "Beast Claw",
    "drop": "Quality Beast Claw, Phoenix Feather, SP-Restoring Nut",
    "immunities": "Confusion"
  },
  {
    "id": "98315.0",
    "name": "Fallen Edoras Defender of Power",
    "area": "Bestower of All 3",
    "subArea": "Hell: Castle Edoras - Remembrance Hall",
    "type": "Regular",
    "shields": 24,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 58,
    "hp": 195641,
    "patk": 724,
    "pdef": 85,
    "matk": 722,
    "mdef": 85,
    "skills": [
      {
        "name": "Wild Thrust",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Numbing Thrust",
        "type": "Phys"
      },
      {
        "name": "Lacerating Thrust",
        "type": "Phys"
      },
      {
        "name": "Lance of Loyalty",
        "type": "Unknown"
      },
      {
        "name": "Vigorous Assault",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Cursed Thrust",
        "type": "Phys"
      },
      {
        "name": "Numbing Thrust",
        "type": "Phys"
      },
      {
        "name": "Lacerating Thrust",
        "type": "Phys"
      },
      {
        "name": "Vigorous Assault",
        "type": "Phys"
      }
    ],
    "steal": "Beast Hide, Antidote Herb (M)",
    "drop": "Rare Beast Tusk",
    "immunities": "Blind, Paralysis"
  },
  {
    "id": "98316.0",
    "name": "Fallen Edoras Defender of Wealth",
    "area": "Bestower of All 3",
    "subArea": "Hell: Castle Edoras - 4F",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Ice"
    ],
    "level": 58,
    "hp": 182754,
    "patk": 735,
    "pdef": 85,
    "matk": 796,
    "mdef": 85,
    "skills": [
      {
        "name": "Brutal Bash",
        "type": "Phys"
      },
      {
        "name": "Mental Concentration",
        "type": "Unknown"
      },
      {
        "name": "Bombardment",
        "type": "Phys"
      },
      {
        "name": "Explosive Hit",
        "type": "Phys"
      },
      {
        "name": "Light Soulstone (M)",
        "type": "Elem"
      },
      {
        "name": "First Aid",
        "type": "Unknown"
      },
      {
        "name": "Light Soulstone (L)",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Massive Explosive Hit",
        "type": "Phys"
      },
      {
        "name": "Bombardment",
        "type": "Phys"
      },
      {
        "name": "Explosive Hit",
        "type": "Phys"
      },
      {
        "name": "Light Soulstone (L)",
        "type": "Elem"
      }
    ],
    "steal": "Beast Fang, Sunshard, Old Coin",
    "drop": "Sphinx Feather, JP",
    "immunities": "Petrification"
  },
  {
    "id": "98317.0",
    "name": "Fallen Edoras Defender of Fame",
    "area": "Bestower of All 3",
    "subArea": "Hell: Castle Edoras - 6F",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Tome",
      "Fan",
      "Ice",
      "Wind"
    ],
    "level": 58,
    "hp": 169868,
    "patk": 724,
    "pdef": 85,
    "matk": 583,
    "mdef": 85,
    "skills": [
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "Spirited Strike",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Threefold Cleave",
        "type": "Phys"
      },
      {
        "name": "Full Swing",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Deadly Slash",
        "type": "Phys"
      },
      {
        "name": "Spirited Strike",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Threefold Cleave",
        "type": "Phys"
      },
      {
        "name": "Full Swing",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut, Olive of Life",
    "drop": "Minotaur Horn, Rare Beast Fang, Griffin Claw",
    "immunities": "None"
  },
  {
    "id": "5122.0",
    "name": "Fallen Lebrandt",
    "area": "Bestower of All 3",
    "subArea": "Hell: Castle Edoras",
    "type": "Regular",
    "shields": 23,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Fire",
      "Dark"
    ],
    "level": 55,
    "hp": 101201,
    "patk": 633,
    "pdef": 160,
    "matk": 595,
    "mdef": 160,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Vanguard Blade",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Level Slash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> wails in grief!",
        "type": "Unknown"
      },
      {
        "name": "Spiritbreaker Strikeback",
        "type": "Phys"
      },
      {
        "name": "Wild Sixfold Slice",
        "type": "Phys"
      },
      {
        "name": "Unwavering Stance",
        "type": "Unknown"
      },
      {
        "name": "Fallen Attendant's Brandish",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> writhes in agony...",
        "type": "Unknown"
      },
      {
        "name": "Fallen Vassal's Ray",
        "type": "Elem"
      }
    ],
    "steal": "Herb",
    "drop": "Gold, Holy Water (L)",
    "immunities": "Poison"
  },
  {
    "id": "5123.0",
    "name": "Cursed Princess Elrica",
    "area": "Bestower of All 3",
    "subArea": "Hell: Castle Edoras",
    "type": "Regular",
    "shields": 25,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 55,
    "hp": 203424,
    "patk": 698,
    "pdef": 172,
    "matk": 758,
    "mdef": 204,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Infernal Blade",
        "type": "Elem"
      },
      {
        "name": "Flood of Despair",
        "type": "Elem"
      },
      {
        "name": "Unyielding Blade of the Absolute",
        "type": "Phys"
      },
      {
        "name": "Unyielding Blade of Ruin",
        "type": "Phys"
      },
      {
        "name": "On Your Knees",
        "type": "Phys"
      },
      {
        "name": "Know your place.",
        "type": "Phys"
      },
      {
        "name": "Ribbon of Ruin",
        "type": "Elem"
      },
      {
        "name": "Ribbon of Restraint",
        "type": "Elem"
      },
      {
        "name": "Ribbon of the Absolute",
        "type": "Elem"
      },
      {
        "name": "Sword of Darkness",
        "type": "Elem"
      },
      {
        "name": "Elrica laughs with rapture and despair!",
        "type": "Unknown"
      },
      {
        "name": "The Accurst Flame flickers mysteriously.",
        "type": "Unknown"
      },
      {
        "name": "Elrica's heart is closed off...",
        "type": "Unknown"
      },
      {
        "name": "The Accurst Flame envelops Elrica...",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk",
    "drop": "Rare Beast Horn, Moonstone, Phoenix Feather",
    "immunities": "Instant Death"
  },
  {
    "id": "98318.0",
    "name": "Cursed Fallen Giant Falcon",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Pass",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Thunder"
    ],
    "level": 59,
    "hp": 147147,
    "patk": 655,
    "pdef": 85,
    "matk": 663,
    "mdef": 85,
    "skills": [
      {
        "name": "Wild Tornado Slash",
        "type": "Elem"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Galeforce Slash",
        "type": "Elem"
      },
      {
        "name": "Turbulent Flow",
        "type": "Unknown"
      },
      {
        "name": "Strong Galeforce Slash",
        "type": "Elem"
      },
      {
        "name": "Deathly Wind Slash",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Galeforce Slash",
        "type": "Elem"
      }
    ],
    "steal": "Blessed Olive (L), Iron Ore",
    "drop": "Beast Meat, Kraken Ink",
    "immunities": "Silence, Sleep"
  },
  {
    "id": "98319.0",
    "name": "Cursed Fallen Ratking",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Pass",
    "type": "Boss",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Tome",
      "Fire",
      "Ice",
      "Wind"
    ],
    "level": 59,
    "hp": 158613,
    "patk": 655,
    "pdef": 75,
    "matk": 663,
    "mdef": 75,
    "skills": [
      {
        "name": "Threefold Cleave",
        "type": "Phys"
      },
      {
        "name": "Smash",
        "type": "Phys"
      },
      {
        "name": "Multi-Cleave",
        "type": "Phys"
      },
      {
        "name": "Wild Deathstrike",
        "type": "Phys"
      },
      {
        "name": "Mass Physical Degradation",
        "type": "Unknown"
      },
      {
        "name": "Great Crushing Spin Attack",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Smash",
        "type": "Phys"
      },
      {
        "name": "Multi-Cleave",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk, Shadow Soulstone",
    "drop": "Rusty Coin, Gold Dust",
    "immunities": "Terror, Sleep"
  },
  {
    "id": "5126.0",
    "name": "Rondo of the Knights Ardante",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Castle - Central Area",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 57,
    "hp": 33512,
    "patk": 657,
    "pdef": 70,
    "matk": 653,
    "mdef": 70,
    "skills": [
      {
        "name": "Accept my guidance.",
        "type": "Unknown"
      },
      {
        "name": "Rondo is manipulated by the Sacred Flame!",
        "type": "Unknown"
      },
      {
        "name": "Rondo struggles against the Sacred Flame's hold!",
        "type": "Unknown"
      },
      {
        "name": "Rondo summons his strength!",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Claw, Holy Water (L)",
    "drop": "Minotaur Horn",
    "immunities": "Instant Death, Sleep"
  },
  {
    "id": "31715.0",
    "name": "Sacred Flame",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Castle - Central Area",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 57,
    "hp": 9808,
    "patk": 592,
    "pdef": 77,
    "matk": 588,
    "mdef": 63,
    "skills": [
      {
        "name": "The Sacred Flame's power flows into Rondo.",
        "type": "Elem"
      },
      {
        "name": "Reprimanding Light",
        "type": "Elem"
      },
      {
        "name": "Lustrous Light",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb, Holy Water (M)",
    "drop": "Quality Beast Horn, Rare Beast Horn",
    "immunities": "Petrification, Terror"
  },
  {
    "id": "31766.0",
    "name": "Sacred Flame",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Castle - Central Area",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Wind",
      "Dark"
    ],
    "level": 57,
    "hp": 9999,
    "patk": 592,
    "pdef": 63,
    "matk": 512,
    "mdef": 77,
    "skills": [
      {
        "name": "The Sacred Flame's power flows into Rondo.",
        "type": "Elem"
      },
      {
        "name": "The Sacred Flame's power fills Rondo!",
        "type": "Elem"
      }
    ],
    "steal": "Rusty Coin, Phoenix Feather",
    "drop": "Olive",
    "immunities": "Curse"
  },
  {
    "id": "5127.0",
    "name": "Sonzon the Flameguard",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Castle - Central Area",
    "type": "Regular",
    "shields": 25,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 57,
    "hp": 206336,
    "patk": 708,
    "pdef": 190,
    "matk": 705,
    "mdef": 190,
    "skills": [
      {
        "name": "Light Dragon's Breath",
        "type": "Elem"
      },
      {
        "name": "Light Dragon Shot",
        "type": "Elem"
      },
      {
        "name": "Wild Light Dragon Shot",
        "type": "Elem"
      },
      {
        "name": "Sword of the Sacred Flame",
        "type": "Phys"
      },
      {
        "name": "Twin Claws of the Flame",
        "type": "Phys"
      },
      {
        "name": "Stalwart Blade of the Flame",
        "type": "Phys"
      },
      {
        "name": "Sacred Spirit Strike",
        "type": "Phys"
      },
      {
        "name": "Guardbreaker",
        "type": "Phys"
      },
      {
        "name": "Light Dragon's Judgment",
        "type": "Elem"
      },
      {
        "name": "Blade of Judgment",
        "type": "Phys"
      }
    ],
    "steal": "Cerberus Fang, Beast Meat",
    "drop": "Olive of Life (M)",
    "immunities": "Petrification, Sleep"
  },
  {
    "id": "31712.0",
    "name": "Sacred Flame",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Castle - Central Area",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Ice",
      "Thunder",
      "Wind",
      "Dark"
    ],
    "level": 57,
    "hp": 30510,
    "patk": 610,
    "pdef": 75,
    "matk": 630,
    "mdef": 75,
    "skills": [
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Amplifying Light",
        "type": "Elem"
      },
      {
        "name": "Lower Defenses",
        "type": "Unknown"
      },
      {
        "name": "Light Shield Collapse",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Horn, Quality Beast Meat, Silver Nugget",
    "drop": "Basilisk Eye",
    "immunities": "Petrification, Stun"
  },
  {
    "id": "31713.0",
    "name": "Sacred Flame",
    "area": "Bestower of All 4",
    "subArea": "Hell: Hornburg Castle - Central Area",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Ice",
      "Thunder",
      "Wind",
      "Dark"
    ],
    "level": 57,
    "hp": 30510,
    "patk": 610,
    "pdef": 75,
    "matk": 630,
    "mdef": 75,
    "skills": [
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Amplifying Light",
        "type": "Elem"
      },
      {
        "name": "Lower Defenses",
        "type": "Unknown"
      },
      {
        "name": "Light Shield Collapse",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Hide, Beast Horn, Minotaur Horn",
    "drop": "Beast Horn",
    "immunities": "None"
  },
  {
    "id": "5128.0",
    "name": "Fallen Scarlet Wing",
    "area": "Bestower of All 5",
    "subArea": "Hornburg Battle Ruins",
    "type": "Regular",
    "shields": 10,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 59,
    "hp": 73542,
    "patk": 621,
    "pdef": 126,
    "matk": 613,
    "mdef": 126,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Guillotine",
        "type": "Phys"
      },
      {
        "name": "Stunning Strike",
        "type": "Phys"
      },
      {
        "name": "Trifold Slash",
        "type": "Phys"
      },
      {
        "name": "Armor Break",
        "type": "Phys"
      },
      {
        "name": "Lacerating Slash",
        "type": "Phys"
      },
      {
        "name": "Skull Slash",
        "type": "Phys"
      },
      {
        "name": "Triple Skull Slash",
        "type": "Phys"
      }
    ],
    "steal": "Hydra Scale",
    "drop": "Blessed Olive (M), Leaf, Healing Grape Bunch",
    "immunities": "Terror"
  },
  {
    "id": "5129.0",
    "name": "Fallen Monster",
    "area": "Bestower of All 5",
    "subArea": "Hornburg Battle Ruins",
    "type": "Regular",
    "shields": 12,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fire",
      "Wind",
      "Light"
    ],
    "level": 59,
    "hp": 91588,
    "patk": 621,
    "pdef": 147,
    "matk": 613,
    "mdef": 147,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Double Scratch",
        "type": "Phys"
      },
      {
        "name": "Triple Scratch",
        "type": "Phys"
      },
      {
        "name": "Scratch All",
        "type": "Phys"
      },
      {
        "name": "Mass Double Scratch",
        "type": "Phys"
      },
      {
        "name": "Sharp Scratch",
        "type": "Phys"
      },
      {
        "name": "Grrgh...gh...",
        "type": "Phys"
      },
      {
        "name": "Help...me...",
        "type": "Phys"
      }
    ],
    "steal": "Manticore Stinger, SP-Restoring Nut (M)",
    "drop": "Blessed Olive (L)",
    "immunities": "Curse"
  },
  {
    "id": "31939.0",
    "name": "Menacing Infernal Beast",
    "area": "Bestower of All 5",
    "subArea": "Corridors of Contrition: Back Halls",
    "type": "Rare",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Wind",
      "Light"
    ],
    "level": 59,
    "hp": 57330,
    "patk": 651,
    "pdef": 51,
    "matk": 671,
    "mdef": 51,
    "skills": [
      {
        "name": "Double Bite",
        "type": "Phys"
      },
      {
        "name": "Ruinous Cleave",
        "type": "Phys"
      },
      {
        "name": "Chomp",
        "type": "Phys"
      },
      {
        "name": "Seeping Darkness",
        "type": "Elem"
      },
      {
        "name": "Weak Point Interceptor Stance",
        "type": "Unknown"
      },
      {
        "name": "Weak Point Interceptor Stance shattered.",
        "type": "Unknown"
      },
      {
        "name": "Eye for an Eye",
        "type": "Phys"
      },
      {
        "name": "Summon Companion",
        "type": "Unknown"
      },
      {
        "name": "Writhe",
        "type": "Phys"
      },
      {
        "name": "Raging Deathstrike",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Hide, HP-Restoring Herb (L), Unicorn Horn",
    "drop": "Silver Nugget, Rare Beast Hide, Beast Fang",
    "immunities": "None"
  },
  {
    "id": "31940.0",
    "name": "Infernal Insect IV",
    "area": "Bestower of All 5",
    "subArea": "Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 59,
    "hp": 24843,
    "patk": 651,
    "pdef": 51,
    "matk": 671,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Venomous Jaws",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Claw",
        "type": "Phys"
      }
    ],
    "steal": "Beast Meat, Rare Beast Horn",
    "drop": "Quality Beast Tusk, Holy Water (L), Beast Meat",
    "immunities": "Poison, Confusion"
  },
  {
    "id": "31944.0",
    "name": "Fallen Aberration II",
    "area": "Bestower of All 5",
    "subArea": "Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 6,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Staff",
      "Fire",
      "Thunder"
    ],
    "level": 59,
    "hp": 37184,
    "patk": 651,
    "pdef": 51,
    "matk": 671,
    "mdef": 51,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Flatten",
        "type": "Phys"
      },
      {
        "name": "Thrice Rent",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam, Olive of Life",
    "drop": "Minotaur Horn, Beast Horn",
    "immunities": "Terror, Blind"
  },
  {
    "id": "31945.0",
    "name": "Fallen Monster",
    "area": "Bestower of All 5",
    "subArea": "Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 9,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Wind",
      "Dark"
    ],
    "level": 59,
    "hp": 37184,
    "patk": 651,
    "pdef": 51,
    "matk": 585,
    "mdef": 51,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Furious Embrace",
        "type": "Phys"
      },
      {
        "name": "Doping",
        "type": "Unknown"
      }
    ],
    "steal": "Gold Dust, Unicorn Horn, Beast Hide",
    "drop": "Moonstone, Beast Meat",
    "immunities": "Terror, Confusion"
  },
  {
    "id": "5130.0",
    "name": "Cursed Commander Tytos",
    "area": "Bestower of All 5",
    "subArea": "Corridors of Contrition: Back Halls",
    "type": "Regular",
    "shields": 25,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 59,
    "hp": 199472,
    "patk": 771,
    "pdef": 246,
    "matk": 654,
    "mdef": 185,
    "skills": [
      {
        "name": "Oppression",
        "type": "Unknown"
      },
      {
        "name": "Suppression",
        "type": "Phys"
      },
      {
        "name": "Stormwind",
        "type": "Elem"
      },
      {
        "name": "Condemn",
        "type": "Phys"
      },
      {
        "name": "Castigate",
        "type": "Phys"
      },
      {
        "name": "Excoriate",
        "type": "Phys"
      },
      {
        "name": "Brutal Sweep",
        "type": "Phys"
      },
      {
        "name": "Expunge",
        "type": "Phys"
      },
      {
        "name": "Thunderbeast",
        "type": "Elem"
      },
      {
        "name": "Cursed Thunderbeast",
        "type": "Elem"
      },
      {
        "name": "Quick as a Flash",
        "type": "Elem"
      },
      {
        "name": "Thundering Gale",
        "type": "Elem"
      },
      {
        "name": "Cursed Thundering Gale",
        "type": "Elem"
      }
    ],
    "steal": "Beast Fang, Revitalizing Jam (L)",
    "drop": "Meteorite, Gold, Rare Beast Horn",
    "immunities": "Terror"
  },
  {
    "id": "98323.0",
    "name": "Cursed Fallen Soldier",
    "area": "Bestower of All 6",
    "subArea": "The Bridge Beyond",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 64,
    "hp": 181350,
    "patk": 631,
    "pdef": 85,
    "matk": 605,
    "mdef": 85,
    "skills": [
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "Trifold Slash",
        "type": "Phys"
      },
      {
        "name": "Stunning Strike",
        "type": "Phys"
      },
      {
        "name": "Improved Offense",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "Decapitating Slash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "Trifold Slash",
        "type": "Phys"
      },
      {
        "name": "Stunning Strike",
        "type": "Phys"
      }
    ],
    "steal": "Cerberus Fang, Wind Soulstone, Phoenix Feather",
    "drop": "Shiny Coin, Rare Beast Fang, Revitalizing Jam (L)",
    "immunities": "Paralysis"
  },
  {
    "id": "31989.0",
    "name": "Fallen Lady-in-Waiting",
    "area": "Bestower of All 6",
    "subArea": "The Bridge Beyond",
    "type": "Regular",
    "shields": 16,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 60,
    "hp": 118658,
    "patk": 715,
    "pdef": 210,
    "matk": 707,
    "mdef": 210,
    "skills": [
      {
        "name": "Knife Throw",
        "type": "Phys"
      },
      {
        "name": "Wild Knife Throw",
        "type": "Phys"
      },
      {
        "name": "Wild Poison Knife Throw",
        "type": "Phys"
      },
      {
        "name": "Fan of Knives",
        "type": "Phys"
      },
      {
        "name": "Acid Assault",
        "type": "Phys"
      },
      {
        "name": "Fourfold Knife Throw",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Fang",
    "drop": "Star Fragment",
    "immunities": "Instant Death, Silence"
  },
  {
    "id": "32064.0",
    "name": "Fallen Herminia's Soldier",
    "area": "Bestower of All 6",
    "subArea": "The Bridge Beyond",
    "type": "Regular",
    "shields": 9,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Tome",
      "Fire",
      "Wind"
    ],
    "level": 60,
    "hp": 35990,
    "patk": 692,
    "pdef": 231,
    "matk": 558,
    "mdef": 189,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Running Slash",
        "type": "Phys"
      },
      {
        "name": "Stunning Strike",
        "type": "Phys"
      },
      {
        "name": "Protect Fallen Lady-in-Waiting",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Fang",
    "drop": "Rare Beast Meat, Griffin Claw",
    "immunities": "Confusion"
  },
  {
    "id": "5131.0",
    "name": "Cursed Lady Herminia",
    "area": "Bestower of All 6",
    "subArea": "Wealth's Dominion",
    "type": "Regular",
    "shields": 22,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Thunder",
      "Wind"
    ],
    "level": 61,
    "hp": 177840,
    "patk": 751,
    "pdef": 210,
    "matk": 743,
    "mdef": 210,
    "skills": [
      {
        "name": "Thousand Scythes",
        "type": "Phys"
      },
      {
        "name": "Radiant Arrow",
        "type": "Phys"
      },
      {
        "name": "Shining Stone",
        "type": "Elem"
      },
      {
        "name": "Spill of Moonlight",
        "type": "Elem"
      },
      {
        "name": "Temptation of the Night",
        "type": "Unknown"
      },
      {
        "name": "Predation",
        "type": "Phys"
      },
      {
        "name": "Cursed Thousand Scythes",
        "type": "Phys"
      },
      {
        "name": "Cursed Radiant Arrow",
        "type": "Phys"
      },
      {
        "name": "Cursed Dark Fortune",
        "type": "Elem"
      },
      {
        "name": "Cursed Eclipse",
        "type": "Elem"
      },
      {
        "name": "Cursed Temptation of the Night",
        "type": "Unknown"
      },
      {
        "name": "Cursed Predation",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L), Blessed Olive (M), HP-Restoring Herb",
    "drop": "Blessed Olive (L), Chimera Fang, HP-Restoring Herb",
    "immunities": "None"
  },
  {
    "id": "31990.0",
    "name": "Fallen Francesca",
    "area": "Bestower of All 6",
    "subArea": "Crimson River Traverse",
    "type": "Regular",
    "shields": 19,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fan",
      "Fire",
      "Thunder"
    ],
    "level": 60,
    "hp": 169302,
    "patk": 644,
    "pdef": 189,
    "matk": 778,
    "mdef": 231,
    "skills": [
      {
        "name": "AHAHAHA!",
        "type": "Elem"
      },
      {
        "name": "I'll chop you to pieces!",
        "type": "Elem"
      },
      {
        "name": "I'll kill all of you!",
        "type": "Elem"
      },
      {
        "name": "Song of a Broken Soul",
        "type": "Elem"
      },
      {
        "name": "I won't let anyone get in his way!",
        "type": "Elem"
      },
      {
        "name": "I'll take you down with me!",
        "type": "Elem"
      },
      {
        "name": "Dance of Ruin",
        "type": "Elem"
      }
    ],
    "steal": "Lightning Soulstone, Holy Water (M)",
    "drop": "HP-Restoring Herb (L)",
    "immunities": "None"
  },
  {
    "id": "5132.0",
    "name": "Cursed Master Auguste",
    "area": "Bestower of All 6",
    "subArea": "Fame's Dominion",
    "type": "Regular",
    "shields": 21,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Staff",
      "Fan",
      "Fire",
      "Ice",
      "Wind",
      "Light"
    ],
    "level": 61,
    "hp": 179664,
    "patk": 676,
    "pdef": 189,
    "matk": 818,
    "mdef": 231,
    "skills": [
      {
        "name": "Mass Fatal Sentence",
        "type": "Unknown"
      },
      {
        "name": "Rhythm Unto Quietus",
        "type": "Phys"
      },
      {
        "name": "Muzzling Meter",
        "type": "Phys"
      },
      {
        "name": "Dramatic Roar",
        "type": "Elem"
      },
      {
        "name": "Cursed Roar",
        "type": "Elem"
      },
      {
        "name": "Cursed Wild Roar",
        "type": "Elem"
      },
      {
        "name": "Cursed Dramatic Roar",
        "type": "Elem"
      },
      {
        "name": "Cursed Rhythm Unto Quietus",
        "type": "Phys"
      },
      {
        "name": "Cursed Darkness of the Heart",
        "type": "Elem"
      },
      {
        "name": "Physical Shackling Meter",
        "type": "Phys"
      }
    ],
    "steal": "Gold Dust",
    "drop": "Rare Beast Tusk, Phoenix Feather, Griffin Claw",
    "immunities": "Blind"
  },
  {
    "id": "5133.0",
    "name": "Sazantos",
    "area": "Bestower of All 6",
    "subArea": "Ridge of the Imprisoned God",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Ice",
      "Thunder",
      "Light"
    ],
    "level": 61,
    "hp": 159116,
    "patk": 785,
    "pdef": 210,
    "matk": 792,
    "mdef": 210,
    "skills": [
      {
        "name": "Signa...",
        "type": "Unknown"
      },
      {
        "name": "Signa... Your death will not be in vain.",
        "type": "Unknown"
      },
      {
        "name": "...The end is nigh.",
        "type": "Unknown"
      },
      {
        "name": "Cease your struggling...",
        "type": "Unknown"
      },
      {
        "name": "Demon Blade Fisteralda",
        "type": "Elem"
      },
      {
        "name": "May it engulf all who oppose me!",
        "type": "Phys"
      },
      {
        "name": "Cursed Blade",
        "type": "Phys"
      },
      {
        "name": "Shadowmist Blade",
        "type": "Phys"
      },
      {
        "name": "Wild Ebonblade",
        "type": "Phys"
      },
      {
        "name": "Sable Slash",
        "type": "Phys"
      },
      {
        "name": "Cursed Slash",
        "type": "Elem"
      },
      {
        "name": "Dark Ember",
        "type": "Elem"
      },
      {
        "name": "Dark Burial",
        "type": "Elem"
      },
      {
        "name": "I will bestow all upon you.",
        "type": "Unknown"
      }
    ],
    "steal": "Kraken Ink, Rare Beast Tusk, SP-Restoring Nut (M)",
    "drop": "Quality Beast Meat, Unicorn Horn",
    "immunities": "Confusion, Paralysis"
  },
  {
    "id": "5134.0",
    "name": "Dark Priestess Signa",
    "area": "Bestower of All 6",
    "subArea": "Ridge of the Imprisoned God",
    "type": "Regular",
    "shields": 20,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Ice",
      "Light"
    ],
    "level": 61,
    "hp": 138341,
    "patk": 588,
    "pdef": 168,
    "matk": 831,
    "mdef": 252,
    "skills": [
      {
        "name": "I shall protect you, Sir Sazantos!",
        "type": "Unknown"
      },
      {
        "name": "Darkshield",
        "type": "Unknown"
      },
      {
        "name": "Counter Magic",
        "type": "Unknown"
      },
      {
        "name": "Counter Weapon",
        "type": "Unknown"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "Paralyzing Wave",
        "type": "Elem"
      },
      {
        "name": "Blinding Wave",
        "type": "Elem"
      },
      {
        "name": "Demolishing Black Flame",
        "type": "Elem"
      },
      {
        "name": "Ward of the Black Flame",
        "type": "Unknown"
      },
      {
        "name": "Enhanced Healing",
        "type": "Unknown"
      },
      {
        "name": "The end is nigh...",
        "type": "Unknown"
      },
      {
        "name": "Cursed Obliterating Blade",
        "type": "Elem"
      },
      {
        "name": "Sir Sazantos...!",
        "type": "Unknown"
      }
    ],
    "steal": "Star Fragment, Quality Beast Meat",
    "drop": "SP-Restoring Nut (L), Old Coin",
    "immunities": "Paralysis, Stun"
  },
  {
    "id": "98040.0",
    "name": "Cardinal",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash Cathedral of Ash: Underground",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire"
    ],
    "level": 0,
    "hp": 7000,
    "patk": 420,
    "pdef": 50,
    "matk": 360,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Luminescence",
        "type": "Elem"
      }
    ],
    "steal": "Basilisk Eye, SP-Restoring Nut, Quality Beast Horn",
    "drop": "Old Coin, Iron Ore, Antidote Herb (M)",
    "immunities": "None"
  },
  {
    "id": "99128.0",
    "name": "Cardinal",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash Cathedral of Ash: Underground",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire"
    ],
    "level": 0,
    "hp": 7000,
    "patk": 420,
    "pdef": 50,
    "matk": 360,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Luminescence",
        "type": "Elem"
      }
    ],
    "steal": "Inspiring Plum",
    "drop": "Hydra Scale",
    "immunities": "Curse, Confusion"
  },
  {
    "id": "99129.0",
    "name": "Cardinal",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash Cathedral of Ash: Underground",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire"
    ],
    "level": 0,
    "hp": 7000,
    "patk": 420,
    "pdef": 50,
    "matk": 360,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Luminescence",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Tusk, Sphinx Feather",
    "drop": "Griffin Claw, Holy Water, Manticore Stinger",
    "immunities": "Confusion"
  },
  {
    "id": "98544.0",
    "name": "Sentinel",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash: Underground",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire",
      "Light"
    ],
    "level": 63,
    "hp": 4500,
    "patk": 400,
    "pdef": 50,
    "matk": 400,
    "mdef": 50,
    "skills": [
      {
        "name": "Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Repeated Shadowshot",
        "type": "Elem"
      }
    ],
    "steal": "Light Soulstone, Nut, Inspiring Plum Basket",
    "drop": "Antidote Herb, Revitalizing Jam",
    "immunities": "Instant Death, Curse"
  },
  {
    "id": "98545.0",
    "name": "Guardian",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash: Underground",
    "type": "Boss",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire",
      "Light"
    ],
    "level": 63,
    "hp": 6000,
    "patk": 400,
    "pdef": 55,
    "matk": 400,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Shadow Slice",
        "type": "Elem"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water (M), Beast Claw",
    "drop": "Dragon Scale",
    "immunities": "Stun"
  },
  {
    "id": "98546.0",
    "name": "Gold Remnant",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash: Underground",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire",
      "Light"
    ],
    "level": 63,
    "hp": 8000,
    "patk": 430,
    "pdef": 60,
    "matk": 430,
    "mdef": 60,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Double Bite",
        "type": "Phys"
      },
      {
        "name": "Bloody Cleave",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L), Holy Water (M), Healing Grape Bunch",
    "drop": "Antidote Herb (L), Silver Nugget",
    "immunities": "Curse"
  },
  {
    "id": "98547.0",
    "name": "Gold Revenant",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash: Underground",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire",
      "Light"
    ],
    "level": 63,
    "hp": 10000,
    "patk": 470,
    "pdef": 65,
    "matk": 470,
    "mdef": 65,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Impact",
        "type": "Phys"
      },
      {
        "name": "Meteor Storm",
        "type": "Elem"
      },
      {
        "name": "Physical Counter Stance",
        "type": "Unknown"
      },
      {
        "name": "Magic Counter Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Meat, Dragon Scale",
    "drop": "Holy Water (L), Dragon Scale",
    "immunities": "None"
  },
  {
    "id": "98041.0",
    "name": "Cardinal Teragraf",
    "area": "Bestower of All 7",
    "subArea": "Cathedral of Ash: Underground",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Fire",
      "Dark"
    ],
    "level": 0,
    "hp": 65000,
    "patk": 450,
    "pdef": 50,
    "matk": 400,
    "mdef": 30,
    "skills": [
      {
        "name": "Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "Pray",
        "type": "Unknown"
      },
      {
        "name": "Sundering Light",
        "type": "Elem"
      },
      {
        "name": "Devastating Light",
        "type": "Elem"
      },
      {
        "name": "Obscured Light",
        "type": "Elem"
      },
      {
        "name": "Sacred Flame's Shield",
        "type": "Unknown"
      },
      {
        "name": "The lanthorn's flame rages!",
        "type": "Unknown"
      },
      {
        "name": "Pontiff Odypus's Judgment",
        "type": "Elem"
      },
      {
        "name": "Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "Pray",
        "type": "Unknown"
      },
      {
        "name": "Sundering Light",
        "type": "Elem"
      },
      {
        "name": "Devastating Light",
        "type": "Elem"
      },
      {
        "name": "Obscured Light",
        "type": "Elem"
      },
      {
        "name": "The lanthorn's flame rages!",
        "type": "Unknown"
      },
      {
        "name": "Pontiff Odypus's Judgment",
        "type": "Elem"
      }
    ],
    "steal": "Fire Soulstone",
    "drop": "Leaf, Blessed Olive (M)",
    "immunities": "Stun"
  },
  {
    "id": "98032.0",
    "name": "Warrior",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "Hydra Scale, Rare Beast Meat",
    "drop": "Quality Beast Hide, Inspiring Plum Basket, Phoenix Feather",
    "immunities": "None"
  },
  {
    "id": "98033.0",
    "name": "Apothecary",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "Shiny Coin",
    "drop": "JP, Quality Beast Tusk",
    "immunities": "None"
  },
  {
    "id": "98034.0",
    "name": "Thief",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "Inspiring Plum",
    "drop": "Blessed Olive",
    "immunities": "Stun, Poison"
  },
  {
    "id": "98035.0",
    "name": "Scholar",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Staff",
    "weaknesses": [
      "Staff",
      "Tome",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "Shiny Coin, HP-Restoring Herb (M)",
    "drop": "Iron Ore, Revitalizing Jam",
    "immunities": "Sleep"
  },
  {
    "id": "98036.0",
    "name": "Cleric",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Staff",
    "weaknesses": [
      "Staff",
      "Fan",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb (L)",
    "drop": "Holy Water",
    "immunities": "None"
  },
  {
    "id": "98037.0",
    "name": "Hunter",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "Star Fragment, Beast Fang",
    "drop": "Rare Beast Fang, SP-Restoring Nut, Manticore Stinger",
    "immunities": "Terror"
  },
  {
    "id": "98038.0",
    "name": "Merchant",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "Shadow Soulstone",
    "drop": "Rusty Coin, Antidote Herb, Quality Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98039.0",
    "name": "Dancer",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 7,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Fan",
      "Light"
    ],
    "level": 0,
    "hp": 30000,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Phantasmic Shot",
        "type": "Elem"
      },
      {
        "name": "Counter Posture",
        "type": "Unknown"
      },
      {
        "name": "Inhibit Offense",
        "type": "Unknown"
      },
      {
        "name": "Lifesteal",
        "type": "Elem"
      },
      {
        "name": "Fireball",
        "type": "Elem"
      },
      {
        "name": "Duskfall",
        "type": "Elem"
      },
      {
        "name": "Accurst Flame",
        "type": "Elem"
      },
      {
        "name": "The power of the Accurst Flame rages!",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Hide, Quality Beast Tusk",
    "drop": "Rare Beast Fang, Rare Beast Meat, Holy Water (M)",
    "immunities": "Stun, Petrification"
  },
  {
    "id": "98856.0",
    "name": "Accurst Flame",
    "area": "Bestower of All 7",
    "subArea": "Flamebearer's Shrine",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Staff",
      "Fan",
      "Light"
    ],
    "level": 0,
    "hp": 33333,
    "patk": 400,
    "pdef": 50,
    "matk": 380,
    "mdef": 40,
    "skills": [
      {
        "name": "Black Flame",
        "type": "Unknown"
      },
      {
        "name": "The Sacred Flame's power grows stronger!",
        "type": "Unknown"
      },
      {
        "name": "Cursed Mending",
        "type": "Unknown"
      },
      {
        "name": "Cursed Shield",
        "type": "Unknown"
      },
      {
        "name": "The power of the Accurst Flame flows within...",
        "type": "Unknown"
      },
      {
        "name": "Ward of the Accurst Flame",
        "type": "Unknown"
      },
      {
        "name": "Cursed Mending",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Horn",
    "drop": "Meteorite, Rare Beast Hide, Blessed Olive (M)",
    "immunities": "Curse, Poison"
  },
  {
    "id": "98327.0",
    "name": "Sacred Beast of the Seas",
    "area": "Bestower of All 8",
    "subArea": "Seas of Servility",
    "type": "Regular",
    "shields": 26,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 73,
    "hp": 278733,
    "patk": 663,
    "pdef": 108,
    "matk": 663,
    "mdef": 108,
    "skills": [
      {
        "name": "Coil",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Quadruple Tentacle Bash",
        "type": "Phys"
      },
      {
        "name": "Wring",
        "type": "Phys"
      },
      {
        "name": "Ink Spew",
        "type": "Elem"
      },
      {
        "name": "Great Wave",
        "type": "Elem"
      },
      {
        "name": "Celestial Wave",
        "type": "Elem"
      },
      {
        "name": "Sextuple Tentacle Bash",
        "type": "Phys"
      },
      {
        "name": "Octuple Tentacle Bash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> is covered in mucus!",
        "type": "Unknown"
      },
      {
        "name": "Divine Wrath",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is covered in mucus!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (L), Sphinx Feather, Healing Grape",
    "drop": "Quality Beast Hide, Shiny Coin",
    "immunities": "None"
  },
  {
    "id": "98329.0",
    "name": "Sacred Beast of the Sands",
    "area": "Bestower of All 8",
    "subArea": "Sands of Rapacity",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Fire",
      "Dark"
    ],
    "level": 73,
    "hp": 237689,
    "patk": 640,
    "pdef": 85,
    "matk": 655,
    "mdef": 85,
    "skills": [
      {
        "name": "Blinding Glare",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Raging Luminescence",
        "type": "Elem"
      },
      {
        "name": "Bloody Ripper",
        "type": "Phys"
      },
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Wild Fearclaw",
        "type": "Phys"
      },
      {
        "name": "Terrifying Roar",
        "type": "Phys"
      },
      {
        "name": "Oppression",
        "type": "Unknown"
      },
      {
        "name": "Bite Off",
        "type": "Phys"
      },
      {
        "name": "Coward's Demise",
        "type": "Unknown"
      },
      {
        "name": "Roar of the Heavens",
        "type": "Elem"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb (M), Minotaur Horn",
    "drop": "Holy Water (L), HP-Restoring Herb (L)",
    "immunities": "Paralysis, Silence"
  },
  {
    "id": "98331.0",
    "name": "Sacred Beast of the Skies",
    "area": "Bestower of All 8",
    "subArea": "Skies of Vanity",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 73,
    "hp": 237689,
    "patk": 663,
    "pdef": 85,
    "matk": 617,
    "mdef": 85,
    "skills": [
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "Divine Wind of Annihilation",
        "type": "Elem"
      },
      {
        "name": "Scattered Shockshot",
        "type": "Elem"
      },
      {
        "name": "Great Wind",
        "type": "Elem"
      },
      {
        "name": "Raging Bolt Shock",
        "type": "Elem"
      },
      {
        "name": "Sturdy Shockshot",
        "type": "Elem"
      },
      {
        "name": "Blow Away",
        "type": "Elem"
      },
      {
        "name": "Knock Down",
        "type": "Phys"
      },
      {
        "name": "Bolt Shock",
        "type": "Elem"
      },
      {
        "name": "It begins to store power...",
        "type": "Unknown"
      },
      {
        "name": "It continues to gather its strength...",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone, Quality Beast Horn",
    "drop": "Rare Beast Claw",
    "immunities": "Silence"
  },
  {
    "id": "32192.0",
    "name": "Saint Sazantos",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 20,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Ice",
      "Thunder",
      "Wind"
    ],
    "level": 65,
    "hp": 220000,
    "patk": 935,
    "pdef": 85,
    "matk": 940,
    "mdef": 85,
    "skills": [
      {
        "name": "Spiritual Sunder",
        "type": "Phys"
      },
      {
        "name": "A World Without Desire",
        "type": "Unknown"
      },
      {
        "name": "Sacred Spirit Strike",
        "type": "Phys"
      },
      {
        "name": "Sword of the Sacred Flame",
        "type": "Phys"
      },
      {
        "name": "Shielding Sacred Blaze Slash",
        "type": "Elem"
      },
      {
        "name": "Kindling Light",
        "type": "Elem"
      },
      {
        "name": "The Accurst Flame enveloping Sazantos rages!",
        "type": "Unknown"
      },
      {
        "name": "The Accurst Flame enveloping Sazantos rages!",
        "type": "Unknown"
      },
      {
        "name": "The Accurst Flame enveloping Sazantos rages!",
        "type": "Unknown"
      },
      {
        "name": "The Accurst Flame enveloping Sazantos rages!",
        "type": "Unknown"
      },
      {
        "name": "The Accurst Flame enveloping Sazantos rages!",
        "type": "Unknown"
      },
      {
        "name": "The Accurst Flame enveloping Sazantos rages!",
        "type": "Unknown"
      },
      {
        "name": "Cursed Blade",
        "type": "Phys"
      },
      {
        "name": "Shadowmist Blade",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive (L)",
    "drop": "Beast Horn, Revitalizing Jam (L)",
    "immunities": "Confusion"
  },
  {
    "id": "5195.0",
    "name": "Creator Orsazantos",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 20,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 65,
    "hp": 330000,
    "patk": 974,
    "pdef": 85,
    "matk": 993,
    "mdef": 85,
    "skills": [
      {
        "name": "Triple Blow",
        "type": "Phys"
      },
      {
        "name": "Total Piercing Strike",
        "type": "Phys"
      },
      {
        "name": "Futile Ice Flurry",
        "type": "Elem"
      },
      {
        "name": "Trials of Greed: Domination",
        "type": "Elem"
      },
      {
        "name": "Flittering Light Flurry",
        "type": "Elem"
      },
      {
        "name": "Trials of Greed: Validation",
        "type": "Phys"
      },
      {
        "name": "Trials of Greed: Possession",
        "type": "Elem"
      },
      {
        "name": "Affectionate Prayer",
        "type": "Phys"
      },
      {
        "name": "Selfless Spirit",
        "type": "Unknown"
      },
      {
        "name": "Orsa's Judgment",
        "type": "Elem"
      },
      {
        "name": "Creator's Godly Guidance",
        "type": "Phys"
      },
      {
        "name": "Nature of Rebirth",
        "type": "Unknown"
      },
      {
        "name": "Dark of Night",
        "type": "Unknown"
      },
      {
        "name": "Light of Night",
        "type": "Unknown"
      }
    ],
    "steal": "Shadow Soulstone, Antidote Herb (L), Rare Beast Hide",
    "drop": "Unicorn Horn, Griffin Claw",
    "immunities": "Poison"
  },
  {
    "id": "32196.0",
    "name": "Ring of the Huntress",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 7,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Staff",
      "Fan",
      "Ice",
      "Wind",
      "Light"
    ],
    "level": 0,
    "hp": 58044,
    "patk": 793,
    "pdef": 170,
    "matk": 782,
    "mdef": 194,
    "skills": [
      {
        "name": "Fathomless Arrow",
        "type": "Phys"
      },
      {
        "name": "Radiant Arrow",
        "type": "Phys"
      },
      {
        "name": "Rapacious Strike",
        "type": "Phys"
      },
      {
        "name": "Spill of Moonlight",
        "type": "Elem"
      },
      {
        "name": "Predation",
        "type": "Phys"
      },
      {
        "name": "Temptation of the Night",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb, Quality Beast Fang",
    "drop": "Rare Beast Claw",
    "immunities": "None"
  },
  {
    "id": "32197.0",
    "name": "Ring of the Thunderblade",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 8,
    "weakness": "Bow",
    "weaknesses": [
      "Bow",
      "Fan",
      "Ice",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 0,
    "hp": 69435,
    "patk": 803,
    "pdef": 185,
    "matk": 803,
    "mdef": 168,
    "skills": [
      {
        "name": "Castigate",
        "type": "Phys"
      },
      {
        "name": "Thundering Gale",
        "type": "Elem"
      },
      {
        "name": "Precipice of Fear",
        "type": "Unknown"
      },
      {
        "name": "Suppression",
        "type": "Phys"
      },
      {
        "name": "Brutal Sweep",
        "type": "Phys"
      },
      {
        "name": "Thundersquall",
        "type": "Elem"
      }
    ],
    "steal": "Shiny Coin",
    "drop": "Beast Horn, Beast Fang",
    "immunities": "None"
  },
  {
    "id": "32198.0",
    "name": "Ring of the Prince of Thieves",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 6,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Fan",
      "Ice",
      "Wind",
      "Light"
    ],
    "level": 0,
    "hp": 48150,
    "patk": 788,
    "pdef": 180,
    "matk": 795,
    "mdef": 174,
    "skills": [
      {
        "name": "Rhythm Unto Quietus",
        "type": "Phys"
      },
      {
        "name": "Muzzling Meter",
        "type": "Phys"
      },
      {
        "name": "Widespread Fury",
        "type": "Elem"
      },
      {
        "name": "Physical Shackling Meter",
        "type": "Phys"
      },
      {
        "name": "Elemental Shackling Meter",
        "type": "Elem"
      },
      {
        "name": "Mass Fatal Sentence",
        "type": "Unknown"
      }
    ],
    "steal": "Phoenix Feather, Cerberus Fang",
    "drop": "Healing Grape Bunch, Manticore Stinger, Moonstone",
    "immunities": "None"
  },
  {
    "id": "32199.0",
    "name": "Ring of the Scholarking",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Boss",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Wind",
      "Dark"
    ],
    "level": 0,
    "hp": 136658,
    "patk": 775,
    "pdef": 190,
    "matk": 781,
    "mdef": 190,
    "skills": [
      {
        "name": "Divine Blow",
        "type": "Elem"
      },
      {
        "name": "Flood of Despair",
        "type": "Elem"
      },
      {
        "name": "Threatening Pressure",
        "type": "Elem"
      },
      {
        "name": "Unyielding Blade of Ruin",
        "type": "Phys"
      },
      {
        "name": "Blade of the God of War",
        "type": "Phys"
      },
      {
        "name": "Scorn of the Scholarking",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> emits a mysterious light!",
        "type": "Unknown"
      },
      {
        "name": "Physical Counter Stance",
        "type": "Unknown"
      },
      {
        "name": "Magic Counter Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Hydra Scale",
    "drop": "Soulstone, Manticore Stinger",
    "immunities": "None"
  },
  {
    "id": "32200.0",
    "name": "Ring of the Charitable",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Staff",
      "Fire",
      "Thunder"
    ],
    "level": 0,
    "hp": 62865,
    "patk": 788,
    "pdef": 181,
    "matk": 805,
    "mdef": 176,
    "skills": [
      {
        "name": "Eternal Sleep",
        "type": "Unknown"
      },
      {
        "name": "Snowy Slumber",
        "type": "Elem"
      },
      {
        "name": "Ebony Wings",
        "type": "Elem"
      },
      {
        "name": "Luminous Wings",
        "type": "Elem"
      },
      {
        "name": "Cursed Tether",
        "type": "Unknown"
      },
      {
        "name": "Mercy of the Charitable",
        "type": "Elem"
      },
      {
        "name": "Cursed Barrier",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Horn, Revitalizing Jam (L)",
    "drop": "Cerberus Fang, Unicorn Horn, Phoenix Feather",
    "immunities": "Terror"
  },
  {
    "id": "32201.0",
    "name": "Ring of the Lady of Grace",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 0,
    "hp": 80370,
    "patk": 785,
    "pdef": 172,
    "matk": 807,
    "mdef": 196,
    "skills": [
      {
        "name": "Toxic Tentacles",
        "type": "Phys"
      },
      {
        "name": "Submission",
        "type": "Unknown"
      },
      {
        "name": "Corrosion",
        "type": "Phys"
      },
      {
        "name": "Twilight Strike",
        "type": "Elem"
      },
      {
        "name": "Call to the Abyss",
        "type": "Elem"
      },
      {
        "name": "The Lady of Grace's Delight",
        "type": "Phys"
      },
      {
        "name": "Absorption Barrier",
        "type": "Unknown"
      }
    ],
    "steal": "Sphinx Feather",
    "drop": "Beast Fang",
    "immunities": "None"
  },
  {
    "id": "32202.0",
    "name": "Ring of the Trader",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 9,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Tome",
      "Fire",
      "Thunder",
      "Dark"
    ],
    "level": 0,
    "hp": 71603,
    "patk": 815,
    "pdef": 186,
    "matk": 782,
    "mdef": 170,
    "skills": [
      {
        "name": "Twin Flash",
        "type": "Phys"
      },
      {
        "name": "Blazing Twin Flash",
        "type": "Elem"
      },
      {
        "name": "Skyfire",
        "type": "Phys"
      },
      {
        "name": "Hands of Isolation",
        "type": "Phys"
      },
      {
        "name": "Disarray",
        "type": "Phys"
      },
      {
        "name": "Wrath of the Trader",
        "type": "Elem"
      },
      {
        "name": "Stillness Barrier",
        "type": "Unknown"
      }
    ],
    "steal": "Lightning Soulstone, Quality Beast Fang",
    "drop": "Rare Beast Tusk, Leaf",
    "immunities": "Stun"
  },
  {
    "id": "5196.0",
    "name": "Bestower of All",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 20,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 0,
    "hp": 500000,
    "patk": 974,
    "pdef": 231,
    "matk": 995,
    "mdef": 231,
    "skills": [
      {
        "name": "Judgment",
        "type": "Phys"
      },
      {
        "name": "Flash of Divinity",
        "type": "Phys"
      },
      {
        "name": "Engraving",
        "type": "Elem"
      },
      {
        "name": "Disparity",
        "type": "Unknown"
      },
      {
        "name": "Ruinous Decay",
        "type": "Phys"
      },
      {
        "name": "Divine Tether",
        "type": "Phys"
      },
      {
        "name": "Extinction",
        "type": "Phys"
      },
      {
        "name": "Judgment",
        "type": "Phys"
      },
      {
        "name": "Divine Cursed Flame",
        "type": "Elem"
      },
      {
        "name": "Transcendence",
        "type": "Unknown"
      },
      {
        "name": "Elimination",
        "type": "Unknown"
      },
      {
        "name": "True Creator's Order",
        "type": "Unknown"
      },
      {
        "name": "True Creator's Order",
        "type": "Unknown"
      },
      {
        "name": "Alteration",
        "type": "Unknown"
      },
      {
        "name": "Divine Abyss",
        "type": "Phys"
      },
      {
        "name": "The Void",
        "type": "Elem"
      }
    ],
    "steal": "Shadow Soulstone, Ancient Coin, Revitalizing Jam (M)",
    "drop": "SP-Restoring Nut (L)",
    "immunities": "Sleep, Confusion"
  },
  {
    "id": "32193.0",
    "name": "Bestower of All",
    "area": "Bestower of All 8",
    "subArea": "Altar of Heavenly Peals",
    "type": "Regular",
    "shields": 99,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Bow",
      "Light",
      "Dark"
    ],
    "level": 0,
    "hp": 70000,
    "patk": 480,
    "pdef": 80,
    "matk": 480,
    "mdef": 80,
    "skills": [
      {
        "name": "Divine Abyss",
        "type": "Phys"
      },
      {
        "name": "The Void",
        "type": "Elem"
      }
    ],
    "steal": "Gold Dust, Quality Beast Claw",
    "drop": "Silver Nugget, Star Fragment, Hydra Scale",
    "immunities": "Silence, Stun"
  },
  {
    "id": "5135.0",
    "name": "Aelfric the Flamebringer",
    "area": "Unlocking the True Ending",
    "subArea": "Flamebearer's Shrine: Sanctum",
    "type": "Regular",
    "shields": 14,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fan",
      "Dark"
    ],
    "level": 65,
    "hp": 118675,
    "patk": 850,
    "pdef": 170,
    "matk": 850,
    "mdef": 170,
    "skills": [
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Luminescence",
        "type": "Elem"
      },
      {
        "name": "Hammer of Judgment",
        "type": "Phys"
      },
      {
        "name": "Oracle of Protection",
        "type": "Unknown"
      },
      {
        "name": "Blinding Light",
        "type": "Elem"
      },
      {
        "name": "Lux Congerere",
        "type": "Elem"
      },
      {
        "name": "Reflective Veil",
        "type": "Unknown"
      },
      {
        "name": "Holy Phosphorescence",
        "type": "Elem"
      },
      {
        "name": "Flamebringer's Guidance",
        "type": "Unknown"
      },
      {
        "name": "Ray of Light",
        "type": "Elem"
      },
      {
        "name": "Holy Judgment",
        "type": "Phys"
      },
      {
        "name": "Lux Debilitare",
        "type": "Elem"
      },
      {
        "name": "Celestial Light",
        "type": "Elem"
      },
      {
        "name": "Great Flame Veil",
        "type": "Unknown"
      },
      {
        "name": "Triple Leg Bash",
        "type": "Phys"
      },
      {
        "name": "Flamebringer's Guidance",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Hide, Copper Ore, Rare Beast Claw",
    "drop": "Rare Beast Claw",
    "immunities": "None"
  },
  {
    "id": "32127.0",
    "name": "Aelfric the Flamebringer",
    "area": "Unlocking the True Ending",
    "subArea": "Flamebearer's Shrine: Sanctum",
    "type": "Regular",
    "shields": 18,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 65,
    "hp": 132430,
    "patk": 925,
    "pdef": 178,
    "matk": 925,
    "mdef": 178,
    "skills": [
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Luminescence",
        "type": "Elem"
      },
      {
        "name": "Hammer of Judgment",
        "type": "Phys"
      },
      {
        "name": "Oracle of Protection",
        "type": "Unknown"
      },
      {
        "name": "Blinding Light",
        "type": "Elem"
      },
      {
        "name": "Lux Congerere",
        "type": "Elem"
      },
      {
        "name": "Reflective Veil",
        "type": "Unknown"
      },
      {
        "name": "Holy Phosphorescence",
        "type": "Elem"
      },
      {
        "name": "Flamebringer's Guidance",
        "type": "Unknown"
      },
      {
        "name": "Ray of Light",
        "type": "Elem"
      },
      {
        "name": "Holy Judgment",
        "type": "Phys"
      },
      {
        "name": "Lux Debilitare",
        "type": "Elem"
      },
      {
        "name": "Celestial Light",
        "type": "Elem"
      },
      {
        "name": "Great Flame Veil",
        "type": "Unknown"
      },
      {
        "name": "Triple Leg Bash",
        "type": "Phys"
      },
      {
        "name": "Flamebringer's Guidance",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone",
    "drop": "Holy Water, Rare Beast Tusk",
    "immunities": "Sleep, Confusion"
  },
  {
    "id": "32128.0",
    "name": "Aelfric the Flamebringer",
    "area": "Unlocking the True Ending",
    "subArea": "Flamebearer's Shrine: Sanctum",
    "type": "Regular",
    "shields": 23,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Fan",
      "Ice",
      "Wind",
      "Dark"
    ],
    "level": 65,
    "hp": 180000,
    "patk": 1000,
    "pdef": 193,
    "matk": 1000,
    "mdef": 193,
    "skills": [
      {
        "name": "Holy Light",
        "type": "Elem"
      },
      {
        "name": "Luminescence",
        "type": "Elem"
      },
      {
        "name": "Hammer of Judgment",
        "type": "Phys"
      },
      {
        "name": "Oracle of Protection",
        "type": "Unknown"
      },
      {
        "name": "Blinding Light",
        "type": "Elem"
      },
      {
        "name": "Lux Congerere",
        "type": "Elem"
      },
      {
        "name": "Reflective Veil",
        "type": "Unknown"
      },
      {
        "name": "Holy Phosphorescence",
        "type": "Elem"
      },
      {
        "name": "Flamebringer's Guidance",
        "type": "Unknown"
      },
      {
        "name": "Ray of Light",
        "type": "Elem"
      },
      {
        "name": "Holy Judgment",
        "type": "Phys"
      },
      {
        "name": "Lux Debilitare",
        "type": "Elem"
      },
      {
        "name": "Celestial Light",
        "type": "Elem"
      },
      {
        "name": "Great Flame Veil",
        "type": "Unknown"
      },
      {
        "name": "Triple Leg Bash",
        "type": "Phys"
      },
      {
        "name": "Flamebringer's Guidance",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Claw",
    "drop": "Kraken Ink",
    "immunities": "None"
  },
  {
    "id": "32129.0",
    "name": "Great Flame",
    "area": "Unlocking the True Ending",
    "subArea": "Flamebearer's Shrine: Sanctum",
    "type": "Regular",
    "shields": 0,
    "weakness": "None",
    "weaknesses": [
      "None"
    ],
    "level": 65,
    "hp": 99999,
    "patk": 99,
    "pdef": 9999,
    "matk": 99,
    "mdef": 9999,
    "skills": [
      {
        "name": "Augmenting effects vanish in the Great Flame's light!",
        "type": "Unknown"
      },
      {
        "name": "The Great Flame revives Aelfric...",
        "type": "Unknown"
      },
      {
        "name": "The Great Flame revives Aelfric and fades away...",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Meat, Light Soulstone, Old Coin",
    "drop": "Olive of Life (M), Chimera Fang, HP-Restoring Herb (M)",
    "immunities": "None"
  },
  {
    "id": "98031.0",
    "name": "Or'galdera",
    "area": "Bestower of All 8 - True Ending",
    "subArea": "Altat of Heavenly Peals",
    "type": "Regular",
    "shields": 30,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 0,
    "hp": 264040,
    "patk": 884,
    "pdef": 230,
    "matk": 869,
    "mdef": 230,
    "skills": [
      {
        "name": "Veil of Night",
        "type": "Unknown"
      },
      {
        "name": "Auspices of the Fallen",
        "type": "Unknown"
      },
      {
        "name": "Dispersing Wave",
        "type": "Unknown"
      },
      {
        "name": "Veil of Night disappeared from <skl_user_name>.",
        "type": "Unknown"
      },
      {
        "name": "Reflective Barrier",
        "type": "Unknown"
      },
      {
        "name": "Interceptive Barrier",
        "type": "Unknown"
      },
      {
        "name": "Eternal Void",
        "type": "Elem"
      },
      {
        "name": "Destructive Shot",
        "type": "Phys"
      },
      {
        "name": "Cursed Wrath",
        "type": "Phys"
      },
      {
        "name": "Meteor",
        "type": "Elem"
      },
      {
        "name": "Create Soul",
        "type": "Unknown"
      },
      {
        "name": "Banish Soul",
        "type": "Elem"
      }
    ],
    "steal": "Star Fragment, Rare Beast Claw",
    "drop": "Antidote Herb",
    "immunities": "Instant Death, Silence"
  },
  {
    "id": "98780.0",
    "name": "Void-Sundering Arm",
    "area": "Bestower of All 8 - True Ending",
    "subArea": "Altat of Heavenly Peals",
    "type": "Regular",
    "shields": 17,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan"
    ],
    "level": 0,
    "hp": 190112,
    "patk": 814,
    "pdef": 203,
    "matk": 920,
    "mdef": 230,
    "skills": [
      {
        "name": "<skl_user_name>'s movements have become erratic!",
        "type": "Unknown"
      },
      {
        "name": "Dreadful Loss",
        "type": "Unknown"
      },
      {
        "name": "Hellwind",
        "type": "Elem"
      },
      {
        "name": "Frozen Hell",
        "type": "Elem"
      },
      {
        "name": "Hell's Thunder",
        "type": "Elem"
      },
      {
        "name": "Hex",
        "type": "Elem"
      },
      {
        "name": "Hollow Dream",
        "type": "Unknown"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      }
    ],
    "steal": "Cerberus Fang, Antidote Herb (L), Hydra Scale",
    "drop": "Manticore Stinger, Chimera Fang, Holy Water (L)",
    "immunities": "None"
  },
  {
    "id": "98781.0",
    "name": "Demonic Spear",
    "area": "Bestower of All 8 - True Ending",
    "subArea": "Altat of Heavenly Peals",
    "type": "Boss",
    "shields": 10,
    "weakness": "Fire",
    "weaknesses": [
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 0,
    "hp": 194682,
    "patk": 937,
    "pdef": 230,
    "matk": 800,
    "mdef": 203,
    "skills": [
      {
        "name": "<skl_user_name> begins to shake violently!",
        "type": "Unknown"
      },
      {
        "name": "Demon Spear Fog",
        "type": "Elem"
      },
      {
        "name": "Spear Thrust",
        "type": "Phys"
      },
      {
        "name": "Wild Spear Thrust",
        "type": "Phys"
      },
      {
        "name": "Ravaging Thrust",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      },
      {
        "name": "The energy shrouding <skl_user_name> is altered.",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water",
    "drop": "Antidote Herb, Gold, SP-Restoring Nut (M)",
    "immunities": "Blind"
  },
  {
    "id": "98599.0",
    "name": "Ocean Octopuff Traveler",
    "area": "Coastlands",
    "subArea": "Middlesea / Outersea",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 10,
    "hp": 5,
    "patk": 105,
    "pdef": 300,
    "matk": 100,
    "mdef": 400,
    "skills": [
      {
        "name": "Bag Toss",
        "type": "Phys"
      },
      {
        "name": "Mass Bag Toss",
        "type": "Phys"
      },
      {
        "name": "Flee",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life (M), Healing Grape Bunch",
    "drop": "Olive, Soulstone",
    "immunities": "Terror, Paralysis"
  },
  {
    "id": "98594.0",
    "name": "Cait",
    "area": "Any",
    "subArea": "Low Level",
    "type": "Regular",
    "shields": 2,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 10,
    "hp": 5,
    "patk": 105,
    "pdef": 92,
    "matk": 100,
    "mdef": 92,
    "skills": [
      {
        "name": "Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Big Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Flee",
        "type": "Unknown"
      }
    ],
    "steal": "Chimera Fang",
    "drop": "Gold Dust",
    "immunities": "Silence"
  },
  {
    "id": "98595.0",
    "name": "Cultured Cait",
    "area": "Any",
    "subArea": "Mid Level",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 20,
    "hp": 8,
    "patk": 105,
    "pdef": 118,
    "matk": 100,
    "mdef": 118,
    "skills": [
      {
        "name": "Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Big Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Flee",
        "type": "Unknown"
      }
    ],
    "steal": "Copper Ore, Star Fragment, Revitalizing Jam (L)",
    "drop": "Beast Claw, HP-Restoring Herb (L), Olive",
    "immunities": "None"
  },
  {
    "id": "98596.0",
    "name": "Chubby Cait",
    "area": "Any",
    "subArea": "Higher Level",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 30,
    "hp": 80,
    "patk": 105,
    "pdef": 153,
    "matk": 100,
    "mdef": 153,
    "skills": [
      {
        "name": "Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Big Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Flee",
        "type": "Unknown"
      }
    ],
    "steal": "Basilisk Eye, Quality Beast Claw",
    "drop": "Antidote Herb, SP-Restoring Nut (M)",
    "immunities": "Blind"
  },
  {
    "id": "98597.0",
    "name": "Fallen Cait",
    "area": "Any",
    "subArea": "Hell",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 50,
    "hp": 8,
    "patk": 105,
    "pdef": 188,
    "matk": 100,
    "mdef": 188,
    "skills": [
      {
        "name": "Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Big Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Flee",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Hydra Scale, Rare Beast Tusk",
    "drop": "Griffin Claw",
    "immunities": "Sleep"
  },
  {
    "id": "98598.0",
    "name": "Holy Cait",
    "area": "Land",
    "subArea": "Heaven",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 60,
    "hp": 80,
    "patk": 105,
    "pdef": 223,
    "matk": 100,
    "mdef": 223,
    "skills": [
      {
        "name": "Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Big Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Flee",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb, Blessed Olive, Rare Beast Horn",
    "drop": "Nut, Beast Horn",
    "immunities": "Sleep"
  },
  {
    "id": "98600.0",
    "name": "King Octopuff",
    "area": "Seas",
    "subArea": "Heaven",
    "type": "Boss",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 30,
    "hp": 80,
    "patk": 105,
    "pdef": 400,
    "matk": 100,
    "mdef": 550,
    "skills": [
      {
        "name": "Bag Toss",
        "type": "Phys"
      },
      {
        "name": "Mass Bag Toss",
        "type": "Phys"
      },
      {
        "name": "Flee",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk, Sunshard",
    "drop": "SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "98804.0",
    "name": "Acdam",
    "area": "An Encounter with Tressa",
    "subArea": "Theatropolis",
    "type": "Regular",
    "shields": 8,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Wind"
    ],
    "level": 24,
    "hp": 8600,
    "patk": 294,
    "pdef": 30,
    "matk": 267,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Numbing Dust",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Fang, Quality Beast Hide",
    "drop": "Meteorite, Sunshard",
    "immunities": "None"
  },
  {
    "id": "98805.0",
    "name": "Acdam Member",
    "area": "An Encounter with Tressa",
    "subArea": "Theatropolis",
    "type": "Regular",
    "shields": 4,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Wind"
    ],
    "level": 24,
    "hp": 3000,
    "patk": 248,
    "pdef": 10,
    "matk": 165,
    "mdef": 5,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Stab Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Silver Nugget",
    "drop": "Blessed Olive (M), Revitalizing Jam (M)",
    "immunities": "Blind"
  },
  {
    "id": "98798.0",
    "name": "Dreige",
    "area": "An Encounter with Therion",
    "subArea": "Gray Grotto",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Thunder"
    ],
    "level": 27,
    "hp": 18450,
    "patk": 378,
    "pdef": 39,
    "matk": 321,
    "mdef": 32,
    "skills": [
      {
        "name": "Double Throw",
        "type": "Phys"
      },
      {
        "name": "Triple Throw",
        "type": "Phys"
      },
      {
        "name": "Hasten",
        "type": "Unknown"
      },
      {
        "name": "Blinding Assault",
        "type": "Phys"
      },
      {
        "name": "Brutal Break",
        "type": "Phys"
      },
      {
        "name": "Dreige tightens the grip on his knife!",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Tusk",
    "drop": "Quality Beast Claw, Rare Beast Horn",
    "immunities": "None"
  },
  {
    "id": "98799.0",
    "name": "Dreige's Lackey",
    "area": "An Encounter with Therion",
    "subArea": "Gray Grotto",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Thunder"
    ],
    "level": 27,
    "hp": 5000,
    "patk": 283,
    "pdef": 18,
    "matk": 203,
    "mdef": 14,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Stab Flurry",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (M), Beast Fang",
    "drop": "HP-Restoring Herb",
    "immunities": "Sleep"
  },
  {
    "id": "98822.0",
    "name": "The Big 'Un",
    "area": "The Big 'Un",
    "subArea": "Clearbrook Traverse",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 29,
    "hp": 27301,
    "patk": 446,
    "pdef": 44,
    "matk": 466,
    "mdef": 36,
    "skills": [
      {
        "name": "Electrocute",
        "type": "Elem"
      },
      {
        "name": "Lightning Strike",
        "type": "Elem"
      },
      {
        "name": "Electrical Discharge",
        "type": "Elem"
      },
      {
        "name": "Thunderstorm",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb (M)",
    "drop": "Phoenix Feather, Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98785.0",
    "name": "???",
    "area": "An Encounter with Heidne",
    "subArea": "Sunshade Sands",
    "type": "Regular",
    "shields": 20,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 30,
    "hp": 43624,
    "patk": 380,
    "pdef": 60,
    "matk": 380,
    "mdef": 60,
    "skills": [
      {
        "name": "Offense Breaker",
        "type": "Phys"
      },
      {
        "name": "Defense Breaker",
        "type": "Elem"
      },
      {
        "name": "Energy Thief",
        "type": "Phys"
      },
      {
        "name": "Fourfold Throw",
        "type": "Phys"
      },
      {
        "name": "Come on, show me what that ring can do!",
        "type": "Unknown"
      },
      {
        "name": "Swift Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "EXP, Gold Dust, Holy Water (M)",
    "immunities": "Sleep"
  },
  {
    "id": "98806.0",
    "name": "Rosso",
    "area": "An Encounter with Primrose",
    "subArea": "Sunshade",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Thunder",
      "Wind"
    ],
    "level": 30,
    "hp": 41328,
    "patk": 486,
    "pdef": 60,
    "matk": 489,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Pummel",
        "type": "Phys"
      },
      {
        "name": "Wild Bash",
        "type": "Phys"
      },
      {
        "name": "Roundhouse Kick",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> grew stronger and gained further resistance to physical attacks!",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> grew stronger and gained further resistance to elemental attacks!",
        "type": "Unknown"
      },
      {
        "name": "Inhale",
        "type": "Unknown"
      },
      {
        "name": "Quash",
        "type": "Phys"
      },
      {
        "name": "Hard Hit",
        "type": "Phys"
      },
      {
        "name": "Swift Stance",
        "type": "Phys"
      },
      {
        "name": "Swift Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Hide, Quality Beast Fang",
    "drop": "Revitalizing Jam (L), Beast Tusk",
    "immunities": "None"
  },
  {
    "id": "98847.0",
    "name": "Heidne",
    "area": "An Encounter with Heidne",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 20,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 30,
    "hp": 43624,
    "patk": 450,
    "pdef": 60,
    "matk": 450,
    "mdef": 60,
    "skills": [
      {
        "name": "Offense Breaker",
        "type": "Phys"
      },
      {
        "name": "Defense Breaker",
        "type": "Elem"
      },
      {
        "name": "Energy Thief",
        "type": "Phys"
      },
      {
        "name": "Fourfold Throw",
        "type": "Phys"
      },
      {
        "name": "Come on, show me what that ring can do!",
        "type": "Unknown"
      },
      {
        "name": "Swift Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Dragon Scale, Iron Ore, Hydra Scale",
    "drop": "Holy Water, Blessed Olive (M), SP-Restoring Nut (L)",
    "immunities": "Confusion"
  },
  {
    "id": "98848.0",
    "name": "Slave Trader",
    "area": "One's True Worth",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Thunder"
    ],
    "level": 35,
    "hp": 17760,
    "patk": 320,
    "pdef": 40,
    "matk": 300,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mighty Charge",
        "type": "Phys"
      },
      {
        "name": "Wild Thrust",
        "type": "Phys"
      },
      {
        "name": "Repeated Thrust",
        "type": "Phys"
      },
      {
        "name": "Peerless Strike",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Tusk, Meteorite, Revitalizing Jam",
    "drop": "Iron Ore",
    "immunities": "Silence"
  },
  {
    "id": "98849.0",
    "name": "Heidne",
    "area": "One's True Worth",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 20,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 30,
    "hp": 43624,
    "patk": 450,
    "pdef": 60,
    "matk": 450,
    "mdef": 60,
    "skills": [
      {
        "name": "Offense Breaker",
        "type": "Phys"
      },
      {
        "name": "Defense Breaker",
        "type": "Elem"
      },
      {
        "name": "Energy Thief",
        "type": "Phys"
      },
      {
        "name": "Fourfold Throw",
        "type": "Phys"
      },
      {
        "name": "Come on, show me what that ring can do!",
        "type": "Unknown"
      },
      {
        "name": "Swift Stance",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb (M)",
    "drop": "Antidote Herb",
    "immunities": "None"
  },
  {
    "id": "98812.0",
    "name": "Mighty Mánagarmr",
    "area": "Alpaca Roundup",
    "subArea": "Shepherd's Rock Pass",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 34,
    "hp": 45900,
    "patk": 525,
    "pdef": 55,
    "matk": 486,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Great Fang",
        "type": "Phys"
      },
      {
        "name": "Savage Claw",
        "type": "Phys"
      },
      {
        "name": "Assault Posture",
        "type": "Unknown"
      },
      {
        "name": "Purifying Flame",
        "type": "Elem"
      },
      {
        "name": "Wild Hard Claw",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water, Beast Tusk",
    "drop": "Revitalizing Jam, Quality Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98786.0",
    "name": "Vaughner's Underling I",
    "area": "Heidne and the Man-Eating Miser",
    "subArea": "Man-Eating Miser's Hideout",
    "type": "Regular",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Staff",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 34,
    "hp": 9400,
    "patk": 400,
    "pdef": 50,
    "matk": 413,
    "mdef": 40,
    "skills": [
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Level Slash",
        "type": "Phys"
      },
      {
        "name": "Poison Blade",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Fang, Fire Soulstone",
    "drop": "Dragon Scale",
    "immunities": "None"
  },
  {
    "id": "98787.0",
    "name": "Vaughner's Underling II",
    "area": "Heidne and the Man-Eating Miser",
    "subArea": "Man-Eating Miser's Hideout",
    "type": "Regular",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 34,
    "hp": 9500,
    "patk": 400,
    "pdef": 50,
    "matk": 413,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Speed Up",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Meat, Wind Soulstone",
    "drop": "Gold",
    "immunities": "None"
  },
  {
    "id": "98788.0",
    "name": "Vaughner the Man-Eating Miser",
    "area": "Heidne and the Man-Eating Miser",
    "subArea": "Man-Eating Miser's Hideout",
    "type": "Regular",
    "shields": 22,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Thunder",
      "Light"
    ],
    "level": 34,
    "hp": 47925,
    "patk": 500,
    "pdef": 55,
    "matk": 516,
    "mdef": 50,
    "skills": [
      {
        "name": "Wild Blade",
        "type": "Phys"
      },
      {
        "name": "Aggressive Slash",
        "type": "Phys"
      },
      {
        "name": "Barbarous Bite",
        "type": "Phys"
      },
      {
        "name": "Coercion",
        "type": "Unknown"
      },
      {
        "name": "Boiling Blood",
        "type": "Unknown"
      },
      {
        "name": "Bloody Impaling Thrust",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> stands ready!",
        "type": "Unknown"
      }
    ],
    "steal": "Blessed Olive (M)",
    "drop": "HP-Restoring Herb (L), Meteorite",
    "immunities": "Silence"
  },
  {
    "id": "98789.0",
    "name": "Vaughner's Guard",
    "area": "Heidne and the Man-Eating Miser",
    "subArea": "Man-Eating Miser's Hideout",
    "type": "Regular",
    "shields": 13,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Ice",
      "Thunder"
    ],
    "level": 34,
    "hp": 15984,
    "patk": 470,
    "pdef": 50,
    "matk": 496,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Numbing Thrust",
        "type": "Phys"
      },
      {
        "name": "Charge!",
        "type": "Unknown"
      },
      {
        "name": "Defensive Order",
        "type": "Unknown"
      },
      {
        "name": "Cover",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Meat, Gold Dust, Rare Beast Tusk",
    "drop": "JP, Healing Grape Bunch, Meteorite",
    "immunities": "Blind, Silence"
  },
  {
    "id": "98800.0",
    "name": "Imposter Olberic",
    "area": "An Encounter with Olberic",
    "subArea": "Shepherd's Rock",
    "type": "Regular",
    "shields": 5,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Ice",
      "Dark"
    ],
    "level": 34,
    "hp": 13000,
    "patk": 340,
    "pdef": 20,
    "matk": 340,
    "mdef": 20,
    "skills": [
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Firestone (S)",
        "type": "Elem"
      },
      {
        "name": "Healing Grape",
        "type": "Unknown"
      },
      {
        "name": "Concoct: Anesthetic Bloodbane",
        "type": "Unknown"
      }
    ],
    "steal": "Meteorite",
    "drop": "Quality Beast Horn, Quality Beast Meat, Sunshard",
    "immunities": "Sleep, Instant Death"
  },
  {
    "id": "98807.0",
    "name": "Frost Bear",
    "area": "An Encounter with Alfyn",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Wind"
    ],
    "level": 34,
    "hp": 16872,
    "patk": 450,
    "pdef": 50,
    "matk": 300,
    "mdef": 30,
    "skills": [
      {
        "name": "Wild Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Improved Offense",
        "type": "Unknown"
      }
    ],
    "steal": "Dragon Scale, Antidote Herb",
    "drop": "Blessed Olive, Olive of Life (M)",
    "immunities": "None"
  },
  {
    "id": "98808.0",
    "name": "Hoary Howler",
    "area": "An Encounter with Alfyn",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Wind"
    ],
    "level": 34,
    "hp": 17760,
    "patk": 350,
    "pdef": 40,
    "matk": 390,
    "mdef": 50,
    "skills": [
      {
        "name": "Soporific Fang",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "Galeforce Slash",
        "type": "Elem"
      }
    ],
    "steal": "Quality Beast Hide, SP-Restoring Nut",
    "drop": "Rusty Coin, Rare Beast Tusk",
    "immunities": "Poison, Terror"
  },
  {
    "id": "98809.0",
    "name": "Winter Wanderweed",
    "area": "An Encounter with Alfyn",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Wind"
    ],
    "level": 34,
    "hp": 15984,
    "patk": 340,
    "pdef": 40,
    "matk": 390,
    "mdef": 50,
    "skills": [
      {
        "name": "Roll Attack",
        "type": "Phys"
      },
      {
        "name": "Mass Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "Soporific Sting",
        "type": "Phys"
      }
    ],
    "steal": "Beast Fang, Blessed Olive, Hydra Scale",
    "drop": "Rare Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98791.0",
    "name": "Wild Boar",
    "area": "An Encounter with H'aanit",
    "subArea": "Great Tree's Tears",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Tome",
      "Dark"
    ],
    "level": 40,
    "hp": 30212,
    "patk": 527,
    "pdef": 60,
    "matk": 529,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Gather Strength",
        "type": "Unknown"
      }
    ],
    "steal": "Blessed Olive",
    "drop": "Sphinx Feather, Dragon Scale",
    "immunities": "Instant Death"
  },
  {
    "id": "98792.0",
    "name": "Ivory Shadow",
    "area": "An Encounter with H'aanit",
    "subArea": "Great Tree's Tears",
    "type": "Regular",
    "shields": 25,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Tome",
      "Dark"
    ],
    "level": 43,
    "hp": 80358,
    "patk": 700,
    "pdef": 72,
    "matk": 468,
    "mdef": 48,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Charge Up",
        "type": "Unknown"
      },
      {
        "name": "Slumbering Breath",
        "type": "Unknown"
      },
      {
        "name": "Forceful Thrust",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "The ivory shadow adopts a low stance.",
        "type": "Unknown"
      }
    ],
    "steal": "Light Soulstone, Herb",
    "drop": "Rare Beast Meat, SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "98782.0",
    "name": "River Frogking I",
    "area": "An Encounter with Carinda",
    "subArea": "East Clearbrook Traverse",
    "type": "Boss",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 37,
    "hp": 25000,
    "patk": 505,
    "pdef": 55,
    "matk": 415,
    "mdef": 45,
    "skills": [
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Cleave in Two",
        "type": "Phys"
      },
      {
        "name": "Wild Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Unearthly Roar",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (L), Silver Nugget",
    "drop": "Dragon Scale",
    "immunities": "None"
  },
  {
    "id": "98783.0",
    "name": "Slayer Bug",
    "area": "An Encounter with Carinda",
    "subArea": "East Clearbrook Traverse",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Dark"
    ],
    "level": 37,
    "hp": 16000,
    "patk": 440,
    "pdef": 50,
    "matk": 442,
    "mdef": 50,
    "skills": [
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Shadow Sweep",
        "type": "Elem"
      },
      {
        "name": "Blinding Claw",
        "type": "Phys"
      },
      {
        "name": "Umbral Impact",
        "type": "Elem"
      },
      {
        "name": "Extreme Charge",
        "type": "Phys"
      }
    ],
    "steal": "Moonstone",
    "drop": "Copper Ore, Gold Dust, Quality Beast Hide",
    "immunities": "Instant Death, Stun"
  },
  {
    "id": "98784.0",
    "name": "Motley Slug",
    "area": "An Encounter with Carinda",
    "subArea": "East Clearbrook Traverse",
    "type": "Regular",
    "shields": 8,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Fire",
      "Ice",
      "Light"
    ],
    "level": 37,
    "hp": 14000,
    "patk": 405,
    "pdef": 40,
    "matk": 470,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Horn",
    "drop": "Kraken Ink, Chimera Fang, Gold Dust",
    "immunities": "Curse, Terror"
  },
  {
    "id": "98867.0",
    "name": "Thief",
    "area": "A Long-Lost Love",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fan",
      "Fire",
      "Thunder"
    ],
    "level": 36,
    "hp": 17499,
    "patk": 390,
    "pdef": 30,
    "matk": 360,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Twofold Slash",
        "type": "Phys"
      },
      {
        "name": "Wild Virulent Blade",
        "type": "Phys"
      },
      {
        "name": "Mass Improved Arms",
        "type": "Unknown"
      },
      {
        "name": "Mass Armor Down",
        "type": "Unknown"
      }
    ],
    "steal": "Moonstone",
    "drop": "Olive, Rusty Coin, Kraken Ink",
    "immunities": "Poison, Blind"
  },
  {
    "id": "98868.0",
    "name": "Thief",
    "area": "A Long-Lost Love",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fan",
      "Fire",
      "Thunder"
    ],
    "level": 36,
    "hp": 17499,
    "patk": 390,
    "pdef": 30,
    "matk": 360,
    "mdef": 20,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Twofold Slash",
        "type": "Phys"
      },
      {
        "name": "Wild Virulent Blade",
        "type": "Phys"
      },
      {
        "name": "Mass Improved Arms",
        "type": "Unknown"
      },
      {
        "name": "Mass Armor Down",
        "type": "Unknown"
      }
    ],
    "steal": "Rusty Coin",
    "drop": "JP, Silver Nugget, Quality Beast Claw",
    "immunities": "Petrification"
  },
  {
    "id": "98869.0",
    "name": "Thief",
    "area": "A Long-Lost Love",
    "subArea": "Cavern of Mists",
    "type": "Regular",
    "shields": 9,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Fire",
      "Ice"
    ],
    "level": 36,
    "hp": 14000,
    "patk": 380,
    "pdef": 30,
    "matk": 400,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Twofold Slash",
        "type": "Phys"
      },
      {
        "name": "Wild Virulent Blade",
        "type": "Phys"
      },
      {
        "name": "Mass Improved Arms",
        "type": "Unknown"
      },
      {
        "name": "Mass Armor Down",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Claw, Griffin Claw",
    "drop": "Healing Grape Bunch, Unicorn Horn",
    "immunities": "None"
  },
  {
    "id": "98790.0",
    "name": "Colossal Blightant",
    "area": "An Encounter with Esperre",
    "subArea": "Sufrataljah Sands",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 40,
    "hp": 76791,
    "patk": 550,
    "pdef": 60,
    "matk": 555,
    "mdef": 60,
    "skills": [
      {
        "name": "Jaw Crunch",
        "type": "Phys"
      },
      {
        "name": "Burning Acid",
        "type": "Elem"
      },
      {
        "name": "Miasma",
        "type": "Elem"
      },
      {
        "name": "Spiked Whip",
        "type": "Phys"
      },
      {
        "name": "Stoneblood",
        "type": "Elem"
      }
    ],
    "steal": "Holy Water (L), Shiny Coin",
    "drop": "Dragon Scale, Olive, Manticore Stinger",
    "immunities": "None"
  },
  {
    "id": "98801.0",
    "name": "Colossal Blightant",
    "area": "An Encounter with Esperre",
    "subArea": "Sufrataljah Sands",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 40,
    "hp": 76791,
    "patk": 550,
    "pdef": 60,
    "matk": 555,
    "mdef": 60,
    "skills": [
      {
        "name": "Jaw Crunch",
        "type": "Phys"
      },
      {
        "name": "Burning Acid",
        "type": "Elem"
      },
      {
        "name": "Miasma",
        "type": "Elem"
      },
      {
        "name": "Spiked Whip",
        "type": "Phys"
      },
      {
        "name": "Stoneblood",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s stomach becomes enlarged!",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (L), Beast Meat, Gold Dust",
    "drop": "Rare Beast Claw, Quality Beast Tusk, Rusty Coin",
    "immunities": "Instant Death, Curse"
  },
  {
    "id": "98796.0",
    "name": "Immoral Noble",
    "area": "An Encounter with Xerc",
    "subArea": "Grandport: Estate Entrance",
    "type": "Regular",
    "shields": 16,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Tome",
      "Fan"
    ],
    "level": 40,
    "hp": 38350,
    "patk": 575,
    "pdef": 61,
    "matk": 585,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Shadow Soulstone",
        "type": "Elem"
      },
      {
        "name": "Fire Soulstone",
        "type": "Elem"
      },
      {
        "name": "Thunder Soulstone",
        "type": "Elem"
      },
      {
        "name": "Not so fast!",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life, Revitalizing Jam (M)",
    "drop": "Star Fragment, Hydra Scale, Shiny Coin",
    "immunities": "Blind"
  },
  {
    "id": "98797.0",
    "name": "Immoral Noble's Lackey",
    "area": "An Encounter with Xerc",
    "subArea": "Grandport: Estate Entrance",
    "type": "Regular",
    "shields": 15,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Fan"
    ],
    "level": 40,
    "hp": 25606,
    "patk": 552,
    "pdef": 61,
    "matk": 455,
    "mdef": 50,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mental Augmentation",
        "type": "Unknown"
      },
      {
        "name": "Healing Grape",
        "type": "Unknown"
      },
      {
        "name": "Wild Numbing Blade",
        "type": "Phys"
      }
    ],
    "steal": "Shiny Coin",
    "drop": "Star Fragment",
    "immunities": "None"
  },
  {
    "id": "98793.0",
    "name": "Gluttonous Salamander",
    "area": "An Encounter with Cyrus",
    "subArea": "Atlasdam Flats",
    "type": "Regular",
    "shields": 25,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Ice",
      "Light"
    ],
    "level": 43,
    "hp": 80358,
    "patk": 583,
    "pdef": 60,
    "matk": 584,
    "mdef": 60,
    "skills": [
      {
        "name": "Tail Slap",
        "type": "Phys"
      },
      {
        "name": "Draw In",
        "type": "Elem"
      },
      {
        "name": "Devour",
        "type": "Phys"
      },
      {
        "name": "Gorge",
        "type": "Phys"
      },
      {
        "name": "Sneeze",
        "type": "Elem"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> unhinges its jaws!",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Tusk, Sphinx Feather",
    "drop": "Basilisk Eye",
    "immunities": "None"
  },
  {
    "id": "98794.0",
    "name": "Edwin",
    "area": "An Encounter with Ophilia",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 20,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Staff",
      "Ice",
      "Thunder"
    ],
    "level": 44,
    "hp": 61625,
    "patk": 540,
    "pdef": 50,
    "matk": 510,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wild Blade",
        "type": "Phys"
      },
      {
        "name": "Enervating Strike",
        "type": "Phys"
      },
      {
        "name": "Elemental Repelling Stance",
        "type": "Unknown"
      },
      {
        "name": "Lightning Thrust",
        "type": "Elem"
      },
      {
        "name": "Enervating Assault",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> stands ready!",
        "type": "Unknown"
      }
    ],
    "steal": "Gold Dust",
    "drop": "Unicorn Horn, Basilisk Eye, Beast Fang",
    "immunities": "Paralysis, Terror"
  },
  {
    "id": "98795.0",
    "name": "Edwin's Subordinate",
    "area": "An Encounter with Ophilia",
    "subArea": "Flamesgrace Wilds",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Thunder"
    ],
    "level": 44,
    "hp": 16170,
    "patk": 500,
    "pdef": 40,
    "matk": 500,
    "mdef": 40,
    "skills": [
      {
        "name": "Ignition",
        "type": "Elem"
      },
      {
        "name": "Physical Boost",
        "type": "Unknown"
      },
      {
        "name": "Mass Armor Down",
        "type": "Unknown"
      },
      {
        "name": "Ethereal Healing",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb, Revitalizing Jam (M), Healing Grape Bunch",
    "drop": "Basilisk Eye",
    "immunities": "Sleep, Instant Death"
  },
  {
    "id": "98870.0",
    "name": "Detof Clan Pursuer",
    "area": "The Missing Brother",
    "subArea": "East Cyphlo Banks",
    "type": "Regular",
    "shields": 13,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 45,
    "hp": 20272,
    "patk": 500,
    "pdef": 40,
    "matk": 450,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Wild Crippling Blade",
        "type": "Phys"
      },
      {
        "name": "Mass Physical Degradation",
        "type": "Unknown"
      },
      {
        "name": "Mass Physical Boost",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Fang",
    "drop": "Moonstone, SP-Restoring Nut",
    "immunities": "None"
  },
  {
    "id": "98871.0",
    "name": "Detof Clan Pursuer",
    "area": "The Missing Brother",
    "subArea": "East Cyphlo Banks",
    "type": "Regular",
    "shields": 13,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Thunder",
      "Dark"
    ],
    "level": 45,
    "hp": 20272,
    "patk": 500,
    "pdef": 40,
    "matk": 450,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Wild Crippling Blade",
        "type": "Phys"
      },
      {
        "name": "Mass Physical Degradation",
        "type": "Unknown"
      },
      {
        "name": "Mass Physical Boost",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Tusk, Olive of Life (M)",
    "drop": "Iron Ore, Rusty Coin, Griffin Claw",
    "immunities": "Curse"
  },
  {
    "id": "98872.0",
    "name": "Detof Clan Pursuer",
    "area": "The Missing Brother",
    "subArea": "East Cyphlo Banks",
    "type": "Regular",
    "shields": 11,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 45,
    "hp": 17500,
    "patk": 490,
    "pdef": 34,
    "matk": 450,
    "mdef": 45,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Wild Crippling Blade",
        "type": "Phys"
      },
      {
        "name": "Mass Physical Degradation",
        "type": "Unknown"
      },
      {
        "name": "Mass Physical Boost",
        "type": "Unknown"
      }
    ],
    "steal": "Hydra Scale",
    "drop": "Antidote Herb, Antidote Herb (L)",
    "immunities": "Paralysis, Sleep"
  },
  {
    "id": "98842.0",
    "name": "Fierce Fly",
    "area": "Treasure Event Battle 1",
    "subArea": "Golden Palace: Middle Floor",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Ice",
      "Wind"
    ],
    "level": 44,
    "hp": 12699,
    "patk": 517,
    "pdef": 60,
    "matk": 517,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Deafening Buzz",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Horn, Dragon Scale",
    "drop": "Beast Meat, Beast Tusk, Blessed Olive",
    "immunities": "None"
  },
  {
    "id": "98843.0",
    "name": "Brigand Bones II",
    "area": "Treasure Event Battle 1",
    "subArea": "Golden Palace: Middle Floor",
    "type": "Regular",
    "shields": 6,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Fire",
      "Light"
    ],
    "level": 44,
    "hp": 12699,
    "patk": 517,
    "pdef": 60,
    "matk": 517,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Strip Armaments",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Fang, Meteorite",
    "drop": "Beast Hide, Herb",
    "immunities": "Petrification, Curse"
  },
  {
    "id": "98844.0",
    "name": "Light Revenant",
    "area": "Treasure Event Battle 2",
    "subArea": "Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Dark"
    ],
    "level": 44,
    "hp": 20235,
    "patk": 493,
    "pdef": 60,
    "matk": 493,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Moonlight",
        "type": "Elem"
      },
      {
        "name": "Solar Ray",
        "type": "Elem"
      }
    ],
    "steal": "Blessed Olive (M), Holy Water (M)",
    "drop": "Iron Ore",
    "immunities": "None"
  },
  {
    "id": "98846.0",
    "name": "Gold Remnant",
    "area": "Treasure Event Battle 2",
    "subArea": "Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Light"
    ],
    "level": 44,
    "hp": 15438,
    "patk": 493,
    "pdef": 60,
    "matk": 534,
    "mdef": 60,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Double Bite",
        "type": "Phys"
      },
      {
        "name": "Boulder Rain",
        "type": "Elem"
      }
    ],
    "steal": "Shiny Coin",
    "drop": "Sphinx Feather",
    "immunities": "Paralysis"
  },
  {
    "id": "98844.0",
    "name": "Light Revenant",
    "area": "Treasure Event Battle 3",
    "subArea": "Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Dark"
    ],
    "level": 44,
    "hp": 20235,
    "patk": 493,
    "pdef": 60,
    "matk": 493,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Moonlight",
        "type": "Elem"
      },
      {
        "name": "Solar Ray",
        "type": "Elem"
      }
    ],
    "steal": "Blessed Olive, Sunshard, Inspiring Plum Basket",
    "drop": "Star Fragment",
    "immunities": "Blind"
  },
  {
    "id": "98845.0",
    "name": "Ivory Remnant",
    "area": "Treasure Event Battle 3",
    "subArea": "Golden Palace: Lower Floor",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 44,
    "hp": 15438,
    "patk": 493,
    "pdef": 60,
    "matk": 534,
    "mdef": 60,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Repeated Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Midnight Sun",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb (M), Dragon Scale",
    "drop": "Kraken Ink",
    "immunities": "Curse, Petrification"
  },
  {
    "id": "98731.0",
    "name": "Giant Gator",
    "area": "An Encounter with Reime",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Fan",
      "Ice",
      "Light"
    ],
    "level": 40,
    "hp": 31022,
    "patk": 625,
    "pdef": 88,
    "matk": 522,
    "mdef": 72,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Cleave in Two",
        "type": "Phys"
      },
      {
        "name": "Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "Strong Sweep",
        "type": "Phys"
      },
      {
        "name": "Unearthly Roar",
        "type": "Phys"
      }
    ],
    "steal": "Meteorite, Antidote Herb (L), Beast Fang",
    "drop": "Phoenix Feather, Griffin Claw, Blessed Olive (M)",
    "immunities": "None"
  },
  {
    "id": "98906.0",
    "name": "Spiked Skink",
    "area": "An Encounter with Reime",
    "subArea": "Subterranean Arena",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Staff",
      "Dark"
    ],
    "level": 40,
    "hp": 22000,
    "patk": 590,
    "pdef": 60,
    "matk": 500,
    "mdef": 40,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Violent Charge",
        "type": "Phys"
      },
      {
        "name": "Strong Thorn Storm",
        "type": "Phys"
      }
    ],
    "steal": "Revitalizing Jam (L), Rare Beast Meat",
    "drop": "Soulstone, Phoenix Feather",
    "immunities": "Terror"
  },
  {
    "id": "98732.0",
    "name": "Barenga",
    "area": "An Encounter with Reime",
    "subArea": "Arena",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Light",
      "Dark"
    ],
    "level": 45,
    "hp": 59434,
    "patk": 656,
    "pdef": 88,
    "matk": 546,
    "mdef": 72,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Pounding Strike",
        "type": "Phys"
      },
      {
        "name": "Abide",
        "type": "Unknown"
      },
      {
        "name": "Flail",
        "type": "Phys"
      }
    ],
    "steal": "Moonstone",
    "drop": "Quality Beast Claw, Quality Beast Hide",
    "immunities": "Instant Death"
  },
  {
    "id": "98902.0",
    "name": "Barenga's Right Arm",
    "area": "An Encounter with Reime",
    "subArea": "Arena",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Wind"
    ],
    "level": 45,
    "hp": 15000,
    "patk": 620,
    "pdef": 65,
    "matk": 500,
    "mdef": 65,
    "skills": [
      {
        "name": "Sting",
        "type": "Phys"
      },
      {
        "name": "Levinfall",
        "type": "Elem"
      },
      {
        "name": "Triple Bite",
        "type": "Phys"
      }
    ],
    "steal": "Shadow Soulstone, Copper Ore, Revitalizing Jam",
    "drop": "Quality Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98903.0",
    "name": "Barenga's Left Arm",
    "area": "An Encounter with Reime",
    "subArea": "Arena",
    "type": "Regular",
    "shields": 5,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Wind"
    ],
    "level": 45,
    "hp": 13450,
    "patk": 620,
    "pdef": 65,
    "matk": 500,
    "mdef": 65,
    "skills": [
      {
        "name": "Pierce",
        "type": "Phys"
      },
      {
        "name": "Mighty Charge",
        "type": "Phys"
      },
      {
        "name": "Repeated Thrust",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Meat",
    "drop": "Quality Beast Claw",
    "immunities": "Curse, Instant Death"
  },
  {
    "id": "98733.0",
    "name": "Chilritta",
    "area": "An Encounter with Reime",
    "subArea": "Arena",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 50,
    "hp": 120000,
    "patk": 561,
    "pdef": 90,
    "matk": 650,
    "mdef": 80,
    "skills": [
      {
        "name": "Fireshot",
        "type": "Elem"
      },
      {
        "name": "Fire Storm",
        "type": "Elem"
      },
      {
        "name": "Concentration",
        "type": "Unknown"
      },
      {
        "name": "Embersoul's Grace",
        "type": "Unknown"
      },
      {
        "name": "Scorching Spell",
        "type": "Elem"
      }
    ],
    "steal": "Copper Ore, Minotaur Horn, Manticore Stinger",
    "drop": "Beast Hide, Antidote Herb, HP-Restoring Herb (L)",
    "immunities": "None"
  },
  {
    "id": "98904.0",
    "name": "Chilritta's #1 Apprentice",
    "area": "An Encounter with Reime",
    "subArea": "Arena",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Fan",
      "Ice"
    ],
    "level": 50,
    "hp": 32000,
    "patk": 530,
    "pdef": 65,
    "matk": 630,
    "mdef": 65,
    "skills": [
      {
        "name": "Slam",
        "type": "Phys"
      },
      {
        "name": "Impact",
        "type": "Phys"
      },
      {
        "name": "Multifire",
        "type": "Elem"
      }
    ],
    "steal": "Iron Ore",
    "drop": "Rusty Coin, Old Coin, Quality Beast Tusk",
    "immunities": "Terror, Silence"
  },
  {
    "id": "98905.0",
    "name": "Chilritta's #2 Apprentice",
    "area": "An Encounter with Reime",
    "subArea": "Arena",
    "type": "Regular",
    "shields": 6,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fan",
      "Light"
    ],
    "level": 50,
    "hp": 21075,
    "patk": 520,
    "pdef": 60,
    "matk": 610,
    "mdef": 60,
    "skills": [
      {
        "name": "Traumatic Bash",
        "type": "Phys"
      },
      {
        "name": "Trifold Bash",
        "type": "Phys"
      },
      {
        "name": "Brutal Bludgeon",
        "type": "Phys"
      },
      {
        "name": "Repeated Brutal Bludgeon",
        "type": "Phys"
      }
    ],
    "steal": "Minotaur Horn",
    "drop": "Manticore Stinger",
    "immunities": "Petrification, Sleep"
  },
  {
    "id": "98730.0",
    "name": "Reime",
    "area": "An Encounter with Reime",
    "subArea": "Arena",
    "type": "Regular",
    "shields": 29,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Fan",
      "Thunder"
    ],
    "level": 60,
    "hp": 440000,
    "patk": 789,
    "pdef": 98,
    "matk": 759,
    "mdef": 90,
    "skills": [
      {
        "name": "Vengeful Blade's Hilt",
        "type": "Unknown"
      },
      {
        "name": "Eye for an Eye",
        "type": "Phys"
      },
      {
        "name": "Vengeful Blade's Heart",
        "type": "Unknown"
      },
      {
        "name": "Eye for an Eye",
        "type": "Phys"
      },
      {
        "name": "Vengeful Blade's Eye",
        "type": "Unknown"
      },
      {
        "name": "Eye for an Eye",
        "type": "Phys"
      },
      {
        "name": "Open-Hand Strike",
        "type": "Phys"
      },
      {
        "name": "Twofold Slash",
        "type": "Phys"
      },
      {
        "name": "Master of Shadows",
        "type": "Elem"
      },
      {
        "name": "Circle Blade",
        "type": "Phys"
      },
      {
        "name": "Fading Shadow",
        "type": "Elem"
      },
      {
        "name": "Luminous Shroud",
        "type": "Phys"
      },
      {
        "name": "Illusory Twilight",
        "type": "Elem"
      },
      {
        "name": "Blink of an Eye",
        "type": "Unknown"
      },
      {
        "name": "Wild Fist Strike",
        "type": "Phys"
      },
      {
        "name": "Reckless Lotus Blade",
        "type": "Phys"
      }
    ],
    "steal": "Rusty Coin, Basilisk Eye, Phoenix Feather",
    "drop": "Gold Dust",
    "immunities": "None"
  },
  {
    "id": "98813.0",
    "name": "Light Elemental",
    "area": "An Assistant like No Other",
    "subArea": "Atlasdam Flats",
    "type": "Regular",
    "shields": 7,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 45,
    "hp": 14726,
    "patk": 448,
    "pdef": 54,
    "matk": 466,
    "mdef": 66,
    "skills": [
      {
        "name": "Light Shot",
        "type": "Elem"
      },
      {
        "name": "Repeated Light Shot",
        "type": "Elem"
      },
      {
        "name": "Wild Light Shot",
        "type": "Elem"
      }
    ],
    "steal": "SP-Restoring Nut (L), Healing Grape Bunch",
    "drop": "Healing Grape Bunch",
    "immunities": "None"
  },
  {
    "id": "98874.0",
    "name": "Immoral Scholar",
    "area": "An Assistant like No Other",
    "subArea": "Atlasdam Flats",
    "type": "Regular",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Fire",
      "Thunder"
    ],
    "level": 45,
    "hp": 38606,
    "patk": 480,
    "pdef": 50,
    "matk": 530,
    "mdef": 60,
    "skills": [
      {
        "name": "Icewind",
        "type": "Elem"
      },
      {
        "name": "Duskblight",
        "type": "Elem"
      },
      {
        "name": "Mind Surge",
        "type": "Unknown"
      },
      {
        "name": "Ancient Magic",
        "type": "Elem"
      }
    ],
    "steal": "Beast Hide, Healing Grape Bunch, Beast Meat",
    "drop": "Blessed Olive, Shiny Coin",
    "immunities": "None"
  },
  {
    "id": "98875.0",
    "name": "Immoral Scholar's Lackey",
    "area": "An Assistant like No Other",
    "subArea": "Atlasdam Flats",
    "type": "Regular",
    "shields": 10,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Fire",
      "Ice"
    ],
    "level": 45,
    "hp": 17500,
    "patk": 500,
    "pdef": 30,
    "matk": 450,
    "mdef": 25,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mind Sap",
        "type": "Unknown"
      },
      {
        "name": "Poison Dagger",
        "type": "Phys"
      },
      {
        "name": "Improved Magic",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life (M), Antidote Herb",
    "drop": "Basilisk Eye, Iron Ore",
    "immunities": "Curse, Blind"
  },
  {
    "id": "98876.0",
    "name": "Immoral Scholar's Lackey",
    "area": "An Assistant like No Other",
    "subArea": "Atlasdam Flats",
    "type": "Regular",
    "shields": 10,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Staff",
      "Fire",
      "Ice"
    ],
    "level": 45,
    "hp": 16000,
    "patk": 500,
    "pdef": 30,
    "matk": 450,
    "mdef": 25,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mind Sap",
        "type": "Unknown"
      },
      {
        "name": "Poison Dagger",
        "type": "Phys"
      },
      {
        "name": "Improved Magic",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water",
    "drop": "Cerberus Fang, Holy Water (L)",
    "immunities": "None"
  },
  {
    "id": "98817.0",
    "name": "Former Edoras Captain",
    "area": "The Blade of the Weak",
    "subArea": "Isle in the Middlesea",
    "type": "Regular",
    "shields": 8,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Tome",
      "Wind",
      "Dark"
    ],
    "level": 45,
    "hp": 58506,
    "patk": 563,
    "pdef": 60,
    "matk": 815,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Greatsword of Darkness",
        "type": "Elem"
      },
      {
        "name": "Charge!",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Tusk, Beast Tusk, Minotaur Horn",
    "drop": "HP-Restoring Herb (L)",
    "immunities": "None"
  },
  {
    "id": "98818.0",
    "name": "Former Edoras Soldier",
    "area": "The Blade of the Weak",
    "subArea": "Isle in the Middlesea",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Ice",
      "Dark"
    ],
    "level": 45,
    "hp": 22444,
    "patk": 497,
    "pdef": 60,
    "matk": 497,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Trifold Bash",
        "type": "Phys"
      },
      {
        "name": "Fiery Blow",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water (L)",
    "drop": "Beast Hide, Inspiring Plum Basket",
    "immunities": "None"
  },
  {
    "id": "98814.0",
    "name": "Forbidden Magic Guardian",
    "area": "Great Expectations",
    "subArea": "Forbidden Temple: Lower Floor",
    "type": "Boss",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Fan"
    ],
    "level": 45,
    "hp": 39004,
    "patk": 518,
    "pdef": 60,
    "matk": 555,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sturdy Sweep",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life, Antidote Herb, Beast Horn",
    "drop": "Herb, Revitalizing Jam, Griffin Claw",
    "immunities": "None"
  },
  {
    "id": "98815.0",
    "name": "Black Scarlet (Polearm)",
    "area": "What Remains of the Black Scarlet",
    "subArea": "Path to the Cave Of Origin",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Fire",
      "Wind"
    ],
    "level": 45,
    "hp": 14726,
    "patk": 466,
    "pdef": 66,
    "matk": 466,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Big Swing",
        "type": "Phys"
      },
      {
        "name": "Typhoon",
        "type": "Elem"
      },
      {
        "name": "Mighty Charge",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> draws their weapon!",
        "type": "Unknown"
      },
      {
        "name": "Runaway Stampede",
        "type": "Phys"
      }
    ],
    "steal": "Ancient Coin",
    "drop": "Revitalizing Jam (L)",
    "immunities": "None"
  },
  {
    "id": "98816.0",
    "name": "Black Scarlet (Hammer)",
    "area": "What Remains of the Black Scarlet",
    "subArea": "Path to the Cave Of Origin",
    "type": "Regular",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Tome",
      "Fire",
      "Dark"
    ],
    "level": 45,
    "hp": 13989,
    "patk": 466,
    "pdef": 60,
    "matk": 544,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Traumatic Bash",
        "type": "Phys"
      },
      {
        "name": "Wild Ebonstrike",
        "type": "Elem"
      },
      {
        "name": "Healing Grape (M)",
        "type": "Unknown"
      },
      {
        "name": "Protective Shield",
        "type": "Unknown"
      },
      {
        "name": "Protective Shield",
        "type": "Unknown"
      },
      {
        "name": "Protective Shield",
        "type": "Unknown"
      },
      {
        "name": "Protective Shield",
        "type": "Unknown"
      }
    ],
    "steal": "Wind Soulstone, Healing Grape",
    "drop": "Moonstone, EXP, SP-Restoring Nut (M)",
    "immunities": "Blind, Sleep"
  },
  {
    "id": "98811.0",
    "name": "Ruler of the Sands",
    "area": "Unnatural Tremors",
    "subArea": "Sweltering Cave",
    "type": "Regular",
    "shields": 20,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Wind",
      "Light"
    ],
    "level": 45,
    "hp": 52450,
    "patk": 590,
    "pdef": 66,
    "matk": 500,
    "mdef": 54,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Sand Strike",
        "type": "Phys"
      },
      {
        "name": "Wild Light Shot",
        "type": "Elem"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Flatten",
        "type": "Phys"
      },
      {
        "name": "Acid Spray",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life, Gold Dust, Quality Beast Fang",
    "drop": "Rusty Coin, Beast Claw, Phoenix Feather",
    "immunities": "None"
  },
  {
    "id": "98810.0",
    "name": "Abysmal One",
    "area": "In Search of What Remains",
    "subArea": "Sunken Ship",
    "type": "Regular",
    "shields": 25,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Thunder",
      "Light"
    ],
    "level": 55,
    "hp": 288580,
    "patk": 658,
    "pdef": 135,
    "matk": 658,
    "mdef": 120,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Fury",
        "type": "Unknown"
      },
      {
        "name": "Wring",
        "type": "Phys"
      },
      {
        "name": "Mass Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Quintuple Tentacle Bash",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Triple Tentacle Bash",
        "type": "Phys"
      }
    ],
    "steal": "Moonstone",
    "drop": "Ancient Coin",
    "immunities": "Curse"
  },
  {
    "id": "31801.0",
    "name": "Menacing Fallen Hornburg Knight",
    "area": "Treasure Event Battle 4",
    "subArea": "Hell: Hornburg Castle - West",
    "type": "Rare",
    "shields": 13,
    "weakness": "Tome",
    "weaknesses": [
      "Tome",
      "Fan",
      "Fire",
      "Wind"
    ],
    "level": 55,
    "hp": 54270,
    "patk": 594,
    "pdef": 49,
    "matk": 594,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Charge!",
        "type": "Unknown"
      },
      {
        "name": "Greatsword of Darkness",
        "type": "Elem"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Deathstrike",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Ice Soulstone",
    "drop": "Antidote Herb (L)",
    "immunities": "None"
  },
  {
    "id": "31802.0",
    "name": "Fallen Hornburg Soldier",
    "area": "Treasure Event Battle 4",
    "subArea": "Hell: Hornburg Castle - West",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 55,
    "hp": 33489,
    "patk": 552,
    "pdef": 49,
    "matk": 552,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Uncritical Eye",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Light Soulstone, Shadow Soulstone",
    "drop": "Leaf, Beast Fang, Revitalizing Jam",
    "immunities": "Instant Death"
  },
  {
    "id": "99130.0",
    "name": "Fallen Hornburg Soldier",
    "area": "Treasure Event Battle 4",
    "subArea": "Hell: Hornburg Castle - West",
    "type": "Regular",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Fan",
      "Thunder",
      "Dark"
    ],
    "level": 55,
    "hp": 33489,
    "patk": 552,
    "pdef": 49,
    "matk": 552,
    "mdef": 49,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrash",
        "type": "Phys"
      },
      {
        "name": "Uncritical Eye",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      }
    ],
    "steal": "Unicorn Horn, Rare Beast Fang, Rare Beast Claw",
    "drop": "Sunshard, Quality Beast Hide, Hydra Scale",
    "immunities": "None"
  },
  {
    "id": "98886.0",
    "name": "Warbringer's Phantom",
    "area": "The Eight Sacred Treasures",
    "subArea": "Isle of Heroes Past",
    "type": "Regular",
    "shields": 20,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 60,
    "hp": 195470,
    "patk": 660,
    "pdef": 260,
    "matk": 1,
    "mdef": 160,
    "skills": [
      {
        "name": "Art of the Sword",
        "type": "Phys"
      },
      {
        "name": "Art of the Polearm",
        "type": "Phys"
      },
      {
        "name": "Art of the Dagger",
        "type": "Phys"
      },
      {
        "name": "Art of the Axe",
        "type": "Phys"
      },
      {
        "name": "Art of the Staff",
        "type": "Phys"
      },
      {
        "name": "Art of the Tome",
        "type": "Phys"
      },
      {
        "name": "Art of the Fan",
        "type": "Phys"
      },
      {
        "name": "Prove your skill!",
        "type": "Unknown"
      },
      {
        "name": "Ultimate Arts",
        "type": "Phys"
      },
      {
        "name": "Art of the Wild Bow",
        "type": "Phys"
      },
      {
        "name": "Art of the Sweeping Bow",
        "type": "Phys"
      },
      {
        "name": "Cross Cleave",
        "type": "Phys"
      },
      {
        "name": "Rain of Arrows",
        "type": "Phys"
      },
      {
        "name": "Upending Strike",
        "type": "Phys"
      },
      {
        "name": "She summons three weapons!",
        "type": "Unknown"
      },
      {
        "name": "She summons three weapons!",
        "type": "Unknown"
      }
    ],
    "steal": "Light Soulstone, Ancient Coin",
    "drop": "Dragon Scale",
    "immunities": "Terror, Instant Death"
  },
  {
    "id": "98850.0",
    "name": "Demon Blade's Curse",
    "area": "An Indestructible Flame",
    "subArea": "Agapea",
    "type": "Boss",
    "shields": 25,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Staff",
      "Ice",
      "Light"
    ],
    "level": 65,
    "hp": 405000,
    "patk": 905,
    "pdef": 96,
    "matk": 957,
    "mdef": 160,
    "skills": [
      {
        "name": "It prepares to attack a target!",
        "type": "Unknown"
      },
      {
        "name": "It prepares to attack the party!",
        "type": "Unknown"
      },
      {
        "name": "Counter Magic",
        "type": "Unknown"
      },
      {
        "name": "Counter Weapon",
        "type": "Unknown"
      },
      {
        "name": "Dark Ember",
        "type": "Elem"
      },
      {
        "name": "Demolishing Black Flame",
        "type": "Elem"
      },
      {
        "name": "Cursed Strike",
        "type": "Phys"
      },
      {
        "name": "Triple Claws",
        "type": "Phys"
      },
      {
        "name": "Devastating Claws",
        "type": "Phys"
      },
      {
        "name": "Cursed Obliterating Blade",
        "type": "Elem"
      },
      {
        "name": "It prepares to attack a target!",
        "type": "Unknown"
      }
    ],
    "steal": "Minotaur Horn",
    "drop": "Old Coin, Star Fragment, Rare Beast Tusk",
    "immunities": "None"
  },
  {
    "id": "98042.0",
    "name": "Amatsukami no Orochi",
    "area": "Superboss",
    "subArea": "Cove of Clouds",
    "type": "Regular",
    "shields": 29,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 0,
    "hp": 1200000,
    "patk": 980,
    "pdef": 85,
    "matk": 960,
    "mdef": 85,
    "skills": [
      {
        "name": "Tail Lash",
        "type": "Phys"
      },
      {
        "name": "Levinstrike",
        "type": "Elem"
      },
      {
        "name": "Primal Rend",
        "type": "Phys"
      },
      {
        "name": "Withering Rend",
        "type": "Phys"
      },
      {
        "name": "Swift Rend",
        "type": "Phys"
      },
      {
        "name": "Primal Fang",
        "type": "Phys"
      },
      {
        "name": "Withering Fang",
        "type": "Phys"
      },
      {
        "name": "Swift Fang",
        "type": "Phys"
      },
      {
        "name": "Primal Shock",
        "type": "Phys"
      },
      {
        "name": "Withering Shock",
        "type": "Phys"
      },
      {
        "name": "Swift Shock",
        "type": "Phys"
      },
      {
        "name": "Primal Inferno",
        "type": "Elem"
      }
    ],
    "steal": "Nut",
    "drop": "SP-Restoring Nut",
    "immunities": "None"
  },
  {
    "id": "98898.0",
    "name": "Crimson Dragon Orb",
    "area": "Superboss",
    "subArea": "Cove of Clouds",
    "type": "Boss",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 0,
    "hp": 120000,
    "patk": 754,
    "pdef": 56,
    "matk": 756,
    "mdef": 50,
    "skills": [
      {
        "name": "Primal Embers",
        "type": "Elem"
      },
      {
        "name": "Withering Embers",
        "type": "Elem"
      },
      {
        "name": "Swift Embers",
        "type": "Elem"
      },
      {
        "name": "Physical Repelling Stance",
        "type": "Unknown"
      },
      {
        "name": "An enveloping light radiates from the crimson orb...",
        "type": "Unknown"
      },
      {
        "name": "Holy Crimson Realm",
        "type": "Unknown"
      },
      {
        "name": "Almighty Power",
        "type": "Unknown"
      },
      {
        "name": "Ruinous Almighty Power",
        "type": "Unknown"
      },
      {
        "name": "Encumbrance",
        "type": "Unknown"
      }
    ],
    "steal": "Rusty Coin, Fire Soulstone",
    "drop": "Soulstone, Nut, Revitalizing Jam (L)",
    "immunities": "None"
  },
  {
    "id": "98899.0",
    "name": "Cerulean Dragon Orb",
    "area": "Superboss",
    "subArea": "Cove of Clouds",
    "type": "Boss",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fan",
      "Fire",
      "Dark"
    ],
    "level": 0,
    "hp": 100000,
    "patk": 754,
    "pdef": 36,
    "matk": 756,
    "mdef": 65,
    "skills": [
      {
        "name": "Icy Tempest",
        "type": "Elem"
      },
      {
        "name": "Elemental Repelling Stance",
        "type": "Unknown"
      },
      {
        "name": "Holy Cerulean Realm",
        "type": "Unknown"
      },
      {
        "name": "Perception",
        "type": "Unknown"
      },
      {
        "name": "Divine Power",
        "type": "Unknown"
      },
      {
        "name": "Ruinous Divine Power",
        "type": "Unknown"
      },
      {
        "name": "An enveloping light radiates from the cerulean orb...",
        "type": "Unknown"
      }
    ],
    "steal": "Kraken Ink, Cerberus Fang",
    "drop": "Herb",
    "immunities": "Stun"
  },
  {
    "id": "98900.0",
    "name": "Golden Dragon Orb",
    "area": "Superboss",
    "subArea": "Cove of Clouds",
    "type": "Boss",
    "shields": 8,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 0,
    "hp": 80000,
    "patk": 754,
    "pdef": 47,
    "matk": 756,
    "mdef": 65,
    "skills": [
      {
        "name": "Primal Levinbolt",
        "type": "Elem"
      },
      {
        "name": "Withering Levinbolt",
        "type": "Elem"
      },
      {
        "name": "Swift Levinbolt",
        "type": "Elem"
      },
      {
        "name": "Holy Golden Realm",
        "type": "Unknown"
      },
      {
        "name": "Uncloak",
        "type": "Unknown"
      },
      {
        "name": "Banishment",
        "type": "Unknown"
      },
      {
        "name": "Ruinous Uncloaking",
        "type": "Unknown"
      },
      {
        "name": "An enveloping light radiates from the golden orb...",
        "type": "Unknown"
      }
    ],
    "steal": "Revitalizing Jam (M), Quality Beast Tusk, HP-Restoring Herb (L)",
    "drop": "Inspiring Plum Basket, Gold Dust",
    "immunities": "Curse"
  },
  {
    "id": "98901.0",
    "name": "Jade Dragon Orb",
    "area": "Superboss",
    "subArea": "Cove of Clouds",
    "type": "Boss",
    "shields": 13,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Thunder",
      "Light"
    ],
    "level": 0,
    "hp": 110000,
    "patk": 754,
    "pdef": 65,
    "matk": 756,
    "mdef": 75,
    "skills": [
      {
        "name": "Primal Tempest",
        "type": "Elem"
      },
      {
        "name": "Withering Tempest",
        "type": "Elem"
      },
      {
        "name": "Swift Tempest",
        "type": "Elem"
      },
      {
        "name": "Deterioration",
        "type": "Unknown"
      },
      {
        "name": "Holy Jade Realm",
        "type": "Unknown"
      },
      {
        "name": "Sanctification",
        "type": "Unknown"
      },
      {
        "name": "Ruinous Sanctification",
        "type": "Unknown"
      },
      {
        "name": "An enveloping light radiates from the jade orb...",
        "type": "Unknown"
      }
    ],
    "steal": "Fire Soulstone, HP-Restoring Herb (L), Cerberus Fang",
    "drop": "Sphinx Feather, Herb",
    "immunities": "Silence"
  },
  {
    "id": "98895.0",
    "name": "Rugis Surra",
    "area": "Extra",
    "subArea": "Banquet of Nought: Main Hall",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 65,
    "hp": 8888,
    "patk": 105,
    "pdef": 153,
    "matk": 100,
    "mdef": 153,
    "skills": [],
    "steal": "Beast Tusk, Inspiring Plum",
    "drop": "EXP, Quality Beast Claw",
    "immunities": "Paralysis, Stun"
  },
  {
    "id": "98896.0",
    "name": "Chubby Cait",
    "area": "Extra",
    "subArea": "Banquet of Nought: Main Hall",
    "type": "Regular",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 65,
    "hp": 80,
    "patk": 105,
    "pdef": 400,
    "matk": 100,
    "mdef": 550,
    "skills": [
      {
        "name": "Bag Toss",
        "type": "Phys"
      },
      {
        "name": "Mass Bag Toss",
        "type": "Phys"
      }
    ],
    "steal": "SP-Restoring Nut (M), HP-Restoring Herb, Beast Tusk",
    "drop": "SP-Restoring Nut (M)",
    "immunities": "None"
  },
  {
    "id": "98897.0",
    "name": "King Octopuff",
    "area": "Extra",
    "subArea": "Banquet of Nought: Main Hall",
    "type": "Boss",
    "shields": 4,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 65,
    "hp": 80,
    "patk": 105,
    "pdef": 400,
    "matk": 100,
    "mdef": 550,
    "skills": [
      {
        "name": "Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Big Leaf Toss",
        "type": "Phys"
      }
    ],
    "steal": "Phoenix Feather, Healing Grape Bunch, Quality Beast Claw",
    "drop": "Manticore Stinger, Blessed Olive",
    "immunities": "Poison"
  },
  {
    "id": "98857.0",
    "name": "Gigantes",
    "area": "Riverlands",
    "subArea": "Path to Waterpool Caves",
    "type": "Regular",
    "shields": 18,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fire",
      "Ice",
      "Thunder"
    ],
    "level": 35,
    "hp": 114684,
    "patk": 543,
    "pdef": 55,
    "matk": 532,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Abide",
        "type": "Unknown"
      },
      {
        "name": "Knock Down",
        "type": "Phys"
      },
      {
        "name": "Predation",
        "type": "Phys"
      },
      {
        "name": "Searing Flame",
        "type": "Elem"
      },
      {
        "name": "Fell Swoop",
        "type": "Phys"
      },
      {
        "name": "Jolt",
        "type": "Phys"
      },
      {
        "name": "Harden",
        "type": "Unknown"
      },
      {
        "name": "Harden Segment",
        "type": "Unknown"
      },
      {
        "name": "Harden Segment",
        "type": "Unknown"
      },
      {
        "name": "Gathering Power",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Fang, Revitalizing Jam (M), Old Coin",
    "drop": "Quality Beast Fang, Beast Horn",
    "immunities": "None"
  },
  {
    "id": "98882.0",
    "name": "Man-Eating Flora",
    "area": "Woodlands",
    "subArea": "Path to Herminia's Manse",
    "type": "Regular",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Light"
    ],
    "level": 35,
    "hp": 93558,
    "patk": 543,
    "pdef": 55,
    "matk": 512,
    "mdef": 55,
    "skills": [
      {
        "name": "<skl_user_name> changed their defensive form.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> changed their defensive form.",
        "type": "Unknown"
      },
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Black Magic",
        "type": "Elem"
      },
      {
        "name": "Shadow Magic",
        "type": "Elem"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Shackle",
        "type": "Phys"
      },
      {
        "name": "Devour Humans",
        "type": "Unknown"
      },
      {
        "name": "The man-eating flora lets out a piercing shriek!",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water (M), Rare Beast Fang",
    "drop": "Holy Water (L), Beast Horn, Iron Ore",
    "immunities": "None"
  },
  {
    "id": "98884.0",
    "name": "Man-Eating Virus",
    "area": "Woodlands",
    "subArea": "Path to Herminia's Manse",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire",
      "Wind"
    ],
    "level": 35,
    "hp": 31186,
    "patk": 484,
    "pdef": 55,
    "matk": 488,
    "mdef": 55,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Consume Life",
        "type": "Phys"
      },
      {
        "name": "Mold Burst",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water",
    "drop": "Phoenix Feather, Copper Ore, Cerberus Fang",
    "immunities": "Poison"
  },
  {
    "id": "98887.0",
    "name": "Tyrannodrake",
    "area": "Cliftlands",
    "subArea": "Gray Grotto: Depths",
    "type": "Regular",
    "shields": 22,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Light",
      "Dark"
    ],
    "level": 45,
    "hp": 179928,
    "patk": 640,
    "pdef": 60,
    "matk": 572,
    "mdef": 60,
    "skills": [
      {
        "name": "Bestial Roar",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Blinding Claw",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Physical Degradation",
        "type": "Unknown"
      },
      {
        "name": "Mutation",
        "type": "Unknown"
      },
      {
        "name": "Adaptive Evolution",
        "type": "Unknown"
      },
      {
        "name": "Adaptive Evolution",
        "type": "Unknown"
      },
      {
        "name": "Regeneration",
        "type": "Unknown"
      },
      {
        "name": "Invigoration",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> takes a deep breath.",
        "type": "Unknown"
      },
      {
        "name": "Rotting Breath",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Fang, Kraken Ink",
    "drop": "Gold",
    "immunities": "Instant Death, Blind"
  },
  {
    "id": "98889.0",
    "name": "Sand Lion",
    "area": "Sunlands",
    "subArea": "Finesand Ruins",
    "type": "Regular",
    "shields": 20,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Ice",
      "Light",
      "Dark"
    ],
    "level": 45,
    "hp": 184926,
    "patk": 616,
    "pdef": 60,
    "matk": 652,
    "mdef": 60,
    "skills": [
      {
        "name": "Falling Rocks",
        "type": "Phys"
      },
      {
        "name": "Great Sandstorm",
        "type": "Phys"
      },
      {
        "name": "Vice Grip",
        "type": "Phys"
      },
      {
        "name": "Boulder Rain",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s shell has hardened!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s shell has hardened further!",
        "type": "Unknown"
      },
      {
        "name": "Shifting Sand",
        "type": "Elem"
      },
      {
        "name": "Shifting Sand",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s body shudders!",
        "type": "Unknown"
      },
      {
        "name": "Turbid Stream",
        "type": "Elem"
      },
      {
        "name": "Harden",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life, Beast Claw, Beast Meat",
    "drop": "Rare Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98891.0",
    "name": "Auðnvarg",
    "area": "Flatlands",
    "subArea": "Atlasdam Flats",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Staff",
      "Fan",
      "Fire",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 55,
    "hp": 300403,
    "patk": 654,
    "pdef": 85,
    "matk": 645,
    "mdef": 85,
    "skills": [
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Beastly Diet",
        "type": "Phys"
      },
      {
        "name": "Shear Meat",
        "type": "Unknown"
      },
      {
        "name": "Rigid Venom Claw",
        "type": "Phys"
      },
      {
        "name": "Gouge Eyes",
        "type": "Phys"
      },
      {
        "name": "Shred Leg",
        "type": "Phys"
      },
      {
        "name": "Whirlwind Claw",
        "type": "Phys"
      },
      {
        "name": "Observe",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "Slice Off",
        "type": "Phys"
      }
    ],
    "steal": "Wind Soulstone, Quality Beast Hide",
    "drop": "Hydra Scale",
    "immunities": "Instant Death, Curse"
  },
  {
    "id": "98893.0",
    "name": "Battle-Worn Shark",
    "area": "Coastlands",
    "subArea": "The Outersea",
    "type": "Regular",
    "shields": 25,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Staff",
      "Tome",
      "Fire"
    ],
    "level": 55,
    "hp": 284336,
    "patk": 642,
    "pdef": 90,
    "matk": 642,
    "mdef": 90,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Terrifying Gaze",
        "type": "Unknown"
      },
      {
        "name": "Mandible Crush",
        "type": "Phys"
      },
      {
        "name": "Savage Mandible Crush",
        "type": "Phys"
      },
      {
        "name": "Feed",
        "type": "Phys"
      },
      {
        "name": "Observe",
        "type": "Unknown"
      },
      {
        "name": "Threaten",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "It sets its sights on injured prey.",
        "type": "Unknown"
      },
      {
        "name": "It sets his sights on frightened prey.",
        "type": "Unknown"
      },
      {
        "name": "Feast",
        "type": "Phys"
      },
      {
        "name": "Feeding Frenzy",
        "type": "Phys"
      }
    ],
    "steal": "Manticore Stinger, Quality Beast Tusk, Beast Fang",
    "drop": "Kraken Ink",
    "immunities": "Paralysis"
  },
  {
    "id": "98863.0",
    "name": "Sultravi",
    "area": "Highlands",
    "subArea": "Mt. Berecain",
    "type": "Regular",
    "shields": 17,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Ice",
      "Thunder",
      "Wind",
      "Dark"
    ],
    "level": 65,
    "hp": 191487,
    "patk": 713,
    "pdef": 350,
    "matk": 702,
    "mdef": 350,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Fiery Breath",
        "type": "Elem"
      },
      {
        "name": "Scorching Wings",
        "type": "Phys"
      },
      {
        "name": "Augmenting effects are erased by the purifying flames.",
        "type": "Unknown"
      },
      {
        "name": "Wild Rend",
        "type": "Phys"
      },
      {
        "name": "Eagle Claw",
        "type": "Phys"
      },
      {
        "name": "Scorching Steps",
        "type": "Phys"
      },
      {
        "name": "Incinerating Breath",
        "type": "Elem"
      },
      {
        "name": "Wings of Raging Fire",
        "type": "Phys"
      },
      {
        "name": "Immortal Breath",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "Blazing Aura",
        "type": "Unknown"
      },
      {
        "name": "Blazing Aura",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Hide, Dragon Scale, Chimera Fang",
    "drop": "Chimera Fang",
    "immunities": "None"
  },
  {
    "id": "98858.0",
    "name": "Gigantes",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 22,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Fire",
      "Ice",
      "Thunder"
    ],
    "level": 45,
    "hp": 147960,
    "patk": 572,
    "pdef": 60,
    "matk": 572,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Abide",
        "type": "Unknown"
      },
      {
        "name": "Knock Down",
        "type": "Phys"
      },
      {
        "name": "Predation",
        "type": "Phys"
      },
      {
        "name": "Searing Flame",
        "type": "Elem"
      },
      {
        "name": "Fell Swoop",
        "type": "Phys"
      },
      {
        "name": "Jolt",
        "type": "Phys"
      },
      {
        "name": "Harden",
        "type": "Unknown"
      },
      {
        "name": "Harden Segment",
        "type": "Unknown"
      },
      {
        "name": "Harden Segment",
        "type": "Unknown"
      },
      {
        "name": "Gathering Power",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Claw, Lightning Soulstone",
    "drop": "Herb",
    "immunities": "Instant Death, Confusion"
  },
  {
    "id": "98883.0",
    "name": "Man-Eating Flora",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 18,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Light"
    ],
    "level": 45,
    "hp": 125518,
    "patk": 627,
    "pdef": 60,
    "matk": 593,
    "mdef": 60,
    "skills": [
      {
        "name": "<skl_user_name> changed their defensive form.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> changed their defensive form.",
        "type": "Unknown"
      },
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Black Magic",
        "type": "Elem"
      },
      {
        "name": "Shadow Magic",
        "type": "Elem"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Shackle",
        "type": "Phys"
      },
      {
        "name": "Devour Humans",
        "type": "Unknown"
      },
      {
        "name": "The man-eating flora lets out a piercing shriek!",
        "type": "Unknown"
      }
    ],
    "steal": "Sphinx Feather, SP-Restoring Nut (L)",
    "drop": "SP-Restoring Nut",
    "immunities": "Instant Death"
  },
  {
    "id": "98885.0",
    "name": "Man-Eating Virus",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire",
      "Wind"
    ],
    "level": 45,
    "hp": 31186,
    "patk": 553,
    "pdef": 60,
    "matk": 470,
    "mdef": 60,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Consume Life",
        "type": "Phys"
      },
      {
        "name": "Mold Burst",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk, Star Fragment, Ice Soulstone",
    "drop": "Holy Water (L), Nut",
    "immunities": "Curse"
  },
  {
    "id": "98888.0",
    "name": "Tyrannodrake",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 26,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Fire",
      "Ice",
      "Light",
      "Dark"
    ],
    "level": 55,
    "hp": 370688,
    "patk": 702,
    "pdef": 65,
    "matk": 623,
    "mdef": 65,
    "skills": [
      {
        "name": "Bestial Roar",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Blinding Claw",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Eclipse",
        "type": "Elem"
      },
      {
        "name": "Physical Degradation",
        "type": "Unknown"
      },
      {
        "name": "Mutation",
        "type": "Unknown"
      },
      {
        "name": "Adaptive Evolution",
        "type": "Unknown"
      },
      {
        "name": "Adaptive Evolution",
        "type": "Unknown"
      },
      {
        "name": "Regeneration",
        "type": "Unknown"
      },
      {
        "name": "Invigoration",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> takes a deep breath.",
        "type": "Unknown"
      },
      {
        "name": "Rotting Breath",
        "type": "Elem"
      }
    ],
    "steal": "Kraken Ink, Olive of Life (M), Sphinx Feather",
    "drop": "Sphinx Feather",
    "immunities": "Poison"
  },
  {
    "id": "98890.0",
    "name": "Sand Lion",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 25,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Ice",
      "Light",
      "Dark"
    ],
    "level": 55,
    "hp": 375032,
    "patk": 678,
    "pdef": 65,
    "matk": 715,
    "mdef": 65,
    "skills": [
      {
        "name": "Falling Rocks",
        "type": "Phys"
      },
      {
        "name": "Great Sandstorm",
        "type": "Phys"
      },
      {
        "name": "Vice Grip",
        "type": "Phys"
      },
      {
        "name": "Boulder Rain",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s shell has hardened!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s shell has hardened further!",
        "type": "Unknown"
      },
      {
        "name": "Shifting Sand",
        "type": "Elem"
      },
      {
        "name": "Sand Avalanche",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s body shudders!",
        "type": "Unknown"
      },
      {
        "name": "Turbid Stream",
        "type": "Elem"
      },
      {
        "name": "Harden",
        "type": "Unknown"
      }
    ],
    "steal": "SP-Restoring Nut (M), Copper Ore",
    "drop": "SP-Restoring Nut, Griffin Claw",
    "immunities": "Terror, Instant Death"
  },
  {
    "id": "98892.0",
    "name": "Auðnvarg",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 28,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Staff",
      "Fan",
      "Fire",
      "Thunder",
      "Wind",
      "Light"
    ],
    "level": 65,
    "hp": 580600,
    "patk": 707,
    "pdef": 102,
    "matk": 701,
    "mdef": 102,
    "skills": [
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Beastly Diet",
        "type": "Phys"
      },
      {
        "name": "Shear Meat",
        "type": "Unknown"
      },
      {
        "name": "Rigid Venom Claw",
        "type": "Phys"
      },
      {
        "name": "Gouge Eyes",
        "type": "Phys"
      },
      {
        "name": "Shred Leg",
        "type": "Phys"
      },
      {
        "name": "Whirlwind Claw",
        "type": "Phys"
      },
      {
        "name": "Observe",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "Slice Off",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Fang, Light Soulstone",
    "drop": "Holy Water (L), HP-Restoring Herb (L), Quality Beast Meat",
    "immunities": "None"
  },
  {
    "id": "98894.0",
    "name": "Battle-Worn Shark",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 30,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Staff",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 65,
    "hp": 601203,
    "patk": 790,
    "pdef": 108,
    "matk": 790,
    "mdef": 108,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Terrifying Gaze",
        "type": "Unknown"
      },
      {
        "name": "Mandible Crush",
        "type": "Phys"
      },
      {
        "name": "Savage Mandible Crush",
        "type": "Phys"
      },
      {
        "name": "Feed",
        "type": "Phys"
      },
      {
        "name": "Observe",
        "type": "Unknown"
      },
      {
        "name": "Threaten",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "It sets its sights on injured prey.",
        "type": "Unknown"
      },
      {
        "name": "It sets his sights on frightened prey.",
        "type": "Unknown"
      },
      {
        "name": "Feast",
        "type": "Phys"
      },
      {
        "name": "Feeding Frenzy",
        "type": "Phys"
      }
    ],
    "steal": "HP-Restoring Herb (M), Rusty Coin, Rare Beast Claw",
    "drop": "JP",
    "immunities": "Curse, Sleep"
  },
  {
    "id": "98851.0",
    "name": "Sultravi",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 13,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fan",
      "Ice",
      "Thunder",
      "Wind",
      "Dark"
    ],
    "level": 75,
    "hp": 216396,
    "patk": 759,
    "pdef": 350,
    "matk": 747,
    "mdef": 350,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Fiery Breath",
        "type": "Elem"
      },
      {
        "name": "Scorching Wings",
        "type": "Phys"
      },
      {
        "name": "Augmenting effects are erased by the purifying flames.",
        "type": "Unknown"
      },
      {
        "name": "Wild Rend",
        "type": "Phys"
      },
      {
        "name": "Eagle Claw",
        "type": "Phys"
      },
      {
        "name": "Scorching Steps",
        "type": "Phys"
      },
      {
        "name": "Incinerating Breath",
        "type": "Elem"
      },
      {
        "name": "Wings of Raging Fire",
        "type": "Phys"
      },
      {
        "name": "Immortal Breath",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s flame takes shape and strikes.",
        "type": "Unknown"
      },
      {
        "name": "Blazing Aura",
        "type": "Unknown"
      },
      {
        "name": "Blazing Aura",
        "type": "Unknown"
      }
    ],
    "steal": "Meteorite",
    "drop": "Rare Beast Tusk",
    "immunities": "Blind"
  },
  {
    "id": "98852.0",
    "name": "Immortal Flame",
    "area": "Arena",
    "subArea": "Wishvale",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fan",
      "Ice",
      "Thunder"
    ],
    "level": 75,
    "hp": 28490,
    "patk": 604,
    "pdef": 300,
    "matk": 591,
    "mdef": 300,
    "skills": [
      {
        "name": "Incinerate",
        "type": "Elem"
      },
      {
        "name": "Dance of the Fiery Fowl",
        "type": "Elem"
      },
      {
        "name": "Combustion",
        "type": "Elem"
      }
    ],
    "steal": "Manticore Stinger",
    "drop": "Revitalizing Jam, Star Fragment, EXP",
    "immunities": "Confusion, Blind"
  },
  {
    "id": "98194.0",
    "name": "Menacing Frostwing Serpent",
    "area": "Frostlands",
    "subArea": "Snowshard Grotto",
    "type": "Rare",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Bow",
      "Thunder"
    ],
    "level": 10,
    "hp": 4498,
    "patk": 232,
    "pdef": 19,
    "matk": 166,
    "mdef": 19,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> is enraged!",
        "type": "Unknown"
      },
      {
        "name": "Double Claw",
        "type": "Phys"
      },
      {
        "name": "Strong Double Claw",
        "type": "Phys"
      },
      {
        "name": "Fierce Double Claw",
        "type": "Phys"
      },
      {
        "name": "Whiteout",
        "type": "Elem"
      },
      {
        "name": "Fierce Whiteout",
        "type": "Elem"
      },
      {
        "name": "Howling Whiteout",
        "type": "Elem"
      }
    ],
    "steal": "Star Fragment, Blessed Olive (M)",
    "drop": "Olive of Life (M), Holy Water (M), Quality Beast Hide",
    "immunities": "None"
  },
  {
    "id": "98191.0",
    "name": "Menacing Ettin Asp",
    "area": "Flatlands",
    "subArea": "Serpent's Burrow",
    "type": "Rare",
    "shields": 6,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Fire",
      "Light"
    ],
    "level": 11,
    "hp": 4552,
    "patk": 175,
    "pdef": 22,
    "matk": 175,
    "mdef": 22,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Mass Venomous Fang",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Griffin Claw",
    "drop": "Basilisk Eye, SP-Restoring Nut, Griffin Claw",
    "immunities": "None"
  },
  {
    "id": "98195.0",
    "name": "Menacing Demon Deer",
    "area": "Woodlands",
    "subArea": "Herminia's Manse: Entrance",
    "type": "Boss",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Thunder",
      "Dark"
    ],
    "level": 11,
    "hp": 6068,
    "patk": 244,
    "pdef": 30,
    "matk": 244,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Raging Frenzy",
        "type": "Phys"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Horn Smash",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Fang",
    "drop": "Quality Beast Claw",
    "immunities": "Confusion"
  },
  {
    "id": "98192.0",
    "name": "Menacing Ice Lizardman IV",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory: Entrance",
    "type": "Rare",
    "shields": 7,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Bow",
      "Wind"
    ],
    "level": 11,
    "hp": 6784,
    "patk": 244,
    "pdef": 38,
    "matk": 244,
    "mdef": 38,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "Wild Thrust",
        "type": "Phys"
      },
      {
        "name": "Storm Thrust",
        "type": "Elem"
      }
    ],
    "steal": "Ancient Coin",
    "drop": "HP-Restoring Herb (L), Meteorite",
    "immunities": "Paralysis, Silence"
  },
  {
    "id": "98193.0",
    "name": "Menacing Senior Fellow I",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory",
    "type": "Rare",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Tome",
      "Ice",
      "Light"
    ],
    "level": 11,
    "hp": 6068,
    "patk": 244,
    "pdef": 30,
    "matk": 244,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Light Slam",
        "type": "Phys"
      },
      {
        "name": "Bottled Flame",
        "type": "Elem"
      },
      {
        "name": "Wild Numbing Dust",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Lightning Soulstone, Rare Beast Meat",
    "drop": "Blessed Olive, Basilisk Eye",
    "immunities": "Silence, Paralysis"
  },
  {
    "id": "98190.0",
    "name": "Menacing Thespian (Leader)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Dressing Room",
    "type": "Rare",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Thunder",
      "Wind"
    ],
    "level": 11,
    "hp": 6068,
    "patk": 244,
    "pdef": 30,
    "matk": 244,
    "mdef": 30,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Mental Concentration",
        "type": "Unknown"
      },
      {
        "name": "Restore Health",
        "type": "Unknown"
      },
      {
        "name": "Bottled Flame",
        "type": "Elem"
      },
      {
        "name": "Wind Soulstone",
        "type": "Elem"
      }
    ],
    "steal": "Iron Ore, Hydra Scale",
    "drop": "Herb",
    "immunities": "Sleep, Poison"
  },
  {
    "id": "98200.0",
    "name": "Menacing Accursed Armor",
    "area": "Frostlands",
    "subArea": "Subterranean Snow Ruins",
    "type": "Rare",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Fire",
      "Wind"
    ],
    "level": 15,
    "hp": 7506,
    "patk": 292,
    "pdef": 28,
    "matk": 292,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      },
      {
        "name": "Wild Ripper",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Horrific Cleave",
        "type": "Phys"
      }
    ],
    "steal": "Beast Hide, Minotaur Horn",
    "drop": "Holy Water (M), Rare Beast Horn",
    "immunities": "Stun, Paralysis"
  },
  {
    "id": "98198.0",
    "name": "Menacing Wind Elemental",
    "area": "Flatlands",
    "subArea": "Knights Ardante Garrison",
    "type": "Rare",
    "shields": 7,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fire",
      "Thunder",
      "Dark"
    ],
    "level": 15,
    "hp": 7506,
    "patk": 209,
    "pdef": 28,
    "matk": 292,
    "mdef": 28,
    "skills": [
      {
        "name": "Gale Strike",
        "type": "Elem"
      },
      {
        "name": "Repeated Gale Strike",
        "type": "Elem"
      },
      {
        "name": "Mighty Gale",
        "type": "Elem"
      },
      {
        "name": "Great Wind",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Horn",
    "drop": "Quality Beast Fang, Olive of Life (M)",
    "immunities": "Silence"
  },
  {
    "id": "98199.0",
    "name": "Menacing Frost Bear",
    "area": "Frostlands",
    "subArea": "Emberglow Slopes",
    "type": "Rare",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Bow",
      "Tome",
      "Fire"
    ],
    "level": 15,
    "hp": 7506,
    "patk": 292,
    "pdef": 28,
    "matk": 292,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Wild Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Bloody Claw",
        "type": "Phys"
      },
      {
        "name": "Bloody Cleave",
        "type": "Phys"
      }
    ],
    "steal": "Inspiring Plum Basket, SP-Restoring Nut (M)",
    "drop": "Revitalizing Jam",
    "immunities": "Terror, Sleep"
  },
  {
    "id": "98197.0",
    "name": "Menacing Guard Dog",
    "area": "Woodlands",
    "subArea": "Auguste's Villa",
    "type": "Rare",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Fire",
      "Ice"
    ],
    "level": 15,
    "hp": 7506,
    "patk": 292,
    "pdef": 28,
    "matk": 292,
    "mdef": 28,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Jaw Crunch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Chew to Bits",
        "type": "Phys"
      },
      {
        "name": "Bloody Claw",
        "type": "Phys"
      },
      {
        "name": "Bloody Cleave",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Horn, Healing Grape, Rare Beast Hide",
    "drop": "Old Coin",
    "immunities": "Sleep"
  },
  {
    "id": "98196.0",
    "name": "Herminia's Mighty Soldier II",
    "area": "Woodlands",
    "subArea": "Herminia's Manse",
    "type": "Regular",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Thunder",
      "Wind"
    ],
    "level": 21,
    "hp": 10545,
    "patk": 364,
    "pdef": 31,
    "matk": 304,
    "mdef": 23,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Slice",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      }
    ],
    "steal": "Olive of Life, Beast Fang",
    "drop": "Soulstone, Hydra Scale, Olive",
    "immunities": "None"
  },
  {
    "id": "98204.0",
    "name": "Menacing Sticky Slug",
    "area": "Woodlands",
    "subArea": "Herminia's Manse: Cellars",
    "type": "Rare",
    "shields": 7,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Fire",
      "Wind"
    ],
    "level": 21,
    "hp": 8923,
    "patk": 304,
    "pdef": 31,
    "matk": 304,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Acid Spray",
        "type": "Phys"
      },
      {
        "name": "Poison Mucus",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> is more resistant to physical attacks!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is more resistant to magical attacks!",
        "type": "Unknown"
      }
    ],
    "steal": "Fire Soulstone",
    "drop": "Rare Beast Claw, Grape",
    "immunities": "Paralysis, Sleep"
  },
  {
    "id": "98201.0",
    "name": "Menacing Thespian (Ruffian)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Backstage",
    "type": "Rare",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Tome",
      "Thunder"
    ],
    "level": 21,
    "hp": 10545,
    "patk": 364,
    "pdef": 31,
    "matk": 364,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Stab Flurry",
        "type": "Phys"
      },
      {
        "name": "Strong Stab Flurry",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Hide",
    "drop": "Blessed Olive, Inspiring Plum Basket, Silver Nugget",
    "immunities": "Terror, Instant Death"
  },
  {
    "id": "98202.0",
    "name": "Menacing Thespian (Guard)",
    "area": "Flatlands",
    "subArea": "Amphitheatre: Underground",
    "type": "Rare",
    "shields": 8,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Staff",
      "Tome",
      "Thunder"
    ],
    "level": 21,
    "hp": 9734,
    "patk": 364,
    "pdef": 31,
    "matk": 364,
    "mdef": 31,
    "skills": [
      {
        "name": "Attack",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Strong Spirited Slash",
        "type": "Phys"
      }
    ],
    "steal": "Rusty Coin",
    "drop": "Beast Tusk, Moonstone",
    "immunities": "Blind"
  },
  {
    "id": "98210.0",
    "name": "Menacing Cetus Maximus",
    "area": "Coastlands",
    "subArea": "Isle of Orsa: Depths",
    "type": "Rare",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Thunder",
      "Wind"
    ],
    "level": 26,
    "hp": 16520,
    "patk": 509,
    "pdef": 30,
    "matk": 425,
    "mdef": 30,
    "skills": [
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Mass Slumberwave",
        "type": "Phys"
      },
      {
        "name": "Ice Dragon",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> is more resistant to physical attacks!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is more resistant to magical attacks!",
        "type": "Unknown"
      }
    ],
    "steal": "HP-Restoring Herb, Rusty Coin",
    "drop": "Beast Claw, Revitalizing Jam (L)",
    "immunities": "Terror, Silence"
  },
  {
    "id": "98208.0",
    "name": "Menacing Barnacle Tortoise",
    "area": "Coastlands",
    "subArea": "Middlesea",
    "type": "Rare",
    "shields": 13,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Bow",
      "Wind"
    ],
    "level": 30,
    "hp": 58560,
    "patk": 481,
    "pdef": 55,
    "matk": 418,
    "mdef": 55,
    "skills": [
      {
        "name": "Wild Bite",
        "type": "Phys"
      },
      {
        "name": "Enfeebling Bite",
        "type": "Phys"
      },
      {
        "name": "Spark",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> bolsters its defense!",
        "type": "Unknown"
      }
    ],
    "steal": "Holy Water, Blessed Olive, Beast Horn",
    "drop": "Holy Water (M), Moonstone",
    "immunities": "None"
  },
  {
    "id": "98211.0",
    "name": "Menacing Lightning Elemental",
    "area": "Cliftlands",
    "subArea": "Gray Grotto: Depths",
    "type": "Rare",
    "shields": 12,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Tome",
      "Fire",
      "Ice",
      "Wind",
      "Light"
    ],
    "level": 30,
    "hp": 21818,
    "patk": 406,
    "pdef": 35,
    "matk": 473,
    "mdef": 35,
    "skills": [
      {
        "name": "Lightning Shot",
        "type": "Elem"
      },
      {
        "name": "Repeated Thunderblast",
        "type": "Elem"
      },
      {
        "name": "Spark",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> bolsters its defense!",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life, Chimera Fang",
    "drop": "Gold",
    "immunities": "Paralysis, Poison"
  },
  {
    "id": "98212.0",
    "name": "Menacing Carmine Eagle",
    "area": "Cliftlands",
    "subArea": "Geist Canyon",
    "type": "Rare",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Tome",
      "Wind"
    ],
    "level": 31,
    "hp": 26706,
    "patk": 581,
    "pdef": 53,
    "matk": 485,
    "mdef": 53,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Thousand Scythes",
        "type": "Elem"
      },
      {
        "name": "It begins to store power...",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Horn, SP-Restoring Nut (L), Beast Fang",
    "drop": "Antidote Herb, JP, Gold Dust",
    "immunities": "Instant Death"
  },
  {
    "id": "98213.0",
    "name": "Menacing Master Thief II",
    "area": "Riverlands",
    "subArea": "Waterpool Caves",
    "type": "Rare",
    "shields": 16,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Thunder",
      "Light"
    ],
    "level": 33,
    "hp": 60995,
    "patk": 440,
    "pdef": 55,
    "matk": 466,
    "mdef": 44,
    "skills": [
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Running Slash",
        "type": "Phys"
      },
      {
        "name": "Armor Pierce",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Beast Fang, SP-Restoring Nut, Blessed Olive (M)",
    "drop": "Quality Beast Claw",
    "immunities": "Sleep"
  },
  {
    "id": "98214.0",
    "name": "Menacing Desert Worm",
    "area": "Sunlands",
    "subArea": "Finesand Ruins",
    "type": "Rare",
    "shields": 16,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Fan",
      "Dark"
    ],
    "level": 34,
    "hp": 62643,
    "patk": 457,
    "pdef": 55,
    "matk": 499,
    "mdef": 55,
    "skills": [
      {
        "name": "Whirling Attack",
        "type": "Phys"
      },
      {
        "name": "Swallow Whole",
        "type": "Phys"
      },
      {
        "name": "Sand Strike",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Rare Beast Fang, Rare Beast Horn",
    "drop": "Manticore Stinger, Kraken Ink",
    "immunities": "Confusion, Blind"
  },
  {
    "id": "98215.0",
    "name": "Menacing Highland Ratking I",
    "area": "Highlands",
    "subArea": "Valley of Death",
    "type": "Boss",
    "shields": 17,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Bow",
      "Fan",
      "Thunder",
      "Light"
    ],
    "level": 35,
    "hp": 62643,
    "patk": 465,
    "pdef": 60,
    "matk": 517,
    "mdef": 60,
    "skills": [
      {
        "name": "Grand Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Smash",
        "type": "Phys"
      },
      {
        "name": "Multi-Cleave",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Griffin Claw, Healing Grape Bunch, HP-Restoring Herb",
    "drop": "Soulstone, Inspiring Plum Basket, Shiny Coin",
    "immunities": "Curse"
  },
  {
    "id": "98217.0",
    "name": "Menacing Guardian Mk.II",
    "area": "Riverlands",
    "subArea": "Castle Riven",
    "type": "Boss",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Staff",
      "Fan"
    ],
    "level": 36,
    "hp": 31970,
    "patk": 545,
    "pdef": 55,
    "matk": 467,
    "mdef": 55,
    "skills": [
      {
        "name": "Wild Ripper",
        "type": "Phys"
      },
      {
        "name": "Sturdy Sweep",
        "type": "Phys"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> is more resistant to physical attacks!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is more resistant to magical attacks!",
        "type": "Unknown"
      }
    ],
    "steal": "Silver Nugget",
    "drop": "Blessed Olive (M), Rare Beast Claw, Inspiring Plum Basket",
    "immunities": "Blind"
  },
  {
    "id": "98218.0",
    "name": "Menacing Dreadwing",
    "area": "Cliftlands",
    "subArea": "Road to Castle Edoras",
    "type": "Rare",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Bow",
      "Wind",
      "Light"
    ],
    "level": 37,
    "hp": 34254,
    "patk": 544,
    "pdef": 55,
    "matk": 544,
    "mdef": 55,
    "skills": [
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Ice Claw",
        "type": "Elem"
      },
      {
        "name": "Mass Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> is more resistant to physical attacks!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is more resistant to magical attacks!",
        "type": "Unknown"
      }
    ],
    "steal": "Inspiring Plum Basket",
    "drop": "Blessed Olive (M), Minotaur Horn, Revitalizing Jam",
    "immunities": "Blind, Sleep"
  },
  {
    "id": "98216.0",
    "name": "Menacing Woolly Spider",
    "area": "Highlands",
    "subArea": "Cavern of Mists",
    "type": "Rare",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Fire",
      "Ice"
    ],
    "level": 38,
    "hp": 43428,
    "patk": 682,
    "pdef": 55,
    "matk": 487,
    "mdef": 55,
    "skills": [
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Wild Bite",
        "type": "Phys"
      },
      {
        "name": "Poison Bite",
        "type": "Phys"
      },
      {
        "name": "Toxic Breath",
        "type": "Phys"
      }
    ],
    "steal": "Copper Ore, Inspiring Plum, Healing Grape Bunch",
    "drop": "Quality Beast Horn, Rare Beast Hide",
    "immunities": "Paralysis, Blind"
  },
  {
    "id": "98224.0",
    "name": "Menacing Combatant (Warrior)",
    "area": "Woodlands",
    "subArea": "Subterranean Arena",
    "type": "Rare",
    "shields": 18,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Thunder",
      "Dark"
    ],
    "level": 41,
    "hp": 79599,
    "patk": 523,
    "pdef": 60,
    "matk": 558,
    "mdef": 60,
    "skills": [
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Pugnacity",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Antidote Herb (L), Old Coin, Beast Tusk",
    "drop": "SP-Restoring Nut (L), HP-Restoring Herb (M), Blessed Olive (L)",
    "immunities": "Silence"
  },
  {
    "id": "98222.0",
    "name": "Menacing Icky Slug",
    "area": "Woodlands",
    "subArea": "Great Tree's Tears",
    "type": "Rare",
    "shields": 19,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Tome",
      "Fan",
      "Light"
    ],
    "level": 41,
    "hp": 78083,
    "patk": 590,
    "pdef": 60,
    "matk": 600,
    "mdef": 60,
    "skills": [
      {
        "name": "Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Wild Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Dissolving Liquid",
        "type": "Phys"
      },
      {
        "name": "Mass Dissolving Liquid",
        "type": "Phys"
      },
      {
        "name": "Weakness Lock",
        "type": "Unknown"
      },
      {
        "name": "Weakness Lock",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life, Nut",
    "drop": "Quality Beast Hide, Healing Grape Bunch",
    "immunities": "Sleep, Silence"
  },
  {
    "id": "98225.0",
    "name": "Menacing River Froggen II",
    "area": "Riverlands",
    "subArea": "East Cyphlo Banks",
    "type": "Rare",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Staff",
      "Wind",
      "Dark"
    ],
    "level": 41,
    "hp": 63990,
    "patk": 607,
    "pdef": 60,
    "matk": 607,
    "mdef": 60,
    "skills": [
      {
        "name": "Body Bash",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Cleave in Two",
        "type": "Phys"
      },
      {
        "name": "Wild Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Unearthly Roar",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Hide, Ice Soulstone, Copper Ore",
    "drop": "Quality Beast Horn, Quality Beast Claw, Gold Dust",
    "immunities": "Poison"
  },
  {
    "id": "98226.0",
    "name": "Mighty Slayer Bug",
    "area": "Riverlands",
    "subArea": "Cyphlo Banks",
    "type": "Regular",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 41,
    "hp": 63990,
    "patk": 570,
    "pdef": 60,
    "matk": 607,
    "mdef": 60,
    "skills": [
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Shadow Sweep",
        "type": "Elem"
      },
      {
        "name": "Blinding Claw",
        "type": "Phys"
      },
      {
        "name": "Umbral Impact",
        "type": "Elem"
      },
      {
        "name": "Extreme Charge",
        "type": "Phys"
      }
    ],
    "steal": "Rare Beast Hide",
    "drop": "Leaf, Revitalizing Jam (L)",
    "immunities": "Petrification"
  },
  {
    "id": "98223.0",
    "name": "Menacing Reaper Crab",
    "area": "Riverlands",
    "subArea": "Misty Falls",
    "type": "Rare",
    "shields": 11,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Thunder",
      "Dark"
    ],
    "level": 43,
    "hp": 87606,
    "patk": 620,
    "pdef": 60,
    "matk": 557,
    "mdef": 60,
    "skills": [
      {
        "name": "Wild Bash",
        "type": "Phys"
      },
      {
        "name": "Wild Water Hammer",
        "type": "Elem"
      },
      {
        "name": "Double Claws",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Hard Slash",
        "type": "Phys"
      }
    ],
    "steal": "Inspiring Plum Basket",
    "drop": "Revitalizing Jam (L), Blessed Olive (M), JP",
    "immunities": "Paralysis, Silence"
  },
  {
    "id": "98227.0",
    "name": "Menacing Test Subject (Big Beast)",
    "area": "Frostlands",
    "subArea": "Emberglow Laboratory: Inner Chambers",
    "type": "Rare",
    "shields": 14,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fan",
      "Fire",
      "Wind",
      "Dark"
    ],
    "level": 41,
    "hp": 81120,
    "patk": 590,
    "pdef": 60,
    "matk": 558,
    "mdef": 60,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Wild Hard Claw",
        "type": "Phys"
      },
      {
        "name": "Bloody Claw",
        "type": "Phys"
      },
      {
        "name": "Bloody Cleave",
        "type": "Phys"
      }
    ],
    "steal": "Ice Soulstone, Dragon Scale, Griffin Claw",
    "drop": "Olive of Life (M)",
    "immunities": "Confusion"
  },
  {
    "id": "98229.0",
    "name": "Menacing Gold Wind Curator",
    "area": "Sunlands",
    "subArea": "Sufrataljah: Palace - Upper Floor",
    "type": "Rare",
    "shields": 16,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Thunder",
      "Dark"
    ],
    "level": 45,
    "hp": 94907,
    "patk": 633,
    "pdef": 65,
    "matk": 603,
    "mdef": 65,
    "skills": [
      {
        "name": "Mighty Gale",
        "type": "Elem"
      },
      {
        "name": "Gale Shot",
        "type": "Elem"
      },
      {
        "name": "Gale Impact",
        "type": "Elem"
      },
      {
        "name": "Strong Wild Gale Shot",
        "type": "Elem"
      },
      {
        "name": "Raging Wind",
        "type": "Elem"
      }
    ],
    "steal": "HP-Restoring Herb (L), Inspiring Plum",
    "drop": "Soulstone",
    "immunities": "Sleep"
  },
  {
    "id": "98548.0",
    "name": "Menacing Electric Catfish",
    "area": "Coastlands",
    "subArea": "Outersea",
    "type": "Rare",
    "shields": 22,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Axe",
      "Dark"
    ],
    "level": 44,
    "hp": 92400,
    "patk": 631,
    "pdef": 55,
    "matk": 593,
    "mdef": 55,
    "skills": [
      {
        "name": "Electrocute",
        "type": "Elem"
      },
      {
        "name": "Lightning Strike",
        "type": "Elem"
      },
      {
        "name": "Electrical Discharge",
        "type": "Elem"
      },
      {
        "name": "Thunderstorm",
        "type": "Elem"
      }
    ],
    "steal": "Kraken Ink, Unicorn Horn",
    "drop": "Revitalizing Jam, HP-Restoring Herb (L)",
    "immunities": "Curse, Paralysis"
  },
  {
    "id": "98243.0",
    "name": "Menacing Ice Remnant Mk.II",
    "area": "Coastlands",
    "subArea": "Shipwreck Island",
    "type": "Rare",
    "shields": 28,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Fire",
      "Wind"
    ],
    "level": 48,
    "hp": 95850,
    "patk": 630,
    "pdef": 54,
    "matk": 641,
    "mdef": 54,
    "skills": [
      {
        "name": "Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "Wild Bite",
        "type": "Phys"
      },
      {
        "name": "Mass Ice Thaw",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> is more resistant to physical attacks!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is more resistant to magical attacks!",
        "type": "Unknown"
      }
    ],
    "steal": "Olive of Life (M), SP-Restoring Nut, Beast Hide",
    "drop": "Grape",
    "immunities": "Sleep"
  },
  {
    "id": "98232.0",
    "name": "Menacing Cleaving Armor",
    "area": "Coastlands",
    "subArea": "Grandport Sewers: Depths",
    "type": "Rare",
    "shields": 12,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Staff",
      "Thunder",
      "Light"
    ],
    "level": 45,
    "hp": 117992,
    "patk": 653,
    "pdef": 65,
    "matk": 653,
    "mdef": 65,
    "skills": [
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Strong Slash",
        "type": "Phys"
      },
      {
        "name": "Two-Tiered Slash",
        "type": "Phys"
      },
      {
        "name": "Sweep",
        "type": "Phys"
      },
      {
        "name": "Horrific Cleave",
        "type": "Phys"
      }
    ],
    "steal": "Beast Hide, Unicorn Horn, Manticore Stinger",
    "drop": "Soulstone, Blessed Olive (M)",
    "immunities": "None"
  },
  {
    "id": "98230.0",
    "name": "Menacing Cait (Snow)",
    "area": "Frostlands",
    "subArea": "Valley of the Flame",
    "type": "Rare",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 45,
    "hp": 30,
    "patk": 559,
    "pdef": 999,
    "matk": 559,
    "mdef": 999,
    "skills": [
      {
        "name": "Leaf Toss",
        "type": "Phys"
      },
      {
        "name": "Big Leaf Toss",
        "type": "Phys"
      }
    ],
    "steal": "Blessed Olive, Beast Hide, Sphinx Feather",
    "drop": "Star Fragment, Griffin Claw",
    "immunities": "Stun"
  },
  {
    "id": "98231.0",
    "name": "Mighty Ice Lizardman VI",
    "area": "Frostlands",
    "subArea": "Cave Of Origin",
    "type": "Regular",
    "shields": 22,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Fire",
      "Wind"
    ],
    "level": 45,
    "hp": 112860,
    "patk": 568,
    "pdef": 65,
    "matk": 603,
    "mdef": 65,
    "skills": [
      {
        "name": "Double Stab",
        "type": "Phys"
      },
      {
        "name": "Inspiration",
        "type": "Unknown"
      },
      {
        "name": "Rush Stab",
        "type": "Phys"
      },
      {
        "name": "Ice Dragon",
        "type": "Elem"
      },
      {
        "name": "Strong Sweep",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk, HP-Restoring Herb, Herb",
    "drop": "Revitalizing Jam (M), Inspiring Plum Basket, Rare Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98234.0",
    "name": "Menacing Master Thief III",
    "area": "Woodlands",
    "subArea": "Herminia's Former Manse",
    "type": "Rare",
    "shields": 12,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Ice",
      "Light"
    ],
    "level": 47,
    "hp": 114807,
    "patk": 579,
    "pdef": 65,
    "matk": 631,
    "mdef": 65,
    "skills": [
      {
        "name": "Wide Leg Sweep",
        "type": "Phys"
      },
      {
        "name": "Hack",
        "type": "Phys"
      },
      {
        "name": "Wild Poison Blade",
        "type": "Phys"
      },
      {
        "name": "Strip Armaments",
        "type": "Unknown"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Chimera Fang",
    "drop": "Holy Water, Revitalizing Jam",
    "immunities": "Poison, Stun"
  },
  {
    "id": "98235.0",
    "name": "Menacing Ivory Revenant",
    "area": "Sunlands",
    "subArea": "Golden Palace: Upper Floor",
    "type": "Rare",
    "shields": 14,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Dark"
    ],
    "level": 49,
    "hp": 124800,
    "patk": 701,
    "pdef": 65,
    "matk": 701,
    "mdef": 65,
    "skills": [
      {
        "name": "Brutal Bash",
        "type": "Phys"
      },
      {
        "name": "Luminance",
        "type": "Elem"
      },
      {
        "name": "Solar Eclipse",
        "type": "Elem"
      },
      {
        "name": "Overclock",
        "type": "Unknown"
      },
      {
        "name": "Weakness Lock",
        "type": "Unknown"
      },
      {
        "name": "Weakness Lock",
        "type": "Unknown"
      }
    ],
    "steal": "Sphinx Feather",
    "drop": "Quality Beast Meat",
    "immunities": "None"
  },
  {
    "id": "98236.0",
    "name": "Menacing Gold Revenant",
    "area": "Sunlands",
    "subArea": "Golden Palace: Lower Floor",
    "type": "Rare",
    "shields": 22,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Dark"
    ],
    "level": 49,
    "hp": 104643,
    "patk": 590,
    "pdef": 65,
    "matk": 651,
    "mdef": 65,
    "skills": [
      {
        "name": "Brutal Bash",
        "type": "Phys"
      },
      {
        "name": "Impact",
        "type": "Phys"
      },
      {
        "name": "Meteor Storm",
        "type": "Elem"
      },
      {
        "name": "Physical Counter Stance",
        "type": "Unknown"
      },
      {
        "name": "Magic Counter Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Hide, HP-Restoring Herb (M)",
    "drop": "SP-Restoring Nut (L), Quality Beast Fang, Rare Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98240.0",
    "name": "Menacing Ettin Boa",
    "area": "Coastlands",
    "subArea": "Sea Cavern",
    "type": "Rare",
    "shields": 26,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Fire",
      "Light"
    ],
    "level": 50,
    "hp": 139379,
    "patk": 653,
    "pdef": 70,
    "matk": 607,
    "mdef": 70,
    "skills": [
      {
        "name": "Double Bite",
        "type": "Phys"
      },
      {
        "name": "Mass Venomous Fang",
        "type": "Phys"
      },
      {
        "name": "Infernal Shot",
        "type": "Elem"
      },
      {
        "name": "Raging Strike",
        "type": "Phys"
      },
      {
        "name": "Two-Headed Assault Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Horn, Revitalizing Jam",
    "drop": "EXP",
    "immunities": "None"
  },
  {
    "id": "98228.0",
    "name": "Menacing Stormy Sea Birdking I",
    "area": "Coastlands",
    "subArea": "Sea Cavern",
    "type": "Boss",
    "shields": 14,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Bow",
      "Tome",
      "Thunder"
    ],
    "level": 50,
    "hp": 134524,
    "patk": 713,
    "pdef": 65,
    "matk": 713,
    "mdef": 65,
    "skills": [
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Hack",
        "type": "Phys"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Fiery Blow",
        "type": "Phys"
      },
      {
        "name": "Trifold Bash",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Rare Beast Tusk",
    "drop": "Rare Beast Horn, Quality Beast Tusk",
    "immunities": "None"
  },
  {
    "id": "98209.0",
    "name": "Menacing Treasure Bones",
    "area": "Coastlands",
    "subArea": "Isle in the Middlesea",
    "type": "Rare",
    "shields": 26,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Axe",
      "Tome",
      "Fire",
      "Thunder"
    ],
    "level": 54,
    "hp": 168642,
    "patk": 752,
    "pdef": 65,
    "matk": 667,
    "mdef": 65,
    "skills": [
      {
        "name": "Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Horrific Claw",
        "type": "Phys"
      },
      {
        "name": "Bone Toss",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> bolsters its defense!",
        "type": "Unknown"
      }
    ],
    "steal": "Dragon Scale, Quality Beast Meat, Antidote Herb",
    "drop": "Beast Fang",
    "immunities": "None"
  },
  {
    "id": "98241.0",
    "name": "Menacing Stormy Sea Birdking II",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: West",
    "type": "Boss",
    "shields": 14,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Tome",
      "Thunder"
    ],
    "level": 55,
    "hp": 154128,
    "patk": 722,
    "pdef": 58,
    "matk": 580,
    "mdef": 58,
    "skills": [
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Wind Slash",
        "type": "Elem"
      },
      {
        "name": "Spin Attack",
        "type": "Phys"
      },
      {
        "name": "Fiery Blow",
        "type": "Phys"
      },
      {
        "name": "Trifold Bash",
        "type": "Phys"
      }
    ],
    "steal": "Chimera Fang",
    "drop": "HP-Restoring Herb (L), HP-Restoring Herb, Phoenix Feather",
    "immunities": "Poison, Confusion"
  },
  {
    "id": "98244.0",
    "name": "Menacing Ice Elemental",
    "area": "Coastlands",
    "subArea": "Isle in the Outersea: East",
    "type": "Rare",
    "shields": 29,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Fire",
      "Thunder",
      "Wind"
    ],
    "level": 55,
    "hp": 115101,
    "patk": 690,
    "pdef": 58,
    "matk": 715,
    "mdef": 58,
    "skills": [
      {
        "name": "Gelid Strike",
        "type": "Elem"
      },
      {
        "name": "Repeated Gelid Strike",
        "type": "Elem"
      },
      {
        "name": "Absolute Zero",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name> bolsters its defense!",
        "type": "Unknown"
      }
    ],
    "steal": "Rusty Coin, Rare Beast Claw, SP-Restoring Nut",
    "drop": "Gold, Antidote Herb (M), Quality Beast Claw",
    "immunities": "None"
  },
  {
    "id": "98233.0",
    "name": "Menacing Deadly Chameleon",
    "area": "Highlands",
    "subArea": "Sweltering Cave",
    "type": "Rare",
    "shields": 12,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Bow",
      "Fire"
    ],
    "level": 50,
    "hp": 120120,
    "patk": 647,
    "pdef": 65,
    "matk": 658,
    "mdef": 65,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Expel Mucus",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s weaknesses have changed!",
        "type": "Unknown"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      }
    ],
    "steal": "Antidote Herb (M)",
    "drop": "Holy Water, HP-Restoring Herb (M)",
    "immunities": "None"
  },
  {
    "id": "98237.0",
    "name": "Menacing Quartz Turtle",
    "area": "Highlands",
    "subArea": "Mt. Berecain",
    "type": "Rare",
    "shields": 15,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Wind",
      "Light"
    ],
    "level": 48,
    "hp": 123200,
    "patk": 675,
    "pdef": 65,
    "matk": 675,
    "mdef": 65,
    "skills": [
      {
        "name": "Wild Bite",
        "type": "Phys"
      },
      {
        "name": "Boulder Rain",
        "type": "Elem"
      },
      {
        "name": "Extreme Charge",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> bolsters its defense!",
        "type": "Unknown"
      }
    ],
    "steal": "Kraken Ink",
    "drop": "HP-Restoring Herb (L), HP-Restoring Herb, Revitalizing Jam (L)",
    "immunities": "Stun"
  },
  {
    "id": "98238.0",
    "name": "Menacing Ashen Remnant",
    "area": "Highlands",
    "subArea": "Forbidden Temple: Upper Floor",
    "type": "Rare",
    "shields": 14,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Axe",
      "Ice",
      "Light"
    ],
    "level": 49,
    "hp": 124800,
    "patk": 701,
    "pdef": 54,
    "matk": 701,
    "mdef": 54,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Earth Cleave",
        "type": "Elem"
      },
      {
        "name": "Bite",
        "type": "Phys"
      },
      {
        "name": "Solar Eclipse",
        "type": "Elem"
      },
      {
        "name": "Bloody Blaze",
        "type": "Elem"
      },
      {
        "name": "Non-weak Point Counter",
        "type": "Unknown"
      },
      {
        "name": "Eye for an Eye",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Hide, Healing Grape Bunch",
    "drop": "Rare Beast Hide, Hydra Scale, Cerberus Fang",
    "immunities": "Silence"
  },
  {
    "id": "98239.0",
    "name": "Menacing Blood Revenant",
    "area": "Highlands",
    "subArea": "Forbidden Temple: Lower Floor",
    "type": "Rare",
    "shields": 26,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Staff",
      "Ice"
    ],
    "level": 49,
    "hp": 108630,
    "patk": 745,
    "pdef": 75,
    "matk": 681,
    "mdef": 75,
    "skills": [
      {
        "name": "Brutal Bash",
        "type": "Phys"
      },
      {
        "name": "Infernal Shot",
        "type": "Elem"
      },
      {
        "name": "Inferno",
        "type": "Elem"
      },
      {
        "name": "Overclock",
        "type": "Unknown"
      },
      {
        "name": "Weakness Lock",
        "type": "Unknown"
      },
      {
        "name": "Weakness Lock",
        "type": "Unknown"
      }
    ],
    "steal": "Quality Beast Horn, Antidote Herb (L), Blessed Olive (L)",
    "drop": "Quality Beast Hide",
    "immunities": "Blind, Curse"
  },
  {
    "id": "98313.0",
    "name": "Menacing Fallen Edoras Knight I",
    "area": "Cliftlands",
    "subArea": "Hell: Geist Canyon South",
    "type": "Rare",
    "shields": 14,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Fan",
      "Ice",
      "Dark"
    ],
    "level": 54,
    "hp": 141300,
    "patk": 570,
    "pdef": 57,
    "matk": 570,
    "mdef": 57,
    "skills": [
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Spirit Reaper",
        "type": "Phys"
      },
      {
        "name": "Death's Blade",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Blade Smash",
        "type": "Phys"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Spirit Reaper",
        "type": "Phys"
      },
      {
        "name": "Death's Blade",
        "type": "Phys"
      }
    ],
    "steal": "Unicorn Horn, Inspiring Plum Basket, Olive of Life",
    "drop": "Rare Beast Hide, Beast Meat",
    "immunities": "None"
  },
  {
    "id": "98314.0",
    "name": "Menacing Fallen Direfang",
    "area": "Woodlands",
    "subArea": "Hell: Path to White Grape Hill",
    "type": "Rare",
    "shields": 22,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Ice",
      "Light"
    ],
    "level": 56,
    "hp": 215645,
    "patk": 743,
    "pdef": 85,
    "matk": 711,
    "mdef": 85,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Crimson Fang",
        "type": "Phys"
      },
      {
        "name": "Leeching Rake",
        "type": "Phys"
      },
      {
        "name": "Wild Crimson Fang",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Rampage",
        "type": "Phys"
      },
      {
        "name": "Crimson Fang",
        "type": "Phys"
      },
      {
        "name": "Leeching Rake",
        "type": "Phys"
      }
    ],
    "steal": "Copper Ore, Chimera Fang, Hydra Scale",
    "drop": "SP-Restoring Nut, Rare Beast Horn, Rare Beast Tusk",
    "immunities": "Confusion, Petrification"
  },
  {
    "id": "98245.0",
    "name": "Menacing Crested Portly Penguin",
    "area": "Coastlands",
    "subArea": "Sunken Ship",
    "type": "Rare",
    "shields": 34,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Dagger",
      "Axe",
      "Bow",
      "Staff",
      "Tome",
      "Fire",
      "Ice",
      "Thunder",
      "Wind",
      "Light",
      "Dark"
    ],
    "level": 70,
    "hp": 336000,
    "patk": 829,
    "pdef": 85,
    "matk": 835,
    "mdef": 85,
    "skills": [
      {
        "name": "Sunshine",
        "type": "Elem"
      },
      {
        "name": "Rainstorm Shot",
        "type": "Phys"
      },
      {
        "name": "Thrust",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name>'s weaknesses have changed!",
        "type": "Unknown"
      },
      {
        "name": "Rainbow Flash",
        "type": "Elem"
      }
    ],
    "steal": "Sphinx Feather, Ancient Coin, Rare Beast Horn",
    "drop": "Iron Ore",
    "immunities": "Sleep, Poison"
  },
  {
    "id": "98320.0",
    "name": "Menacing Fallen Hornburg Knight",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Castle - West",
    "type": "Rare",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Axe",
      "Fan",
      "Ice",
      "Light"
    ],
    "level": 60,
    "hp": 200901,
    "patk": 614,
    "pdef": 85,
    "matk": 572,
    "mdef": 85,
    "skills": [
      {
        "name": "Wild Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Charge!",
        "type": "Unknown"
      },
      {
        "name": "Greatsword of Darkness",
        "type": "Elem"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      },
      {
        "name": "Deathstrike",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Wild Shadowshot",
        "type": "Elem"
      },
      {
        "name": "Greatsword of Darkness",
        "type": "Elem"
      },
      {
        "name": "Spirited Slash",
        "type": "Phys"
      }
    ],
    "steal": "Quality Beast Tusk, Rare Beast Horn",
    "drop": "Rare Beast Tusk",
    "immunities": "Blind"
  },
  {
    "id": "98321.0",
    "name": "Menacing Sacred Flame Guardian",
    "area": "Highlands",
    "subArea": "Hell: Hornburg Castle - Eastern Central Area",
    "type": "Boss",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Spear",
      "Thunder",
      "Dark"
    ],
    "level": 60,
    "hp": 157458,
    "patk": 663,
    "pdef": 51,
    "matk": 672,
    "mdef": 61,
    "skills": [
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Light Slash",
        "type": "Elem"
      },
      {
        "name": "Greataxe of Light",
        "type": "Elem"
      },
      {
        "name": "Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "Amputation",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is more resistant to physical attacks!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> is more resistant to magical attacks!",
        "type": "Unknown"
      },
      {
        "name": "Wild Cut",
        "type": "Phys"
      },
      {
        "name": "Light Slash",
        "type": "Elem"
      },
      {
        "name": "Greataxe of Light",
        "type": "Elem"
      }
    ],
    "steal": "Rare Beast Claw, Quality Beast Horn",
    "drop": "Copper Ore, Rare Beast Hide, Star Fragment",
    "immunities": "Confusion, Sleep"
  },
  {
    "id": "98322.0",
    "name": "Menacing Fallen Monster",
    "area": "The Gate of Finis",
    "subArea": "Corridors of Contrition: Back Halls",
    "type": "Rare",
    "shields": 24,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Light"
    ],
    "level": 64,
    "hp": 197632,
    "patk": 627,
    "pdef": 64,
    "matk": 550,
    "mdef": 64,
    "skills": [
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Furious Embrace",
        "type": "Phys"
      },
      {
        "name": "Doping",
        "type": "Unknown"
      },
      {
        "name": "Berserker Blow",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> begins to lose control...",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Raging Mighty Charge",
        "type": "Phys"
      },
      {
        "name": "Scratch",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Furious Embrace",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Healing Grape Bunch, Beast Fang, Herb",
    "drop": "Silver Nugget",
    "immunities": "None"
  },
  {
    "id": "98324.0",
    "name": "Menacing Infernal Sludge",
    "area": "The Gate of Finis",
    "subArea": "The Bridge Beyond",
    "type": "Rare",
    "shields": 24,
    "weakness": "Staff",
    "weaknesses": [
      "Staff",
      "Tome",
      "Fire",
      "Ice",
      "Light"
    ],
    "level": 64,
    "hp": 142800,
    "patk": 681,
    "pdef": 64,
    "matk": 605,
    "mdef": 64,
    "skills": [
      {
        "name": "Brutal Bash",
        "type": "Phys"
      },
      {
        "name": "Rush",
        "type": "Phys"
      },
      {
        "name": "Mass Dissolving Liquid",
        "type": "Phys"
      },
      {
        "name": "Entwine",
        "type": "Phys"
      },
      {
        "name": "<skl_user_name> moves quickly!",
        "type": "Unknown"
      },
      {
        "name": "Another infernal refuse oozes out!",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Brutal Bash",
        "type": "Phys"
      },
      {
        "name": "Rush",
        "type": "Phys"
      },
      {
        "name": "Mass Dissolving Liquid",
        "type": "Phys"
      },
      {
        "name": "Entwine",
        "type": "Phys"
      }
    ],
    "steal": "Sphinx Feather, Holy Water (M)",
    "drop": "Revitalizing Jam (L), Gold Dust, Grape",
    "immunities": "None"
  },
  {
    "id": "98325.0",
    "name": "Menacing Fallen Deviant II",
    "area": "The Gate of Finis",
    "subArea": "Crimson River Traverse",
    "type": "Rare",
    "shields": 24,
    "weakness": "Dagger",
    "weaknesses": [
      "Dagger",
      "Bow",
      "Fan",
      "Light"
    ],
    "level": 64,
    "hp": 166260,
    "patk": 681,
    "pdef": 64,
    "matk": 605,
    "mdef": 64,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Flatten",
        "type": "Phys"
      },
      {
        "name": "Thrice Rent",
        "type": "Phys"
      },
      {
        "name": "Gather",
        "type": "Unknown"
      },
      {
        "name": "Restore",
        "type": "Unknown"
      },
      {
        "name": "Deadly Spores",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name> roars in anguish!",
        "type": "Unknown"
      },
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Flatten",
        "type": "Phys"
      },
      {
        "name": "Thrice Rent",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Ancient Coin, Gold Dust, Olive of Life",
    "drop": "Kraken Ink, Soulstone, Cerberus Fang",
    "immunities": "Stun"
  },
  {
    "id": "98326.0",
    "name": "Sanct Oliphant",
    "area": "The Heavens",
    "subArea": "Seas of Servility: Hollow Path",
    "type": "Regular",
    "shields": 25,
    "weakness": "Axe",
    "weaknesses": [
      "Axe",
      "Bow",
      "Staff",
      "Fire",
      "Thunder"
    ],
    "level": 78,
    "hp": 313122,
    "patk": 711,
    "pdef": 85,
    "matk": 688,
    "mdef": 85,
    "skills": [
      {
        "name": "Charge",
        "type": "Phys"
      },
      {
        "name": "Steel Defenses",
        "type": "Unknown"
      },
      {
        "name": "Bam!",
        "type": "Phys"
      },
      {
        "name": "Icebomb",
        "type": "Elem"
      },
      {
        "name": "Divine Seasplitting Blow",
        "type": "Phys"
      },
      {
        "name": "Non-weak Point Intercept Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      },
      {
        "name": "Bam!",
        "type": "Phys"
      },
      {
        "name": "Icebomb",
        "type": "Elem"
      },
      {
        "name": "Divine Seasplitting Blow",
        "type": "Phys"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Meteorite, Quality Beast Claw",
    "drop": "Quality Beast Horn, Rare Beast Horn, Gold",
    "immunities": "None"
  },
  {
    "id": "98328.0",
    "name": "Sanct Garmr",
    "area": "The Heavens",
    "subArea": "Sands of Rapacity",
    "type": "Regular",
    "shields": 24,
    "weakness": "Spear",
    "weaknesses": [
      "Spear",
      "Dagger",
      "Ice",
      "Wind"
    ],
    "level": 78,
    "hp": 293152,
    "patk": 642,
    "pdef": 85,
    "matk": 582,
    "mdef": 85,
    "skills": [
      {
        "name": "Chew to Bits",
        "type": "Phys"
      },
      {
        "name": "Bloody Bite",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Physical Boost",
        "type": "Unknown"
      },
      {
        "name": "Ripping Claws",
        "type": "Phys"
      },
      {
        "name": "Searing Flame",
        "type": "Elem"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      },
      {
        "name": "Bloody Bite",
        "type": "Phys"
      },
      {
        "name": "Wild Scratch",
        "type": "Phys"
      },
      {
        "name": "Ripping Claws",
        "type": "Phys"
      },
      {
        "name": "Searing Flame",
        "type": "Elem"
      }
    ],
    "steal": "Inspiring Plum Basket",
    "drop": "Blessed Olive (L), Antidote Herb (L)",
    "immunities": "Instant Death, Terror"
  },
  {
    "id": "98330.0",
    "name": "Sanct Cauchemar",
    "area": "The Heavens",
    "subArea": "Skies of Vanity",
    "type": "Regular",
    "shields": 24,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Bow",
      "Dark"
    ],
    "level": 78,
    "hp": 301200,
    "patk": 727,
    "pdef": 85,
    "matk": 727,
    "mdef": 85,
    "skills": [
      {
        "name": "Lightning Strike",
        "type": "Elem"
      },
      {
        "name": "Raging Lightning Bolt",
        "type": "Elem"
      },
      {
        "name": "Repeated Thunderblast",
        "type": "Elem"
      },
      {
        "name": "Mental Augmentation",
        "type": "Unknown"
      },
      {
        "name": "Binding Bolt",
        "type": "Elem"
      },
      {
        "name": "<skl_user_name>'s light shines brighter!",
        "type": "Unknown"
      },
      {
        "name": "Lightning Bolt",
        "type": "Elem"
      },
      {
        "name": "Raging Lightning Bolt",
        "type": "Elem"
      },
      {
        "name": "Repeated Thunderblast",
        "type": "Elem"
      },
      {
        "name": "Binding Bolt",
        "type": "Elem"
      },
      {
        "name": "Successive Strike Stance",
        "type": "Unknown"
      }
    ],
    "steal": "Healing Grape Bunch",
    "drop": "Sphinx Feather, Unicorn Horn",
    "immunities": "None"
  },
  {
    "id": "98601.0",
    "name": "Menacing King Octopuff",
    "area": "Coastlands",
    "subArea": "Desert Island in the Outersea",
    "type": "Boss",
    "shields": 10,
    "weakness": "Sword",
    "weaknesses": [
      "Sword",
      "Dagger",
      "Axe",
      "Staff"
    ],
    "level": 60,
    "hp": 80,
    "patk": 622,
    "pdef": 400,
    "matk": 622,
    "mdef": 550,
    "skills": [
      {
        "name": "Bag Toss",
        "type": "Phys"
      },
      {
        "name": "Mass Bag Toss",
        "type": "Phys"
      }
    ],
    "steal": "Holy Water, HP-Restoring Herb (L)",
    "drop": "Dragon Scale, Kraken Ink",
    "immunities": "None"
  }
];