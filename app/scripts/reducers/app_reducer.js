import store from "../store.js";
import { createStore } from "redux";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case "SENT_TEXT":
      return Object.assign({}, state, {
        text: action.text
      });

    case "SAVE_NOTE":
      //empty text area after saving to server
      console.log("state.text = ", state.text);
      return state;

    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
}
