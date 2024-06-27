// import React from "react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// <header id="header">
//   <div className="intro">
//     <div className="overlay">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 col-md-offset-2 intro-text">
//             <h1>
//               {props.data ? props.data.title : "Loading"}
//               <span></span>
//             </h1>
//             <p>{props.data ? props.data.paragraph : "Loading"}</p>
//             <a
//               href="#features"
//               className="btn btn-custom btn-lg page-scroll"
//             >
//               Learn More
//             </a>{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/header.css";
import "animate.css";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { ThemeContext } from "../ThemeContext";

export const Header = (props) => {
  const theme = useContext(ThemeContext);

  // Function to add animation classes
  const addAnimationClasses = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.querySelectorAll(".animate__animated").forEach((element) => {
      element.classList.remove(
        "animate__fadeIn",
        "animate__fadeInDown",
        "animate__fadeInUp"
      );
      void element.offsetWidth; // trigger reflow
      element.classList.add(
        "animate__fadeIn",
        "animate__fadeInDown",
        "animate__fadeInUp"
      );
    });
  };

  return (
    <>
      <Swiper
        style={{ background: theme.primary }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => addAnimationClasses(swiper)}
        onSwiper={(swiper) => addAnimationClasses(swiper)}
        autoplay={{
          delay: 6000, // Delay in milliseconds
          disableOnInteraction: false,
        }}
        loop={true} // Enables looping
      >
        <SwiperSlide>
          <div
            className="animate__animated animate__fadeIn"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="animate__animated animate__fadeInDown"
              style={{
                color: theme.whitecolor,
                fontSize: "50px",
                fontWeight: 700,
                marginBottom: "30px",
                animationDelay: "0.5s",
              }}
            >
              Welcome to Convaite
            </h1>
            <p
              className="animate__animated animate__fadeInUp"
              style={{ color: theme.whitecolor, animationDelay: "1s" }}
            >
              Unlock the full potential of your business with our cutting-edge
              AI solutions. From predictive analytics to
            </p>
            <p
              className="animate__animated animate__fadeInUp"
              style={{
                color: theme.whitecolor,
                textAlign: "center",
                animationDelay: "1.5s",
              }}
            >
              automated customer service, let's innovate together.
            </p>
            <button
              className="animate__animated animate__fadeInUp button-hover-effect"
              // style={{
              //   fontWeight: 500,
              //   fontSize: "14px",
              //   letterSpacing: "1px",
              //   display: "inline-block",
              //   padding: "12px 32px",
              //   borderRadius: "50px",
              //   transition: "0.5s",
              //   lineHeight: 1,
              //   margin: "10px",
              //   color: "#fff",
              //   background: theme.primary,
              //   border: "2px solid #f9f2f2",
              //   animationDelay: "2s",
              // }}
            >
              Discover More
            </button>
          </div>
        </SwiperSlide>

        {/* 2nd slider */}
        <SwiperSlide>
          <div
            className="animate__animated animate__fadeIn"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="animate__animated animate__fadeInDown"
              style={{
                color: theme.whitecolor,
                fontSize: "50px",
                fontWeight: 700,
                marginBottom: "30px",
                animationDelay: "0.5s",
              }}
            >
              Transform Your Data into Insights
            </h1>
            <p
              className="animate__animated animate__fadeInUp"
              style={{ color: theme.whitecolor, animationDelay: "1s" }}
            >
              Leverage the power of machine learning and data analytics to make
              informed decisions, optimize
            </p>
            <p
              className="animate__animated animate__fadeInUp"
              style={{
                color: theme.whitecolor,
                textAlign: "center",
                animationDelay: "1.5s",
              }}
            >
              operations, and create personalized customer experiences.
            </p>
            <button
              className="animate__animated animate__fadeInUp button-hover-effect"
              // style={{
              //   fontWeight: 500,
              //   fontSize: "14px",
              //   letterSpacing: "1px",
              //   display: "inline-block",
              //   padding: "12px 32px",
              //   borderRadius: "50px",
              //   transition: "0.5s",
              //   lineHeight: 1,
              //   margin: "10px",
              //   color: "#fff",
              //   background: theme.primary,
              //   border: "2px solid #f9f2f2",
              //   animationDelay: "2s",
              // }}
            >
              Learn How
            </button>
          </div>
        </SwiperSlide>

        {/* 3rd slider */}
        <SwiperSlide>
          <div
            className="animate__animated animate__fadeIn"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="animate__animated animate__fadeInDown"
              style={{
                color: theme.whitecolor,
                fontSize: "50px",
                fontWeight: 700,
                marginBottom: "30px",
                animationDelay: "0.5s",
              }}
            >
              Empower Your Business with AI
            </h1>
            <p
              className="animate__animated animate__fadeInUp"
              style={{ color: theme.whitecolor, animationDelay: "1s" }}
            >
              Embrace the future by integrating AI into your workflows. Our
              solutions are designed to enhance
            </p>
            <p
              className="animate__animated animate__fadeInUp"
              style={{
                color: theme.whitecolor,
                textAlign: "center",
                animationDelay: "1.5s",
              }}
            >
              efficiency, reduce costs, and drive innovation.
            </p>
            <button
              className="animate__animated animate__fadeInUp button-hover-effect"
              // style={{
              //   fontWeight: 500,
              //   fontSize: "14px",
              //   letterSpacing: "1px",
              //   display: "inline-block",
              //   padding: "12px 32px",
              //   borderRadius: "50px",
              //   transition: "0.5s",
              //   lineHeight: 1,
              //   margin: "10px",
              //   color: "#fff",
              //   background: theme.primary,
              //   border: "2px solid #f9f2f2",
              //   animationDelay: "2s",
              // }}
            >
              Get Started
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
