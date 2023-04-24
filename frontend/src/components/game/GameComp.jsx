import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function GameComp() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 10,
          width: 1200,
          height: 600,
        },
      }}
    >
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        게임 컴포넌트
      </Paper>
    </Box>
  );
}
