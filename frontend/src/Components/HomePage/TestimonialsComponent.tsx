import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import back from "../../assets/back.png";
import next from "../../assets/next.png";
import { motion } from "framer-motion";
const TestimonialsComponent: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonials = [
    {
      index: 0,
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse itaque quae natus nisi, laudantium quos quaerat. Quibusdam corporis, eos excepturi, ipsam fuga accusamus obcaecati facilis provident veniam architecto consequuntur inventore!",
      occupation: "Software Engineer",
    },
    {
      index: 1,
      name: "Jane Doe",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse itaque quae natus nisi, laudantium quos quaerat. Quibusdam corporis, eos excepturi, ipsam fuga accusamus obcaecati facilis provident veniam architecto consequuntur inventore!",
      occupation: "Marketing Manager",
    },
    {
      index: 2,
      name: "Bob Smith",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse itaque quae natus nisi, laudantium quos quaerat. Quibusdam corporis, eos excepturi, ipsam fuga accusamus obcaecati facilis provident veniam architecto consequuntur inventore!",
      occupation: "Graphic Designer",
    },
    {
      index: 3,
      name: "Alice Johnson",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse itaque quae natus nisi, laudantium quos quaerat. Quibusdam corporis, eos excepturi, ipsam fuga accusamus obcaecati facilis provident veniam architecto consequuntur inventore!",
      occupation: "Web Developer",
    },
    {
      index: 4,
      name: "David Lee",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse itaque quae natus nisi, laudantium quos quaerat. Quibusdam corporis, eos excepturi, ipsam fuga accusamus obcaecati facilis provident veniam architecto consequuntur inventore!",
      occupation: "Content Writer",
    },
  ];
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 200 : -200,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 200 : -200,
        opacity: 0,
      };
    },
  };
  const handlePrev = () => {
    setIdx((prev) => prev - 1);
    setDirection(-1);
  };
  const handleNext = () => {
    setIdx((prev) => prev + 1);
    setDirection(1);
  };
  const visibleTestimonials = [];
  for (let i = idx; i < idx + 1; i++) {
    visibleTestimonials.push(testimonials.at(i % testimonials.length));
  }
  return (
    <SectionLayout
      extraComponents={
        <div className="flex flex-col items-center gap-4">
          <h1 className="w-full text-left text-lg font-semibold italic text-slate-500 lg:text-xl">
            Don't just take our word for it
          </h1>
          <div className="flex items-center justify-center gap-2">
            <img
              src={back}
              alt="back"
              className="size-4 cursor-pointer"
              onClick={handlePrev}
            />
            <div className="text-gray-700">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial!.index}
                  className="flex flex-col gap-5 rounded-xl bg-Secondary/20 p-2"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 40 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <p className="text-md lg:text-lg">
                    {testimonial!.testimonial}
                  </p>
                  <p className="text-md w-full text-right font-medium italic lg:text-lg">
                    {testimonial!.name},{testimonial!.occupation}
                  </p>
                </motion.div>
              ))}
            </div>
            <img
              src={next}
              alt="front"
              className="size-4 cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
      }
    />
  );
};
export default TestimonialsComponent;
