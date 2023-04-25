import React from "react";
import styled from "styled-components";
import EmojiComp from "../components/game/EmojiComp";
import TimerBar from "../components/game/TimerBar";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";

const Pages = styled.div`
  position: relative;
  background-image: url(${game});
  background-size: cover;
  // width: "100vh";
  // height: "100vh";
`;

const myProps = {
  title: "MM에 알맞은 이모지를 붙여보자",
  number: 1,
};

export default function EmojiPage() {
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
          <EmojiComp {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
