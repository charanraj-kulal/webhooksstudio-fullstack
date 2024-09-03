import React from "react";

import HeroSection from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Service from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative z-10">
      <Nav />
      <HeroSection />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
