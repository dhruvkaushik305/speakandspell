import React, { useState } from "react";
import NavbarLinksComponent from "../Components/NavbarLinksComponent";
import hamburgerIcon from "../assets/hamburger.svg";
import closeIcon from "../assets/close.svg";
const NavbarLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="flex h-[4rem] w-full items-center justify-between border-b border-slate-400 bg-gray-300 p-2 lg:justify-around">
      <NavbarLinksComponent
        title="Speak and Spell Academy"
        refersTo=""
        classes="text-nowrap p-1 font-Roboto text-xl font-bold sm:text-2xl lg:text-3xl"
      />
      <nav className="hidden gap-4 md:flex lg:text-lg">
        <NavbarLinksComponent title="Courses" refersTo="courses" />
        <NavbarLinksComponent title="Blogs" refersTo="blogs" />
        <NavbarLinksComponent title="Faq" refersTo="faq" />
        <NavbarLinksComponent title="About Us" refersTo="aboutus" />
        <NavbarLinksComponent title="Contact Us" refersTo="contactus" />
      </nav>
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
              className="fixed right-0 top-[3.25rem] z-50 flex h-screen w-screen flex-col items-center gap-5 bg-gray-300/90 p-4"
              onClick={toggleMenu}
            >
              <NavbarLinksComponent
                title="Courses"
                refersTo="courses"
                classes="w-full text-center p-2 text-lg rounded-lg underline"
              />
              <NavbarLinksComponent
                title="Blogs"
                refersTo="blogs"
                classes="w-full text-center p-2 text-lg rounded-lg underline"
              />
              <NavbarLinksComponent
                title="Faq"
                refersTo="faq"
                classes="w-full text-center p-2 text-lg rounded-lg underline"
              />
              <NavbarLinksComponent
                title="About Us"
                refersTo="aboutus"
                classes="w-full text-center p-2 text-lg rounded-lg underline"
              />
              <NavbarLinksComponent
                title="Contact Us"
                refersTo="contactus"
                classes="w-full text-center p-2 text-lg rounded-lg underline"
              />
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavbarLayout;
