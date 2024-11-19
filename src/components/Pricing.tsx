import React, { useEffect, useState } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import TypingAnimation from "@/components/magicui/typing-animation";
import Meteors from "@/components/magicui/meteors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Particles from "@/components/magicui/particles";
const Pricing: React.FC = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  const pricingPlans = [
    {
      title: "Basic",
      price: "₹6,644",
      strikedPrice: "₹8,305",
      description:
        "The basic design with which minimum satisfaction can be expected and revision is minimized.",
      timing: "90-day delivery",
      features: [
        "1 Revision",
        "Custom graphics",
        "Photo editing",
        "Social media design",
        "Include source file",
        "Files ready for print",
        "1 Commercially licensed image",
      ],
      gradientColor: "#A020F0",
    },
    {
      title: "Standard",
      price: "₹8,407",
      strikedPrice: "₹10,509",
      description:
        "The average design with which maximum satisfaction can be expected and revision is done.",
      timing: "75-day delivery",
      features: [
        "3 Revisions",
        "Custom graphics",
        "Photo editing",
        "Social media design",
        "Include source file",
        "Files ready for print",
        "3 Commercially licensed images",
      ],
      gradientColor: "#00A896",
    },
    {
      title: "Premium",
      price: "₹14,610",
      strikedPrice: "₹18,263",
      description:
        "The premium design with which maximum satisfaction can be expected and revision is done.",
      timing: "60-day delivery",
      features: [
        "5 Revisions",
        "Custom graphics",
        "Photo editing",
        "Social media design",
        "Include source file",
        "Files ready for print",
        "5 Commercially licensed images",
      ],
      gradientColor: "#FF4C60",
    },
  ];

  return (
    <section id="pricing">
      <div className="container flex justify-center min-h-[2rem] py-20">
        <div className="relative flex flex-col w-full h-fit items-center justify-center container mx-auto">
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
          <Meteors number={7} />
          <TypingAnimation
            className="text-4xl font-bold text-white mb-10"
            text="Get the complete Business Solution."
          />
          <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <MagicCard
                key={index}
                className="transition min-h-96 duration-700 ease-in-out cursor-pointer flex-col items-center justify-center text-center ] p-6 sm:p-8 lg:p-10 border border-white/30 hover:border-white/50 rounded-xl"
                gradientColor={plan.gradientColor}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-xl font-semibold mb-4">{plan.price}</p>
                <p className="text-[#999] line-through mb-4">
                  ({plan.strikedPrice})
                </p>
                <p className="mb-6">{plan.description}</p>

                <ul className="text-left">
                  <p className="mb-6">
                    <FontAwesomeIcon icon={faClock} className="mr-3" />
                    {plan.timing}
                  </p>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <FontAwesomeIcon icon={faCheck} className="mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 mt-4  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-4 ring-1 ring-white/10 ">
                    <span>Pay 50% Now</span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
