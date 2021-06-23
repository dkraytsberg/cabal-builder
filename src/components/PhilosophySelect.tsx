import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { philosophyNames } from "../data/DemonData";
import { PhilosophyName } from "../types/DemonTypes";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";
import { InlineHeader } from "./lib/Typography";

const PhilosophySelect: React.FC = () => {
  const dispatch = useDispatch();

  const currentPhilosopy = useSelector(selectors.selectPhilosopy);

  const setPhilosophy = (philosophy: PhilosophyName) =>
    dispatch(actions.updatePhilosophy(philosophy));

  return (
    <Fragment>
      <section className="radio-select">
        {philosophyNames.map((name) => (
          <div
            className={`radio-select__card ${
              currentPhilosopy.name === name ? "selected" : "unselected"
            }`}
            onClick={() => setPhilosophy(name)}
            key={name}
          >
            <InlineHeader>{name}</InlineHeader>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default PhilosophySelect;
