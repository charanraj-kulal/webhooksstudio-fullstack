import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Meteors from "@/components/magicui/meteors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const { theme } = useTheme(); // Moved inside the component
  const [color, setColor] = useState("#ffffff");

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
            className="container transition min-h-96 duration-700 ease-in-out flex-col items-center justify-center text-center shadow-[0_10px_190px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_10px_190px_rgba(8,_112,_184,_0.4)] p-6 sm:p-8 lg:p-10 border border-white/30 hover:border-white/50 rounded-xl"
            gradientColor="#A020F0"
          >
            <h2 className="text-3xl font-bold mb-6">
              More About WebHooks Studio
            </h2>
            <p className="mb-4">
              At WebHooks Studio, we are passionate about delivering quality web
              solutions and digital services to our clients. Our mission is to
              help businesses of all sizes grow by leveraging cutting-edge
              technologies, user-friendly designs, and innovative strategies.
              From web development to digital marketing, we aim to offer
              comprehensive services that meet your unique needs.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Refund Policy</h3>
            <p className="mb-4">
              WebHooks Studio strives to provide the best services to our
              clients. If you're unsatisfied with a service you've purchased,
              please contact us within 14 days for a review. Refunds may be
              provided in cases where the service was not delivered as promised
              or if there were major issues affecting the usability of the
              delivered product. We reserve the right to refuse refunds if the
              service was consumed fully or if the problem is resolved.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Privacy Policy</h3>
            <p className="mb-4">
              Your privacy is important to WebHooks Studio. We collect only the
              information necessary to provide our services, such as contact
              details and project specifications. We do not share your
              information with third parties unless required by law. All
              information is securely stored and used solely to improve the
              services we offer.
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
          </MagicCard>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
