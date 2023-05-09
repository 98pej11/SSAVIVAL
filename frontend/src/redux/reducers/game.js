const initialState = {
  count: 0,
  gameMode: "single",
};
function GameReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT_COUNT":
      return { ...state, count: payload.count + 1 };
    case "SET_GAME_MODE":
      return { ...state, gameMode: payload.gameMode };
    default:
      return { ...state };
  }
}
export default GameReducer;
