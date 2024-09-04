import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold">WebHooks Studio</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row mb-6 md:mb-0">
          <a href="#" className="mx-4 text-lg hover:text-gray-400">
            Home
          </a>
          <a href="#" className="mx-4 text-lg hover:text-gray-400">
            About
          </a>
          <a href="#" className="mx-4 text-lg hover:text-gray-400">
            Services
          </a>
          <a href="#" className="mx-4 text-lg hover:text-gray-400">
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

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-center py-4 mt-8">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} WebHooks Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
