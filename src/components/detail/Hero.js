import React from "react";

const Hero = ({ filterData }) => {
  return (
    <section className="full_detail pt-20 ">
      {filterData.map((data) => {
        return (
          <div
            className="flex justify-center items-center flex-col gap-4 px-10"
            key={data.id}
          >
            <img className="w-36 md:w-28" src={data.image} alt={data.name} />
            <h1 className="text-3xl font-bold">{data.name}</h1>

            <div
              className="flex flex-col gap-5 border-t-2 pt-8"
              style={{ borderColor: "#DBDBDB" }}
            >
              <div className="flex  gap-20">
                <div className="flex gap-2">
                  <img className="w-8" src="/assets/capacity.svg" />
                  <p className="text-xl"> ظرفیت : {data.capacity} نفر</p>
                </div>

                <div className="flex gap-2">
                  <img className="w-8" src="/assets/student.svg" />
                  <p className="text-xl"> دانشجو : {data.student} نفر</p>
                </div>
              </div>

              <div className="w-full h-6 flex justify-end bg-midCream">
                <div
                  className=" h-6 flex justify-end pl-2 text-black"
                  style={{ width: data.percent, background: "#DBDBDB" }}
                >
                  {data.percent}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex absolute bottom-0   w-full ">
        <div className="detail_box flex flex-col justify-center items-center gap-4 h-64 w-full">
          <img className="w-6" src="/assets/talking.svg" />
          <span className="text-sm">مدرس</span>
          <p className="text-center text-sm">دکتر بحر العلومی</p>
        </div>
        <div className="detail_box flex flex-col justify-center items-center gap-4 h-64 w-full mx-1">
          <img className="w-6 " src="/assets/calendar.svg" />
          <p className="text-center px-6 md:text-xs ">
            تاریخ شروع 1 / 1 / 1400
          </p>
          <p className="text-center px-6 md:text-xs ">
            تاریخ پایان 1 / 1 / 1400
          </p>
        </div>
        <div className="detail_box flex flex-col justify-center items-center gap-4 h-64 w-full">
          <img className="w-6" src="/assets/rate.svg" />
          <span className="text-sm">رتبه</span>
          <div className="flex gap-2">
            <img className="w-6 md:w-3" src="/assets/star.svg" />
            <img className="w-6 md:w-3" src="/assets/star.svg" />
            <img className="w-6 md:w-3" src="/assets/star.svg" />
            <img className="w-6 md:w-3" src="/assets/star.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
