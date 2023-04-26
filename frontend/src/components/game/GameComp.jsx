import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TimerBar from "./TimerBar";
export default function GameComp(props) {
  const { children } = props;
  return (
    <div
      style={{
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "60%", // 최대 너비 값 설정
        width: "100%",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      <TimerBar initialValue={80} decreaseValue={1} decreaseInterval={1000} />
      {children}
      {/* <Paper sx={{ marginBottom: 10}}></Paper> */}
    </div>
  );
}
