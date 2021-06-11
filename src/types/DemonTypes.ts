export enum DemonType {
  Leader = "Leader",
  Devout = "Devout",
  Lesser = "Lesser",
  Greater = "Greater",
  Superior = "Superior",
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
  leaderBonus: string;
  specialAbility: string;
}

export interface DemonData extends StatBlock {
  cost: number;
  name: DemonName;
  type: DemonType;
  abilities: Array<string>;
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

export const LordsOfHell = "Lords of Hell";
export const EarthBound = "Earth-Bound";
export const Demented = "Demented";
export const Brokers = "Brokers";
export const Judges = "Judges";
export const TheEmpty = "The Empty";

type PhilosophyName =
  | typeof LordsOfHell
  | typeof EarthBound
  | typeof Demented
  | typeof Brokers
  | typeof Judges
  | typeof TheEmpty;

export const Warrior = "Warrior";
export const Schemer = "Schemer";
export const Zealot = "Zealot";

type LeaderName = typeof Warrior | typeof Schemer | typeof Zealot;

export const LordOfThePit = "Lord of the Pit";
export const Succubus = "Succubus";
export const MadnessDemon = "Madness Demon";
export const Tallyman = "Tallyman";
export const Executioner = "Executioner";
export const VoidDemon = "Void Demon";

type DevoutName =
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

type LesserDemonName =
  | typeof SlaughterFiend
  | typeof Mephit
  | typeof TentacleBeast
  | typeof ArmoredDemon
  | typeof SpinedDemon
  | typeof CorpulentDemon;

export const TortureMaster = "Torture Master";
export const SerpentKnight = "Serpent Knight";
export const MarquessDWinter = "Marquess d'Winter";

type GreaterDemonName =
  | typeof TortureMaster
  | typeof SerpentKnight
  | typeof MarquessDWinter;

export const ShadowKing = "Shadow King";
export const LordOfFlame = "Lord of Flame";
export const VenomQueen = "Venom Queen";

type SuperiorDemonName =
  | typeof ShadowKing
  | typeof LordOfFlame
  | typeof VenomQueen;

export type DemonName =
  | LesserDemonName
  | GreaterDemonName
  | SuperiorDemonName
  | LeaderName
  | DevoutName;