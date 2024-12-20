"use client";

import React, { useState, useEffect } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import TypingAnimation from "@/components/magicui/typing-animation";
import Meteors from "@/components/magicui/meteors";
import { ChevronRightIcon, CheckIcon } from "lucide-react";
import emailjs from "emailjs-com";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  // Validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  useEffect(() => {
    const { name, email, subject } = formData;
    if (name && email && validateEmail(email) && subject) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

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

    const templateParams = {
      to_name: "WebHooks Studio", // Replace with recipient's name or company name
      from_name: formData.name, // From the form input field
      message: formData.subject, // Message from form input field
      from_email: formData.email, // Message from form input field
    };

    emailjs
      .send(
        "service_9efojjc",
        "template_e8weiwn",
        templateParams,
        "MPHSo2VIdtCeZVx_B"
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
            text="Curious About us?."
          />
          <div className="flex flex-wrap gap-4 w-full justify-center lg:flex-nowrap lg:gap-8">
            <MagicCard
              className="transition min-h-96 w-full max-w-md duration-700 ease-in-out cursor-pointer flex-col items-center justify-center text-center ] p-6 md:p-8 lg:p-10 border border-white/30 hover:border-white/50 rounded-xl"
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
                    className="w-full p-3 px-4 md:px-5 bg-transparent rounded-lg border border-gray-300"
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
                    className="w-full p-3 px-4 md:px-5 rounded-lg border bg-transparent border-gray-300"
                    required
                  />
                  {!validateEmail(formData.email) && formData.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg text-white mb-2"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 px-4 md:px-5 bg-transparent rounded-lg border border-gray-300"
                    required
                  />
                </div>
                <div className="flex justify-center mt-6">
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
                    disabled={!isFormValid || isSubmitting} // Disable if invalid or submitting
                  />
                </div>
              </form>
              {submitStatus === "success" && (
                <p className="text-green-500 mt-4">
                  Message sent! We'll get back to you shortly!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 mt-4">
                  There was an error sending your message.
                </p>
              )}
            </MagicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
