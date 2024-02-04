import React from "react";
import { marked } from "marked";
class InputController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      preview: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const markedInput = event.target.value;
    this.setState({
      input: markedInput,
      preview: marked(markedInput)
    });
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="toolbar">
            <i className="fa-brands fa-free-code-camp"></i>
            Editor
            <i className="fa fa-arrows-alt"></i>
          </div>
          <textarea
            id="editor"
            value={this.state.input}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="previewWrapper">
          <div className="toolbar">
            <i className="fa-brands fa-free-code-camp"></i>
            Preview
            <i className="fa fa-arrows-alt"></i>
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: this.state.preview }}
          ></div>
        </div>
      </>
    );
  }
}
export default InputController;
