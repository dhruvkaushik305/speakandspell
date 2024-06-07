import React from "react";
import { NavLink } from "react-router-dom";
interface NavbarLinksComponentProps {
  title: string;
}
const NavbarLinksComponent: React.FC<NavbarLinksComponentProps> = ({
  title,
}) => {
  return (
    <>
      <NavLink
        to={`/${title.toLowerCase()}`}
        className={({ isActive }) => {
          return isActive ? "font-semibold text-CelticBlue" : "";
        }}
      >
        {title}
      </NavLink>
    </>
  );
};
export default NavbarLinksComponent;
