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

const ReturnPolicy = () => {
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
            <h2 className="text-3xl mt-6 font-bold mb-6">Contact Us</h2>
            <p className="mb-4">
              We're here to help! If you have any questions or need assistance,
              feel free to reach out to us through any of the following methods:
            </p>
            <ul className="text-lg mb-6">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:webhooksstudio@gmail.com"
                  className="text-purple-500 hover:underline"
                >
                  webhooksstudio@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919353649294"
                  className="text-purple-500 hover:underline"
                >
                  +91 9353649294
                </a>
              </li>
              <li>
                <strong>Location:</strong> Bantwal, Dakshina Kannada-574211
              </li>
            </ul>
            <p className="mt-6 text-lg">
              For further assistance or business inquiries,{" "}
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
                      to={"/privacy-policy"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Privacy-policy
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

export default ReturnPolicy;
