import {
  EditableLeaderDemon,
  EditableRosterDemon,
  ReducerState,
} from "./types";
import { LeaderDemonData, Philosophy } from "../types/DemonTypes";
import { leaderDemonMap, philosophyMap } from "../data/DemonData";

export const selectLeader = (state: ReducerState): EditableLeaderDemon =>
  state.leader;

export const selectPhilosopy = (state: ReducerState): Philosophy =>
  philosophyMap[state.philosophy];

export const selectRoster = (state: ReducerState): EditableRosterDemon[] =>
  state.roster;
