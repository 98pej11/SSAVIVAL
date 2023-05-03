/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import coin from "../../assets/coin.png";
import time from "../../assets/time.png";
import title from "../../assets/title.png";

const HeaderComp = styled.div`
  font-family: "neodgm", sans-serif;
`;

function Header(props) {
  return (
    <HeaderComp>
      <AppBar
        elevation={0}
        position="relative"
        style={{
          backgroundColor: "transparent",
          height: "100px",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="false">
          <Toolbar
            disableGutters
            sx={{
              height: "100px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              to="/mainPage"
              sx={{
                textAlign: "center",
                color: "black",
              }}
            >
              <div style={{ fontSize: "1.2rem" }}>점수</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  margin: 10,
                }}
              >
                <img src={coin} alt="" style={{ width: "1.2rem" }} />
                <div style={{ marginLeft: 5 }}>3,202 M</div>
              </div>
            </Box>
            <Box
              sx={{
                fontSize: "1.6rem",
                textAlign: "center",
                position: "relative",
              }}
            >
              <img
                src={title}
                alt="background"
                style={{ width: "100%", height: "100px" }}
              />
              <div
                style={{
                  color: "white",
                  textShadow:
                    "2px 0 0 black, 0 -2px 0 black, -2px 0 0 black, 0 2px 0 black",
                  position: "absolute", // 자식 요소를 absolute로 설정
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // 가운데 정렬
                  whiteSpace: "nowrap",
                }}
              >
                {props.props.number} of 20 ROUND
              </div>
              <div
                style={{
                  color: "yellow",
                  textShadow:
                    "2px 0 0 black, 0 -2px 0 black, -2px 0 0 black, 0 2px 0 black",
                  position: "absolute", // 자식 요소를 absolute로 설정
                  bottom: "25%",
                  left: "50%",
                  transform: "translateX(-50%)", // 가운데 정렬
                  whiteSpace: "nowrap",
                }}
              >
                ~ {props.props.title} ~
              </div>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                color: "black",
              }}
            >
              <div style={{ fontSize: "1.2rem" }}>남은시간</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  margin: 10,
                }}
              >
                <img src={time} alt="" style={{ width: "1.9rem" }} />
                <div style={{ marginLeft: 7 }}>2:00:00</div>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderComp>
  );
}
export default Header;
