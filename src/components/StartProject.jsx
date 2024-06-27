import React from "react";
import "../styles/StartProject.css";

function StartProject() {
  return (
    <div className="project-container">
      <h2 className="sectionTitle">WANT TO START A PROJECT</h2>
      <div className="form-card">
        <div className="form-row">
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Company Name" required />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
        </div>
        <div className="form-row">
          <textarea
            className="description-area"
            placeholder="Description"
            required
          />
        </div>
        <button>Submit</button>
        <p>
          By submitting this form I give my consent for Iflexion to process my
          personal data pursuant to Iflexion Privacy and Cookies Policy.
        </p>
      </div>
    </div>
  );
}

export default StartProject;
