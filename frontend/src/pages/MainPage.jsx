import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/main/MainHeader";
import MainComp1 from "../components/main/MainComp1";
import MainComp2 from "../components/main/MainComp2";
import MainComp3 from "../components/main/MainComp3";
import MainComp4 from "../components/main/MainComp4";
import { useDispatch, useSelector } from "react-redux";
import { kakaoUrl } from "../redux/actions/url";
import { AccessAction } from "../redux/actions/AccessAction";
import { GameAction } from "../redux/actions/GameAction";
import { MainAction } from "../redux/actions/MainAction";

const Header = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;
const Comp = styled.div`
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
`;
const Comp1 = styled.div`
  flex: 1;
  margin: 10px 10px;
`;
const Comp2 = styled.div`
  flex: 2;
  margin: 10px 10px;
`;
const Comp3 = styled.div`
  flex: 3;
  margin: 10px 10px;
`;
const Comp4 = styled.div`
  flex: 1;
  margin: 10px 10px;
`;
function MainPage() {
  const [accessTokenState, setAccessTokenState] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AccessAction.accessTokenTest())
      .then((res) => {
        //access_token이 유효하지 않을때 false로 바꿔주고 유효하면 true가 들어간다.
        console.log(res);
        setAccessTokenState(res.data.tokenState);
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(AccessAction.accessTokenTest());
    dispatch(GameAction.getRanking());
  }, []);

  useEffect(() => {
    //access_token이 유효하지 않으면 우선 refresh 토큰이 유효한지 확인(확인하고 유효하면 access_token 재발급해주기)
    console.log("access_token 변화 확인 => true여도 변화로 인지");
    // if(!accessTokenState){
    if (!localStorage.getItem("userId")) window.location.href = `${kakaoUrl}`;
    if (!accessTokenState) {
      dispatch(AccessAction.refreshTokenTest()).then((res) => {
        //refresh 토큰이 유효할 때
        if (res.data.tokenState) {
          localStorage.setItem("access_token", res.data.newAccessToken);
          //refresh 토큰이 없거나 유효하지 않을 때
        } else {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = `${kakaoUrl}`;
        }
      });
      console.log("췤22");
    }
  }, [accessTokenState]);

  // 유저 정보 받아오기
  const userId = useSelector((state) => state.mainReducer.userId);
  useEffect(() => {
    dispatch(MainAction.getUserInfo(userId));
  }, []);

  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "100vh" }}>
      <Header>
        <MainHeader />
      </Header>
      <Comp>
        <Comp1>
          <MainComp1 />
        </Comp1>
        <Comp2>
          <MainComp2 />
        </Comp2>
      </Comp>

      <Comp>
        <Comp3>
          <MainComp3 />
        </Comp3>
        <Comp4>
          <MainComp4 />
        </Comp4>
      </Comp>
    </div>
  );
}
export default MainPage;
