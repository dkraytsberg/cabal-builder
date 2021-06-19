import DevoutCard from "./componentsV2/DevoutCard";
import PhilosophySelect from "./componentsV2/PhilosophySelect";
import LeaderSelect from "./componentsV2/LeaderSelect";
import RosterPicker from "./componentsV2/RosterPicker";
import Roster from "./componentsV2/Roster";

import Leader from "./componentsV2/Leader";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <nav data-hide-on-print>
        <h3>Leader</h3>
        <LeaderSelect />
        <h3>Philosophy</h3>
        <PhilosophySelect />
        <h3>Demons</h3>
        <RosterPicker />
      </nav>
      <main>
        <Leader />
        <DevoutCard />
        <Roster />
      </main>
    </div>
  );
}

export default App;
