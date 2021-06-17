import React from "react";
import { useSelector } from "react-redux";
import { leaderEssenceNames } from "../data/DemonData";
import * as selectors from "../redux/selectors";
import DemonCard from "./DemonCard";
import LeaderEssenceSelect from "./LeaderEssenceSelect";

const LeaderCard: React.FC = () => {
  const currentLeader = useSelector(selectors.selectLeader);
  const currentPhilosopy = useSelector(selectors.selectPhilosopy);

  return (
    <div>
      <DemonCard
        demon={{
          ...currentLeader.data,
          abilities: [
            ...currentLeader.data.abilities,
            currentPhilosopy.leaderBonus,
            ...currentLeader.leaderEssences.map((e) => `${e.name} - ${e.text}`),
          ],
        }}
      />

      <div>
        <LeaderEssenceSelect />
      </div>
    </div>
  );
};

export default LeaderCard;
