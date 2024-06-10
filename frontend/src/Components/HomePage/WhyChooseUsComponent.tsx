import React from "react";
import WhyChooseUsCardComponent from "../WhyChooseUsCardComponent";
import accuracyIcon from "../../assets/accuracy.svg";
import SectionLayout from "./SectionLayout";
const WhyChooseUsComponent: React.FC = () => {
  return (
    <SectionLayout
      title="Why Choose Us?"
      extraComponents={
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <WhyChooseUsCardComponent
            title={"Small Class Sizes"}
            content={
              "Unlike large institutions, our small classes ensure personalized attention. We tailor your learning journey, fostering a richer experience that gets results."
            }
            image={accuracyIcon}
          />
          <WhyChooseUsCardComponent
            title={"Personalised Learning"}
            content={
              "Your goals, your style, your English. Our personalized lessons cater to your goals, learning style, and preferences. Every session is crafted for YOU, making learning effective and enjoyable."
            }
            image={accuracyIcon}
          />
          <WhyChooseUsCardComponent
            title={"Engaging Instruction"}
            content={
              "Interactive learning, real results. Our classes keep you motivated with engaging activities, discussions, and practical exercises. Learn English the fun way!"
            }
            image={accuracyIcon}
          />
          <WhyChooseUsCardComponent
            title={"Flexible Convenience"}
            content={
              "Life's busy. English learning shouldn't be. Online, offline, mornings, evenings - you choose!"
            }
            image={accuracyIcon}
          />
        </div>
      }
    />
  );
};
export default WhyChooseUsComponent;
