import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardSmComponent from "../CardSmComponent/CardSmComponent";

import "./CardComponent.css";

function CardComponent() {
  const selector = useSelector((state) => state.userReducer.DataList);

  selector.length = 20;

  return (
    <div
      className="CardComponent"
      style={{
        backgroundImage: `url(${"https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-preview.jpg"})`,
      }}
    >
      {selector.map(({ id, ...otherProps }) => (
        <CardSmComponent key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default CardComponent;
