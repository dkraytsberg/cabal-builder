import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";
import DemonCard from "./DemonCard";
import { DemonData } from "../types/DemonTypes";
import "./Roster.scss";

interface RosterProps {
  demons: Array<DemonData>;
  removeDemon: (demonIndex: number) => void;
}

const Roster: React.FC<RosterProps> = (props) => {
  const dispatch = useDispatch();

  const roster = useSelector(selectors.selectRoster);

  return (
    <div className="Roster">
      <div>
        <h3>COST: {roster.reduce((acc, d) => d.data.cost + acc, 0)}</h3>
      </div>
      {roster.map((d) => {
        const { data, id } = d;
        return (
          <DemonCard
            demon={data}
            removeSelf={() => dispatch(actions.removeDemon(id))}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default Roster;
