import React from "react";
import { NavLink } from "react-router-dom";
interface NavbarLinksComponentProps {
  title: string;
  refersTo: string;
  classes?: string;
}
const NavbarLinksComponent: React.FC<NavbarLinksComponentProps> = ({
  title,
  refersTo,
  classes,
}) => {
  return (
    <NavLink
      to={`/${refersTo.toLowerCase()}`}
      className={({ isActive }) => {
        return `${classes} ${isActive ? "text-black underline" : "text-black"}`;
      }}
    >
      {title}
    </NavLink>
  );
};
export default NavbarLinksComponent;
