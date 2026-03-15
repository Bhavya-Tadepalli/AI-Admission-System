import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    alert("Registration Successful!");

    // redirect to login page
    navigate("/login");
  };

  const containerStyle = {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial"
  };

  const leftStyle = {
    flex: 1,
    background: "#ffc0cb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center"
  };

  const rightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff0f5"
  };

  const formStyle = {
    width: "320px",
    display: "flex",
    flexDirection: "column"
  };

  const inputStyle = {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "12px",
    background: "#ff5c8a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  };

  return (

    <div style={containerStyle}>

      {/* Left Image Section */}

      <div style={leftStyle}>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="student"
          width="200"
        />

        <h2>Join AI Admissions Portal</h2>
        <p>Start your admission journey today</p>

      </div>


      {/* Signup Form */}

      <div style={rightStyle}>

        <form style={formStyle} onSubmit={handleSignup}>

          <h1 style={{color:"#ff5c8a"}}>Create Account</h1>

          <input
            style={inputStyle}
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            required
          />

          <input
            style={inputStyle}
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            required
          />

          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>

        </form>

      </div>

    </div>

  );
}

export default Signup;
