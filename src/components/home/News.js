import React from "react";

const News = () => {
  return (
    <section className=" flex justify-around items-center md:flex-col py-24 px-6 md:py-14 md:gap-10" >
      <div className="text-black ">
        <h1 className="text-3xl md:text-xl">اخبار و مقالات</h1>
        <p className="w-96 text-lg pt-4 md:text-base md:w-60" style={{color: "#7E7E7E"}}>
          دسترسی به جدید ترین و مفید ترین مقالات تالیف شده توسط معتبر ترین
          روزنامه ها و رسانه ها ، در دسته بندی های گوناگونی همچون طراحی ، هنر
          ... برنامه نویسی ، اقتصاد، فلسفه ، فیزیک ، شیمی و
        </p>
      </div>
      <div className="">
        <img className="w-96 md:w-60" src="/assets/news.svg" />
      </div>
    </section>
  );
};

export default News;
