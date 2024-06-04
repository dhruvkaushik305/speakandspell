import React from "react";
import studentsImage from "../assets/students.png";
import paperPlane from "../assets/paper plane.png";
const HomeLayout: React.FC = () => {
  return (
    <section className="flex h-full flex-col items-center overflow-y-auto overflow-x-hidden bg-white p-2">
      <div className="flex w-fit items-center justify-center rounded-[120px] bg-neutral-100 p-4 shadow-lg">
        <div className="font-Poppins relative z-10 flex h-full items-center bg-black bg-clip-text text-5xl font-bold text-CelticBlue/80">
          <p className="">
            Don't let bad grammar hold you back.
            <br /> Take control with our classes.
          </p>
          <img
            src={paperPlane}
            alt="paper plane"
            className="absolute bottom-[8rem] right-[2rem] -z-10"
          />
        </div>
        <img
          src={studentsImage}
          alt="students vector image"
          className="size-[50rem]"
        />
      </div>
    </section>
  );
};
export default HomeLayout;
