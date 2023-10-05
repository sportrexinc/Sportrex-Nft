import React from "react";
import { Link } from "react-router-dom";
import NftCard from "../Carousel/NftCard";
import NormalLayout from "../../layouts/NormalLayout";
import { IoIosArrowForward } from "react-icons/io";

const TrendingNFT = () => {
  return (
    <NormalLayout>
      <div className="trending-bg  p-2 sm:p-6 lg:p-20 rounded-[30px] ">
        <div className="w-full  ">
          <div className="w-full flex justify-between items-center mb-[32px] md:mb-[51px]">
            <h1 className="md:text-3xl md:leading-[28px] font-[700] bold   text-start  text-white">
              Trending NFTs
            </h1>
          </div>
          <div className="w-full md:min-h-[296px] h-full grid grid-cols-2 lg:grid-cols-4 gap-[16px]   lg:gap-[32px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <NftCard isTrending={false} />
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <Link
              to="/nft"
              className="text-white flex space-x-3 text-lg regular semibold items-center "
            >
              <span className="text-sm md:text-lg regular">View More</span>
              <IoIosArrowForward className="text-lg regular" />
            </Link>
          </div>
        </div>
      </div>
    </NormalLayout>
  );
};

export default TrendingNFT;
