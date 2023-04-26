import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmojiPage from "./pages/EmojiPage";
import TissuePage from "./pages/TissuePage";
import GamePage from "./pages/GamePage";
import LockerPage from "./pages/LockerPage";

const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<EmojiPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/tissue" element={<TissuePage />} />
          <Route path="/locker" element={<LockerPage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
