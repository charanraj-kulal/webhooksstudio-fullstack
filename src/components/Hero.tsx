"use client";

import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero_image.png";
import Ripple from "@/components/magicui/ripple";
import BlurIn from "@/components/magicui/blur-in";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import WordRotate from "@/components/magicui/word-rotate";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <section className="text-white relative overflow-hidden bg-black">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-8 z-10">
          {/* Left Text Section */}
          <div className="flex flex-col w-full md:w-6/12 text-4xl md:text-7xl text-center md:text-left items-center justify-center">
            <BlurIn word={"Welcome to WebHooks Studio"} />

            <p className="text-xl md:text-xl my-6 ">
              We create{" "}
              <WordRotate
                className="text-xl font-semibold  text-white"
                words={[
                  "Stunning",
                  "Magnificent",
                  "Innovative",
                  "Creative",
                  "Responsive",
                ]}
              />{" "}
              websites that drive your business forward.
            </p>

            <div className="z-10 flex items-center justify-center">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Join Now
                </span>
              </ShimmerButton>
            </div>
          </div>

          <div className="w-full md:w-6/12 mt-8 md:mt-0">
            <img
              src={heroImage}
              alt="Hero Section Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg "
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Ripple />
        </div>
      </div>
    </section>
  );
};

export default Hero;
