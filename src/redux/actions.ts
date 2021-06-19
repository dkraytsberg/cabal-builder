import {
  UPDATE_LEADER_ACTION,
  SET_PHILOSOPHY_ACTION,
  ActionType,
  ADD_DEMON_ACTION,
  REMOVE_DEMON_ACTION,
  SET_LEADER_ESSENCE_ACTION,
  REMOVE_LEADER_ESSENCE_ACTION,
  SET_LEADER_RELIC_ACTION,
  REMOVE_LEADER_RELIC_ACTION,
} from "./types";

import {
  LeaderDemonData,
  Philosophy,
  LeaderName,
  PhilosophyName,
  RosterDemonName,
  LeaderEssenceName,
  LeaderRelicName,
} from "../types/DemonTypes";

export const selectLeader = (leader: LeaderName): UPDATE_LEADER_ACTION => ({
  type: ActionType.UPDATE_LEADER,
  payload: {
    leader,
  },
});

export const setLeaderEssence = (
  essence: LeaderEssenceName
): SET_LEADER_ESSENCE_ACTION => ({
  type: ActionType.SET_LEADER_ESSENCE,
  payload: {
    essence,
  },
});

export const removeLeaderEssence = (): REMOVE_LEADER_ESSENCE_ACTION => ({
  type: ActionType.REMOVE_LEADER_ESSENCE,
  payload: {},
});

export const setLeaderRelic = (
  relic: LeaderRelicName
): SET_LEADER_RELIC_ACTION => ({
  type: ActionType.SET_LEADER_RELIC,
  payload: {
    relic,
  },
});

export const removeLeaderRelic = (): REMOVE_LEADER_RELIC_ACTION => ({
  type: ActionType.REMOVE_LEADER_RELIC,
  payload: {},
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
