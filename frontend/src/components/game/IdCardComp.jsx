import React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useDrag } from "react-use-gesture";
// import Box from "@mui/material/Box";

// import Button from "@mui/material/Button";
import reader from "../../assets/reader.png";
import idCard from "../../assets/IDcard.svg";
import back from "../../assets/card_back.png";
// import online from "../../assets/online.png";

import Draggable from "react-draggable";
// import { useDrag } from "react-use-gesture";

export default function IdCard() {
  // 카드 위치 좌표
  // const [position, setPosition] = useState({ x: 0, y: -300 }); // box의 포지션 값

  const cardPos = useSpring({ x: Math.floor(Math.random() * 600), y: -250 });

  // 드래그
  const bindCardPos = useDrag((params) => {
    console.log("나", params.offset[0], params.offset[1]);
    cardPos.x.set(params.offset[0]);
    cardPos.y.set(params.offset[1]);

    const currentPosition = { x: params.offset[0], y: params.offset[1] };
    const distance = Math.sqrt(
      Math.pow(currentPosition.x - targetPosition.x, 2) +
        Math.pow(currentPosition.y - targetPosition.y, 2)
    );
    if (distance <= targetRange) {
      // 카드 찍기 성공, 점수 갱신!!!
      setScore(score + 1);
      console.log("Arrived at target location! score is", score);
      // 카드 찍기에 성공하면 카드 리더기 빛난 후
      divColor.style.backgroundColor = "red";
      console.log("여기");
      var tempXpos = Math.floor(Math.random() * 600);
      cardPos.x.set(tempXpos);
      cardPos.y.set(-250);
      params.offset[0] = tempXpos;
      params.offset[1] = -250;
    } else {
      // 카드 리더기 밖이면 색 변화 x

      divColor.style.backgroundColor = "white";
    }
  });

  // 카드 드래그할 때 투명도
  const [Opacity, setOpacity] = useState(false);
  // 카드 태그할 때 바뀌는 카드 리더기
  const [divColor, setDivColor] = useState("white");
  // 태그 성공 횟수
  const [score, setScore] = useState(0);
  // 카드 리더기 위치 좌표
  const targetPosition = { x: 800, y: -420 }; // Example target position
  // 카드 리더기에 찍히는 것 감지하는 범위
  const targetRange = 80; // Example target range

  // 카드 찍고 일시적으로 사라지게 하기 => 몰루?!?!
  const [state, setState] = useState(false);

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  // 이미지 이동 실험
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPos((pos) => pos + 10);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div style={{ userSelect: "none", width: "1200px", height: "600px" }}>
      <img
        src={back}
        alt="background"
        style={{
          width: "1200px",
          height: "600px",
          display: "flex",
          position: "absolute",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      <img
        src={reader}
        alt="cardReader"
        style={{
          width: "300px",
          height: "500px",
          marginTop: "50px",
          marginLeft: "800px",
          position: "relative",
        }}
      />
      {/* TestDiv*/}
      <div>
        {/* <img
          src="idCard"
          alt="moving"
          className="move"
          style={{ transform: `translateX(${position}px)` }}
        /> */}
        <div
          style={{
            color: "red",
            fontSize: "50pt",
            transform: `translateX(${pos}px)`,
          }}
        >
          짱짱
        </div>
      </div>

      <div
        ref={setDivColor}
        onDrag={(e, data) => bindCardPos(data)}
        style={{
          width: "160px",
          height: "100px",
          backgroundColor: divColor,
          marginTop: "-440px",
          marginLeft: "867px",
          position: "absolute",
          border: "solid",
          borderColor: "black",
        }}
      ></div>

      {/* <animated.div
        {...bindCardPos()}
        style={{
          x: cardPos.x,
          y: cardPos.y,
        }}
      >
        <img
          src={idCard}
          alt="idCard"
          style={{
            width: "300px",
            height: "250px",
            pointerEvents: "none",
          }}
          animated
        />
      </animated.div> */}

      {/* <Draggable
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
        position={{ x: position.x, y: position.y }}
      >
        <div
          // ref={nodeRef}
          className="box"
          style={{ opacity: Opacity ? "0.6" : "1" }}
        >
          <img
            src={idCard}
            alt="idCard"
            style={{
              width: "300px",
              height: "250px",
            }}
          />
          <div>
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </div>
      </Draggable> */}
    </div>
  );
}

// const TestDiv = styled(`div`)({
//   position: "relative",
//   fontSize: "5rem",
//   animation: "slide 3s ease-in-out",
//   "@keyframes slide": {
//     from: {
//       left: "-650px",
//     },
//     to: {
//       left: "500px",
//     },
//   },
// });

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },
//   "@keyframes ripple": {
//     "0%": {
//       transform: "scale(.8)",
//       opacity: 1,
//     },
//     "100%": {
//       transform: "scale(2.4)",
//       opacity: 0,
//     },
//   },
// }));
