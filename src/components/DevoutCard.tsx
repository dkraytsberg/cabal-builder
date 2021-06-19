import React from "react";
import { useSelector } from "react-redux";
import * as selectors from "../redux/selectors";
import DemonCard from "./DemonCard";

const DevoutCard: React.FC = () => {
  const currentDevout = useSelector(selectors.selectDevout);

  return <DemonCard demon={currentDevout} />;
};

export default DevoutCard;
