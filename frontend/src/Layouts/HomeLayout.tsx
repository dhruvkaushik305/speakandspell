import React from "react";
import WhyChooseUsComponent from "../Components/HomePage/WhyChooseUsComponent";
import TestimonialsComponent from "../Components/HomePage/TestimonialsComponent";
import BannerComponent from "../Components/HomePage/BannerComponent";
import AboutUsComponent from "../Components/HomePage/AboutUsComponent";
import WhyEnglishComponent from "../Components/HomePage/WhyEnglishComponent";
const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 p-1">
      <BannerComponent />
      <AboutUsComponent />
      <WhyEnglishComponent />
      <WhyChooseUsComponent />
      <TestimonialsComponent />
    </div>
  );
};
export default HomeLayout;
