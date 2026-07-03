import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import api from "../api/api";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);

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

    if (
      !formData.organizationName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      setError("Please accept the Terms and Conditions.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/signup", {
        organizationName: formData.organizationName,
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
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

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="organizationName"
                placeholder="Company Name"
                value={formData.organizationName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />

              <label htmlFor="terms">
                I accept the <Link>Terms of Service</Link> and{" "}
                <Link>Privacy Policy</Link>
              </label>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
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
