import React from "react";
import { useParams } from "react-router-dom";
import "../../index.css";
import { courseData } from "../../data/course";
import Footer from "../footer/Footer";

const FullDetail = () => {
  const { id } = useParams();
  const filterData = courseData.filter((data) => data.url === id);
  console.log();
  return (
    <>
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
                    <p className="text-xl"> ظرفیت {data.capacity} نفر</p>
                  </div>

                  <div className="flex gap-2">
                    <img className="w-8" src="/assets/student.svg" />
                    <p className="text-xl"> ظرفیت {data.capacity} نفر</p>
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

      <section className="flex justify-between text-black p-10 w-full md:flex-col md:gap-10">
        <div className="w-3/5 flex justify-center flex-col gap-6 md:w-full">
          <h1 className="text-3xl ">توضیحات :</h1>
          <p>
            امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی
            یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته
            است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال
            طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری
            روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و
            کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت
            کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری
            روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و
            کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت
            کلاینت است که می توان بوسیله{" "}
          </p>
        </div>
        <div className="w-72 md:w-auto" style={{ background: "#F9F9F9" }}>
          {filterData.map((data) => (
            <div className="p-4" key={data.id}>
              <div className="flex border-b-2 pb-2 gap-4">
                <img className="w-14" src={data.image} />
                <h2 className="text-lg pt-1">{data.name}</h2>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex justify-between">
                  <h3>قیمت دوره :</h3>
                  <span>{data.price}</span>
                </div>

                <div className="flex justify-between">
                  <h3>تخفیف: </h3>
                  <span className="text-red font-bold">10%</span>
                </div>

                <div className="flex justify-between">
                  <h3>مبلغ قابل پرداخت</h3>
                  <span className="text-green">180.000 تومان</span>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <button className="bg-green px-4 py-2 text-white ">
                  ثبت نام در دوره
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

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
                <h3>آشنایی با زبان برنامه نویسی جاوااسکریپت</h3>
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
                <h3>آشنایی با زبان برنامه نویسی جاوااسکریپت</h3>
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
                <h3>آشنایی با زبان برنامه نویسی جاوااسکریپت</h3>
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

      <Footer />
    </>
  );
};

export default FullDetail;
