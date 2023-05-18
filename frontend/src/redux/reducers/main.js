const initialState = {
  // Header & Maincomp1
  userId: 0,
  nickname: "",
  campus: 0,
  mileage: 0,
  tier: "",
  // Maincomp2
  seoul: 0,
  daejeon: 0,
  gumi: 0,
  gwangju: 0,
  busan: 0,

  // Maincomp3
  users: [],

  // MainComp2
  totalCnt: 0,
  winCnt: 0,
  loseCnt: 0,
  drawCnt: 0,

  //MainComp4
  records: [],

  challengeGame: [],
};

function mainReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_USER":
      console.log("get user 리듀서 실행");
      return {
        ...state,
        nickname: payload.data,
        // campus: payload.data,
        // mileage: payload.data,
        // tier: payload.data,
      };
    case "GET_CAMPUS_AVG":
      console.log("GET_CAMPUS_AVG 리듀서 실행");
      return {
        ...state,
        seoul: payload.Seoul,
        daejeon: payload.Daejeon,
        gumi: payload.Gumi,
        gwangju: payload.Gwangju,
        busan: payload.Busan,
      };
    case "GET_RANKING":
      console.log("GET_RANKING 리듀서 실행");
      console.log(payload.data.userList);
      return {
        ...state,
        users: payload.data.userList,
      };
    case "GET_STATISTICS":
      console.log("SET_STATISTICS 리듀서 실행");
      return {
        ...state,
        totalCnt: payload.totalCnt,
        winCnt: payload.winCnt,
        loseCnt: payload.loseCnt,
        drawCnt: payload.drawCnt,
      };
    case "GET_RECORDS":
      console.log("GET_RECORDS 리듀서 실행");
      return {
        ...state,
        recordId: payload.recordId,
        isWin: payload.isWin,
        date: payload.date,
        challengerId: payload.challengerId,
        challengerNickname: payload.challengerNickname,
        userNickname: payload.userNickname,
      };
    case "GET_CHALLENGE":
      console.log("GET_CHALLENGE 리듀서 실행");
      return {
        ...state,
        challengeGame: payload.games,
      };

    default:
      return state;
  }
}

export default mainReducer;
