import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import AllCourses from "./components/courses/AllCourses";
import { courseData } from "./data/course";

const Slider = ({ data, setData, setIsOpen }) => {
  const pafination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const n = Math.ceil(courseData.length / 8); // Or something else

  var chunk_size = 8;
  var groups = courseData
    .map(function (e, i) {
      return i % chunk_size === 0 ? courseData.slice(i, i + chunk_size) : null;
    })
    .filter(function (e) {
      return e;
    });

  return (
    <div className="text-black mb-10" style={{ direction: "ltr" }}>
      <Swiper
        pagination={pafination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[...Array(n)].map((e, i) => (
          <SwiperSlide key={i}>
            <AllCourses
              data={groups[i]}
              setData={setData}
              setIsOpen={setIsOpen}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
