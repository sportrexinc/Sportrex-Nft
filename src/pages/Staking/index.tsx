import React from "react";
import ParentLayout from "../../layouts/ParentLayout";
import { Header, CustomSelect, OverviewCard } from "../../components";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const items = [1, 2, 3, 4, 5, 6, 7, 8];
const Staking = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const next = () => {
    navigate("/unlocked-stake");
  };

  return (
    <ParentLayout current={4}>
      <div className="flex-col w-full">
        <div className="flex flex-col mt-20 justify-center  items-center w-full mx-auto lg:w-3/12 ">
          <Header>Staking Pools</Header>
          <h1 className="text-lg regular regular text-white leading-7 text-center">
            Available NFT Assets staking pools are listed below.
          </h1>
        </div>
        <div className="flex  mt-20 justify-start  items-center w-full  lg:w-2/12 ">
          <CustomSelect name="Highest APY" />
        </div>
        <div className="mt-20 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-8">
          {items.map((item, index) => (
            <OverviewCard key={index} />
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
      </div>
    </ParentLayout>
  );
};

export default Staking;
