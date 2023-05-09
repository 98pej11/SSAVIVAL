import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../components/game/Header";
import TissueGame from "../components/game/TissueGame";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
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
            <TissueGame {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <TissueGame {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
