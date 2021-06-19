import {
  EditableLeaderDemon,
  EditableRosterDemon,
  EditableDevoutDemon,
  ReducerState,
} from "./types";
import { LeaderDemonData, Philosophy } from "../types/DemonTypes";
import {
  devoutDemonMap,
  leaderDemonMap,
  philosophyMap,
} from "../data/DemonData";

export const selectLeader = (state: ReducerState): EditableLeaderDemon =>
  state.leader;

export const selectPhilosopy = (state: ReducerState): Philosophy =>
  philosophyMap[state.philosophy];

export const selectDevout = (state: ReducerState): EditableDevoutDemon =>
  state.devout;

export const selectRoster = (state: ReducerState): EditableRosterDemon[] =>
  state.roster;
