import { useSelector } from "react-redux";
import { selectPhilosopy, selectRoster } from "../redux/selectors";
import Ability from "./Ability";
import { MainHeader, InlineHeader } from "./lib/Typography";

const PhilosophyInfo: React.FC = () => {
  const { name, specialAbility } = useSelector(selectPhilosopy);

  const roster = useSelector(selectRoster);

  return (
    <div className="PhilosophyInfo">
      <header>
        <MainHeader>{name}</MainHeader>
      </header>
      <article>
        <InlineHeader>
          Cost: {roster.reduce((total, demon) => demon.data.cost + total, 0)}
        </InlineHeader>
        &nbsp;&nbsp;
        <InlineHeader>Cabal Size: {roster.length + 2} / 10</InlineHeader>
      </article>
      <Ability ability={specialAbility} tag="Philosophy" />
    </div>
  );
};

export default PhilosophyInfo;
