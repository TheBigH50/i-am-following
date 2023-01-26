import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextString: "",
    };
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({
      inputTextString: event.target.value,
    });
  }

 

  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.inputTextString)}>
        <label htmlFor="form">Input Grocery Here </label>
        <input
          type="text"
          name="form"
          id="inputText"
          value={this.state.inputTextString}
          onChange={this.handleChange}
        />
        <button type="submit">ClIcK</button>
      </form>
    );
  }
}
