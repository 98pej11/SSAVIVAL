import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const boxWidth = 50;
const primaryColor = "#219eb0";
const secondaryColor = "#3f679d";
const tertiaryColor = "#0c3d69";
const quaternaryColor = "#116c97";
const iconColor = "#f8f8f8";
const textColor = "#FFF";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    background: radial-gradient(50% 16%, circle, ${primaryColor} 32%, ${secondaryColor} 88%);
  }
  
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 320px;
  height: 320px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    ${tertiaryColor} 16%,
    ${quaternaryColor} 95%
  );
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
`;
const Icons = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  top: 4px;
  left: 8px;
`;

const ButtonLabel = styled.span`
  width: 100%;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: -1rem;
  font-size: 0.75rem;
  font-family: "Share Tech Mono", sans-serif;
`;

function IPGame() {
  return (
    <GlobalStyle>
      <Wrapper>
        <Container>
          <Icons>
            <span class="stop-watch">
              <span class="sw-parts">
                <span class="sw-parts2" id="icn-clock-line"></span>
              </span>
            </span>
            <span class="label" id="label-start-stop">
              START
            </span>
          </Icons>
          <div class="clock">
            <p>
              <span id="hr">00</span>:<span id="min">00</span>:
              <span id="sec">00</span>
            </p>
          </div>
          <ul class="clockline" id="clockline">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="btn btn-reset" id="btn-reset">
            <span class="bl-parts"></span>
            <span class="bl-parts"></span>
            <ButtonLabel>RESET</ButtonLabel>
          </div>
        </Container>
      </Wrapper>
    </GlobalStyle>
  );
}

export default IPGame;
