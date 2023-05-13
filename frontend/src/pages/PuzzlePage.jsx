import React from "react";
import styled from "styled-components";
import PuzzleComp from "../components/game/PuzzleComp";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";
import { useSelector } from "react-redux";

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
  const gameMode = useSelector((state) => state.gameMode);
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
        {gameMode === "single" ? (
          <GameComp props={myProps}>
            <PuzzleComp {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <PuzzleComp {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
