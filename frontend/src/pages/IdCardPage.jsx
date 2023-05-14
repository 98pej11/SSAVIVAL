import React from "react";
import styled from "styled-components";
import IdCardComp from "../components/game/IdCardComp";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp";
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
  title: "우리 팀 6명의 카드를 모두 태그하자!",
  number: 4,
};

export default function IdCardPage() {
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
            <IdCardComp {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <IdCardComp {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
