import React from "react";
import { motion } from "framer-motion";
import WhyChooseUsComponent from "../Components/HomePage/WhyChooseUsComponent";
import TestimonialsComponent from "../Components/HomePage/TestimonialsComponent";
import BannerComponent from "../Components/HomePage/BannerComponent";
import AboutUsComponent from "../Components/HomePage/AboutUsComponent";
import WhyEnglishComponent from "../Components/HomePage/WhyEnglishComponent";
const HomeLayout: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="mb-10 flex flex-col items-center justify-center gap-16"
    >
      <BannerComponent />
      <AboutUsComponent />
      <WhyChooseUsComponent />
      <WhyEnglishComponent />
      <TestimonialsComponent />
    </motion.div>
  );
};
export default HomeLayout;
