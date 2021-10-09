import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetData, SendData } from "../../Redux/Action/action";

import "./BannerComponent.css";

function BannerComponent() {
  const [GameId, setGameId] = useState("");
  const [Hover, setHover] = useState(false);

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userReducer.DataList);
  // let filterGameState = selector.filter((item, idx) => idx < 3);

  const ResData = () => {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
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
    <div
      className="BannerSection"
      style={{
        backgroundImage: `url(https://images5.alphacoders.com/540/thumb-1920-540654.jpg)`,
      }}
    >
      {!GameId ? null : <video src={`https://www.freetogame.com/g/${GameId}/videoplayback.webm`} autoPlay />}
      <div className="SideBar">
        <div className="SideBarInner">
          {/* {filterGameState.map(({ id, thumbnail, title }) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
