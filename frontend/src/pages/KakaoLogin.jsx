import React, { useEffect } from "react";
// import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { REST_API_KEY, REDIRECT_URI } from "../components/KakaoLoginData";

const Pages = styled.div`
  position: relative;
`;

export default function KakaoLogin() {
  // const PARAMS = new URL(document.location).searchParams;
  // const KAKAO_CODE = PARAMS.get('code');
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  const REQUEST_ADDRESS = "";

  // kakao에서 access-token 받기
  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(data.id_token) undefined(권한 비지니스로 상승해야함)
        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
        }
        // navigate('/');
      });
  };
  //kakao에서 받은 code를 backend로 넘기기

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);
  // 1.해당 페이지가 로딩되었다면 url 에 인가코드가 담기게 된다.
  // useEffect(() => {
  //     axios.get(`${REQUEST_ADDRESS}auth/kakao?code=${KAKAO_CODE}`).then((res) => {

  //         //5. ok respone 확인하고, 이후 작업 해야함(유저로그인시키기, 토큰 브라우저에 저장)
  //          localStorage.setItem("token", res.data.token);
  //          axios //서버에서 유저정보 요청하는 url
  //            .get(`${REQUEST_ADDRESS}userinfo`, {
  //             headers: {
  //                 //헤더에 token을 담아서 전달
  //                 Authorization: "Bearer " + res.data.token,
  //             },
  //            })
  //            .then((response) => {
  //             console.log(response);
  //             navigate("/");
  //            });
  //        });
  // },[])

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return (
    <Pages>
      <form action="" method="post">
        <label>지역</label>
        <select name="캠퍼스">
          <option value="0">서울</option>
          <option value="1">대전</option>
          <option value="2">광주</option>
          <option value="3">구미</option>
          <option value="4">부울경</option>
        </select>
        <button>제출</button>
      </form>
    </Pages>
  );
}
