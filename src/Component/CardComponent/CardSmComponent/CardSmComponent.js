import React from "react";
import "./CardSmComponent.css";

function CardSmComponent({ thumbnail, title, id, short_description, release_date, publisher, platform, genre }) {
  return (
    <div className="Container">
      <div className="card">
        <div className="Inner-Card">
          <div
            className="ImgDiv"
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>
        </div>

        <div className="CardContent">
          <h1>{title}</h1>
          <p>{short_description}</p>
          <p>{release_date}</p>

          <div className="JoinDiv">
            <div className="JoinDivFirst">
              <img src="/Images/play.png" />
              <p>{publisher}</p>
              <p>{platform}</p>
            </div>

            <div>
              <button type="button" className="JoinButton">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSmComponent;
