import './login.css';
import { useState } from 'react';
import ValidateLoginInput from '../../helpers/validateLoginInput';
import { loginUser } from '../../apiClient';
import { UserLogin } from '../../schemas/UserLogin';

function Login () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit (e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('HERE')
    console.log(ValidateLoginInput(email, password))
    if (ValidateLoginInput(email, password)) {
      const newUserLogin : UserLogin = {email: email, password: password};
      console.log('Valid! ', newUserLogin)
      await loginUser(newUserLogin);
    }
  }

  function clearLoginForm () : void {
    setEmail('');
    setPassword('');
  }

  return (
    <div className="login-container">
      <div className="login-logo-container">
        <h1>MANAGO</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <p className="login-email-input">Your Email</p>
            <input type="text"
            placeholder='Type your email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="login-password-input">Your Password</p>
            <input type="password"
            placeholder='Type your password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-form-submit-container">
            <button type='submit'>LOG IN</button>
          </div>
        </form>
      </div>
      <div className="to-register-container">
        <span>Not registered? <a href="/home/register">Sign Up</a></span>
      </div>
    </div>
  );
}

export default Login;