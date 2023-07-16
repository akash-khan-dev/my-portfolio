import React from "react";
import Menubar from "./navbar/Menubar";
import Footer from "./footer/Footer";

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
