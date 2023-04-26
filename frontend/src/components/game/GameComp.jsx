import * as React from "react";
import Box from "@mui/material/Box";
import TimerBomb from "./TimerBomb";

/* 게임 컴포넌트를 받는 상위 페이지 */

export default function GameComp(props) {
  const { children } = props;
  return (
    <Box
      sx={{
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        border: "none", // 테두리 없애기
        borderRadius: 10,
        boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
        backgroundColor: "rgba(0, 0, 0, 0.7)", // 배경색 투명하게 만들기
        padding: 5,
        maxWidth: "60%", // 최대 너비 값 설정
        width: "100%",
        height: "60vh",
        overflow: "hidden",
      }}
    >
      {/* 타이머 시간을 초로 집어넣으면 됩니다. */}
      <TimerBomb timeLimit={10} />
      {children}
    </Box>
  );
}
