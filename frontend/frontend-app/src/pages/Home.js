import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import "./home.css";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-container">

      {/* Navbar */}

      <div className="navbar">

        <h2 className="logo">AI Admissions Portal</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/apply">Apply</Link>
        </div>

      </div>


      {/* Hero Section */}

      <div className="hero">

        <div className="hero-text">

          <h1>Welcome to AI-Enabled Admissions System</h1>

          <p>
            Find the best college based on your marks and entrance exams
          </p>

          <button onClick={() => navigate("/login")} className="hero-btn">
            Apply Now
          </button>

        </div>


        <div className="hero-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            alt="books"
          />

        </div>

      </div>


      {/* How it Works */}

      <div className="how-section">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
              alt="form"
              className="step-img"
            />

            <h3>Step 1</h3>
            <p>Fill Application Form</p>

          </div>


          <div className="step">

            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="exam"
              className="step-img"
            />

            <h3>Step 2</h3>
            <p>Enter Marks & Entrance Exam Details</p>

          </div>


          <div className="step">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
              alt="college"
              className="step-img"
            />

            <h3>Step 3</h3>
            <p>Get College Recommendations</p>

          </div>

        </div>

      </div>


      {/* Courses */}

      <div className="courses">

        <h2>Popular Courses</h2>

        <div className="course-list">

          <div className="course">
            <img src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png" alt="btech"/>
            <p>B.Tech</p>
          </div>

          <div className="course">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="bsc"/>
            <p>B.Sc</p>
          </div>

          <div className="course">
            <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="bcom"/>
            <p>B.Com</p>
          </div>

          <div className="course">
            <img src="https://cdn-icons-png.flaticon.com/512/4149/4149676.png" alt="bba"/>
            <p>BBA</p>
          </div>

          <div className="course">
            <img src="https://cdn-icons-png.flaticon.com/512/2784/2784487.png" alt="ba"/>
            <p>BA</p>
          </div>

        </div>

      </div>


      {/* Footer */}

      <div className="footer">
        <p>© 2026 AI Admissions Portal</p>
      </div>


      {/* Chatbot */}

      <Chatbot />

    </div>

  );
}

export default Home;