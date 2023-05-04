import React from "react";
import styled from "styled-components";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import LockerGame from "../components/game/LockerGame";
import game from "../assets/game.png";
import "./Login.css";
import kakao from "../assets/kakao.png";
// import {
//   REST_API_KEY,
//   REDIRECT_URI,
//   LOGOUT_REDIRECT_URI,
//   APP_ADMIN_KEY,
// } from "../components/KakaoLoginData";
import ssavival from "../assets/ssavival.png";

export default function LoginPage() {
  // var characterElement = document.querySelector(".Character");

  // var spritesheets = [
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-HANK-2-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-EMMY-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-SHIRMOND-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-SARA-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-PATTY-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-JESSIE-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-KIM-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-MINDY-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-ZAK-SHEET.png",
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-BEAR-SHEET.png",
  // ];

  // let activeIndex = 0;
  // let spritesheetElements = "";
  // let navigationElements = "";

  // spritesheets.forEach((spritesheet, index) => {
  //   spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage Character_sprite-sheet index-${index}" />`;
  //   navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive(${index})' />`;
  // });
  // characterElement.insertAdjacentHTML("beforeend", spritesheetElements);

  // document
  //   .querySelector(".Navigation")
  //   .insertAdjacentHTML("beforeend", navigationElements);

  // function setActive(index) {
  //   activeIndex = index;
  //   document.querySelectorAll(`.active`).forEach((node) => {
  //     node.classList.remove("active");
  //   });
  //   document.querySelectorAll(`.index-${index}`).forEach((node) => {
  //     node.classList.add("active");
  //   });
  // }

  // function setDirection(direction) {
  //   [
  //     "Character--walk-down",
  //     "Character--walk-right",
  //     "Character--walk-up",
  //     "Character--walk-left",
  //   ].forEach((className) => {
  //     characterElement.classList.remove(className);
  //   });

  //   document
  //     .querySelector(".DirectionArrow--active")
  //     .classList.remove("DirectionArrow--active");

  //   var directionClass = "Character--walk-down";
  //   if (direction === "DOWN") {
  //     document
  //       .querySelector(".DirectionArrow-down")
  //       .classList.add("DirectionArrow--active");
  //   }

  //   if (direction === "LEFT") {
  //     directionClass = "Character--walk-left";
  //     document
  //       .querySelector(".DirectionArrow-left")
  //       .classList.add("DirectionArrow--active");
  //   }
  //   if (direction === "RIGHT") {
  //     directionClass = "Character--walk-right";
  //     document
  //       .querySelector(".DirectionArrow-right")
  //       .classList.add("DirectionArrow--active");
  //   }
  //   if (direction === "UP") {
  //     directionClass = "Character--walk-up";
  //     document
  //       .querySelector(".DirectionArrow-up")
  //       .classList.add("DirectionArrow--active");
  //   }

  //   characterElement.classList.add(directionClass);
  // }

  // function setPreviousActive() {
  //   activeIndex = activeIndex > 0 ? activeIndex - 1 : spritesheets.length - 1;
  //   setActive(activeIndex);
  // }

  // function setNextActive() {
  //   activeIndex = activeIndex < spritesheets.length - 1 ? activeIndex + 1 : 0;
  //   setActive(activeIndex);
  // }

  // //Kick it off!
  // setActive(activeIndex);

  //  카카오 로그인
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const kakaoLogin = () => {
  //   window.location.href = KAKAO_AUTH_URL;
  // };
  // const kakaoLogout = () => {
  //   const ACCESS_TOKEN = localStorage.getItem("access_token");

  //   fetch(
  //     `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`,
  //     {
  //       method: "GET",
  //       // body: `client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}`
  //     }
  //   ).then(() => {
  //     console.log("here");
  //     localStorage.clear();
  //   });

  //   fetch(`https://kapi.kakao.com/v1/user/unlink`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${ACCESS_TOKEN}/KakaoAK ${APP_ADMIN_KEY}`,
  //     },
  //   }).then(() => {
  //     console.log("here2");
  //   });
  // .then(res => res.json())
  // .then(data => {
  //     console.log(data);
  //     console.log(data.id_token)
  //     if(data.access_token) {
  //         localStorage.setItem('access_token', data.access_token);
  //         localStorage.setItem('refresh_token', data.refresh_token);
  //     }
  //     // navigate('/');
  // });
  // };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <main class="Container">
          <img
            class="TitleImage PixelArtImage"
            src={ssavival}
            alt="Walking Demo Sprites"
          />
          <div class="SpritesheetSlider">
            <div class="Character Character--walk-down">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
                class="Character_shadow PixelArtImage"
              />
            </div>

            <div class="Navigation flex-center"></div>
            <button
              class="NextSpritesheetButton NextSpritesheetButton--prev"
              onclick="setPreviousActive()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 4 7"
                shape-rendering="crispEdges"
              >
                <metadata>
                  Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
                </metadata>
                <path
                  stroke="#434343"
                  d="M3 0h1M2 1h1M1 2h1M0 3h1M1 4h1M2 5h1M3 6h1"
                />
              </svg>
            </button>
            <button
              class="NextSpritesheetButton NextSpritesheetButton--next"
              onclick="setNextActive()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 4 7"
                shape-rendering="crispEdges"
              >
                <metadata>
                  Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
                </metadata>
                <path
                  stroke="#434343"
                  d="M0 0h1M1 1h1M2 2h1M3 3h1M2 4h1M1 5h1M0 6h1"
                />
              </svg>
            </button>
          </div>
          <img src={kakao} />
          <div class="center">
            <br />
            <button
              class="DirectionArrow DirectionArrow-left"
              onclick="setDirection('LEFT')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 13 13"
                shape-rendering="crispEdges"
              >
                <path
                  class="Arrow_outline-top"
                  stroke="#5f5f5f"
                  d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                />
                <path
                  class="Arrow_surface"
                  stroke="#f5f5f5"
                  d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h4M7 4h5M1 5h3M7 5h5M1 6h4M7 6h5M1 7h5M7 7h5M1 8h11"
                />
                <path
                  class="Arrow_arrow-inset"
                  stroke="#434343"
                  d="M6 3h1M5 4h1M4 5h1"
                />
                <path
                  class="Arrow_arrow-body"
                  stroke="#5f5f5f"
                  d="M6 4h1M5 5h2M5 6h2M6 7h1"
                />
                <path
                  class="Arrow_outline-bottom"
                  stroke="#434343"
                  d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                />
                <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                <path
                  class="Arrow_front"
                  stroke="#cccccc"
                  d="M1 10h11M1 11h11"
                />
              </svg>
            </button>
            <button
              class="DirectionArrow DirectionArrow-up"
              onclick="setDirection('UP')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 13 13"
                shape-rendering="crispEdges"
              >
                <path
                  class="Arrow_outline-top"
                  stroke="#5f5f5f"
                  d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                />
                <path
                  class="Arrow_surface"
                  stroke="#f5f5f5"
                  d="M1 1h11M1 2h11M1 3h11M1 4h5M7 4h5M1 5h4M8 5h4M1 6h3M9 6h3M1 7h11M1 8h11"
                />
                <path
                  class="Arrow_arrow-inset"
                  stroke="#434343"
                  d="M6 4h1M5 5h1M7 5h1"
                />
                <path
                  class="Arrow_arrow-body"
                  stroke="#5f5f5f"
                  d="M6 5h1M4 6h5"
                />
                <path
                  class="Arrow_outline-bottom"
                  stroke="#434343"
                  d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                />
                <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                <path
                  class="Arrow_front"
                  stroke="#cccccc"
                  d="M1 10h11M1 11h11"
                />
              </svg>
            </button>
            <button
              class="DirectionArrow DirectionArrow-down DirectionArrow--active"
              onclick="setDirection('DOWN')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 13 13"
                shape-rendering="crispEdges"
              >
                <path
                  class="Arrow_outline-top"
                  stroke="#5f5f5f"
                  d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                />
                <path
                  class="Arrow_surface"
                  stroke="#f5f5f5"
                  d="M1 1h11M1 2h11M1 3h11M1 4h3M9 4h3M1 5h4M8 5h4M1 6h5M7 6h5M1 7h11M1 8h11"
                />
                <path class="Arrow_arrow-inset" stroke="#434343" d="M4 4h5" />
                <path
                  class="Arrow_arrow-body"
                  stroke="#5f5f5f"
                  d="M5 5h3M6 6h1"
                />
                <path
                  class="Arrow_outline-bottom"
                  stroke="#434343"
                  d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                />
                <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                <path
                  class="Arrow_front"
                  stroke="#cccccc"
                  d="M1 10h11M1 11h11"
                />
              </svg>
            </button>
            <button
              class="DirectionArrow DirectionArrow-right"
              onclick="setDirection('RIGHT')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 13 13"
                shape-rendering="crispEdges"
              >
                <path
                  class="Arrow_outline-top"
                  stroke="#5f5f5f"
                  d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                />
                <path
                  class="Arrow_surface"
                  stroke="#f5f5f5"
                  d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h5M8 4h4M1 5h5M9 5h3M1 6h5M8 6h4M1 7h5M7 7h5M1 8h11"
                />
                <path
                  class="Arrow_arrow-inset"
                  stroke="#434343"
                  d="M6 3h1M7 4h1M8 5h1"
                />
                <path
                  class="Arrow_arrow-body"
                  stroke="#5f5f5f"
                  d="M6 4h1M6 5h2M6 6h2M6 7h1"
                />
                <path
                  class="Arrow_outline-bottom"
                  stroke="#434343"
                  d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                />
                <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                <path
                  class="Arrow_front"
                  stroke="#cccccc"
                  d="M1 10h11M1 11h11"
                />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
