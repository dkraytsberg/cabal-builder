import * as Types from "../types/DemonTypes";

interface AbilityProps {
  ability: Types.Ability;
  tag: string;
  onRemove?: () => void;
}
const Ability: React.FC<AbilityProps> = ({ ability, tag, onRemove }) => {
  const remove = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onRemove && onRemove();
  };

  return (
    <article className="Ability">
      <div>
        <b>{ability.name}</b> <i className="tag">{tag}</i> - {ability.text}
      </div>
      {onRemove && (
        <a role="button" href="#" onClick={remove} data-hide-on-print>
          remove
        </a>
      )}
    </article>
  );
};

export default Ability;
