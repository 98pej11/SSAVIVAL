import React from "react";
import styled from "styled-components";
import EmojiComp from "../components/game/EmojiComp";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";
import kakao from "../assets/kakao.png";
import { REST_API_KEY , REDIRECT_URI , LOGOUT_REDIRECT_URI , APP_ADMIN_KEY } from "../components/KakaoLoginData";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "MM에 알맞은 이모지를 붙여보자",
  number: 2,
};

export default function EmojiPage() {

  const KAKAO_AUTH_URL = 
    `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }
  
  const kakaoLogout = () => {
    const ACCESS_TOKEN = localStorage.getItem('access_token');
    
    fetch(`https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`, {
      method: 'GET',
      // body: `client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}`
    })
    .then(() => {
      console.log("here");
      localStorage.clear();
    });
      

    fetch(`https://kapi.kakao.com/v1/user/unlink`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}/KakaoAK ${APP_ADMIN_KEY}`},
    })
    .then(()=> {
      console.log("here2");
    });
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
  }
  
  return (
    <Pages>
      <Header props={myProps} />

      <button onClick={kakaoLogin}><img src={kakao}/></button>
      <button onClick={kakaoLogout}><img src={kakao}/></button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1%",
          height: "100vh",
        }}
      >
        <GameComp props={myProps}>
          <EmojiComp {...myProps} />
        </GameComp>
      </div>
    </Pages>

  );
}
