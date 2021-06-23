import * as Types from "../types/DemonTypes";
import { InlineHeader, InlineTag, Link } from "./lib/Typography";

interface AbilityProps {
  ability: Types.Ability;
  tag: string;
  onRemove?: () => void;
}
const Ability: React.FC<AbilityProps> = ({ ability, tag, onRemove }) => {
  return (
    <article className="Ability">
      <div>
        <InlineHeader>{ability.name}</InlineHeader> <InlineTag>{tag}</InlineTag>{" "}
        - {ability.text}
      </div>
      {onRemove && <Link onClick={onRemove}>remove</Link>}
    </article>
  );
};

export default Ability;
