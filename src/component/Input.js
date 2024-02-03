import React from "react";
class InputController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
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
          <textarea
            id="preview"
            defaultValue={this.state.input}
          ></textarea>
        </div>
      </>
    );
  }
}
export default InputController;
