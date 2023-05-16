import React from "react";
import { useEffect } from "react";

export default function Logoutbtn()  {
  useEffect(() => {
    // Kakao JavaScript SDK 로드
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    // Kakao SDK 초기화
    script.onload = () => {
      window.Kakao.init("0fe168522b983b72237c2dfd782649a2");
    };
  }, []); 

  const handleLogoutClick = () => {
    const ACCESS_TOKEN = localStorage.getItem("access_token");
    // 카카오 API 로그아웃 요청
    fetch("https://kapi.kakao.com/v1/user/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
            console.log("들어는 갔나");
            if(window.Kakao){
                console.log(window.Kakao);
                console.log("로그아웃되었습니다1.");
                // window.Kakao.Auth.setAccessToken(undefined);
                window.Kakao.Auth.logout();
                localStorage.clear();
                window.location.href = "http://localhost:3000";
                // .then(function(res) => {
                //     console.log(window.Kakao.Auth.getAccessToken());
                // });
                // console.log(window.Kakao);
                // console.log("로그아웃되었습니다2.");
                // window.Kakao.Auth.setRefreshToken(undefined);
            }
            // 액세스 토큰과 리프레시 토큰 삭제
            // 페이지 새로고침
            // window.location.reload();
        } else {
          console.log("로그아웃 실패:", response.status);
        }
      })
      .catch((error) => {
        console.log("오류 발생:", error);
      });
  };

    return <button onClick={handleLogoutClick}>로그아웃</button>;

}


