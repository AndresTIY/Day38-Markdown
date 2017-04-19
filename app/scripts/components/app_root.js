import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import marked from "marked";
import TextArea from "./text_area.js";
import Confirm from "./confirm.js";
import Markdown from "./markdown_preview.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveNote = this.retrieveNote.bind(this);
  }

  retrieveNote(e) {
    var textAreaNote = e.target.value;
    console.log(textAreaNote);
    this.props.dispatch({ type: "SENT_TEXT", text: marked(textAreaNote) });
  }

  render() {
    return (
      <main>
        <TextArea onChange={this.retrieveNote} />
        <Markdown note={this.props.text} />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
