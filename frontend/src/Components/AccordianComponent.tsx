import React from "react";
import downArrow from "../assets/down-arrow.svg";
import upArrow from "../assets/up-arrow.svg";
import { motion } from "framer-motion";
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
    <div className="flex flex-col p-1 md:p-2">
      <div
        className="flex grow cursor-pointer items-center justify-between"
        onClick={toggleIsOpen}
      >
        <p className="w-screen p-2 text-lg font-semibold md:text-xl">{title}</p>
        <img
          src={isOpen ? upArrow : downArrow}
          alt="open/close arrow"
          className="mr-1 h-[1.5rem] w-[1.5rem]"
        />
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ height: { duration: 0.2 }, opacity: { duration: 0.2 } }}
        className="overflow-hidden"
      >
        <p className="text-md p-2 md:text-lg">{content}</p>
      </motion.div>
    </div>
  );
};
export default AccordianComponent;
