import React, { useState } from "react";
import NavbarLinksComponent from "../Components/NavbarLinksComponent";
import { Link } from "react-router-dom";
import hamburgerIcon from "../assets/hamburger.svg";
import HamburgerLinkComponent from "../Components/HamburgerLinkComponent";
import closeIcon from "../assets/close.svg";
const NavbarLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="flex h-[4rem] w-full items-center justify-between border-b border-slate-200 p-2 lg:justify-around">
      <Link
        className="text-nowrap p-1 font-Roboto text-2xl font-bold md:text-3xl"
        to="/"
      >
        Speak and Spell Academy
      </Link>
      <nav className="hidden gap-4 md:flex">
        <NavbarLinksComponent title="Courses" />
        <NavbarLinksComponent title="Blogs" />
      </nav>
      <Link
        className="hidden rounded-full bg-OxfordBlue px-4 py-2 text-white md:block"
        to="/contactus"
      >
        Contact Us
      </Link>
      <div className="relative md:hidden">
        <img
          src={isOpen ? closeIcon : hamburgerIcon}
          alt="hamburger menu"
          className="h-[2rem] w-[2rem]"
          onClick={toggleMenu}
        />
        {isOpen && (
          <div className="flex flex-col">
            <nav
              className="absolute -right-2 top-[3rem] z-50 flex h-screen w-screen flex-col items-center gap-5 bg-neutral-100/90 p-4"
              onClick={toggleMenu}
            >
              <HamburgerLinkComponent title="Courses" />
              <HamburgerLinkComponent title="Blogs" />
              <HamburgerLinkComponent title="Contact Us" />
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavbarLayout;
