import React from "react";
import SectionLayout from "../Components/HomePage/SectionLayout";
import AccordianComponent from "../Components/AccordianComponent";
const FaqLayout: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center gap-10">
      <div className="bg-faqBanner flex h-[10rem] w-full flex-col-reverse bg-cover bg-top sm:h-[20rem] lg:h-[30rem]"></div>
      <SectionLayout
        title="Frequently Asked Questions"
        extraComponents={
          <div className="rounded-lg bg-Secondary/30 p-1">
            <AccordianComponent
              title="Who can join your courses?"
              content="Our courses are suitable for individuals of all ages and backgrounds, including students, professionals, housewives, and job seekers."
            />
            <AccordianComponent
              title="Do you offer online courses?"
              content="Yes, we offer both online and offline classes to cater to your learning preferences."
            />
            <AccordianComponent
              title="What is the class size?"
              content="We maintain small class sizes to ensure personalised attention and maximise your learning potential."
            />
            <AccordianComponent
              title="What is your teaching style?"
              content="Our classes are interactive and dynamic. We combine clear explanations, practical exercises, and engaging discussions to make learning enjoyable and effective."
            />
            <AccordianComponent
              title="How do I register for a course?"
              content="Visit our website ([link to your website]) or contact us directly for registration details. We offer individual consultations to help you choose the perfect course."
            />
            <AccordianComponent
              title="What are your payment options?"
              content="We accept payments in cash, and also through UPI and net banking."
            />
          </div>
        }
      />
    </div>
  );
};
export default FaqLayout;
