import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  philosophies,
  philosophyMap,
  philosophyNames,
} from "../data/DemonData";
import { Philosophy, PhilosophyName } from "../types/DemonTypes";
import { ReducerState } from "../redux/types";
import * as actions from "../redux/actions";
import "./PhilosophySelect.scss";

interface PhilosophySelectProps {
  selected: Philosophy;
  setSelected: (philosophy: Philosophy) => void;
}

const PhilosophySelect: React.FC<PhilosophySelectProps> = ({
  selected,
  setSelected,
}) => {
  const dispatch = useDispatch();

  const currentPhilosopy = useSelector<ReducerState, Philosophy>(
    (state) => philosophyMap[state.philosophy]
  );

  const setPhilosophy = (philosophy: PhilosophyName) =>
    dispatch(actions.updatePhilosophy(philosophy));

  return (
    <Fragment>
      <div className="PhilosophySelect">
        {philosophyNames.map((name) => (
          <div
            className={`PhilosophyCard ${
              currentPhilosopy.name === name ? "selected" : "unselected"
            }`}
            onClick={() => setPhilosophy(name)}
          >
            {name}
          </div>
        ))}
      </div>
      <h3>{selected.specialAbility}</h3>
    </Fragment>
  );
};

export default PhilosophySelect;
