import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { login } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
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
        <h2>Login</h2>
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
          <p>
            Forgot password ? <Link to="/reset-password">Reset</Link>
          </p>
        </fieldset>
        <p>{error}</p>
        <button type="submit">Login</button>
      </form>
      <p>
        Need an account ? <Link to="/signup">Signup</Link>{' '}
      </p>
    </div>
  );
};

export default Login;
