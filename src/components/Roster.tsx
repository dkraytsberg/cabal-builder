import React from "react";
import { useSelector } from "react-redux";
import { ReducerState, EditableRosterDemon } from "../redux/types";
import DemonCard from "./DemonCard";
import { DemonData, DemonName } from "../types/DemonTypes";
import { rosterDemonMap } from "../data/DemonData";
import "./Roster.scss";

interface RosterProps {
  demons: Array<DemonData>;
  removeDemon: (demonIndex: number) => void;
}

const Roster: React.FC<RosterProps> = (props) => {
  const roster = useSelector<ReducerState, EditableRosterDemon[]>(
    (state) => state.roster
  );

  return (
    <div className="Roster">
      <div>
        <h3>COST: {props.demons.reduce((acc, d) => d.cost + acc, 0)}</h3>
      </div>
      {roster.map((d) => {
        const { name } = d;
        return (
          <DemonCard
            demon={rosterDemonMap[name]}
            removeSelf={() => {}}
            key={d.id}
          />
        );
      })}
    </div>
  );
};

export default Roster;
