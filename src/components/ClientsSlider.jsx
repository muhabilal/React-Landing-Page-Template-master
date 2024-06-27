import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ClientsSlider.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
<div>AISwiper</div>;
import py from "../assets/python2.png";
import docker from "../assets/docker3.png";
import tf from "../assets/tf.png";
import keras from "../assets/keras.png";
import aws from "../assets/awsec2.png";
import lambda from "../assets/lambda.png";
import kubernates from "../assets/kubernates.png";
import opencv from "../assets/opencv.png";

const ClientsSlider = () => {
  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={6}
          autoplay={{
            delay: 3000, // Delay in milliseconds
            disableOnInteraction: false,
          }}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper1 "
        >
          <SwiperSlide>
            <img src={py} alt="Python" className="change-opc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={docker} alt="Docker" className="change-opc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tf} alt="TensorFlow" className="change-opc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={keras} alt="Keras" className="change-opc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aws} alt="AWS EC2" className="change-opc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={lambda} alt="AWS Lambda" className="change-opc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={kubernates} alt="Kubernetes" className="change-opc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opencv} alt="OpenCV" className="change-opc" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ClientsSlider;
