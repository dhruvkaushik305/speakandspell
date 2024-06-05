import React from "react";
import NavbarLinksComponent from "../Components/NavbarLinksComponent";
import { Link } from "react-router-dom";
const NavbarLayout: React.FC = () => {
  return (
    <div className="sticky flex h-[4rem] items-center justify-around border-b border-slate-200">
      <Link className="p-1 font-Roboto text-3xl font-bold" to="/">
        Speak and Spell Academy
      </Link>
      <nav className="flex gap-4">
        <NavbarLinksComponent title="Courses" />
        <NavbarLinksComponent title="Blogs" />
      </nav>
      <button className="rounded-full bg-OxfordBlue px-4 py-2 text-white">
        Contact Us
      </button>
    </div>
  );
};
export default NavbarLayout;
