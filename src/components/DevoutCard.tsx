import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from "../redux/selectors";
import * as actions from "../redux/actions";
import DemonCard from "./DemonCard";

const DevoutCard: React.FC = () => {
  const dispatch = useDispatch();
  const currentDevout = useSelector(selectors.selectDevout);
  const renameDemon = () => {
    const name = prompt("Enter a name for your devout");
    dispatch(actions.renameDevout(name || ""));
  };

  const clearName = () => {
    dispatch(actions.renameDevout(""));
  };

  return (
    <DemonCard
      demon={currentDevout}
      renameDemon={renameDemon}
      clearName={clearName}
    />
  );
};

export default DevoutCard;
