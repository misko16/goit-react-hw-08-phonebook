import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
      register({
        name: name,
        email: email,
        password: password,
      })
    );

    if (onSubmit) {
      onSubmit();
    }

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='loginPageContainer'>
      <form className="register-form" onSubmit={dataSubmit}>
        <div>
          <label className="register-label">Name</label>
          <input
            className="register-input"
            type="text"
            name="name"
            value={name}
            onChange={inputChange}
            placeholder="Write your name"
            required
          />
        </div>
        <div>
          <label className="register-label">Email</label>
          <input
            className="register-input"
            type="email"
            name="email"
            value={email}
            onChange={inputChange}
            placeholder="Write your email"
            required
          />
        </div>
        <div>
          <label className="register-label">Password</label>
          <input
            className="register-input"
            type="password"
            name="password"
            value={password}
            onChange={inputChange}
            placeholder="Write your password"
            required
          />
        </div>
        <button className="register-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
