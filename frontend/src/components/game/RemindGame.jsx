import React from "react";
import styled from "styled-components";

const Game = styled.div`
  position: relative;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Input = styled.div`
  margin: 10px;

  input {
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: 5px solid #fff;
    border-radius: 5px;
    margin: 0px 5px;
    font-size: 40px;
    text-align: center;
    color: #fff;
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
  position: relative;
  width: 150px;
  height: 60px;
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

  .icon {
    position: absolute;
    color: #331a00;
    top: 1px;
    padding: 0 30%;
  }

  .erase {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 0;
    background-color: red;
    color: white;
    text-align: center;
    display: inline-block;
    opacity: 0;
    transition: 0.2s linear;

    &:hover {
      width: 20px;
      opacity: 1;
    }
  }
`;

export default function RemindGame() {
  return (
    <div>
      <Blackboard>
        <PaperList className="paper">
          <PaperItem>Eat</PaperItem>
        </PaperList>
        <PaperList className="paper">
          <PaperItem>Eat</PaperItem>
        </PaperList>
        <PaperList className="paper">
          <PaperItem>Eat</PaperItem>
        </PaperList>
      </Blackboard>
      <Game>
        <Input>
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </Input>
        <Check>Check</Check>
      </Game>
    </div>
  );
}
