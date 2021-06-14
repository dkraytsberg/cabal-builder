import React from "react";
import { DemonData } from "../types/DemonTypes";
import { AbilityText, Section, Header } from "./library";
import "./DemonCard.scss";

interface DemonCardProps {
  demon: DemonData;
  removeSelf?: () => void;
}

const DemonCard: React.FC<DemonCardProps> = (props) => {
  const {
    demon: { name, cost, move, combat, life, abilities, canFly },
    removeSelf,
  } = props;
  return (
    <div className="demon-card">
      <div className="header">
        <Header>{name}</Header>
        {removeSelf && (
          <button className="remove-button" onClick={removeSelf}>
            &times;
          </button>
        )}
      </div>
      <div className="stats-container">
        <div>
          <b>Cost</b>: {cost}
        </div>
        <div>
          <b>Move</b>: {move} {canFly && "- Fly"}
        </div>
        <div>
          <b>Combat</b>: {combat}
        </div>
        <div>
          <b>Life</b>: {life}
        </div>
      </div>
      <div>
        {abilities.map((a) => (
          // todo: add key
          <AbilityText text={a} />
        ))}
      </div>
    </div>
  );
};

export default DemonCard;
