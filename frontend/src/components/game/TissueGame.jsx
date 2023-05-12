import { useState, useEffect } from "react";
import styled from "styled-components";
import countbox from "../../assets/countbox.png";
import { useDispatch } from "react-redux";

const imageStyle = {
  // position: "relative",
  // left: "36%",
  // width: "100%",
  height: "auto",
  // maxWidth: "600px",
};

const image1Style = {
  // top: "310px",
  width: "300px",
  position: "relative",
  zIndex: 99,
  // alignSelf: "center",
};

const image2Style = {
  zIndex: 100,
  // top: "150px",
  // left: "36% ",
  width: "300px",
  position: "relative",
  // alignSelf: "center",
};

const image3Style = {
  position: "relative",
  // top: "300px",
  width: "300px",
  zIndex: 99,
};

const CountComp = styled.div`
  font-family: "neodgm";
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;
const CountText = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #fecf28;
  text-shadow: 0 0 3px black;
`;
export default function TissueGame() {
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [initialImageY, setInitialImageY] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);
  const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
  ];

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const gameData = {
    title: "~ 휴지를 최대한 많이 뽑아보자 ~",
    timeLimit: 10,
    bgPath: "",
  };
  useEffect(() => {
    dispatch({ type: "SET_GAME", payload: gameData });
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setInitialMouseY(e.clientY);
    setInitialImageY(e.target.offsetTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dy = e.clientY - initialMouseY;
    e.target.style.top = `${initialImageY + dy}px`;
    const dyy = e.movementY;
    const newImagePosition = imagePosition - dyy / 20;
    if (newImagePosition >= 0 && newImagePosition < images.length) {
      setImagePosition(newImagePosition);
    }
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    setInitialImageY(e.target.offsetTop);

    if (imagePosition > images.length - 1) {
      setCount(count + 1);
      setImagePosition(0);
    }
    console.log(count);
    console.log(imagePosition);
  };

  const handleMouseOut = (e) => {
    setIsDragging(false);
    setInitialImageY(e.target.offsetTop);
    if (imagePosition > images.length - 1) {
      setCount(count + 1);
      setImagePosition(0);
    }
    console.log(count);
    console.log(imagePosition);
  };

  return (
    <div>
      <CountComp>
        <img src={countbox} alt=" " style={{ width: "150px" }}></img>
        <CountText>{count}</CountText>
      </CountComp>
      {count % 2 === 0 && (
        <img
          style={image2Style}
          src={images[Math.floor(imagePosition)]}
          // srt="1.png"
          // src={require(images[Math.floor(imagePosition)]).default}
          alt="example"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseOut}
          draggable="false"
        />
      )}
      {count % 2 != 0 && (
        <img
          style={image2Style}
          src={images[Math.floor(imagePosition)]}
          // srt="1.png"
          // src={require(images[Math.floor(imagePosition)]).default}
          alt="example"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseOut}
          draggable="false"
        />
      )}

      <div
        style={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }
        }
      >
        <img
          src="고양이_휴지곽_뒷면.png"
          alt=" "
          style={{ ...imageStyle, ...image1Style }}
        ></img>
        {/* <TissueGame style={{ ...imageStyle, ...image2Style }}></TissueGame> */}
        <img
          src="고양이_휴지곽_앞면.png"
          alt=" "
          style={{ ...imageStyle, ...image3Style }}
        ></img>
      </div>
    </div>
  );
}
