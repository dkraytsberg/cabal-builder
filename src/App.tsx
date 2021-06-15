import React from "react";
import { DemonData } from "./types/DemonTypes";
import Selector from "./components/Selector";
import Roster from "./components/Roster";
import LeaderCard from "./components/LeaderCard";
import DevoutCard from "./components/DevoutCard";
import PhilosophySelect from "./components/PhilosophySelect";
import LeaderSelect from "./components/LeaderSelect";
import "./App.scss";

function App() {
  const [roster, setRoster] = React.useState<DemonData[]>([]);

  const addDemon = (demon: DemonData) => {
    setRoster([...roster, demon]);
  };

  const removeDemon = (index: number) => {
    const newDemonList = roster.slice(0, index).concat(roster.slice(index + 1));
    setRoster(newDemonList);
  };

  return (
    <div className="main-container">
      <div>
        <LeaderSelect />
        <PhilosophySelect />
        <div>
          <LeaderCard />
          <DevoutCard />
        </div>
      </div>
      <div className="roster-container">
        <Selector selectDemon={addDemon} />
        <div>
          <Roster demons={roster} removeDemon={removeDemon} />
        </div>
      </div>
    </div>
  );
}

export default App;
