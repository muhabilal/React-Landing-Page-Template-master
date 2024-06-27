// import React from "react";
// import "./WhyUs.css";
// import pic from "../assets/convaite.jpeg";

// const WhyUs = () => {
//   return (
//     <section id="why-us" className="why-us">
//       <div className="container-fluid">
//         <div className="row">
//           <div
//             className="col-lg-5 align-items-stretch position-relative video-box"
//             data-aos="fade-right"
//           >
//             <img
//               src={pic}
//               alt="Why Us"
//               style={{ width: "90%", height: "auto" }}
//             />
//           </div>
//           <div
//             className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch"
//             data-aos="fade-left"
//           >
//             <div className="content">
//               <h3>
//                 Why Choose <strong>Convaite</strong> for Your AI Journey
//               </h3>
//               <p>
//                 At Convaite, we're not just about implementing technology. We're
//                 about transforming your business with AI to unlock new
//                 potentials. Discover why we're the right partner for your AI
//                 innovation journey.
//               </p>
//             </div>
//             {/* accordion  */}
//             <div className="accordion-list accordion">
//               <ul>
//                 <li data-aos="fade-up" data-aos-delay="100">
//                   <a
//                     data-bs-toggle="collapse"
//                     className="collapse"
//                     data-bs-target="#accordion-list-1"
//                   >
//                     <span>01</span> Tailored AI Solutions: How do we address
//                     your unique challenges?
//                     <i className="bx bx-chevron-down icon-show"></i>
//                     <i className="bx bx-chevron-up icon-close"></i>
//                   </a>
//                   <div
//                     id="accordion-list-1"
//                     className="collapse show"
//                     data-bs-parent=".accordion-list"
//                   >
//                     <p>
//                       Every business has its unique set of challenges. At
//                       Convaite, we pride ourselves on developing custom AI
//                       solutions tailored to your specific needs, ensuring that
//                       you can leverage the full power of AI technologies to meet
//                       your business objectives efficiently.
//                     </p>
//                   </div>
//                 </li>

//                 <li data-aos="fade-up" data-aos-delay="200">
//                   <a
//                     data-bs-toggle="collapse"
//                     data-bs-target="#accordion-list-2"
//                     className="collapsed"
//                   >
//                     <span>02</span> Expertise & Experience: What sets our team
//                     apart? <i class="bx bx-chevron-down icon-show"></i>
//                     <i class="bx bx-chevron-up icon-close"></i>
//                   </a>
//                   <div
//                     id="accordion-list-2"
//                     className="collapse"
//                     data-bs-parent=".accordion-list"
//                   >
//                     <p>
//                       Our team consists of industry-leading AI experts and data
//                       scientists with years of experience in deploying AI
//                       technologies across various sectors. This deep expertise
//                       allows us to deliver solutions that are not only
//                       innovative but also practical and effective.
//                     </p>
//                   </div>
//                 </li>

//                 <li data-aos="fade-up" data-aos-delay="300">
//                   <a
//                     data-bs-toggle="collapse"
//                     data-bs-target="#accordion-list-3"
//                     className="collapsed"
//                   >
//                     <span>03</span> Continuous Support & Evolution: How do we
//                     ensure your AI solutions remain cutting-edge?{" "}
//                     <i className="bx bx-chevron-down icon-show"></i>
//                     <i className="bx bx-chevron-up icon-close"></i>
//                   </a>
//                   <div
//                     id="accordion-list-3"
//                     className="collapse"
//                     data-bs-parent=".accordion-list"
//                   >
//                     <p>
//                       AI technology evolves rapidly. We ensure that your
//                       business stays ahead by offering continuous support and
//                       updates to your AI solutions. Our commitment is to not
//                       just launch solutions but to evolve them alongside your
//                       growing needs and the advancements in AI technology.
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;
import React from "react";
import "../styles/WhyUs.css";
import pic from "../assets/convaite.jpeg";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-5 align-items-stretch position-relative video-box"
            data-aos="fade-right"
          >
            <img
              src={pic}
              alt="Why Us"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
          <div
            className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch"
            data-aos="fade-left"
          >
            <div className="content">
              <h3>
                Why Choose <strong>Convaite</strong> for Your AI Journey
              </h3>
              <p>
                At Convaite, we're not just about implementing technology. We're
                about transforming your business with AI to unlock new
                potentials. Discover why we're the right partner for your AI
                innovation journey.
              </p>
            </div>

            {/* accordion */}
            <div className="panel-group accordion-list" id="accordion">
              <div
                className="panel panel-default"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                    >
                      <span>01</span> Tailored AI Solutions: How do we address
                      your unique challenges?
                      <i className="glyphicon glyphicon-chevron-down icon-show"></i>
                      <i className="glyphicon glyphicon-chevron-up icon-close"></i>
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">
                    Every business has its unique set of challenges. At
                    Convaite, we pride ourselves on developing custom AI
                    solutions tailored to your specific needs, ensuring that you
                    can leverage the full power of AI technologies to meet your
                    business objectives efficiently.
                  </div>
                </div>
              </div>
              <div
                className="panel panel-default"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                    >
                      <span>02</span> Expertise & Experience: What sets our team
                      apart?
                      <i className="glyphicon glyphicon-chevron-down icon-show"></i>
                      <i className="glyphicon glyphicon-chevron-up icon-close"></i>
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    Our team consists of industry-leading AI experts and data
                    scientists with years of experience in deploying AI
                    technologies across various sectors. This deep expertise
                    allows us to deliver solutions that are not only innovative
                    but also practical and effective.
                  </div>
                </div>
              </div>
              <div
                className="panel panel-default"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                    >
                      <span>03</span> Continuous Support & Evolution: How do we
                      ensure your AI solutions remain cutting-edge?
                      <i className="glyphicon glyphicon-chevron-down icon-show"></i>
                      <i className="glyphicon glyphicon-chevron-up icon-close"></i>
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    AI technology evolves rapidly. We ensure that your business
                    stays ahead by offering continuous support and updates to
                    your AI solutions. Our commitment is to not just launch
                    solutions but to evolve them alongside your growing needs
                    and the advancements in AI technology.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
