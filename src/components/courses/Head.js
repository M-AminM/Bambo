import React from "react";

const Head = () => {
  return (
    <>
      <div className="gradient_courses py-2.5 px-14 md:px-7 h-28">
        <div className="flex justify-end h-full pt-10">
          <img className="w-6 pt-1" src="/assets/magnifying.svg" />
          <input
            className="w-full border-none outline-0 px-4 py-2 bg-transparent"
            placeholder="جستوجو ..."
          />
        </div>
      </div>
      <div
        className="w-full flex justify-between md:flex-col gap-6 px-14 py-7"
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
    </>
  );
};

export default Head;
