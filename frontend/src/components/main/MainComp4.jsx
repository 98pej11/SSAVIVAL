import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Comp4 = styled.div`
  font-family: "neodgm";
`;

const Title = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  font-family: "neodgm";
  font-size: 1.3rem;
  text-align: center;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const Line = styled.div`
  font-size: 1.1rem;
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
              width: "70px",
              height: "70px",
              backgroundColor: "#3396F4",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            승리
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "70px",
              height: "70px",
              backgroundColor: "#EC2C54",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontSize: "1rem",
            }}
          >
            패배
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "70px",
              height: "70px",
              backgroundColor: "#8898A9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            무승부
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "70px",
              height: "70px",
              backgroundColor: "#3396F4",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            패배
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
      </Box>
    </Comp4>
  );
}
