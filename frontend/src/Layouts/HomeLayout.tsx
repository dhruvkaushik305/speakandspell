import React from "react";
import studentsImage from "../assets/students.png";
import paperPlane from "../assets/paper plane.png";
import accuracySVG from "../assets/accuracy.svg";
import teacher from "../assets/teacher.png";
import HomeCardComponent from "../Components/HomeCardComponent";
import AccordianComponent from "../Components/AccordianComponent";
const HomeLayout: React.FC = () => {
  return (
    <div className="mt-8 flex h-full flex-col items-center gap-16 overflow-y-auto overflow-x-hidden bg-white">
      <div className="flex w-fit items-center justify-center rounded-[120px] bg-neutral-100 p-4 shadow-lg">
        <div className="relative z-10 flex h-full items-center bg-black bg-clip-text font-Poppins text-5xl font-bold text-CelticBlue/80">
          <p className="">
            Don't let bad grammar hold you back.
            <br /> Take control with our classes.
          </p>
          <img
            src={paperPlane}
            alt="paper plane"
            className="absolute bottom-[4rem] right-[2rem] -z-10"
          />
        </div>
        <img
          src={studentsImage}
          alt="students vector image"
          className="size-[50rem]"
        />
      </div>
      <div className="mx-8 flex max-w-[80%] flex-col gap-5 p-1">
        <p className="text-center text-4xl font-semibold">Why choose us?</p>
        <div className="flex flex-wrap justify-center gap-[5rem]">
          <HomeCardComponent
            title="Experience You Can Trust"
            content="I've been navigating the English language jungle for years, and let me tell you, I've seen it all (and corrected it all too!)."
            image={<img src={accuracySVG} alt="an svg" className="size-36" />}
          />
          <HomeCardComponent
            title="Unlock Your Potential"
            content="Whether you need to nail that interview or write a captivating college essay, I'll equip you with the skills to conquer any communication challenge."
            image={<img src={accuracySVG} alt="an svg" className="size-36" />}
          />
          <HomeCardComponent
            title="Learn From the Fun Side"
            content="Ditch the dull textbooks! My classes are engaging and interactive, so you'll actually enjoy learning (gasp!)."
            image={<img src={accuracySVG} alt="an svg" className="size-36" />}
          />
          <HomeCardComponent
            title="Master ALL the Skills"
            content="From comma catastrophes to interview jitters, I cover a wide range of topics to make you a well-rounded English whiz."
            image={<img src={accuracySVG} alt="an svg" className="size-36" />}
          />
        </div>
      </div>
      <div className="flex max-w-[80%] flex-col gap-5">
        <header className="text-center text-4xl font-semibold">FAQ</header>
        <div className="flex w-full flex-col gap-1 rounded-xl bg-neutral-100 p-3">
          <AccordianComponent
            title="What topics do your courses cover?"
            content="We offer a wide range of English language courses to suit various needs, from grammar fundamentals and interview preparation to creative writing and handwriting improvement."
          />
          <AccordianComponent
            title="Do you offer online courses?"
            content="Currently, we focus on providing a dynamic and interactive learning experience through in-person classes. However, keep an eye out for future online offerings!"
          />
          <AccordianComponent
            title="How do I register for a course?"
            content="Visit our website ([link to your website]) or contact us directly for registration details. We offer individual consultations to help you choose the perfect course."
          />
          <AccordianComponent
            title="What are your payment options?"
            content="We accept [list your payment methods, e.g., cash, credit card]."
          />
          <AccordianComponent
            title="What is the class size?"
            content="We maintain small class sizes to ensure personalized attention and maximize your learning potential."
          />
          <AccordianComponent
            title="What is your teaching style?"
            content="My classes are interactive and engaging. We'll combine clear explanations, practical exercises, and fun activities to make learning enjoyable and effective."
          />
        </div>
      </div>
      <div className="flex max-w-[80%] items-center justify-center gap-1 rounded-[4rem] bg-neutral-100 p-4">
        <div className="flex flex-col gap-5 p-2">
          <p className="text-4xl font-semibold">
            English is not rocket science.
            <br /> (But I can help if it feels like it)
          </p>
          <p className="text-xl">
            Hello everyone! My name is [Your Name], and I've been navigating the
            wonderful world of the English language for over [Number] years. You
            could say I've seen it all – from Shakespearean sonnets to the
            latest internet slang (and everything in between!). But my passion
            isn't just about collecting grammar trophies; it's about helping you
            unlock the power of clear and confident communication. Whether
            you're a student sharpening your skills for college applications, a
            professional seeking to elevate your writing, or simply someone who
            wants to express themselves with more eloquence, I'm here to guide
            you on that journey.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            src={teacher}
            alt="a picture of the enlgish teacher"
            className="aspect-auto min-w-[40rem] rotate-3"
          />
        </div>
      </div>
      <footer className="mb-20 flex min-h-[10rem] w-full items-center justify-between bg-slate-800 p-2 text-white">
        <p>Copyright © Speak and Spell Academy</p>
        <p>Made with ❤️ by the Speak and Spell Academy team</p>
      </footer>
    </div>
  );
};
export default HomeLayout;
