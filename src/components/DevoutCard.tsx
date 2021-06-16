import React from "react";
import { useSelector } from "react-redux";
import DemonCard from "./DemonCard";
import * as selectors from "../redux/selectors";
import { devoutDemonMap } from "../data/DemonData";

const DevoutCard: React.FC = () => {
  const currentPhilosopy = useSelector(selectors.selectPhilosopy);
  const currentDevout = devoutDemonMap[currentPhilosopy.devout];

  return <DemonCard demon={currentDevout} />;
};

export default DevoutCard;
