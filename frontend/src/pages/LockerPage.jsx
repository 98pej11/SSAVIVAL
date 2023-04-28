import React from "react";
import styled from "styled-components";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import LockerGame from "../components/game/LockerGame";
import game from "../assets/game.png";

// 추후 게임 배경 베이지색 사물함 벽으로 교체?
const Pages = styled.div`
  position: relative;
  background-image: url(${game});
  background-size: cover;
  // width: "100vh";
  // height: "100vh";
`;

const myProps = {
  title: "사물함 비밀번호 입력해보자",
  number: 3,
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
          <LockerGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
