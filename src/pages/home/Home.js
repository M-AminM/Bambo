import React, { Fragment } from "react";
import "../../index.css";
import About from "../../components/home/About";
import Courses from "../../components/home/Courses";
import Work from "../../components/home/Work";
import News from "../../components/home/News";
import Suggest from "../../components/home/Suggest";
import Hero from "../../components/home/Hero";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Courses />
      <Work />
      <News />
      <Suggest />
    </Fragment>
  );
};

export default Home;
