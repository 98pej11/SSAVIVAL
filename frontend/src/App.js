import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ElevatorPage from "./pages/ElevatorPage";
import TissuePage from "./pages/TissuePage";
import MainPage from "./pages/MainPage";
import LockerPage from "./pages/LockerPage";
import AttendancePage from "./pages/AttendancePage";
import EmojiPage from "./pages/EmojiPage";
import KakaoLogin from "./pages/KakaoLogin";

const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/emoji" element={<EmojiPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/callback/kakao" element={<KakaoLogin />} />
          <Route path="/tissue" element={<TissuePage />} />
          <Route path="/locker" element={<LockerPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/elevator" element={<ElevatorPage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
