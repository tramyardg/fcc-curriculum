import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementCounter() {
    if (this.counter === 0) {
      this.resetCounter();
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  };

  resetCounter() {
    this.setState({
      counter: 0
    });
  };

  render() {
    return (
        <div>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
          <button onClick={this.resetCounter}>Reset</button>
          <h1>Current count: {this.state.counter}</h1>
        </div>
    );
  }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('app')
);