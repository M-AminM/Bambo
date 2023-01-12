import React from "react";
import "../../index.css";

const About = () => {
  return (
    <section className="h-screen gradient_about flex justify-end items-end md:flex-col">
      <div className="about_box flex flex-col justify-center items-center gap-4">
        <img className="w-10" src="/assets/hat.svg" />
        <span>576 دانشجو</span>
        <p className="text-center px-6">
          تا کنون بیش از 500 نفر از آموزش های بامبو استفاده کرده اند .و نظرات
          خودشونو ثبت کرده اند
        </p>
      </div>
      <div className="about_box mx-1 flex flex-col justify-center items-center gap-4 md:my-1 md:mx-0">
        <img className="w-10" src="/assets/talking.svg" />
        <span>34 استاد</span>
        <p className="text-center px-6">
          بیش از 30 استاد ، از برترین اساتید ایران همراه ما هستند .و دوره های
          خودشونو ثبت کرده اند
        </p>
      </div>
      <div className="about_box flex flex-col justify-center items-center gap-4">
        <img className="w-10" src="/assets/course.svg" />
        <span>219 دوره</span>
        <p className="text-center px-6">
          تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت .در سایت ثبت شده و
          قابل دسترسی است
        </p>
      </div>
    </section>
  );
};

export default About;
