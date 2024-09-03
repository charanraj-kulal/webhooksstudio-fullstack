"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <Particles
      className="absolute inset-0 w-full h-full"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
  );
};

export default ParticlesDemo;
