import React from "react";
import { useDispatch } from "react-redux";
import * as demonData from "../data/DemonData";
import { DemonType, DemonData, RosterDemonName } from "../types/DemonTypes";
import * as actions from "../redux/actions";
import "./Selector.scss";

interface SelectorProps {
  selectDemon: (demon: DemonData) => void;
}

const Selector: React.FC<SelectorProps> = (props) => {
  const dispatch = useDispatch();

  const demonNamesByType = [
    demonData.lesserDemonNames,
    demonData.greaterDemonNames,
    demonData.superiorDemonNames,
  ];

  const demonTypes = [DemonType.Lesser, DemonType.Greater, DemonType.Superior];

  const selectDemon = (name: RosterDemonName) =>
    dispatch(actions.addDemon(name));

  return (
    <div className="Selector">
      <div>
        <ul className="DemonList">
          {demonNamesByType.map((demonNames, index) => (
            <div>
              <h3>{demonTypes[index]}</h3>
              {demonNames.map((name) => (
                <li
                  key={name}
                  className="ListItem"
                  onClick={() => selectDemon(name)}
                >
                  <span>{name}</span>
                  <span>{demonData.rosterDemonMap[name].cost}</span>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selector;
