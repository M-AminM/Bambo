import React from "react";

const Description = ({ filterData }) => {
  return (
    <section className="flex justify-between text-black p-10 w-full md:flex-col md:gap-10">
      <div className="w-3/5 flex justify-center flex-col gap-6 md:w-full">
        <h1 className="text-3xl ">توضیحات :</h1>
        <p>
          امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک
          سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است.
          به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه
          ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و
          به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار
          گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که
          می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و
          به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار
          گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که
          می توان بوسیله{" "}
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
  );
};

export default Description;
