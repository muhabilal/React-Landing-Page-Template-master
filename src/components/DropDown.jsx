// import React from "react";

// function DropDown() {
//   return (
//     <div>
//       <ul
//         style={{
//           position: "absolute",
//           top: "100%",
//           left: 0,
//           zIndex: 1000,
//           fontSize: "16px",
//           listStyleType: "none",
//           boxSizing: "border-box",
//           padding: "10px 0",
//           width: "250px", // Increased width
//           background: "#fff",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           borderRadius: "4px",
//         }}
//       >
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#about" style={{ color: "black", textDecoration: "none" }}>
//             About
//           </a>
//         </li>
//         <li style={{ padding: "8px 15px", cursor: "pointer" }}>
//           <a href="#history" style={{ color: "black", textDecoration: "none" }}>
//             History
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
//             Business Continuuity
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

// export default DropDown;

import React from "react";

function DropDown() {
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
          width: "250px", // Increased width
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
            About
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
            History
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
            Methodology
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
            Business Continuity
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
            Quality Management
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
            Security and IP Protection
          </a>
        </li>
        <li style={{ padding: "8px 15px", cursor: "pointer" }}>
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
            Engagement Models
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
