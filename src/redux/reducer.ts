import { leaderNames, philosophyNames } from "../data/DemonData";
import { ReducerState, ActionType, ReducerAction, Action } from "./types";

const initialState: ReducerState = {
  roster: [],
  philosophy: philosophyNames[0],
  leader: leaderNames[0],
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
