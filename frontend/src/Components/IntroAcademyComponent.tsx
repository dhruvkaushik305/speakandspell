import React from "react";
const IntroAcademyComponent: React.FC = () => {
  return (
    <div className="flex max-w-[80%] flex-col items-center gap-5 rounded-[30px] p-2">
      <h1 className="text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
        <span>Speak</span> your mind, <span>Spell</span> bind the world{" "}
      </h1>
      <p className="rounded-xl bg-Sunglow/95 p-5 py-10 text-xl">
        At Speak & Spell Academy, we are committed to ensuring that each
        student's English learning journey is both enjoyable and enriching. With
        small class sizes, personalised lessons, and engaging activities, we
        create a conducive environment for effective learning and provide an
        accessible platform, where the learners feel empowered to actively
        participate in the learning process and master their communication
        skills. Whether you are a beginner or an advanced learner, we have the
        perfect course to help you achieve your English language objectives.
      </p>
      <button className="ml-3 w-fit rounded-lg bg-OxfordBlue px-4 py-3 font-bold text-white">
        About us
      </button>
    </div>
  );
};
export default IntroAcademyComponent;
