import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const List = (props) => {
  return (
      <p>{props.tasks.join(', ')}</p>
  );
};

class ToDo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["eat", "workout", "sleep"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["eat", "code", "workout", "sleep"]}/>
        </div>
    );
  }
}

ReactDOM.render(
    <ToDo/>,
    document.getElementById('app')
);