import React, { Fragment } from "react";
import "../../index.css";
import Slider from "../../Slider";
import Footer from "../footer/Footer";

const Courses = ({ data, setData, setIsOpen }) => {
  return (
    <Fragment>
      <div className="gradient_courses py-2.5 px-14 md:px-7 h-28">
        <div className="flex justify-end h-full pt-10">
          <img className="w-6 pt-1" src="/assets/magnifying.svg" />
          <input
            className="w-full border-none outline-0 px-4 py-2 bg-transparent"
            placeholder="جستوجو ..."
          />
        </div>
      </div>
      <Slider data={data} setData={setData} setIsOpen={setIsOpen} />
      <Footer />
    </Fragment>
  );
};

export default Courses;
