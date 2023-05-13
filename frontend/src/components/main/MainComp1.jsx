import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import start from "../../assets/start.png";
import exit from "../../assets/exit.png";
import happy_pepe2 from "../../assets/happy_pepe2.png";
import { GameAction } from "../../redux/actions/GameAction";

const Comp1 = styled.div`
  font-family: "neodgm";
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
`;

const Title = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1rem;
  }
`;

const HoverBox = styled.div`
  font-family: "neodgm";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50%;

  // Box img {
  //   transition: all 0.2s linear;
  // }

  // &:hover img {
  //   transform: scale(1.4);
  // }

  > div:hover {
    transform: scale(1.2);
  }
`;
export default function MainComp1() {
  const gameMode = useSelector((state) => state.gameMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSinglePlayerClick = () => {
    dispatch({ type: "SET_GAME_MODE", payload: { gameMode: "single" } });
    dispatch(GameAction.getRemindAnswer("음식"));
    navigate("/game"); // /game 경로로 이동
  };

  const handleMultiPlayerClick = () => {
    dispatch({ type: "SET_GAME_MODE", payload: { gameMode: "multi" } });
    navigate("/game"); // /game 경로로 이동
  };

  return (
    <Comp1>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundColor: "#FFE651",
          borderRadius: 12,
        }}
      >
        <Title>
          <img
            src={happy_pepe2}
            alt=""
            style={{ width: "10%", height: "5%", marginRight: 5 }}
          />
          <span>싸피를 즐기러 가보자!</span>
          <img
            src={happy_pepe2}
            alt=""
            style={{ width: "10%", height: "5%", marginRight: 5 }}
          />
        </Title>
        <HoverBox>
          <Box
            sx={{
              bgcolor: "white",
              width: "35%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
              cursor: "pointer", // 추가
            }}
            onClick={handleSinglePlayerClick}
          >
            <div>싱글플레이</div>

            <img src={start} alt="" style={{ width: "90%", height: "90%" }} />
          </Box>
          <Box
            sx={{
              bgcolor: "white",
              width: "35%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
              cursor: "pointer", // 추가
            }}
            onClick={handleMultiPlayerClick}
          >
            <div>멀티플레이</div>

            <img src={exit} alt="" style={{ width: "100%", height: "100%" }} />
          </Box>
        </HoverBox>
      </Box>
    </Comp1>
  );
}
