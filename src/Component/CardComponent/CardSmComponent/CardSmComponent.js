import React from "react";
import { Link } from "react-router-dom";
import { joinGame } from "../../../Redux/Action/action";
import { useSelector, useDispatch } from "react-redux";

import "./CardSmComponent.css";

function CardSmComponent({
  thumbnail,
  title,
  id,
  short_description,
  release_date,
  publisher,
  platform,
  genre,
  game_url,
  developer,
  freetogame_profile_url,
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <div className="Inner-Card">
          <Link
            to={{
              pathname: `Game-About:${title.replaceAll(" ", "_")}`,
              AboutGameData: {
                thumbnail,
                title,
                id,
                short_description,
                release_date,
                publisher,
                platform,
                genre,
                game_url,
                developer,
                freetogame_profile_url,
              },
            }}
          >
            <div
              className="ImgDiv"
              style={{
                backgroundImage: `url(${thumbnail})`,
              }}
            ></div>
          </Link>
        </div>

        <div className="CardContent">
          <h2>{title}</h2>
          <p>{short_description}</p>
          <p>{release_date}</p>

          <div className="JoinDiv">
            <div className="JoinDivFirst">
              <i class="fas fa-gamepad"></i>
              <p>{publisher}</p>
              <p>{platform}</p>
            </div>

            <div>
              <button
                type="button"
                className="JoinButton"
                onClick={() =>
                  dispatch(
                    joinGame({
                      id: id,
                      name: "joined",
                    })
                  )
                }
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSmComponent;
