import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  leaderEssenceMap,
  leaderEssenceNames,
  leaderRelicMap,
  leaderRelicNames,
} from "../data/DemonData";

import * as selectors from "../redux/selectors";
import * as actions from "../redux/actions";
import {
  AbilityName,
  LeaderEssenceAbility,
  LeaderEssenceName,
  LeaderRelicName,
  LeaderRelicAbility,
} from "../types/DemonTypes";
import Select from "./Select";

const Leader: React.FC = () => {
  const leader = useSelector(selectors.selectLeader);
  const dispatch = useDispatch();

  const {
    name,
    data: { move, life, combat, abilities },
    leaderEssence,
    leaderRelic,
  } = leader;

  const selectAbility = (name: AbilityName) => {
    if (leaderRelicNames.includes(name as LeaderRelicName)) {
      dispatch(actions.setLeaderRelic(name as LeaderRelicName));
    } else if (leaderEssenceNames.includes(name as LeaderEssenceName)) {
      dispatch(actions.setLeaderEssence(name as LeaderEssenceName));
    }
  };

  const removeEssence = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(actions.removeLeaderEssence());
  };

  const removeRelic = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(actions.removeLeaderRelic());
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
              placeholder="add a leader essence..."
            />
          </aside>
        )}

        <br />

        {leaderRelic ? (
          <article>
            <div>
              <b>{leaderRelic.name}</b> - {leaderRelic.text}
            </div>
            <a href="" onClick={removeRelic}>
              remove
            </a>
          </article>
        ) : (
          <aside>
            <Select<LeaderRelicAbility>
              list={leaderRelicNames.map((n) => leaderRelicMap[n])}
              onSelect={selectAbility}
              placeholder="add a leader relic..."
            />
          </aside>
        )}
      </section>
    </div>
  );
};

export default Leader;
