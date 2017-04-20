import api from "../api.js";
import { connect } from "react-redux";
import container from "../containers/all.js";

export default function saveNote(text) {
  return function(dispatch) {
    $.ajax({
      url: api.url,
      type: "POST",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        note: text
      })
    }).then((data, success) => {
      dispatch({ type: "CLEAR" });
    });
  };
}
