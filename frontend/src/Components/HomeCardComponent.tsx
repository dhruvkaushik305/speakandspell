import React from "react";
//take title, content and image from the props
interface HomeCardComponentProps {
  title: string;
  content: string;
  image: string;
}
const HomeCardComponent: React.FC<HomeCardComponentProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[2rem] bg-neutral-100 p-4 shadow-lg md:rounded-[3.5rem] md:p-8">
      <img src={image} alt="illustration svg" className="size-24 md:size-36" />
      <div className="flex flex-col">
        <p className="text-lg font-semibold md:text-xl">{title}</p>
        <p className="text-md md:text-lg">{content}</p>
      </div>
    </div>
  );
};
export default HomeCardComponent;
