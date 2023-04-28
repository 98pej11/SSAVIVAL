import React from "react";
import styled from "styled-components";
import ElevatorGame from "../components/game/ElevatorGame";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "엘레베이터를 붙잡아!",
  number: 2,
};

export default function ElevatorPage() {
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
          <ElevatorGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
