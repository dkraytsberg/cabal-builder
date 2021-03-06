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
  LeaderEssenceName,
  LeaderRelicAbility,
  LeaderRelicName,
  DevoutDemonData,
  DevoutName,
} from "../types/DemonTypes";

export interface EditableDemon {
  name: DemonName;
  data: DemonData;
  displayName?: string;
}

export interface EditableLeaderDemon extends EditableDemon {
  name: LeaderName;
  leaderEssence?: LeaderEssenceAbility;
  secondaryLeaderEssence?: LeaderEssenceAbility;
  leaderRelic?: LeaderRelicAbility;
  data: LeaderDemonData;
}

export interface EditableDevoutDemon extends EditableDemon {
  name: DevoutName;
  evolution: DemonType.Greater | DemonType.Superior | null;
  data: DevoutDemonData;
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
  devout: EditableDevoutDemon;
}

export enum ActionType {
  UPDATE_LEADER = "UPDATE_LEADER",
  SET_LEADER_ESSENCE = "SET_LEADER_ESSENCE",
  REMOVE_LEADER_ESSENCE = "REMOVE_LEADER_ESSENCE",
  SET_SECONDARY_LEADER_ESSENCE = "SET_SECONDARY_LEADER_ESSENCE",
  REMOVE_SECONDARY_LEADER_ESSENCE = "REMOVE_SECONDARY_LEADER_ESSENCE",
  SET_LEADER_RELIC = "SET_LEADER_RELIC",
  REMOVE_LEADER_RELIC = "REMOVE_LEADER_RELIC",
  SET_PHILOSOPHY = "SET_PHILOSOPHY",
  ADD_DEMON = "ADD_DEMON",
  REMOVE_DEMON = "REMOVE_DEMON",
  RENAME_ROSTER_DEMON = "RENAME_ROSTER_DEMON",
  RENAME_DEVOUT = "RENAME_DEVOUT",
  RENAME_LEADER = "RENAME_LEADER",
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

export type SET_LEADER_ESSENCE_ACTION = {
  type: ActionType.SET_LEADER_ESSENCE;
  payload: {
    essence: LeaderEssenceName;
  };
};

export type REMOVE_LEADER_ESSENCE_ACTION = {
  type: ActionType.REMOVE_LEADER_ESSENCE;
  payload: {};
};

export type SET_SECONDARY_LEADER_ESSENCE_ACTION = {
  type: ActionType.SET_SECONDARY_LEADER_ESSENCE;
  payload: {
    essence: LeaderEssenceName;
  };
};

export type REMOVE_SECONDARY_LEADER_ESSENCE_ACTION = {
  type: ActionType.REMOVE_SECONDARY_LEADER_ESSENCE;
  payload: {};
};

export type SET_LEADER_RELIC_ACTION = {
  type: ActionType.SET_LEADER_RELIC;
  payload: {
    relic: LeaderRelicName;
  };
};

export type REMOVE_LEADER_RELIC_ACTION = {
  type: ActionType.REMOVE_LEADER_RELIC;
  payload: {};
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

export type RENAME_ROSTER_DEMON_ACTION = {
  type: ActionType.RENAME_ROSTER_DEMON;
  payload: {
    id: number;
    name: string;
  };
};

export type RENAME_DEVOUT_ACTION = {
  type: ActionType.RENAME_DEVOUT;
  payload: {
    name: string;
  };
};

export type RENAME_LEADER_ACTION = {
  type: ActionType.RENAME_LEADER;
  payload: {
    name: string;
  };
};

export type ReducerAction =
  | UPDATE_LEADER_ACTION
  | SET_LEADER_ESSENCE_ACTION
  | REMOVE_LEADER_ESSENCE_ACTION
  | SET_SECONDARY_LEADER_ESSENCE_ACTION
  | REMOVE_SECONDARY_LEADER_ESSENCE_ACTION
  | SET_PHILOSOPHY_ACTION
  | SET_LEADER_RELIC_ACTION
  | REMOVE_LEADER_RELIC_ACTION
  | ADD_DEMON_ACTION
  | REMOVE_DEMON_ACTION
  | RENAME_ROSTER_DEMON_ACTION
  | RENAME_DEVOUT_ACTION
  | RENAME_LEADER_ACTION;
