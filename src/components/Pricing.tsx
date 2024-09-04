import React from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import TypingAnimation from "@/components/magicui/typing-animation";
import Meteors from "@/components/magicui/meteors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Pricing: React.FC = () => {
  const { theme } = useTheme();

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
      <div className="container flex justify-center min-h-[2rem] py-52">
        <div className="relative flex flex-col w-full h-fit items-center justify-center container mx-auto">
          <Meteors number={7} />
          <TypingAnimation
            className="text-4xl font-bold text-white mb-10"
            text="Get the complete Business Solution."
          />
          <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <MagicCard
                key={index}
                className="transition min-h-96 duration-700 ease-in-out cursor-pointer flex-col items-center justify-center text-center shadow-[0_10px_190px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_10px_190px_rgba(8,_112,_184,_0.4)] p-6 sm:p-8 lg:p-10 border border-white/30 hover:border-white/50 rounded-xl"
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
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
