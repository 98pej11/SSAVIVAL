import React from "react";
import styled from "styled-components";
import Header from "../components/game/Header";
import GameComp from "../components/game/GameComp";
import "../index.css";

const Pages = styled.div`
  position: relative;
`;

//  여러부운 여기는 안쓰는 페이지입니다 ~ 샘플페이지입니다 지나가세요

export default function GamePage() {
  return (
    <Pages>
      <Header />
      <GameComp />
    </Pages>
  );
}
