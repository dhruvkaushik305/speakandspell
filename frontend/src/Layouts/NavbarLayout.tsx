import React, { useState } from "react";
import NavbarLinksComponent from "../Components/NavbarLinksComponent";
import hamburgerIcon from "../assets/hamburger.svg";
import closeIcon from "../assets/close.svg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const NavbarLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const iconVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };
  return (
    <div className="fixed z-50 flex h-[4rem] w-full items-center justify-between border-b border-slate-200 bg-Primary p-2 lg:justify-around">
      <Link to="/">
        <div className="flex flex-col items-start p-1 font-Roboto text-xl font-semibold leading-6 text-gray-700 xl:text-2xl xl:leading-6">
          <p>Speak</p>
          <p>& Spell Academy</p>
        </div>
      </Link>
      <nav className="hidden gap-4 md:flex lg:text-lg">
        <NavbarLinksComponent title="Home" refersTo="" />
        <NavbarLinksComponent title="Courses" refersTo="courses" />
        <NavbarLinksComponent title="Blogs" refersTo="blogs" />
        <NavbarLinksComponent title="Faq" refersTo="faq" />
        <NavbarLinksComponent title="About Us" refersTo="aboutus" />
        <NavbarLinksComponent title="Contact Us" refersTo="contactus" />
      </nav>
      <div className="md:hidden">
        <motion.img
          src={isOpen ? closeIcon : hamburgerIcon}
          alt="menu icon"
          className="h-[2rem] w-[2rem]"
          onClick={toggleMenu}
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              className="fixed right-0 top-[4rem] z-50 flex h-screen w-screen flex-col items-center justify-start bg-Primary/95 p-4"
            >
              <div className="flex flex-col">
                <nav className="flex flex-col gap-5 p-4" onClick={toggleMenu}>
                  <NavbarLinksComponent
                    title="Home"
                    refersTo=""
                    classes="w-full text-center p-2 text-xl rounded-lg"
                  />
                  <NavbarLinksComponent
                    title="Courses"
                    refersTo="courses"
                    classes="w-full text-center p-2 text-xl rounded-lg"
                  />
                  <NavbarLinksComponent
                    title="Blogs"
                    refersTo="blogs"
                    classes="w-full text-center p-2 text-xl rounded-lg"
                  />
                  <NavbarLinksComponent
                    title="Faq"
                    refersTo="faq"
                    classes="w-full text-center p-2 text-xl rounded-lg"
                  />
                  <NavbarLinksComponent
                    title="About Us"
                    refersTo="aboutus"
                    classes="w-full text-center p-2 text-xl rounded-lg"
                  />
                  <NavbarLinksComponent
                    title="Contact Us"
                    refersTo="contactus"
                    classes="w-full text-center p-2 text-xl rounded-lg"
                  />
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default NavbarLayout;
