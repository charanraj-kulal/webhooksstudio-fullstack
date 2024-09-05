import React, { useEffect, useState } from "react";
import HeroSection from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Service from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import Promo from "../components/Promo";
import Pricing from "@/components/Pricing";

const HomePage = () => {
  const { theme } = useTheme(); // Moved inside the component
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <>
      <div className="relative">
        <div style={{ overflowX: "hidden" }}>
          <Particles
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
          <Nav />
          <HeroSection />
        </div>
        <Promo />
        <div style={{ overflowX: "hidden" }}>
          <About />
          <Service />
          <Pricing />
          <Contact />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
