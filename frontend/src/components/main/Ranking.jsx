import React, { useEffect } from "react";
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

const columns = [
  { field: "id", headerName: "", width: 30 },
  { field: "user", headerName: "", width: 200 },
  { field: "score", headerName: "", width: 200 },
  { field: "fight", headerName: "", width: 150 },
];

const rows = [
  { id: 1, user: "은동이", score: 35 },
  { id: 2, user: "리윤두", score: 42 },
  { id: 3, user: "김행균", score: 45 },
  { id: 4, user: "양용용", score: 16 },
  { id: 5, user: "서영둔", score: 12 },
];

const Pag = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Ranking() {
  const campusRanking = useSelector((state) => state.gameReducer.gameRanking);

  return (
    <Rank>
      <Box sx={{ width: "100%", height: "100px" }}>
        <Table sx={{ textAlign: "center", margin: "5%" }}>
          <TableBody>
            {campusRanking &&
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
