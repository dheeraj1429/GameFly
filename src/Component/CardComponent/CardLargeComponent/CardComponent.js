import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardSmComponent from "../CardSmComponent/CardSmComponent";

import "./CardComponent.css";

function CardComponent() {
  const selector = useSelector((state) => state.userReducer.DataList);
  const [GameSelection, setGameSelection] = useState(false);

  let filterGameState;
  if (GameSelection == true) {
    filterGameState = selector.filter((item, idx) => idx < 12);
  }

  const ResData = async () => {
    setTimeout(() => {
      setGameSelection(true);
    }, 300);
  };

  useEffect(() => {
    ResData();
  }, []);

  return (
    <>
      {GameSelection === true ? (
        <div className="CardComponent">
          <h1>Game Event Join To Online</h1>
          <div className="Container">
            {filterGameState.map(({ id, ...otherProps }) => (
              <CardSmComponent key={id} {...otherProps} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CardComponent;
