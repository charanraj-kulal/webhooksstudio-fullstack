"use client";

import React, { useEffect, useState } from "react";
import TextReveal from "@/components/magicui/text-reveal";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import Meteors from "@/components/magicui/meteors";

const Promo = () => {
  const [color, setColor] = useState("#ffffff");
  const { theme } = useTheme();

  useEffect(() => {
    setColor("#ffffff"); // Set the color based on the theme if needed
  }, [theme]);

  return (
    <div className="relative z-[9999] hidden md:flex min-h-[2rem] items-center justify-center bg-black text-white">
      <TextReveal text="Discover Tailored Solutions, Crafted Just for You" />

      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <Meteors number={7} />
    </div>
  );
};

export default Promo;
