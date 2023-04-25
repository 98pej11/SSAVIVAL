/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import coin from "../../assets/coin.png";
import time from "../../assets/time.png";

const HeaderComp = styled.div`
  font-family: "neodgm", sans-serif;
`;

function Header(props) {
  return (
    <HeaderComp>
      <AppBar
        elevation={0}
        position="relative"
        // variant="outlined"
        style={{
          backgroundColor: "transparent",
          height: "130px",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="false">
          <Toolbar
            disableGutters
            sx={{
              height: "130px",
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
              <div style={{ fontSize: "1.5rem" }}>점수</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.8rem",
                  margin: 10,
                }}
              >
                <img src={coin} alt="" style={{ width: "1.9rem" }} />
                <div style={{ marginLeft: 5 }}>3,202 M</div>
              </div>
            </Box>
            <Box
              sx={{
                color: "black",
                fontSize: "2.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "white",
                  textShadow:
                    "2px 0 0 black, 0 -2px 0 black, -2px 0 0 black, 0 2px 0 black",
                }}
              >
                {props.props.number} of 20 ROUND
              </div>
              <div
                style={{
                  color: "yellow",
                  textShadow:
                    "2px 0 0 black, 0 -2px 0 black, -2px 0 0 black, 0 2px 0 black",
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
              <div style={{ fontSize: "1.5rem" }}>남은시간</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.8rem",
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
