import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../redux/types";
import DemonCard from "./DemonCard";
import { Philosophy } from "../types/DemonTypes";
import { devoutDemonMap } from "../data/DemonData";

const DevoutCard: React.FC = () => {
  const currentPhilosopy = useSelector<ReducerState, Philosophy>(
    (state) => state.philosophy
  );

  const currentDevout = devoutDemonMap[currentPhilosopy.devout];

  return <DemonCard demon={currentDevout} />;
};

export default DevoutCard;
