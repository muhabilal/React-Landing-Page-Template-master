// import React from "react";

// function ExpertiesDropDown() {
//   return (
//     <>
//       <ul
//         style={{
//           position: "absolute",
//           top: "100%",
//           left: 0,
//           right: 0, // added to ensure full width
//           zIndex: 1000,
//           fontSize: "16px",
//           listStyleType: "none",
//           boxSizing: "border-box",
//           padding: "10px 0",
//           background: "#fff",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           borderRadius: "4px",
//           // margin: 0, // added to remove default margin
//           width: "100vw", // ensures full viewport width
//         }}
//       >
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#about" style={{ color: "black", textDecoration: "none" }}>
//             Hello
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#history" style={{ color: "black", textDecoration: "none" }}>
//             Pakistan
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a
//             href="#methodology"
//             style={{ color: "black", textDecoration: "none" }}
//           >
//             Methodology
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#hello" style={{ color: "black", textDecoration: "none" }}>
//             Business Continuity
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#company" style={{ color: "black", textDecoration: "none" }}>
//             Quality Management
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#isb" style={{ color: "black", textDecoration: "none" }}>
//             Security and IP Protection
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#lahore" style={{ color: "black", textDecoration: "none" }}>
//             Engagement Models
//           </a>
//         </li>
//       </ul>
//     </>
//   );
// }

// export default ExpertiesDropDown;

// import React from "react";

// function ExpertiesDropDown() {
//   return (
//     <div style={{ position: "fixed", left: 0, width: "100vw", top: "60px" }}>
//       <ul
//         style={{
//           position: "absolute",
//           top: "0",
//           left: "0",
//           right: "0",
//           zIndex: 1000,
//           fontSize: "16px",
//           listStyleType: "none",
//           boxSizing: "border-box",
//           padding: "10px 0",
//           background: "#fff",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           // borderRadius: "4px",
//           margin: 0,
//           width: "100%",
//         }}
//       >
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a
//             href="#about"
//             style={{
//               color: "black",
//               textDecoration: "none",
//               display: "block",
//               padding: "8px 15px",
//               transition: "all 0.3s",
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = "gray";
//               e.target.style.color = "#fff";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = "transparent";
//               e.target.style.color = "black";
//             }}
//           >
//             Hello
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#history" style={{ color: "black", textDecoration: "none" }}>
//             Pakistan
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a
//             href="#methodology"
//             style={{ color: "black", textDecoration: "none" }}
//           >
//             Methodology
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#hello" style={{ color: "black", textDecoration: "none" }}>
//             Business Continuity
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#company" style={{ color: "black", textDecoration: "none" }}>
//             Quality Management
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#isb" style={{ color: "black", textDecoration: "none" }}>
//             Security and IP Protection
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#lahore" style={{ color: "black", textDecoration: "none" }}>
//             Engagement Models
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default ExpertiesDropDown;

import React from "react";
import "../styles/ExpertiesDropDown.css";
function ExpertiesDropDown() {
  return (
    <div style={{ position: "fixed", left: 0, width: "100vw", top: "60px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "10px", // space between columns
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 1000,
          fontSize: "16px",
          boxSizing: "border-box",
          padding: "10px",
          background: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          margin: 0,
          width: "100%",
        }}
      >
        <div>
          <h4 style={{ fontWeight: "bold" }}>Business Solution</h4>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li style={{ cursor: "pointer" }}>
              <a
                href="#web"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "block",
                  padding: "8px 15px",
                  transition: "all 0.3s",
                  fontWeight: 1,
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
                Web and Enterprise Portals
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#internet"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "block",
                  padding: "8px 15px",
                  transition: "all 0.3s",
                  fontWeight: 1,
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
                Intranets
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#mobile"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "block",
                  padding: "8px 15px",
                  transition: "all 0.3s",
                  fontWeight: 1,
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
                Enterprise Mobile Apps
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#training"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "block",
                  padding: "8px 15px",
                  transition: "all 0.3s",
                  fontWeight: 1,
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
                Ecommerce
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#training"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "block",
                  padding: "8px 15px",
                  transition: "all 0.3s",
                  fontWeight: 1,
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
                Elearning and Online Training
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#business"
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
                Fleet Management
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#lahore"
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
                Media Content Distribution
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#pakistan"
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
                Business Process Automation
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
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
                Business Intelligence
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#fsd"
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
                Software Security
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontWeight: "bold" }}>Development Stack</h4>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#sales"
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
                Salesforce
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#online"
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
                SharePoint
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#computer"
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
                Artificial Intelligence
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#reality"
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
                Computer Vision
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#internet"
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
                Augmented Reality
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#internet"
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
                Mobile Platforms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#net"
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
                .Net
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#java"
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
                Java
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#js"
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
                Python
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#python"
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
                Ruby on Rails
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#ruby"
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
                PHP
              </a>
            </li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>
              <a
                href="#php"
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
                Backend
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExpertiesDropDown;
