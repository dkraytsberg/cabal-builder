import React, { Fragment } from "react";
import DemonCard from "./DemonCard";
import { demons } from "../data/DemonData";
import {
  DemonType,
  DemonData,
  Philosophy,
  LeaderDemonData,
} from "../types/DemonTypes";
import "./LeaderSelect.scss";

interface LeaderSelectProps {
  selectedPhilosophy: Philosophy;
  selectedLeader: LeaderDemonData;
  setSelectedLeader: (leader: LeaderDemonData) => void;
  leaders: LeaderDemonData[];
}

const LeaderSelect: React.FC<LeaderSelectProps> = ({
  selectedPhilosophy,
  selectedLeader,
  setSelectedLeader,
  leaders,
}) => {
  return (
    <Fragment>
      <div className="LeaderSelect">
        {leaders.map((leader) => (
          <div
            className={`LeaderCard ${
              selectedLeader.name === leader.name ? "selected" : "unselected"
            }`}
            onClick={() => setSelectedLeader(leader)}
          >
            {leader.name}
          </div>
        ))}
      </div>
      <DemonCard
        demon={{
          ...selectedLeader,
          abilities: [
            ...selectedLeader.abilities,
            selectedPhilosophy.leaderBonus,
          ],
        }}
      />
    </Fragment>
  );
};

export default LeaderSelect;
