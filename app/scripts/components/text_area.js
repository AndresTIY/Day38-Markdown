import React from "react";
import Markdown from "./markdown_preview.js";

class TextArea extends React.Component {
  render() {
    return (
      <div className="text-area">
        <h3>Create a Note with Markdown!</h3>
        <textarea name="name" rows="30" cols="50" />
        <button>Save Your Note!</button>
      </div>
    );
  }
}

export default TextArea;
