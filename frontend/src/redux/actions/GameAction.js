import axios from "axios";
import { baseUrl } from "./url";

function getRemindAnswer(question) {
  const data = { question };
  console.log("QUESTION ", question);
  return async (dispatch) => {
    const url = `${baseUrl}/chat-gpt/question`;
    await axios
      .post(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        dispatch({ type: "GET_REMIND_ANSWER", payload: { data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const GameAction = {
  getRemindAnswer,
};
