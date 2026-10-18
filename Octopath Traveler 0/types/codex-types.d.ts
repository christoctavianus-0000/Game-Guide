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
type InteractiveElement = HTMLElement & { value?: string; disabled?: boolean };

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

/** Ambient globals injected by the generated data files. */
declare const skillData: SkillRecord[];
declare const equipmentData: EquipmentRecord[];
declare const shopData: { allItems: Array<{ name?: string; location?: string }> } | undefined;

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