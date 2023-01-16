import React from "react";

const Benefit = ({ filterData, courseName }) => {
  return (
    <section
      className="flex gap-10 text-black pl-10 md:flex-col "
      style={{ background: "#F9F9F9" }}
    >
      <img className="w-80 md:w-64" src="/assets/detail_image.svg" />

      <div className="md:pr-10 pb-10">
        <h2 className="text-3xl">مزایای این دوره: </h2>

        <div className="flex flex-col gap-6 pt-10">
          <div className="flex items-start gap-3">
            <img className="w-8" src="/assets/benefit1.svg" />
            <div>
              <h3>
                آشنایی با زبان برنامه نویسی {courseName[filterData[0].id - 1]}
              </h3>
              <p>
                در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی
                عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های
                مربوط را انجام خواهی داد
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img className="w-8" src="/assets/benefit2.svg" />
            <div>
              <h3>
                آشنایی با زبان برنامه نویسی {courseName[filterData[0].id - 1]}
              </h3>
              <p>
                در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی
                عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های
                مربوط را انجام خواهی داد
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img className="w-8" src="/assets/benefit3.svg" />
            <div>
              <h3>
                آشنایی با زبان برنامه نویسی {courseName[filterData[0].id - 1]}
              </h3>
              <p>
                در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی
                عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های
                مربوط را انجام خواهی داد
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
