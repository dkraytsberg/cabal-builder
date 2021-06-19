import { Ability, AbilityName } from "../types/DemonTypes";

interface SelectProps<T> {
  list: T[];
  onSelect: (item: AbilityName) => void;
  placeholder: string;
}
function Select<T extends Ability>(props: SelectProps<T>) {
  return (
    <select
      onChange={(e) => props.onSelect(e.target.value as AbilityName)}
      value="add an ability"
      style={{ width: "300px" }}
    >
      <option value="add an ability" hidden>
        {props.placeholder}
      </option>
      {props.list.map((item) => (
        <option value={item.name}>
          {item.name} - {item.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
