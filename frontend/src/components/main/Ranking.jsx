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

export default function Ranking() {
  const campus = useSelector((state) => state.mainReducer.campus);
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

  // 캠퍼스별 이름 붙여주기
  function getCampusName(campus) {
    switch (campus) {
      case 0:
        return "서울";
      case 1:
        return "대전";
      case 2:
        return "광주";
      case 3:
        return "구미";
      case 4:
        return "부울경";
      default:
        return "00";
    }
  }

  const [campusName, setCampusName] = useState("00");
  useEffect(() => {
    setCampusName(getCampusName(campus));
  }, [campus]);

  // const campusRanking = useSelector((state) => state.gameReducer.gameRanking);

  return (
    <Rank>
      <Stack>
        <Box>{campusName} 캠퍼스 Top5</Box>
      </Stack>
      <Box sx={{ width: "100%", height: "100px" }}>
        <Table sx={{ textAlign: "center", margin: "5%" }}>
          <TableBody>
            {topFive.map((item) => (
              <TableRow key={item.rank}>
                <TableCell
                  sx={{
                    width: "0%",
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "0.9rem",
                    fontFamily: "gmarket",
                  }}
                >
                  {item.rank}
                </TableCell>
                <TableCell
                  sx={{
                    width: "30%",
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "0.9rem",
                    fontFamily: "gmarket",
                  }}
                >
                  {item.nickname}
                </TableCell>
                <TableCell
                  sx={{
                    width: "30%",
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "0.9rem",
                    fontFamily: "gmarket",
                  }}
                >
                  {item.mileage} M
                </TableCell>
              </TableRow>
            ))}
            {/* {campusRanking &&
              campusRanking.map((item, index) => (
                <TableRow key={item.userId}>
                  <TableCell
                    sx={{
                      width: "0%",
                      padding: 0.7,
                      textAlign: "center",
                      fontSize: "1rem",
                      fontFamily: "neodgm",
                    }}
                  >
                    {index + 1}
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
                </TableRow>
              ))} */}
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
