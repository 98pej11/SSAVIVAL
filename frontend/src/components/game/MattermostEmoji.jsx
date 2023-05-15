import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Popover } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import happyloopy from "../../assets/happy_loopy.png";
import nepp from "../../assets/nepp.png";
import pepesad from "../../assets/pepe_sad.png";
import pepe from "../../assets/pepe.jpg";
import sadshin from "../../assets/sad_shin.png";
import thanks from "../../assets/thanks.png";
import yes from "../../assets/yes.png";
import zzang from "../../assets/zzang.png";
// import Emoji from "./EmojiComp";
import styled from "styled-components";

const emojis = [happyloopy, nepp, pepesad, pepe, sadshin, thanks, yes, zzang];

const MattermostEmoji = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState(null);
  const dispatch = useDispatch();

  // 미니게임 클리어 여부
  const minigameClear = useSelector((state) => state.gameReducer.minigameClear);

  // 미니게임 작동 여부
  const minigameActive = useSelector(
    (state) => state.gameReducer.minigameActive
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = (emojiIndex) => {
    console.log(emojiIndex);
    setSelectedEmojiIndex(emojiIndex);
    dispatch({ type: "SET_EMOJI_INDEX", payload: emojiIndex });

    if (emojiIndex === 3) {
      dispatch({ type: "SET_EMOJI_RESULT", payload: true });
      if (minigameActive) {
        dispatch({ type: "SET_MINIGAME_CLEAR" });
        console.log("게임결과: " + minigameClear);
      }
      alert("정답!");
    } else {
      dispatch({ type: "SET_EMOJI_RESULT", payload: false });
      alert("틀렸어요!");
    }
    handleClose();
  };
  const open = Boolean(anchorEl);
  return (
    <Emo>
      <IconButton onClick={handleClick}>
        <MoodIcon sx={{ fontSize: "30px" }} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{ width: "1000px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "8px",
          }}
        >
          {emojis.map((emoji, index) => (
            <span
              key={emoji}
              style={{ cursor: "pointer", padding: "4px" }}
              onClick={() => handleEmojiClick(index)}
            >
              <img src={emoji} alt={`emoji-${index}`} width={40} height={40} />
            </span>
          ))}
        </div>
      </Popover>
      {selectedEmojiIndex !== null && (
        <img
          src={emojis[selectedEmojiIndex]}
          alt={`emoji-${selectedEmojiIndex}`}
          width={40}
          height={40}
        />
      )}
    </Emo>
  );
};

const Emo = styled.div`
  display: flex;
  align-items: center;
`;

export default MattermostEmoji;
