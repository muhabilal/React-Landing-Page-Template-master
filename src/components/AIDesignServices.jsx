import React from "react";
import "../styles/AIDesignServices.css";
import Pic from "../assets/bg-circle.png";
function DesignServices() {
  const services = [
    {
      title: "EXPERIENCE DESIGN",
      description: ["Interaction design", "Usability engineering"],
      icon: "fa fa-lightbulb-o",
      color: "orange",
    },
    {
      title: "WEBSITE DESIGN",
      description: [
        "Responsive and adaptive websites",
        "Intranets, e-commerce, promo sites",
      ],
      icon: "fa fa-pencil",
      color: "red",
    },
    {
      title: "USABILITY AUDIT",
      description: [
        "Information architecture audit",
        "Content inventory, sitemap analysis",
      ],
      icon: "fa fa-search",
      color: "cyan",
    },
    {
      title: "MOBILE DESIGN",
      description: ["Smartphone and tablet", "iOS, Android, Windows Phone"],
      icon: "fa fa-mobile",
      color: "blue",
    },
    {
      title: "WEB INTERFACE DESIGN",
      description: ["GUI guidelines compliance", "Heuristic principles"],
      icon: "fa fa-window-restore",
      color: "green",
    },
    {
      title: "CORPORATE IDENTITY",
      description: ["Logo design", "Branding guidelines"],
      icon: "fa fa-star",
      color: "darkblue",
    },
  ];

  return (
    <div className="design-services-container">
      <div className="circle">
        {services.map((service, index) => (
          <div key={index} className={`service ${service.color}`}>
            <i className={`fa ${service.icon}`} />
            <h3>{service.title}</h3>
            {service.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        ))}
        <div className="center-circle">
          <img src={Pic} alt="center" />
          <h1 className="img-text">DESIGN SERVICES</h1>
        </div>
      </div>
    </div>
  );
}

export default DesignServices;
