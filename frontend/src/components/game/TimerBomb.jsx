import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import bombIdle from "../../assets/timer/bomb_idle.png";
import bombBoom from "../../assets/timer/bomb_boom.png";
import bombRed from "../../assets/timer/bomb_red.png";

// timeLimit 값을 입력받아서 그 초만큼의 타이머를 생성
// 2초 남으면 타이머의 색상이 노란색으로 바뀜
// 1초 남으면 타이머와 폭탄의 색상이 빨간색으로 바뀜
// 0초가 되면 폭탄이 터진 이미지로 교체

const TimerBomb = ({ timeLimit }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit * 100);
  const progress = 100 - timeLeft / timeLimit;
  const before2sec = ((timeLimit - 2) / timeLimit) * 100;
  const before1sec = ((timeLimit - 1) / timeLimit) * 100;

  useEffect(() => {
    let intervalId = null;
    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <BarContainer>
      <BombImg
        src={
          progress < 100
            ? progress < before1sec
              ? bombIdle
              : bombRed
            : bombBoom
        }
        alt="Bomb"
      />
      <ColoredBar
        progress={progress}
        before1sec={before1sec}
        before2sec={before2sec}
      >
        <GreyBar progress={progress} />
      </ColoredBar>
    </BarContainer>
  );
};

export default TimerBomb;

const BarContainer = styled.div`
  width: 95%;
  height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 10px;
`;

const BombImg = styled.img`
  width: 50px;
  height: 50px;
`;

const ColoredBar = styled(Box)`
  width: 100%;
  background-color: ${({ progress, before1sec, before2sec }) =>
    progress > before1sec
      ? "#EC2C54"
      : progress > before2sec
      ? "#FFD923"
      : "#3396F4"};
  display: flex;
  justify-content: flex-end;
`;

const GreyBar = styled(Box)`
  width: ${({ progress }) => `${progress}%`};
  height: 10px;
  background-color: #eee;
`;
