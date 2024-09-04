import React, { useEffect, useState } from "react";
import HeroSection from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Service from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

import Promo from "../components/Promo";
import Pricing from "@/components/Pricing";

const HomePage = () => {
  const { theme } = useTheme(); // Moved inside the component
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <div>
      <Nav />
      <HeroSection />
      <Promo />
      <About />
      <Service />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
