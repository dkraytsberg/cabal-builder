import React from "react";
import * as actions from "../redux/actions";
import { leaderEssenceNames } from "../data/DemonData";
import { useDispatch } from "react-redux";
import { LeaderEssenceName } from "../types/DemonTypes";

const LeaderEssenceSelect: React.FC = () => {
  const dispatch = useDispatch();
  const selectEssence = (name: LeaderEssenceName) =>
    dispatch(actions.setLeaderEssence(name));

  const removeEssence = () => dispatch(actions.removeLeaderEssence());

  return (
    <div>
      {leaderEssenceNames.map((name) => (
        <div>
          <button onClick={() => selectEssence(name)}>{name}</button>
          <button onClick={() => removeEssence()}>x</button>
        </div>
      ))}
    </div>
  );
};

export default LeaderEssenceSelect;
