import {
  leaderDemonMap,
  leaderNames,
  philosophyNames,
  rosterDemonMap,
  leaderEssenceMap,
  leaderEssenceNames,
} from "../data/DemonData";
import { LeaderEssenceAbility, LeaderEssenceName } from "../types/DemonTypes";
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
    leaderEssence: undefined,
    secondLeaderEssence: undefined,
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
    case ActionType.SET_LEADER_ESSENCE: {
      return {
        ...state,
        leader: {
          ...state.leader,
          leaderEssence: leaderEssenceMap[action.payload.essence],
        },
      };
    }
    case ActionType.REMOVE_LEADER_ESSENCE: {
      return {
        ...state,
        leader: {
          ...state.leader,
          leaderEssence: undefined,
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

  // function leaderEsseneceExists(essence: LeaderEssenceName) {
  //   return state.leader.leaderEssences.some((e) => e.name === essence);
  // }
};

export default reducer;
