import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EmojiComp from "../components/game/EmojiComp";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";
import kakao from "../assets/kakao.png";
// import { REST_API_KEY , REDIRECT_URI , LOGOUT_REDIRECT_URI , APP_ADMIN_KEY } from "../components/KakaoLoginData";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "MM에 알맞은 이모지를 붙여보자",
  number: 2,
};

export default function EmojiPage() {
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
            <EmojiComp {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <EmojiComp {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
