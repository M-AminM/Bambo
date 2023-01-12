import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menu, setMenu }) => {
  const links = [
    { id: 0, name: "خانه", url: "/" },
    { id: 1, name: "دوره ها", url: "courses" },
    { id: 2, name: "مقالات", url: "/" },
    { id: 3, name: "خدمات", url: "/" },
    { id: 4, name: "درباره ما", url: "/" },
  ];
  return (
    <div className="w-full h-screen bg-gray1 absolute px-7 py-5 hidden md:block" style={{zIndex: "10"}}>
      <div className="flex justify-end">
        <img
          onClick={() => setMenu(!menu)}
          className="w-6 cursor-pointer hidden md:block"
          src="/assets/menu.svg"
        />
      </div>

      <div className="flex gap-12 justify-center flex-col items-center">
        {links.map((link) => (
          <Link to={link.url} key={link.id} className="">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
