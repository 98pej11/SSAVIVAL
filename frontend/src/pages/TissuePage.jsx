import React from "react";
import styled from "styled-components";
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
          <TissueGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
