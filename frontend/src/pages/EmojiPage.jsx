import React from "react";
import styled from "styled-components";
import EmojiComp from "../components/game/EmojiComp";
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
  title: "MM에 알맞은 이모지를 붙여보자",
  number: 2,
};

export default function EmojiPage() {
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
          <EmojiComp {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
