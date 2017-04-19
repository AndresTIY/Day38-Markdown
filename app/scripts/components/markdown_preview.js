import React from "react";
import TextArea from "./text_area.js";
import { connect } from "react-redux";
import container from "../containers/all.js";
import allState from "../containers/all.js";
import store from "../store.js";

class Markdown extends React.Component {
  createMarkup() {
    return { __html: this.props.text };
  }
  render() {
    return (
      <div className="md-preview-card">
        <h3>Live Preview of your Note</h3>
        <div className="md-preview">
          <div dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
      </div>
    );
  }
}

export default connect(container.allState)(Markdown);
