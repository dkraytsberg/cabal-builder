import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReducerState } from "../redux/types";
import * as actions from "../redux/actions";
import { LeaderDemonData, LeaderName, DemonType } from "../types/DemonTypes";
import { leaderDemonMap, demons } from "../data/DemonData";
import "./LeaderSelect.scss";

interface LeaderSelectProps {
  leaders: LeaderDemonData[];
}

const LeaderSelect: React.FC<LeaderSelectProps> = (props) => {
  const dispatch = useDispatch();

  const currentLeader = useSelector<ReducerState, LeaderDemonData>(
    (state) => leaderDemonMap[state.leader]
  );

  const selectLeader = (leader: LeaderName) =>
    dispatch(actions.selectLeader(leader));

  const leaders = demons.filter(
    (d) => d.type === DemonType.Leader
  ) as LeaderDemonData[];

  return (
    <div className="LeaderSelect">
      {leaders.map((leader) => (
        <div
          className={`LeaderCard ${
            currentLeader.name === leader.name ? "selected" : "unselected"
          }`}
          onClick={() => selectLeader(leader.name as LeaderName)}
        >
          {leader.name}
        </div>
      ))}
    </div>
  );
};

export default LeaderSelect;
