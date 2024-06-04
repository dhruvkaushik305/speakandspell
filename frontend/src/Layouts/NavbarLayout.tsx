import React from "react";
import NavbarLinksComponent from "../Components/NavbarLinksComponent";
import { Link } from "react-router-dom";
const NavbarLayout: React.FC = () => {
  return (
    <div className="sticky flex h-[4rem] items-center justify-around border-b border-slate-500 bg-neutral-100">
      <Link className="font-Roboto p-1 text-xl font-bold" to="/">
        Speak and Spell Academy
      </Link>
      <nav className="flex gap-4">
        <NavbarLinksComponent title="Courses" />
        <NavbarLinksComponent title="Blogs" />
      </nav>
      <button className="bg-OxfordBlue rounded-full px-4 py-2 text-white">
        Contact Us
      </button>
    </div>
  );
};
export default NavbarLayout;
