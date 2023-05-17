import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/node/Box";
// game components
import Header from "../components/game/Header";
import GitbashGame from "../components/game/GitbashGame";
import TypoGame from "../components/game/TypoGame";
import IPGame from "../components/game/IPGame";
import TimerBomb from "../components/game/TimerBomb";
import TissueGame from "../components/game/TissueGame";
import RemindGame from "../components/game/RemindGame";
import EmojiComp from "../components/game/EmojiComp";
import LockerGame from "../components/game/LockerGame";
import AttendanceGame from "../components/game/AttendanceGame";
import DifferenceGame from "../components/game/DifferenceGame";
import Puzzle from "../components/game/PuzzleComp";
import Seating from "../components/game/SeatComp";
import IdCard from "../components/game/IdCardComp";
import Interval from "../components/game/Interval";

import classroom from "../assets/backgrounds/classroom.png";
import confetti from "canvas-confetti";
import "../index.css";

import html2canvas from "html2canvas";
import { GameAction } from "../redux/actions/GameAction";
// import ImagePlayer from "../components/game/ImagePlayer";

const container = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1%",
  height: "100vh",
};

// const gameContainer = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "flex-start",
//   flexWrap: "wrap",
//   border: "none", // 테두리 없애기
//   borderRadius: 10,
//   boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
//   backgroundColor: "rgba(255, 255, 255, 0.7)", // 배경색 투명하게 만들기
//   padding: 3,
//   maxWidth: "70%", // 최대 너비 값 설정
//   width: "100%",
//   height: "72vh",
//   overflow: "hidden",
// };

const gameContainer2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
  border: "none", // 테두리 없애기
  borderRadius: 10,
  padding: 3,
  maxWidth: "40%", // 최대 너비 값 설정
  width: "100%",
  overflow: "hidden",
  marginRight: 10, //
};

const Comp = {
  display: "flex",
  justifyContent: "center",
  gap: 10,
};

export default function GamePage() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  // 갈아끼울 게임 컴포넌트 리스트
  const gameComps = [
    <GitbashGame key="GitbashGame" />,
    <LockerGame key="LockerGame" />,
    <TypoGame key="TypoGame" />,
    <IPGame key="IPGame" />,
    <RemindGame key="RemindGame" />,
    <TissueGame key="TissueGame" />,
    <EmojiComp key="EmojiComp" />,
    <IdCard key="Idcard" />,
    <Seating key="Seating" />,
    <Puzzle key="Puzzle" />,
    <AttendanceGame key="AttendanceGame" />,
    <DifferenceGame key="DifferenceGame" />,
  ];

  // redux에서 게임 정보 가져오기
  const gameMode = useSelector((state) => state.gameReducer.gameMode);
  const round = useSelector((state) => state.gameReducer.round);
  const pageBg = useSelector((state) => state.gameReducer.pageBg);
  const containerBg = useSelector((state) => state.gameReducer.containerBg);
  const minigameActive = useSelector(
    (state) => state.gameReducer.minigameActive
  );
  const minigameClear = useSelector((state) => state.gameReducer.minigameClear);
  const gameTitleData = useSelector((state) => state.gameReducer.gameTitleData);
  const interval = useSelector((state) => state.gameReducer.interval);
  console.log("interval", interval);

  // 게임 페이지 마운트되면 "SET_MINIGAME_START" dispatch 보내기
  useEffect(() => {
    dispatch({
      type: "SET_MINIGAME_START",
    });
  }, [dispatch]);

  // 렌더링 후 minigameActive 값이 false가 되면 3초만큼 기다린 후 setIndex를 바꾼 뒤 "SET_MINIGAME_START" dispatch 보내기
  useEffect(() => {
    let timeoutId = null;

    if (!minigameActive && round < gameComps.length) {
      timeoutId = setTimeout(() => {
        dispatch({ type: "SET_MINIGAME_START" });
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, gameTitleData, round, minigameActive]);

  useEffect(() => {
    console.log("INPUTSSSSSS", inputs);
    console.log("blobArray 길이 3", blobArray.length);
    // saveBlobs(blobArray); // inputs 상태 값이 변경될 때마다 호출됩니다.
  }, [inputs]);

  // const [formDataArray, setFormDataArray] = useState([]);
  // const [flag, setFlag] = useState(false);

  // useEffect(() => {
  //   if (gameMode === "single") {
  //     let count = 0;
  //     let interval = setInterval(() => {
  //       onCapture();
  //       count++;
  //       //20장 캡쳐완료 시
  //       if (count % 20 === 0) {
  //         clearInterval(interval);
  //         setTimeout(() => {}, 3000); //3초 대기
  //       }
  //     }, 500);
  //   }
  // }, [index]);

  // useEffect(() => {
  //   if (flag) {
  //     dispatch(GameAction.gameDone(formDataArray));
  //     setFlag(false);
  //   }
  // }, [flag]);

  const canvasRef = useRef(null);

  // redux : timeLimit(게임 제한시간)이랑 bgPath(게임 배경) 구독
  // const timeLimit = useSelector((state) => state.gameReducer.timeLimit);
  const bgPath = useSelector((state) => state.gameReducer.bgPath);

  let blobs = [];
  const [blobArray, setBlobArray] = useState([]);

  // useEffect(() => {
  //   saveBlobs(blobArray);
  // }, [flag]);

  const onCapture = () => {
    console.log("onCapture");
    html2canvas(document.getElementById("gameContainer")).then((canvas) => {
      // onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
      canvas.toBlob((blob) => {
        // console.log(blob);
        blobs.push(blob);
        // setBlobArray((prevBlobArray) => [...prevBlobArray, blob]);
        //게임 끝나는 조건 추가해야함
        if (blobArray.length === 20) {
          //점수, 시간, 아이디 저장
          setInputs({
            miniGameDetailId: round + 1,
            clearTime: "",
            score: 0,
            gameId: 0, //게임 시작 api에서 받아서 가져올 부분
          });
          setBlobArray(blobs);
        }
      }, "image/png");
    });
  };

  const saveBlobs = (blobs) => {
    console.log("save blobs");
    const formData = new FormData();
    console.log(blobs.length);

    for (let i = 0; i < blobs.length; i++) {
      formData.append("gameImages", blobs[i], `image${i}.png`);
    }

    //inputs를 blob형태로 변경
    const json = JSON.stringify(round);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("miniGame", blob);
    let blobArray = [];

    const onCapture = () => {
      console.log("onCapture");
      html2canvas(document.getElementById("gameContainer")).then((canvas) => {
        // onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
        canvas.toBlob((blob) => {
          console.log(blob);
          blobArray.push(blob);
          console.log("blobArray 길이 1", blobArray.length);
          //게임 끝나는 조건 추가해야함
          if (blobArray.length === 20) {
            //점수, 시간, 아이디 저장
            console.log("blobArray 길이 2", blobArray.length);
            setInputs({
              miniGameDetailId: round + 1,
              clearTime: "",
              score: 0,
              gameId: 0, //게임 시작 api에서 받아서 가져올 부분
            });
            saveBlobs(blobArray);
          }
        }, "image/png");
      });
    };

    const saveBlobs = (blobs) => {
      console.log("save blobs");
      const formData = new FormData();
      console.log(blobs.length);
      for (let i = 0; i < blobs.length; i++) {
        formData.append("gameImages", blobs[i], `image${i}.png`);
      }

      //inputs를 blob형태로 변경
      const json = JSON.stringify(inputs);
      const blob = new Blob([json], { type: "application/json" });
      formData.append("miniGame", blob);

      dispatch(GameAction.gameDone(formData));
    };
    dispatch(GameAction.gameDone(formData));
  };

  // 정답을 맞추면 꽃가루 효과
  function firework() {
    var duration = 15 * 100;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 25, spread: 360, ticks: 100, zIndex: 0 }; //  startVelocity: 범위, spread: 방향, ticks: 갯수

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  }

  useEffect(() => {
    if (minigameClear) {
      firework();
    }
  }, [minigameClear]);

  return (
    <Box
      style={{
        backgroundImage: interval ? `url(${classroom})` : `url(${pageBg})`,
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
        height: "auto",
      }}
    >
      {/* {interval ? <canvas position="absolute" ref={confettiRef} /> : ""} */}
      <Header />
      <Box sx={container}>
        {gameMode === "single" ? (
          <Box
            sx={{
              ...gameContainer2,
              boxShadow:
                pageBg === "class_desk" || "laptop"
                  ? "none"
                  : "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
              backgroundColor:
                pageBg === "class_desk" || "laptop"
                  ? "none"
                  : "rgba(255, 255, 255, 0.7)", // 배경색 투명하게 만들기

              height: interval ? "80vh" : "80vh", //원래 값 72vh인데 80으로 수정
              backgroundImage: interval ? "" : `url(${containerBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {interval ? (
              <Interval />
            ) : (
              <Box>
                <TimerBomb />
                <Box ref={canvasRef} id="gameContainer">
                  {gameComps[round - 1]}
                </Box>
              </Box>
            )}
          </Box>
        ) : (
          <Box sx={Comp}>
            <Box sx={gameContainer2}>
              <TimerBomb />
              {gameComps[round - 1]}
            </Box>
            <Box
              sx={{
                ...gameContainer2,
                backgroundImage: interval ? "" : `url(${containerBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {interval ? (
                <Interval />
              ) : (
                <Box>
                  <TimerBomb />
                  <Box ref={canvasRef} id="gameContainer">
                    {gameComps[round - 1]}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
      {/* {gameMode === "single" ? (
        <Box
          sx={{
            ...gameContainer,
            backgroundColor: "rgba(255, 255, 255, 0.7)", // 배경색 투명하게 만들기
            backgroundImage: `url(${gameContainerBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <TimerBomb timeLimit={10} />
          <Box ref={canvasRef} id="gameContainer">
            {gameComps[index]}
          </Box>
        </Box>
      ) : (
        <Box sx={Comp}>
          <Box sx={gameContainer2}>
            <ImagePlayer></ImagePlayer>
          </Box>
          <Box
            sx={{
              ...gameContainer2,
              backgroundImage: `url(${gameContainerBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <TimerBomb timeLimit={10} />
            {gameComps[index]}
          </Box>
        </Box>
      )} */}
    </Box>
    // </Box>
  );
}
