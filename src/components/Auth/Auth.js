import React, {useState} from "react";
import {GoogleLogin} from "react-google-login";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import "./Auth.scss";
import {register, signin} from "../../actions/auth.js";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;

  const handleShowPassword = (e) => {
    e.preventDefault();
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(register(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup(isSignup ? false : true);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({type: "AUTH", data: {result, token}});
      history.push("/characters");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h3>{isSignup ? "Create Account" : "Sign In"}</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <div className="form-group">
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  onChange={handleInputChange}
                  required={true}
                />
              </div>
              <div className="form-group">
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleInputChange}
                  required={true}
                />
              </div>
            </>
          )}
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleInputChange}
              required={true}
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required={true}
            />
            <button onClick={handleShowPassword} className="password-button">
              {eye}
            </button>
          </div>
          {isSignup && (
            <div className="form-group">
              <input
                id="cpassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleInputChange}
                required={true}
              />
            </div>
          )}
          <div className="buttons-wrapper">
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
            <button className="already" onClick={switchMode}>
              {isSignup ? "Already registered? Sign in" : "Not registered? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
