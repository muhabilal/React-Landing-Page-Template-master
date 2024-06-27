import React from "react";
import "../styles/AIHeader.css"; // Make sure to create and import your CSS file

function AIHeader({ title }) {
  return (
    <div className="header-container">
      <div className="container header-text">
        {/* <h1>UX DESIGN AND PROTOTYPING</h1> */}
        <h1>{title}</h1>
        <p>
          We make complex functionality apps simple, and simple user interfaces
          engaging.
        </p>
      </div>
    </div>
  );
}

export default AIHeader;
