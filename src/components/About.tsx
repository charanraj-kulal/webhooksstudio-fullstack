"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { BorderBeam } from "@/components/magicui/border-beam";
import TextReveal from "@/components/magicui/text-reveal";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import ourLogo from "../assets/images/icons/favicon.png";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Contact({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); // Moved inside the component
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);
  return (
    <>
      <div className="z-10 flex min-h-[2rem] items-center justify-center  bg-black text-white ">
        <TextReveal text="We Provide Everything, That What You're Looking For" />
      </div>
      <div className="relative flex h-[700px] w-full items-center justify-center  ">
        <div className="inline-flex w-8/12 p-8 items-center justify-center rounded-lg md:border border-white/15">
          <div className="relative flex h-[500px] w-full md:w-3/5 flex-col items-center justify-center overflow-hidden rounded-lg border  border-white/12 md:shadow-xl">
            <div
              className={cn(
                "relative flex h-[500px] w-full items-center justify-center overflow-hidden  p-10 md:shadow-xl",
                className
              )}
              ref={containerRef}
            >
              <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
                <div className="flex flex-col justify-center gap-2">
                  <Circle ref={div1Ref}>
                    <img src={ourLogo} alt="" />
                  </Circle>
                  <Circle ref={div2Ref}>
                    <img src={ourLogo} alt="" />
                  </Circle>
                  <Circle ref={div3Ref}>
                    <img src={ourLogo} alt="" />
                  </Circle>
                  <Circle ref={div4Ref}>
                    <img src={ourLogo} alt="" />
                  </Circle>
                  <Circle ref={div5Ref}>
                    <img src={ourLogo} alt="" />
                  </Circle>
                </div>
                <div className="flex flex-col justify-center">
                  <Circle ref={div6Ref} className="size-16">
                    <img src={ourLogo} alt="" />
                  </Circle>
                </div>
                <div className="flex flex-col justify-center">
                  <Circle ref={div7Ref}>
                    <img src={ourLogo} alt="" />
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
            <BorderBeam size={350} duration={12} delay={9} />
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </>
  );
}

export default Contact;
