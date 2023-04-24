import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      {count % 2 === 0 && (
        <img
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
    </div>
  );
}
