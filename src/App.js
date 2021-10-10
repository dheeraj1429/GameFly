import React from "react";
import { Route, Router, Switch } from "react-router";

import Navbar from "./Component/NavBar/Navbar";
import FilterGamePage from "./Pages/FilterGamePage/FilterGamePage";
import HomePage from "./Pages/HomePage/HomePage";
import ShowGameSectionPage from "./Pages/ShowGameSectionPage/ShowGameSectionPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Game-About:GameName" component={ShowGameSectionPage} />
        <Route exact path="/FilterGames" component={FilterGamePage} />
      </Switch>
    </div>
  );
}

export default App;
