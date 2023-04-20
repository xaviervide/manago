import './register.css';
import { useState } from 'react';
import ValidateRegisterInput from '../../helpers/validateRegisterInput';

function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit (e : React.FormEvent<HTMLFormElement>) : void{
    e.preventDefault();
    if (ValidateRegisterInput(firstName, lastName, email, password)) {

    }
  }

  function clearRegisterForm () : void {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="register-container">
      <div className="register-logo-container">
        <h1>MANAGO</h1>
      </div>
      <div className="register-form-container">
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="register-info-container">
            <div>
              <p className="register-password-input">First Name</p>
              <input type="text"
                placeholder='First name...'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <p className="register-password-input">Last Name</p>
              <input type="text"
                placeholder='Last name...'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p className="register-email-input">Your Email</p>
            <input type="text"
              placeholder='Type your email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="register-password-input">Your Password</p>
            <input type="password"
              placeholder='Type your password...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="register-form-submit-container">
            <button type='submit'>REGISTER</button>
          </div>
        </form>
      </div>
      <div className="to-login-container">
        <span>Already registered? <a href="/home/login">Log In</a></span>
      </div>
    </div>
  );
}

export default Register;