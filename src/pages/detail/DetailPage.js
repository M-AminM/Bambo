import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import "../../index.css";
import { courseData } from "../../data/course";
import Hero from "../../components/detail/Hero";
import Description from "../../components/detail/Description";
import Benefit from "../../components/detail/Benefit";

const DetailPage = () => {
  const { id } = useParams();
  const filterData = courseData.filter((data) => data.url === id);
  const courseName = [
    "جاوا اسکریپت",
    "سی شارپ",
    "sass",
    "ری اکت",
    "بوت استرپ",
    "جاوا",
    "پایتون",
    "انگولار",
    "اچ تا ام ال",
    "سی اس اس",
  ];

  return (
    <Fragment>
      <Hero filterData={filterData} />
      <Description filterData={filterData} />
      <Benefit filterData={filterData} courseName={courseName} />
    </Fragment>
  );
};

export default DetailPage;
