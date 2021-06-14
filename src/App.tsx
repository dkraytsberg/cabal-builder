import React from "react";
import {
  DemonData,
  Philosophy,
  DemonType,
  LeaderDemonData,
} from "./types/DemonTypes";
import { philosophies, demons } from "./data/DemonData";
import Selector from "./components/Selector";
import Roster from "./components/Roster";
import PhilosophySelect from "./components/PhilosophySelect";
import LeaderSelect from "./components/LeaderSelect";
import "./App.scss";

function App() {
  const leaders = demons.filter(
    (d) => d.type === DemonType.Leader
  ) as LeaderDemonData[];

  const [roster, setRoster] = React.useState<DemonData[]>([]);
  const [selectedPhilosophy, setSelectedPhilosophy] =
    React.useState<Philosophy>(philosophies[0]);
  const [selectedLeader, setSelectedLeader] = React.useState<LeaderDemonData>(
    leaders[0]
  );

  const addDemon = (demon: DemonData) => {
    setRoster([...roster, demon]);
  };

  const removeDemon = (index: number) => {
    const newDemonList = roster.slice(0, index).concat(roster.slice(index + 1));
    setRoster(newDemonList);
  };
  return (
    <div className="main-container">
      <React.Fragment>
        <LeaderSelect
          selectedPhilosophy={selectedPhilosophy}
          selectedLeader={selectedLeader}
          setSelectedLeader={setSelectedLeader}
          leaders={leaders}
        />
        <PhilosophySelect
          selected={selectedPhilosophy}
          setSelected={setSelectedPhilosophy}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="roster-container">
          <Selector selectDemon={addDemon} />
          <Roster demons={roster} removeDemon={removeDemon} />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
