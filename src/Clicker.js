import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ number: Math.floor(Math.random() * 10) + 1 });
  }

  render() {
    return (
      <div className="Clicker">
        <h1>Number is {this.state.number}</h1>
        {this.state.number !== 7 ? (
          <button onClick={this.handleClick}>Random Number</button>
        ) : (
          <h3>CONGRATS! YOU WIN!!!</h3>
        )}
      </div>
    );
  }
}

export default Clicker;
