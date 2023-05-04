import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CampusChart from "./CampusChart";
import Ranking from "./Ranking";

const Comp3 = styled.div`
  // font-family: "neodgm";
  width: "100%";
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px;
`;

export default function MainComp3() {
  return (
    <Comp3>
      <Box
        sx={{
          width: "100%",
          height: "45vh",
          backgroundColor: "rgba(255,255,255,0.4)",
          border: "1px solid #BEBEBE",
          borderRadius: 12,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ChartWrapper>
          <div style={{ width: "50%", height: "80%" }}>
            <CampusChart />
          </div>
          <div style={{ width: "50%", height: "80%" }}>
            <Ranking />
          </div>
        </ChartWrapper>
      </Box>
    </Comp3>
  );
}
