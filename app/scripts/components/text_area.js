import React from "react";
import Markdown from "./markdown_preview.js";
import { connect } from "react-redux";
import container from "../containers/all.js";
import allState from "../containers/all.js";
import store from "../store.js";
import marked from "marked";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-area">
        <h3>Create a Note with Markdown!</h3>
        <textarea
          onKeyUp={this.props.onChange}
          name="name"
          rows="30"
          cols="50"
        />
        <button>Save Your Note!</button>
      </div>
    );
  }
}

export default connect(container.allState)(TextArea);
