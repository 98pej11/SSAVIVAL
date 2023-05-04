import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import pepe from "../../assets/pepe.jpg";

function MainHeader() {
  return (
    <AppBar
      elevation={0}
      position="relative"
      // variant="outlined"
      style={{
        backgroundColor: "transparent",
        height: "50px",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "black",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={pepe}
              style={{
                borderRadius: "50%",
                marginRight: "10px",
                width: "3%",
              }}
            />
            <div style={{ color: "black" }}>김페페님, 환영합니다!</div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainHeader;
