import React from "react";

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
  ];
  return (
    <div className="flex max-w-[80%] flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="flex gap-10 overflow-x-auto overflow-y-hidden">
        {testimonials.map((testimonial) => (
          <div className="flex flex-col gap-5 rounded-xl bg-Sunglow p-4">
            <p className="text-xl">{testimonial.testimonial}</p>
            <p className="w-full text-right text-sm italic">
              {testimonial.name},{testimonial.occupation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestimonialsComponent;
