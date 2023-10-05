import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/image-1.svg";
import image2 from "../../assets/image-2.svg";
import image3 from "../../assets/image-7.svg";
import image4 from "../../assets/image-4.svg";
import image5 from "../../assets/image-5.svg";
import image6 from "../../assets/image6.svg";
import image7 from "../../assets/image-7.svg";
const item = [image1, image2, image3, image4, image5, image6, image7,image3];
const BlockhainList = () => {
    return (
      <div className="w-full ">
        <div className=" w-full px-16 hidden lg:flex">
          <div className="w-full flex justify-between items-center 2xl:container 2xl:mx-auto ">
            <div className="img-div">
              <img src={image1} alt="logo" className="w-auto" />
            </div>
            <div className="img-div">
              <img src={image2} alt="logo" className="w-auto" />
            </div>
            <div className="img-div">
              <img src={image3} alt="logo" className="w-auto" />
            </div>
            <div className="img-div">
              <img src={image4} alt="logo" className="w-auto" />
            </div>
            <div className="img-div">
              <img src={image5} alt="logo" className="w-auto" />
            </div>
            <div className="img-div">
              <img src={image6} alt="logo" className="w-auto" />
            </div>
            <div className="img-div">
              <img src={image7} alt="logo" className="w-auto" />
            </div>
          </div>
        </div>
        <div className="py-8 lg:hidden ">
          <Marquee gradientWidth="0" speed={50} pauseOnHover>
            <div className="flex justify-between w-full  items-center ">
              {item.map((item, index) => {
                return (
                  <div key={index} className="w-32 mr-8 ">
                    <img src={item} alt="logo" className="w-auto" />
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    );
};

export default BlockhainList;
