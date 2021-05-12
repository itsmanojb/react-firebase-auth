import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { signup } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
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
        <h2>Signup</h2>
        <fieldset>
          <legend>Enter details</legend>
          <div>
            <label htmlFor="emailId">Enter email address</label>
            <input type="email" id="emailId" ref={emailRef} required />
          </div>
          <div>
            <label htmlFor="password">Type password</label>
            <input type="password" id="password" ref={passwordRef} required />
          </div>
        </fieldset>
        <p>{error}</p>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already got an account ? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
