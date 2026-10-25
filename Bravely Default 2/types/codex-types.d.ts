/**
 * TypeScript type definitions for Bravely Default II Codex globals.
 */

interface JobAptitudes {
  sword: string;
  dagger: string;
  axe: string;
  spear: string;
  bow: string;
  staff: string;
  shield: string;
}

interface JobEntry {
  id: string;
  name: string;
  role: string;
  asteriskHolder: string | null;
  chapterUnlocked: string | null;
  iconPath: string;
  specialty1: string;
  specialty2: string | null;
  aptitudes: JobAptitudes;
}

interface AbilityEntry {
  id: string;
  name: string;
  job: string;
  level: number;
  type: string;
  cost: string;
  effect: string;
}

interface EquipmentStats {
  weight?: number;
  pAtk?: number;
  mAtk?: number;
  pDef?: number;
  mDef?: number;
  critical?: number;
  aim?: number;
  evade?: number;
  speed?: number;
  restorePts?: number;
}

interface EquipmentEntry {
  id: string;
  name: string;
  category: string;
  subtype: string;
  weight: number;
  price: number | null;
  effect: string | null;
  source: string | null;
  stats: EquipmentStats;
}

interface EnemyStats {
  exp?: number;
  jp?: number;
  pg?: number;
}

interface EnemyEntry {
  id: string;
  name: string;
  classification: string;
  family: string;
  level: number | null;
  hp: number | null;
  isBoss: boolean;
  location: string | null;
  weaknesses: string[];
  drops: string[];
  steals: string[];
  stats: EnemyStats;
}

interface QuestEntry {
  id: string;
  number: number;
  name: string;
  chapter: string;
  client: string;
  location: string;
  objective: string;
  rewards: string;
  stars: number;
}

interface ShopItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  isEquipment: boolean;
  equipId: string | null;
}

interface ShopEntry {
  id: string;
  name: string;
  town: string;
  chapter: string;
  region: string;
  description: string;
  itemCount: number;
  inventory: ShopItem[];
}

interface BndCardEntry {
  id: string;
  name: string;
  tier: number;
  classification: string;
  rules: string[];
  effect: string;
  strength: number;
}

interface BD2Utilities {
  escapeHtml(str: any): string;
  formatValue(val: any): string;
  debounce(fn: any, delay: number): (this: any, ...args: any[]) => void;
  getFavorites(key: string): string[];
  toggleFavorite(key: string, id: string): boolean;
  isFavorite(key: string, id: string): boolean;
  openModal(contentHtml: string): void;
  closeModal(): void;
  initModal(): void;
}

interface Window {
  jobData: JobEntry[];
  abilityData: AbilityEntry[];
  equipmentData: EquipmentEntry[];
  enemyData: EnemyEntry[];
  questData: QuestEntry[];
  shopData: ShopEntry[];
  bndCardData: BndCardEntry[];
  BD2: BD2Utilities;
  bd2Theme: {
    get(): string;
    set(theme: string, save?: boolean): void;
    toggle(): void;
  };
}
