import React from "react";
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

const Rank = styled.div`
  font-family: "neodgm";
  color: black;
  div {
    text-align: center;
  }
  margin-bottom: 5%;
`;

const Title = styled.div`
  font-size: 1.2rem;
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
  display: flex; /* 가로 정렬을 위해 flexbox 설정 */
  justify-content: center; /* 가운데 정렬 */
  // height:
`;

export default function Ranking() {
  return (
    <Rank>
      <Title>금주의 랭킹</Title>
      <Box sx={{ width: "350px", height: "100px" }}>
        <Table sx={{ textAlign: "center", margin: "5%" }}>
          <TableBody>
            {rows.map((item) => (
              <TableRow key={item.id}>
                <TableCell
                  sx={{
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontFamily: "neodgm",
                  }}
                >
                  {item.id}
                </TableCell>
                <TableCell
                  sx={{
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontFamily: "neodgm",
                  }}
                >
                  {item.user}
                </TableCell>
                <TableCell
                  sx={{
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontFamily: "neodgm",
                  }}
                >
                  {item.score} M
                </TableCell>
                <TableCell
                  sx={{
                    padding: 0.7,
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontFamily: "neodgm",
                  }}
                >
                  <Button
                    sx={{
                      fontFamily: "neodgm",
                      bgcolor: "#FFD211",
                      color: "black",
                      borderRadius: 10,
                      boxShadow: "none", // 그림자 없애기
                      "&:hover": {
                        bgcolor: "#3396F4",
                        color: "white",
                      },
                    }}
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon />}
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
            <Pagination />
          </Stack>
        </Pag>
      </Box>
    </Rank>
  );
}
