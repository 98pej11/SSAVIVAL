import React, { useState } from "react";
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
import Emoji from "./EmojiComp";
import styled from "styled-components";

const emojis = [happyloopy, nepp, pepesad, pepe, sadshin, thanks, yes, zzang];

const MattermostEmoji = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = (emojiName) => {
    setSelectedEmoji(emojiName);
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
          {emojis.map((emoji) => (
            <span
              key={emoji}
              style={{ cursor: "pointer", padding: "4px" }}
              onClick={() => handleEmojiClick(emoji)}
            >
              <img src={emoji} alt={emoji} width={40} height={40} />
            </span>
          ))}
        </div>
      </Popover>
      {selectedEmoji && (
        <img src={selectedEmoji} alt={selectedEmoji} width={40} height={40} />
      )}
    </Emo>
  );
};

const Emo = styled.div`
  display: flex;
  align-items: center;
`;
export default MattermostEmoji;
