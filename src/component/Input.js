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
        <textarea className="form-control" rows="8" cols="12" value={this.state.input} onChange={this.handleChange}></textarea>
        <p>Controlled Input: </p>
        <textarea defaultValue={this.state.input}></textarea>
      </>
    )
  }
}
export default InputController;