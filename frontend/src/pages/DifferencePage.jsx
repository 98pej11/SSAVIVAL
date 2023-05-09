import React from "react";
import styled from "styled-components";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import DifferenceGame from "../components/game/DifferenceGame";
import game from "../assets/game.png";

const Pages = styled.div`
  position: relative;
  background-image: url(${game});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "두 그림에서 서로 다른 곳은?",
  number: 9,
};

export default function LockerPage() {
  return (
    <Pages>
      <Header props={myProps} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <GameComp props={myProps}>
          <DifferenceGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
