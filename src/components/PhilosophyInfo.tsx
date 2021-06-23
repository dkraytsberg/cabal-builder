import { useSelector } from "react-redux";
import { selectPhilosopy } from "../redux/selectors";
import Ability from "./Ability";
import { MainHeader } from "./lib/Typography";

const PhilosophyInfo: React.FC = () => {
  const { name, specialAbility } = useSelector(selectPhilosopy);

  return (
    <div className="PhilosophyInfo">
      <header>
        <MainHeader>{name}</MainHeader>
      </header>
      <Ability ability={specialAbility} tag="Philosophy" />
    </div>
  );
};

export default PhilosophyInfo;
