import React from "react";
import "../../index.css";

const Detail = ({ data }) => {
  return (
    <>
      <section className="text-black flex gap-10 md:flex-col ">
        <div className="flex flex-col gap-2">
          <h1>{data.name}</h1>
          <h2>مدرس: {data.teacher}</h2>
          <span>ظرفیت: {data.capacity}</span>
          <span>تاریخ شروع: 1400/1/1</span>
          <span>تاریخ پایان: 1400/1/1</span>
          <p>
            قیمت: <span style={{ color: "#09B28B" }}>{data.price}</span>
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img className="w-36" src={data.image} />
        </div>
      </section>
      <div className="flex gap-4 text-black pt-2 md:flex-col">
        <h1 style={{ whiteSpace: "nowrap" }}>وضعیت دوره</h1>
        <div
          className="w-full h-6 flex justify-end"
          style={{ background: " #DBDBDB" }}
        >
          <div className="bg-gray1 h-6 w-3/5 flex justify-end pl-2 text-white">
            60%
          </div>
        </div>
      </div>

      <div className="flex justify-end items-end pt-10">
        <button
          className="w-32 px-4 py-2 text-black"
          style={{ background: " #DBDBDB" }}
        >
          مشاهده کامل
        </button>
      </div>
    </>
  );
};

export default Detail;
