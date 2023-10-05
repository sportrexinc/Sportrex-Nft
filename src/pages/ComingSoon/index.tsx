import React, { useState, useRef, useEffect } from "react";
import "./ComingSoon.css";
import axios from "axios";

import { FaCopyright } from "react-icons/fa";
import ResponseModal from "./Modal";
import MobileComingSoon from "./Mobile";
// import { useCountdown } from "./useCountdown";
import NormalLayout from "../../layouts/NormalLayout";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
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
const ComingSoon = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = (evt:any) => {
      if (evt.target.innerWidth > 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop ? <Desktop /> : <MobileComingSoon />;
};

export default ComingSoon;

const Desktop = () => {
  const audioRef = useRef();
  // const [days, hours, minutes, seconds] = useCountdown("2022-10-10");
  const [open, setOpen] = useState<boolean>(false);
  const [play, setPlay] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e:any) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();

    setLoading(true);

    // axios
    //   .post("https://sportrex-be.herokuapp.com/api/comingsoon", { email })
    //   .then(function (response) {
    //     setOpen(true);
    //     setLoading(false);
    //     setEmail("");
    //   })
    //   .catch(function (error) {
    //     setEmail("");
    //     setLoading(false);
    //   });
    setTimeout(() => {
      setOpen(true);
          setLoading(false);
          setEmail("");
    }, 3000);
  };




  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-blue-commingSoon relative overflow-x-hidden  md:flex justify-center items-center hidden ">
        <ResponseModal open={open} setOpen={setOpen} />
        <div className="coming-soon-bg ">
          <div className="coming-overlay ">
            <div className="2xl:container 2xl:mx-auto max-w-[1440px] mx-auto flow-hide h-screen relative">
              <NormalLayout>
                <div className="w-full flex flex-col  justify-center mt-10 relative">
                  <div className="flex justify-between w-full items-center">
                    <div className="w-[181px] h-auto ">
                      <img src={logo} alt="logo" className="w-full h-auto" />
                    </div>
                    
                     
                    <div className="flex space-x-8 items-center">
                      <a
                        href="https://media.publit.io/file/SPORTREX-WHITE-PAPER.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f1f1f1] hover:text-white regular cursor-pointer"
                      >
                        Whitepaper
                      </a>

                      <span
                        className="grad-bg w-10 h-10 grid place-items-center rounded-full text-white text-2xl cursor-pointer"
                        onClick={() => setPlay(!play)}
                      >
                        {play ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex supo supo-height flex-col 2xl:justify-center ">
                    <h1 className="text-white  text-[48px] leading-[50px] mt-20 bold  line-1 anim-typewriter ml-4">
                      Anticipate{" "}
                      <span className="coming-soon-text ml-2">Sportrex</span>
                    </h1>
                    <h1 className="coming-soon-text ml-4 line-2 anim-typewriter1 bold text-[48px]">
                      NFT Marketplace
                    </h1>
                    <div className="flex flex-col">
                      <p className="text-[#f1f1f1] mt-4 w-6/12 2xl:w-5/12  text-start text-[20px] regular leading-8 pl-4 ">
                        Home to virtual assets, digital arts and collectibles.
                        Through our platform, users will be able to access the
                        most amazing NFT deals for all categories users with
                        VR/AR experience.
                        <span className="logo-svg"></span>
                      </p>
                    </div>

                    <div className="mt-10 w-full mb-4">
                      <div className="2xl:w-5/12  w-6/12  flex items-center bg-[#152139] h-16 rounded-[20px] ">
                        <input
                          type="text"
                          className="w-6/12 mx-auto pl-6 py-1 bg-transparent placeholder:text-[#999] placeholder:opacity-60 outline-none border-none regular text-white placeholder:text-[14px]"
                          placeholder=" Enter your email or ENS address "
                          onChange={handleChange}
                          value={email}
                        />
                        {loading ? (
                          <p className="coming-soon-btn w-4/12 h-full rounded-[20px] cursor-wait text-white bold text-[18px] text-center flex justify-center items-center">
                            Please wait ...
                          </p>
                        ) : (
                          <p
                            className="coming-soon-btn w-4/12 h-full rounded-[20px] cursor-pointer text-white bold text-[18px] text-center flex justify-center items-center"
                            onClick={handleSubmit}
                          >
                            Get Notified
                          </p>
                        )}
                      </div>
                      <p className=" mt-2 text-md text-[#999] regular text-center 2xl:w-5/12  w-6/12">
                        **Notify me when website launch**
                      </p>
                      <div className="  flex justify-between flex-row-reverse items-end mt-[72px] bottom-down bottom-down-height 2xl:container 2xl:mx-auto max-w-[1440px] mx-auto">
                        <div className="flex flex-col items-end ">
                          <h1 className="text-white text-[20px] text-start bold">
                            Join the Sportrex community
                          </h1>
                          <div className="flex space-x-2 justify-end mt-4">
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
                                      className="w-10 h-auto"
                                    />
                                  </abbr>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                        <div className="mt-16 flex space-x-2 items-center justify-start">
                          <FaCopyright className="text-[#999] regular text-[14px]" />
                          <p className="text-[#fff] regular text-[14px]">
                            2022 Sportrex Inc. All right reserved
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NormalLayout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
