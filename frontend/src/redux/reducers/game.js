import cafeteria from "../../assets/backgrounds/cafeteria.png"
import classroom from "../../assets/backgrounds/classroom.png"
import class_desk from "../../assets/backgrounds/class_desk.png"
import consultant from "../../assets/backgrounds/consultant.png"
import consultant_desk from "../../assets/backgrounds/consultant_desk.png"
import locker from "../../assets/backgrounds/locker.png"
import monitor from "../../assets/backgrounds/monitor.png"
import laptop from "../../assets/backgrounds/laptop.png"

const initialState = {
  gameTitleData: [
    "제한 시간 내 주어진 명령어를 모두 입력하라",
    "사물함을 열어서 책을 꺼내자",
    "틀린 맞춤법을 찾아라!",
    "연상되는 단어를 입력해봐!",
    "휴지를 최대한 많이! 뽑아보쟈",
    "상황에 맞는 MM 이모지를 선택해보쟈",
    "태그하고 밥먹자",
    "식당 자리 잡기",
    "퍼즐맞추기",
    "어떻게든 퇴실버튼을 누르자",
    "틀린그림찾기 테스트",
  ],
  pageBgs: [class_desk, locker, consultant_desk, classroom, consultant, class_desk, cafeteria, cafeteria, classroom,  classroom, class_desk],
  containerBgs: [monitor,"","","","","","","","", "",monitor],
  remindAnswer: "",
  remindWordList: ["빵", "패티", "양배추", "치즈", "토마토"],
  round: 0,
  title: null,
  pageBg: null,
  containerBg: null,
  score:0,
  totalScore: 0,
  nextComp: false,
  count: 0,
  timerBombLimit: 0,
  timerBombActive: false,
  minigameClear: false, //미니 게임 성공 여부
  minigameActive: false,
  gameMode: "single",
  selectedEmojiIndex: null,
  emojiResult: "false",
  interval:false,
  pointsCenter: [[0, 0, 0]],
  quizImgSize: { width: 600, height: 400 },
  quizImgUrl: { left: "", right: "" },
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
    case "INCREMENT_COUNT":
      return { ...state, count: payload.count + 1 };
    case "SET_GAME_MODE":
      return { ...state, gameMode: payload.gameMode };
    case "SET_MINIGAME_START":
      console.log('SET_MINIGAME_START',payload)
      return {
        ...state,
        title: state.gameTitleData[state.round],
        pageBg: state.pageBgs[state.round],
        containerBg: state.containerBgs[state.round],
        round: state.round + 1,
        timerBombActive: true,
        timerBombLimit: 10,
        minigameClear: false,
        minigameActive: true,
        interval:false,
      };
    case "SET_MINIGAME_CLEAR":
      console.log('SET_MINIGAME_CLEAR')
      return {
        ...state,
        timerBombActive: false,
        // timerBombLimit: 10,
        minigameClear: true,
        minigameActive: false,
      };
    case "SET_MINIGAME_FAIL":
      console.log('SET_MINIGAME_FAIL')
      return {
        ...state,
        timerBombActive: false,
        timerBombLimit: 0,
        minigameClear: false,
        minigameActive: false,
        score:0,
        interval:true,
      };
    case "UPDATE_SCORE":
      console.log("UPDATE_SCORE",payload);
      return {
        ...state,
        totalScore: state.totalScore + Math.ceil(payload / 10),
        score:Math.ceil(payload / 10),
        interval:true,
      };
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
    case "FETCH_QUIZ_IMAGE":
      return {
        ...state,
        pointsCenter: payload.pointsCenter,
        quizImgSize: payload.quizImgSize,
        quizImgUrl: payload.quizImgUrl,
      };
    case "UPDATE_POINTS_CENTER":
      return {
        ...state,
        pointsCenter: payload,
      };
    default:
      return { ...state };
  }
}

export default gameReducer;
