import React from "react";
import styled from "styled-components";
import MainHeader from "../components/main/MainHeader";
import MainComp1 from "../components/main/MainComp1";
import MainComp2 from "../components/main/MainComp2";
import MainComp3 from "../components/main/MainComp3";
import MainComp4 from "../components/main/MainComp4";

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
export default function MainPage() {
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
