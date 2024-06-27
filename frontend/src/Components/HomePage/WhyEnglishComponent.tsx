import React from "react";
import SectionLayout from "./SectionLayout";
import travelImage from "../../assets/travel.svg";
const WhyEnglishComponent: React.FC = () => {
  return (
    <SectionLayout
      extraComponents={
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <img
            src={travelImage}
            alt="illustration svg"
            className="size-56 xl:size-64"
          />
          <div className="p-1">
            <p className="text-left text-lg font-semibold italic text-slate-500 lg:text-xl">
              Why English?
            </p>
            <p className="text-justify text-sm text-gray-600 lg:text-lg">
              English is not just a language; it's a gateway to endless
              opportunities. With over 1.5 billion speakers worldwide, mastering
              English opens doors to global communication, career advancement,
              and cultural exchange. Whether you are pursuing higher education,
              expanding your career prospects, or simply travelling to explore
              the world, fluency in English enhances your ability to connect,
              collaborate, and succeed. Join us in embracing the English
              language and unlocking its limitless potential.
            </p>
          </div>
        </div>
      }
    />
  );
};
export default WhyEnglishComponent;
