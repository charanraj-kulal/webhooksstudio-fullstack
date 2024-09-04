"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

import BlurIn from "@/components/magicui/blur-in";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import ourLogo from "../assets/images/icons/favicon.png";
import PlanIcon from "../assets/images/icons/plan_ic.png";
import IdeaIcon from "../assets/images/icons/idea_ic.png";
import DedIcon from "../assets/images/icons/ded_ic.png";
import ThinkIcon from "../assets/images/icons/think_ic.png";
import ResearchIcon from "../assets/images/icons/research_ic.png";
import ProgressIcon from "../assets/images/icons/progress_ic.png";
import AimIcon from "../assets/images/icons/aim_ic.png";
import Meteors from "@/components/magicui/meteors";
import ShineBorder from "@/components/magicui/shine-border";
import TypingAnimation from "@/components/magicui/typing-animation";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 border-border bg-white p-2.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function About({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <>
      <div className="relative  h-auto md:h-[700px] w-full items-center justify-center">
        <TypingAnimation
          className="text-4xl font-bold text-white mb-10"
          text="Who are we?."
        />
        <ShineBorder
          className="container md:container transition duration-700 ease-in-out flex flex-col md:flex-row  border-white/15 backdrop-blur-sm text-white bg-black/5 z-[9999] w-full sm:w-11/12 lg:w-10/12 p-6 sm:p-8 gap-6 sm:gap-8 lg:gap-16 items-center justify-between relative h-[400px] sm:h-[500px] overflow-hidden rounded-lg border md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          {/* Left Text Section */}
          <div className="flex flex-col justify-center gap-4 w-full md:w-1/2">
            <BlurIn
              className="text-xl sm:text-2xl md:text-4xl"
              word={"About us"}
            />
            <p className="text-sm sm:text-base md:text-lg">
              We are a team of experienced professionals dedicated to providing
              top-notch services and solutions to our clients. With our
              expertise in web development, we strive to deliver innovative and
              high-quality products that meet the needs of our customers.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Our mission is to empower businesses and individuals by leveraging
              the latest technologies and delivering exceptional results. We
              believe in building strong and long-lasting relationships with our
              clients, and we are committed to their success.
            </p>
            <div className="flex justify-center">
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative flex px-4 py-2 sm:px-6 sm:py-3 transition-all ease-out bg-black rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white text-xs sm:text-sm md:text-base">
                    More About Us
                  </span>
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Animated Beam Section */}
          <div className="relative hidden  w-full md:w-1/2  md:flex flex-col items-center justify-center   md:shadow-xl">
            <div
              className={cn(
                "relative flex h-[300px] md:h-[500px] w-full items-center justify-center overflow-hidden p-4 md:p-10 md:shadow-xl",
                className
              )}
              ref={containerRef}
            >
              <div className="flex size-full flex-row items-stretch justify-between gap-4 md:gap-10 max-w-md md:max-w-lg">
                <div className="flex flex-col justify-center gap-2">
                  <Circle ref={div1Ref}>
                    <img
                      src={PlanIcon}
                      alt="Plan Icon"
                      className="w-full h-full"
                    />
                  </Circle>
                  <Circle ref={div2Ref}>
                    <img src={ThinkIcon} alt="Think Icon" />
                  </Circle>
                  <Circle ref={div3Ref}>
                    <img src={IdeaIcon} alt="Idea Icon" />
                  </Circle>
                  <Circle ref={div4Ref}>
                    <img src={ResearchIcon} alt="Research Icon" />
                  </Circle>
                  <Circle ref={div5Ref}>
                    <img src={AimIcon} alt="Aim Icon" />
                  </Circle>
                </div>
                <div className="flex flex-col justify-center">
                  <Circle ref={div6Ref} className="size-14 md:size-16">
                    <img src={ourLogo} alt="Logo" />
                  </Circle>
                </div>
                <div className="flex flex-col justify-center">
                  <Circle ref={div7Ref}>
                    <img src={ProgressIcon} alt="Progress Icon" />
                  </Circle>
                </div>
              </div>

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
              />
            </div>
          </div>
        </ShineBorder>

        <Meteors number={7} />
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </>
  );
}

export default About;
