import React from "react";
const HeadingComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
      {title}
    </h1>
  );
};
export default HeadingComponent;
