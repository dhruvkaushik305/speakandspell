import React from "react";
//take title, content and image from the props
interface WhyChooseUsCardProps {
  title: string;
  content: string;
  image: string;
}
const WhyChooseUsCardComponent: React.FC<WhyChooseUsCardProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl bg-Secondary/30 pl-4 shadow-lg sm:flex-row sm:p-1 sm:pl-4">
      <img src={image} alt="illustration svg" className="size-56 xl:size-64" />
      <div className="flex flex-col gap-1 p-2 text-gray-700">
        <p className="text-left text-lg md:text-xl">{title}</p>
        <p className="text-left">{content}</p>
      </div>
    </div>
  );
};
export default WhyChooseUsCardComponent;
