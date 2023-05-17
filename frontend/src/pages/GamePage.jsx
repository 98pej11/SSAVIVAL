import React, { useRef, useEffect, useState } from "react";
import Header from "../components/game/Header";
import "../index.css";
import Box from "@mui/material/node/Box";
import GitbashGame from "../components/game/GitbashGame";
import TypoGame from "../components/game/TypoGame";
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import TimerBomb from "../components/game/TimerBomb";
import TissueGame from "../components/game/TissueGame";
import ElevatorGame from "../components/game/ElevatorGame";
import RemindGame from "../components/game/RemindGame";
import EmojiComp from "../components/game/EmojiComp";
import LockerGame from "../components/game/LockerGame";
import AttendanceGame from "../components/game/AttendanceGame";
import Puzzle from "../components/game/PuzzleComp";
import Seating from "../components/game/SeatComp";
import IdCard from "../components/game/IdCardComp";
import DifferenceGame from "../components/game/DifferenceGame";

import html2canvas from "html2canvas";
import { GameAction } from "../redux/actions/GameAction";
import { Score } from "@mui/icons-material";
// import ImagePlayer from "../components/game/ImagePlayer";

const container = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1%",
  height: "100vh",
};
const gameContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
  border: "none", // 테두리 없애기
  borderRadius: 10,
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 배경색 투명하게 만들기
  padding: 3,
  maxWidth: "70%", // 최대 너비 값 설정
  width: "100%",
  height: "72vh",
  overflow: "hidden",
};

const gameContainer2 = {
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  border: "none", // 테두리 없애기
  borderRadius: 10,
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 배경색 투명하게 만들기
  padding: 3,
  maxWidth: "40%", // 최대 너비 값 설정
  width: "100%",
  height: "72vh",
  overflow: "hidden",
  marginRight: 10, //
};

const Comp = {
  display: "flex",
  justifyContent: "center",
  gap: 10,
};

export default function GamePage() {
  const [inputs, setInputs] = useState({});
  const gameMode = useSelector((state) => state.gameReducer.gameMode);
  const pageBg = useSelector((state) => state.gameReducer.pageBg);
  const gameContainerBg = useSelector(
    (state) => state.gameReducer.gameContainerBg
  );
  const [finalData, setFinalData] = useState({
    gameId: "",
    totalScore: "",
    gameDate: "", //현재 시간
    userId: "",
  });

  const onClickFinal = () => {
    setFinalData({
      gameId: localStorage.getItem("gameId"),
      totalScore: totalScore,
      gameDate: Date.now(), //현재 시간
      userId: localStorage.getItem("userId"),
    });
  };

  useEffect(() => {
    console.log("setGameDone");
    dispatch(GameAction.setGameDone(finalData));
  }, [finalData]);

  const dispatch = useDispatch();
  const minigameActive = useSelector(
    (state) => state.gameReducer.minigameActive
  );
  const round = useSelector((state) => state.gameReducer.round);
  const gameTitleData = useSelector((state) => state.gameReducer.gameTitleData);
  useEffect(() => {
    dispatch({ type: "SET_MINIGAME_START" });
  }, [dispatch]);

  // 렌더링 후 minigameActive 값이 false가 되면 3초만큼 기다린 후 setIndex를 바꾼 뒤 SET MINIGAME START 실행
  useEffect(() => {
    let timeoutId = null;

    if (!minigameActive && round < gameTitleData.length) {
      timeoutId = setTimeout(() => {
        dispatch({ type: "SET_MINIGAME_START" });

        const data = {
          userId: localStorage.getItem("userId"),
          round: round + 1,
        };
        dispatch(GameAction.getGameRecord(data));
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, gameTitleData, round, minigameActive]);

  // const [formDataArray, setFormDataArray] = useState([]);
  const [flag, setFlag] = useState(false);
  const minigameClear = useSelector((state) => state.gameReducer.minigameClear);
  // console.log("MINIGAMECLEARRRRR", minigameClear);

  useEffect(() => {
    if (round != 0) {
      if (gameMode === "single") {
        let count = 0;
        let interval = setInterval(() => {
          console.log("minigame clear", minigameClear);
          if (minigameActive) {
            console.log("check 134");
            onCapture(count);
            count++;
            // console.log("COUNT", count);
          }
          //20장 캡쳐완료 시
          // console.log("MINIGame Active", minigameActive);
          if (!minigameActive) {
            console.log("Check  145");
            onCapture(count);
            clearInterval(interval);
            setTimeout(() => {}, 3000); //3초 대기
            // return;
          }
        }, 500);
        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [round, minigameClear, minigameActive]);

  const canvasRef = useRef(null);

  // 갈아끼울 게임 컴포넌트 리스트
  const gameComps = [
    <LockerGame key="LockerGame" />,
    <AttendanceGame key="AttendanceGame" />,
    <GitbashGame key="GitbashGame" />,
    <TypoGame key="TypoGame" />,
    <RemindGame key="RemindGame" />,
    <TissueGame key="TissueGame" />,
    <EmojiComp key="EmojiComp" />,
    <Puzzle key="Puzzle" />,
    <Seating key="Seating" />,
    <IdCard key="Idcard" />,
    <DifferenceGame key="DifferenceGame" />,
  ];

  // redux : timeLimit(게임 제한시간)이랑 bgPath(게임 배경) 구독
  // const timeLimit = useSelector((state) => state.gameReducer.timeLimit);
  const bgPath = useSelector((state) => state.gameReducer.bgPath);
  const score = useSelector((state) => state.gameReducer.totalScore);

  const [blobArray, setBlobArray] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    setTotalScore(totalScore + score);
  }, [score]);

  useEffect(() => {
    console.log("TotalScore ", totalScore);
  }, [totalScore]);

  const [blobs, setBlobs] = useState([]);

  const onCapture = (count) => {
    html2canvas(document.getElementById("gameContainer")).then((canvas) => {
      // onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
      canvas.toBlob((blob) => {
        if (!minigameClear) {
          setBlobs((prevBlobs) => [...prevBlobs, blob]);
          console.log("onCapture", blob.length, blob);
        }

        // console.log(blobs)
        // console.log("LeNNNNNNNNNNNNNNNN", count);
        //이미지 20장 찍거나 게임 클리어했을 경우
        if (minigameClear || !minigameActive) {
          console.log("EEEEEEEEEEEEEEEND", blobs.length);
          //점수, 시간, 아이디 저장
          setBlobArray(blobs);
          setInputs({
            miniGameDetailId: round,
            clearTime: "",
            score: score,
            gameId: localStorage.getItem("gameId"), //게임 시작 api에서 받아서 가져올 부분
            createdTime: new Date()
              .toISOString()
              .slice(0, 19)
              .replace("T", " "),
          });
          setFlag(true);
        }
      }, "image/png");
    });
  };

  const [flag2, setFlag2] = useState(0);

  useEffect(() => {
    console.log("FLAG out", flag);
    if (flag) {
      console.log("FLAG IN", flag);
      console.log("SAVE BLOB ARRAY", blobArray);

      saveBlobs();
      setFlag2(1 - flag2);
    }
  }, [flag]);
  useEffect(() => {
    if (flag) {
      setFlag(false);
    }
  }, [flag2]);
  const saveBlobs = () => {
    console.log("save blobs");
    const formData = new FormData();
    console.log(blobArray);
    for (let i = 0; i < blobArray.length; i++) {
      formData.append("gameImages", blobArray[i], `image${i}.png`);
    }

    //inputs를 blob형태로 변경
    const json = JSON.stringify(inputs);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("miniGame", blob);

    dispatch(GameAction.gameDone(formData));
    setInputs({});
    setBlobArray([]);
    setBlobs([]);
    setFlag(false); // Set flag to false here to prevent multiple executions
  };

  const images = useSelector((state) => state.gameReducer.gameRecord);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("IMAGES", images);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <Box
      style={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
        height: "auto",
      }}
    >
      <Header />
      <Box sx={container}>
        {gameMode === "single" ? (
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
            <TimerBomb />
            <Box ref={canvasRef} id="gameContainer">
              {gameComps[round - 1]}
            </Box>
          </Box>
        ) : (
          <Box sx={Comp}>
            <Box sx={gameContainer2}>
              {images && (
                <img src={images[currentIndex].imageUrl} alt="Slider" />
              )}
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
              <TimerBomb />
              {gameComps[round - 1]}
            </Box>
          </Box>
        )}
      </Box>
      {/* 게임 정답 시 계산 */}
      <button onClick={onClickFinal}>종료</button>
    </Box>
  );
}
