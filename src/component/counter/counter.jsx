import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  mystyle = {
    backgroundColor: "Blue",
  };
  render() {
    return (
      <div>
        <span style={this.mystyle} className="badge badge-success m-2">
          {this.shownumber()}
        </span>
        <button
          onClick={() => this.props.increment(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  shownumber() {
    const { value } = this.props.counter;
    if (value === 0) {
      return "Zero";
    }
    return value;
  }
  // increment = () => {
  //   this.setState({ count: this.state.count + 1 });
  //   console.log(this.state);
  // };
}

export default Counter;
