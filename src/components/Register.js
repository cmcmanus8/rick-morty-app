import React from 'react';
import { connect } from 'react-redux';
import { validateFields } from '../utils/common';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    successMessage: '',
    errorMessage: '',
    isSubmitted: false
  };

  registerUser = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = this.state;

    const fieldsToValidate = [
      { firstName },
      { lastName },
      { email }, 
      { password },
      { confirmPassword }
    ];

    const allFieldsEntered = validateFields(fieldsToValidate);
    if (!allFieldsEntered) {
      this.setState({
        errorMessage: {
          signupError: 'Please enter all the fields.'
        }
      });
    } else {
      if (password !== confirmPassword) {
        this.setState({
          errorMessage: {
            signupError: 'Passwords do not match.'
          }
        });
      } else {
        this.setState({ isSubmitted: true });
      }
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { errorMessage, successMessage, isSubmitted } = this.state;
    return (
      <div className="register-page">
        <h2>Register User</h2>
        <div className="register-form">
          <form onSubmit={this.registerUser}>
            {errorMessage && errorMessage.signupError ? (
              <p className="error-message centered-message">
                {errorMessage.signupError}
              </p>
            ) : (
              isSubmitted && (
                <p className="success-message centered-message">{successMessage}</p>
              )
            )}
            <div class="form-group">
              <label for="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="Enter first name"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Enter last name"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="confirm_password">Confirm password</label>
              <input
                id="confirm_password"
                type="password"
                name="confirm_password"
                placeholder="Confirm your password"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="action-items">
              <button variant="primary" type="submit">
                Register
              </button>
              <Link to="/" className="btn btn-secondary">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);