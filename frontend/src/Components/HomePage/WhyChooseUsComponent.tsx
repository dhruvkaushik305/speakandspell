import React from "react";
import WhyChooseUsCardComponent from "../WhyChooseUsCardComponent";
import SectionLayout from "./SectionLayout";
import flexible from "../../assets/flexible-convenience.svg";
import personalised from "../../assets/personalised-learning.svg";
import smallClassroom from "../../assets/small-class.svg";
import engaging from "../../assets/engaging-instruction.svg";
const WhyChooseUsComponent: React.FC = () => {
  return (
    <SectionLayout
      extraComponents={
        <div className="flex flex-col gap-3">
          <h1 className="w-full text-left text-lg font-semibold italic text-slate-500 lg:text-xl">
            Why Choose Us?
          </h1>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <WhyChooseUsCardComponent
              title={"Small Class Sizes"}
              content={
                "Our small class sizes mean you get the individual attention you deserve. We tailor our teaching to fit your needs and pace, making learning more effective and fun."
              }
              image={smallClassroom}
            />
            <WhyChooseUsCardComponent
              title={"Personalised Learning"}
              content={
                "You're unique, and so is our approach. We personalize each lesson to match your goals and style, ensuring every session is enjoyable and just right for you."
              }
              image={personalised}
            />
            <WhyChooseUsCardComponent
              title={"Engaging Instruction"}
              content={
                "Learning with us is anything but boring! Our lively, interactive classes are packed with engaging activities, discussions, and exercises to keep you motivated and excited."
              }
              image={engaging}
            />
            <WhyChooseUsCardComponent
              title={"Flexible Convenience"}
              content={
                "We know life gets busy, so we offer flexible scheduling to fit your lifestyle. Whether you prefer online or offline, morning or evening, we've got the perfect time for you."
              }
              image={flexible}
            />
          </div>
        </div>
      }
    />
  );
};
export default WhyChooseUsComponent;
