import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import TypingAnimation from "@/components/magicui/typing-animation";
import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";

const services = [
  {
    title: "Web Design",
    description: "Creating visually appealing and user-friendly websites.",
    icon: "🌐", // Replace with the actual icon or image
    gradientColor: "#A020F0",
  },
  {
    title: "Retail Software",
    description: "Custom software solutions for retail businesses.",
    icon: "🛒", // Replace with the actual icon or image
    gradientColor: "#FF5733",
  },
  {
    title: "SEO",
    description: "Improving your website's search engine ranking.",
    icon: "🔍", // Replace with the actual icon or image
    gradientColor: "#00BFFF",
  },
  {
    title: "Digital Marketing",
    description: "Strategies to boost your online presence.",
    icon: "💼", // Replace with the actual icon or image
    gradientColor: "#FF4500",
  },
  {
    title: "Email Solutions",
    description: "Professional email setup and management.",
    icon: "✉️", // Replace with the actual icon or image
    gradientColor: "#32CD32",
  },
];

const Services = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <>
      <section id="services">
        <div className="relative flex flex-col w-full h-fit items-center justify-center container mx-auto">
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
          <TypingAnimation
            className="text-4xl font-bold text-white mb-10"
            text="What exaxtly we do."
          />
          <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap lg:gap-8 z-[9999]">
            {services.map((service, index) => (
              <MagicCard
                key={index}
                className="transition min-h-96 duration-700 ease-in-out cursor-pointer flex-col items-center justify-center text-center shadow-[0_10px_190px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_10px_190px_rgba(8,_112,_184,_0.4)] p-6 sm:p-8 lg:p-10 border border-white/30 hover:border-white/50 rounded-xl"
                gradientColor={service.gradientColor}
              >
                <div className="text-5xl mb-6 p-6 border-b-2 border-white/15">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </MagicCard>
            ))}
          </div>
          <Meteors number={7} />
        </div>
      </section>
    </>
  );
};

export default Services;
