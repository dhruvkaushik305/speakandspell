import React from "react";
import { Link } from "react-router-dom";
interface HamburgerLinkComponentProps {
  title: string;
}
const HamburgerLinkComponent: React.FC<HamburgerLinkComponentProps> = ({
  title,
}) => {
  return (
    <Link
      className="w-fit rounded-xl bg-neutral-200 p-2 px-8 text-center text-lg font-semibold"
      to={`/${title.toLowerCase()}`}
    >
      {title}
    </Link>
  );
};
export default HamburgerLinkComponent;
