import React from "react";

class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }
  createMarkup() {
    return { __html: this.props.note };
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

export default Markdown;
