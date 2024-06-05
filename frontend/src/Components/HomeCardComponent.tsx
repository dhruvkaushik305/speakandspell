import React from "react";
//take title, content and image from the props
interface HomeCardComponentProps {
  title: string;
  content: string;
  image: React.ReactNode;
}
const HomeCardComponent: React.FC<HomeCardComponentProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="flex items-center justify-center rounded-[3.5rem] bg-neutral-100 p-5 shadow-lg">
      <div className="flex flex-col">
        <p className="text-xl font-semibold">{title}</p>
        <p className="max-w-[18rem] text-lg">{content}</p>
      </div>
      {image}
    </div>
  );
};
export default HomeCardComponent;
