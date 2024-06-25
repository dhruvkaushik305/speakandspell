import React from "react";
import SectionLayout from "./SectionLayout";
import { Link } from "react-router-dom";
const AboutUsComponent: React.FC = () => {
  return (
    <SectionLayout
      title="Elevate your language skills with us"
      extraComponents={
        <div className="flex flex-col items-center gap-2">
          <p className="text-Secondary/95 bg-black bg-clip-text text-justify text-sm lg:text-lg">
            We are committed to ensuring that each student's English learning
            journey is both enjoyable and enriching. With small class sizes,
            personalised lessons, and engaging activities, we create a conducive
            environment for effective learning and provide an accessible
            platform, where the learners feel empowered to actively participate
            in the learning process and master their communication skills.
            Whether you are a beginner or an advanced learner, we have the
            perfect course to help you achieve your English language objectives.
          </p>
          <Link
            to="/aboutus"
            className="bg-Tertiary mx-auto w-fit rounded-md px-4 py-3 text-sm text-white lg:text-lg"
          >
            Read our story
          </Link>
        </div>
      }
      contentClasses="bg-Sunglow leading-7"
    />
  );
};
export default AboutUsComponent;
/* With small class sizes, personalised lessons, and engaging activities, we create a conducive environment for effective learning and provide an accessible platform, where the learners feel empowered to actively participate in the learning process and master their communication skills. */
