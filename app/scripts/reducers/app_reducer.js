import store from "../store.js";
import { createStore } from "redux";
import marked from "marked";

const url = "https://api.backendless.com/v1/data/md_note";
const appId = "892747C4-CCC9-E96F-FF91-006B50E61400";
const restKey = "30D82F23-700A-52A1-FF7B-1BC275C5F700";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      isSent: false,
      text: ""
    };
  }

  switch (action.type) {
    case "SENT_TEXT":
      return Object.assign({}, state, {
        text: action.text
      });

    case "SAVE_NOTE":
      //empty text area after saving to server
      console.log("state.text = ", state.text);
      $.ajax({
        url: url,
        type: "POST",
        headers: {
          "application-id": appId,
          "secret-key": restKey,
          "Content-Type": "application/json",
          "application-type": "REST"
        },
        data: JSON.stringify({
          note: state.text
        })
      }).then((data, success) => {
        alert("your note has been saved!");
        store.dispatch({ type: "CLEAR" });
      });
      return state;

    case "CLEAR":
      return Object.assign({}, state, {
        text: ""
      });

    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
}
