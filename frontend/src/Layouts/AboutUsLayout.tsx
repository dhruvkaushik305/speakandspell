import React from "react";
import SectionLayout from "../Components/HomePage/SectionLayout";
import building from "../assets/building.svg";
import teacher from "../assets/teacher.svg";
const AboutUsLayout: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <SectionLayout
        extraComponents={
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-xl font-semibold italic text-gray-600 sm:text-2xl">
              Who are we?
            </h1>
            <div className="flex flex-col items-center gap-2 lg:flex-row">
              <img
                src={building}
                alt="building"
                className="size-52 sm:size-72"
              />
              <p className="text-md p-4 text-gray-600 sm:text-lg lg:text-xl">
                Speak & Spell Academy is an independent English language school
                based in Hisar, Haryana. Established in 2023, although still in
                its early years, our academy is driven by the extensive
                expertise and experience of our trainers, spanning over two
                decades in academic teaching and web content creation. We take
                pride in our approach of offering practical tools for effective
                communication, rather than making unrealistic promises.<br></br>{" "}
                Our comprehensive range of courses is meticulously designed to
                cater to various learning needs and proficiency levels to equip
                students with the necessary skills and knowledge to succeed in
                their English language journey. From foundational grammar and
                vocabulary building to advanced conversation and business
                communication, our diverse offerings ensure that learners
                receive a well-rounded education. Additionally, our experienced
                instructors employ innovative teaching methods and engaging
                materials to create a dynamic and enriching learning experience.
                <br></br> When you choose Speak & Spell Academy, you're choosing
                seasoned professionals dedicated to your success.<br></br> Join
                us today and embark on a transformative journey towards English
                proficiency.
              </p>
            </div>
          </div>
        }
      />
      <SectionLayout
        extraComponents={
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-xl font-semibold italic text-gray-600 sm:text-2xl">
              Our Faculty
            </h1>
            <div className="flex flex-col items-center gap-2 lg:flex-row-reverse">
              <img src={teacher} alt="teacher" className="size-52 sm:size-72" />
              <p className="text-md p-4 text-gray-600 sm:text-lg lg:text-xl">
                With over 19 years of combined experience in teaching and web
                content development, I provide comprehensive and effective
                English training services designed to meet the unique needs of
                each learner. My love for writing, reading, painting, and
                travelling enriches my dynamic and engaging teaching approach.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};
export default AboutUsLayout;
/* With over 19 years of combined experience in teaching and web
              content development, I provide comprehensive and effective English
              training services designed to meet the unique needs of each
              learner. My love for writing, reading, painting, and travelling
              enriches my dynamic and engaging teaching approach. */
