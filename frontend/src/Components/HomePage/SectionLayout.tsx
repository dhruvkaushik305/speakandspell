import React from "react";
const SectionLayout: React.FC<{
  title: string;
  content?: string;
  extraComponents?: React.ReactNode;
  extraClasses?: string;
}> = ({ title, content, extraComponents, extraClasses }) => {
  return (
    <div className="flex max-w-[90%] flex-col gap-5 xl:max-w-[80%]">
      <h1 className="text-center text-3xl font-bold lg:text-4xl">{title}</h1>
      <div className="flex flex-col items-center gap-2 overflow-x-auto overflow-y-hidden">
        <p
          className={`text-xl lg:text-2xl ${extraClasses} rounded-xl px-6 py-9`}
        >
          {content}
        </p>
        {extraComponents}
      </div>
    </div>
  );
};
export default SectionLayout;
