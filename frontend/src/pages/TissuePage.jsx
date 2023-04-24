import React from "react";

import TissueGame from "../components/game/TissueGame";

export default function TissuePage() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  };
  const imageStyle = {
    position: "relative",
    width: "100%",
    height: "auto",
    maxWidth: "300px",
  };

  const image1Style = {
    top: "464px",
    position: "absolute",
    zIndex: -1,
  };

  const image2Style = {
    zIndex: 2,
    top: "",
    position: "absolute",
  };

  const image3Style = {
    position: "absolute",
    top: "592px",
    zIndex: -1,
  };
  return (
    <div className="App" style={containerStyle}>
      <img
        src="고양이 휴지곽 뒷면.png"
        style={{ ...imageStyle, ...image1Style }}
      ></img>
      <TissueGame style={{ ...imageStyle, ...image2Style }}></TissueGame>
      <img
        src="고양이 휴지곽 앞면.png"
        style={{ ...imageStyle, ...image3Style }}
      ></img>
    </div>
  );
}
