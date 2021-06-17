import {
  UPDATE_LEADER_ACTION,
  SET_PHILOSOPHY_ACTION,
  ActionType,
  ADD_DEMON_ACTION,
  REMOVE_DEMON_ACTION,
  ADD_LEADER_ESSENCE_ACTION,
  REMOVE_LEADER_ESSENCE_ACTION,
} from "./types";

import {
  LeaderDemonData,
  Philosophy,
  LeaderName,
  PhilosophyName,
  RosterDemonName,
  LeaderEssenceName,
} from "../types/DemonTypes";

export const selectLeader = (leader: LeaderName): UPDATE_LEADER_ACTION => ({
  type: ActionType.UPDATE_LEADER,
  payload: {
    leader,
  },
});

export const addLeaderEssence = (
  essence: LeaderEssenceName
): ADD_LEADER_ESSENCE_ACTION => ({
  type: ActionType.ADD_LEADER_ESSENCE,
  payload: {
    essence,
  },
});

export const removeLeaderEssence = (
  essence: LeaderEssenceName
): REMOVE_LEADER_ESSENCE_ACTION => ({
  type: ActionType.REMOVE_LEADER_ESSENCE,
  payload: {
    essence,
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

export const removeDemon = (id: number): REMOVE_DEMON_ACTION => ({
  type: ActionType.REMOVE_DEMON,
  payload: {
    id,
  },
});
