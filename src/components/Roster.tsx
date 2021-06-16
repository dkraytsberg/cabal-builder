import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReducerState, EditableRosterDemon } from "../redux/types";
import * as actions from "../redux/actions";
import DemonCard from "./DemonCard";
import { DemonData } from "../types/DemonTypes";
import { rosterDemonMap } from "../data/DemonData";
import "./Roster.scss";

interface RosterProps {
  demons: Array<DemonData>;
  removeDemon: (demonIndex: number) => void;
}

const Roster: React.FC<RosterProps> = (props) => {
  const dispatch = useDispatch();

  const roster = useSelector<ReducerState, EditableRosterDemon[]>(
    (state) => state.roster
  );

  return (
    <div className="Roster">
      <div>
        <h3>
          COST:{" "}
          {roster.reduce((acc, d) => rosterDemonMap[d.name].cost + acc, 0)}
        </h3>
      </div>
      {roster.map((d) => {
        const { name, id } = d;
        return (
          <DemonCard
            demon={rosterDemonMap[name]}
            removeSelf={() => dispatch(actions.removeDemon(id))}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default Roster;
