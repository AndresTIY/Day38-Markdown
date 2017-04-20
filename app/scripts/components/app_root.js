import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import marked from "marked";
import TextArea from "./text_area.js";
import Confirm from "./confirm.js";
import Markdown from "./markdown_preview.js";
import Button from "./button.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveNote = this.retrieveNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  retrieveNote(e) {
    var textAreaNote = e.target.value;
    this.props.dispatch({ type: "SENT_TEXT", text: marked(textAreaNote) });
  }
  saveNote(e) {
    this.props.dispatch({ type: "SAVE_NOTE" });
    console.log("ya");
  }

  render() {
    return (
      <main>
        <TextArea onChange={this.retrieveNote} />
        <Markdown note={this.props.text} />
        <Button onChange={this.saveNote} />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
