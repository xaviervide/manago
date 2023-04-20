import './login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-logo-container">
        <h1>MANAGO</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form">
          <div>
            <p className="login-email-input">Your Email</p>
            <input type="text"
            placeholder='Type your email...'
            />
          </div>
          <div>
            <p className="login-password-input">Your Password</p>
            <input type="text"
            placeholder='Type your password...'
            />
          </div>
          <div className="login-form-submit-container">
            <button type='submit'>LOG IN</button>
          </div>
        </form>
      </div>
      <div className="to-register-container">
        <span>Not registered? <a href="/register">Sign Up</a></span>
      </div>
    </div>
  );
}