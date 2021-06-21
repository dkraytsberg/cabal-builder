import { useDispatch, useSelector } from "react-redux";
import * as selectors from "../redux/selectors";
import * as actions from "../redux/actions";
import DemonCard from "./DemonCard";

const Roster: React.FC = () => {
  const dispatch = useDispatch();
  const roster = useSelector(selectors.selectRoster);

  const removeDemon = (id: number) => dispatch(actions.removeDemon(id));
  return (
    <div>
      {roster.map((demon) => (
        <DemonCard
          demon={demon}
          removeDemon={() => removeDemon(demon.id)}
          key={`${demon.name}-${demon.id}`}
        />
      ))}
    </div>
  );
};

export default Roster;
