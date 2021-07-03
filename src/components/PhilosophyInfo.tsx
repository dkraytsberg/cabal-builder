import { useSelector } from "react-redux";
import { selectPhilosopy, selectRoster } from "../redux/selectors";
import { DemonType, LordsOfHell } from "../types/DemonTypes";
import Ability from "./Ability";
import { MainHeader, InlineHeader } from "./lib/Typography";

const PhilosophyInfo: React.FC = () => {
  const { name, specialAbility } = useSelector(selectPhilosopy);

  const roster = useSelector(selectRoster);

  const { totalCost, mostExpensiveLesserDemon } = roster.reduce(
    ({ totalCost, mostExpensiveLesserDemon }, demon) => {
      const {
        data: { cost, type },
      } = demon;
      return {
        totalCost: cost + totalCost,
        mostExpensiveLesserDemon:
          cost > mostExpensiveLesserDemon && type === DemonType.Lesser
            ? cost
            : mostExpensiveLesserDemon,
      };
    },
    { totalCost: 0, mostExpensiveLesserDemon: 0 }
  );

  const costDisplay =
    name === LordsOfHell && totalCost > mostExpensiveLesserDemon
      ? `Cost ${
          totalCost - mostExpensiveLesserDemon
        } (${totalCost} with free demon)`
      : `Cost ${totalCost}`;

  return (
    <div className="PhilosophyInfo">
      <header>
        <MainHeader>{name}</MainHeader>
      </header>
      <article>
        <InlineHeader>{costDisplay}</InlineHeader>
        &nbsp;&nbsp;
        <InlineHeader>Cabal Size: {roster.length + 2} / 10</InlineHeader>
      </article>
      <Ability ability={specialAbility} tag="Philosophy" />
    </div>
  );
};

export default PhilosophyInfo;
