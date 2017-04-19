import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import marked from "marked";
import TextArea from "./text_area.js";
import Confirm from "./confirm.js";
import Markdown from "./markdown_preview.js";

var foo = marked("I am using __markdown__");

function createMarkup() {
  return { __html: foo };
}

function TestComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <TextArea />
        <Markdown />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
