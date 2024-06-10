import React from "react";
import HomePageBannerComponent from "../Components/HomePageBannerComponent";
import WhychooseEnglishComponent from "../Components/WhychooseEnglishComponent";
import IntroAcademyComponent from "../Components/IntroAcademyComponent";
import WhyChooseUsComponent from "../Components/WhyChooseUsComponent";
import TestimonialsComponent from "../Components/TestimonialsComponent";
const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 p-1">
      <HomePageBannerComponent />
      <IntroAcademyComponent />
      <WhychooseEnglishComponent />
      <WhyChooseUsComponent />
      <TestimonialsComponent />
    </div>
  );
};
export default HomeLayout;
