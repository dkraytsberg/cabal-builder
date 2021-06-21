import { useDispatch } from "react-redux";
import { rosterDemonNames } from "../data/DemonData";
import * as actions from "../redux/actions";
import { RosterDemonName } from "../types/DemonTypes";

const RosterPicker: React.FC = () => {
  const dispatch = useDispatch();
  const addDemon = (name: RosterDemonName) => dispatch(actions.addDemon(name));
  return (
    <section className="radio-select">
      {rosterDemonNames.map((name) => (
        <div
          className={`radio-select__card hoverable`}
          onClick={() => addDemon(name)}
          key={name}
        >
          {name}
        </div>
      ))}
    </section>
  );
};

export default RosterPicker;
