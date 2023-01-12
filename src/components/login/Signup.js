import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="w-full flex md:flex-col-reverse">
      <div className="flex flex-col w-1/2 gap-10 p-4 md:w-full">
        <h1 className="text-black text-3xl">ثبت نام</h1>
        <input
          className="placeholder-black outline-0 text-black px-4 py-2 w-full border-b-2 border-black"
          placeholder="نام کاربری"
          style={{ background: "#DBDBDB" }}
        />
        <input
          className="placeholder-black outline-0 text-black px-4 py-2 w-full border-b-2 border-black"
          placeholder="ایمیل"
          style={{ background: "#DBDBDB" }}
        />
        <input
          className="placeholder-black outline-0 text-black px-4 py-2 w-full border-b-2 border-black"
          placeholder="شماره موبایل"
          style={{ background: "#DBDBDB" }}
        />
        <input
          className="placeholder-black outline-0 text-black px-4 py-2 w-full border-b-2 border-black"
          placeholder="شماره ملی"
          style={{ background: "#DBDBDB" }}
        />
        <input
          className="placeholder-black outline-0 text-black px-4 py-2 w-full border-b-2 border-black"
          placeholder="تاریخ تولد"
          style={{ background: "#DBDBDB" }}
        />
        <input
          className="placeholder-black outline-0 text-black px-4 py-2 w-full border-b-2 border-black"
          placeholder="رمز عبور"
          style={{ background: "#DBDBDB" }}
        />
        <div className="flex gap-4 justify-end">
          <button className="px-4 py-2 text-black">ورود</button>
          <button className="px-4 py-2 bg-gray1 text-white">ثبت نام</button>
        </div>
      </div>

      <div className="w-full relative">
        <div
          className="absolute top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <h1 className="border-b-2 pb-4 text-3xl md:text-xl">
            آکادمی آموزشی بامبو
          </h1>

          <div className="flex gap-4 pt-4 justify-center items-center">
            <img className="w-8 cursor-pointer" src="/assets/youtube.svg" />
            <img className="w-8 cursor-pointer" src="/assets/whatsapp.svg" />
            <img className="w-8 cursor-pointer" src="/assets/telegram.svg" />
            <img className="w-8 cursor-pointer" src="/assets/instagram.svg" />
          </div>
        </div>
        <div
          className="absolute bottom-5 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Link to="/">
            <img className="w-8" src="/assets/home_icon.svg" />
          </Link>
        </div>
        <img className="w-full h-screen md:h-full" src="/assets/login.png" />
      </div>
    </section>
  );
};

export default Signup;
