import { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();

  const { signup } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log('====================================');
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
          <div>
            <label htmlFor="cpassword">Confirm password</label>
            <input type="password" id="cpassword" ref={cpasswordRef} required />
          </div>
        </fieldset>
        <button type="submit">Signup</button>
      </form>
      <p>Already got an account ? Login</p>
    </div>
  );
};

export default Signup;
