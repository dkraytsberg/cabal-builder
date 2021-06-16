import React from "react";
import { useSelector } from "react-redux";
import * as selectors from "../redux/selectors";
import DemonCard from "./DemonCard";

const LeaderCard: React.FC = () => {
  const currentLeader = useSelector(selectors.selectLeader);
  const currentPhilosopy = useSelector(selectors.selectPhilosopy);

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
