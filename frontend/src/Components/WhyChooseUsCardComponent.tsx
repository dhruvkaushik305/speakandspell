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
    <div className="flex flex-col gap-2 overflow-hidden rounded-[2rem] bg-OxfordBlue shadow-lg md:rounded-[3.5rem]">
      <img src={image} alt="illustration svg" className="bg-cover text-white" />
      <div className="flex flex-col p-4">
        <p className="bg-white bg-clip-text text-justify text-lg font-semibold text-Sunglow/80 md:text-2xl">
          {title}
        </p>
        <p className="text-md text-justify text-white md:text-xl">{content}</p>
      </div>
    </div>
  );
};
export default WhyChooseUsCardComponent;
