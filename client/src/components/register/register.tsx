import './register.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-logo-container">
        <h1>MANAGO</h1>
      </div>
      <div className="register-form-container">
        <form className="register-form">
          <div className="register-info-container">
            <div>
              <p className="register-password-input">First Name</p>
              <input type="text"
                placeholder='First name...'
              />
            </div>
            <div>
              <p className="register-password-input">Last Name</p>
              <input type="text"
                placeholder='Last name...'
              />
            </div>
          </div>
          <div>
            <p className="register-email-input">Your Email</p>
            <input type="text"
              placeholder='Type your email...'
            />
          </div>
          <div>
            <p className="register-password-input">Your Password</p>
            <input type="text"
              placeholder='Type your password...'
            />
          </div>
          <div className="register-form-submit-container">
            <button type='submit'>REGISTER</button>
          </div>
        </form>
      </div>
      <div className="to-login-container">
        <span>Already registered? <a href="/login">Log In</a></span>
      </div>
    </div>
  );
}
