import React from "react";
import { NavLink } from "react-router-dom";
interface NavbarLinksComponentProps {
  title?: string;
  refersTo: string;
  classes?: string;
  component?: React.ReactNode;
}
const NavbarLinksComponent: React.FC<NavbarLinksComponentProps> = ({
  title,
  refersTo,
  classes,
  component,
}) => {
  return (
    <NavLink
      to={`/${refersTo.toLowerCase()}`}
      className={({ isActive }) => {
        return `text-sm xl:text-lg ${classes} ${isActive ? "text-yellow-600/80 underline" : "text-gray-700"}`;
      }}
    >
      {title}
      {component}
    </NavLink>
  );
};
export default NavbarLinksComponent;
