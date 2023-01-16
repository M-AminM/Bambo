import React, { Fragment } from "react";
import "../../index.css";
import Slider from "../../Slider";
import Head from "../../components/courses/Head";

const Courses = ({ data, setData, setIsOpen }) => {
  return (
    <Fragment>
      <Head />
      <Slider data={data} setData={setData} setIsOpen={setIsOpen} />

    </Fragment>
  );
};

export default Courses;
