import React from "react";
import confidentWoman from "../../assets/confidentWoman.png";
const BannerComponent: React.FC = () => {
  return (
    <div className="flex max-h-[30rem] max-w-[90%] flex-col-reverse justify-center rounded-[40px] bg-OxfordBlue sm:flex-row lg:max-h-[40rem] lg:rounded-[50px] xl:max-w-[80%]">
      <p className="flex items-center justify-center p-2 sm:p-5">
        <p className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
          Your transformative journey towards{" "}
          <span className="inline-flex italic text-Sunglow">
            confident communication
          </span>{" "}
          starts here.
        </p>
      </p>
      {/* <div> */}
      <img
        src={confidentWoman}
        alt="a confident woman"
        className="mx-auto max-w-[8rem] grayscale sm:max-w-[10rem] lg:max-w-[20rem] xl:max-w-[23rem]"
      />
      {/* </div> */}
    </div>
  );
};
export default BannerComponent;
