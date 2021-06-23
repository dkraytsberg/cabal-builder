import { useDispatch } from "react-redux";
import { rosterDemonMap, rosterDemonNames } from "../data/DemonData";
import * as actions from "../redux/actions";
import { RosterDemonName } from "../types/DemonTypes";
import { InlineHeader } from "./lib/Typography";

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
          <InlineHeader>{name}</InlineHeader>&nbsp;
          <span>{rosterDemonMap[name].cost}</span>
        </div>
      ))}
    </section>
  );
};

export default RosterPicker;
