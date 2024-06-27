import React from "react";
const SectionLayout: React.FC<{
  extraComponents?: React.ReactNode;
}> = ({ extraComponents }) => {
  return (
    <div className="flex max-w-[90%] flex-col gap-5 xl:max-w-[80%]">
      {extraComponents}
    </div>
  );
};
export default SectionLayout;
