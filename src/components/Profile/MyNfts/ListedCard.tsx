import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heart from "../../../assets/heart.svg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
const ListedCard = ({ isTrending }: { isTrending: boolean }) => {
  const [liked, setLiked] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const navigate = useNavigate();
  const handleMint = () => {
    navigate("/mint-nft");
  };
  const handleEdit = () => {
    navigate("/edit-nft");
  };

  return (
    <div className="w-full  lg:min-w-[300px] md:h-[296px] sm:w-[280px] lg:w-[304px] h-full bg-no-repeat bg-cover bg-blue-header rounded-[10px] md:rounded-[20px] p-2 md:p-4 flex flex-col items-start space-y-[12px] justify-between relative">
      <div className="relative">
        <div className="absolute flex flex-col top-4 right-0 w-48 pr-4 ">
          <BsThreeDotsVertical
            className="text-white text-2xl self-end"
            onClick={() => setOpenOptions(!openOptions)}
          />
          {openOptions && (
            <div className="mt-2 w-40 bg-blue-body rounded-[15px] flex flex-col space-y-1 p-4">
              <p
                className="w-full hover:bg-blue-btn text-white text-lg regular regular cursor-pointer"
                onClick={handleEdit}
              >
                Edit
              </p>
              <p
                className="w-full text-lg regular  hover:bg-blue-btn text-white regular cursor-pointer"
                onClick={handleMint}
              >
                mint
              </p>
            </div>
          )}
        </div>
        <div className="absolute right-4 bottom-2 ">
          <p className="bold grad-text text-lg regular">On sale</p>
        </div>
        <img
          className={`w-full ${
            isTrending
              ? "h-[135px] md:h-[180px]"
              : "h-[120px] w-[270px] md:h-[180px]"
          }`}
          src={heart}
          alt=""
        />
      </div>
      <p className="text-[18px] leading-[30px]">Heartcrib</p>
      <div className="flex justify-between w-full">
        <Link to="#" className="text-[#FAC744] semibold leading-[22px]">
          0.3 SPT
        </Link>
        <div className="flex space-x-1 items-center">
          {liked ? (
            <AiFillHeart
              className="text-xl text-yellow"
              onClick={() => setLiked(false)}
            />
          ) : (
            <AiOutlineHeart
              className="text-xl text-grey-800"
              onClick={() => setLiked(true)}
            />
          )}
          <h2>23</h2>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;
