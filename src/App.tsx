import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ChangeLog from "./pages/changelog";
import NewCabalPage from "./pages/NewCabalPage";
import PageHeader from "./components/PageHeader";
import "./App.scss";

function App() {
  const [zenMode, setZenMode] = React.useState(false);

  const toggleZenMode = () => setZenMode(!zenMode);

  return (
    <div className={`App ${zenMode ? "zen-mode" : ""}`}>
      <BrowserRouter>
        <PageHeader />
        <button onClick={toggleZenMode} className="ZenToggle">
          {zenMode ? "exit zen mode" : "zen mode"}
        </button>
        <Switch>
          <Route path="/changes">
            <ChangeLog />
          </Route>
          <Route path="/">
            <NewCabalPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
