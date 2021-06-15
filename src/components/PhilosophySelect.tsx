import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { philosophies } from "../data/DemonData";
import { Philosophy } from "../types/DemonTypes";
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
    (state) => state.philosophy
  );

  const setPhilosophy = (philosophy: Philosophy) =>
    dispatch(actions.updatePhilosophy(philosophy));

  return (
    <Fragment>
      <div className="PhilosophySelect">
        {philosophies.map((philosophy) => (
          <div
            className={`PhilosophyCard ${
              currentPhilosopy.name === philosophy.name
                ? "selected"
                : "unselected"
            }`}
            onClick={() => setPhilosophy(philosophy)}
          >
            {philosophy.name}
          </div>
        ))}
      </div>
      <h3>{selected.specialAbility}</h3>
    </Fragment>
  );
};

export default PhilosophySelect;
