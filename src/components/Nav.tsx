import React, { useState, useEffect } from "react";
import MenuIcon from "../assets/images/icons/icon-menu.svg";
import NavIcon from "../assets/images/logo/logo_ic.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 border-b border-white/15 py-4 text-white md:border-none z-[10000] ${
        isSticky ? "fixed top-0 left-0 right-0" : ""
      }`}
    >
      <div className="container-fluid md:container">
        <div
          className={`flex justify-between items-center md:border border-white/15 p-2 md:p-3 rounded-xl max-w-10xl mx-auto
        ${isSticky ? " bg-black/30 backdrop-blur-sm" : ""}`}
        >
          <div className="flex items-center mx-9">
            <div className="inline-flex items-center justify-center p-2 border border-white/15 rounded-lg mr-3">
              <img src={NavIcon} alt="WebHooks Studio Logo" className="h-10" />
            </div>
            <span className="text-xl font-bold">WebHooksStudio</span>
          </div>
          <div className={`hidden md:block ${isMenuOpen ? "block" : "hidden"}`}>
            <nav className="flex gap-12 text-base mx-9">
              <ul className="space-x-16 hidden md:flex uppercase">
                <li>
                  <a href="#home" className="hover:text-purple-500 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-purple-500 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-purple-500 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-purple-500 transition"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-purple-500 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <img
            src={MenuIcon}
            alt="Menu Icon"
            className="w-6 h-6 md:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        {isMenuOpen && (
          <nav className="flex flex-col gap-4 mt-4 text-base mx-9 md:hidden">
            <a href="#home" className="hover:text-purple-500 transition">
              Home
            </a>
            <a href="#services" className="hover:text-purple-500 transition">
              About
            </a>
            <a href="#portfolio" className="hover:text-purple-500 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-purple-500 transition">
              Pricing
            </a>
            <a href="#contact" className="hover:text-purple-500 transition">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
