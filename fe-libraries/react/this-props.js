import React, {Component} from 'react';
import ReactDOM, from 'react-dom';

class ReturnTempPassword extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <p>You're temporary password: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
}

class ResetPassword extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>Reset Password: </h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          <ReturnTempPassword tempPassword={"hello123"}/>
        </div>
    );
  }
}

ReactDOM.render(
    <ResetPassword/>,
    document.getElementById('app')
);