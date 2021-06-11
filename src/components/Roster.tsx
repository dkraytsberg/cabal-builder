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
