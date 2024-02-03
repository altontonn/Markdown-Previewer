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
        <p>Controlled Input: </p>
        <textarea
          cols="100"
          id="preview"
          defaultValue={this.state.input}
        ></textarea>
      </>
    );
  }
}
export default InputController;
