import React from "react";
import { DemonData } from "./types/DemonTypes";
import Selector from "./components/Selector";
import Roster from "./components/Roster";
import DevoutCard from "./componentsV2/DevoutCard";
import PhilosophySelect from "./components/PhilosophySelect";
import LeaderSelect from "./componentsV2/LeaderSelect";
import Leader from "./componentsV2/Leader";
import "./App.scss";

/* <div>
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
      </div> */

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
    <div className="App">
      <nav data-hide-on-print>
        <h3>Leader</h3>
        <LeaderSelect />
        <h3>Philosophy</h3>
        <PhilosophySelect />
      </nav>
      <main>
        <Leader />
        <br />
        <DevoutCard />
      </main>
    </div>
  );
}

export default App;
