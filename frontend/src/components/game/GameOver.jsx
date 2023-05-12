/* eslint-disable no-console */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import menu from "../../assets/menu.png";
import yes from "../../assets/yes.png";
import onemore from "../../assets/onemore.png";

const Comp = styled.div`
  font-family: "neodgm";
`;

function GameOver(props) {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  const offGame = () => {
    // 게임 점수 저장 코드 필요
    navigate("/main"); // /emoji 경로로 이동
  };

  const moreGame = () => {
    // 게임 점수 저장 및 첫번째 게임으로 다시 돌아가자
    navigate("/emoji");
  };
  return (
    <Comp>
      <Dialog open={open} onClose={handleClose}>
        <img src={menu} alt="" />
        <Typography
          sx={{
            fontFamily: "neodgm",
            position: "absolute",
            top: "36%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
          }}
          variant="h6"
        >
          3,202M
        </Typography>
        <Typography
          sx={{
            fontFamily: "neodgm",
            position: "absolute",

            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#FFD525",
          }}
          variant="h6"
        >
          게임을 종료하시겠습니까?
        </Typography>
        <img
          src={yes}
          alt=""
          style={{
            position: "absolute",
            top: "80%",
            left: "35%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onClick={offGame}
        />
        <img
          src={onemore}
          alt=""
          style={{
            position: "absolute",
            top: "80%",
            left: "65%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onClick={moreGame}
        />
      </Dialog>
    </Comp>
  );
}
export default GameOver;
