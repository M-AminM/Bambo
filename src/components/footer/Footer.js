import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-gray1 py-6 px-10">
        <div className="flex justify-between border-b-2 py-4 md:flex-col md:gap-4">
          <div className="w-2/5 md:w-full">
            <h1>درباره بامبو</h1>
            <p>
              بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
              است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
              دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد
            </p>
          </div>
          <div className="w-2/5 flex justify-center flex-col  md:w-full">
            <div>
              <h1 className="text-2xl pb-6">خبرنامه</h1>

              <div className="flex">
                <input
                  className="px-4 py-2 border-none outline-0 w-full text-black bg-footerBg"
                  placeholder="ایمیل خود را وارد کنید"
                  style={{ color: "#415D65" }}
                />
                <button
                  className="px-4 py-2 border-none outline-0 text-green"
                  style={{ background: "#002B37" }}
                >
                  عضویت
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between md:flex-col md:gap-6 pt-8">
          <div className="">
            <h2 className="text-xl pb-2">ارتباط با ما</h2>
            <p className="pb-2 cursor-pointer">iwillbemyvision@gmail.com</p>
            <p className="pb-2 cursor-pointer">amir.azhkan@yahoo.com</p>
            <div></div>
          </div>
          <div>
            <h2 className="text-xl pb-2">همراه باشید</h2>
            <p className="pb-2">قوانین</p>
            <p className="pb-2">سوالات رایج</p>
            <span>خدمات</span>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="p-4 bg-white w-24 h-28">
              <img src="/assets/footer1.svg" />
            </div>
            <div className="p-4 bg-white w-24 h-28">
              <img src="/assets/footer2.svg" />
            </div>
            <div className="p-4 bg-white w-24 h-28">
              <img src="/assets/footer3.svg" />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-footerBg w-full">
        <p className="text-center py-8 px-4">
          کليه حقوق محصولات و محتوای اين سایت متعلق به بامبو می باشد و هر گونه
          کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </p>
      </div>
    </>
  );
};

export default Footer;
