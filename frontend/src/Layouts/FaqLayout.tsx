import React from "react";
import SectionLayout from "../Components/HomePage/SectionLayout";
import AccordianComponent from "../Components/AccordianComponent";
import { Link } from "react-router-dom";
const FaqLayout: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <SectionLayout
        extraComponents={
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h1 className="w-full text-center text-xl font-bold text-gray-600 lg:text-2xl">
                Frequently Asked Questions
              </h1>
              <h2 className="text-md w-full text-center font-medium italic text-gray-700 lg:text-xl">
                Common Questions, Clear Answers
              </h2>
            </div>

            <div className="divide-y-2 divide-solid divide-gray-200 rounded-lg bg-Secondary/20 p-1">
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
          </div>
        }
      />
      <p>
        Don't see your question here?{" "}
        <Link
          to="/contactus"
          className="text-sm font-medium italic underline lg:text-lg"
        >
          Contact us
        </Link>
      </p>
    </div>
  );
};
export default FaqLayout;
