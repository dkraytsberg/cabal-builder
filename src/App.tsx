import React from "react";
import DevoutCard from "./components/DevoutCard";
import PhilosophySelect from "./components/PhilosophySelect";
import LeaderSelect from "./components/LeaderSelect";
import RosterPicker from "./components/RosterPicker";
import Roster from "./components/Roster";
import Leader from "./components/Leader";
import PhilosophyInfo from "./components/PhilosophyInfo";
import ChangeLog from "./changelog";
import "./App.scss";

function App() {
  const [zenMode, setZenMode] = React.useState(false);

  const toggleZenMode = () => setZenMode(!zenMode);

  return (
    <div className={`App ${zenMode ? "zen-mode" : ""}`}>
      <button onClick={toggleZenMode} className="ZenToggle">
        {zenMode ? "exit zen mode" : "zen mode"}
      </button>
      <div className="App__Body">
        <nav data-hide-on-print>
          <h3>Leader</h3>
          <LeaderSelect />
          <h3>Philosophy</h3>
          <PhilosophySelect />
          <h3>Demons</h3>
          <RosterPicker />
        </nav>
        <main>
          <PhilosophyInfo />
          <Leader />
          <DevoutCard />
          <Roster />
        </main>
      </div>
      {/* <ChangeLog /> */}
    </div>
  );
}

export default App;
