import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const dataSubmit = (event) => {
    event.preventDefault();

    dispatch(
      login({
        email,
        password,
      })
    );

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className='loginPageContainer'>
    <form className="loginForm" onSubmit={dataSubmit}>
      <div className="formField">
        <label className="formLabel">Email:</label>
        <input
          className="formInput"
          type="email"
          name="email"
          value={email}
          onChange={inputChange}
          placeholder="Write your email"
          required
        />
      </div>

      <div className="formField">
        <label className="formLabel">Password:</label>
        <input
          className="formInput"
          type="password"
          name="password"
          value={password}
          onChange={inputChange}
          placeholder="Write your password"
          required
        />
      </div>

      <button className="formButton" type="submit">
        Submit
      </button>
    </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};
