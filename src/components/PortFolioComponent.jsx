import React from "react";
import "../styles/PortFolioComponent.css"; // Import the CSS file

function PortFolioComponent({ title, desc, imageUrl, link }) {
  return (
    <div className="col-md-4" style={{ marginBottom: 20 }}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
        style={{ cursor: "pointer" }}
      >
        <div className="portfolio-card">
          <img src={imageUrl} className="portfolio-card-img" alt={title} />
          <div className="portfolio-card-img-overlay">
            <div className="portfolio-card-body text-center">
              <h5 className="portfolio-card-title">{title}</h5>
              <p className="portfolio-card-text">{desc}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PortFolioComponent;
