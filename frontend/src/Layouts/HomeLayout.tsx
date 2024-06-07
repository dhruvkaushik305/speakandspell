import React from "react";
import studentsImage from "../assets/students.png";
import accuracySVG from "../assets/accuracy.svg";
import teacher from "../assets/teacher.png";
import HomeCardComponent from "../Components/HomeCardComponent";
import AccordianComponent from "../Components/AccordianComponent";
const HomeLayout: React.FC = () => {
  return (
    <div className="mt-1 flex h-full flex-col items-center gap-16">
      <div className="flex w-[85%] flex-col items-center justify-center rounded-[50px] bg-neutral-100 p-4 shadow-lg sm:mt-4 md:flex-row md:rounded-[100px]">
        <p className="flex h-full items-center bg-black bg-clip-text p-1 font-Poppins text-2xl font-bold text-CelticBlue/80 md:text-3xl lg:text-4xl xl:text-5xl">
          Don't let bad grammar hold you back.
          <br /> Take control with our classes.
        </p>
        <img
          src={studentsImage}
          alt="students vector image"
          className="size-[18rem] md:size-[25rem] lg:size-[35rem] xl:size-[40rem]"
        />
      </div>
      <div className="mx-8 flex max-w-[80%] flex-col gap-5 p-1">
        <p className="text-center text-2xl font-semibold md:text-4xl">
          Why choose us?
        </p>
        <div className="grid grid-cols-1 gap-5 p-3 lg:grid-cols-2 xl:gap-10">
          <HomeCardComponent
            title="Experience You Can Trust"
            content="I've been navigating the English language jungle for years, and let me tell you, I've seen it all (and corrected it all too!)."
            image={accuracySVG}
          />
          <HomeCardComponent
            title="Unlock Your Potential"
            content="Whether you need to nail that interview or write a captivating college essay, I'll equip you with the skills to conquer any communication challenge."
            image={accuracySVG}
          />
          <HomeCardComponent
            title="Learn From the Fun Side"
            content="Ditch the dull textbooks! My classes are engaging and interactive, so you'll actually enjoy learning (gasp!)."
            image={accuracySVG}
          />
          <HomeCardComponent
            title="Master ALL the Skills"
            content="From comma catastrophes to interview jitters, I cover a wide range of topics to make you a well-rounded English whiz."
            image={accuracySVG}
          />
        </div>
      </div>
      <div className="flex max-w-[80%] flex-col gap-5">
        <header className="text-center text-2xl font-semibold md:text-4xl">
          FAQ
        </header>
        <div className="flex w-full flex-col gap-1 rounded-xl bg-neutral-100 p-1 md:p-3">
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
      <div className="flex max-w-[85%] flex-col-reverse items-center justify-center gap-1 rounded-[2rem] bg-neutral-100 p-4 md:rounded-[4rem] lg:flex-row">
        <div className="flex flex-col gap-3 p-1 md:gap-5 md:p-2">
          <p className="text-2xl font-semibold lg:text-3xl xl:text-3xl">
            English is not rocket science.
            <br /> (But I can help if it feels like it)
          </p>
          <p className="text-lg md:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            soluta recusandae et! Maxime reprehenderit sit eaque sed velit
            reiciendis perferendis temporibus. Veritatis alias iste voluptate
            architecto laudantium natus exercitationem expedita reiciendis sed.
            Consectetur, dolore molestias exercitationem perferendis architecto
            ad impedit.
          </p>
        </div>
        <img
          src={teacher}
          alt="a picture of the enlgish teacher"
          className="aspect-auto min-w-[10rem] rotate-3 md:min-w-[20rem] lg:min-w-[25rem] xl:min-w-[30rem]"
        />
      </div>
    </div>
  );
};
export default HomeLayout;
