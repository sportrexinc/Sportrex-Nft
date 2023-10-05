import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
const Profile = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const gotoProfile = () => {
    navigate("/profile");
    setOpen(false);
  };

  return (
    <div className="flex flex-col relative w-fit px-2">
      <div
        className="flex items-center  cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <FaUserCircle className="text-blue-btn text-2xl mr-6 cursor-pointer" />
      </div>
      {open && (
        <div className="absolute  top-[64px] right-0 w-[200px] h-auto flow-hide bg-blue-header p-4 flex flex-col space-y-3 ">
          <div className="flex">
            <h4 className="bold text-white text-md">Connected </h4>
            <span className="text-green bg-green bold text-[18px] self-end ">
              <GoPrimitiveDot />
            </span>
          </div>

          <div
            className="flex space-x-2 cursor-pointer items-center "
            onClick={() => setOpen(false)}
          >
            <p className="text-white text-md"> 0x234567890bfjshw</p>
            <IoIosCopy className="text-grey-800 text-md cursor-pointer" />
          </div>
          <p
            className="text-yellow regular text-lg regular cursor-pointer"
            onClick={gotoProfile}
          >
            My Profile
          </p>
          <p className="text-grey-800 regular cursor-pointer">
            Profile Settings
          </p>
          <p className="text-grey-800 regular cursor-pointer">
            Disconnect wallet
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
