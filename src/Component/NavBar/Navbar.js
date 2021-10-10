import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.css";

function Navbar(props) {
  const SubNavDataStore = props.state.userReducer.SubNavData;
  const GameArray = props.state.userReducer.DataList;
  const [GameSearch, SetGameSearch] = useState({
    data: "",
    search: false,
  });

  const SearchHandler = (event) => {
    SetGameSearch({ data: event.target.value });
  };

  let FilterGame;
  if (GameArray) {
    FilterGame = GameArray.filter((el) => el.title.toLowerCase().includes(GameSearch.data.toLowerCase()));
  }

  return (
    <>
      <div className="Navbar">
        <div className="NavbarDiv">
          <div className="WhoMadeThis">
            <i class="fas fa-link"></i>
            <p>dheeraj1429@gmail.com</p>
            <i class="fas fa-link"></i>
            <p>bhawanishankar9717657525@gmail.com</p>
          </div>
          <div className="searchDiv">
            <input type="search" placeholder="Video game" value={GameSearch.data} onChange={SearchHandler} />
            <Link
              to={{
                pathname: "/FilterGames",
                FilterData: {
                  FilterGame,
                },
              }}
            >
              <button type="search" className="SearchButton">
                Search
              </button>
            </Link>
          </div>

          <div className="myProfile">
            <div className="profilePicDiv"></div>
            <p>My Account</p>
            <i class="fas fa-shopping-cart"></i>
            <p>My Cart</p>
          </div>
        </div>

        <div className="SubNavBar">
          {SubNavDataStore.map((el) => (
            <Link
              to={{
                pathname: el.name == "HOME" ? "/" : `/Game:${el.name.toLowerCase().trim().replaceAll(" ", "")}`,
              }}
            >
              <p key={el.name}>{el.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Navbar);
