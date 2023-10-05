import React from "react";
import Marquee from "react-fast-marquee";
import collection from "../../assets/top-collection.png";
import YellowBtn from "../Button/YellowBtn";
const items = ["1", "1", "1", "1", "1", "1"];
const index = () => {
  return (
    <div className="w-full flex flex-col ">
      <div className="title flex justify-center">
        <h1 className="grad-text text-center bold text-[22px] md:text-3xl font-bold bold ">
          Top 10 Collections
        </h1>
      </div>
      <div className="py-8">
        <Marquee gradientWidth="0" speed={50} pauseOnHover>
          <div className="flex justify-between w-full ">
            {items.map((item, index) => {
              return (
                <div key={index} className="w-64 mr-12 ">
                  <img src={collection} alt="logo" className="w-auto" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
      <div className="py-4 md:py-8">
        <Marquee gradientWidth="0" speed={50} pauseOnHover direction="right">
          <div className="flex justify-between w-full ">
            {items.map((item, index) => {
              return (
                <div key={index} className="w-64 mr-12 ">
                  <img src={collection} alt="logo" className="w-auto" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
      <div className="flex items-center justify-center mt-10">
        <YellowBtn path="/collections" name="View all ranking" />
      </div>
    </div>
  );
};

export default index;
