import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Courses from "../../pages/courses/Courses";
import Detail from "../../components/courses/Detail";
import Header from "../../components/header/Header";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/login/Signup";
import Menu from "../../components/menu/Menu";
import Modal from "../../Modal";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import DetailPage from "../../pages/detail/DetailPage";
import Footer from "../../components/footer/Footer";

const Router = ({ data, setData, isOpen, setIsOpen, menu, setMenu }) => {
  const location = useLocation();
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
        <Route path="/courses/:id" element={<DetailPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default Router;
