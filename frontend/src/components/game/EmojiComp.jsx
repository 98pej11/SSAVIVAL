import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pepe from "../../assets/pepe.jpg";
import header from "../../assets/header.png";
import online from "../../assets/online.png";
import mmtop from "../../assets/mmtop.png";
import MattermostEmoji from "./MattermostEmoji";
import { useDispatch } from "react-redux";

export default function Emoji() {
  const dispatch = useDispatch();
  const gameData = {
    title: "제한 시간 내 주어진 명령어를 모두 입력하라",
    timeLimit: 10,
    bgPath: "",
  };
  useEffect(() => {
    dispatch({ type: "SET_GAME", payload: gameData });
  }, []);
  return (
    <div>
      <Box
        sx={{
          margin: "0 auto",
          width: "80%",
          height: "100%",
          border: 1,
          borderColor: "gray",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <img
          src={header}
          alt="Header"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "auto",
            }}
          >
            <Box
              sx={{
                height: "50px",
                padding: 1,
                position: "relative",
              }}
            >
              <div>
                <strong style={{ marginLeft: 15 }}>페페 교육프로 v </strong>
                <br />
                <img
                  src={online}
                  alt=" "
                  style={{ height: "28px", marginTop: 5 }}
                />
              </div>
            </Box>
            <img src={mmtop} alt="" style={{ height: "30px" }} />
          </div>
          <Box sx={{ padding: 2, borderTop: "1px solid gray" }}>
            <CardContent>
              <FirstLine>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt=" " src={pepe} />
                </StyledBadge>
                <Typography component="div">페페 교육프로</Typography>
                <span>오전 9:00</span>
              </FirstLine>
              <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                <p style={{ display: "inline", backgroundColor: "yellow" }}>
                  {" "}
                  @here
                </p>
              </Typography>
              <Typography sx={{ mb: 1.5, mt: 1.5 }}>
                <strong>14시 자율프로젝트 특강1 접속 안내</strong>
              </Typography>
              <Typography sx={{ fontSize: 15 }}>
                14시 자율프로젝트 특강1 접속 안내 [자율프로젝트특강1 : 오픈소스
                특강/Open Source, It’s new? -삼성전자 박수홍 그룹장- ]이 곧
                시작됩니다!! (※지난주 강사님 일정상 연기된 특강입니다.) 에듀싸피
                다시보기는 제공되지않으나 부득이 미팅일정이 있는 팀들은 금일
                18시까지 유튜브 시청가능하므로 모두들 꼭 시청바랍니다. :youtube:
              </Typography>
            </CardContent>

            <CardActions>
              <Typography sx={{ color: "blue" }}>
                * 이모지를 선택해보쟈 * ☞
              </Typography>
              <MattermostEmoji />
            </CardActions>
          </Box>
        </div>
      </Box>
    </div>
  );
}

const FirstLine = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  // justifyContent: "center",
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
