import React from "react";
import styled from "styled-components";
import SeatComp from "../components/game/SeatComp";
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
  title: "시간 안에 우리 팀원들을 다 앉을 수 있게 하자!",
  number: 5,
};

export default function SeatPage() {
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
          <SeatComp {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
