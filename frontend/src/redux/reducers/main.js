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

challengeInfo:{
  challengeTotalScore:0,
  challengeId:null,
},

totalCnt: 6,
winCnt: 3,
loseCnt: 2,
drawCnt: 1,

records:[{
    recordId: 1,
    isWin: 1, //0: 패배, 1: 승리 , 2 : 무승부 , 3: 본인(?)
    date: "164500000",
    challengerId: 2,
    challengerNickname: "김에듀",
    userNickname: "김싸피",
  },
  {
    recordId: 2,
    isWin: 0, //0: 패배, 1: 승리 , 2 : 무승부 , 3: 본인(?)
    date: "264500000",
    challengerId: 3,
    challengerNickname: "김개발",
    userNickname: "김싸피",
  },],

challengeGame:[{
  "miniGameId": 1,
  "clearTime": "5.32",
  "score": 100,
  "miniGameDetail": {
    "miniGameDetailId": 1,
    "game_name" : "휴지뽑기 게임",
    "game_img" : "s3-pgpp-etc-001.s3.ap-northeast-2.amazonaws.com/character.png",
    "game_time" : "10.00",
  }
},
{
  "miniGameId": 2,
  "clearTime": "4.12",
  "score": 200,
  "miniGameDetail": {
      "miniGameDetailId": 3,
      "game_name" : "ip 게임",
      "game_img" : "s3-pgpp-etc-001.s3.ap-northeast-2.amazonaws.com/character.png",
      "game_time" : "8.12",
  }
},],

  challengeGame: [],
};

function mainReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_USER":
      console.log('get user 리듀서 실행',payload)
      return {
        ...state,
        nickname: payload.nickname,
        campus: payload.campus,
        mileage: payload.mileage,
        tier: payload.tier,
      };
    case "GET_CAMPUS_AVG":
    console.log('GET_CAMPUS_AVG 리듀서 실행',payload)
    return {
      ...state,
      seoul: payload.Seoul,
      daejeon: payload.Daejeon,
      gumi: payload.Gumi,
      gwangju: payload.Gwangju,
      busan: payload.Busan,
    };
    case "GET_RANKING":
    console.log('GET_RANKING 리듀서 실행',payload)
    return {
      ...state,
      users:payload.data.userList,
    };
    case "GET_STATISTICS":
    console.log('SET_STATISTICS 리듀서 실행',payload)
    return {
      ...state,
      totalCnt: payload.statistics.totalCnt,
      winCnt: payload.statistics.winCnt,
      loseCnt: payload.statistics.loseCnt,
      drawCnt: payload.statistics.drawCnt,
    };
    case "GET_RECORDS":
    console.log('GET_RECORDS 리듀서 실행',payload.recordList)
    return {
      ...state,
      records:payload.recordList
    };
    case "GET_CHALLENGE":
    console.log('GET_CHALLENGE 리듀서 실행')
    return {
      ...state,
      // challengeGame:payload.games
    };
    case "SET_CHALLENGE_INFO":
    console.log('SET_CHALLENGE_INFO 리듀서 실행')
    return {
      ...state,
      challengeInfo:{
        challengeTotalScore:payload.challengeTotalScore,
        challengeId:payload.challengeId,
      }
    };

    default:
      return state;
  }
}

export default mainReducer;
