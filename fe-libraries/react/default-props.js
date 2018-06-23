import React from 'react';

const ShoppingCart = (props) => {
  return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
  );
};

ShoppingCart.defaultProps = {
  items: 0
};

// Override default props example
const Items = (props) => {
  return <h1>Current quantity: {props.qty}</h1>
};

Items.defaultsProps = {
  qty: 0
};

class MyShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Items qty={10}/>
        </div>);
  }
}