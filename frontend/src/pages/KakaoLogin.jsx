import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { REST_API_KEY, REDIRECT_URI } from "../components/KakaoLoginData";
import { kakaoUrl, baseUrl } from "../redux/actions/url";

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
  //   const value = "";
  const [selectedOption, setSelectedOption] = useState(0);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [kakaoNickname, setKakaoNicknamemail] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
    console.log(nickname);
  };
  useEffect(() => {
    getKakaoToken();
    console.log(1);
  }, []);

    useEffect(() => {
        registCheck();
        console.log(2);
        localStorage.setItem('email', email);
        getUserId(email);
    }, [email]);

    const getUserId = async () => {
        await axios.get
            (`http://localhost:8084/api/main/find/${email}`) 
            .then((res) => {
                console.log(res);
                localStorage.setItem("userId", res.data.user.userId)
            })
            .catch(error => console.log(error));
    }
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
          getInfo(data.access_token);
          console.log("나 여기있어~~~");
          // registCheck();
        }
        // navigate('/');
      });
  };
  const getInfo = async (access_token) => {
    // const code = new URL(window.location.href).searchParams.get('code');
    console.log(access_token);
    await axios
      .post(
        `https://kapi.kakao.com/v2/user/me`,
        {},
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log("여기 유저 정보 잘 넘어왔나~");
        console.log(res);
        // console.log(res.data.exist);
        if (res) {
          console.log(res.data.kakao_account.email);
          console.log(res.data.properties.nickname);
          setEmail(res.data.kakao_account.email);
          setKakaoNicknamemail(res.data.properties.nickname);
          // localStorage.setItem('token', res.headers.authorization);
          // 잘 작동한다 email을 kakao에서 잘 받아오면 된다.
        } else {
          console.log("test2");
        }
      })
      .catch((error) => console.log(error));
  };
  const registCheck = async () => {
    // const code = new URL(window.location.href).searchParams.get('code')
    await axios
      .get(`${baseUrl}/user/kakao/check?email=${email}`)
      .then((res) => {
        console.log("여기axios 잘 넘어왔나 확인");
        console.log(res);
        // console.log(res.data.exist);
        if (res.data.exist) {
          // console.log("test1");
          // 잘 작동한다 email을 kakao에서 잘 받아오면 된다.
          window.location.href = `${kakaoUrl}/main`;
          //   window.location.href = `http://localhost:3000/main`;
        } else {
          console.log("test2");
        }
      })
      .catch((error) => console.log(error));
  };

  const regist = async () => {
    const user = {
      nickname: nickname,
      campus: selectedOption,
      mileage: 0,
      email: email,
    };
    console.log(user);
    await axios
      .post(`${baseUrl}/user/kakao/regist`, JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    window.location.href = `${kakaoUrl}/main`;
    // window.location.href = `http://localhost:3000/main`;
  };
  //kakao에서 받은 code를 backend로 넘기기

  // useEffect(() => {
  // if (!location.search) return;
  // getKakaoToken();
  // }, []);
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

  //   useEffect(() => {
  //     if (!location.search) return;
  //     getKakaoToken();
  //   }, []);

  return (
    <Pages>
      <div>
        <label>닉네임</label>
        <input
          type="text"
          placeholder="닉네임 중복 불가."
          value={nickname}
          onChange={handleNicknameChange}
        ></input>
      </div>
      <div>
        <label>지역</label>
        <select name="캠퍼스" onChange={handleOptionChange}>
          <option value="0">서울</option>
          <option value="1">대전</option>
          <option value="2">광주</option>
          <option value="3">구미</option>
          <option value="4">부울경</option>
        </select>
        <button onClick={regist}>제출</button>
        <br />
        {/* <input type="button" value="제출" onClick={regist}></input> */}
        {/* <button onClick={handleButtonClick}>제출</button> */}
      </div>
    </Pages>
  );
}
