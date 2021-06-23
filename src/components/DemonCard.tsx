import React from "react";
import { EditableDemon } from "../redux/types";
import StatsTable from "./StatsTable";
import Ability from "./Ability";
import { SectionHeader, Link, InlineTag } from "./lib/Typography";

interface DemonCardProps {
  demon: EditableDemon;
  removeDemon?: () => void;
}

const DemonCard: React.FC<DemonCardProps> = (props) => {
  const {
    demon: {
      name,
      data,
      data: { abilities, cost },
    },
    removeDemon,
  } = props;

  return (
    <div className="DemonCard">
      <header>
        <SectionHeader>{name}</SectionHeader>{" "}
        {cost ? <InlineTag>({cost})</InlineTag> : null}
        &nbsp;
        {removeDemon && <Link onClick={removeDemon}>remove</Link>}
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
