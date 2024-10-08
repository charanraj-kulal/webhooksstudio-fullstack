import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import FooterIcon from "../assets/images/logo/logo_ic.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-sm shadow-[0_10px_190px_rgba(8,_112,_184,_0.7)] text-white pt-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-6 md:mb-0">
          <div className=" items-center justify-center p-2 border border-white/15 rounded-lg mr-3">
            <img src={FooterIcon} alt="WebHooks Studio Logo" className="h-10" />
          </div>
          <h1 className="text-3xl font-bold">WebHooks Studio</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row mb-6 md:mb-0">
          <a href="/" className="mx-4 text-lg hover:text-gray-400">
            Home
          </a>
          <a href="/#about" className="mx-4 text-lg hover:text-gray-400">
            About
          </a>
          <a href="#services" className="mx-4 text-lg hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="mx-4 text-lg hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex mb-6 md:mb-0">
          <a href="#" className="mx-2 text-lg hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="mx-2 text-lg hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="mx-2 text-lg hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://www.instagram.com/webhooks_studio/"
            className="mx-2 text-lg hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <p className="mb-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            webhooksstudio@gmail.com
          </p>
          <p className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            +91 9353649294
          </p>
        </div>
      </div>
      <div className="mt-4 text-xs flex justify-center items-center">
        <ul className=" flex flex-col md:flex-row ">
          <li className="mt-1 md:mt-0">
            <Link
              to={"/terms-and-conditions"}
              className="hover:underline  text-white/50 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
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
              className="hover:underline text-white/50 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
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
              className="hover:underline text-white/50 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
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
              className="hover:underline text-white/50 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
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

      {/* Footer Bottom */}
      <div className="bg-black/60 backdrop-blur-sm border-t-2 border-white/15 text-center py-4 mt-8">
        <div>
          <p className="text-gray-400 text-sm mb-1">
            Made with ♥︎ by Charanraj.
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} WebHooks Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
