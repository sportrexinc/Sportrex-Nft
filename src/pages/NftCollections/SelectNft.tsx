import React from "react";
import ParentLayout from "../../layouts/ParentLayout";
import { useNavigate } from "react-router-dom";
const SelectNft = () => {
  const navigate = useNavigate();
  
  return (
    <ParentLayout>
      <div className="w-full flex flex-col">
        <div className="flex flex-col xl:mt-20 ">
          <h1 className="grad-text bold text-3xl mb-3">Choose Type</h1>
          <p className="text-grey-800  text-md regular">
            Select the type of NFT you want to create
          </p>
          <p className="text-grey-800 text-md flex items-center space-x-1 regular">
            <span className="text-white">Collection</span>
            <span>or</span>

            <span className="text-white">Single</span>
          </p>
        </div>
        {/* #$$$$$$$$$$$$$$$$$$$$$$$ */}
        <div className="mt-16 mb-20 w-full lg:w-10/12 grid sm:gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <div
            className="flex justify-center  items-center bold text-white xl:text-3xl h-[150px]  xl:h-[225px] bg-blue-header rounded-[25px]  cursor-pointer  box-bordery"
            onClick={() => navigate("/single-nft")}
          >
            <p>Single NFT</p>
          </div>
          <div
            className="flex justify-center  items-center bold text-white xl:text-3xl h-[150px] xl:h-[225px] bg-blue-header rounded-[25px] cursor-pointer box-bordery "
            onClick={() => navigate("/bundle-nft")}
          >
            <p>Bundle NFT</p>
          </div>
          <div
            className="flex justify-center  items-center bold text-white xl:text-3xl h-[150px] xl:h-[225px] bg-blue-header rounded-[25px] cursor-pointer box-bordery "
            onClick={() => navigate("/collection-nft")}
          >
            <p>Collection NFT</p>
          </div>
        </div>

        {/* E##################### */}
      </div>
    </ParentLayout>
  );
};

export default SelectNft;
