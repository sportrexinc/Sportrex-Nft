import React from "react";
import ActionBtn from "../../Button/ActionBtn";
import SingleCollectionCard from "./SingleCollectionCard";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const OwnedByMe = () => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8];
  const back = () => {};
  const next = () => {};
  const navigate = useNavigate();
  const createCollection = () => {
    navigate("/collection-nft");
  };
  return (
    <div>
      <div className="w-full md:min-h-[296px] h-full grid grid-cols-2 lg:grid-cols-4 gap-[16px]   lg:gap-[32px]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
          <SingleCollectionCard key={index} />
        ))}
      </div>
      <div className="mt-32 w-full justify-center space-x-12 flex">
        <button
          className="bg-grey-800 rounded-full text-black cursor-pointer  text-lg regular  p-4"
          onClick={back}
        >
          <BsArrowLeft />
        </button>
        <button
          className="bg-yellow text-lg regular rounded-full text-black p-4"
          onClick={next}
        >
          <BsArrowRight />
        </button>
      </div>
      <div className="mt-12 flex">
        <div className="w-2/12 mx-auto">
          <ActionBtn name="Add new collection" action={createCollection} />
        </div>
      </div>
    </div>
  );
};

export default OwnedByMe;
