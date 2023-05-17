/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { TextField, InputAdornment, IconButton } from "@mui/material";
// import { Search as SearchIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  return (
    <WholeBox>
      <InputBox>
        <Input type="text" placeholder="대전할 상대를 검색하세요" />
      </InputBox>
    </WholeBox>
  );
}
const activeBorderRadius = "16px 16px 0 0";
const inactiveBorderRadius = "16px 16px 16px 16px";

const WholeBox = styled.div`
  width: 400px;
  padding: 5px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid #bcb6ff;
  border-radius: ${(props) =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  width: 100%;
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  font-family: "neodgm";
  color: black;
  border: none;
  outline: none;
  color: black;
  font-size: 14px;
`;

const DeleteButton = styled.div`
  color: #bcb6ff;
  cursor: pointer;
`;

const DropDownBox = styled.ul`
  color: #6c509f;
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
  position: absolute; /* set a fixed position */
  top: 60px; /* adjust the top position as needed */
  width: 178px;
`;

const DropDownItem = styled.li`
  font-size: 15px;
  padding: 12px 7px;

  &.selected {
    background-color: lightgray;
  }
`;
