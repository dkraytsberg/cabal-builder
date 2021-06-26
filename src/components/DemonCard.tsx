import React, { Fragment } from "react";
import { EditableDemon } from "../redux/types";
import StatsTable from "./StatsTable";
import Ability from "./Ability";
import { SectionHeader, Link, InlineTag } from "./lib/Typography";

interface DemonCardProps {
  demon: EditableDemon;
  removeDemon?: () => void;
  renameDemon: () => void;
  clearName: () => void;
}

const DemonCard: React.FC<DemonCardProps> = (props) => {
  const {
    demon: {
      name,
      data,
      displayName,
      data: { abilities, cost },
    },
    removeDemon,
    renameDemon,
    clearName,
  } = props;

  const demonNameDisplay = displayName ? `${displayName} (${name})` : name;

  return (
    <div className="DemonCard">
      <header>
        <SectionHeader>{demonNameDisplay}</SectionHeader>{" "}
        {cost ? <InlineTag>({cost})</InlineTag> : null}
        &nbsp;
        {removeDemon && (
          <Fragment>
            <Link onClick={removeDemon}>remove</Link>&nbsp;
          </Fragment>
        )}
        {renameDemon && (
          <Fragment>
            <Link onClick={displayName ? clearName : renameDemon}>
              {displayName ? "clear name" : "name"}
            </Link>
            &nbsp;
          </Fragment>
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
