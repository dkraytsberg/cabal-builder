import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";
import { LeaderName } from "../types/DemonTypes";
import { leaderNames } from "../data/DemonData";
import { InlineHeader } from "./lib/Typography";

const LeaderSelect: React.FC = () => {
  const dispatch = useDispatch();

  const currentLeader = useSelector(selectors.selectLeader);

  const selectLeader = (leader: LeaderName) =>
    dispatch(actions.selectLeader(leader));

  return (
    <section className="radio-select">
      {leaderNames.map((name) => (
        <div
          className={`radio-select__card ${
            currentLeader.name === name ? "selected" : "unselected"
          }`}
          onClick={() => selectLeader(name)}
          key={name}
        >
          <InlineHeader>{name}</InlineHeader>
        </div>
      ))}
    </section>
  );
};

export default LeaderSelect;
