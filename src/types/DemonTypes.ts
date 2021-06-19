export enum DemonType {
  Leader = "Leader",
  Devout = "Devout",
  Lesser = "Lesser",
  Greater = "Greater",
  Superior = "Superior",
}

export enum AbilityType {
  LeaderEssence = "LeaderEssence",
  LeaderRelic = "LeaderRelic",
  Essence = "Essence",
  Relic = "Relic",
  SpecialAbility = "SpecialAbility",
  LeaderBonus = "LeaderBonus",
  Evolution = "Evolution",
  PhilosophyAbility = "PhilosophyAbility",
  SoulLoss = "SoulLoss",
  Title = "Title",
  AdvancementBenefit = "AdvancementBenefit",
}

// todo: add the other ability names
export type AbilityName =
  | LeaderEssenceName
  | LeaderRelicName
  | LeaderBonusName
  | string;

export interface Ability {
  text: string;
  name: AbilityName;
  type: AbilityType;
}

export interface LeaderBonus extends Ability {
  type: AbilityType.LeaderBonus;
  name: LeaderBonusName;
}

export interface SpecialAbility extends Ability {
  type: AbilityType.SpecialAbility;
}

export interface LeaderEssenceAbility extends Ability {
  type: AbilityType.LeaderEssence;
}

export interface LeaderRelicAbility extends Ability {
  type: AbilityType.LeaderRelic;
}

export interface StatBlock {
  move: number;
  life: number;
  combat: number;
  canFly?: boolean;
}

export interface Philosophy {
  name: PhilosophyName;
  devout: DevoutName;
  leaderBonus: LeaderBonus;
  specialAbility: string;
}

export interface DemonData extends StatBlock {
  cost: number;
  name: DemonName;
  type: DemonType;
  abilities: Array<Ability>;
}

export type LeaderDemonData = DemonData & {
  type: DemonType.Leader;
};

export type DevoutDemonData = DemonData & {
  type: DemonType.Devout;
  resourcesName: string;
  resourceAmount: number;
  greaterEvolution: string;
  superiorEvolution: string;
};

export type LesserDemonData = DemonData & {
  type: DemonType.Lesser;
  greaterEvolution: string;
  superiorEvolution: string;
};

export type GreaterDemonData = DemonData & {
  type: DemonType.Greater;
  superiorEvolution: string;
};

export type SuperiorDemonData = DemonData & {
  type: DemonType.Superior;
};

export type AnyDemonData =
  | LeaderDemonData
  | DevoutDemonData
  | LesserDemonData
  | GreaterDemonData
  | SuperiorDemonData;

export type RosterDemonData =
  | LesserDemonData
  | GreaterDemonData
  | SuperiorDemonData;

export const LordsOfHell = "Lords of Hell";
export const EarthBound = "Earth-Bound";
export const Demented = "Demented";
export const Brokers = "Brokers";
export const Judges = "Judges";
export const TheEmpty = "The Empty";

export type PhilosophyName =
  | typeof LordsOfHell
  | typeof EarthBound
  | typeof Demented
  | typeof Brokers
  | typeof Judges
  | typeof TheEmpty;

export const ImperiousNature = "Imperious Nature";
export const QuickEscape = "Quick Escape";
export const MaddeningInsight = "Maddening Insight";
export const RichInSoul = "Rich in Soul";
export const BreakingTheRules = "Breaking the Rules";
export const OneWithNothingLeaderBonus = "One with Nothing";

export type LeaderBonusName =
  | typeof ImperiousNature
  | typeof QuickEscape
  | typeof MaddeningInsight
  | typeof RichInSoul
  | typeof BreakingTheRules
  | typeof OneWithNothingLeaderBonus;

export const Warrior = "Warrior";
export const Schemer = "Schemer";
export const Zealot = "Zealot";

export type LeaderName = typeof Warrior | typeof Schemer | typeof Zealot;

export const LordOfThePit = "Lord of the Pit";
export const Succubus = "Succubus";
export const MadnessDemon = "Madness Demon";
export const Tallyman = "Tallyman";
export const Executioner = "Executioner";
export const VoidDemon = "Void Demon";

export type DevoutName =
  | typeof LordOfThePit
  | typeof Succubus
  | typeof MadnessDemon
  | typeof Tallyman
  | typeof Executioner
  | typeof VoidDemon;

export const SlaughterFiend = "Slaughter Fiend";
export const Mephit = "Mephit";
export const TentacleBeast = "Tentacle Beast";
export const ArmoredDemon = "Armored Demon";
export const SpinedDemon = "Spined Demon";
export const CorpulentDemon = "Corpulent Demon";

export type LesserDemonName =
  | typeof SlaughterFiend
  | typeof Mephit
  | typeof TentacleBeast
  | typeof ArmoredDemon
  | typeof SpinedDemon
  | typeof CorpulentDemon;

export const TortureMaster = "Torture Master";
export const SerpentKnight = "Serpent Knight";
export const MarquessDWinter = "Marquess d'Winter";

export type GreaterDemonName =
  | typeof TortureMaster
  | typeof SerpentKnight
  | typeof MarquessDWinter;

export const ShadowKing = "Shadow King";
export const LordOfFlame = "Lord of Flame";
export const VenomQueen = "Venom Queen";

export type SuperiorDemonName =
  | typeof ShadowKing
  | typeof LordOfFlame
  | typeof VenomQueen;

export type DemonName =
  | LesserDemonName
  | GreaterDemonName
  | SuperiorDemonName
  | LeaderName
  | DevoutName;

export type RosterDemonName =
  | LesserDemonName
  | GreaterDemonName
  | SuperiorDemonName;

export const SoulOfLightning = "Soul Of Lightning";
export const PoisonedSoul = "Poisoned Soul";
export const UnyieldingEssence = "Unyielding Essence";
export const EternalMind = "Eternal Mind";
export const ExplosiveSpirit = "Explosive Spirit";
export const MendingSoul = "Mending Soul";
export const SkirmishSpirit = "Skirmish Spirit";
export const RegeneratingSoul = "Regenerating Soul";
export const SteadfastSoul = "Steadfast Soul";

export type LeaderEssenceName =
  | typeof SoulOfLightning
  | typeof PoisonedSoul
  | typeof UnyieldingEssence
  | typeof EternalMind
  | typeof ExplosiveSpirit
  | typeof MendingSoul
  | typeof SkirmishSpirit
  | typeof RegeneratingSoul
  | typeof SteadfastSoul;

export const SoulDrinker = "Soul Drinker";
export const ScreamingShield = "Screaming Shield";
export const InfernalArmor = "Infernal Armor";
export const HammerOfThunder = "Hammer of Thunder";
export const AxeOfBlackBlood = "Axe of Black Blood";
export const PlateOfRimeIce = "Plate of Rime Ice";
export const TokenOfLuck = "Token of Luck";
export const NecklaceOfAdaptation = "Necklace of Adaptation";
export const BootsOfLeaping = "Boots of Leaping";

export type LeaderRelicName =
  | typeof SoulDrinker
  | typeof ScreamingShield
  | typeof InfernalArmor
  | typeof HammerOfThunder
  | typeof AxeOfBlackBlood
  | typeof PlateOfRimeIce
  | typeof TokenOfLuck
  | typeof NecklaceOfAdaptation
  | typeof BootsOfLeaping;
