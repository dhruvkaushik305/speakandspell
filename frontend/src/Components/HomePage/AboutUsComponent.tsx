import React from "react";
import SectionLayout from "./SectionLayout";
import { Link } from "react-router-dom";
const AboutUsComponent: React.FC = () => {
  return (
    <SectionLayout
      title="Speak your mind, Spell bind the world"
      content="We are committed to ensuring that each student's English learning journey is both enjoyable and enriching. With small class sizes, personalised lessons, and engaging activities, we create a conducive environment for effective learning and provide an accessible platform, where the learners feel empowered to actively participate in the learning process and master their communication skills. Whether you are a beginner or an advanced learner, we have the perfect course to help you achieve your English language objectives."
      extraClasses="bg-Sunglow leading-7"
      extraComponents={
        <Link
          to="/aboutus"
          className="w-fit rounded-xl bg-OxfordBlue px-4 py-3 text-white"
        >
          Know more about us
        </Link>
      }
    />
  );
};
export default AboutUsComponent;
