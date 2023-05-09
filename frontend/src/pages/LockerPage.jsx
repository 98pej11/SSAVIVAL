import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
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
            <LockerGame {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <LockerGame {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
