import React from "react";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Connect from "../../pages/Connect";
import Portfolio from "../../pages/Portfolio";
import Footer from "../Footer";
import "./style.css";

function Wrapper(props) {
  return (
    <main className="wrapper">
      {props.children}
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Connect />
      <Footer />
    </main>
  );
}

export default Wrapper;
