import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import EmojiPage from "./pages/EmojiPage";
import ElevatorPage from "./pages/ElevatorPage";
import TissuePage from "./pages/TissuePage";
import KakaoLogin from "./pages/KakaoLogin";
import TypoPage from "./pages/TypoPage";
import GitbashPage from "./pages/GitbashPage";
import LockerPage from "./pages/DifferencePage";
import AttendancePage from "./pages/AttendancePage";
import DifferencePage from "./pages/DifferencePage";
import VideoHandler from "./components/video/VideoHandler";
import RemindPage from "./pages/RemindPage";
import GamePage from "./pages/GamePage";

import IdCardPage from "./pages/IdCardPage";
import SeatPage from "./pages/SeatPage";
import PuzzlePage from "./pages/PuzzlePage";
const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/callback/kakao" element={<KakaoLogin />} />
          <Route path="/user/kakao/check" element={<KakaoLogin />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/emoji" element={<EmojiPage />} />
          <Route path="/elevator" element={<ElevatorPage />} />
          <Route path="/tissue" element={<TissuePage />} />
          <Route path="/typo" element={<TypoPage />} />
          <Route path="/git" element={<GitbashPage />} />
          <Route path="/video" element={<VideoHandler />} />
          {/* <Route path="/image" element={<ImagePlayer />} /> */}
          <Route path="/difference" element={<DifferencePage />} />
          <Route path="/locker" element={<LockerPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/remind" element={<RemindPage />} />
          <Route path="/seat" element={<SeatPage />} />
          <Route path="/puzzle" element={<PuzzlePage />} />
          <Route path="/id-card" element={<IdCardPage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
