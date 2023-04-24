import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmojiPage from "./pages/EmojiPage";
import TissuePage from "./pages/TissuePage";
import GamePage from "./pages/GamePage";

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
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
