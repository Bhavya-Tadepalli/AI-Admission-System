import React, { useState, useEffect } from "react";
import "./apply.css";

function Apply() {

  const [showForm, setShowForm] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const [mains, setMains] = useState("no");
  const [eamcet, setEamcet] = useState("no");
  const [vsat, setVsat] = useState("no");

  useEffect(() => {

    const existingApplication = localStorage.getItem("studentApplication");

    if(existingApplication){
      setApplicationSubmitted(true);
    }

  }, []);

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

    const applicationData = {
      applied:true,
      date:new Date().toLocaleString()
    };

    localStorage.setItem("studentApplication", JSON.stringify(applicationData));

    setApplicationSubmitted(true);

    alert("Application Submitted Successfully!");

  };

  const handleEdit = () => {

    setApplicationSubmitted(false);
    setShowForm(true);

  };

  return (

    <div className="apply-container">

      {/* Dashboard if already applied */}

      {applicationSubmitted && !showForm && !showExam && (

        <div className="apply-box">

          <h1>Application Submitted</h1>

          <p>You have already applied for admission.</p>

          <button onClick={handleEdit}>
            Edit Application
          </button>

        </div>

      )}

      {/* Start Page */}

      {!showForm && !showExam && !applicationSubmitted && (

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

            <label>Student Name *</label>
            <input type="text" required />

            <label>Email *</label>
            <input type="email" required />

            <label>Phone *</label>
            <input type="tel" required />

            <label>Address *</label>
            <textarea required></textarea>

            <label>10th Marks *</label>
            <input type="number" required />

            <label>Upload 10th Marksheet *</label>
            <input type="file" required />

            <label>12th Marks *</label>
            <input type="number" required />

            <label>Upload 12th Marksheet *</label>
            <input type="file" required />

            <label>Preferred Course *</label>

            <select required>

              <option value="">Select Course</option>
              <option>B.Tech</option>
              <option>B.Sc</option>
              <option>B.Com</option>
              <option>BBA</option>
              <option>BA</option>

            </select>

            <label>Preferred College *</label>
            <input type="text" required />

            <button type="submit">
              Continue
            </button>

          </form>

        </div>

      )}

      {/* Entrance Exams */}

      {showExam && (

        <div className="form-box">

          <h2>Entrance Exam Details (Optional)</h2>

          <form onSubmit={handleFinalSubmit}>

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