import React, { Fragment, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Detail from "./components/courses/Detail";
import FullDetail from "./components/courses/FullDetail";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Menu from "./components/menu/Menu";
import Modal from "./Modal";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

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
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Header menu={menu} setMenu={setMenu} />
      )}
      {menu && <Menu menu={menu} setMenu={setMenu} />}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Detail data={data} setData={setData} setIsOpen={setIsOpen} />
      </Modal>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={
            <Courses data={data} setData={setData} setIsOpen={setIsOpen} />
          }
        />
        <Route path="/courses/:id" element={<FullDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
