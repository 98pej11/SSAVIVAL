import React from "react";
import styled from "styled-components";
import Header from "../components/game/Header";
import GameComp from "../components/game/GameComp";

const Pages = styled.div`
  position: relative;
`;

export default function GamePage() {
  return (
    <Pages>
      <Header />
      <GameComp />
    </Pages>
  );
}
