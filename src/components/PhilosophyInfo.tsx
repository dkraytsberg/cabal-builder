import { useSelector } from "react-redux";
import { selectPhilosopy, selectRoster } from "../redux/selectors";
import { DemonType, LordsOfHell } from "../types/DemonTypes";
import Ability from "./Ability";
import { MainHeader, InlineHeader } from "./lib/Typography";

const PhilosophyInfo: React.FC = () => {
  const { name, specialAbility } = useSelector(selectPhilosopy);

  const roster = useSelector(selectRoster);

  const {
    totalCost,
    mostExpensiveLesserDemon,
    demonName: mostExpensiveLesserDemonName,
  } = roster.reduce(
    ({ totalCost, mostExpensiveLesserDemon, demonName }, demon) => {
      const {
        data: { cost, type, name },
      } = demon;
      const demonFound =
        cost > mostExpensiveLesserDemon && type === DemonType.Lesser;
      return {
        totalCost: cost + totalCost,
        mostExpensiveLesserDemon: demonFound ? cost : mostExpensiveLesserDemon,
        demonName: demonFound ? name : demonName,
      };
    },
    { totalCost: 0, mostExpensiveLesserDemon: 0, demonName: "" }
  );

  const costDisplay =
    name === LordsOfHell &&
    totalCost > mostExpensiveLesserDemon &&
    mostExpensiveLesserDemon > 0
      ? `Cost ${
          totalCost - mostExpensiveLesserDemon
        } (${mostExpensiveLesserDemon} off for free ${mostExpensiveLesserDemonName})`
      : `Cost ${totalCost}`;

  return (
    <div className="PhilosophyInfo">
      <header>
        <MainHeader>{name}</MainHeader>
      </header>
      <article>
        <div>
          <InlineHeader>Cabal Size: {roster.length + 2} / 10</InlineHeader>
        </div>
        <div>
          <InlineHeader>{costDisplay}</InlineHeader>
        </div>
      </article>
      <Ability ability={specialAbility} tag="Philosophy" />
    </div>
  );
};

export default PhilosophyInfo;
