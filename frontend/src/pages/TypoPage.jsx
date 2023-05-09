import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";
import TypoGame from "../components/game/TypoGame";
import desk from "../assets/game_typo/desk.png";

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
  const gameMode = useSelector((state) => state.gameMode);
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
        {gameMode === "single" ? (
          <GameComp props={myProps}>
            <TypoGame {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <TypoGame {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
