import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../redux/types";
import DemonCard from "./DemonCard";
import { Philosophy } from "../types/DemonTypes";
import { devoutDemonMap, philosophyMap } from "../data/DemonData";

const DevoutCard: React.FC = () => {
  const currentPhilosopy = useSelector<ReducerState, Philosophy>(
    (state) => philosophyMap[state.philosophy]
  );

  const currentDevout = devoutDemonMap[currentPhilosopy.devout];

  return <DemonCard demon={currentDevout} />;
};

export default DevoutCard;
