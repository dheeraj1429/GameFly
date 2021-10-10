import React from "react";
import { Link } from "react-router-dom";
import "./ShowGameSectionPage.css";

function ShowGameSectionPage(props) {
  const data = props.location.AboutGameData;
  console.log(data);

  return (
    <>
      <div className="ShowGameDiv">
        <div className="ContainerDiv">
          <Link to="/">
            <div className="backButton">
              <i class="fas fa-arrow-left"></i>
            </div>
          </Link>

          <div className="Content">
            <div className="AboutImgDiv">
              <div className="VedioSection">
                <video src={`${`https://www.freetogame.com/g/${data.id}/videoplayback.webm`}`} autoPlay />
              </div>
              <img src={`${data.thumbnail}`} />
            </div>
            <div className="AboutGame">
              <h1>{data.title}</h1>
              <p>
                <i class="fas fa-star"></i> platform - {data.platform}
              </p>
              <p>Url - {data.game_url}</p>
              <p>
                <i class="far fa-user"></i> publisher - {data.publisher}
              </p>

              <div>
                <h3>What do you think about Phantasy Star Online 2 New Genesis?</h3>
              </div>

              <h3>About Phantasy Star Online 2 New Genesis</h3>
              <p>{data.short_description}</p>

              <p></p>

              <h3>Additional Information</h3>

              <p>Phantasy Star Online 2 New Genesis Screenshots</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowGameSectionPage;
