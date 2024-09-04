import React from "react";
import MenuIcon from "../assets/images/icons/icon-menu.svg";
import NavIcon from "../assets/images/logo/logo_ic.png";
const Nav = () => {
  return (
    <header className="border-b border-white/15 py-4  text-white md:border-none">
      <div className="container-fluid md:container">
        <div className="flex justify-between items-center md:border border-white/15 p-2 md:p-3 rounded-xl max-w-10xl mx-auto">
          <div className="flex items-center mx-9 ">
            <div className="inline-flex items-center justify-center p-2 border border-white/15 rounded-lg mr-3">
              <img src={NavIcon} alt="WebHooks Studio Logo" className="h-10 " />
            </div>
            <span className="text-xl font-bold">WebHooksStudio</span>
          </div>
          <div className="hidden md:block">
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
          <img src={MenuIcon} alt="Menu Icon" className="w-6 h-6 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
