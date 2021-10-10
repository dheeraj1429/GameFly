import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetData, SendData } from "../../Redux/Action/action";

import "./BannerComponent.css";

function BannerComponent() {
  const selector = useSelector((state) => state.userReducer.DataList);
  const [GameId, setGameId] = useState("");
  const [Hover, setHover] = useState(false);
  const [dataFetch, setdataFetch] = useState(false);

  const dispatch = useDispatch();

  let filterGameState;

  if (dataFetch === true) {
    filterGameState = selector.filter((item, idx) => idx < 3);
  }

  const ResData = async () => {
    const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2f337c25f4msh599a1d0fa09a3bdp1aa002jsn41bc98941700",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(SetData(data)))
      .catch((err) => {
        console.error(err);
      });

    if (res) {
      setdataFetch(true);
    } else {
      alert("Please check your internet connection");
      setdataFetch(false);
    }
  };

  useEffect(() => {
    ResData();
  }, []);

  const AddingClassEvent = (e) => {
    setHover(true);
  };

  const RemovingClassEvent = (e) => {
    setHover(false);
  };

  return (
    <div className="BannerSection">
      {!GameId ? null : <video src={`https://www.freetogame.com/g/${GameId}/videoplayback.webm`} autoPlay />}
      <div className="BannerContent">
        <img src="/Images/logo.png" />
      </div>
      <div className="SideBar">
        {dataFetch === true ? (
          <div className="SideBarInner">
            {filterGameState.map(({ id, thumbnail, title }) => (
              <div
                className={Hover ? "SideBarCard active" : "SideBarCard"}
                key={id}
                style={{
                  backgroundImage: `url(${thumbnail})`,
                }}
                onClick={() => {
                  dispatch(SendData(thumbnail, title));
                  setGameId(id);
                }}
                onMouseEnter={AddingClassEvent}
                onMouseLeave={RemovingClassEvent}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default BannerComponent;
