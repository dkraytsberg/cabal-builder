import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReducerState } from "../redux/types";
import * as actions from "../redux/actions";
import { LeaderDemonData } from "../types/DemonTypes";
import "./LeaderSelect.scss";

interface LeaderSelectProps {
  leaders: LeaderDemonData[];
}

const LeaderSelect: React.FC<LeaderSelectProps> = ({ leaders }) => {
  const dispatch = useDispatch();

  const currentLeader = useSelector<ReducerState, LeaderDemonData>(
    (state) => state.leader
  );

  const selectLeader = (leader: LeaderDemonData) =>
    dispatch(actions.selectLeader(leader));

  return (
    <div className="LeaderSelect">
      {leaders.map((leader) => (
        <div
          className={`LeaderCard ${
            currentLeader.name === leader.name ? "selected" : "unselected"
          }`}
          onClick={() => selectLeader(leader)}
        >
          {leader.name}
        </div>
      ))}
    </div>
  );
};

export default LeaderSelect;
