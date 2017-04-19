import React from "react";
import TextArea from "./text_area.js";

class Markdown extends React.Component {
  render() {
    return (
      <div className="md-preview-card">
        <h3>Live Preview of your Note</h3>
        <div className="md-preview">
          <p>words words words words words</p>
          <p>words words words words words</p>
          <p>words words words words words</p>
          <p>words words words words words</p>
          <p>words words words words words</p>
          <p>words words words words words</p>
          <p>words words words words words</p>
        </div>
      </div>
    );
  }
}

export default Markdown;
