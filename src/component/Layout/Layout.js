import React from "react";
import Menubar from "./navbar/Menubar";
import Footer from "./footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
