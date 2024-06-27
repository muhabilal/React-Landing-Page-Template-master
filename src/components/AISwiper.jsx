import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/AISwiper.css";
import { Autoplay, Pagination } from "swiper/modules";
import Pic from "../assets/bg-circle.png";

function AISwiper() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Wireframes",
      description:
        "Iflexion utilizes wireframing as a basic technique to reduce the cost and risk involved in developing complex interactive systems. We follow a rapid iterative refinement approach, acquiring essential feedback early in the process and bringing focus to objectives, scenarios and intended functionality with increasing levels of fidelity.",
      image: Pic,
    },
    {
      title: "Graphic Mockups",
      description: "Description for Graphic Mockups...",
      image: Pic,
    },
    {
      title: "Clickable Prototypes",
      description: "Description for Clickable Prototypes...",
      image: Pic,
    },
    {
      title: "Proof-of-Concept",
      description: "Description for Proof-of-Concept...",
      image: Pic,
    },
  ];

  const handleButtonClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="swiper-container">
        <h3 className="swiper-title">WIREFRAMING AND PROTOTYPING</h3>
        <div className="custom-buttons container">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`swiper-button ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {slide.title.toUpperCase()}
            </button>
          ))}
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="text-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <div className="image-content">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default AISwiper;
