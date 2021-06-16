import {
  leaderDemonMap,
  leaderNames,
  philosophyNames,
  rosterDemonMap,
} from "../data/DemonData";
import {
  ReducerState,
  ActionType,
  ReducerAction,
  EditableRosterDemon,
} from "./types";

const initialState: ReducerState = {
  roster: [],
  philosophy: philosophyNames[0],
  leader: {
    name: leaderNames[0],
    data: leaderDemonMap[leaderNames[0]],
    leaderEssences: [],
  },
};

const reducer = (state: ReducerState = initialState, action: ReducerAction) => {
  switch (action.type) {
    case ActionType.UPDATE_LEADER: {
      const {
        payload: { leader },
      } = action;
      return {
        ...state,
        leader: {
          ...state.leader,
          name: leader,
        },
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
    case ActionType.ADD_DEMON: {
      const {
        payload: { demon },
      } = action;

      const editableDemon: EditableRosterDemon = {
        name: demon,
        id: Math.random(),
        evolution: null,
        data: rosterDemonMap[demon],
      };

      return {
        ...state,
        roster: [...state.roster, editableDemon],
      };
    }

    case ActionType.REMOVE_DEMON: {
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        roster: state.roster.filter((demon) => demon.id !== id),
      };
    }

    default:
      return state;
  }
};

export default reducer;
