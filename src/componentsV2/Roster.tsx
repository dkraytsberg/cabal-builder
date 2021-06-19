import { useSelector } from "react-redux";
import * as selectors from "../redux/selectors";
import DemonCard from "./DemonCard";

const Roster: React.FC = () => {
  const roster = useSelector(selectors.selectRoster);
  return (
    <div>
      {roster.map((demon) => (
        <DemonCard demon={demon} />
      ))}
    </div>
  );
};

export default Roster;
