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
  EarthBound,
} from "../types/DemonTypes";
import Select from "./Select";
import StatsTable from "./StatsTable";

const Leader: React.FC = () => {
  const leader = useSelector(selectors.selectLeader);
  const currentPhilosopy = useSelector(selectors.selectPhilosopy);

  const dispatch = useDispatch();

  const {
    name,
    data: { abilities },
    leaderEssence,
    secondaryLeaderEssence,
    leaderRelic,
  } = leader;

  const { leaderBonus, name: philosophyName } = currentPhilosopy;

  const selectAbility = (name: AbilityName) => {
    if (leaderRelicNames.includes(name as LeaderRelicName)) {
      dispatch(actions.setLeaderRelic(name as LeaderRelicName));
    } else if (leaderEssenceNames.includes(name as LeaderEssenceName)) {
      dispatch(actions.setLeaderEssence(name as LeaderEssenceName));
    }
  };

  const selectSecondaryEssence = (name: AbilityName) => {
    dispatch(actions.setSecondaryLeaderEssence(name as LeaderEssenceName));
  };

  const removeEssence = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(actions.removeLeaderEssence());
  };

  const removeSecondaryEssence = (
    e: React.SyntheticEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    dispatch(actions.removeSecondaryLeaderEssence());
  };

  const removeRelic = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(actions.removeLeaderRelic());
  };

  const showSecondaryEssenceSelect = philosophyName === EarthBound;

  return (
    <div className="Leader">
      <header>
        <h2>{name}</h2>
        <StatsTable demon={leader.data} />
      </header>
      <br />
      <section>
        {abilities.map((a) => (
          <article>
            <b>{a.name}</b> - {a.text}
          </article>
        ))}

        <article>
          <b>{leaderBonus.name}</b> - {leaderBonus.text}
        </article>

        {leaderEssence ? (
          <article>
            <div>
              <b>{leaderEssence.name}</b> - {leaderEssence.text}
            </div>
            <a href="" onClick={removeEssence} data-hide-on-print>
              remove
            </a>
          </article>
        ) : (
          <aside data-hide-on-print>
            <Select<LeaderEssenceAbility>
              list={leaderEssenceNames.map((n) => leaderEssenceMap[n])}
              onSelect={selectAbility}
              placeholder="add a leader essence..."
            />
          </aside>
        )}

        {showSecondaryEssenceSelect ? (
          secondaryLeaderEssence ? (
            <article>
              <div>
                <b>{secondaryLeaderEssence.name}</b> -{" "}
                {secondaryLeaderEssence.text}
              </div>
              <a href="" onClick={removeSecondaryEssence} data-hide-on-print>
                remove
              </a>
            </article>
          ) : (
            <aside data-hide-on-print>
              <Select<LeaderEssenceAbility>
                list={leaderEssenceNames.map((n) => leaderEssenceMap[n])}
                onSelect={selectSecondaryEssence}
                placeholder="add second leader essence..."
              />
            </aside>
          )
        ) : null}

        {leaderRelic ? (
          <article>
            <div>
              <b>{leaderRelic.name}</b> - {leaderRelic.text}
            </div>
            <a href="" onClick={removeRelic} data-hide-on-print>
              remove
            </a>
          </article>
        ) : (
          <aside data-hide-on-print>
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
