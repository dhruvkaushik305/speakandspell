import React from "react";
const BannerComponent: React.FC = () => {
  return (
    <div className="flex h-[30rem] w-full items-end justify-center bg-studentsOnTable bg-cover bg-top">
      <div className="w-full bg-black/45 p-3 text-center font-Roboto text-2xl text-Primary/80 backdrop-blur-2xl lg:text-3xl xl:text-4xl">
        Your transformative journey towards{" "}
        <span className="italic">confident communication</span> begins here.
      </div>
    </div>
  );
};
export default BannerComponent;
