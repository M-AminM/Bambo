import React from "react";

const Hero = () => {
  return (
    <section className="home_page ">
      <div
        className="flex flex-col justify-end gap-6 py-2.5 px-14 md:px-7"
        style={{ height: "80vh" }}
      >
        <h1 className="font-bold text-5xl md:text-2xl">
          باید راه بهتری برای آموزش ساخته میشد,
          <br />
          پس ما ساختیمش ...
        </h1>
        <p className="w-2/5 md:w-full">
          سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین آشنایی
          جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم
          با راهکار های نوین ، فرصتی . برای افراد خواهان پیشرفت فراهم کنیم
        </p>

        <button className="bg-white w-40 px-2 py-2 text-black">
          مشاهده دوره ها
        </button>
      </div>

      <div className="flex w-full pt-10 absolute bottom-0">
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
  );
};

export default Hero;
