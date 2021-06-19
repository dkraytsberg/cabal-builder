import React from "react";
import { useSelector } from "react-redux";
import * as selectors from "../redux/selectors";
import StatsTable from "./StatsTable";

const DevoutCard: React.FC = () => {
  const currentDevout = useSelector(selectors.selectDevout);

  const {
    name,
    data,
    data: { abilities },
  } = currentDevout;

  return (
    <div className="DevoutCard">
      <header>
        <h2>{name}</h2>
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

export default DevoutCard;
