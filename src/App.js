import React, { useState } from "react";
import { Route, Router, Switch } from "react-router";

import Navbar from "./Component/NavBar/Navbar";
import FilterGamePage from "./Pages/FilterGamePage/FilterGamePage";
import HomePage from "./Pages/HomePage/HomePage";
import ShowGameSectionPage from "./Pages/ShowGameSectionPage/ShowGameSectionPage";

import "./App.css";

function App() {
  const [ShowUpperArrow, setShowUpperArrow] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
      setShowUpperArrow(true);
    }
    if (this.scrollY < 10) {
      setShowUpperArrow(false);
    }
  });

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar />

      {ShowUpperArrow == true ? (
        <div className="ScrollTop" onClick={scrollTopHandler}>
          <i class="fas fa-long-arrow-alt-up"></i>
        </div>
      ) : null}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Game-About:GameName" component={ShowGameSectionPage} />
        <Route exact path="/FilterGames" component={FilterGamePage} />
      </Switch>
    </div>
  );
}

export default App;
