import React from "react";
import { EditableDemon } from "../redux/types";
import StatsTable from "./StatsTable";
import Ability from "./Ability";

interface DemonCardProps {
  demon: EditableDemon;
  removeDemon?: () => void;
}

const DemonCard: React.FC<DemonCardProps> = (props) => {
  const {
    demon: {
      name,
      data,
      data: { abilities },
    },
    removeDemon,
  } = props;

  const remove = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    removeDemon && removeDemon();
  };

  return (
    <div className="DemonCard">
      <header>
        <h2>{name}</h2>
        {removeDemon && (
          <a
            role="button"
            href="#"
            className="DemonCard__RemoveLink"
            onClick={remove}
            data-hide-on-print
          >
            remove
          </a>
        )}

        <StatsTable demon={data} />
      </header>
      <br />
      <section>
        {abilities.map((a) => (
          <Ability ability={a} tag="Ability" key={a.name} />
        ))}
      </section>
    </div>
  );
};

export default DemonCard;
