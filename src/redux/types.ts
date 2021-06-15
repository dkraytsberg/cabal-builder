import {
  DemonData,
  Philosophy,
  PhilosophyName,
  LeaderDemonData,
  LeaderName,
} from "../types/DemonTypes";

export interface ReducerState {
  roster: DemonData[];
  philosophy: PhilosophyName;
  leader: LeaderName;
}

export enum ActionType {
  UPDATE_LEADER = "UPDATE_LEADER",
  SET_PHILOSOPHY = "SET_PHILOSOPHY",
  //   ADD_DEMON = "ADD_DEMON",
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

export type ReducerAction = UPDATE_LEADER_ACTION | SET_PHILOSOPHY_ACTION;
