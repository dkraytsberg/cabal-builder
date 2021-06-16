import {
  UPDATE_LEADER_ACTION,
  SET_PHILOSOPHY_ACTION,
  ActionType,
  ADD_DEMON_ACTION,
} from "./types";

import {
  LeaderDemonData,
  Philosophy,
  LeaderName,
  PhilosophyName,
  RosterDemonName,
} from "../types/DemonTypes";

export const selectLeader = (leader: LeaderName): UPDATE_LEADER_ACTION => ({
  type: ActionType.UPDATE_LEADER,
  payload: {
    leader,
  },
});

export const updatePhilosophy = (
  philosophy: PhilosophyName
): SET_PHILOSOPHY_ACTION => ({
  type: ActionType.SET_PHILOSOPHY,
  payload: {
    philosophy,
  },
});

export const addDemon = (demon: RosterDemonName): ADD_DEMON_ACTION => ({
  type: ActionType.ADD_DEMON,
  payload: {
    demon,
  },
});
