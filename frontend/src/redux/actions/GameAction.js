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

function gameDone(inputs) {
  console.log("ACTION ", inputs);
  for (const [key, value] of inputs.entries()) {
    // for (const [key2, value2] of value.entries()) {
    console.log(key, value);
  }
  // }
  return async () => {
    const url = `${baseUrl}/game/done`;
    await axios
      .post(url, inputs, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        const { data } = response;
        console.log("data", data);
      })
      .catch((error) => {
        console.log("MODIFYUSER", error);
      });
  };
}

export const GameAction = {
  getRemindAnswer,
  gameDone,
};
