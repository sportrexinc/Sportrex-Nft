import * as React from "react";
import ReUseModal from "../../components/modals/ReUseModal";

import { ModalProps } from "../../components/modals/StakeNftModal";

import { FaTimesCircle } from "react-icons/fa";

import telegram from "../../assets/icons/telegram.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import discord from "../../assets/icons/discord.png";
import twitch from "../../assets/icons/twitch.png";

import youtube from "../../assets/icons/youtube.png";
import medium from "../../assets/icons/medium.png";

import tiktok from "../../assets/icons/tiktok.png";
import useImg from "../../assets/coming-soon/coming-modal.png";

const linksArrayA = [
  {
    id: "1",
    link: "https://t.me/sportrexofficial",
    icon: telegram,
    name: "telegram",
  },
  {
    id: "2",
    link: "https://twitter.com/sportrexhq",
    icon: twitter,
    name: "twitter",
  },
  {
    id: "3",
    link: "https://instagram.com/sportrexofficial",
    icon: instagram,
    name: "instagram",
  },
  {
    id: "4",
    link: " https://discord.gg/sportrexofficial",
    icon: discord,
    name: "discord",
  },
  {
    id: "5",
    link: "https://www.twitch.tv/sportrexofficial",
    icon: twitch,
    name: "twitch",
  },
  {
    id: "10",
    link: "https://vm.tiktok.com/ZM8KVx1gb/",
    icon: tiktok,
    name: "tiktok",
  },
  {
    id: "8",
    link: "https://medium.com/@sportrex",
    icon: medium,
    name: "medium",
  },
  {
    id: "6",
    link: " https://www.youtube.com/channel/UCD-fhKSFYxU4em8mouCunEA",
    icon: youtube,
    name: "youtube",
  },
];

export default function ResponseModal({ open, setOpen }: ModalProps) {
  // const [value, setValue] = React.useState("");

  return (
    <div>
      <ReUseModal open={open} setOpen={setOpen}>
        <div className="w-full flex flex-col rounded-[16px]  z-20 bg-[#020733] ">
          <div className=" flex justify-end items-center">
            <div className="w-full flex  lg:w-full items-center relative">
              <FaTimesCircle
                onClick={() => setOpen(false)}
                className="text-white text-2xl md:text-3xl cursor-pointer absolute top-4 right-4 "
              />
              <img src={useImg} className="w-full h-auto" />
            </div>
          </div>
          {/* <div className="w-full">
              <iframe src="https://giphy.com/embed/26FL4fdR9oRs2tdEA"   className="w-full aspect-ratio "    />
            </div> */}
          <div className="mt-6 md:mt-10 flex  justify-center items-center">
            <h1 className="w-full  text-[16px]  md:text-[18px] mx-auto text-center  bold">
              <span className="coming-soon-text">Congratulations </span> 🎉
            </h1>
          </div>

          <div className="flex flex-col items-center mt-4 pb-8">
            <h1 className="text-white  text-[14px] md:text-[16px] text-center bold">
              Join the Sportrex community
            </h1>
            <div className="flex space-x-2 mt-4">
              {linksArrayA.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    key={index}
                    rel="noopener noreferrer"
                  >
                    <abbr title={`${item.name}`}>
                      <img
                        src={item.icon}
                        alt="icons"
                        className="w-8 md:w-8 h-auto"
                      />
                    </abbr>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </ReUseModal>
    </div>
  );
}
