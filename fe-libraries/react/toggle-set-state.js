import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    });
  };

  render() {
    let nowYouSeeMe = "";
    if (this.state.visibility) {
      nowYouSeeMe = <h1>Now you see me!</h1>;
    }
    return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me!</button>
          {nowYouSeeMe}
        </div>
    );
  }
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('app')
);