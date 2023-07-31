import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#0014a8] to-pink-600 font-semibold tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl font-semibold capitalize">{des}</h1>
    </div>
  );
};

export default Title;
