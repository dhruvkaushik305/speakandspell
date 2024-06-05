import React from "react";
import downArrow from "../assets/down-arrow.svg";
import upArrow from "../assets/up-arrow.svg";
interface AccordianComponentProps {
  title: string;
  content: string;
}
const AccordianComponent: React.FC<AccordianComponentProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex w-[95rem] flex-col p-2">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={toggleIsOpen}
      >
        <p className="w-full p-2 text-2xl font-semibold">{title}</p>
        <img
          src={isOpen ? upArrow : downArrow}
          alt="open/close arrow"
          className="mr-4 h-[1.5rem] w-[1.5rem]"
        />
      </div>
      {isOpen && (
        <p className="border-b border-slate-300 p-2 text-xl">{content}</p>
      )}
    </div>
  );
};
export default AccordianComponent;
