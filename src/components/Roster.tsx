import { useDispatch, useSelector } from "react-redux";
import * as selectors from "../redux/selectors";
import * as actions from "../redux/actions";
import DemonCard from "./DemonCard";

const Roster: React.FC = () => {
  const dispatch = useDispatch();
  const roster = useSelector(selectors.selectRoster);

  const removeDemon = (id: number) => dispatch(actions.removeDemon(id));
  const renameDemon = (id: number, name: string) =>
    dispatch(actions.renameRosterDemon(id, name));

  const clearName = (id: number) => dispatch(actions.renameRosterDemon(id, ""));

  return (
    <div className="Roster">
      {roster.map((demon) => (
        <DemonCard
          demon={demon}
          removeDemon={() => removeDemon(demon.id)}
          renameDemon={() => {
            const name = prompt("Enter a name for your demon");
            renameDemon(demon.id, name || "");
          }}
          clearName={() => clearName(demon.id)}
          key={`${demon.name}-${demon.id}`}
        />
      ))}
    </div>
  );
};

export default Roster;
