import React from "react";
import HeroLayout from "../../layouts/HeroLayout";
import "./hero.css";
import gifImage from "../../assets/gifs/hero-gif.gif";
import YellowBtn from "../Button/YellowBtn";
import LinkBtn from "../Button/LinkBtn";
import BlockhainList from "./BlockhainList";
const styles = {
  parentContainer: "w-full h-full px-4 lg:px-16  ",
  container:
    "2xl:container 2xl:mx-auto flex flex-col  lg:flex-row space-y-6 lg:space-y-0",
  left: "w-full lg:w-6/12 h-full justify-start flex items-center  element-index",
  right: "w-full lg:w-6/12  h-full  element-index",
  leftContainer:
    "w-full h-full  element-index flex flex-col lg:mt-[84px] mb-[84px] lg:mb-0 ",
  imgContainer: "w-full sm:w-9/12 lg:w-10/12 mx-auto  element-index",
};
const MainHero = () => {
  return (
    <HeroLayout>
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftContainer}>
              <div className=" flex px-4 py-2 items-center space-x-4 border-[#f1f1f1] border-[1px] rounded-[26px] semibold font-semibold semibold w-fit text-[10px] sm:text-base regular lg:text-lg regular ">
                <div className="no  flex justify-center items-center ">
                  NO 1
                </div>
                <div className="text">
                  <p>VR & AR Powered Marketplace</p>
                </div>
              </div>
              <div className="w-full sm:w-8/12 lg:w-9/12 mt-5">
                <div className="flex text-[24px] sm:text-3xl lg:text-[42px] flex-wrap leading-7 sm:leading-[40px] lg:leading-[51px] bold font-bold bold">
                  <span className="grad-text mr-2">Mint,</span>
                  <span className="grad-text mr-2">Buy,</span>
                  <span className="text-white mr-2">and</span>
                  <span className="grad-text mr-2">Stake</span>
                  <span className="grad-text mr-2">NFTs</span>
                  <span className="text-white mr-2">with Ease</span>
                </div>
                <div className="text-white mt-4 ">
                  <p className="text-[16px] sm:text-xl lg:text-2xl leading-[25px] lg:leading-9 regular sm:w-10/12 w-9/12">
                    Stake and earn yield on the most liquid decentralized NFT
                    marketplace, and navigate your NFTs in VR/AR Mode
                  </p>
                </div>
                <div className="flex mt-8 space-x-8">
                  <LinkBtn path="/market" name="Explore Market" />
                  <YellowBtn path="/mint" name="Mint" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <img src={gifImage} alt="hero-gif" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </HeroLayout>
  );
};

export default MainHero;
