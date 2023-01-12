import React, { Fragment } from "react";
import "../../index.css";
import About from "./About";
import Courses from "./Courses";
import Work from "./Work";
import News from "./News";
import Suggest from "./Suggest";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <section className="home_page py-2.5 px-14 md:px-7">
        {/* <Header /> */}
        <div
          className="flex flex-col justify-end gap-10"
          style={{ height: "70vh" }}
        >
          <h1 className="font-bold text-5xl md:text-2xl">
            باید راه بهتری برای آموزش ساخته میشد,
            <p className="pt-4">پس ما ساختیمش ...</p>
          </h1>
          <p className="w-2/5 md:w-full">
            سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین
            آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم
            بتوانیم با راهکار های نوین ، فرصتی . برای افراد خواهان پیشرفت فراهم
            کنیم
          </p>

          <button className="bg-white w-40 px-2 py-2 text-black">
            مشاهده دوره ها
          </button>
        </div>
        <div className="flex pt-10">
          <button>
            <img
              className="w-8 h-full gradient pr-2"
              src="/assets/magnifying.svg"
              alt="magnifying"
            />
          </button>

          <input
            className="px-4 py-2 gradient w-full border-hidden outline-0"
            placeholder="جستوجو"
          />
        </div>
      </section>
      <About />
      <Courses />
      <Work />
      <News />
      <Suggest />
      <Footer />
    </Fragment>
  );
};

export default Home;
