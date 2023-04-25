import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  width: 95%;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
`;

const Bar = styled.div`
  height: 95%;
  background-color: #7f7;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  transition: width 0.5s ease-in-out;
  width: ${(props) => Math.max(props.value, 0)}%;
`;

const TimerBar = ({ initialValue, decreaseValue, decreaseInterval }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue - decreaseValue);
    }, decreaseInterval);

    return () => clearInterval(interval);
  }, [decreaseInterval, decreaseValue]);

  return (
    <BarContainer>
      <Bar value={value} />
    </BarContainer>
  );
};

export default TimerBar;
