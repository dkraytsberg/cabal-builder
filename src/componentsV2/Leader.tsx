import { useSelector, useDispatch } from "react-redux";
import {
  leaderEssenceMap,
  leaderEssenceNames,
  LeaderRelicNames,
} from "../data/DemonData";

import * as selectors from "../redux/selectors";
import * as actions from "../redux/actions";
import {
  AbilityName,
  LeaderEssenceAbility,
  LeaderEssenceName,
  LeaderRelicName,
} from "../types/DemonTypes";
import AbilitySelector from "./AbilitySelector";
import Select from "./Select";
import React, { EventHandler, MouseEventHandler } from "react";

const Leader: React.FC = () => {
  const leader = useSelector(selectors.selectLeader);
  const dispatch = useDispatch();

  const {
    name,
    data: { move, life, combat, abilities },
    leaderEssence,
  } = leader;

  const selectAbility = (name: AbilityName) => {
    if (LeaderRelicNames.includes(name as LeaderRelicName)) {
      console.log("relic");
    } else if (leaderEssenceNames.includes(name as LeaderEssenceName)) {
      dispatch(actions.setLeaderEssence(name as LeaderEssenceName));
    }
  };

  const removeEssence = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(actions.removeLeaderEssence());
  };

  return (
    <div>
      <header>
        <h2>{name}</h2>
      </header>

      <section>
        <table>
          <tbody>
            <tr>
              <th>M</th>
              <td>{move}</td>
              <th>L</th>
              <td>{life}</td>
              <th>C</th>
              <td>{combat}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <br />

      <section>
        {abilities.map((a) => (
          <article>
            <b>{a.name}</b> - {a.text}
          </article>
        ))}

        <br />

        {leaderEssence ? (
          <article>
            <div>
              <b>{leaderEssence.name}</b> - {leaderEssence.text}
            </div>
            <a href="" onClick={removeEssence}>
              remove
            </a>
          </article>
        ) : (
          <aside>
            <Select<LeaderEssenceAbility>
              list={leaderEssenceNames.map((n) => leaderEssenceMap[n])}
              onSelect={selectAbility}
            />
          </aside>
        )}
      </section>
    </div>
  );
};

export default Leader;
