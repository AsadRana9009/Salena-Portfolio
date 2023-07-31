import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  facebook,
  twitter,
  react,
  figma,
  tailwind,
  linkedin,
  js,
} from "../../assets/index";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-bold">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm{" "}
          <span className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#0014a8] to-pink-600 capitalize">
            Asad Rana
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="black" />
        </h2>
        <p className="text-base font-bodyFont font-medium leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-semibold font-titleFont mb-4 text-lightText">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <img
                className="  w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={facebook}
                alt="facebook"
              />
            </span>
            <span className="bannerIcon">
              <img
                className="  w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={twitter}
                alt="twitter"
              />
            </span>
            <span className="bannerIcon">
              <img
                className="  w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={linkedin}
                alt="linkedin"
              />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-semibold font-titleFont mb-4 text-lightText">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <img
                className="  w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={js}
                alt="js"
              />
            </span>
            <span className="bannerIcon">
              <img
                className="  w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={react}
                alt="react"
              />
            </span>
            <span className="bannerIcon">
              <img
                className="  w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={tailwind}
                alt="tailwind"
              />
            </span>
            <span className="bannerIcon">
              <img
                className="  w-[50px] h-[50px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={figma}
                alt="figma"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
