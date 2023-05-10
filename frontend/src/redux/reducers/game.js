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
