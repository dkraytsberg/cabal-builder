import React, { Fragment } from "react";
import DemonCard from "./DemonCard";
import { philosophies, demons } from "../data/DemonData";
import { Philosophy, DemonType } from "../types/DemonTypes";
import "./PhilosophySelect.scss";

interface PhilosophySelectProps {
  selected: Philosophy;
  setSelected: (philosophy: Philosophy) => void;
}

const PhilosophySelect: React.FC<PhilosophySelectProps> = ({
  selected,
  setSelected,
}) => {
  return (
    <Fragment>
      <div className="PhilosophySelect">
        {philosophies.map((philosophy) => (
          <div
            className={`PhilosophyCard ${
              selected.name === philosophy.name ? "selected" : "unselected"
            }`}
            onClick={() => setSelected(philosophy)}
          >
            {philosophy.name}
          </div>
        ))}
      </div>
      <h3>{selected.specialAbility}</h3>
      {demons
        .filter(
          (d) => d.type === DemonType.Devout && selected.devout === d.name
        )
        .map((d) => (
          <DemonCard demon={{ ...d, abilities: [...d.abilities] }} />
        ))}
    </Fragment>
  );
};

export default PhilosophySelect;
