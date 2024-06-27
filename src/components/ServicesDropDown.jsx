import React from "react";
// import "./ServiceDropDown.css";
function ServicesDropDown() {
  return (
    <div>
      <ul
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          zIndex: 1000,
          fontSize: "16px",
          listStyleType: "none",
          boxSizing: "border-box",
          padding: "10px 0",
          width: "320px", // Increased width
          background: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <li style={{ padding: "8px 15px", cursor: "pointer" }}>
          <a
            href="#about"
            style={{
              color: "black",
              textDecoration: "none",
              display: "block",
              padding: "8px 15px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "gray";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "black";
            }}
          >
            Enterprise Software Development
          </a>
        </li>
        <li style={{ padding: "8px 15px", cursor: "pointer" }}>
          <a
            href="#history"
            style={{
              color: "black",
              textDecoration: "none",
              display: "block",
              padding: "8px 15px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "gray";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "black";
            }}
          >
            Web App Development
          </a>
        </li>
        <li style={{ padding: "8px 15px", cursor: "pointer" }}>
          <a
            href="#methodology"
            style={{
              color: "black",
              textDecoration: "none",
              display: "block",
              padding: "8px 15px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "gray";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "black";
            }}
          >
            Mobile App Developemnt
          </a>
        </li>
        <li style={{ padding: "8px 15px", cursor: "pointer" }}>
          <a
            href="#hello"
            style={{
              color: "black",
              textDecoration: "none",
              display: "block",
              padding: "8px 15px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "gray";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "black";
            }}
          >
            Application Integration
          </a>
        </li>
        <li style={{ padding: "8px 15px", cursor: "pointer" }}>
          <a
            href="#company"
            style={{
              color: "black",
              textDecoration: "none",
              display: "block",
              padding: "8px 15px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "gray";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "black";
            }}
          >
            QA and Testing
          </a>
        </li>
        <li style={{ padding: "8px 15px", cursor: "pointer" }}>
          <a
            href="#isb"
            style={{
              color: "black",
              textDecoration: "none",
              display: "block",
              padding: "8px 15px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "gray";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "black";
            }}
          >
            Dedicated Development Teams
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ServicesDropDown;
