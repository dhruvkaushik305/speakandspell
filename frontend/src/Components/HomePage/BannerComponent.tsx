import React from "react";
import { motion } from "framer-motion";
const BannerComponent: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-[12rem] w-full bg-studentsOnTable bg-cover bg-top sm:h-[16rem] md:h-[20rem] lg:h-[30rem]"></div>
      <div className="p-3 text-center font-Playwrite text-2xl font-semibold italic text-gray-600 md:text-3xl lg:text-4xl">
        Confident communication starts here.
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-[5px] bg-Sunglow"
        />
      </div>
    </div>
  );
};
export default BannerComponent;
