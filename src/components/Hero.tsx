"use client";

import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero_image.png";
import Ripple from "@/components/magicui/ripple";
import BlurIn from "@/components/magicui/blur-in";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";

const Hero = () => {
  const { theme } = useTheme(); // Moved inside the component
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <section className="text-white relative overflow-hidden bg-black">
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-8 relative z-10">
          {/* Left Text Section */}
          <div className="w-full md:w-6/12 text-center md:text-left">
            <BlurIn word={"Welcome to WebHooks Studio"} />
            <p className="text-xl md:text-2xl my-6">
              We create stunning websites that drive your business forward.
            </p>
            <div className="z-10 flex items-center justify-center">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Join Now
                </span>
              </ShimmerButton>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-6/12 mt-8 md:mt-0">
            <img
              src={heroImage}
              alt="Hero Section Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Ripple />
        </div>
      </div>
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
};

export default Hero;