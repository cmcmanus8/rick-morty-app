import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import './Auth.scss';

const Input = ({ id, type, name, placeholder, handleInputChange }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;

  const handleTypeShowPassword = (type, passwordShown) => {
    if (type === 'password') {
      if (passwordShown) {
        return 'text'
      } else {
        return type;
      }
    }
  }

  const handleShowPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="form-group">
      <input
        id={id}
        type={handleTypeShowPassword(type, passwordShown)}
        onChange={handleInputChange}
        required={true}
        name={name}
        placeholder={placeholder}
      />
      {name === 'password' && (
        <button onClick={handleShowPassword}>{eye}</button>
      )}
    </div>
  )
}

export default Input;