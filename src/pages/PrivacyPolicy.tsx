import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Meteors from "@/components/magicui/meteors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const { theme } = useTheme(); // Moved inside the component
  const [color, setColor] = useState("#ffffff");
  const navigate = useNavigate();
  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <>
      <div className="relative">
        <div style={{ overflowX: "hidden" }}>
          <Particles
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />

          <Nav />
          <Meteors number={7} />

          {/* MagicCard for More About Us, Refund Policy, and Privacy Policy */}
          <MagicCard
            className="container w-11/12 md:w-full  transition min-h-96 duration-700 ease-in-out flex-col items-center justify-center text-center shadow-[0_10px_190px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_10px_190px_rgba(8,_112,_184,_0.4)] p-10 sm:p-8 lg:p-10 border  border-white/30 hover:border-white/50 rounded-xl"
            gradientColor="#A020F0"
          >
            <div className="hidden sm:block absolute p-2 px-2 border rounded-lg border-white/30 hover:bg-white hover:text-black transition-all">
              <p className="text-lg">
                <button onClick={() => navigate(-1)} className="">
                  <FontAwesomeIcon className="mr-2" icon={faAngleLeft} />
                  Back
                </button>
              </p>
            </div>
            <h2 className="text-3xl mt-6 font-bold mb-6">Privacy Policy</h2>
            <p className="mb-4">Last updated September 05, 2024</p>
            <p className="mb-4">
              At WebHooks Studio, accessible from{" "}
              <a href="https://webhooksstudio.vercel.app" className="underline">
                https://webhooksstudio.vercel.app
              </a>
              , the privacy of our visitors is one of our main priorities. This
              Privacy Policy document contains types of information that is
              collected and recorded by WebHooks Studio and how we use it.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Information We Collect
            </h3>
            <p className="mb-4">
              We collect personal information such as your name, email address,
              and other contact details when you voluntarily provide it through
              our website. We may also collect data through cookies, usage data,
              and similar technologies.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              How We Use Your Information
            </h3>
            <p className="mb-4">
              WebHooks Studio uses the information we collect in various ways,
              including to:
              <div className="justify-center">
                <ul className=" text-startlist-disc ml-6">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>
                    Communicate with you, either directly or through one of our
                    partners
                  </li>
                  <li>Send you updates, special offers, and promotions</li>
                </ul>
              </div>
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Log Files</h3>
            <p className="mb-4">
              WebHooks Studio follows a standard procedure of using log files.
              These files log visitors when they visit websites. The information
              collected by log files includes internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Cookies and Web Beacons
            </h3>
            <p className="mb-4">
              Like any other website, WebHooks Studio uses "cookies" to store
              information including visitors' preferences and the pages on the
              website that they accessed or visited. This information is used to
              optimize the user’s experience by customizing our web page content
              based on visitors’ browser type and/or other information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Third-Party Privacy Policies
            </h3>
            <p className="mb-4">
              WebHooks Studio's Privacy Policy does not apply to other
              advertisers or websites. We advise you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Data Security</h3>
            <p className="mb-4">
              We take reasonable steps to protect your personal information, but
              please be aware that no security measures are perfect or
              impenetrable. We cannot guarantee that information will not be
              accessed, disclosed, altered, or destroyed by breach of any of our
              physical, technical, or managerial safeguards.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Your Rights</h3>
            <p className="mb-4">
              Depending on your location, you may have the right to access,
              update, or delete the information we have on you. If you would
              like to exercise any of these rights, please contact us at{" "}
              <a href="mailto:webhooksstudio@gmail.com" className="underline">
                webhooksstudio@gmail.com
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Changes to This Privacy Policy
            </h3>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date at the top of this policy.
            </p>

            <p className="mt-6 text-lg">
              If you have any questions or concerns about this Privacy Policy,
              feel free to{" "}
              <Link to="/#contact" className="text-purple-500 hover:underline">
                contact WebHooks Studio
              </Link>
              .
            </p>

            <p className="mt-6 text-lg">
              <Link to="/" className=" hover:underline">
                <FontAwesomeIcon className="mr-2" icon={faAngleLeft} />
                Back to Home
              </Link>
            </p>
            <div className="mt-4 flex justify-center text-left md:text-center md:ml-0 ml-20 items-center">
              <div className=" justify-center items-center">
                <ul className=" flex flex-col md:flex-row">
                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/terms-and-conditions"}
                      className="hover:underline  text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Terms-and-condition
                    </Link>
                  </li>

                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/shipping-policy"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Shipping-policy
                    </Link>
                  </li>

                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/Cancellation-and-refund-policy"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Cancellation-and-refund-policy
                    </Link>
                  </li>
                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/contact-us"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </MagicCard>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
