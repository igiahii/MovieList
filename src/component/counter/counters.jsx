import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div className="Container p-2">
        <button
          onClick={this.handleReset}
          className="btn btn-primary m-2 btn-sm"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            increment={this.increment}
          />
        ))}
      </div>
    );
  }
  increment = (counter) => {
    let list = [...this.state.counters];
    const item = list.indexOf(counter);
    list[item].value++;
    console.log(list);
    this.setState({ list });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
}

export default Counters;
