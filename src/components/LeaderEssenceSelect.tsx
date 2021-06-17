import React from "react";
import * as actions from "../redux/actions";
import { leaderEssenceNames } from "../data/DemonData";
import { useDispatch } from "react-redux";
import { LeaderEssenceName } from "../types/DemonTypes";

const LeaderEssenceSelect: React.FC = () => {
  const dispatch = useDispatch();
  const selectEssence = (name: LeaderEssenceName) =>
    dispatch(actions.addLeaderEssence(name));

  const removeEssence = (name: LeaderEssenceName) =>
    dispatch(actions.removeLeaderEssence(name));

  return (
    <div>
      {leaderEssenceNames.map((name) => (
        <div>
          <button onClick={() => selectEssence(name)}>{name}</button>
          <button onClick={() => removeEssence(name)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default LeaderEssenceSelect;
