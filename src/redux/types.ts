import {
  PhilosophyName,
  LeaderName,
  DemonName,
  RosterDemonName,
  LesserDemonName,
  DemonType,
  LeaderEssenceAbility,
  RosterDemonData,
  DemonData,
  LeaderDemonData,
  LesserDemonData,
  GreaterDemonData,
  SuperiorDemonData,
} from "../types/DemonTypes";

export interface EditableDemon {
  name: DemonName;
  data: DemonData;
}

export interface EditableLeaderDemon extends EditableDemon {
  name: LeaderName;
  leaderEssences: LeaderEssenceAbility[];
  data: LeaderDemonData;
}

export interface EditableRosterDemon extends EditableDemon {
  id: number;
  name: RosterDemonName;
  evolution: DemonType | null;
  data: RosterDemonData;
}

export interface EditableLesserDemon extends EditableRosterDemon {
  name: LesserDemonName;
  evolution: DemonType.Greater | DemonType.Superior | null;
  data: LesserDemonData;
}

export interface EditableGreaterDemon extends EditableRosterDemon {
  name: LesserDemonName;
  evolution: DemonType.Superior | null;
  data: GreaterDemonData;
}

export interface EditableSuperiorDemon extends EditableRosterDemon {
  name: LesserDemonName;
  evolution: null;
  data: SuperiorDemonData;
}

export interface ReducerState {
  roster: EditableRosterDemon[];
  philosophy: PhilosophyName;
  leader: EditableLeaderDemon;
}

export enum ActionType {
  UPDATE_LEADER = "UPDATE_LEADER",
  SET_PHILOSOPHY = "SET_PHILOSOPHY",
  ADD_DEMON = "ADD_DEMON",
  REMOVE_DEMON = "REMOVE_DEMON",
}

export interface Action {
  type: ActionType;
}

export type UPDATE_LEADER_ACTION = {
  type: ActionType.UPDATE_LEADER;
  payload: {
    leader: LeaderName;
  };
};

export type SET_PHILOSOPHY_ACTION = {
  type: ActionType.SET_PHILOSOPHY;
  payload: {
    philosophy: PhilosophyName;
  };
};

export type ADD_DEMON_ACTION = {
  type: ActionType.ADD_DEMON;
  payload: {
    demon: RosterDemonName;
  };
};

export type REMOVE_DEMON_ACTION = {
  type: ActionType.REMOVE_DEMON;
  payload: {
    id: number;
  };
};

export type ReducerAction =
  | UPDATE_LEADER_ACTION
  | SET_PHILOSOPHY_ACTION
  | ADD_DEMON_ACTION
  | REMOVE_DEMON_ACTION;
