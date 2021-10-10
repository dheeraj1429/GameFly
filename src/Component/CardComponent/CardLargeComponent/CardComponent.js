import React from "react";
import { useSelector } from "react-redux";

import CardSmComponent from "../CardSmComponent/CardSmComponent";

import "./CardComponent.css";

function CardComponent() {
  const selector = useSelector((state) => state.userReducer.DataList);

  let filterGameState;
  if (selector) {
    filterGameState = selector.filter((item, idx) => idx > 20);
  }

  return (
    <>
      {selector ? (
        <div className="CardComponent">
          <h1>Game Event Join To Online</h1>
          <div className="Container">
            {filterGameState.map(({ ...otherProps }) => (
              <CardSmComponent key={otherProps.id} {...otherProps} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CardComponent;
