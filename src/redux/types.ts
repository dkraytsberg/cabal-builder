import {
  DemonData,
  Philosophy,
  PhilosophyName,
  LeaderDemonData,
  LeaderName,
  DemonName,
  RosterDemonName,
} from "../types/DemonTypes";

export interface EditableDemon {
  id: number;
  name: DemonName;
}

export interface EditableRosterDemon extends EditableDemon {
  id: number;
  name: RosterDemonName;
}

export interface ReducerState {
  roster: EditableRosterDemon[];
  philosophy: PhilosophyName;
  leader: LeaderName;
}

export enum ActionType {
  UPDATE_LEADER = "UPDATE_LEADER",
  SET_PHILOSOPHY = "SET_PHILOSOPHY",
  ADD_DEMON = "ADD_DEMON",
  //   REMOVE_DEMON = "REMOVE_DEMON",
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

export type ReducerAction =
  | UPDATE_LEADER_ACTION
  | SET_PHILOSOPHY_ACTION
  | ADD_DEMON_ACTION;
