import React from "react";
const BannerComponent: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-[12rem] w-full bg-studentsOnTable bg-cover bg-top sm:h-[16rem] md:h-[20rem] lg:h-[30rem]"></div>
      <div className="w-ful font-Playwrite p-3 text-center text-2xl font-semibold italic text-gray-600 md:text-3xl lg:text-4xl">
        Confident communication starts here.
      </div>
    </div>
  );
};
export default BannerComponent;
