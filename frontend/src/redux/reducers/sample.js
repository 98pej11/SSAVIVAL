const initialState = {
  count: 0,
};
function sampleReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT_COUNT":
      return { ...state, count: payload.count + 1 };
    default:
      return { ...state };
  }
}
export default sampleReducer;
