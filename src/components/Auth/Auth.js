import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from './Input.js';
import './Auth.scss';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {

  };

  const handleInputChange = () => {

  }

  const switchMode = () => {
    setIsSignup(isSignup ? false : true);
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push("/characters");
    } catch (error) {
      console.log(error);
    }
  }

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try again later");
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h5>{isSignup ? 'Create Account' : 'Sign In'}</h5>
        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <Input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="Enter first name"
                onChange={handleInputChange}
              />
              <Input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Enter last name"
                onChange={handleInputChange}
              />
            </>
          )}
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
          <Input 
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInputChange}
          />
          {isSignup && (
            <>
              <Input
                id="cpassword"
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                onChange={handleInputChange}
              />
            </>
          )}
          <button type="submit" className="auth-button">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <GoogleLogin
            clientId="281045210355-5n9nsihk6qn0v2kl6d3k8i7208nnb7em.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="google-button"
              >
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <button onClick={switchMode}>
            {isSignup ? "Already registered? Sign In" : "Not registered? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  )
};

export default Login;