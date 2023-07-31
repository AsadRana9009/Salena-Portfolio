import React from "react";
import { bannerImg, splash } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="  w-[320px] h-[480px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <img
        className="absolute bottom-0 w-[480px] h-[440px] lgl:w-[500px] lgl:h-[500px]  flex justify-center items-center "
        src={splash}
        alt="splash"
      />
    </div>
  );
};

export default RightBanner;
