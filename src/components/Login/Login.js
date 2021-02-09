import React from 'react';
import { connect } from 'react-redux';
import { validateFields } from '../../utils/common';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: ''
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const fieldsToValidate = [{ email }, { password }];

    const allFieldsEntered = validateFields(fieldsToValidate);

    // check all fields entered
    if (!allFieldsEntered) {
      this.setState({
        errorMessage: {
          signinError: 'Please enter all the fields.'
        }
      });
    } else {
      // log in successful
      this.setState({
        errorMessage: {
          signinError: ''
        }
      });
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="login-page">
        <h1>Rick And Morty Application</h1>
        <div className="login-form">
          <form onSubmit={this.handleLogin}>
            {errorMessage && errorMessage.signinError && (
              <p className="error-message centered-message">
                {errorMessage.signinError}
              </p>
            )}
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="action-items">
              <button variant="primary" type="submit">
                Login
              </button>
              <Link to="/register" className="btn btn-secondary">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default connect()(Login);