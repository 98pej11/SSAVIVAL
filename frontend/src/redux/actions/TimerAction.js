export const SET_TIMER_EXPIRED = "SET_TIMER_EXPIRED";
export const SET_TIMER_START = "SET_TIMER_START";

export const setTimerExpired = () => {
  return {
    type: SET_TIMER_EXPIRED,
    payload: null,
  };
};

export const setTimerStart = (timeLimit) => {
  return {
    type: SET_TIMER_START,
    payload: null,
  };
};
