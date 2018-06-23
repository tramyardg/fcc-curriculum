/*
 A class method typically needs to use the this keyword so it can access properties
 on the class (such as state and props) inside the scope of the method
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }

  render() {
    return (
        <div>
          <button onClick={this.addItem}>Click Me</button>
          <h1>Item count: {this.state.itemCount}</h1>
        </div>
    );
  }
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('app')
);

