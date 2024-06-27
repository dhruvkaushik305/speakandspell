import React from "react";
import { motion } from "framer-motion";
const BannerComponent: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-[12rem] w-full bg-studentsOnTable bg-cover bg-top sm:h-[16rem] md:h-[20rem] lg:h-[30rem]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="w-ful font-Playwrite p-3 text-center text-2xl font-semibold italic md:text-3xl lg:text-4xl"
      >
        Confident communication starts here.
      </motion.div>
    </div>
  );
};
export default BannerComponent;
