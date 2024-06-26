import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import back from "../../assets/back.png";
import next from "../../assets/next.png";
const TestimonialsComponent: React.FC = () => {
  const [idx, setIdx] = useState(0);
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
  const handlePrev = () => {
    setIdx((prev) => prev - 1);
  };
  const handleNext = () => {
    setIdx((prev) => prev + 1);
  };
  const visibleTestimonials = [];
  for (let i = idx; i < idx + 1; i++) {
    visibleTestimonials.push(testimonials.at(i % testimonials.length));
  }
  return (
    <SectionLayout
      title="Testimonials"
      extraComponents={
        <div className="flex items-center justify-center gap-2">
          <img src={back} alt="back" className="size-5" onClick={handlePrev} />
          <div className="">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial!.index}
                className="flex min-w-[25rem] flex-col gap-5 rounded-xl bg-Secondary/40 p-4"
              >
                <p className="text-xl">{testimonial!.testimonial}</p>
                <p className="w-full text-right text-sm italic">
                  {testimonial!.name},{testimonial!.occupation}
                </p>
              </div>
            ))}
          </div>
          <img src={next} alt="front" className="size-5" onClick={handleNext} />
        </div>
      }
    />
  );
};
export default TestimonialsComponent;
