import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
import Header from "../components/game/Header";
import AttendanceGame from "../components/game/AttendanceGame";
import game from "../assets/game.png";

const Pages = styled.div`
  position: relative;
  background-image: url(${game});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "어떻게든 퇴실버튼을 누르쟈",
  number: 4,
};

export default function AttendancePage() {
  const gameMode = useSelector((state) => state.gameMode);
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
        {gameMode === "single" ? (
          <GameComp props={myProps}>
            <AttendanceGame {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <AttendanceGame {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
