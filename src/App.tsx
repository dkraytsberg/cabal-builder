import React from "react";
import Selector from "./components/Selector";
import Roster from "./components/Roster";
import { DemonData } from "./types/DemonTypes";
import "./App.scss";

function App() {
  const [demonList, setDemonList] = React.useState<DemonData[]>([]);

  const addDemon = (demon: DemonData) => {
    setDemonList([...demonList, demon]);
  };

  const removeDemon = (index: number) => {
    const newDemonList = demonList
      .slice(0, index)
      .concat(demonList.slice(index + 1));
    setDemonList(newDemonList);
  };
  return (
    <div className="main-container">
      <Selector selectDemon={addDemon} />
      <Roster demons={demonList} removeDemon={removeDemon} />
    </div>
  );
}

export default App;
