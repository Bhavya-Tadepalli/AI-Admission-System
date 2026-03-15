import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/apply");
  };

  return (
    <div className="container">

      <div className="login-box">

        <h1>AI Admissions Portal</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>

        </form>

        <p>
          Don't have an account? 
          <Link to="/signup" className="signup"> Sign Up</Link>
        </p>

        <small>AI-Enabled Admissions System</small>

      </div>

    </div>
  );
}

export default Login;