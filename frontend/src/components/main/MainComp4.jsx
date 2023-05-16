import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Comp4 = styled.div``;

const Title = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  font-family: "neodgm";
  font-size: 1rem;
  text-align: center;
`;
const Row = styled.div`
  display: flex;

  align-items: center;
  padding-top: 10px;
  padding-left: 10%;
  font-family: "gmarket";
`;
const Line = styled.div`
  font-size: 0.8rem;
  div {
    font-size: 0.8rem;
    margin-top: 4%;
  }
`;
export default function MainComp4(props) {
  return (
    <Comp4>
      {" "}
      <Box
        sx={{
          width: "100%",
          height: "45vh",
          backgroundColor: "#F2F2F2",
          border: "1px solid #BEBEBE",
          borderRadius: 12,
        }}
      >
        <Title>최근 Quest</Title>

        {/* <CircularProgress variant="determinate" {...props} /> */}
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              fontSize: "0.8rem",
              backgroundColor: "#3396F4",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            승리
          </Box>
          <Line>
            2023.04.02
            <div> pepe vs 공쥬짱 </div>
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              fontSize: "0.8rem",
              backgroundColor: "#EC2C54",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            패배
          </Box>
          <Line>
            2023.04.02
            <div> pepe vs 공쥬짱 </div>
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              fontSize: "0.8rem",
              backgroundColor: "#8898A9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            무승부
          </Box>
          <Line>
            2023.04.02
            <div> pepe vs 공쥬짱 </div>
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              fontSize: "0.8rem",
              backgroundColor: "#3396F4",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            승리
          </Box>
          <Line>
            2023.04.02
            <div> pepe vs 공쥬짱 </div>
          </Line>
        </Row>
      </Box>
    </Comp4>
  );
}
