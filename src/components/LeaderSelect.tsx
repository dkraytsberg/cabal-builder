import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReducerState } from "../redux/types";
import * as actions from "../redux/actions";
import { LeaderDemonData, LeaderName } from "../types/DemonTypes";
import { leaderDemonMap, leaderNames } from "../data/DemonData";
import "./LeaderSelect.scss";

const LeaderSelect: React.FC = (props) => {
  const dispatch = useDispatch();

  const currentLeader = useSelector<ReducerState, LeaderDemonData>(
    (state) => leaderDemonMap[state.leader]
  );

  const selectLeader = (leader: LeaderName) =>
    dispatch(actions.selectLeader(leader));

  return (
    <div className="LeaderSelect">
      {leaderNames.map((name) => (
        <div
          className={`LeaderCard ${
            currentLeader.name === name ? "selected" : "unselected"
          }`}
          onClick={() => selectLeader(name)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default LeaderSelect;
