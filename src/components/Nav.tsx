import React, { useState, useEffect } from "react";
import MenuIcon from "../assets/images/icons/icon-menu.svg";
import NavIcon from "../assets/images/logo/logo_ic.png";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 10);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const menuIcon = document.querySelector(".menu-icon");

    if (
      isMenuOpen &&
      !target.closest(".menu-container") &&
      !menuIcon?.contains(target)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`transition-all duration-300 border-b border-white/15 py-4 text-white md:border-none z-[10000] ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
          : ""
      }`}
    >
      <div className="container-fluid md:container">
        <div
          className={`flex justify-between items-center md:border border-white/15 p-2 md:p-3 rounded-xl max-w-10xl mx-auto ${
            isSticky
              ? "bg-transparent backdrop-blur-none md:bg-black/30 md:backdrop-blur-sm"
              : ""
          }`}
        >
          <div className="flex items-center mx-9">
            <div className="inline-flex items-center justify-center p-2 border border-white/15 rounded-lg mr-3">
              <img src={NavIcon} alt="WebHooks Studio Logo" className="h-10" />
            </div>
            <span className="text-xl font-bold">WebHooksStudio</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-16 text-base uppercase">
              {["Home", "About", "Services", "Pricing", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-purple-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <button
            className="md:hidden focus:outline-none menu-icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img
              src={MenuIcon}
              alt="Menu Icon"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className=" fixed inset-0 bg-black/70  z-50 md:hidden">
            <nav className="container-fluid transition delay-100 menu-container  flex flex-col gap-4 mt-4 text-base  p-8  backdrop-blur-sm bg-black/60 rounded-lg">
              {["Home", "About", "Services", "Pricing", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-500 transition"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
