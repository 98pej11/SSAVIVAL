import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Header from "../components/game/Header";
import TissueGame from "../components/game/TissueGame";
import GameComp from "../components/game/GameComp";
import "../index.css";
import game from "../assets/game.png";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;

const myProps = {
  title: "휴지를 최대한 많이! 뽑아보쟈",
  number: 2,
};

export default function TissuePage() {
  const ContainerStyle = {};
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
    <Pages>
      <Header props={myProps} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <GameComp props={myProps}>
          <TissueGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
