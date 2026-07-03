import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";
import api from "../api/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);
      console.log(response.data.organizationName);
      localStorage.setItem("organizationName", response.data.organizationName);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };
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

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="terms">
              <input type="checkbox" id="remember" />

              <label htmlFor="remember">Remember me</label>
            </div>
            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
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

