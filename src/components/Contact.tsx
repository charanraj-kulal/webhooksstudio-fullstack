"use client";

import React, { useState, useEffect } from "react";
import { MagicCard } from "@/components/magicui/magic-card";

import TypingAnimation from "@/components/magicui/typing-animation";
import Meteors from "@/components/magicui/meteors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Particles from "@/components/magicui/particles";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import emailjs from "emailjs-com";
import { useTheme } from "next-themes";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.currentTarget,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="container flex justify-center min-h-[2rem] py-52">
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
            text="Curious About us?."
          />
          <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap lg:gap-8">
            <MagicCard
              className="transition min-h-96 duration-700 ease-in-out cursor-pointer flex-col items-center justify-center text-center shadow-[0_10px_190px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_10px_190px_rgba(8,_112,_184,_0.4)] p-20 sm:p-8 lg:p-10 border border-white/30 hover:border-white/50 rounded-xl"
              gradientColor={"#A020F0"}
            >
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent rounded-lg border border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border bg-transparent border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg text-white mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent rounded-lg border border-gray-300"
                    required
                  />
                </div>
                <div className="ml-5 mt-3">
                  <AnimatedSubscribeButton
                    buttonColor="#ffffff"
                    buttonTextColor="#000000"
                    subscribeStatus={isSubmitting}
                    initialText={
                      <span className="group inline-flex items-center">
                        Send{" "}
                        <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    }
                    changeText={
                      <span className="group inline-flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4" />
                        Sent{" "}
                      </span>
                    }
                  />
                </div>
              </form>
            </MagicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
