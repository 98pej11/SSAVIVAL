import { SET_TIMER_EXPIRED, SET_TIMER_START } from "../actions/TimerAction";

const initialState = {
  remindAnswer: "",
  remindWordList: [],
  round: 0,
  title: null,
  timeLimit: 0,
  bgPath: null,
  totalScore: 0,
  totalTimeLimit: 120,
  nextComp: false,
  count: 0,
  timerBombLimit: 0,
  timerBombActive: false,
  gameMode: "single",
  selectedEmojiIndex: null,
  emojiResult: "false",
  imageList: [
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/f4a17826ff4f4c588a97fd568419039f.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/d0d9e6a0e2324a16a0ed2d7d4d69591b.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/bcba3bc2f16647ef8e30687f6feaba3a.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/61d0f821086647dc8916e81011f584ac.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/4ab879d5769a42ac9e647352aa343da3.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/404b65506cb641bfa27336059a818a7c.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/39a73a06f0974dca9304f2bf6cf5b501.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/31971529ddcd490987877e789a520b81.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/2e64d0cfc0914237b47ba40eab2b116f.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/2c21fbd9bf9748009575fd0c38b8ba0a.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/de280c3662f54b8dbbb073552e0ed25d.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/c94fded0932040fc849e4d922a17419f.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/c44434403ac54a13a88d1001a1a2c342.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/bd30ecd2d4b74e74abb786edde8c18d1.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/b6a0adf8226148638dd566ef560ebe77.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/726ee48432724761ae9eda1b09b5f53f.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/6c026fe041b8499381793099d5abc193.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/343eb7d215ab4119a6c0e22d13e1a8ac.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/06201119c7f14b9e821d4ede019e23f8.png",
    "https://ssafy-mmc.s3.ap-northeast-2.amazonaws.com/1710ae453af14c7592f5dd73f352375f.png",
  ],
};
function gameReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_REMIND_ANSWER":
      console.log(payload.data.wordList);
      return {
        ...state,
        remindAnswer: payload.data.answer.choices[0].text.trim(),
        remindWordList: payload.data.wordList,
      };
    case "SET_GAME":
      return {
        ...state,
        title: payload.title,
        timeLimit: payload.timeLimit,
        bgPath: payload.bgPath,
        round: state.round + 1,
      };

    case "UPDATE_SCORE":
      return { ...state, totalScore: state.totalScore + payload };
    case "TIME_OVER":
      return { ...state, nextComp: !state.nextComp };
    case "INCREMENT_COUNT":
      return { ...state, count: payload.count + 1 };
    case "SET_GAME_MODE":
      return { ...state, gameMode: payload.gameMode };
    case SET_TIMER_START:
      return { ...state, timerBombActive: true, timerBombLimit: 10 };
    case SET_TIMER_EXPIRED:
      return { ...state, timerBombActive: false, timerBombLimit: 0 };
    case "SET_EMOJI_INDEX":
      console.log(payload);
      return {
        ...state,
        selectedEmojiIndex: payload,
      };
    case "SET_EMOJI_RESULT":
      console.log(payload);
      return {
        ...state,
        emojiResult: payload,
      };
    default:
      return { ...state };
  }
}

export default gameReducer;
