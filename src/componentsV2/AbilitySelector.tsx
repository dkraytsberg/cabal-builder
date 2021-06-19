import React from "react";
import {
  leaderEssenceMap,
  leaderEssenceNames,
  leaderRelicMap,
  LeaderRelicNames,
} from "../data/DemonData";
import { AbilityName, DemonData, DemonType } from "../types/DemonTypes";

interface AbilitySelectorProps {
  demon: DemonData;
  onSelect: (name: AbilityName) => void;
}

const AbilitySelector: React.FC<AbilitySelectorProps> = ({
  demon,
  onSelect,
}) => {
  switch (demon.type) {
    case DemonType.Leader:
      return (
        <React.Fragment>
          <select
            id="demon-abilities"
            value="add an ability"
            onChange={(e) => {
              onSelect(e.target.value);
            }}
          >
            <option value="add an ability" hidden>
              Add an ability...
            </option>
            <optgroup label="Leader Essences">
              {leaderEssenceNames.map((essenceName) => {
                const { name, text } = leaderEssenceMap[essenceName];
                return (
                  <option value={name} key={name}>
                    {name}
                  </option>
                );
              })}
            </optgroup>
            <optgroup label="Leader Relics">
              {LeaderRelicNames.map((relicName) => {
                const { name, text } = leaderRelicMap[relicName];
                return (
                  <option value={name} key={name}>
                    {name}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </React.Fragment>
      );
    default:
      return null;
  }
};

export default AbilitySelector;
