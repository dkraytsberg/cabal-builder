import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { philosophyNames } from "../data/DemonData";
import { PhilosophyName } from "../types/DemonTypes";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";
import "./PhilosophySelect.scss";

const PhilosophySelect: React.FC = () => {
  const dispatch = useDispatch();

  const currentPhilosopy = useSelector(selectors.selectPhilosopy);

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
      <h3>{currentPhilosopy.specialAbility}</h3>
    </Fragment>
  );
};

export default PhilosophySelect;
