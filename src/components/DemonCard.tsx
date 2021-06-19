import React from "react";
import { EditableDemon } from "../redux/types";
import StatsTable from "./StatsTable";

interface DemonCardProps {
  demon: EditableDemon;
}

const DemonCard: React.FC<DemonCardProps> = (props) => {
  const {
    name,
    data,
    data: { abilities },
  } = props.demon;

  return (
    <div className="DemonCard">
      <header>
        <h2>{name}</h2>
        <a href=""> remove</a>
        <StatsTable demon={data} />
      </header>
      <br />
      <section>
        {abilities.map((a) => (
          <React.Fragment>
            <article>
              <b>{a.name}</b> - {a.text}
            </article>
            <br />
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default DemonCard;
