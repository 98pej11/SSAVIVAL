import React from "react";
import styled from "styled-components";
import SeatComp from "../components/game/SeatComp";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";
import { useSelector } from "react-redux";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "시간 안에 우리 팀원들을 다 앉을 수 있게 하자!",
  number: 5,
};

export default function SeatPage() {
  const gameMode = useSelector((state) => state.gameMode);
  return (
    <Pages>
      <Header props={myProps} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // width: "100%",
          height: "100vh",
        }}
      >
        {gameMode === "single" ? (
          <GameComp props={myProps}>
            <SeatComp {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <SeatComp {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
