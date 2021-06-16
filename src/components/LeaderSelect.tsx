import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";
import { LeaderName } from "../types/DemonTypes";
import { leaderNames } from "../data/DemonData";
import "./LeaderSelect.scss";

const LeaderSelect: React.FC = () => {
  const dispatch = useDispatch();

  const currentLeader = useSelector(selectors.selectLeader);

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
