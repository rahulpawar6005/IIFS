import { Outlet} from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import "./css/Navbar.css";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Layout;
