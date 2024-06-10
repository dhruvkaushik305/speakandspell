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
    <div className="flex flex-col items-center justify-center rounded-[2rem] bg-OxfordBlue p-4 shadow-lg md:rounded-[3.5rem] md:p-8">
      <img
        src={image}
        alt="illustration svg"
        className="size-24 fill-white text-white md:size-36"
      />
      <div className="flex flex-col">
        <p className="bg-white bg-clip-text text-lg font-semibold text-Sunglow/80 md:text-xl">
          {title}
        </p>
        <p className="text-md text-white md:text-lg">{content}</p>
      </div>
    </div>
  );
};
export default WhyChooseUsCardComponent;
