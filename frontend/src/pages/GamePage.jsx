import React from "react";
import styled from "styled-components";
import Header from "../components/game/Header";
import GameComp from "../components/game/GameComp";
import "../index.css";

const Pages = styled.div`
  position: relative;
`;

/*안쓰는페이지*/
export default function GamePage() {
  return (
    <Pages>
      <Header />
      <GameComp />
    </Pages>
  );
}
