import React from "react";
const BannerComponent: React.FC = () => {
  return (
    <div className="bg-studentsOnTable flex h-[30rem] w-full items-end justify-center bg-cover bg-center">
      <div className="w-full p-3 text-center font-Roboto text-2xl backdrop-blur-2xl lg:text-3xl xl:text-4xl">
        Your transformative journey towards{" "}
        <span className="italic">confident communication</span> begins here.
      </div>
    </div>
  );
};
export default BannerComponent;
