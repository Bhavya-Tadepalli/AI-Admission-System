import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {

return(

<div className="login-container">

<div className="login-box">

<h2 className="title">🎓 AI Admissions Portal</h2>

<div className="input-group">
<input type="email" placeholder="Email Address" />
</div>

<div className="input-group">
<input type="password" placeholder="Password" />
</div>

<button className="login-btn">Login</button>

<div className="divider"></div>

<p className="signup-text">
Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>

</p>

<p className="portal-text">
AI-Enabled Admissions System
</p>

</div>

</div>

);

}

export default Login;