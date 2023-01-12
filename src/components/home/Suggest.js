import React from "react";

const Suggest = () => {
  return (
    <section className="flex justify-between bg-green  pl-14 md:flex-col md:gap-4 md:p-4">
      <div>
        <img className="w-96 md:w-60" src="/assets/suggest.svg" />
      </div>
      <div className="flex flex-col gap-6 w-1/3 justify-center md:w-full">
        <h1 className="text-2xl">پیشنهادات و انتقاد</h1>
        <input
          className="border-none outline-0 px-6 py-2"
          placeholder="ایمیل خود را وارد کنید ..."
          style={{ background: "#00775B" }}
        />
        <input
          className="border-none outline-0 px-6 py-2"
          placeholder="متن خود را وارد کنید ..."
          style={{ background: "#00775B" }}
        />
        <div className=" flex justify-end">
          <button className="border-none outline-0 px-6 py-2 bg-gray1 w-36">
            ارسال
          </button>
        </div>
      </div>
    </section>
  );
};

export default Suggest;
