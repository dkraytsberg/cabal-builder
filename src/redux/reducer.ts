import {
  leaderDemonMap,
  leaderNames,
  philosophyNames,
  rosterDemonMap,
  leaderEssenceMap,
} from "../data/DemonData";
import { LeaderEssenceAbility } from "../types/DemonTypes";
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
          data: leaderDemonMap[leader],
        },
      };
    }
    case ActionType.ADD_LEADER_ESSENCE: {
      return {
        ...state,
        leader: {
          ...state.leader,
          leaderEssences: [
            ...state.leader.leaderEssences,
            leaderEssenceMap[action.payload.essence],
          ],
        },
      };
    }
    case ActionType.REMOVE_LEADER_ESSENCE: {
      return {
        ...state,
        leader: {
          ...state.leader,
          leaderEssences: state.leader.leaderEssences.filter(
            (e) => e.name !== action.payload.essence
          ),
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
