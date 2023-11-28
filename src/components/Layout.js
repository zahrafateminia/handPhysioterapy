import React from "react";
import Footer from "./Footer";
import Burger from "./Burger";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Burger />
      {children}
      <Footer />
    </ >
  );
};

export default Layout;
