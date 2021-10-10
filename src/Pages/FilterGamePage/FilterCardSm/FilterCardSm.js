import React from "react";
import "./FilterCardSm.css";

function FilterCardSm(props) {
  return (
    <div className="FilterDivContent">
      <div
        className="FilterImgDiv"
        style={{
          backgroundImage: `url(${props.data.thumbnail})`,
        }}
      ></div>
      <div className="FilteContent">
        <h1>{props.data.title}</h1>
        <div className="ContentFlex">
          <p>
            {" "}
            <i class="far fa-star"></i> {props.data.genre}
          </p>
          <p>
            <i class="far fa-user"></i> {props.data.developer}
          </p>
          <p>
            <i class="fas fa-gamepad"></i> {props.data.platform}
          </p>
        </div>
        <p>{props.data.short_description}</p>
      </div>
    </div>
  );
}

export default FilterCardSm;
