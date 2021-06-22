import { useSelector } from "react-redux";
import { selectPhilosopy } from "../redux/selectors";
import Ability from "./Ability";

const PhilosophyInfo: React.FC = () => {
  const { name, specialAbility } = useSelector(selectPhilosopy);

  return (
    <div className="PhilosophyInfo">
      <header>
        <h1>{name}</h1>
      </header>
      <Ability ability={specialAbility} tag="Philosophy" />
    </div>
  );
};

export default PhilosophyInfo;
