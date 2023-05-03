import React, { useEffect } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import MyChart from "./MyChart";

const Comp2 = styled.div`
  font-family: "neodgm";
`;
const Line = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  // padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 1.4rem;
`;
const Line2 = styled.div`
  padding-top: 30px;
  // padding-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  color: white;
  font-size: 1.4rem;
`;
const Chips = styled.div`
  padding: 10px 2px;

  display: flex;
  align-items: center;
  gap: 30px;
`;
const Title = styled.div`
  margin-left: 10px;
`;
const Content = styled.div`
  margin-right: 30px;
  color: yellow;
`;

const options = {
  title: {
    display: true,
    text: "Doughnut Chart",
  },
  legend: {
    display: true,
    position: "top",
  },
  maintainAspectRatio: false,
};

export default function MainComp2() {
  return (
    <Comp2>
      {" "}
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundColor: "#3396F4",
          borderRadius: 12,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 2, marginTop: 30 }}>
          <Line>
            <Title>내 티어</Title>
            <Content>Silver</Content>
          </Line>
          <Line>
            <Title>마일리지</Title>
            <Content>3165 EXP</Content>
          </Line>
        </div>
        <div
          style={{
            borderRight: "1px solid white",
            marginTop: 20,
            marginBottom: 20,
          }}
        ></div>
        <div style={{ flex: 3, margin: 10 }}>
          <Line2>
            <Title>나의 전적</Title>
          </Line2>
          <Line2>
            <div style={{ width: "50%", height: "300px" }}>
              <MyChart />
            </div>
            <div>
              <Chips>
                <Chip
                  label="대전횟수"
                  color="success"
                  variant="outlined"
                  sx={{
                    width: 80,
                    height: 30,
                    bgcolor: "white",
                    color: "#CEBC4D",
                    border: "1px solid #CEBC4D",
                  }}
                />
                <span>244전</span>
              </Chips>
              <Chips>
                <Chip
                  label="승리"
                  sx={{
                    width: 80,
                    height: 30,
                    bgcolor: "white",
                    color: "#3396F4",
                    border: "1px solid #3396F4",
                    // borderColor: "",
                  }}
                />
                <span>244전</span>
              </Chips>
              <Chips>
                <Chip
                  label="무승부"
                  sx={{
                    width: 80,
                    height: 30,
                    bgcolor: "white",
                    color: "#6B6E71",
                    border: "1px solid #6B6E71",
                  }}
                />
                <span>244전</span>
              </Chips>
              <Chips>
                <Chip
                  label="패배"
                  sx={{
                    width: 80,
                    height: 30,
                    bgcolor: "white",
                    color: "#EC2C54",
                    border: "1px solid #EC2C54",
                  }}
                />
                <span>244전</span>
              </Chips>
            </div>
          </Line2>
        </div>
      </Box>
    </Comp2>
  );
}
