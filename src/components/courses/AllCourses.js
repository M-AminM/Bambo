import React, { useState } from "react";
import { courseData } from "../../data/course";
import Footer from "../footer/Footer";

const AllCourses = ({ data, setData, setIsOpen }) => {
  return (
    <>
      <section className="px-14 py-7 mb-10">
        <div
          className="w-full flex justify-between md:flex-col gap-6"
          style={{ direction: "rtl" }}
        >
          <h1 className="text-black text-3xl">دوره ها آموزشی</h1>

          <div>
            <button className="border-none outline-0 px-4 py-2 bg-gray1 text-white">
              همه دوره ها
            </button>
            <button className="border-none outline-0 px-4 py-2 bg-transparent text-black">
              جدیدترین ها
            </button>
            <button className="border-none outline-0 px-4 py-2 bg-transparent text-black">
              گران ترین ها
            </button>
            <button className="border-none outline-0 px-4 py-2 bg-transparent text-black">
              تکمیل نشده ها
            </button>
          </div>
        </div>

        <div
          className="flex flex-wrap text-black gap-10  pt-10"
          style={{ direction: "rtl" }}
        >
          {courseData.map((data) => {
            return (
              <div
                className="w-80 flex  flex-col"
                key={data.id}
                style={{ background: "#ebe3e3" }}
              >
                <div
                  className="w-full h-full flex justify-center items-center"
                  style={{ background: data.bg }}
                >
                  <img className="w-28 py-4" src={data.image} />
                </div>
                <div className="flex flex-col px-4 py-2 gap-1  ">
                  <h2>{data.name}</h2>
                  <h2>مدرس : {data.teacher}</h2>
                  <div className="flex justify-between border-b-2 border-white py-2">
                    <h2>ظرفیت {data.capacity}</h2>
                    <button
                      className="border-none outline-0 bg-gray1 text-white p-1"
                      onClick={() => {
                        setData(data);
                        setIsOpen(true);
                      }}
                    >
                      جزئیات
                    </button>
                  </div>
                  <h2>{data.price}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AllCourses;
