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
  gameMode: "single",
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
    default:
      return { ...state };
  }
}

export default gameReducer;
