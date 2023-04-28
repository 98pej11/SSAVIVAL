import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import elevator from "../../assets/elevator.png";

const ElevatorImageWrapper = styled.div`
  position: relative;
`;

const ElevatorImage = styled.img`
  width: 200px;
  position: relative;
  animation: moveUpDown 0.8s ease-in-out infinite;
  z-index: 2;

  @keyframes moveUpDown {
    0% {
      transform: translateY(250px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(250px);
    }
  }
`;

const CenterBox = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  width: 190px;
  height: 230px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #000;
  z-index: 1;
`;

const FloorComp = styled.div`
  font-family: "neodgm", sans-serif;
  font-size: 2rem;
  color: white;
`;

export default function ElevatorGame() {
  const [count, setCount] = useState(0); // count 값 상태로 관리

  // ElevatorImage와 CenterBox의 위치가 일치하는지 확인하는 함수
  const handleClick = () => {
    const elevatorEl = document.querySelector(".elevator-image");
    const centerBoxEl = document.querySelector(".center-box");

    // ElevatorImage와 CenterBox의 위치가 일치하면 count 값을 증가시키도록 수정
    if (
      elevatorEl &&
      centerBoxEl &&
      elevatorEl.getBoundingClientRect().left <
        elevatorEl.getBoundingClientRect().right &&
      elevatorEl.getBoundingClientRect().right >
        elevatorEl.getBoundingClientRect().left &&
      elevatorEl.getBoundingClientRect().top <
        elevatorEl.getBoundingClientRect().bottom &&
      elevatorEl.getBoundingClientRect().bottom >
        elevatorEl.getBoundingClientRect().top
    ) {
      setCount(count + 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FloorComp>Floor: {count}</FloorComp>
      <ElevatorImageWrapper>
        <ElevatorImage
          src={elevator}
          alt=""
          className="elevator-image"
          style={{ width: "200px" }}
          onClick={handleClick}
        />
        <CenterBox className="center-box" />
      </ElevatorImageWrapper>
    </Box>
  );
}
