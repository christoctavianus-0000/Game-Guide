const skillData = [
    {
        "id":  "607582",
        "name":  "Abide",
        "detail":  "Raise own Phys. Atk. for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "607586",
        "name":  "Assault",
        "detail":  "Deal polearm damage to all foes. More potent if attacking from the back row.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  34,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "607599",
        "name":  "Extended Enfeeblement",
        "detail":  "When the equipped character inflicts an attribute-reducing effect, extend duration by 1 turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "1,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "607602",
        "name":  "Entrap",
        "detail":  "When the equipped character takes physical damage, gain a 50% chance to inflict a random status-reducing effect on the foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Repel Phys.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "607610",
        "name":  "Study Foe",
        "detail":  "At the start of battle, discover 1 weak point of each foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "607612",
        "name":  "Lasting Memory",
        "detail":  "Status effects are not removed when incapacitated.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "607613",
        "name":  "Mystic Breath",
        "detail":  "At the end of turn, raise the equipped character\u0027s Elem. Atk./Elem. Def. for turn(s). when in the back row.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Final Action",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "607615",
        "name":  "Holy Light",
        "detail":  "Deal light damage to a foe.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "607617",
        "name":  "Sacred Flame\u0027s Protection",
        "detail":  "Grant an ally a small chance to prevent enemy attacks for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  16,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evade Atk.",
                             "value":  "40",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "607618",
        "name":  "Light of Judgment",
        "detail":  "Deal great light damage to a foe.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  22,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "607619",
        "name":  "Celestial Veil",
        "detail":  "Grant an ally the ability to restore SP equal to 3% of damage taken for turn(s).",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  8,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "SP Recovery",
                             "value":  "3",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "607620",
        "name":  "Wondrous Veil",
        "detail":  "Grant an effect that allows an ally to recover with 25% of their max. HP upon being incapacitated (one time only).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  30,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Encore",
                             "value":  "25",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "607627",
        "name":  "Encore",
        "detail":  "Grant an effect that allows you to recover with 25% of your max. HP upon being incapacitated (one time only).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Encore",
                             "value":  "25",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "607665",
        "name":  "First Aid",
        "detail":  "Restore HP of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       280,
                       340,
                       400
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "607693",
        "name":  "Rest",
        "detail":  "Restore own HP/SP, and cure own status ailments.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       280,
                       340,
                       400
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900006",
        "name":  "BP Thief",
        "detail":  "Deal dagger damage to a foe 2 time(s), and restore 2 BP to self.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900007",
        "name":  "Divine Protection",
        "detail":  "Nullify damage taken from physical attacks for the entire front row or entire back row 1 time(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Null Phys.",
                             "value":  "100",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900008",
        "name":  "Helmcleaver",
        "detail":  "Deal sword damage to a foe, and lower Phys. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  8,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900009",
        "name":  "Downward Slash",
        "detail":  "Deal sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900010",
        "name":  "Cross Strike",
        "detail":  "Deal sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  12,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900011",
        "name":  "Vacuum Slice",
        "detail":  "Deal great sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900012",
        "name":  "Retreating Strike",
        "detail":  "Deal great sword damage to a foe, then move to the back row.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900013",
        "name":  "Twofold Slash",
        "detail":  "Deal sword damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900014",
        "name":  "Upending Strike",
        "detail":  "Deal great sword damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900015",
        "name":  "Trifold Slash",
        "detail":  "Deal sword damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  27,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900016",
        "name":  "Sublime Slash",
        "detail":  "Deal great sword damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  45,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900017",
        "name":  "Stormblade",
        "detail":  "Deal sword damage to a foe 3 to 5 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  36,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     3,
                     3,
                     3,
                     3
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900018",
        "name":  "Level Slash",
        "detail":  "Deal sword damage to all foes.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  14,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900019",
        "name":  "Swiftstrike",
        "detail":  "Deal sword damage to all foes, and lower Phys. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  36,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900020",
        "name":  "Flash of Malice",
        "detail":  "Deal great sword damage to all foes.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  50,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900021",
        "name":  "Vanguard Steel",
        "detail":  "Deal sword damage to random foes 2 time(s). Act faster next turn.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  16,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900022",
        "name":  "Wild Blade",
        "detail":  "Deal sword damage to random foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  14,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900023",
        "name":  "Aggressive Slash",
        "detail":  "Deal sword damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  22,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900024",
        "name":  "Torrential Strike",
        "detail":  "Deal sword damage to random foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  29,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900025",
        "name":  "Talon Strike",
        "detail":  "Deal great sword damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  36,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900026",
        "name":  "Phantom Strike",
        "detail":  "Deal great sword damage to random foes time(s). Attack count increases based on Boost Lv.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  40,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900027",
        "name":  "Vengeful Blade",
        "detail":  "Counter physical attacks with a sword time(s). Lower Shield Points with counter regardless of target\u0027s weak points.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  14,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Counter Phys.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900029",
        "name":  "Counter Posture",
        "detail":  "Counter physical attacks with a sword for turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  36,
        "target":  "Self",
        "turns":  "2,3,4,5",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Repel Phys.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900031",
        "name":  "Spearhead",
        "detail":  "Deal polearm damage to a foe. Act faster next turn.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900032",
        "name":  "Vanguard Spear",
        "detail":  "Deal polearm damage to a foe. Act faster next turn.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900033",
        "name":  "Penetrating Thrust",
        "detail":  "Deal polearm damage to a foe.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  12,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900034",
        "name":  "Deadly Thrust",
        "detail":  "More easily land critical polearm hits on a foe.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  20,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900035",
        "name":  "Piercing Thrust",
        "detail":  "Deal critical polearm damage to a foe.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900036",
        "name":  "Peerless Strike",
        "detail":  "Deal great polearm damage to a foe.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900037",
        "name":  "Double Thrust",
        "detail":  "Deal polearm damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900038",
        "name":  "Arm-Crippling Thrust",
        "detail":  "Deal polearm damage to a foe 2 time(s), and lower Phys. Atk. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  9,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900039",
        "name":  "Leg-Crippling Thrust",
        "detail":  "Deal polearm damage to a foe 2 time(s), and lower Speed for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  22,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Down",
                             "value":  "15",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "900040",
        "name":  "Crippling Thrust",
        "detail":  "Deal polearm damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  27,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900041",
        "name":  "Spear Sweep",
        "detail":  "Deal polearm damage to all foes.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  14,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900042",
        "name":  "Lunar Arc",
        "detail":  "Deal great polearm damage to all foes, then move to the back row.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  55,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900043",
        "name":  "Spear Whirl",
        "detail":  "Deal polearm damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  34,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900044",
        "name":  "Thousand Spears",
        "detail":  "Deal polearm damage to random foes 5 to 10 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  30,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       200,
                       300,
                       400
                   ],
        "hits":  [
                     5,
                     5,
                     5,
                     5
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900045",
        "name":  "Hya! Hya! Hya!",
        "detail":  "Deal polearm damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  22,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900046",
        "name":  "Wild Thrust",
        "detail":  "Deal polearm damage to random foes 3 to 5 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  29,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     3,
                     3,
                     3,
                     3
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900048",
        "name":  "Reaping Slash",
        "detail":  "Deal dagger damage to a foe.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  12,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900049",
        "name":  "Reaping Thrash",
        "detail":  "Deal great dagger damage to a foe.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900050",
        "name":  "Assassination",
        "detail":  "Deal great dagger damage to a foe. More potent if attacking from the back row.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900051",
        "name":  "Serpent\u0027s Fang",
        "detail":  "Deal great dagger damage to a foe, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  33,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900052",
        "name":  "HP Thief",
        "detail":  "Deal dagger damage to a foe 2 time(s), and steal HP equal to 50% of damage dealt.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  9,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900053",
        "name":  "SP Thief",
        "detail":  "Deal dagger damage to a foe 2 time(s), and steal SP equal to 5% of damage dealt.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  9,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900054",
        "name":  "Double Edge",
        "detail":  "Deal dagger damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900055",
        "name":  "Tri-Edge",
        "detail":  "Deal dagger damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  27,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900056",
        "name":  "Frenzied Rampage",
        "detail":  "Deal dagger damage to a foe 4 time(s), and take damage equal to 10% of own max. HP.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  29,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900057",
        "name":  "Lethal Thrust",
        "detail":  "Deal great dagger damage to a foe 4 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  55,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900058",
        "name":  "Winding Throw",
        "detail":  "Deal dagger damage to all foes. Has an increased chance of being a critical hit.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  34,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900059",
        "name":  "Dagger Dance",
        "detail":  "Deal dagger damage to all foes.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  28,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900060",
        "name":  "Dancing Leaves",
        "detail":  "Deal dagger damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  21,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900061",
        "name":  "Double Throw",
        "detail":  "Deal dagger damage to random foes 2 time(s). Has an increased chance of being a critical hit.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  8,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900062",
        "name":  "Triple Throw",
        "detail":  "Deal dagger damage to random foes 3 time(s). Has an increased chance of being a critical hit.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  26,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900063",
        "name":  "Utsusemi Dance",
        "detail":  "Deal great dagger damage to random foes, then move to the back row.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  48,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900064",
        "name":  "Wild Knives",
        "detail":  "Deal dagger damage to random foes 5 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  36,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       180,
                       260,
                       340
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900066",
        "name":  "Recuperating Smash",
        "detail":  "Deal axe damage to a foe. Restore own HP if attacking from the back row.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900067",
        "name":  "Chop Wood",
        "detail":  "Deal axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900068",
        "name":  "Amputation",
        "detail":  "Deal axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  12,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900069",
        "name":  "Poisonous Touch",
        "detail":  "Deal axe damage to a foe, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  18,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900070",
        "name":  "Cross Cleave",
        "detail":  "Deal great axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900071",
        "name":  "Vigorous Strike",
        "detail":  "Deal great axe damage to a foe. More potent the more HP you have left.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900072",
        "name":  "Last Stand",
        "detail":  "Deal axe damage to a foe. Deal more damage the less HP you have left.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  24,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900073",
        "name":  "Pulverizing Blow",
        "detail":  "Deal massive axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  50,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900074",
        "name":  "Twin Bash",
        "detail":  "Deal axe damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900075",
        "name":  "Spinning Axe",
        "detail":  "Deal axe damage to all foes.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  14,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900076",
        "name":  "Full Swing",
        "detail":  "Deal axe damage to all foes.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  28,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900077",
        "name":  "Spiral Swing",
        "detail":  "Deal great axe damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  60,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900078",
        "name":  "Boomerang Toss",
        "detail":  "Deal axe damage to random foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  14,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900079",
        "name":  "Thundering Cleave",
        "detail":  "Deal axe damage to random foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  29,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900087",
        "name":  "Fireball",
        "detail":  "Deal fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900088",
        "name":  "Fire Storm",
        "detail":  "Deal fire damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  33,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900089",
        "name":  "Icewind",
        "detail":  "Deal ice damage to all foes.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900090",
        "name":  "Blizzard",
        "detail":  "Deal ice damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  33,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900091",
        "name":  "Lightning Bolt",
        "detail":  "Deal lightning damage to all foes.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900092",
        "name":  "Lightning Blast",
        "detail":  "Deal lightning damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  33,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900093",
        "name":  "Tornado",
        "detail":  "Deal wind damage to all foes.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900094",
        "name":  "Maelstrom",
        "detail":  "Deal wind damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  33,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900095",
        "name":  "Luminescence",
        "detail":  "Deal light damage to all foes.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  14,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900096",
        "name":  "Blinding Light",
        "detail":  "Deal light damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  33,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900097",
        "name":  "Duskfall",
        "detail":  "Deal dark damage to all foes.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900098",
        "name":  "Duskblight",
        "detail":  "Deal dark damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  33,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900100",
        "name":  "Expert First Aid",
        "detail":  "Restore HP of an ally, and move to back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       250,
                       350,
                       450,
                       550
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900101",
        "name":  "Pray",
        "detail":  "Raise own Elem. Atk. for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900102",
        "name":  "Divine Speed",
        "detail":  "Raise own Evasion/Speed for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Up",
                             "value":  "1",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "900103",
        "name":  "Sidestep",
        "detail":  "Grant self the ability to dodge physical attacks time(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  15,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evade Phys. Atk.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900104",
        "name":  "Paralysis Formula",
        "detail":  "Gain a chance to inflict paralysis on a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Paralysis",
                             "value":  "75",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900105",
        "name":  "Share SP",
        "detail":  "Grant 50% of caster\u0027s remaining SP to an ally.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  10,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       150,
                       200
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900106",
        "name":  "Analyze",
        "detail":  "Discover weak point(s) of a foe and reveal HP.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  1,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900107",
        "name":  "Goad",
        "detail":  "Attempt to draw the attention of all foes to the caster for turn(s)., and lower Accuracy of all foes for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  18,
        "target":  "All Foes",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Provoked",
                             "value":  "50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900108",
        "name":  "Max. HP +500",
        "detail":  "Raise the equipped character\u0027s max. HP by 500.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900109",
        "name":  "Max. SP +50",
        "detail":  "Raise the equipped character\u0027s max. SP by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900110",
        "name":  "Phys. Atk. +50",
        "detail":  "Raise the equipped character\u0027s Phys. Atk. by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900111",
        "name":  "Elem. Atk. +50",
        "detail":  "Raise the equipped character\u0027s Elem. Atk. by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900112",
        "name":  "Phys. Def. +50",
        "detail":  "Raise the equipped character\u0027s Phys. Def. by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900113",
        "name":  "Elem. Def. +50",
        "detail":  "Raise the equipped character\u0027s Elem. Def. by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900114",
        "name":  "Speed +50",
        "detail":  "Raise the equipped character\u0027s Speed by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900115",
        "name":  "Evasion +50",
        "detail":  "Raise the equipped character\u0027s Evasion by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900116",
        "name":  "Accuracy +50",
        "detail":  "Raise the equipped character\u0027s Accuracy by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900117",
        "name":  "Crit. +50",
        "detail":  "Raise the equipped character\u0027s Crit. by 50.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900118",
        "name":  "Vim and Vigor",
        "detail":  "Restore HP of equipped character every turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900119",
        "name":  "Second Wind",
        "detail":  "Restore SP of equipped character every turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Second Wind",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900120",
        "name":  "Invigorating Attack",
        "detail":  "Restore HP equal to 10% of damage dealt when using Attack.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900121",
        "name":  "Healing Item Expertise",
        "detail":  "Increase the effects of healing items during battle.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900122",
        "name":  "Conserve Magic",
        "detail":  "Restore SP when spell is not used during turn after spell is used.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Conserve Magic",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900123",
        "name":  "Evil Ward",
        "detail":  "Raise the party\u0027s success rate when attempting to flee. (The effect is not cumulative.)",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900124",
        "name":  "Augmented Break",
        "detail":  "Raise the potency of attacks against broken foes.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Break Pot. Up",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900125",
        "name":  "Price of Power",
        "detail":  "Consume twice the SP when casting specific spells, but raise the potency.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900126",
        "name":  "Surpassing Power",
        "detail":  "The equipped character will deal up to 99,999 damage.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Surpassing Power",
                             "value":  "90000",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900127",
        "name":  "Detect Danger",
        "detail":  "At the start of turn, grant self a 25% chance to dodge physical attacks 1 time(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evade Phys. Atk.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900408",
        "name":  "Brand\u0027s Blade",
        "detail":  "Deal massive sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900411",
        "name":  "Aeber\u0027s Artifice",
        "detail":  "Lower Phys. Atk./Phys. Def./Elem. Atk./Elem. Def. of a foe for turn(s)., and steal an item.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "1,1,1,1",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900414",
        "name":  "Aelfric\u0027s Favor",
        "detail":  "Restore HP and cure ailments of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900417",
        "name":  "Draefendi\u0027s Rage",
        "detail":  "Deal massive bow damage to all foes.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900420",
        "name":  "Bifelgan\u0027s Bounty",
        "detail":  "Deal non-elemental physical damage to a foe, and obtain leaves equal to the amount of damage dealt.",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900481",
        "name":  "Steal",
        "detail":  "Steal an item from a foe.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  3,
        "target":  "Single Foe",
        "turns":  "1,1,1,1",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900482",
        "name":  "Shadow Bind",
        "detail":  "Deal dark damage to a foe, and lower Speed for 2 turn(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  8,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Down",
                             "value":  "15",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "900483",
        "name":  "Master of Shadows",
        "detail":  "Deal dark damage to a foe 2 time(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900484",
        "name":  "Hilt Strike",
        "detail":  "Select a weapon and deal damage to a foe, and lower Phys. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900526",
        "name":  "Charging Strike",
        "detail":  "Deal sword damage to a foe 2 time(s). More potent if attacking from the back row.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900527",
        "name":  "Repeated Shot",
        "detail":  "Deal bow damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900528",
        "name":  "Double Arc",
        "detail":  "Deal fan damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900529",
        "name":  "Brain Bash",
        "detail":  "Select a weapon and deal damage to a foe.",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900538",
        "name":  "Sweep",
        "detail":  "Select a weapon and deal damage to all foes.",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  34,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900547",
        "name":  "Soporific Ice Fog",
        "detail":  "Deal ice damage to a foe, and gain a chance to inflict sleep for 2 turn(s).",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  8,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Sleep",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900548",
        "name":  "Levin\u0027s Refrain",
        "detail":  "Deal lightning damage to a foe, and gain a chance to inflict paralysis for 2 turn(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900549",
        "name":  "Storm\u0027s Refrain",
        "detail":  "Deal lightning damage to random foes 2 time(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  13,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900550",
        "name":  "Thunder\u0027s Refrain",
        "detail":  "Deal lightning damage to random foes 3 time(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  19,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900551",
        "name":  "Sweeping Gale",
        "detail":  "Deal wind damage to a foe 2 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  16,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900556",
        "name":  "Healing Light",
        "detail":  "Restore HP of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  8,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       280,
                       340,
                       400
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900557",
        "name":  "Ethereal Healing",
        "detail":  "Grant HP regeneration to the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  30,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "160",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900558",
        "name":  "War Cry",
        "detail":  "Raise own Phys. Atk./Crit. for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900559",
        "name":  "Focus",
        "detail":  "Raise own Phys. Atk./Accuracy for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900560",
        "name":  "Stout Wall",
        "detail":  "Raise own Phys. Def. for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900561",
        "name":  "Evasive Stance",
        "detail":  "Raise own Evasion for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evasion Up",
                             "value":  "2",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "900562",
        "name":  "Parry",
        "detail":  "Nullify damage taken from physical attacks time(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  15,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Parry",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900563",
        "name":  "Song of Battle",
        "detail":  "Make foes more likely to attack paired ally in the back row and raise their Phys. Def. for turn(s)., then move to back row.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Paired Ally",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "No data.",
                             "value":  "50",
                             "efficacy":  ""
                         },
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900564",
        "name":  "Dance of Mist",
        "detail":  "Lower Accuracy/Evasion of a foe for turn(s)., and cause target to act last for 2 turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  9,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "First in Line",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900565",
        "name":  "Dance of Sloughs",
        "detail":  "Lower Speed/Evasion of all foes for turn(s)., and cause targets to act last for 2 turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  30,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "First in Line",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900566",
        "name":  "Provoke",
        "detail":  "Attempt to draw the attention of all foes for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  6,
        "target":  "All Foes",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Provoked",
                             "value":  "50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900567",
        "name":  "Negotiation",
        "detail":  "Target foe provides additional EXP and leaves at the end of battle.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  10,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Extra EXP \u0026 Leaves",
                             "value":  "125",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900571",
        "name":  "Moonlit Repose",
        "detail":  "Grant SP regeneration to an ally for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  8,
        "target":  "Single Ally",
        "turns":  "1,2,3,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Second Wind",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900572",
        "name":  "Appraisal",
        "detail":  "Discover weak point(s) of a foe and reveal possessions.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  1,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900574",
        "name":  "Arrow of Fortune",
        "detail":  "Deal great bow damage to a foe, and obtain JP based on damage dealt.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  35,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900575",
        "name":  "Stray Arrows",
        "detail":  "Deal bow damage to random foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  14,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900576",
        "name":  "Rain of Arrows",
        "detail":  "Deal bow damage to random foes 5 to 8 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  12,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       180,
                       260,
                       340
                   ],
        "hits":  [
                     5,
                     5,
                     5,
                     5
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900577",
        "name":  "Wild Strike",
        "detail":  "Deal fan damage to random foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  14,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900578",
        "name":  "Wild Blow",
        "detail":  "Deal fan damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  22,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900579",
        "name":  "Frosty Refrain",
        "detail":  "Deal ice damage to a foe. Song skill.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900581",
        "name":  "Trade Tempest",
        "detail":  "Deal wind damage to all foes.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  15,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900584",
        "name":  "Vivify",
        "detail":  "Revive an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  24,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900585",
        "name":  "Heal Wounds",
        "detail":  "Restore HP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  12,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       140,
                       196,
                       238,
                       280
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900586",
        "name":  "Heal All",
        "detail":  "Grant HP regeneration to the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  15,
        "target":  "Front/Back Row",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "120",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900587",
        "name":  "Rehabilitate",
        "detail":  "Grant an ally immunity to status ailments for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  15,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Rehabilitate",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900588",
        "name":  "Peacock Strut",
        "detail":  "Raise Elem. Atk. of an ally for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900589",
        "name":  "Coney Caper",
        "detail":  "Raise Evasion of an ally for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evasion Up",
                             "value":  "2",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "900590",
        "name":  "Porcupine Stomp",
        "detail":  "Raise Elem. Def. of an ally for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  4,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900591",
        "name":  "Collect",
        "detail":  "Collect leaves from a foe.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  3,
        "target":  "Single Foe",
        "turns":  "1,1,1,1",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900592",
        "name":  "Donate BP",
        "detail":  "Grant BP to an ally.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  5,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900593",
        "name":  "Borrow BP",
        "detail":  "Borrow insufficient BP for Boost from paired back ally. Neither will restore BP next turn.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900594",
        "name":  "Persistence",
        "detail":  "When the equipped character is granted an attribute-raising effect, extend duration by 1 turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "1,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900595",
        "name":  "The Show Goes On",
        "detail":  "When the equipped character grants an attribute-raising effect, extend duration by 1 turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "1,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900597",
        "name":  "Invigorating Break",
        "detail":  "Restore the equipped character\u0027s HP when breaking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900598",
        "name":  "Inspiriting Break",
        "detail":  "Restore the equipped character\u0027s SP when breaking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900599",
        "name":  "Boosting Break",
        "detail":  "Restore the equipped character\u0027s BP by 1 when breaking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900601",
        "name":  "Foresight",
        "detail":  "The equipped character will have a 25% chance to restore 1 BP when attacked.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Damage Taken: BP Rec.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900602",
        "name":  "Vigorous Victor",
        "detail":  "Restore 30% of the equipped character\u0027s max. HP and SP upon winning the battle.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900603",
        "name":  "Unsung Hero",
        "detail":  "When the equipped character is in the back row, nullify status ailments of paired ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900604",
        "name":  "Vast Energy",
        "detail":  "When the equipped character is in the back row, they will have a 25% chance to reduce paired ally\u0027s BP consumption to 0.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900606",
        "name":  "Elemental Counter",
        "detail":  "Gain a 50% chance to counter elemental attacks.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Repel Elem.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900608",
        "name":  "Boost-Start",
        "detail":  "At the start of battle, restore 1 BP.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900609",
        "name":  "Hang Tough",
        "detail":  "When the equipped character is not near death, they will survive an otherwise lethal attack with 1 HP remaining.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900610",
        "name":  "Resist Ailments",
        "detail":  "Improve the equipped character\u0027s resistance to poison/bleeding/sleep/paralysis/blindness/silence/terror/weakness.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900674",
        "name":  "Lotus Blade",
        "detail":  "Deal sword damage to a foe 6 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900677",
        "name":  "Trick of the Trade",
        "detail":  "Raise Phys. Atk. of all allies for turn(s)., and grant them the ability to dodge physical attacks 1 time(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "All Allies",
        "turns":  "5,7,9,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900680",
        "name":  "Master of Evasion",
        "detail":  "Make user the target of enemy attacks, and grant the ability to dodge physical attacks for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "2,3,4,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Provoked",
                             "value":  "100",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900683",
        "name":  "Art of Healing",
        "detail":  "Remove attribute-reducing effects of all allies, and grant an ally immunity to status ailments for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "All Allies",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900730",
        "name":  "Alephan\u0027s Wisdom",
        "detail":  "Reduce skill cost to 0 SP for all allies for turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "2,3,4,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "SP Cost Down",
                             "value":  "-100",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900776",
        "name":  "Inhibit Offense",
        "detail":  "Lower Phys. Atk./Elem. Atk. of a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "900777",
        "name":  "Greater Heal",
        "detail":  "Raise the amount restored by the equipped character\u0027s HP/SP recovery effects.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Recovery Up",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "900778",
        "name":  "BP in Adversity",
        "detail":  "The equipped character will regain 2 BP when near death.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "900779",
        "name":  "Eye for an Eye",
        "detail":  "Gain a 50% chance to counter physical attacks.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Repel Phys.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901104",
        "name":  "Gift of the Aqeeq",
        "detail":  "Lower Phys. Atk./Phys. Def. of all foes for turn(s)., and raise Phys. Atk./Phys. Def. of all allies for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "2,4,6,6",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901107",
        "name":  "Scales of Justice",
        "detail":  "Lower Phys. Def./Elem. Def. of all foes for turn(s)., and raise Phys. Atk./Elem. Atk. of all allies for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "2,4,6,6",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Def. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901110",
        "name":  "Maiden\u0027s Miracle",
        "detail":  "Grant an effect that allows the entire front row or entire back row to recover with 50% of their max. HP upon being incapacitated.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Encore",
                             "value":  "50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901119",
        "name":  "Ancient Magic",
        "detail":  "Deal massive non-elemental damage to all foes.",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901122",
        "name":  "Song of Levin",
        "detail":  "Deal lightning damage to all foes, and for 2 turns, deal lightning damage to all foes at the end of turn. Song skill.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  0,
        "target":  "Self",
        "turns":  "2,3,4,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Swift Strikes",
                             "value":  "100",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901128",
        "name":  "Unbending Blade",
        "detail":  "Deal massive sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901131",
        "name":  "Call for Help",
        "detail":  "Deal sword/dagger/axe/light damage to random foes 1 time(s) each.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901134",
        "name":  "Pomegranate Panacea",
        "detail":  "Restore 2 BP to all allies.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "All Allies",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901137",
        "name":  "Grand Trinity",
        "detail":  "Deal fire/ice/lightning damage to all foes 2 time(s) each.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901140",
        "name":  "Twilight Waltz",
        "detail":  "Deal dark damage to all foes 2 time(s). Grant SP regeneration to all allies for turn(s). Dance skill.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901143",
        "name":  "Prayer for Tomorrow",
        "detail":  "Revive and restore HP/SP of all allies.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "All Allies",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901146",
        "name":  "Take Command",
        "detail":  "Raise Phys. Atk./Phys. Def./Elem. Atk./Elem. Def. of all allies for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "All Allies",
        "turns":  "3,5,7,7",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901149",
        "name":  "Sword of the Sacred Flame",
        "detail":  "Deal sword/light damage to a foe 1 time(s) each.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901152",
        "name":  "Full Cheer",
        "detail":  "Raise BP recovery of the entire front row or entire back row by 1, and grant SP regeneration for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,6",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "BP Recovery Up",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901155",
        "name":  "Holy Sword",
        "detail":  "Deal light damage to all foes 5 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901158",
        "name":  "Fluid Stance",
        "detail":  "Deal damage with equipped weapon 2 time(s) when evading or parrying attacks for turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901159",
        "name":  "Enervating Thrust",
        "detail":  "Deal polearm damage to a foe. If broken, lower Shield Points of target by 1 upon recovery.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901160",
        "name":  "Pilfer",
        "detail":  "Deal great dagger damage to a foe, and steal an item when attack is successful.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901161",
        "name":  "Prism Mist",
        "detail":  "Grant a random positive status effect to all allies.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901162",
        "name":  "Shield of Hope",
        "detail":  "Reduce damage taken by all alies for turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901163",
        "name":  "Soulstone\u0027s Might",
        "detail":  "Deal fire/ice/lightning/wind/light/dark damage to all foes 1 time(s) each.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901165",
        "name":  "Hunter\u0027s Drive",
        "detail":  "Deal sword damage to all foes, polearm damage to a foe, and bow damage to all foes.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901166",
        "name":  "For the Family",
        "detail":  "Summon the Bargello family and deal dagger/axe/wind/staff damage to a foe 1 time(s) each.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901167",
        "name":  "Hawk of Orsterra",
        "detail":  "Discover weak points of all foes, and raise weak point damage for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901168",
        "name":  "Lofty Rampart",
        "detail":  "Raise own Phys. Atk./Phys. Def., and take damage in place of allies for turn(s). Survive an otherwise lethal attack with 1 HP remaining (one time only).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "3,5,7,7",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901169",
        "name":  "Royal Feast",
        "detail":  "Deal fan damage to random foes 5 time(s). More potent if target is enchanted.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901170",
        "name":  "Shadowcleaver",
        "detail":  "Deal sword damage to all foes 2 time(s). Deal more damage if graced with Divine Flame.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901171",
        "name":  "Ulti-meow",
        "detail":  "Use all your SP, then deal non-elemental damage to all foes. More potent the more SP spent.",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901172",
        "name":  "Dohter\u0027s Charity",
        "detail":  "Extend the reach of an ally\u0027s items to affect all for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "2,3,4,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Extend Items",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901173",
        "name":  "Sealticge\u0027s Seduction",
        "detail":  "Extend the reach of an ally\u0027s specific skills to affect all for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "2,3,4,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Extend Skills",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901188",
        "name":  "Extra Items",
        "detail":  "Enemies are more likely to drop items.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901189",
        "name":  "Extra Experience",
        "detail":  "Receive additional EXP at the end of battle. (The effect is not cumulative.)",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901190",
        "name":  "Extra Leaves",
        "detail":  "Receive additional leaves (?) at the end of battle. (The effect is not cumulative.)",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901191",
        "name":  "BP Luck",
        "detail":  "50% chance to reduce BP consumption to 0.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901192",
        "name":  "SP Luck",
        "detail":  "50% chance to reduce BP consumption to 0.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901193",
        "name":  "BP Regeneration",
        "detail":  "The equipped character gains a 25% chance to restore BP used.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901194",
        "name":  "Snatch",
        "detail":  "The equipped character will seize twice the amount when using Steal or Collect.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901195",
        "name":  "Fierce Rush",
        "detail":  "Raise the potency of multiple-hit attacks against broken foes.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901196",
        "name":  "Soulstone Expertise",
        "detail":  "Increase soulstone potency.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901197",
        "name":  "Peak Performance",
        "detail":  "Raise the equipped character\u0027s attack skill potency when HP is at least 100%.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901198",
        "name":  "SP Saver",
        "detail":  "Halves SP required for the equipped character\u0027s skills.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "SP Cost Down",
                             "value":  "-50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901200",
        "name":  "Stronger Strikes",
        "detail":  "Raise the equipped character\u0027s skill potency when exploiting a foe\u0027s weak point.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Weak Point Pot. Up",
                             "value":  "20",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901201",
        "name":  "Fortitude",
        "detail":  "Raises the equipped character\u0027s attack skill potency the lower their HP.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901202",
        "name":  "Bolstering Break",
        "detail":  "Raise the equipped character\u0027s Phys. Atk. when breaking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901204",
        "name":  "Amplifying Break",
        "detail":  "Raise the equipped character\u0027s Elem. Atk. when breaking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901207",
        "name":  "Ruthless Assault",
        "detail":  "Raise the equipped character\u0027s skill potency when attacking a foe inflicted with status ailments.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901208",
        "name":  "Blessing of Restoration",
        "detail":  "When the equipped character is in the front row, grant HP/SP regeneration to paired ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901209",
        "name":  "Back Row Support",
        "detail":  "When the equipped character is in the back row, grant HP restoration to paired ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901210",
        "name":  "The Ring\u0027s Grace",
        "detail":  "Raise Phys. Atk/Elem. Atk. when the equipped character is paired with .",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901212",
        "name":  "Sniper",
        "detail":  "At the end of turn, the equipped character will unleash a special attack with their equipped weapon when in the back row.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Final Action",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901214",
        "name":  "Rear Second Wind",
        "detail":  "Grant the equipped character SP regeneration when in the back row.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Resilience",
                             "value":  "50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901215",
        "name":  "Back Row Protection",
        "detail":  "When moving to the back row, the equipped character will take damage in place of paired ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Proxy",
                             "value":  "100",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901216",
        "name":  "Second Serving",
        "detail":  "50% chance of unleashing a follow-up strike when the equipped character uses Attack.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901217",
        "name":  "High Morale",
        "detail":  "Raise Phys. Atk./Elem. Atk. of the entire back row for turn(s). when the equipped character uses a skill at the start of turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901219",
        "name":  "Rechant",
        "detail":  "When casting magic, gain a 20% chance to recast the same spell.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Rechant",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901220",
        "name":  "Unbridled Courage",
        "detail":  "Restore 3 BP to equipped character when breaking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901222",
        "name":  "Back Row Dancer",
        "detail":  "At the end of turn, slightly fill the ultimate technique gauge of the entire front row when the equipped character is in the back row.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901223",
        "name":  "Invigorate",
        "detail":  "When the equipped character grants HP regeneration with a skill, grant SP regeneration to the target for turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901227",
        "name":  "Narrow Escape",
        "detail":  "10% chance to survive an otherwise lethal attack with 1 HP remaining.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901228",
        "name":  "Reciprocate",
        "detail":  "When inflicted with poison/bleeding/sleep/paralysis/blindness, inflict the same ailments back.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901350",
        "name":  "Radiant Light",
        "detail":  "Deal light damage to random foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  19,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901351",
        "name":  "Almighty",
        "detail":  "Raise own Phys. Atk./Phys. Def./Elem. Atk./Elem. Def. for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  12,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901352",
        "name":  "Sacred Flame\u0027s Grace",
        "detail":  "Restore HP of the entire front row or entire back row, and grant HP restoration for 3 turn(s) at Max. Boost.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  18,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       140,
                       196,
                       238,
                       280
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901354",
        "name":  "Transcendent Light",
        "detail":  "Deal light damage to random foes 4 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  26,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901355",
        "name":  "Divine Flame",
        "detail":  "Exploit weaknesses with physical attacks regardless of weak points for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  16,
        "target":  "Self",
        "turns":  "2,3,4,5",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Strike Weakness",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901359",
        "name":  "Judicious Blade",
        "detail":  "Nullify own positive status effects, then deal polearm damage to a foe. More potent the more status effects nullified.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901360",
        "name":  "Reckless Strike",
        "detail":  "Deal great sword damage to a foe. More potent if attacking from the back row.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901361",
        "name":  "Reaper\u0027s Blade",
        "detail":  "Deal sword damage to all foes, and gain a small chance to instantly kill target.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  28,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901362",
        "name":  "Surprise Attack",
        "detail":  "Deal dagger damage to a foe. More potent the sooner you act that turn.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901363",
        "name":  "Mafioso",
        "detail":  "Deal great dagger damage to a foe. More potent if first action taken that turn.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901366",
        "name":  "Fading Strike",
        "detail":  "Deal axe damage to a foe 3 time(s). Restore own HP if attacking from the back row.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  32,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901367",
        "name":  "Immobilizing Shot",
        "detail":  "Deal bow damage to a foe, and gain a chance to inflict paralysis for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  8,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Paralysis",
                             "value":  "75",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901368",
        "name":  "Retreating Shot",
        "detail":  "Deal bow damage to a foe, then move to the back row.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901369",
        "name":  "True Strike",
        "detail":  "Deal critical bow damage to a foe.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  15,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901370",
        "name":  "Piercing Shadow",
        "detail":  "Deal bow damage to a foe, and lower Speed for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  8,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Down",
                             "value":  "15",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "901371",
        "name":  "First Shot",
        "detail":  "Deal bow damage to a foe. Next attack is guaranteed to be a critical hit.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901373",
        "name":  "Double Shot",
        "detail":  "Deal bow damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901374",
        "name":  "Two-Tiered Shot",
        "detail":  "Deal bow damage to a foe 2 time(s), then move to the back row. At the end of turn, deal special bow damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  16,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901376",
        "name":  "Avenging Triple Shot",
        "detail":  "At the end of turn, deal special bow damage to a foe 3 time(s). More potent the more hits taken that turn.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  32,
        "target":  "Self",
        "turns":  "1,1,1,1",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Swift Strikes",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901380",
        "name":  "Mystic Shot",
        "detail":  "Deal bow damage to all foes, and restore SP equal to 2% of damage dealt to the entire front row.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  18,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901381",
        "name":  "Arrowstorm",
        "detail":  "Deal bow damage to all foes 5 to 8 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  36,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       144,
                       208,
                       272
                   ],
        "hits":  [
                     5,
                     5,
                     5,
                     5
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901382",
        "name":  "Devastating Shot",
        "detail":  "Deal great bow damage to a foe, and gain a small chance to instantly kill target.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  28,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901383",
        "name":  "Smashing Strike",
        "detail":  "Deal great staff damage to a foe.",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901384",
        "name":  "Mystical Staff",
        "detail":  "Deal staff damage to a foe 2 time(s), and restore SP equal to 10% of damage dealt.",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901386",
        "name":  "Captivating Step",
        "detail":  "Deal fan damage to random foes 4 time(s), and gain a chance to inflict enchant for 2 turn(s). Dance skill.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  34,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Enchant",
                             "value":  "75",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901387",
        "name":  "Elemental Bash",
        "detail":  "Deal tome damage to a foe, and lower Elem. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  8,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901388",
        "name":  "Arcane Tome",
        "detail":  "Deal tome damage to a foe. Restore own SP if attacking from the back row.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901389",
        "name":  "Double Slap",
        "detail":  "Deal tome damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  21,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901390",
        "name":  "Triple Slap",
        "detail":  "Deal tome damage to all foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  43,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       152,
                       224,
                       296
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901391",
        "name":  "Shield Burst",
        "detail":  "Select a weapon and deal damage to a foe. Lower Shield Points regardless of target\u0027s weak points.",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901400",
        "name":  "Stunning Strike",
        "detail":  "Select a weapon and deal great damage to all foes.",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  60,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901409",
        "name":  "Cleansing Fire",
        "detail":  "Deal fire damage to a foe.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901410",
        "name":  "Wildfire",
        "detail":  "Deal fire damage to a foe.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901411",
        "name":  "Flames of Judgment",
        "detail":  "Deal fire damage to random foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  13,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901413",
        "name":  "Icicle",
        "detail":  "Deal ice damage to a foe.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901414",
        "name":  "Ice Boulder",
        "detail":  "Deal ice damage to a foe 2 time(s).",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  14,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901415",
        "name":  "Trade Blizzard",
        "detail":  "Deal ice damage to all foes.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901417",
        "name":  "Thunderbird",
        "detail":  "Deal lightning damage to a foe.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901418",
        "name":  "Thunderbeast",
        "detail":  "Deal lightning damage to a foe 2 time(s).",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  16,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901419",
        "name":  "Thunderclap",
        "detail":  "Deal lightning damage to all foes.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901422",
        "name":  "Song of Winds",
        "detail":  "Deal wind damage to a foe. Song skill.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901423",
        "name":  "Tradewinds",
        "detail":  "Deal wind damage to a foe.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901425",
        "name":  "Song of Howling Winds",
        "detail":  "Deal wind damage to all foes. Song skill.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901426",
        "name":  "Great Winds",
        "detail":  "Deal wind damage to random foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  13,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901427",
        "name":  "Divine Light",
        "detail":  "Deal light damage to a foe time(s). Attack count increases based on Boost Lv.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901434",
        "name":  "Darkest Night",
        "detail":  "Deal dark damage to a foe.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901435",
        "name":  "Moonlight Waltz",
        "detail":  "Deal dark damage to a foe. Song skill.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901436",
        "name":  "Song of Lunar Shadow",
        "detail":  "Deal great dark damage to a foe. Song skill.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  40,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901438",
        "name":  "Night Ode",
        "detail":  "Deal dark damage to all foes. Song skill.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  15,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901439",
        "name":  "Arcane Meteor",
        "detail":  "Deal great non-elemental damage to all foes.",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  24,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901440",
        "name":  "Arcane Comet",
        "detail":  "Deal great non-elemental damage to all foes. More potent if attacking from the back row.",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  36,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901441",
        "name":  "Sacred Flame\u0027s Blessing",
        "detail":  "Restore own HP/SP for turn(s).",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  8,
        "target":  "Self",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "120",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901442",
        "name":  "Curl Up",
        "detail":  "Greatly restore own HP/SP.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901443",
        "name":  "Revive",
        "detail":  "Revive all allies.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  75,
        "target":  "All Allies",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901446",
        "name":  "Healing Touch",
        "detail":  "Restore HP of an ally, and cure status ailments.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  12,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901448",
        "name":  "Heal More",
        "detail":  "Greatly restore HP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  38,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       140,
                       196,
                       238,
                       280
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901449",
        "name":  "Dance of Repose",
        "detail":  "Grant HP regeneration to an ally for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "120",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901451",
        "name":  "Dance of Respite",
        "detail":  "Grant HP regeneration to the entire front row or entire back row for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  33,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "120",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901453",
        "name":  "Lion Dance",
        "detail":  "Raise Phys. Atk. of an ally for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901454",
        "name":  "Offensive Maneuver",
        "detail":  "Raise Phys. Atk. of the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  12,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901457",
        "name":  "Focus Energy",
        "detail":  "Raise own Phys. Atk./Elem. Atk. for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901458",
        "name":  "Bolster",
        "detail":  "Raise Phys. Atk./Elem. Atk. of the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  24,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901459",
        "name":  "Dark Panther Dance",
        "detail":  "Raise Phys. Atk./Speed of the entire front row or entire back row for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  24,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901460",
        "name":  "Purr-omote",
        "detail":  "Raise Elem. Atk./Evasion of the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  12,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901462",
        "name":  "Mole Dance",
        "detail":  "Raise Phys. Def. of an ally for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901463",
        "name":  "Stalwart Veil",
        "detail":  "Raise Phys. Def. of an ally for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901465",
        "name":  "Defensive Maneuver",
        "detail":  "Raise Phys. Def. of the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  12,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901466",
        "name":  "Invoke Sacred Flame",
        "detail":  "Raise Phys. Def./Elem. Def. of an ally for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901467",
        "name":  "Sheltering Veil",
        "detail":  "Raise Elem. Def. of an ally for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901468",
        "name":  "Defensive Command",
        "detail":  "Raise Elem. Def. of an ally for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901471",
        "name":  "Evasion Command",
        "detail":  "Raise Evasion of an ally for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evasion Up",
                             "value":  "2",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "901472",
        "name":  "Fleeting Feline",
        "detail":  "Raise own Speed for turn(s)., and grant self the ability to dodge physical attacks time(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  10,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evade Phys. Atk.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901473",
        "name":  "Panther Dance",
        "detail":  "Raise Speed of an ally for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Up",
                             "value":  "2",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "901474",
        "name":  "Take Aim",
        "detail":  "Raise Accuracy/Crit. of the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  12,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Up",
                             "value":  "1",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "901475",
        "name":  "Stroke of Genius",
        "detail":  "Grant self 2 random attribute-raising effects for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901476",
        "name":  "Recuperate",
        "detail":  "Restore own HP, and raise own Phys. Def. for turn(s).",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  12,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       280,
                       340,
                       400
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901477",
        "name":  "Holy Flame",
        "detail":  "Exploit fire weakness with physical attacks for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  8,
        "target":  "Self",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Light Infusion",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901481",
        "name":  "Sacred Shield",
        "detail":  "Grant a shield to an ally, reducing damage taken from the next hit by 50%.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  20,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Reduce Damage",
                             "value":  "-50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901484",
        "name":  "Shackle Foe",
        "detail":  "Lower Phys. Atk. of a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901486",
        "name":  "Armor Corrosive",
        "detail":  "Lower Phys. Def. of a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901487",
        "name":  "Gospel of Debilitation",
        "detail":  "Lower Phys. Def. of all foes for turn(s). Song skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901488",
        "name":  "Lower Defenses",
        "detail":  "Lower Phys. Def./Elem. Def. of a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901489",
        "name":  "Disintegrating Dance",
        "detail":  "Lower Phys. Def./Elem. Def. of all foes for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  24,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901490",
        "name":  "Mind Sap",
        "detail":  "Lower Elem. Def. of a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901491",
        "name":  "Gospel of Attrition",
        "detail":  "Lower Elem. Def. of all foes for turn(s). Song skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901494",
        "name":  "Empoison",
        "detail":  "Gain a chance to inflict poison on a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901495",
        "name":  "Toxify",
        "detail":  "Gain a chance to inflict toxin on a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  15,
        "target":  "Single Foe",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Toxin",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901496",
        "name":  "Song of Slumber",
        "detail":  "Gain a chance to inflict sleep on a foe for turn(s). Song skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901497",
        "name":  "Beguiling Dance",
        "detail":  "Gain a chance to inflict enchant on all foes for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  15,
        "target":  "All Foes",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Enchant",
                             "value":  "75",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901498",
        "name":  "Ensnare",
        "detail":  "Cause a foe to act last for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "First in Line",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901503",
        "name":  "Greater Distribution",
        "detail":  "Grant an ally your attribute-raising effects for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "2,3,4,5",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901506",
        "name":  "Weak to Poison",
        "detail":  "Make a foe weak to poison for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  4,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Weak to Poison",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901507",
        "name":  "Summon Linde",
        "detail":  "Summon Linde, and deal sword damage to all foes or polearm damage to a foe.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  16,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901652",
        "name":  "Stream of Arrows",
        "detail":  "Deal bow damage to a foe 5 to 8 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  58,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       180,
                       260,
                       340
                   ],
        "hits":  [
                     5,
                     5,
                     5,
                     5
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901653",
        "name":  "Arrow Volley",
        "detail":  "Deal great bow damage to all foes.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  50,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901654",
        "name":  "Rippling Blow",
        "detail":  "Deal bow damage to random foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  13,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901655",
        "name":  "Rippling Shot",
        "detail":  "Deal great bow damage to random foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  55,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901656",
        "name":  "Elemental Break",
        "detail":  "Deal staff damage to a foe, and lower Elem. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  30,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901657",
        "name":  "Batter",
        "detail":  "Deal staff damage to a foe 5 to 8 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  26,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       180,
                       260,
                       340
                   ],
        "hits":  [
                     5,
                     5,
                     5,
                     5
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901658",
        "name":  "Repeated Whirling Bash",
        "detail":  "Deal staff damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  21,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901659",
        "name":  "Haphazard Bash",
        "detail":  "Deal staff damage to random foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  29,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901660",
        "name":  "Knock Out",
        "detail":  "Deal fan damage to a foe, and gain a chance to inflict sleep for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  14,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Sleep",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901661",
        "name":  "Flower\u0027s Grace",
        "detail":  "Deal great fan damage to a foe.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901662",
        "name":  "Fan Frenzy",
        "detail":  "Deal fan damage to a foe 4 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  36,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901663",
        "name":  "Swirling Arc",
        "detail":  "Deal fan damage to all foes.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  28,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901664",
        "name":  "Spiral Dance",
        "detail":  "Deal great fan damage to all foes.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  50,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901666",
        "name":  "Heavy Tome",
        "detail":  "Deal great tome damage to a foe.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901667",
        "name":  "Pontificate",
        "detail":  "Deal tome damage to a foe 2 to 4 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  27,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     2,
                     2,
                     2,
                     2
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901668",
        "name":  "Tumultuous Tome Toss",
        "detail":  "Deal tome damage to all foes.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  28,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901669",
        "name":  "Double Slam",
        "detail":  "Deal tome damage to random foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  14,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901670",
        "name":  "Triple Slam",
        "detail":  "Deal tome damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  22,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901671",
        "name":  "Quadruple Slam",
        "detail":  "Deal tome damage to random foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  29,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901672",
        "name":  "Toxic Dust",
        "detail":  "Deal non-elemental physical damage to a foe, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  7,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901673",
        "name":  "Maiming Bite",
        "detail":  "Deal non-elemental physical damage to a foe, and lower Phys. Atk. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  12,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901674",
        "name":  "Soporific Fang",
        "detail":  "Deal non-elemental physical damage to a foe, and gain a chance to inflict sleep for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  16,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Sleep",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901675",
        "name":  "Ruinous Kick",
        "detail":  "Deal great non-elemental physical damage to a foe. Lower Shield Points regardless of target\u0027s weak points.",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  31,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901676",
        "name":  "Poison Breath",
        "detail":  "Deal non-elemental physical damage to all foes, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  15,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901677",
        "name":  "Rage",
        "detail":  "Deal non-elemental physical damage to all foes.",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  25,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901678",
        "name":  "Golden Underarm Throw",
        "detail":  "Deal non-elemental physical damage to all foes. Lower Shield Points regardless of targets\u0027 weak points.",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  30,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901679",
        "name":  "Eye Gouge",
        "detail":  "Deal non-elemental physical damage to all foes, and gain a chance to inflict blindness for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  27,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901680",
        "name":  "Savage Claw",
        "detail":  "Deal non-elemental physical damage to all foes, and lower Phys. Atk. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  30,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901681",
        "name":  "Rampage",
        "detail":  "Deal non-elemental physical damage to random foes 1 to 3 time(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  12,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901682",
        "name":  "Smite of Fury",
        "detail":  "Select a weapon and deal great damage to all foes.",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  36,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901691",
        "name":  "Repeated Bash",
        "detail":  "Deal damage to a foe with all weapons 2 time(s) each.",
        "category":  "Physical",
        "subType":  "All Weapons",
        "icon":  "",
        "sp":  34,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901709",
        "name":  "Run Rampant",
        "detail":  "Select a weapon and deal damage to random foes 5 to 8 time(s).",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  45,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       180,
                       260,
                       340
                   ],
        "hits":  [
                     5,
                     5,
                     5,
                     5
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901718",
        "name":  "Counter Position",
        "detail":  "Select a weapon, and counter physical attacks for 3 turn(s).",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  17,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901727",
        "name":  "Purging Flame",
        "detail":  "Deal fire damage to a foe. More potent if attacking from the back row.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901728",
        "name":  "Fiendish Flame",
        "detail":  "Deal great fire damage to a foe.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  22,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901729",
        "name":  "Spark of Fire",
        "detail":  "Deal fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  9,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901730",
        "name":  "Hellish Flame",
        "detail":  "Deal fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901731",
        "name":  "Dragonfire",
        "detail":  "Deal great fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  30,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901732",
        "name":  "Hellfire",
        "detail":  "Deal fire damage to all foes 2 time(s), and lower Speed for 2 turn(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  39,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Down",
                             "value":  "15",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "901733",
        "name":  "Ignis Ardere",
        "detail":  "Deal fire damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  54,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       152,
                       224,
                       296
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901734",
        "name":  "Wild Infernal Blade",
        "detail":  "Deal great fire damage to random foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  42,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901735",
        "name":  "Wild Fiery Blow",
        "detail":  "Deal fire damage to random foes 4 time(s). Dance skill.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  26,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901737",
        "name":  "Ice Blast",
        "detail":  "Deal great ice damage to a foe.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  22,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901738",
        "name":  "Nocturne of Icy Slumber",
        "detail":  "Deal ice damage to a foe 2 time(s), and gain a chance to inflict sleep for 2 turn(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  22,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901740",
        "name":  "Mass Ice Blast",
        "detail":  "Deal great ice damage to all foes.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  30,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901741",
        "name":  "Glacies Claudere",
        "detail":  "Deal ice damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  54,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       152,
                       224,
                       296
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901742",
        "name":  "Hailstorm",
        "detail":  "Deal ice damage to random foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  13,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901743",
        "name":  "Ice Fog",
        "detail":  "Deal ice damage to random foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  19,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901744",
        "name":  "Avalanche of Frost",
        "detail":  "Deal ice damage to random foes 4 time(s).",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  26,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901746",
        "name":  "Thunderquake",
        "detail":  "Deal great lightning damage to a foe.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  22,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901747",
        "name":  "Song of Booming Thunder",
        "detail":  "Deal lightning damage to a foe 2 time(s), and gain a chance to inflict paralysis for 2 turn(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  19,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901748",
        "name":  "Tonitrus Canere",
        "detail":  "Deal lightning damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  54,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       152,
                       224,
                       296
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901749",
        "name":  "Swiftbolt",
        "detail":  "Deal lightning damage to random foes 3 time(s). More potent if acting first that turn.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  23,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901750",
        "name":  "Song of Roaring Thunder",
        "detail":  "Deal lightning damage to random foes 4 time(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  26,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901752",
        "name":  "Wind\u0027s Breath",
        "detail":  "Deal great wind damage to a foe.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  22,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901753",
        "name":  "Wind Slash",
        "detail":  "Deal wind damage to a foe 3 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  24,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901754",
        "name":  "Windblast",
        "detail":  "Deal wind damage to all foes. More potent if attacking from the back row.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  21,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901755",
        "name":  "Ventus Saltare",
        "detail":  "Deal wind damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  54,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       152,
                       224,
                       296
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901756",
        "name":  "Tune of the Tempest",
        "detail":  "Deal wind damage to random foes 3 time(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  19,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901757",
        "name":  "Swirling Storm",
        "detail":  "Deal wind damage to random foes 4 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  26,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901759",
        "name":  "Virtuous Light",
        "detail":  "Deal light damage to a foe 2 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  16,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901760",
        "name":  "Cleansing Light",
        "detail":  "Deal light damage to a foe 3 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  24,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901762",
        "name":  "Lux Congerere",
        "detail":  "Deal light damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  54,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       152,
                       224,
                       296
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901764",
        "name":  "Heaven\u0027s Vengeance",
        "detail":  "Deal great light damage to random foes 4 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  53,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901766",
        "name":  "Dark Strike",
        "detail":  "Deal dark damage to a foe 2 time(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  16,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901769",
        "name":  "Veil of Darkness",
        "detail":  "Deal dark damage to all foes, and dodge 1 physical attack with a 100% success rate.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  18,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901773",
        "name":  "Tenebrae Operire",
        "detail":  "Deal dark damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  54,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       152,
                       224,
                       296
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901775",
        "name":  "Song of Nightfall",
        "detail":  "Deal dark damage to random foes 2 time(s). Song skill.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  13,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901776",
        "name":  "Curse of Shadow",
        "detail":  "Deal dark damage to random foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  19,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901777",
        "name":  "Shadow of Remorse",
        "detail":  "Deal dark damage to random foes 4 time(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  26,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       185,
                       270,
                       355
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901779",
        "name":  "Arcane Shot",
        "detail":  "Deal non-elemental damage to a foe.",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901780",
        "name":  "Element Break",
        "detail":  "Deal great non-elemental damage to a foe, and lower Elem. Atk./Elem. Def. for 2 turn(s).",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  28,
        "target":  "Self",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901781",
        "name":  "Arcane Explosion",
        "detail":  "Deal non-elemental damage to all foes.",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  10,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       168,
                       256,
                       344
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901784",
        "name":  "Element Thief",
        "detail":  "Deal non-elemental damage to a foe 2 time(s), and steal SP equal to 5% of damage dealt.",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  15,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901785",
        "name":  "Resurrect",
        "detail":  "Grant an effect that allows the entire front row or entire back row to recover with 25% of their max. HP upon being incapacitated (one time only).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  250,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Encore",
                             "value":  "25",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901787",
        "name":  "Prayer for Rain",
        "detail":  "Grant SP regeneration to the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  20,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Second Wind",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901795",
        "name":  "Starsong",
        "detail":  "Raise Phys. Def./Elem. Def./Speed/Accuracy of an ally for turn(s). Song skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  38,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901797",
        "name":  "Song of Blessings",
        "detail":  "Extend duration of positive status effects for all allies by turn(s), and reduce negative status effects by turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  32,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901798",
        "name":  "Oppression",
        "detail":  "Lower Phys. Atk./Phys. Def. of all foes for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  12,
        "target":  "All Foes",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901799",
        "name":  "Eerie Smile",
        "detail":  "Lower Phys. Def./Elem. Def. of all foes for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  24,
        "target":  "All Foes",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901800",
        "name":  "Song of Darkness",
        "detail":  "Gain a chance to inflict blindness on a foe for turn(s). Song skill.",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901801",
        "name":  "Virulent Fog",
        "detail":  "Inflict poison, paralysis, sleep, or blindness on a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  16,
        "target":  "Single Foe",
        "turns":  "3,5,7,9",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         },
                         {
                             "name":  "Paralysis",
                             "value":  "75",
                             "efficacy":  ""
                         },
                         {
                             "name":  "Sleep",
                             "value":  "",
                             "efficacy":  ""
                         },
                         {
                             "name":  "Blindness",
                             "value":  "50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901803",
        "name":  "Donate Charge",
        "detail":  "Grant 50% of caster\u0027s remaining ultimate technique gauge to an ally.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       150,
                       200
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901806",
        "name":  "Bodyguard",
        "detail":  "Take damage from single-target attacks meant for a near-death ally for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  6,
        "target":  "Self",
        "turns":  "1,2,3,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Cover",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901807",
        "name":  "Ultimate Stance",
        "detail":  "Extend the reach of your Attack to all foes for turn(s).",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  10,
        "target":  "Self",
        "turns":  "3,4,5,6",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Extend Attack",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901808",
        "name":  "HP Recovery Up",
        "detail":  "Raise the amount restored by the equipped character\u0027s HP recovery/HP regeneration skills.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Recovery Up",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901809",
        "name":  "Incidental Analysis",
        "detail":  "Discover a random target\u0027s weak point after the equipped character acts.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901811",
        "name":  "Incidental Attack",
        "detail":  "The equipped character gains a 50% chance of also attacking when using a non-damaging skill.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901813",
        "name":  "Incidental Heal",
        "detail":  "After the equipped character acts, gain a 50% chance to restore the HP of an ally in the front row with the least HP.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901815",
        "name":  "Incidental Steal",
        "detail":  "25% chance to steal an item when attacking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901817",
        "name":  "Boon of Healing",
        "detail":  "When using an HP recovery skill, extend duration of target\u0027s augmenting effects by 1 turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901819",
        "name":  "Exacerbate",
        "detail":  "When switching from the back row, extend duration of attribute-reducing effects of target by 1 turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901822",
        "name":  "Heightened Healing",
        "detail":  "Raise the amount of HP/SP restored by the equipped character.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Resilience",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901823",
        "name":  "Saving Grace",
        "detail":  "Grants the equipped character the ability to be healed above their max. HP.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Saving Grace",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901825",
        "name":  "Sheer Focus",
        "detail":  "Focus specific spells on a single target, but raise the potency.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Sheer Focus",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901827",
        "name":  "Master of Offense",
        "detail":  "More easily land critical hits on broken foes.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Critical Break",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901828",
        "name":  "Encourage",
        "detail":  "When the equipped character moves to the back row, paired ally acts first next turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "2,2,2,2",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Last in Line",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901829",
        "name":  "Salt the Wound",
        "detail":  "The equipped character gains a 50% chance of acting twice when breaking a foe. This will not trigger in succession.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901830",
        "name":  "Patience",
        "detail":  "Give the equipped character a 25% chance to act again at the end of turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901831",
        "name":  "A Step Ahead",
        "detail":  "The equipped character will act first at the start of battle.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901832",
        "name":  "Invigorate and Inspire",
        "detail":  "Slightly fill the target\u0027s ultimate technique gauge when the equipped character uses a skill to grant an attribute-raising effect.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901836",
        "name":  "Iron Will",
        "detail":  "50% chance to nullify an attribute-reducing effect.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Null Weaknesses",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901838",
        "name":  "BP Recovery on Break",
        "detail":  "The equipped character will consume no BP when breaking a foe.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901840",
        "name":  "Purification",
        "detail":  "Attribute-reducing effects on the equipped character will be removed twice as quickly.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901841",
        "name":  "Of Equal Might",
        "detail":  "Equalizes Phys. Atk. and Elem. Atk. of the equipped character to whichever value is higher.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901842",
        "name":  "Stat Swap",
        "detail":  "Swap the equipped character\u0027s Phys. Atk. and Elem. Atk.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901885",
        "name":  "Soaring Javelin",
        "detail":  "For turn(s)., deal special polearm damage to all foes at the end of turn.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  14,
        "target":  "Self",
        "turns":  "3,4,5,6",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Swift Strikes",
                             "value":  "100",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901893",
        "name":  "Stalwart Aura",
        "detail":  "Raise Phys. Def. of the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  18,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901894",
        "name":  "Arcane Healing",
        "detail":  "Restore HP of the entire front row or entire back row, and remove an attribute-reducing effect.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  16,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901895",
        "name":  "Guardian Aura",
        "detail":  "Raise Elem. Def. of the entire front row or entire back row for turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  18,
        "target":  "Front/Back Row",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "901934",
        "name":  "Cover",
        "detail":  "Take damage from a single hit meant for a near-death ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Cover",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901969",
        "name":  "Prolonged Ailment",
        "detail":  "When the equipped character inflicts a status ailment, extend duration by 1 turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "1,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901970",
        "name":  "Resurrection",
        "detail":  "At the start of battle, grant self an effect that allows the equipped character to revive all allies with 50% of max. HP if they are the last one to become incapacitated (one time only).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Last Man Standing",
                             "value":  "50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "901971",
        "name":  "Perseverance",
        "detail":  "The equipped character\u0027s HP will be restored when near death (one time only).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901974",
        "name":  "Stalwart Stance",
        "detail":  "At the start of turn, raise the equipped character\u0027s Phys. Def. up to 5 tiers when in the front row. Effect is canceled when in the back row at the start of turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "5"
                         }
                     ]
    },
    {
        "id":  "901975",
        "name":  "Resilient Stance",
        "detail":  "At the start of turn, raise the equipped character\u0027s Elem. Def. up to 5 tiers when in the front row. Effect is canceled when in the back row at the start of turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "1",
                             "efficacy":  "5"
                         }
                     ]
    },
    {
        "id":  "901976",
        "name":  "Inspiriting Stance",
        "detail":  "At the start of turn, raise the equipped character\u0027s Elem. Atk. up to 5 tiers when in the front row. Effect is canceled when in the back row at the start of turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "1",
                             "efficacy":  "5"
                         }
                     ]
    },
    {
        "id":  "901978",
        "name":  "Battle Refinement",
        "detail":  "Slightly fill the equipped character\u0027s ultimate technique gauge when exploiting a foe\u0027s weak point with physical attacks.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "901984",
        "name":  "Ruinous Aria",
        "detail":  "Grant an ally the ability to exploit weaknesses regardless of weak points for turn(s). Song skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "2,3,4,4",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Strike Weakness",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902097",
        "name":  "Charge",
        "detail":  "",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  16,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902213",
        "name":  "Analyze All",
        "detail":  "Discover weak point(s) of all foes.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  10,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902330",
        "name":  "Lightning\u0027s Call",
        "detail":  "Deal lightning damage to a foe.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  11,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902394",
        "name":  "Extra JP",
        "detail":  "Receive additional JP at the end of battle. (The effect is not cumulative.)",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902398",
        "name":  "More Rare Monsters",
        "detail":  "Increase chances of encountering rare monsters. (The effect is not cumulative.)",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902399",
        "name":  "Recover SP",
        "detail":  "Restore SP equal to 1% of damage dealt when using Attack.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902401",
        "name":  "Radiant Arrow",
        "detail":  "Deal great bow damage to a foe.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  30,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902402",
        "name":  "Reflective Veil",
        "detail":  "Grant an ally the ability to reflect elemental attacks time(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  33,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elemental Reflection",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902403",
        "name":  "Dance of Immunity",
        "detail":  "Grant an ally the ability to nullify attribute-reducing effects for turn(s). Dance skill.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  8,
        "target":  "Single Ally",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Null Weaknesses",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902404",
        "name":  "Abating Orb",
        "detail":  "Remove 1 attribute-raising effect from a foe.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  8,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902406",
        "name":  "Defiant Spirit",
        "detail":  "When the equipped character has an attribute-reducing effect, raise BP recovery by 1 at the start of turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "BP Recovery Up",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902407",
        "name":  "Sage\u0027s Wisdom",
        "detail":  "Elemental attacks will also deal critical damage.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elemental Crit.",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902408",
        "name":  "Preventative Measures",
        "detail":  "At the start of battle, grant self the ability to nullify 3 attribute-reducing effects.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Null Weaknesses",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902409",
        "name":  "Monster Magnet",
        "detail":  "Increase the rate of random encounters. (The effect is not cumulative.)",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902410",
        "name":  "Supporting Strike",
        "detail":  "When the equipped character is in the back row, gain a 50% chance to perform a follow-up attack when paired ally attacks.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902423",
        "name":  "Ultimate Support",
        "detail":  "Increase the amount the equipped character\u0027s ultimate techique gauge fills.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902424",
        "name":  "SP Recovery",
        "detail":  "Restore SP equal to 1% of damage taken by the equipped character.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "SP Recovery",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902426",
        "name":  "Augmented Boost",
        "detail":  "Raise damage dealt during Boost when the equipped character attacks.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902427",
        "name":  "Elemental Expertise",
        "detail":  "Raise damage dealt by the equipped character\u0027s elemental attacks.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902428",
        "name":  "Physical Prowess",
        "detail":  "Enhance the equipped character\u0027s Phys. Atk./Phys. Def. during battle.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "902429",
        "name":  "Elemental Edge",
        "detail":  "Enhance the equipped character\u0027s Elem. Atk./Elem. Def. during battle.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         },
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "902430",
        "name":  "Ultimate Charge",
        "detail":  "At the start of battle, charge the equipped character\u0027s ultimate technique gauge by 1.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902431",
        "name":  "Immeasurable Power",
        "detail":  "Consume twice the SP with physical skills, but raise the potency.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902432",
        "name":  "Spirit of the Stage",
        "detail":  "Augment effects of dance and song skills, raise potency of recovery effects, and extend duration of augmenting and enfeebling effects by 1 turn.",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Augment Dance \u0026 Song",
                             "value":  "30",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902434",
        "name":  "Endless Items",
        "detail":  "25% chance to keep an item upon use.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902435",
        "name":  "Angelic Ward",
        "detail":  "Gain a 25% to nullify damage when the equipped character takes damage.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evade Atk.",
                             "value":  "25",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902436",
        "name":  "Evasive Maneuvers",
        "detail":  "Reduce the rate of random encounters by 50%. (The effect is not cumulative.)",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902437",
        "name":  "Brutal Sweep",
        "detail":  "Deal sword damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  21,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       80,
                       156,
                       232,
                       308
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902438",
        "name":  "Twin Strike",
        "detail":  "Deal great polearm damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  35,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902439",
        "name":  "Blade of Vengeance",
        "detail":  "Deal dagger damage to a foe. Lower Shield Points by 1 even when not striking weak points.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  14,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902440",
        "name":  "Triple Strike",
        "detail":  "Select a weapon and deal damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  12,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902449",
        "name":  "Light Dragon Shot",
        "detail":  "Deal great light damage to a foe, and slightly raise own ultimate technique gauge.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  29,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       210,
                       320,
                       430
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902450",
        "name":  "Twin Shot",
        "detail":  "Select a weapon and deal damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Weapon Select",
        "icon":  "",
        "sp":  22,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       195,
                       290,
                       385
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902459",
        "name":  "Healing Prayer",
        "detail":  "Grant HP recovery to an ally and restore SP by %.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  12,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       280,
                       340,
                       400
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "902460",
        "name":  "Weaken Foundation",
        "detail":  "Lower Phys. Atk./Phys. Def. of a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  6,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "902818",
        "name":  "The Strength to Protect",
        "detail":  "",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "5"
                         }
                     ]
    },
    {
        "id":  "902923",
        "name":  "Formidable Stance",
        "detail":  "At the start of turn, raise the equipped character\u0027s Phys. Atk. up to 5 tiers when in the front row. Effect is canceled when in the back row at the start of turn.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "5"
                         }
                     ]
    },
    {
        "id":  "902924",
        "name":  "Leadership",
        "detail":  "Increase tiers of command augmenting effects by 1, and extend their duration by 1 turn.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Augment Commands",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "902929",
        "name":  "Accurst Flame",
        "detail":  "Incinerate the target.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  13,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904066",
        "name":  "Triple Arc",
        "detail":  "Deal fan damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  27,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       190,
                       280,
                       370
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904067",
        "name":  "Enshroud",
        "detail":  "Gain a chance to inflict blindness on a foe for turn(s).",
        "category":  "Support",
        "subType":  "Debuff",
        "icon":  "",
        "sp":  9,
        "target":  "Single Foe",
        "turns":  "2,4,6,8",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     1,
                     1,
                     1
                 ],
        "ailments":  [
                         {
                             "name":  "Blindness",
                             "value":  "50",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904081",
        "name":  "Celebration of the Arts",
        "detail":  "Extend the duration of song and dance effects by 1 turn.",
        "category":  "Support",
        "subType":  "Utility",
        "icon":  "",
        "sp":  0,
        "target":  "Self",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Augment Dance \u0026 Song",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904126",
        "name":  "Aelfric\u0027s Grace",
        "detail":  "Revive, restore HP, and cure ailments of all allies.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "All Allies",
        "turns":  "0,0,0,0",
        "ratios":  [
                       600,
                       750,
                       900,
                       900
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904127",
        "name":  "Indestructible Flame",
        "detail":  "???",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904425",
        "name":  "Bash",
        "detail":  "Deal great staff damage to a foe.",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904427",
        "name":  "Fortify Critical",
        "detail":  "Raise Crit. of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Up",
                             "value":  "1",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904430",
        "name":  "Inspiriting Plum",
        "detail":  "Restore SP of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904432",
        "name":  "Refreshment",
        "detail":  "Grant HP regeneration to an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "120",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904434",
        "name":  "Sweeping Strike",
        "detail":  "Deal fan damage to a foe.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904435",
        "name":  "Fatal Shot",
        "detail":  "Deal bow damage to a foe.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904436",
        "name":  "Soothing Whisper",
        "detail":  "Restore HP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904438",
        "name":  "Sweeping Sturdy Shot",
        "detail":  "Deal great bow damage to all foes.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904439",
        "name":  "Pummel",
        "detail":  "Deal staff damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904441",
        "name":  "Double Cutdown",
        "detail":  "Deal great axe damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904444",
        "name":  "Verse of Incantation",
        "detail":  "Raise Elem. Atk. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904445",
        "name":  "Scarlet Wing Salute",
        "detail":  "Raise Crit. of an ally for 6 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "6,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Up",
                             "value":  "1",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904446",
        "name":  "Pierce",
        "detail":  "Deal polearm damage to a foe.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904447",
        "name":  "Sleeping Dust",
        "detail":  "Gain a chance to inflict sleep on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Sleep",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904448",
        "name":  "Spirit Corrosive",
        "detail":  "Lower Elem. Def. of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904449",
        "name":  "Fetter",
        "detail":  "Lower Speed of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Down",
                             "value":  "14",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "904450",
        "name":  "Acquire Target",
        "detail":  "Raise Accuracy of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Accuracy Up",
                             "value":  "1",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904451",
        "name":  "Uncritical Eye",
        "detail":  "Lower Crit. of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Down",
                             "value":  "15",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904452",
        "name":  "Special Stew",
        "detail":  "Restore HP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904453",
        "name":  "Light Bash",
        "detail":  "Deal staff damage to a foe.",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904454",
        "name":  "Starshower",
        "detail":  "Deal great bow damage to all foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904455",
        "name":  "Crush and Grind",
        "detail":  "Deal great axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904456",
        "name":  "Stab",
        "detail":  "Deal dagger damage to a foe.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904457",
        "name":  "Poison Dust",
        "detail":  "Gain a chance to inflict poison on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904458",
        "name":  "Avoid Danger",
        "detail":  "Raise Evasion of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evasion Up",
                             "value":  "1",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904460",
        "name":  "Sanguine Dust",
        "detail":  "Gain a chance to inflict bleeding on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Bleeding",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904461",
        "name":  "Mindrot",
        "detail":  "Lower Elem. Atk. of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Down",
                             "value":  "14",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904462",
        "name":  "Strike",
        "detail":  "Deal great tome damage to all foes.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904463",
        "name":  "Powerful Slam",
        "detail":  "Deal massive tome damage to a foe.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904464",
        "name":  "Triple Beat",
        "detail":  "Deal great tome damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904465",
        "name":  "Please Observe Silence",
        "detail":  "Lower Evasion of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evasion Down",
                             "value":  "15",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904466",
        "name":  "Noble Service",
        "detail":  "Restore HP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904467",
        "name":  "Splendor of the Wealthy",
        "detail":  "Deal light damage to a foe.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904468",
        "name":  "Acting Lessons",
        "detail":  "Raise Speed of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Up",
                             "value":  "1",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "904469",
        "name":  "Heavy Blow",
        "detail":  "Deal fan damage to a foe.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904470",
        "name":  "Healing Grape",
        "detail":  "Restore HP of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904471",
        "name":  "Numbing Dust",
        "detail":  "Gain a chance to inflict paralysis on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Paralysis",
                             "value":  "75",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904473",
        "name":  "Fiery Lunge",
        "detail":  "Deal fire damage to a foe.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904474",
        "name":  "Mighty Blow",
        "detail":  "Deal massive polearm damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904475",
        "name":  "Ice Soulstone",
        "detail":  "Deal ice damage to all foes.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904476",
        "name":  "Slice",
        "detail":  "Deal sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904477",
        "name":  "Spirited Slash",
        "detail":  "Deal great sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904478",
        "name":  "Inescapable Mire",
        "detail":  "Lower Evasion of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evasion Down",
                             "value":  "15",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904479",
        "name":  "Mass Mindrot",
        "detail":  "Lower Elem. Atk. of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904480",
        "name":  "Wild Bash",
        "detail":  "Deal staff damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904481",
        "name":  "Stout Blow",
        "detail":  "Deal fan damage to a foe.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904482",
        "name":  "Sturdy Shot",
        "detail":  "Deal great bow damage to a foe.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904483",
        "name":  "Spirit of the Arena",
        "detail":  "Raise Crit. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Up",
                             "value":  "2",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904485",
        "name":  "Assortment of Weapons",
        "detail":  "Raise Phys. Atk. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904486",
        "name":  "Twin Slam",
        "detail":  "Deal tome damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904487",
        "name":  "Sound Advice",
        "detail":  "Raise Elem. Def. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904488",
        "name":  "Cleave in Two",
        "detail":  "Deal great axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904491",
        "name":  "Rockbreaker",
        "detail":  "Deal axe damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904492",
        "name":  "Double Killer Bee",
        "detail":  "Deal great dagger damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904493",
        "name":  "Violent Gale",
        "detail":  "Deal great wind damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904494",
        "name":  "Slam",
        "detail":  "Deal tome damage to a foe.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904495",
        "name":  "Numbing Twinkle",
        "detail":  "Gain a chance to inflict paralysis on all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Paralysis",
                             "value":  "75",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904496",
        "name":  "Quick Strike",
        "detail":  "Deal wind damage to all foes.",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904497",
        "name":  "Daring Slash",
        "detail":  "Deal sword damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904498",
        "name":  "Sweeping Flash",
        "detail":  "Deal sword damage to all foes, and lower Speed and Evasion for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904499",
        "name":  "Poison Slash",
        "detail":  "Deal dagger damage to a foe, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904500",
        "name":  "Traumatic Bash",
        "detail":  "Deal great staff damage to a foe.",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904501",
        "name":  "The Big Haul",
        "detail":  "Deal polearm damage to all foes.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904502",
        "name":  "Spin Swing",
        "detail":  "Deal axe damage to all foes.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904503",
        "name":  "Mighty Bash",
        "detail":  "Deal great staff damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904504",
        "name":  "Shatter and Smash",
        "detail":  "Deal great sword damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904505",
        "name":  "Godly Thrust",
        "detail":  "Deal massive polearm damage to a foe.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904506",
        "name":  "Poison Blade",
        "detail":  "Deal sword damage to a foe, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904507",
        "name":  "Sting",
        "detail":  "Deal dagger damage to a foe.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904508",
        "name":  "My Biggest Fan",
        "detail":  "Deal fan damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904509",
        "name":  "Light Soulstone",
        "detail":  "Deal light damage to all foes.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904510",
        "name":  "Studies of Ancient Civilizations",
        "detail":  "Raise Elem. Atk. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "2",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904511",
        "name":  "Superior Shield",
        "detail":  "Raise Phys. Def. of an ally for 6 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "6,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904512",
        "name":  "Mass Poison Dust",
        "detail":  "Gain a chance to inflict poison on all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904513",
        "name":  "Light Sweep",
        "detail":  "Deal fan damage to all foes.",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904514",
        "name":  "Sandcat Dance",
        "detail":  "Deal massive fan damage to all foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904515",
        "name":  "Proper Maintenance",
        "detail":  "Raise Phys. Def./Elem. Def. of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904517",
        "name":  "Protection Against Bandits",
        "detail":  "Raise Phys. Def. of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904518",
        "name":  "Lacerating Cleave",
        "detail":  "Deal great axe damage to a foe, and gain a chance to inflict bleeding for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904520",
        "name":  "Weapon Maintenance",
        "detail":  "Raise Phys. Atk./Elem. Atk./Crit. of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904521",
        "name":  "Peerless Wild Thrust",
        "detail":  "Deal great polearm damage to random foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904522",
        "name":  "Yard Work",
        "detail":  "Deal dagger damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904523",
        "name":  "Peerless Double Stab",
        "detail":  "Deal great polearm damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904524",
        "name":  "Elemental Slasher",
        "detail":  "Deal sword damage to a foe, and lower Elem. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904525",
        "name":  "Throw Light Soulstone",
        "detail":  "Deal light damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904526",
        "name":  "Dual Slam",
        "detail":  "Deal great tome damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904528",
        "name":  "Quadrille",
        "detail":  "Slightly fill ultimate technique gauge of an ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904529",
        "name":  "Thunder Soulstone (M)",
        "detail":  "Deal great lightning damage to all foes.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904530",
        "name":  "Trice Blade",
        "detail":  "Deal massive sword damage to all foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904531",
        "name":  "Single Edge",
        "detail":  "Deal dagger damage to a foe.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904532",
        "name":  "Autumn Rain",
        "detail":  "Deal great bow damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904533",
        "name":  "Curative Herb",
        "detail":  "Cure an ally of status ailments.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904534",
        "name":  "Dagger Storm",
        "detail":  "Deal dagger damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904535",
        "name":  "A Father\u0027s Tears",
        "detail":  "Lower Crit./Accuracy of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Down",
                             "value":  "15",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904536",
        "name":  "Overbearing Love",
        "detail":  "Grant great HP regeneration to an ally for 5 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "5,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "160",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904537",
        "name":  "Whirling Blow",
        "detail":  "Deal polearm damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904538",
        "name":  "Everyday Tips",
        "detail":  "Raise Elem. Atk. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904539",
        "name":  "Fire Soulstone (M)",
        "detail":  "Deal great fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904540",
        "name":  "Ultimate Arcanum",
        "detail":  "Deal massive non-elemental damage to all foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Non-Elemental",
        "icon":  "assets/icons/icon_spirit.svg",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904541",
        "name":  "Noisome Breath",
        "detail":  "Gain a chance to inflict poison/blindness on all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904542",
        "name":  "Summon Winds",
        "detail":  "Deal great wind damage to random foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904543",
        "name":  "Ice Expertise",
        "detail":  "Lower Ice Resistance of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Ice Res. Down",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904544",
        "name":  "Brisk March",
        "detail":  "Raise Speed of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Up",
                             "value":  "1",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "904545",
        "name":  "Chain Lightning",
        "detail":  "Deal lightning damage to random foes 3 time(s), and gain a chance to inflict paralysis for 2 turn(s).",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904546",
        "name":  "Double Sweep",
        "detail":  "Deal fan damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904547",
        "name":  "Sweeping Cleave",
        "detail":  "Deal axe damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904548",
        "name":  "Hot Beef Stew",
        "detail":  "Restore HP of the entire front row or entire back row, and cure status ailments.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904549",
        "name":  "Preaching Peace",
        "detail":  "Lower Crit. of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Down",
                             "value":  "15",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904550",
        "name":  "Inspiriting Plum Basket",
        "detail":  "Restore SP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904551",
        "name":  "Wild Luminescence",
        "detail":  "Deal light damage to random foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904552",
        "name":  "Mass Mental Augmentation",
        "detail":  "Raise Elem. Atk./Elem. Def. of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Elem. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904553",
        "name":  "Lacerating Assault",
        "detail":  "Deal dagger damage to all foes, and gain a chance to inflict bleeding for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904554",
        "name":  "Heaven\u0027s Judgment",
        "detail":  "Deal great light damage to random foes 4 time(s).",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904556",
        "name":  "Thwomp",
        "detail":  "Deal great tome damage to random foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904557",
        "name":  "Healing Grape (M)",
        "detail":  "Greatly restore HP of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904558",
        "name":  "Panacea",
        "detail":  "Cure an ally of status ailments.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904559",
        "name":  "Warm Reception",
        "detail":  "Restore HP/SP of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904560",
        "name":  "Mole Bash",
        "detail":  "Deal staff damage to random foes 1 to 5 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904562",
        "name":  "Crush the Weak",
        "detail":  "Deal axe damage to all foes, and lower Phys. Atk. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904563",
        "name":  "Fan Dance of Slumber",
        "detail":  "Deal fan damage to all foes, and gain a chance to inflict sleep for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904564",
        "name":  "Grand Slash",
        "detail":  "Deal great sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904565",
        "name":  "Crumbling Cut",
        "detail":  "Deal great sword damage to a foe, and lower Phys. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904566",
        "name":  "Gladiators\u0027 Love Interest",
        "detail":  "Raise Accuracy of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Accuracy Up",
                             "value":  "1",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904567",
        "name":  "Triple Crack",
        "detail":  "Deal dagger damage to a foe 3 time(s). Lower Shield Points regardless of target\u0027s weak points.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904568",
        "name":  "Hard Slash",
        "detail":  "Deal great critical axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904569",
        "name":  "Total Destruction Blade",
        "detail":  "Deal great sword damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904570",
        "name":  "Unyielding Strike",
        "detail":  "Deal critical polearm damage to a foe, and raise Crit. of entire front row for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904571",
        "name":  "Muddy Arrow",
        "detail":  "Deal bow damage to all foes, and lower Speed for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904572",
        "name":  "Critical Eye",
        "detail":  "Raise Crit. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Up",
                             "value":  "1",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904573",
        "name":  "You Heard It from Me",
        "detail":  "Discover 3 weak point(s) of all foes.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904574",
        "name":  "Wind Protection",
        "detail":  "Raise Wind Resistance of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Wind Res. Up",
                             "value":  "15",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904575",
        "name":  "Chain Shadow Impact",
        "detail":  "Deal dark damage to a foe 2 time(s).",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904576",
        "name":  "Barrage",
        "detail":  "Deal bow damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904577",
        "name":  "Ancient Thunderclap",
        "detail":  "Deal massive lightning damage to random foes 5 time(s), and gain a chance to inflict paralysis for 3 turn(s).",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       200,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904578",
        "name":  "Burn",
        "detail":  "Deal great fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904579",
        "name":  "Impact",
        "detail":  "Deal tome damage to all foes.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904582",
        "name":  "Questionable Powder",
        "detail":  "Gain a chance to inflict poison/paralysis on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904583",
        "name":  "Poison Cleave",
        "detail":  "Deal axe damage to a foe, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904584",
        "name":  "Ice Soulstone (M)",
        "detail":  "Deal great ice damage to all foes.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904585",
        "name":  "Art of Rapid Rowing",
        "detail":  "Raise Speed/Crit./Accuracy of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Accuracy Up",
                             "value":  "1",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904586",
        "name":  "Poison Assault",
        "detail":  "Deal dagger damage to all foes, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904587",
        "name":  "Fury Gashes",
        "detail":  "Deal great axe damage to a foe 1 to 3 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904588",
        "name":  "Wild Deadly Thrust",
        "detail":  "Deal polearm damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904590",
        "name":  "Leg Sweep",
        "detail":  "Deal fan damage to all foes, and lower Evasion for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904591",
        "name":  "Anti-Attack",
        "detail":  "Lower Phys. Atk./Elem. Atk. of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904592",
        "name":  "Inescapable Fate",
        "detail":  "Deal polearm damage to all foes, and lower Evasion for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904593",
        "name":  "Valiant Charge",
        "detail":  "Deal great axe damage to all foes.",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904595",
        "name":  "Stygian Abyss",
        "detail":  "Deal great dark damage to all foes.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904596",
        "name":  "Repeated Brutal Bludgeon",
        "detail":  "Deal great staff damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904597",
        "name":  "Matron\u0027s Wisdom",
        "detail":  "Lower Speed of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Down",
                             "value":  "15",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "904598",
        "name":  "Warm Fur",
        "detail":  "Grant HP regeneration to the entire front row or entire back row, and raise Ice Resistance for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "80",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904599",
        "name":  "Light Expertise",
        "detail":  "Lower Light Resistance of all foes for 3 turn(s)",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Light Res. Down",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904600",
        "name":  "Wild Cut",
        "detail":  "Deal sword damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904601",
        "name":  "Windslicer Arrow",
        "detail":  "Deal wind damage to random foes 3 time(s).",
        "category":  "Elemental",
        "subType":  "Wind",
        "icon":  "assets/icons/icon_wind.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904602",
        "name":  "Nimble Spirit of Frost",
        "detail":  "Raise Speed/Evasion/Ice Resistance of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Up",
                             "value":  "1",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "904603",
        "name":  "Prayer of Mending",
        "detail":  "Restore HP of an ally, and grant HP regeneration for 2 turn(s).",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904604",
        "name":  "Memorial Prayer",
        "detail":  "Restore HP and cure bleeding of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904605",
        "name":  "Dark Slam",
        "detail":  "Deal tome damage to a foe, and lower Dark Resistance for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904606",
        "name":  "Divine Bludgeon",
        "detail":  "Deal great staff damage to all foes.",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904607",
        "name":  "Repeated Traumatic Bash",
        "detail":  "Deal great staff damage to a foe 2 time(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904608",
        "name":  "Dark Protection",
        "detail":  "Raise Dark Resistance of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Dark Res. Up",
                             "value":  "15",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904609",
        "name":  "Guardhewer",
        "detail":  "Deal sword damage to all foes, and lower Phys. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904610",
        "name":  "Black Corrosion",
        "detail":  "Gain a chance to lower Blindness/Dark Resistance of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Dark Res. Down",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904611",
        "name":  "Mercy for the Lost",
        "detail":  "Lower Crit. of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Crit. Down",
                             "value":  "15",
                             "efficacy":  "30"
                         }
                     ]
    },
    {
        "id":  "904612",
        "name":  "Song of Sandstorms",
        "detail":  "Deal fire damage to all foes, and lower Phys. Atk. for 2 turn(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904613",
        "name":  "The Ultimate Fan",
        "detail":  "Deal fan damage to all foes, and lower Crit. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904614",
        "name":  "Lightning Protection",
        "detail":  "Raise Lightning Resistance of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Lightning Res. Up",
                             "value":  "15",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904615",
        "name":  "Fire Expertise",
        "detail":  "Lower Fire Resistance of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Fire Res. Down",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904616",
        "name":  "Sandrunner",
        "detail":  "Raise Speed/Wind Resistance of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Up",
                             "value":  "1",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "904617",
        "name":  "Antlion",
        "detail":  "Deal great dagger damage to all foes, and lower Dagger Resistance for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904618",
        "name":  "Full Spin",
        "detail":  "Deal great axe damage to all foes.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904619",
        "name":  "Levinfall",
        "detail":  "Deal great lightning damage to all foes.",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904620",
        "name":  "Lacerating Slash",
        "detail":  "Deal great sword damage to a foe, and gain a chance to inflict bleeding for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904621",
        "name":  "True Volley",
        "detail":  "Deal critical bow damage to all foes.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904622",
        "name":  "Spirit of Fire",
        "detail":  "Raise Phys. Atk./Fire Resistance and lower Accuracy of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904623",
        "name":  "Noblewoman\u0027s Fury",
        "detail":  "Deal fan damage to random foes 2 time(s), and lower Fan Resistance for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904624",
        "name":  "Wild Lunge",
        "detail":  "Deal great polearm damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904625",
        "name":  "Full Flourish",
        "detail":  "Deal great polearm damage to all foes, and lower Polearm Resistance for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904626",
        "name":  "Poison",
        "detail":  "Gain a chance to inflict poison on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904628",
        "name":  "Slash",
        "detail":  "Deal dagger damage to a foe.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904629",
        "name":  "Lightning Expertise",
        "detail":  "Lower Lightning Resistance of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Lightning Res. Down",
                             "value":  "1",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904630",
        "name":  "Sailor\u0027s Song",
        "detail":  "Raise Phys. Def./Elem. Def. of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904631",
        "name":  "Mass Sleeping Dust",
        "detail":  "Gain a chance to inflict sleep on all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Sleep",
                             "value":  "",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904632",
        "name":  "Triple Threat",
        "detail":  "Deal tome damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904633",
        "name":  "Old Man\u0027s Words",
        "detail":  "Fill ultimate technique gauge of an ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904634",
        "name":  "Pointed Shot",
        "detail":  "Deal bow damage to a foe.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904635",
        "name":  "Double Burst",
        "detail":  "Deal great dagger damage to a foe 2 time(s). Lower Shield Points regardless of target\u0027s weak points.",
        "category":  "Physical",
        "subType":  "Dagger",
        "icon":  "assets/icons/icon_dagger.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904636",
        "name":  "Light Soulstone (M)",
        "detail":  "Deal great light damage to all foes.",
        "category":  "Elemental",
        "subType":  "Light",
        "icon":  "assets/icons/icon_light.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904637",
        "name":  "Ingredient Merchant\u0027s Agility",
        "detail":  "Raise Accuracy/Evasion of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Accuracy Up",
                             "value":  "1",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904638",
        "name":  "Inspiriting Plum (M)",
        "detail":  "Greatly restore SP of an ally.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904639",
        "name":  "Healing Grape Bunch",
        "detail":  "Restore HP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904640",
        "name":  "Rainshower",
        "detail":  "Deal bow damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904641",
        "name":  "Mass Physical Degradation",
        "detail":  "Lower Phys. Atk./Phys. Def. of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904642",
        "name":  "Attacking Posture",
        "detail":  "Raise Phys. Atk./Elem. Atk. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904644",
        "name":  "Frenzied Thrusts",
        "detail":  "Deal polearm damage to all foes up to 10 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904646",
        "name":  "Dispiriting Dance",
        "detail":  "Deal fan damage to all foes, and lower Elem. Def. for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904647",
        "name":  "Mass Inhibit Offense",
        "detail":  "Lower Phys. Atk./Elem. Atk. of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904648",
        "name":  "Fire Soulstone (L)",
        "detail":  "Deal massive fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904649",
        "name":  "Hazy Slash",
        "detail":  "Deal great sword damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904650",
        "name":  "Dual Harvest",
        "detail":  "Deal great axe damage to all foes 2 time(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904651",
        "name":  "Urus Slash",
        "detail":  "Deal great critical axe damage to a foe.",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904652",
        "name":  "Random Grand Slam",
        "detail":  "Deal tome damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904654",
        "name":  "Extort",
        "detail":  "Lower Phys. Def./Elem. Def. of a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Down",
                             "value":  "15",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904655",
        "name":  "Physical Boost",
        "detail":  "Raise Phys. Atk./Phys. Def. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Atk. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904656",
        "name":  "Leg Thrust",
        "detail":  "Deal polearm damage to a foe, and lower Speed for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904657",
        "name":  "Greater Panacea",
        "detail":  "Grant HP regeneration to an ally for 2 turn(s), and cure status ailments.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "2,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Vim and Vigor",
                             "value":  "100",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904658",
        "name":  "Grooming",
        "detail":  "Greatly restore HP of an ally, and cure status ailments.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904660",
        "name":  "Song of the Fire God",
        "detail":  "Deal massive fire damage to all foes, and lower Speed for 2 turn(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904662",
        "name":  "Sturdy Peerless Shot",
        "detail":  "Deal massive bow damage to a foe.",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904663",
        "name":  "Sweeping Slash",
        "detail":  "Deal sword damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904664",
        "name":  "Tome Tempest",
        "detail":  "Deal great tome damage to all foes.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904665",
        "name":  "Personal Collection",
        "detail":  "Deal great tome damage to random foes 2 to 4 time(s).",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     2,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904666",
        "name":  "Mass Numbing Dust",
        "detail":  "Gain a chance to inflict paralysis on all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Paralysis",
                             "value":  "75",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904667",
        "name":  "Light Protection",
        "detail":  "Raise Light Resistance of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Light Res. Up",
                             "value":  "15",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904668",
        "name":  "Skull Slash",
        "detail":  "Deal great sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904669",
        "name":  "Trifold Thrust",
        "detail":  "Deal polearm damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904670",
        "name":  "Defensive Posture",
        "detail":  "Raise Phys. Def./Elem. Def. of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Phys. Def. Up",
                             "value":  "1",
                             "efficacy":  "20"
                         }
                     ]
    },
    {
        "id":  "904671",
        "name":  "Gargantuan Slam",
        "detail":  "Deal massive tome damage to a foe.",
        "category":  "Physical",
        "subType":  "Tome",
        "icon":  "assets/icons/icon_tome.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904672",
        "name":  "A Joyous Lesson",
        "detail":  "Raise Light/Dark Resistance of an ally for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Single Ally",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Light Res. Up",
                             "value":  "15",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904673",
        "name":  "Dragonsbreath",
        "detail":  "Deal fire damage to all foes.",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904674",
        "name":  "Crushing Reprisal",
        "detail":  "Deal great staff damage to all foes, and discover 1 weak point(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904676",
        "name":  "Severing Slice",
        "detail":  "Deal axe damage to random foes 3 time(s), and gain a chance to inflict paralysis for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Axe",
        "icon":  "assets/icons/icon_axe.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904677",
        "name":  "Toxic Stave",
        "detail":  "Deal staff damage to all foes, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Staff",
        "icon":  "assets/icons/icon_staff.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904678",
        "name":  "Accurst Duskfall",
        "detail":  "Deal great dark damage to all foes 3 time(s). Lower Shield Points regardless of targets\u0027 weak points.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904679",
        "name":  "Blinding Flash",
        "detail":  "Deal great sword damage to all foes, and lower Accuracy for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904680",
        "name":  "Triple Sturdy Shot",
        "detail":  "Deal great bow damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904681",
        "name":  "Wild Lacerating Thrust",
        "detail":  "Deal great polearm damage to a foe 3 time(s), and gain a chance to inflict bleeding for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904682",
        "name":  "Poison Chomp",
        "detail":  "Deal non-elemental damage to random foes, and gain a chance to inflict poison for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Unarmed",
        "icon":  "assets/icons/icon_unarmed.svg",
        "sp":  0,
        "target":  "Self",
        "turns":  "2,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904683",
        "name":  "Deadly Wine",
        "detail":  "Gain a chance to inflict poison/bleeding on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Poison",
                             "value":  "5",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904685",
        "name":  "Mass Fetter",
        "detail":  "Lower Speed of all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Speed Down",
                             "value":  "15",
                             "efficacy":  "25"
                         }
                     ]
    },
    {
        "id":  "904686",
        "name":  "Ice Soulstone (L)",
        "detail":  "Deal massive ice damage to all foes.",
        "category":  "Elemental",
        "subType":  "Ice",
        "icon":  "assets/icons/icon_ice.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904687",
        "name":  "Catastrophe",
        "detail":  "Deal massive sword damage to a foe.",
        "category":  "Physical",
        "subType":  "Sword",
        "icon":  "assets/icons/icon_sword.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904688",
        "name":  "Stand Still!",
        "detail":  "Lower Evasion of all foes for 6 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "6,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Evasion Down",
                             "value":  "15",
                             "efficacy":  "15"
                         }
                     ]
    },
    {
        "id":  "904689",
        "name":  "Well Done",
        "detail":  "Deal fire damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Fire",
        "icon":  "assets/icons/icon_fire.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904690",
        "name":  "Wild Fatal Shot",
        "detail":  "Deal great bow damage to random foes 3 time(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904691",
        "name":  "Foul Breath",
        "detail":  "Gain a chance to inflict toxin/blindness on all foes for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     1,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Toxin",
                             "value":  "10",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904692",
        "name":  "Eternal Rancour",
        "detail":  "Deal great dark damage to a foe.",
        "category":  "Elemental",
        "subType":  "Dark",
        "icon":  "assets/icons/icon_dark.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904693",
        "name":  "Peerless Trifold Thrust",
        "detail":  "Deal great polearm damage to a foe 3 time(s).",
        "category":  "Physical",
        "subType":  "Polearm",
        "icon":  "assets/icons/icon_polearm.png",
        "sp":  0,
        "target":  "Single Foe",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904696",
        "name":  "Wild Quadruple Bash",
        "detail":  "Deal fan damage to random foes 4 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904697",
        "name":  "Chain Flash of Lightning",
        "detail":  "Deal lightning damage to all foes 2 time(s).",
        "category":  "Elemental",
        "subType":  "Lightning",
        "icon":  "assets/icons/icon_lightning.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904698",
        "name":  "Deceiving Shot",
        "detail":  "Deal bow damage to all foes, and gain a chance to inflict blindness for 2 turn(s).",
        "category":  "Physical",
        "subType":  "Bow",
        "icon":  "assets/icons/icon_bow.png",
        "sp":  0,
        "target":  "All Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904699",
        "name":  "Healing Hymn",
        "detail":  "Restore HP of the entire front row or entire back row.",
        "category":  "Support",
        "subType":  "Recovery",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "0,0,0,0",
        "ratios":  [
                       150,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904700",
        "name":  "Maiden\u0027s Wild Waltz",
        "detail":  "Deal great fan damage to random foes 2 to 6 time(s).",
        "category":  "Physical",
        "subType":  "Fan",
        "icon":  "assets/icons/icon_fan.png",
        "sp":  0,
        "target":  "Random Foes",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     2,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904701",
        "name":  "Maiden\u0027s Guidance",
        "detail":  "Fill ultimate technique gauge of the entire front row or the entire back row.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904702",
        "name":  "Fire Protection",
        "detail":  "Raise Fire Resistance of the entire front row or entire back row for 3 turn(s).",
        "category":  "Support",
        "subType":  "Buff",
        "icon":  "",
        "sp":  0,
        "target":  "Front/Back Row",
        "turns":  "3,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [
                         {
                             "name":  "Fire Res. Up",
                             "value":  "15",
                             "efficacy":  ""
                         }
                     ]
    },
    {
        "id":  "904704",
        "name":  "A Helping Paw",
        "detail":  "Fill ultimate technique gauge of an ally.",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    },
    {
        "id":  "904705",
        "name":  "Concoct: Anesthetic Bloodbane",
        "detail":  "Gain a chance to inflict paralysis/bleeding on a foe for 3 turn(s).",
        "category":  "Passive",
        "subType":  "Passive Trait",
        "icon":  "",
        "sp":  0,
        "target":  "Passive",
        "turns":  "0,0,0,0",
        "ratios":  [
                       100,
                       100,
                       100,
                       100
                   ],
        "hits":  [
                     0,
                     0,
                     0,
                     0
                 ],
        "ailments":  [

                     ]
    }
];
