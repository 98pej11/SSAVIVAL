import React, { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TimerBomb from "./TimerBomb";

/* 게임 컴포넌트를 받는 상위 페이지 */

export default function GameComp(props) {
  const { children } = props;

  // 게임 컴포넌트의 개별 배경이 있는 경우
  const hasBg = Boolean(children.props.bg);

  // const [timeCheck, setTimeCheck] = useState(false);

  // const canvasRef = useRef(null);
  // const [recorder, setRecorder] = useState(null);
  // const [recording, setRecording] = useState(false);
  // const [recordedChunks, setRecordedChunks] = useState([]);

  // const startRecording = () => {
  //   setRecording(true);

  //   // 캔버스 요소 취득
  //   const canvas = canvasRef.current;
  //   console.log("Canva", canvas);

  //   // 녹화 스트림 생성
  //   const stream = canvas.captureStream(30); // 30fps

  //   // MediaRecorder 생성
  //   const mediaRecorder = new MediaRecorder(stream);

  //   // 녹화 중 데이터 수신 이벤트 처리
  //   mediaRecorder.ondataavailable = (e) => {
  //     console.log("ONDATAAVAIL");
  //     console.log("DATA", e);
  //     setRecordedChunks((prevChunks) => {
  //       const newChunks = [...prevChunks, e.data];
  //       return newChunks;
  //     });
  //   };

  //   // 녹화 중지 이벤트 처리
  //   mediaRecorder.onstop = () => {
  //     console.log("ONSTOP");
  //     setRecording(false);
  //     console.log(recordedChunks.length);

  //     // 녹화 결과 Blob 생성
  //     if (recordedChunks.length > 0) {
  //       const blob = new Blob(recordedChunks, { type: "video/webm" });

  //       // Blob URL 생성 및 비디오 요소에 적용
  //       const videoUrl = URL.createObjectURL(blob);
  //       const video = document.querySelector("#recorded-video");
  //       video.src = videoUrl;
  //       setRecordedChunks([]);
  //     }
  //   };

  //   // 녹화 시작
  //   mediaRecorder.start();
  //   setRecorder(mediaRecorder);
  // };

  // const stopRecording = () => {
  //   console.log("stop");
  //   recorder.stop();
  // };

  // useEffect(() => {
  //   console.log("INININ");
  //   startRecording();
  // }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        border: "none", // 테두리 없애기
        borderRadius: 10,
        boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
        backgroundColor: "rgba(0, 0, 0, 0.7)", // 배경색 투명하게 만들기
        padding: 3,
        maxWidth: "70%", // 최대 너비 값 설정
        width: "100%",
        height: "72vh",
        overflow: "hidden",

        // 게임 컴포넌트의 개별 배경이 있는 경우(ex_모니터)
        backgroundImage: hasBg ? `url(${children.props.bg})` : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* 타이머 시간을 초로 집어넣으면 됩니다. */}
      <TimerBomb timeLimit={10} />
      {/* <canvas ref={canvasRef} style={{ backgroundColor: "green" }} /> */}
      {children}
      {/* <button onClick={stopRecording}>녹화 종료</button>{" "} */}
    </Box>
  );
}
