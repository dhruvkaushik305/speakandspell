import React from "react";
import confidentWoman from "../../assets/confidentWoman.png";
const BannerComponent: React.FC = () => {
  return (
    <div className="flex max-h-[30rem] max-w-[90%] flex-col-reverse items-stretch justify-center rounded-[40px] bg-OxfordBlue lg:max-h-[40rem] lg:flex-row lg:rounded-[50px] xl:max-w-[80%]">
      <p className="flex items-center p-1 lg:p-5">
        <p className="text-4xl font-semibold text-white lg:text-6xl">
          Your transformative journey towards{" "}
          <span className="italic text-Sunglow">confident communication</span>{" "}
          starts here.
        </p>
      </p>
      <img
        src={confidentWoman}
        alt="a confident woman"
        className="aspect-auto max-h-min max-w-sm scale-50 grayscale lg:scale-100"
      />
    </div>
  );
};
export default BannerComponent;
