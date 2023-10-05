import React, { useState } from "react";
import logo from "../../assets/sportrex-logo.png";
import { navData } from "../../constants/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Language from "../Language/Language";
import Resources from "./Resources";
import Profile from "./Profile";
import Notification from "./Notification";
import ConnectModal from "../modals/WalletConnectModal";
import { FaUserCircle, FaBell } from "react-icons/fa";
const styles = {
  active: "text-white regular light text-[18px] border-b-[1px] border-white",
  inactive: "text-white text-[18px] text-grey-800 regular",
  listItem: "flex items-center justify-center",
};
const ConnectedNav = ({ current } : any) => {
  const navigate = useNavigate();
  const gotoProfile = () => {
    navigate("/profile");
  };
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="hidden lg:flex w-full bg-blue-card h-[82px] z-100 z-[9999] px-16  items-center sticky top-0 ">
      <div className="w-full flex justify-between items-center 2xl:container 2xl:mx-auto ">
        <div className="w-4/12 h-auto">
          <img src={logo} alt="logo" className="w-48" />
        </div>
        <div className="right w-8/12 flex ">
          <ul className="w-full flex items-center justify-around">
            {navData.map((item, index) => {
              return (
                <li key={index} className={styles.listItem}>
                  <Link
                    to={item.linkTo}
                    className={
                      current === item.id ? styles.active : styles.inactive
                    }
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
            <li className={styles.listItem}>
              <Resources />
            </li>
            <li className={styles.listItem}>
              <Language />
            </li>
            <li className={styles.listItem}>
              {/* <ActionBtn action={handleOpen} name="Connect Wallet" /> */}
              <div className="flex items-center">
                <Notification />
                <Profile />
              </div>
            </li>
          </ul>
        </div>
        <ConnectModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default ConnectedNav;
