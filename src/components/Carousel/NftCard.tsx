import React from 'react';
import { Link } from 'react-router-dom';

const NftCard = ({ isTrending } : {isTrending:boolean} ) => {
  return (
    <div className="w-full  lg:min-w-[300px] md:h-[296px] sm:w-[280px] lg:w-[304px] h-full bg-no-repeat bg-cover bg-blue-header rounded-[10px] md:rounded-[20px] p-2 md:p-4 flex flex-col items-start space-y-[12px] justify-between">
      <img
        className={`w-full ${
          isTrending
            ? "h-[135px] md:h-[180px]"
            : "h-[120px] w-[270px] md:h-[180px]"
        }`}
        src={`/assets/images/carousel/masked.png`}
        alt=""
      />
      <p className="text-[18px] leading-[30px]">Heartcrib</p>
      <div className="flex justify-between w-full">
        <Link to="#" className="text-[#FAC744] leading-[22px]">0.3 SPT</Link>
        <div className="flex space-x-1">
          <img src="/assets/images/carousel/heart.svg" alt="" />
          <h2>23</h2>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
