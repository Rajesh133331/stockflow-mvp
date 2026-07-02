import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-left">
        <div className="brand">
          <h1>
            Stock<span>Flow</span>
          </h1>
        </div>

        <div className="quote-section">
          <h2>
            <span>Track Smarter.</span>
            <br />
            Manage Faster.
            <br />
            Grow Confidently.
          </h2>

          <p>
            Stay in control of your inventory with an easy-to-use platform
            designed for businesses of all sizes.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>

          <p className="subtitle">
            Sign in to continue managing your organization.
          </p>

          <form>
            <div className="form-group">
              <label>Email Address</label>

              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="terms">
              <input type="checkbox" id="remember" />

              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

