// import React from "react";

// export const Testimonials = (props) => {
//   return (
//     <div id="testimonials">
//       <div className="container">
//         <div className="section-title text-center">
//           <h2>What our clients say</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   <div className="testimonial">
//                     <div className="testimonial-image">
//                       {" "}
//                       <img src={d.img} alt="" />{" "}
//                     </div>
//                     <div className="testimonial-content">
//                       <p>"{d.text}"</p>
//                       <div className="testimonial-meta"> - {d.name} </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import aiImg from "../assets/ai.jpg";
import PortFolioComponent from "./PortFolioComponent";

export const PortFolio = () => {
  const cardsData = [
    {
      title: "Artificial Intelligence",
      desc: "Harness the power of AI to automate processes, analyze data, and create smarter applications.",
      imageUrl: aiImg,
      link: "https://www.example.com",
    },
    {
      title: "Computer Vision",
      desc: "Implement cutting-edge computer vision technologies to process and analyze images and videos.",
      imageUrl: aiImg,
      link: "https://www.google.com",
    },
    {
      title: "Natural Language Processing",
      desc: "Utilize NLP to unlock valuable insights from text data, enhancing customer support and engagement.",
      imageUrl: aiImg,
      link: "https://www.google.com",
    },
    {
      title: "Document AI",
      desc: "Automate document processing with AI, improving efficiency and reducing manual tasks.",
      imageUrl: aiImg,
      link: "https://www.example.com",
    },
    {
      title: "Predictive Modeling",
      desc: "Forecast future trends and behaviors with our predictive modeling services, driving informed decision-making.",
      imageUrl: aiImg,
      link: "https://www.example.com",
    },
    {
      title: "Consultations",
      imageUrl: aiImg,
      desc: "Expert consultations to guide your journey in adopting the latest technologies for business growth.",
      link: "https://www.example.com",
    },
  ];

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="row">
          {cardsData.map((card, index) => (
            <PortFolioComponent
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              desc={card.desc}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
