import React, { useState } from "react";
import NavbarLinksComponent from "../Components/NavbarLinksComponent";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
const NavbarLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="sticky flex h-[4rem] w-full items-center justify-between border-b border-slate-200 p-2 lg:justify-around">
      <Link
        className="text-nowrap p-1 font-Roboto text-xl font-bold md:text-3xl"
        to="/"
      >
        Speak and Spell Academy
      </Link>
      <nav className="hidden gap-4 md:flex">
        <NavbarLinksComponent title="Courses" />
        <NavbarLinksComponent title="Blogs" />
      </nav>
      <button className="hidden rounded-full bg-OxfordBlue px-4 py-2 text-white md:block">
        Contact Us
      </button>
      <div className="relative md:hidden">
        <img
          src={hamburger}
          alt="hamburger menu"
          className="h-[2rem] w-[2rem]"
          onClick={toggleMenu}
        />
        {isOpen && (
          <div className="absolute right-0 top-[4rem] flex w-full -translate-x-1/2 flex-col gap-5 bg-red-200">
            <NavbarLinksComponent title="Courses" />
            <NavbarLinksComponent title="Blogs" />
            <button>Contact Us</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavbarLayout;
