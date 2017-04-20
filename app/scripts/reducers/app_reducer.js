import store from "../store.js";
import { createStore } from "redux";

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
