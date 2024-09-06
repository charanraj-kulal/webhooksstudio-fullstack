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
const CancellationAndRefunds = () => {
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
            <h2 className="text-3xl mt-6 font-bold mb-6">
              Cancellation and Refund Policy
            </h2>

            <p className="mb-4">
              At WebHooks Studio, we strive to ensure client satisfaction by
              delivering high-quality websites and digital products. This
              Cancellation and Refund Policy explains your rights and our
              practices regarding the cancellation of orders and the conditions
              for receiving refunds.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Order Cancellation
            </h3>
            <p className="mb-4">
              Clients can cancel their website or digital service order within
              24 hours of placing it, without any penalty. Cancellations after
              this period will be subject to a review of the progress made on
              the project and may incur a cancellation fee, depending on the
              work completed up to that point.
            </p>

            <p className="mb-4">
              To cancel your order, please contact us at{" "}
              <Link to="/#contact" className="text-purple-500 hover:underline">
                WebHooks Studio
              </Link>{" "}
              with your order details, and we will guide you through the
              process.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Refund Policy</h3>
            <p className="mb-4">
              Refunds will be provided based on the stage of the project and the
              amount of work completed:
            </p>

            <ul className="mb-4  list-none list-inside">
              <li>
                If cancellation is requested within 24 hours, a full refund will
                be issued.
              </li>
              <li>
                If cancellation occurs after 24 hours but before the design
                phase begins, a partial refund will be issued, less any
                administrative fees.
              </li>
              <li>
                No refunds will be issued once the project has moved into
                development or beyond.
              </li>
            </ul>

            <p className="mb-4">
              We are committed to ensuring client satisfaction. If, during the
              project, you are unhappy with any aspect of our services, we
              encourage you to contact us so we can work to resolve any issues
              before proceeding further.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Revisions and Adjustments
            </h3>
            <p className="mb-4">
              After your website is delivered, we offer a revision period in
              which you can request changes. Once the final version is approved
              and delivered, refunds will not be provided. However, if technical
              issues arise within 30 days of delivery, we will provide necessary
              fixes at no additional cost.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Non-Refundable Services
            </h3>
            <p className="mb-4">
              Any third-party services (e.g., hosting, domain registration, or
              plugin purchases) that are part of the project are non-refundable
              once purchased. These are handled through third-party vendors and
              are subject to their refund policies.
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

export default CancellationAndRefunds;
