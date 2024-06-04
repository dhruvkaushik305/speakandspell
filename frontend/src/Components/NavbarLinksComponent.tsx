import React from "react";
import { Link, NavLink } from "react-router-dom";
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
          return isActive ? "text-CelticBlue font-semibold" : "";
        }}
      >
        {title}
      </NavLink>
    </>
  );
};
export default NavbarLinksComponent;
