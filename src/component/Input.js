import React from "react";
class InputController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return(
      <>
        <h1>Hello</h1>
        <textarea rows="4" cols="50" id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
        <p>Controlled Input: </p>
        <textarea cols="100" id="preview" defaultValue={this.state.input}></textarea>
      </>
    )
  }
}
export default InputController;