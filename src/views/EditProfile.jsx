import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const EditProfile = () => {
  const { changeEmail, changePassword } = useAuth();
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleEmailSubmit(event) {
    event.preventDefault();
    setEmailError('');
    try {
      await changeEmail(emailRef.current.value);
      setMessage('Email has been updated');
    } catch (error) {
      console.log('====================================');
      setEmailError(error.message);
      console.log(error);
      console.log('====================================');
    }
  }

  async function handlePasswordSubmit(event) {
    event.preventDefault();
    setPasswordError('');
    try {
      await changePassword(passwordRef.current.value);
      setMessage('password has been updated');
    } catch (error) {
      console.log('====================================');
      setPasswordError(error.message);
      console.log(error);
      console.log('====================================');
    }
  }

  return (
    <div>
      <h2>Edit Profile</h2>
      <p>{message}</p>
      <form onSubmit={handleEmailSubmit}>
        <fieldset>
          <legend>Update email</legend>
          <div>
            <label htmlFor="emailId">Enter email address</label>
            <input type="email" id="emailId" ref={emailRef} required />
          </div>
          <p>{emailError}</p>
          <button type="submit">Update</button>
        </fieldset>
      </form>
      <form onSubmit={handlePasswordSubmit}>
        <fieldset>
          <legend>Update password</legend>
          <div>
            <label htmlFor="password">Type password</label>
            <input type="password" id="password" ref={passwordRef} required />
          </div>
          <p>{passwordError}</p>
          <button type="submit">Update</button>
        </fieldset>
      </form>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default EditProfile;
