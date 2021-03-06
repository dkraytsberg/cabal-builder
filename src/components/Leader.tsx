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
  Brokers,
} from "../types/DemonTypes";
import Select from "./Select";
import StatsTable from "./StatsTable";
import Ability from "./Ability";
import { Link, SectionHeader } from "./lib/Typography";

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
    displayName,
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

  const removeEssence = () => dispatch(actions.removeLeaderEssence());

  const removeSecondaryEssence = () =>
    dispatch(actions.removeSecondaryLeaderEssence());

  const removeRelic = () => dispatch(actions.removeLeaderRelic());
  const renameLeader = () => {
    const name = prompt("Enter a name for your leader");
    dispatch(actions.renameLeader(name || ""));
  };

  const clearName = () => {
    dispatch(actions.renameLeader(""));
  };

  const showSecondaryEssenceSelect = philosophyName === Brokers;

  const demonDisplayName = displayName ? `${displayName} (${name})` : name;

  return (
    <div className="Leader">
      <header>
        <SectionHeader>{demonDisplayName}</SectionHeader>
        &nbsp;
        <Link onClick={displayName ? clearName : renameLeader}>
          {displayName ? "clear name" : "name"}
        </Link>
        <StatsTable demon={leader.data} />
      </header>
      <br />
      <section>
        {abilities.map((a) => (
          <Ability ability={a} tag="Ability" key={a.name} />
        ))}
        <Ability ability={leaderBonus} tag="Philosophy bonus" />

        {leaderEssence ? (
          <Ability
            ability={leaderEssence}
            tag="Essence"
            onRemove={removeEssence}
          />
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
            <Ability
              ability={secondaryLeaderEssence}
              tag="Essence"
              onRemove={removeSecondaryEssence}
            />
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
          <Ability ability={leaderRelic} tag="Relic" onRemove={removeRelic} />
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
