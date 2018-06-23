import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: 'I love React!'
    });
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
    );
  }
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('app')
);

