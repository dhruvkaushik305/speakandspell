import React from "react";
import SectionLayout from "./SectionLayout";

const TestimonialsComponent: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      testimonial: "I love this website!",
      occupation: "Software Engineer",
    },
    {
      name: "Jane Doe",
      testimonial: "This is the best website I've ever used!",
      occupation: "Marketing Manager",
    },
    {
      name: "Bob Smith",
      testimonial: "I'm so impressed with this website!",
      occupation: "Graphic Designer",
    },
    {
      name: "Alice Johnson",
      testimonial: "This website is amazing!",
      occupation: "Web Developer",
    },
    {
      name: "David Lee",
      testimonial: "I've been using this website for years!",
      occupation: "Content Writer",
    },
    {
      name: "Sarah Lee",
      testimonial: "This website is the best I've ever used!",
      occupation: "Social Media Manager",
    },
    {
      name: "Michael Lee",
      testimonial: "I love this website!",
      occupation: "UX Designer",
    },
  ];
  return (
    <SectionLayout
      title="Testimonials"
      extraComponents={
        <div className="flex gap-10 overflow-x-auto overflow-y-hidden">
          {testimonials.map((testimonial) => (
            <div className="flex w-[25rem] flex-col gap-5 rounded-xl bg-Sunglow p-4">
              <p className="text-xl">{testimonial.testimonial}</p>
              <p className="w-full text-right text-sm italic">
                {testimonial.name},{testimonial.occupation}
              </p>
            </div>
          ))}
        </div>
      }
    />
  );
};
export default TestimonialsComponent;
