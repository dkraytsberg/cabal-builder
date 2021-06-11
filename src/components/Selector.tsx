import React from "react";
import { groupBy } from "lodash-es";
import { demons } from "../data/DemonData";
import { DemonType, DemonData } from "../types/DemonTypes";
import "./Selector.scss";

interface SelectorProps {
  selectDemon: (demon: DemonData) => void;
}

const Selector: React.FC<SelectorProps> = (props) => {
  const groupedDemons = groupBy(demons, (d) => d.type);

  const includedTypes = [
    DemonType.Lesser,
    DemonType.Greater,
    DemonType.Superior,
  ];

  return (
    <div className="Selector">
      <div>
        <ul className="DemonList">
          {includedTypes.map((type) => (
            <React.Fragment key={type}>
              <h5>{type}</h5>
              {groupedDemons[type].map((demon) => (
                <li
                  key={demon.name}
                  className="ListItem"
                  onClick={() => props.selectDemon(demon)}
                >
                  <span>{demon.name}</span>
                  <span>{demon.cost}</span>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selector;
