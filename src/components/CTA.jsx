import React from "react";
import "../styles/CTA.css"; // Adjust the path as necessary
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
const CTA = () => {
  return (
    // <section id="cta" className="cta">
    //   <div className="container">
    //     <div className="row" data-aos="zoom-in">
    //       <div className="col-lg-9  text-lg-start">
    //         <h3>Transform Your Business with AI</h3>
    //         <p>
    //           At Convaite, we harness the power of artificial intelligence to
    //           drive innovation, streamline operations, and unlock new
    //           opportunities for businesses. Whether you're looking to enhance
    //           customer experience, optimize processes, or gain actionable
    //           insights from your data, our AI solutions are tailored to meet
    //           your unique needs. Don't let your business fall behind in the
    //           digital age. Discover the potential of AI with Convaite.
    //         </p>
    //       </div>
    //       <div className="col-lg-3 cta-btn-container">
    //         <a className="cta-btn align-middle" href="#">
    //           Explore AI Solutions
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="cta" className="cta">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-9 text-lg-start">
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <h3>Transform Your Business with AI</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInLeft" delay={1000}>
              <p>
                At Convaite, we harness the power of artificial intelligence to
                drive innovation, streamline operations, and unlock new
                opportunities for businesses. Whether you're looking to enhance
                customer experience, optimize processes, or gain actionable
                insights from your data, our AI solutions are tailored to meet
                your unique needs. Don't let your business fall behind in the
                digital age. Discover the potential of AI with Convaite.
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 cta-btn-container">
            <ScrollAnimation animateIn="animate__fadeInRight">
              <a className="cta-btn align-middle" href="#">
                Explore AI Solutions
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
