import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ResetPassword = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await resetPassword(emailRef.current.value);
      setMessage('Check mailbox for reset instructions');
    } catch (error) {
      console.log('====================================');
      setError(error.message);
      console.log(error);
      console.log('====================================');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Reset password</h2>
        <p>{message}</p>
        <fieldset>
          <legend>Enter details</legend>
          <div>
            <label htmlFor="emailId">Enter email address</label>
            <input type="email" id="emailId" ref={emailRef} required />
          </div>
        </fieldset>
        <p>{error}</p>
        <button type="submit">Submit</button>
      </form>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
