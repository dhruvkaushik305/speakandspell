import React from "react";
import SectionLayout from "./SectionLayout";
import { Link } from "react-router-dom";
const AboutUsComponent: React.FC = () => {
  return (
    <SectionLayout
      extraComponents={
        <div className="flex flex-col items-center gap-2">
          <p className="w-full text-left text-lg font-semibold italic text-gray-600 lg:text-xl">
            About Us
          </p>
          <p className="text-justify text-sm text-gray-600 lg:text-lg">
            We are an academy committed to ensuring that each student's English
            learning journey is both enjoyable and enriching. With small class
            sizes, personalised lessons, and engaging activities, we create a
            conducive environment for effective learning and provide an
            accessible platform, where the learners feel empowered to actively
            participate in the learning process and master their communication
            skills. Whether you are a beginner or an advanced learner, we have
            the perfect course to help you achieve your English language
            objectives. &nbsp;
            <Link
              to="/aboutus"
              className="text-md font-medium italic underline"
            >
              Know more
            </Link>
          </p>
        </div>
      }
    />
  );
};
export default AboutUsComponent;
