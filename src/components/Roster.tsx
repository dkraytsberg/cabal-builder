import React from "react";
import DemonCard from "./DemonCard";
import { DemonData } from "../types/DemonTypes";
import "./Roster.scss";

interface RosterProps {
  demons: Array<DemonData>;
  removeDemon: (demonIndex: number) => void;
}

const Roster: React.FC<RosterProps> = (props) => {
  return (
    <div className="Roster">
      <div>
        <h3>COST: {props.demons.reduce((acc, d) => d.cost + acc, 0)}</h3>
      </div>
      {props.demons.map((d, index) => (
        <DemonCard
          demon={d}
          removeSelf={() => props.removeDemon(index)}
          key={`${d.name}-${index}`}
        />
      ))}
    </div>
  );
};

export default Roster;
