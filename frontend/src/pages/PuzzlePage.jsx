import React from "react";
import styled from "styled-components";
import PuzzleComp from "../components/game/PuzzleComp";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";

const Pages = styled.div`
  position: relative;
  background-image: url(${game});
  // background-size: auto;
  background-size: contain;
  // background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "커피내기 퍼즐게임",
  number: 9,
};

export default function PuzzlePage() {
  return (
    <Pages>
      <Header props={myProps} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <GameComp props={myProps}>
          <PuzzleComp {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
