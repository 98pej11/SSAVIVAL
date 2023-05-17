const initialState = {
userId: 1,
nickname: '김싸피',
campus: 0,
mileage: 50,
tier: "Bronze",

seoul: 0,
daejeon: 0,
gumi: 0,
gwangju: 0,
busan: 0,

users:[{
  "userId": 1,
  "nickname": "김싸피",
  "campus": 0,
  "mileage": 1500,
  "tier": "bronze"
},{
  "userId": 2,
  "nickname": "김에듀",
  "campus": 0,
  "mileage": 1500,
  "tier": "bronze"
},{
  "userId": 3,
  "nickname": "김개발",
  "campus": 1,
  "mileage": 1500,
  "tier": "bronze"
},],

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

};

function mainReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_USER":
      console.log('get user 리듀서 실행')
      return {
        ...state,
        nickname: payload.data,
        // campus: payload.data,
        // mileage: payload.data,
        // tier: payload.data,
      };
    case "GET_CAMPUS_AVG":
    console.log('GET_CAMPUS_AVG 리듀서 실행')
    return {
      ...state,
      seoul: payload.Seoul,
      daejeon: payload.Daejeon,
      gumi: payload.Gumi,
      gwangju: payload.Gwangju,
      busan: payload.Busan,
    };
    case "GET_RANKING":
    console.log('GET_RANKING 리듀서 실행')
    return {
      ...state,
      users:payload.users
    };
    case "GET_STATISTICS":
    console.log('SET_STATISTICS 리듀서 실행')
    return {
      ...state,
      totalCnt: payload.totalCnt,
      winCnt: payload.winCnt,
      loseCnt: payload.loseCnt,
      drawCnt: payload.drawCnt,
    };
    case "GET_RECORDS":
    console.log('GET_RECORDS 리듀서 실행')
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
    console.log('GET_CHALLENGE 리듀서 실행')
    return {
      ...state,
      challengeGame:payload.games
    };

    default:
        return state;
  }
}

export default mainReducer;
