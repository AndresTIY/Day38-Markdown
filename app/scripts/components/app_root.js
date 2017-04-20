import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import marked from "marked";
import TextArea from "./text_area.js";
import Confirm from "./confirm.js";
import Markdown from "./markdown_preview.js";
import Button from "./button.js";
import saveNote from "../actions/save_note.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveNote = this.retrieveNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  retrieveNote(e) {
    var textAreaNote = e.target.value;
    this.props.dispatch({ type: "SENT_TEXT", text: textAreaNote });
  }
  saveNote() {
    if (this.props.text.length < 50) {
      alert("note must be at least 50 characters");
    } else {
      this.props.dispatch(saveNote(this.props.text));
    }
  }

  render() {
    return (
      <main>
        <h2 onClick={() => this.props.dispatch({ type: "CLEAR_CONFIRM" })}>
          {this.props.confirmationMsg}
        </h2>
        <TextArea
          ref="textarea"
          textvalue={this.props.text}
          onChange={this.retrieveNote}
        />
        <Markdown note={marked(this.props.text)} />
        <Button onChange={this.saveNote} />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
