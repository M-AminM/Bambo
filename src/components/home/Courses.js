import React from "react";

const Courses = () => {
  return (
    <section className="flex w-full relative lg:flex-col">
      <div
        className="w-1/2 flex justify-center items-center lg:w-full"
        style={{ height: "80vh" }}
      >
        <div className="border-2 border-green w-96 h-96 relative lg:w-72 lg:h-72">
          <div
            className="flex gap-6 absolute"
            style={{ right: "-30px", top: "-18px" }}
          >
            <div className="flex flex-col gap-6 justify-center items-end">
              <div className="bg-blue w-64 h-44 flex justify-center items-center flex-col gap-6 lg:w-36  px-4 lg:h-40">
                {/* <h1 className="text-4xl font-bold"><span className="-base">#</span>C</h1> */}
                <img className="w-12" src="/assets/c.svg" />
                <button className="border-none outline-0 bg-white px-6 py-2 text-black">
                  دوره سی شارپ
                </button>
              </div>

              <div className="bg-midBlue w-48 h-52 flex justify-center items-center flex-col gap-8 lg:w-36 lg:h-44 px-4">
                <h1
                  className="text-4xl text-black font-bold"
                  style={{ color: "#ED1E24" }}
                >
                  Java
                </h1>
                <button className="border-none outline-0 bg-white px-6 py-2 text-black">
                  دوره جاوا
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-yellow w-56 h-64 flex justify-center items-center flex-col gap-6 lg:w-40 lg:h-52 px-4">
                <h1 className="text-7xl text-black font-bold lg:text-5xl">
                  JS
                </h1>
                <button className="border-none outline-0 bg-white px-6 py-2 text-black">
                  دوره جاوا اسکریپت
                </button>
              </div>
              <div className="bg-pink w-48 h-52 flex justify-center items-center flex-col gap-10 lg:w-32 h-48 px-4">
                <h1 className="text-2xl text-midRed font-bold">Bootstrap</h1>
                <button className="border-none outline-0 bg-white px-6 py-2 text-black">
                  دوره بوت استرپ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 border-b-2 border-r-2 border-bbb w-96 h-96 flex justify-center flex-col pr-10 lg:p-4 lg:w-full lg:border-hidden mb-10 relative">
        <h2 className="text-black text-4xl" style={{ color: "#004458" }}>
          دوره های آموزشی
        </h2>
        <p
          className="text-black text-xl w-4/5 pt-10 lg:w-full lg:text-base"
          style={{ color: "#7E7E7E" }}
        >
          دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین اساتید
          ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی ، اقتصاد
          ... فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
        </p>

        <button
          className="border-none outline-0 px-6 py-2 bg-gray1 w-40 absolute md: "
          style={{
            bottom: "-40px",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          مشاهده دوره ها
        </button>
      </div>
    </section>
  );
};

export default Courses;
