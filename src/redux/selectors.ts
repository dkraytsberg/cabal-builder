import { EditableRosterDemon, ReducerState } from "./types";
import {
  AnyDemonData,
  LeaderDemonData,
  Philosophy,
  RosterDemonData,
} from "../types/DemonTypes";
import {
  leaderDemonMap,
  philosophyMap,
  rosterDemonMap,
} from "../data/DemonData";

export const selectLeader = (state: ReducerState): LeaderDemonData =>
  leaderDemonMap[state.leader.name];

export const selectPhilosopy = (state: ReducerState): Philosophy =>
  philosophyMap[state.philosophy];

export const selectRoster = (state: ReducerState): EditableRosterDemon[] =>
  state.roster;
