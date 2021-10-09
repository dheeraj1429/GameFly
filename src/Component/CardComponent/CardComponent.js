import React from "react";
import "./CardComponent.css";

function CardComponent() {
  return (
    <div
      className="CardComponent"
      style={{
        backgroundImage: `url(${"https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-preview.jpg"})`,
      }}
    >
      <div className="Container">
        <div className="card">
          <div className="ImgDiv"></div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
