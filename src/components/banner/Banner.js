import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="about"
      className="w-full pt-10 pb-20 flex gap-20 border-b-[2px] font-titleFont border-b-gray-400 "
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
