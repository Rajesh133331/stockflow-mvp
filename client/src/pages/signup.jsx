import { Link } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-left">
        <h1 className="brand">
          Stock<span>Flow</span>
        </h1>

        <div className="hero-text">
          <h2>
            <span>Simplify</span> your inventory.
            <br />
            Scale your business.
          </h2>

          <p>
            StockFlow helps you keep track of inventory, reduce stock shortages,
            and grow your business with confidence.
          </p>
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-card">
          <h1>Setup Your Organization</h1>

          <p className="subtitle">
            Create your organization account to get started with StockFlow.
          </p>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Company Name" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Confirm Password" />
            </div>

            <div className="terms">
              <input type="checkbox" id="terms" />

              <label htmlFor="terms">
                I accept the <Link>Terms of Service</Link> and{" "}
                <Link>Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="login-text">
            Already have an account? <Link to="/">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
