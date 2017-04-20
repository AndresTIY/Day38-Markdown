import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }
  clearText() {
    return (value = "");
  }

  render() {
    return (
      <div className="text-area">
        <h3>Create a Note with Markdown!</h3>
        <textarea onKeyUp={this.props.onChange} rows="30" cols="50" />
      </div>
    );
  }
}

export default TextArea;
