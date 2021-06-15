import {
  UPDATE_LEADER_ACTION,
  SET_PHILOSOPHY_ACTION,
  ActionType,
} from "./types";

import { LeaderDemonData, Philosophy, LeaderName } from "../types/DemonTypes";

export const selectLeader = (leader: LeaderName): UPDATE_LEADER_ACTION => ({
  type: ActionType.UPDATE_LEADER,
  payload: {
    leader,
  },
});

export const updatePhilosophy = (
  philosophy: Philosophy
): SET_PHILOSOPHY_ACTION => ({
  type: ActionType.SET_PHILOSOPHY,
  payload: {
    philosophy,
  },
});
