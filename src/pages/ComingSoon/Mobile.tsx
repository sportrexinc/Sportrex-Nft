import React, { useState, useEffect, useRef } from "react";
import "./ComingSoon.css";

import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";

import ResponseModal from "./Modal";
import { FaCopyright } from "react-icons/fa";
import axios from "axios";
import logo from "../../assets/sportrex-logo.png";

import telegram from "../../assets/icons/telegram.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import discord from "../../assets/icons/discord.png";
import twitch from "../../assets/icons/twitch.png";
import youtube from "../../assets/icons/youtube.png";
import medium from "../../assets/icons/medium.png";
import tiktok from "../../assets/icons/tiktok.png";

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
const MobileComingSoon = () => {
  const audioRef = useRef();
  const [play, setPlay] = useState(false);

  const [open, setOpen] = useState(false);


  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e:any) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post("https://sportrex-be.herokuapp.com/api/comingsoon", { email })
      .then(function (response) {
        setOpen(true);
        setLoading(false);
        setEmail("");
      })
      .catch(function (error) {
        setEmail("");
        setLoading(false);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className=" md:hidden w-full min-h-screen coming-soon-mobile relative overflow-x-hidden  flex justify-center items-center">
      <ResponseModal open={open} setOpen={setOpen} />

      <div className="coming-overlay ">
        <div className=" mx-auto flow-hide h-screen">
          <div className="w-full flex flex-col items-center justify-center  mt-8">
            <div className="flex justify-between w-full items-center px-4">
              <div className="w-[150px] h-auto ">
                <img src={logo} alt="logo" className="w-full h-auto" />
              </div>
         
              <div className="flex  items-center space-x-2">
                <a
                  href="https://media.publit.io/file/SPORTREX-WHITE-PAPER.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1f1f1] hover:text-white regular  cursor-pointer text-md"
                >
                  Whitepaper
                </a>

                <span
                  className="grad-bg w-8 h-8 grid place-items-center rounded-full text-white text-xl cursor-pointer"
                  onClick={() => setPlay(!play)}
                >
                  {play ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
                </span>
              </div>
            </div>

            <h1 className="text-white text-center text-[32px] mt-10 bold px-4 leading-[40px] line-1 anim-typewriter">
              Anticipate
              <span className="coming-soon-text ">Sportrex</span>
            </h1>
            <h1 className="coming-soon-text ml-2 line-2 anim-typewriter1 bold text-[32px]">
              NFT Marketplace
            </h1>
            <div className="flex flex-col">
              <p className="text-[#f1f1f1] mt-2 w-full px-[14px] mx-auto text-center text-[18px] regular leading-[25px] ">
                Home to virtual assets, digital arts and collectibles. Through
                our platform, users will be able to access the most amazing NFT
                deals for all categories users with VR/AR experience.{" "}
                <span className="logo-svg"></span>
              </p>
            </div>

            <div className="mt-5 w-full ">
              <div className="2xl:w-5/12 w-11/12 mx-auto flex items-center bg-[#152139] h-16 rounded-[20px] ">
                <input
                  type="text"
                  className="w-full pl-4 pr-2 py-1 bg-transparent placeholder:text-center placeholder:text-[#999] placeholder:opacity-60 outline-none border-none regular text-white placeholder:text-md"
                  placeholder=" Enter your email or ENS address"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              {loading ? (
                <p
                  className="coming-soon-btn w-11/12 h-16 mx-auto  rounded-[20px] cursor-pointer text-white bold text-[18px] text-center flex justify-center items-center mt-1 "
                  
                >
                  Please wait...
                </p>
              ) : (
                <p
                  className="coming-soon-btn w-11/12 h-16 mx-auto  rounded-[20px] cursor-pointer text-white bold text-[18px] text-center flex justify-center items-center mt-1 "
                  onClick={handleSubmit}
                >
                  Get Notified
                </p>
              )}

              <p className="text-center mb-3  text-white regular text-sm">
                **Notify me when website launch**
              </p>

              <div className="flex flex-col items-center mt-16">
                <h1 className="text-white text-[16px] text-center bold w-full">
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
                            className="w-8 h-auto"
                          />
                        </abbr>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-12 flex space-x-2 items-center justify-center mb-12">
              <FaCopyright className="text-white regular text-[14px]" />
              <p className="text-white regular text-[12px]">
                2022 Sportrex Inc. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileComingSoon;
