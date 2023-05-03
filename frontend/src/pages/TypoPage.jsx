import React from "react";
import styled from "styled-components";
import ElevatorGame from "../components/game/ElevatorGame";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";
import TypoGame from "../components/game/TypoGame";
import desk from "../assets/game_typo/desk.png"

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "틀린 맞춤법을 찾아라!",
  bg: desk,
  number: 2,
};

export default function TypoPage() {
  return (
    <Pages>
      <Header props={myProps} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1%",
          height: "100vh",
        }}
      >
        <GameComp props={myProps}>
          <TypoGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
