import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import PushPinIcon from "@mui/icons-material/PushPin";

const Game = styled.div`
  position: relative;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
`;

const Input = styled.div`
  margin: 10px;

  input {
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: 5px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin: 0px 5px;
    font-size: 40px;
    text-align: center;
    color: black;
    font-family: "neodgm";
    appearance: textfield;
  }

  .m1 {
    background-color: red;
  }
  .m2 {
    background-color: green;
  }
  .m3 {
    background-color: orange;
  }
`;

const Check = styled.div`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.32) inset;
  border-radius: 3px;
  font-size: 22px;
  font-family: "neodgm";
  cursor: pointer;

  &:active {
    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.32) inset;
    transform: translateY(2px);
  }
`;

const Blackboard = styled.div`
  position: relative;
  margin: 1% auto;
  width: 600px;
  height: 400px;
  overflow: hidden;
  background-image: url("https://res.cloudinary.com/dovbrtmkv/image/upload/v1494873393/cork_mlmb4o.jpg");
  border: 20px solid #805500;
`;

const PaperList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PaperItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  height: 120px;
  list-style-type: none;
  background: #ffff66;
  overflow-wrap: break-word;
  overflow: hidden;
  hyphens: auto;
  margin: 10px;
  padding: 30px 20px;
  float: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
  border-radius: 60px 60px 120px 120px / 4px 4px 8px 8px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: neodgm;

  &:hover {
    width: 20px;
    opacity: 1;
  }

  .tack-icon {
    position: absolute;
    top: 10px;
    left: 60px;
    color: black;
  }
`;

export default function RemindGame() {
  const [inputs, setInputs] = useState("");
  // const answer = useSelector((state) => state.gameReducer.remindAnswer);
  const answer = "햄버거";
  const wordList = useSelector((state) => state.gameReducer.remindWordList);

  const [currentWords, setCurrentWords] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    setCurrentWords([]); // Clear the currentWords state initially
    const intervalId = setInterval(() => {
      if (currentIndex < wordList.length) {
        setCurrentWords((currentWords) => [
          ...currentWords,
          wordList[currentIndex],
        ]);
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [wordList, setCurrentWords]);

  const onCheckButtonClick = (event) => {
    const updatedInputs = Array.from(
      event.target.parentNode.querySelectorAll("input")
    )
      .map((input) => input.value)
      .join("");
    setInputs(updatedInputs);

    if (updatedInputs === "") {
      alert("단어를 입력해주세요");
    } else if (answer === updatedInputs) {
      // Inputs match the answer
      alert("정답이에용");
    } else {
      // Inputs do not match the answer
      console.log("오답", updatedInputs, answer);
      alert("틀려써요");
    }
  };

  const renderWordList = () => {
    return currentWords.map((word, index) => (
      <PaperItem key={`${index}_${word}`}>
        <PushPinIcon className="tack-icon" />
        {word}
      </PaperItem>
    ));
  };
  return (
    <div>
      <Blackboard>
        <PaperList className="paper">{renderWordList()}</PaperList>;
      </Blackboard>
      <Game>
        <Input>
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </Input>
        <Check onClick={onCheckButtonClick}>Check</Check>
      </Game>
    </div>
  );
}
