import * as React from "react";
import TimerBomb from "./TimerBomb";
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
      {/* 타이머 시간을 초로 집어넣으면 됩니다. */}
      <TimerBomb timeLimit={10} />
      {children}
    </div>
  );
}
