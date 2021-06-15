import {
  DemonData,
  Philosophy,
  LeaderDemonData,
  DevoutDemonData,
  DemonType,
} from "../types/DemonTypes";
import { philosophies, demons } from "../data/DemonData";
import { ReducerState, ActionType, ReducerAction, Action } from "./types";

const leaders = demons.filter(
  (d) => d.type === DemonType.Leader
) as LeaderDemonData[];

const initialState: ReducerState = {
  roster: [],
  philosophy: philosophies[0],
  leader: leaders[0],
};

const reducer = (state: ReducerState = initialState, action: ReducerAction) => {
  switch (action.type) {
    case ActionType.UPDATE_LEADER: {
      const {
        payload: { leader },
      } = action;
      return {
        ...state,
        leader,
      };
    }
    case ActionType.SET_PHILOSOPHY: {
      const {
        payload: { philosophy },
      } = action;
      return {
        ...state,
        philosophy,
      };
    }
    default:
      return state;
  }
};

export default reducer;
