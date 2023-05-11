import monitor from "../../assets/game_gitbash/monitor.png";
import desk from "../../assets/game_typo/desk.png";
// import { SET_TIMER_EXPIRED, SET_TIMER_START } from "../actions/TimerAction";
const gameTitleData = [
  "사물함을 열어서 책을 꺼내자",
  "어떻게든 퇴실버튼을 누르자",
  "제한 시간 내 주어진 명령어를 모두 입력하라",
  "틀린 맞춤법을 찾아라!",
  "휴지를 최대한 많이! 뽑아보쟈",
  "연상되는 단어를 입력해봐!",
  "엘레베이터를 붙잡아!",
  "상황에 맞는 MM 이모지를 선택해보쟈",
];
const gameBgPathData = ["", "", monitor, desk, "", "", "", ""];
const initialState = {
  remindAnswer: "",
  remindWordList: [],
  round: 0,
  title: null,
  bgPath: null,
  totalScore: 0,
  nextComp: false,
  count: 0,
  timerBombLimit: 0,
  timerBombActive: false,
  minigameClear: false,
  minigameActive: false,
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
    case "UPDATE_SCORE":
      return { ...state, totalScore: state.totalScore + payload };
    case "INCREMENT_COUNT":
      return { ...state, count: payload.count + 1 };
    case "SET_GAME_MODE":
      return { ...state, gameMode: payload.gameMode };
    case "SET_MINIGAME_START":
      return {
        ...state,
        title: gameTitleData[state.round],
        bgPath: gameBgPathData[state.round],
        round: state.round + 1,
        timerBombActive: true,
        timerBombLimit: 10,
        minigameClear: false,
        minigameActive: true,
      };
    case "SET_MINIGAME_CLEAR":
      return {
        ...state,
        timerBombActive: false,
        // timerBombLimit: 10,
        minigameClear: true,
        minigameActive: false,
      };
    case "SET_MINIGAME_FAIL":
      return {
        ...state,
        timerBombActive: false,
        timerBombLimit: 0,
        minigameClear: false,
        minigameActive: false,
      };
    // case SET_TIMER_EXPIRED:
    //   return { ...state, timerBombActive: false, timerBombLimit: 0 };
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
