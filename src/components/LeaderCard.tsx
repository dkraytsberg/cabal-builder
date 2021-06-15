import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../redux/types";
import DemonCard from "./DemonCard";
import { Philosophy, LeaderDemonData } from "../types/DemonTypes";

const LeaderCard: React.FC = () => {
  const currentLeader = useSelector<ReducerState, LeaderDemonData>(
    (state) => state.leader
  );

  const currentPhilosopy = useSelector<ReducerState, Philosophy>(
    (state) => state.philosophy
  );

  return (
    <DemonCard
      demon={{
        ...currentLeader,
        abilities: [...currentLeader.abilities, currentPhilosopy.leaderBonus],
      }}
    />
  );
};

export default LeaderCard;
