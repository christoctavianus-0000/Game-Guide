/**
 * Data contracts shared by both codex pages.
 *
 * These describe the exact shape the exporters emit (parse_skill_data.ps1 and
 * parse_equipment_data.py). If a regeneration renames or drops a field, the
 * typecheck fails here before the UI can silently break.
 */

interface SkillAilment {
  name: string;
  value: string;
  efficacy: string;
}

interface SkillRecord {
  id: string;
  name: string;
  detail: string;
  category: 'Physical' | 'Elemental' | 'Support' | 'Passive';
  subType: string;
  icon: string;
  sp: number;
  target: string;
  turns: string;
  /** One potency ratio per boost level, index 0 = base. */
  ratios: number[];
  /** One hit count per boost level, index 0 = base. */
  hits: number[];
  ailments: SkillAilment[];
}

interface EquipmentStats {
  hp: number;
  sp: number;
  patk: number;
  pdef: number;
  matk: number;
  mdef: number;
  spd: number;
  crt: number;
  acc: number;
  eva: number;
}

interface EquipmentRecord {
  id: string;
  recordType: 'equipment';
  kind: 'Weapon' | 'Armor';
  name: string;
  /** Weapon type, or Headgear / Body Armor / Shield / Accessories. */
  type: string;
  /** Relative asset path for weapons; empty string for armor and accessories. */
  icon: string;
  stats: EquipmentStats;
  effect: string;
  source: string;
  /** Original price text; may list two prices. */
  cost: string;
  /** Lowest parsed price, or null when the item has no listed price. */
  costValue: number | null;
}

/** One filter chip entry in either codex. */
interface SubtypeChip {
  id: string;
  label: string;
  icon?: string;
  glyph?: string;
}

/**
 * An element the codex apps read or mutate interactively (inputs, selects,
 * buttons). document.getElementById returns HTMLElement, so the interactive
 * surface is modelled as optional members rather than concrete DOM types.
 */
type InteractiveElement = HTMLElement & {
  value?: string;
  disabled?: boolean;
  options?: HTMLOptionsCollection | any;
  src?: string;
  alt?: string;
  click?: () => void;
  focus?: (options?: FocusOptions) => void;
};

/** Element ids of index.html, typed by role. */
interface SkillCodexElements {
  metricTotal: HTMLElement | null;
  metricPhysical: HTMLElement | null;
  metricElemental: HTMLElement | null;
  metricSupport: HTMLElement | null;
  metricPassive: HTMLElement | null;
  favToggleBtn: InteractiveElement | null;
  favCount: HTMLElement | null;
  categoryTabs: HTMLElement | null;
  catCountPhysical: HTMLElement | null;
  catCountElemental: HTMLElement | null;
  catCountSupport: HTMLElement | null;
  catCountPassive: HTMLElement | null;
  catCountAll: HTMLElement | null;
  skillSearchInput: InteractiveElement | null;
  clearSearchBtn: InteractiveElement | null;
  subtypeChipsWrap: HTMLElement | null;
  targetFilter: InteractiveElement | null;
  spFilter: InteractiveElement | null;
  sortFilter: InteractiveElement | null;
  viewToggleBtn: InteractiveElement | null;
  resultsCount: HTMLElement | null;
  resetFiltersBtn: InteractiveElement | null;
  skillsGrid: HTMLElement | null;
  emptyState: HTMLElement | null;
  emptyResetBtn: InteractiveElement | null;
  paginationFooter: HTMLElement | null;
  paginationInfo: HTMLElement | null;
  prevPageBtn: InteractiveElement | null;
  nextPageBtn: InteractiveElement | null;
  pageCurrent: HTMLElement | null;
  detailModal: HTMLElement | null;
  modalCloseBtn: InteractiveElement | null;
  modalDoneBtn: InteractiveElement | null;
  modalFavBtn: InteractiveElement | null;
  modalIconBadge: HTMLElement | null;
  modalCategory: HTMLElement | null;
  modalSubType: HTMLElement | null;
  modalSp: HTMLElement | null;
  modalTarget: HTMLElement | null;
  modalSkillName: HTMLElement | null;
  modalId: HTMLElement | null;
  modalDescription: HTMLElement | null;
  modalBoostSection: HTMLElement | null;
  modalBoostTbody: HTMLElement | null;
  modalAilmentsSection: HTMLElement | null;
  modalAilmentsList: HTMLElement | null;
  modalSourceSection: HTMLElement | null;
  modalSource: HTMLElement | null;
  modalSpecsGrid: HTMLElement | null;
}

/** Element ids of equipment.html, typed by role. */
interface EquipmentCodexElements {
  metricTotal: HTMLElement | null;
  metricWeapons: HTMLElement | null;
  metricArmor: HTMLElement | null;
  metricAccessories: HTMLElement | null;
  favToggleBtn: InteractiveElement | null;
  favCount: HTMLElement | null;
  categoryTabs: HTMLElement | null;
  catCountAll: HTMLElement | null;
  catCountWeapon: HTMLElement | null;
  catCountArmor: HTMLElement | null;
  catCountAccessories: HTMLElement | null;
  equipSearchInput: InteractiveElement | null;
  clearSearchBtn: InteractiveElement | null;
  subtypeChipsWrap: HTMLElement | null;
  statFilter: InteractiveElement | null;
  minStatFilter: InteractiveElement | null;
  sortFilter: InteractiveElement | null;
  resultsCount: HTMLElement | null;
  viewToggleBtn: InteractiveElement | null;
  resetFiltersBtn: InteractiveElement | null;
  equipGrid: HTMLElement | null;
  equipTableWrap: HTMLElement | null;
  equipTableBody: HTMLElement | null;
  emptyState: HTMLElement | null;
  emptyResetBtn: InteractiveElement | null;
  paginationFooter: HTMLElement | null;
  paginationInfo: HTMLElement | null;
  prevPageBtn: InteractiveElement | null;
  nextPageBtn: InteractiveElement | null;
  pageCurrent: HTMLElement | null;
  detailModal: HTMLElement | null;
  modalCloseBtn: InteractiveElement | null;
  modalDoneBtn: InteractiveElement | null;
  modalFavBtn: InteractiveElement | null;
  modalIconBadge: HTMLElement | null;
  modalKind: HTMLElement | null;
  modalType: HTMLElement | null;
  modalCost: HTMLElement | null;
  modalSource: HTMLElement | null;
  modalItemName: HTMLElement | null;
  modalItemId: HTMLElement | null;
  modalEffectSection: HTMLElement | null;
  modalEffectText: HTMLElement | null;
  modalStatsSection: HTMLElement | null;
  modalStatsGrid: HTMLElement | null;
  modalSpecsGrid: HTMLElement | null;
}

/** Character codex types */
interface CharacterSkill {
  name: string;
  type: string;
  cost?: string;
  description?: string;
  unmasterable?: boolean;
  other?: string;
  unlock?: string;
}

interface CharacterRecord {
  id: string;
  name: string;
  title?: string;
  job: string;
  weapons: string;
  unlock?: string;
  skills: CharacterSkill[];
  [key: string]: any;
}

interface CharacterJobRecord {
  id: string;
  name: string;
  weapons: string;
  skills: CharacterSkill[];
  [key: string]: any;
}

interface CharacterCodexElements {
  metricCharacterCount: HTMLElement | null;
  metricJobCount: HTMLElement | null;
  searchInput: InteractiveElement | null;
  clearSearchBtn: InteractiveElement | null;
  jobTabs: HTMLElement | null;
  weaponFilter: HTMLElement | null;
  grid: HTMLElement | null;
  emptyState: HTMLElement | null;
  resetBtn: InteractiveElement | null;
  resultsCount: HTMLElement | null;
  emptyResetBtn: InteractiveElement | null;
  modal: HTMLElement | null;
  modalBadge: HTMLElement | null;
  modalKind: HTMLElement | null;
  modalMeta: HTMLElement | null;
  modalName: HTMLElement | null;
  modalId: HTMLElement | null;
  modalDescription: HTMLElement | null;
  modalAmitySection: HTMLElement | null;
  modalAmity: HTMLElement | null;
  skillList: HTMLElement | null;
  jobSwitchSection: HTMLElement | null;
  jobSwitchList: HTMLElement | null;
  modalClose: InteractiveElement | null;
  modalDone: InteractiveElement | null;
  modalImagePanel: HTMLElement | null;
  modalImage: InteractiveElement | null;
  modalImageFallback: HTMLElement | null;
  modalPortraitBtn: InteractiveElement | null;
  modalSpriteBtn: InteractiveElement | null;
  modalImageToggle: HTMLElement | null;
}

/** Enemy codex types */
interface EnemySkill {
  name: string;
  type: string;
}

interface EnemyRecord {
  id: string | number;
  name: string;
  area: string;
  subArea: string;
  type: string;
  shields: number | string;
  weaknesses: string[];
  weakness?: string;
  level: number | string;
  hp?: number;
  patk?: number;
  pdef?: number;
  matk?: number;
  mdef?: number;
  speed?: number;
  crit?: number;
  accuracy?: number;
  evasion?: number;
  exp?: number;
  jp?: number;
  steal: string;
  drop: string;
  immunities: string;
  skills: EnemySkill[];
  [key: string]: any;
}

interface EnemyCodexElements {
  enemyMetricTotal: HTMLElement | null;
  enemyMetricAreas: HTMLElement | null;
  enemySearchInput: InteractiveElement | null;
  enemyClearSearch: InteractiveElement | null;
  enemyAreaFilter: InteractiveElement | null;
  enemySubAreaFilter: InteractiveElement | null;
  enemyWeaknessFilter: InteractiveElement | null;
  enemyTypeTabs: HTMLElement | null;
  enemyCatCountAll: HTMLElement | null;
  enemyCatCountRegular: HTMLElement | null;
  enemyCatCountBoss: HTMLElement | null;
  enemyCatCountElite: HTMLElement | null;
  enemyCatCountArena: HTMLElement | null;
  enemyCatCountSidequest: HTMLElement | null;
  enemyCatCountRare: HTMLElement | null;
  enemySortFilter: InteractiveElement | null;
  enemyResultsCount: HTMLElement | null;
  enemyResetBtn: InteractiveElement | null;
  enemyChunksGrid: HTMLElement | null;
  enemyEmptyState: HTMLElement | null;
  enemyEmptyResetBtn: InteractiveElement | null;
  enemyModal: HTMLElement | null;
  enemyModalClose: InteractiveElement | null;
  enemyModalContent: HTMLElement | null;
}

/** NPC codex types */
interface NpcRecord {
  id: string;
  name: string;
  area: string;
  subArea: string;
  type: string;
  level: number | null;
  levelText?: string;
  inquire?: string;
  invite?: string;
  inviteDesc?: string;
  inviteFacility?: string;
  required?: string;
  danger?: number | null;
  strength?: string;
  helperSkill?: string;
  helperType?: string;
  uses?: string | number;
  helperDesc?: string;
  items?: string[];
  weaknesses?: string[];
  shields?: number | null;
  hp?: number | null;
  exp?: number | null;
  jp?: number | null;
  leaf?: number | null;
  obtain?: string;
  dropPct?: number | null;
  drop?: string;
  enemyId?: string;
  note?: string;
  sort?: number;
  isWishvale?: boolean;
  adds?: any[];
  [key: string]: any;
}

interface NpcCodexElements {
  metricTotal: HTMLElement | null;
  metricAreas: HTMLElement | null;
  searchInput: InteractiveElement | null;
  clearSearchBtn: InteractiveElement | null;
  areaFilter: InteractiveElement | null;
  sortFilter: InteractiveElement | null;
  resultsCount: HTMLElement | null;
  resetBtn: InteractiveElement | null;
  chunksGrid: HTMLElement | null;
  emptyState: HTMLElement | null;
  emptyResetBtn: InteractiveElement | null;
  modal: HTMLElement | null;
  modalContent: HTMLElement | null;
}

/** Shop codex types */
interface ShopItemRecord {
  id: string;
  name: string;
  price?: number;
  location?: string;
  source?: string;
  type?: string;
  rarity?: string;
  [key: string]: any;
}

interface ShopCodexElements {
  metricItemCount: HTMLElement | null;
  metricLocationCount: HTMLElement | null;
  searchInput: InteractiveElement | null;
  clearSearchBtn: InteractiveElement | null;
  locationFilter: InteractiveElement | null;
  sortFilter: InteractiveElement | null;
  resultsCount: HTMLElement | null;
  chunksGrid: HTMLElement | null;
  emptyState: HTMLElement | null;
  resetBtn: InteractiveElement | null;
  emptyResetBtn: InteractiveElement | null;
  paginationFooter?: InteractiveElement | null;
  modal: HTMLElement | null;
  modalTitle: HTMLElement | null;
  modalDescription: HTMLElement | null;
  modalAmitySection: HTMLElement | null;
}

interface Window {
  enemyData?: EnemyRecord[];
  characterData?: {
    characters: CharacterRecord[];
    jobs: CharacterJobRecord[];
    sourceIndex?: Record<string, SkillSourceEntry[]>;
  };
  npcData?: NpcRecord[];
  shopData?: {
    wishvale?: ShopItemRecord[];
    shops?: any[];
    allItems: ShopItemRecord[];
    [key: string]: any;
  };
  DigimonFusion?: any;
  closeDetailModal?: () => void;
  [key: string]: any;
}

/** Ambient globals injected by the generated data files. */
declare const skillData: SkillRecord[];
declare const equipmentData: EquipmentRecord[];
declare const characterData: {
  characters: CharacterRecord[];
  jobs: CharacterJobRecord[];
  sourceIndex?: Record<string, SkillSourceEntry[]>;
} | undefined;
declare const enemyData: EnemyRecord[] | undefined;
declare const npcData: NpcRecord[] | undefined;
declare const shopData: {
  wishvale?: ShopItemRecord[];
  shops?: any[];
  allItems: ShopItemRecord[];
  [key: string]: any;
} | undefined;

/** Skill source index keyed by skill name, injected by character.html. */
interface SkillSourceEntry {
  label: string;
  name: string;
  href: string;
  type: string;
}

interface CharacterJobData {
  skillIndex: Record<string, SkillSourceEntry[]>;
}

declare const characterJobData: CharacterJobData | undefined;
declare const characterSourceIndex: Record<string, SkillSourceEntry[]> | undefined;

/** Mastery skill source entry (from mastery skills sheet). */
interface MasterySourceEntry {
  text: string;
  category: string;
}

declare const masterySourceIndex: Record<string, MasterySourceEntry[]> | undefined;