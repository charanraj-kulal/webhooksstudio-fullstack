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

const ShippingPolicy = () => {
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
            <h2 className="text-3xl mt-6 font-bold mb-6">Shipping Policy</h2>
            <p className="mb-4">
              At WebHooks Studio, we offer digital services, including website
              delivery. This shipping policy outlines how we deliver our
              services to our clients and what you can expect when receiving
              your custom website or related digital products.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Delivery of Digital Products
            </h3>
            <p className="mb-4">
              Once your website or digital product is completed, it will be
              delivered electronically to the email address you provided during
              your order or made accessible via a secure download link. You will
              be notified by email when your product is ready.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Delivery Timeline
            </h3>
            <p className="mb-4">
              The timeline for delivering your website or digital service
              depends on the scope of your project. Typically, standard websites
              will be delivered within 10-15 business days after final approval
              of design and content. We will keep you updated throughout the
              process.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Revisions and Finalization
            </h3>
            <p className="mb-4">
              After the website is delivered, you will have the opportunity to
              review it and request revisions if necessary. Upon your final
              approval, the website will be deployed or handed over, marking the
              official "shipping" of the digital product.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              International Clients
            </h3>
            <p className="mb-4">
              We provide digital website delivery to clients worldwide. Since
              this is a digital service, no physical shipping costs apply. All
              our websites and services are provided online and available
              globally without restrictions.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Refund Policy</h3>
            <p className="mb-4">
              Please note that once the final version of your website has been
              delivered and approved by you, refunds will not be issued.
              However, if you're unsatisfied with the initial version, we will
              work with you to make necessary changes based on your feedback.
            </p>

            <p className="mt-6 text-lg">
              For any further queries, feel free to{" "}
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

export default ShippingPolicy;
