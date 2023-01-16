import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Header = ({ menu, setMenu, setIsLogin }) => {
  const links = [
    { id: 1, name: "دوره ها", url: "courses" },
    { id: 2, name: "مقالات", url: "/" },
    { id: 3, name: "خدمات", url: "/" },
    { id: 4, name: "درباره ما", url: "/" },
  ];
  return (
    <section
      className={`flex justify-between items-center bg-transparent absolute w-full py-2.5 px-14 md:px-7`}
    >
      <div className="flex gap-2">
        <img className="w-4 pt-2" src="/assets/logo.svg" alt="logo" />
        <Link to="/">
          <h2 className="text-xl">بامبو</h2>
        </Link>
      </div>

      <div className="flex gap-12 md:hidden">
        {links.map((link) => (
          <Link to={link.url} key={link.id} className="">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-5">
        <Link className="pt-1" to="/login">
          ورود
        </Link>
        <Link to="/login" onClick={() => setIsLogin()}>
          <button className="gradient px-6 py-2">ثبت نام</button>
        </Link>
        <img
          onClick={() => setMenu(!menu)}
          className="w-6 cursor-pointer hidden md:block"
          src="/assets/menu.svg"
        />
      </div>
    </section>
  );
};

export default Header;
