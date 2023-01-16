import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Router from "./components/router/Router";

function App() {
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (menu) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [menu]);

  return (
    <Fragment>
      <Router
        data={data}
        setData={setData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menu={menu}
        setMenu={setMenu}
      />
    </Fragment>
  );
}

export default App;
