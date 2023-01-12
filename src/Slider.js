import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import AllCourses from "./components/courses/AllCourses";

const Slider = ({ data, setData, setIsOpen }) => {
  const pafination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="text-black mb-10" style={{ direction: "ltr" }}>
      <Swiper
        pagination={pafination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <AllCourses data={data} setData={setData} setIsOpen={setIsOpen} />    
        </SwiperSlide>

        <SwiperSlide>
          <AllCourses data={data} setData={setData} setIsOpen={setIsOpen} />
        </SwiperSlide>

        <SwiperSlide>
          <AllCourses data={data} setData={setData} setIsOpen={setIsOpen} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
