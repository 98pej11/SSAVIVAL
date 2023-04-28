import React from "react";
import styled from "styled-components";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import AttendanceGame from "../components/game/AttendanceGame";
import game from "../assets/game.png";

const Pages = styled.div`
  position: relative;
  background-image: url(${game});
  background-size: cover;
  // width: "100vh";
  // height: "100vh";
`;

const myProps = {
  title: "어떻게든 퇴실버튼을 누르쟈",
  number: 4,
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
          <AttendanceGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
