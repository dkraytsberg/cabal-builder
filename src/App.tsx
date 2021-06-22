import DevoutCard from "./components/DevoutCard";
import PhilosophySelect from "./components/PhilosophySelect";
import LeaderSelect from "./components/LeaderSelect";
import RosterPicker from "./components/RosterPicker";
import Roster from "./components/Roster";
import Leader from "./components/Leader";
import PhilosophyInfo from "./components/PhilosophyInfo";
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
        <PhilosophyInfo />
        <Leader />
        <DevoutCard />
        <Roster />
      </main>
    </div>
  );
}

export default App;
