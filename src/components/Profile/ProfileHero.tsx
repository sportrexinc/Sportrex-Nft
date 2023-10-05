import { useState } from "react";
import React from "react";
import thumbnail from "../../assets/profile/thumbnail.jpg";
import { FiSettings } from "react-icons/fi";
import { AiFillCamera } from "react-icons/ai";
import "./profile.css";

const styles = {
  parentContainer: "w-full flex flex-col",
  thumbContainer: "relative flex flex-col ",
  imgContainer:
    "bg-gradient rounded-full w-[200px] md:w-[240px] h-[200px] md:h-[240px] flex items-center justify-center absolute bottom-[-30%] left-[40%]  ",
  profileImg:
    "bg-gradient rounded-full w-[197px] md:w-[230px] h-[197px] md:h-[230px] ",
  contentContainer: "mt-40 w-full flex justify-center ",
  content: "w-11/12 sm:8/12 lg:w-5/12 mx-auto flex flex-col w-full",
  nameContainer: " flex items-center space-x-4   w-full justify-center",
};

const ProfileHero = () => {
  const [activeTab, setActiveTab] = useState("nft");

  let img =
    "https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139130/cupcake5_wgeqy0.jpg";
  return (
    <div className={styles.parentContainer}>
      <div
        className={styles.thumbContainer}
        style={{
          background: "no-repeat center center fixed",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.1)) , url(${thumbnail})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          backgroundSize: "cover",
          backgroundColor: "#fafafa",
          height: "40vh",
          width: "100%",
          zIndex: 0,
        }}
      >
        <div className="flex space-x-4 absolute right-8 bottom-4">
          <FiSettings className="text-white text-3xl" />
          <AiFillCamera className="text-white text-3xl" />
        </div>
        <div className={styles.imgContainer}>
          <img
            src={img}
            className={styles.profileImg}
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.nameContainer}>
            <p className="text-xl regular text-white ">Username</p>
            <p className="text-2xl  text-yellow semibold ">Daniekeys</p>
          </div>
          <div className="mt-6 regular text-white text-lg regular text-center">
            <p>3tekf3b31hjdqr7i3h2e8hjv</p>
          </div>
          <div className="text-lg regular mt-4 ">
            <p className="text-center regular text-lg regular leading-8">
              Lorem ipsum, lorem ispu m lorem ipsum lorem ipsumLorem ipsum,
              lorem ispu m lorem ipsum lorem ipsumorem ispu m lorem ipsum lorem
              ipsumLorem ipsum, lorem ispu m lorem ipsum lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
