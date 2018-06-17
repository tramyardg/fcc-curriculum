const JSX = (
    <div>
      <h1>asd</h1>
      <p>asd</p>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
);

// # Add Comments in JSX
const JSXcomments = (
    <div>
      {/* */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
);

// # React: Render HTML Elements to the DOM
ReactDOM.render(JSX, document.getElementById('challenge-node'));

// # React: Define an HTML Class in JSX
let className = 'myDiv';
const JSXdiv = (
    <div className={className}>
      <h1>Add a class to this div</h1>
    </div>
);

// # React: Learn About Self-Closing JSX Tags
const JSXselfClosingTag = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
);

// # React: A Stateless Functional Component
const MyComponent = function() {
  return (
      <div>Hello!</div>
  );
};

// # React: Create a React Component (ES6 class syntax)
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div><h1>Hello React!</h1></div>);
  }
};
