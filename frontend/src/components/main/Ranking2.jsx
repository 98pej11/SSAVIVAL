import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import gameReducer from "../../redux/reducers/game";
import { GameAction } from "../../redux/actions/GameAction";

import { store } from "../../redux/store";

const Rank = styled.div`
  font-family: "neodgm";
  color: black;
  div {
    text-align: center;
  }
`;

// const columns = [
//   { field: "id", headerName: "", width: 30 },
//   { field: "user", headerName: "", width: 200 },
//   { field: "score", headerName: "", width: 200 },
//   { field: "fight", headerName: "", width: 150 },
// ];

// const rows = [
//   { id: 1, user: "은동이", score: 35 },
//   { id: 2, user: "리윤두", score: 42 },
//   { id: 3, user: "김행균", score: 45 },
//   { id: 4, user: "양용용", score: 16 },
//   { id: 5, user: "서영둔", score: 12 },
// ];

const Pag = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Ranking2(value) {
  const campus = value.value;
  console.log(campus);

  //redux에서 campus에 맞는 top 5 users 가져오기
  const users = useSelector((state) => state.mainReducer.users);
  const filterUsers = users.filter((user) => user.campus === campus);
  filterUsers.slice(0, 5);
  //indexing
  const topFive = filterUsers.map((user, index) => {
    const rank = index + 1;
    return { ...user, rank };
  });
  console.log(topFive);

  // 가상 대전 버튼 누르면 multiplay game으로 이동
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChallenge = () => {
    dispatch({ type: "SET_GAME_MODE", payload: { gameMode: "multi" } });
    navigate("/start"); // /game 경로로 이동
  };

  // 은정이가 짠 코드
  // // const round = useSelector((state) => state.gameReducer.round);
  // const round = store.getState().gameReducer.round;
  // const startMultiGame = (userId) => {
  //   const data = {
  //     userId: localStorage.getItem("userId"),
  //     round: round + 1,
  //   };
  //   dispatch(GameAction.getGameRecord(data));
  //   console.log(userId);
  //   setFlag(true);
  // };
  // const campusRanking = useSelector((state) => state.gameReducer.gameRanking);
  // const gameRecord = useSelector((state) => state.gameReducer.gameRecord);
  // // const gameRecord = store.getState().gameReducer.gameRecord;

  // const [flag, setFlag] = useState(false);
  // useEffect(() => {
  //   if (flag) {
  //     console.log("GAMERECORD");
  //     dispatch({ type: "SET_GAME_MODE", payload: { gameMode: "multi" } });
  //     navigate("/game"); // /game 경로로 이동
  //   }
  // }, [gameRecord]);

  return (
    <Rank>
      <Box sx={{ width: "100%", height: "100px" }}>
        <Table sx={{ textAlign: "center", margin: "5%" }}>
          <TableBody>
            {topFive.map((item) => (
              <TableRow key={item.rank}>
                {/* {campusRanking.map((item) => (
              <TableRow key={item.userId}> */}
                <TableCell
                  sx={{
                    width: "0%",
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "1rem",
                    fontFamily: "neodgm",
                  }}
                >
                  {item.rank}
                  {/* {item.userId} */}
                </TableCell>
                <TableCell
                  sx={{
                    width: "30%",
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "1rem",
                    fontFamily: "neodgm",
                  }}
                >
                  {item.nickname}
                </TableCell>
                <TableCell
                  sx={{
                    width: "30%",
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "1rem",
                    fontFamily: "neodgm",
                  }}
                >
                  {item.mileage} M
                </TableCell>
                <TableCell
                  sx={{
                    padding: 0.5,
                    textAlign: "center",
                    fontSize: "1rem",
                    fontFamily: "neodgm",
                  }}
                >
                  <Button
                    onClick={handleChallenge}
                    sx={{
                      fontFamily: "neodgm",
                      bgcolor: "#FFD211",
                      color: "black",
                      borderRadius: 10,
                      boxShadow: "none", // 그림자 없애기
                      "&:hover": {
                        bgcolor: "#FFD211",
                        color: "white",
                      },
                    }}
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon />}
                    // onClick={() => startMultiGame(item.userId)}
                  >
                    가상대전
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pag>
          <Stack spacing={1}>
            <Pagination size="small" />
          </Stack>
        </Pag>
      </Box>
    </Rank>
  );
}
