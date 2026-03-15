import React, { useState } from "react";
import "./apply.css";

function Apply() {

  const [showForm, setShowForm] = useState(false);
  const [showExam, setShowExam] = useState(false);

  const [mains, setMains] = useState("no");
  const [eamcet, setEamcet] = useState("no");
  const [vsat, setVsat] = useState("no");

  const handleStart = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowExam(true);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="apply-container">

      {/* Start Page */}

      {!showForm && !showExam && (

        <div className="apply-box">

          <h1>Apply Now</h1>
          <p>Welcome to the AI Admissions Application Page</p>

          <button onClick={handleStart}>
            Start Application
          </button>

        </div>

      )}

      {/* Application Form */}

      {showForm && (

        <div className="form-box">

          <h2>Student Application Form</h2>

          <form onSubmit={handleSubmit}>

            <label>Student Name <span className="star">*</span></label>
            <input
              type="text"
              pattern="[A-Za-z ]{3,}"
              required
            />

            <label>Email <span className="star">*</span></label>
            <input type="email" required />

            <label>Phone Number <span className="star">*</span></label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              required
            />

            <label>Address <span className="star">*</span></label>
            <textarea required></textarea>

            {/* 10th Marks */}

            <label>10th Marks <span className="star">*</span></label>
            <input
              type="number"
              required
            />

            <label>Upload 10th Marksheet <span className="star">*</span></label>
            <input type="file" required />

            {/* 12th Marks */}

            <label>12th Marks <span className="star">*</span></label>
            <input
              type="number"
              required
            />

            <label>Upload 12th Marksheet <span className="star">*</span></label>
            <input type="file" required />

            {/* Course */}

            <label>Preferred Course <span className="star">*</span></label>

            <select required>

              <option value="">Select Course</option>
              <option>B.Tech</option>
              <option>B.Sc</option>
              <option>B.Com</option>
              <option>BBA</option>
              <option>BA</option>

            </select>

            <label>Preferred College <span className="star">*</span></label>
            <input type="text" required />

            <button type="submit">
              Continue
            </button>

          </form>

        </div>

      )}

      {/* Entrance Exam Section */}

      {showExam && (

        <div className="form-box">

          <h2>Entrance Exam Details (Optional)</h2>

          <form onSubmit={handleFinalSubmit}>

            {/* JEE */}

            <label>Have you written JEE Mains?</label>

            <select onChange={(e)=>setMains(e.target.value)}>

              <option value="no">No</option>
              <option value="yes">Yes</option>

            </select>

            {mains === "yes" && (
              <>
                <label>JEE Marks</label>
                <input type="number" />

                <label>Upload JEE Scorecard</label>
                <input type="file" />
              </>
            )}

            {/* EAMCET */}

            <label>Have you written EAMCET?</label>

            <select onChange={(e)=>setEamcet(e.target.value)}>

              <option value="no">No</option>
              <option value="yes">Yes</option>

            </select>

            {eamcet === "yes" && (
              <>
                <label>EAMCET Marks</label>
                <input type="number" />

                <label>Upload EAMCET Scorecard</label>
                <input type="file" />
              </>
            )}

            {/* VSAT */}

            <label>Have you written VSAT?</label>

            <select onChange={(e)=>setVsat(e.target.value)}>

              <option value="no">No</option>
              <option value="yes">Yes</option>

            </select>

            {vsat === "yes" && (
              <>
                <label>VSAT Marks</label>
                <input type="number" />

                <label>Upload VSAT Scorecard</label>
                <input type="file" />
              </>
            )}

            <button type="submit">
              Submit Application
            </button>

          </form>

        </div>

      )}

    </div>
  );
}

export default Apply;