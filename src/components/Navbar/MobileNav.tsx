import React, { useState } from "react";

// import { useTranslation } from "react-i18next";
import ActionBtn from "../Button/ActionBtn";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import menu from "../../assets/hamburger.png";
import cancel from "../../assets/cancel.svg";
import Language from "../Language/Language";

const styles = {
  parentContainer: "w-full overflow-x-hidden m-sticky-nav lg:hidden",
  container:
    "w-11/12 mx-auto flex flex-col justify-between items-center biome-regular relative overflow-x-hidden",
  logoContainer: "w-full flex justify-between items-center min-h-[36px]  pt-4",
  navToggler: "lg:hidden",
  menuCard:
    "fixed z-[102] bg-blue flex flex-col justify-between top-[64px] left-0 right-0 w-full h-screen transition-all duration-1000 ease-in-out bg-blue-card",
  menuContainer:
    "w-full py-10 px-6 flex flex-col gap-9 transition-all duration-1000 ease-in-out",
  menuItem: "text-grey hover:text-white text-md biome-semibold",
  menuItemActive: "text-white text-md biome-semibold",
  homeContainer: "flex flex-col",
  buttonContainer: "flex row-reverse space-x-6 mt-8 relative ",
  preBtn: "text-yellow m-preBtn border-yellow border-[1px] px-4 py-2  ",
  getBtn: "text-white m-getBtn font-bold bold bg-lightBlue px-4 py-2 mr-4 ",
};

const MobileNavbar = () => {
  // const { t } = useTranslation();
  // const [open, setOpen] = useState(false);

  // const router = useNavigate();
  // const { hash } = router;

  // const handleCloseModal = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      {/* <nav className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" width={118} height={21} />
            {open ? (
              <img
                src={cancel}
                alt="Close Menu"
                className={styles}
                onClick={handleClose}
                width={"36px"}
                height={"36px"}
              />
            ) : (
              <img
                src={menu}
                alt="menu button"
                className={styles.navToggler}
                onClick={handleOpen}
                width={"36px"}
                height={"36px"}
              />
            )}
          </div>
          {open && (
            <div
              style={{
                maxHeight: "calc(100vh - 64px)",
              }}
              className={styles.menuCard}
            >
              <div className="flex flex-col justify-between h-full pb-12">
                <div className={styles.menuContainer}>
                  <div>
                    <a
                      href="#Home"
                      className={
                        !hash || hash === "#Home"
                          ? styles.menuItemActive
                          : styles.menuItem
                      }
                    >
                      {t("Home")}
                    </a>
                    {(!hash || hash === "#Home") && (
                      <div className="w-6 h-[1px] bg-white" />
                    )}
                  </div>
                  <div>
                    <a
                      href="#Features"
                      className={
                        hash === "#Features"
                          ? styles.menuItemActive
                          : styles.menuItem
                      }
                    >
                      {t("Features")}
                    </a>
                    {hash === "#Features" && (
                      <div className="w-6 h-[1px] bg-white" />
                    )}
                  </div>
                  <div>
                    <a
                      href="#Partners"
                      className={
                        hash === "#Partners"
                          ? styles.menuItemActive
                          : styles.menuItem
                      }
                    >
                      {t("Partners")}
                    </a>
                    {hash === "#Partners" && (
                      <div className="w-6 h-[1px] bg-white" />
                    )}
                  </div>
                  <div>
                    <a
                      href="https://media.publit.io/file/SPORTREX-WHITE-PAPER-2022-version1.pdf"
                      className={styles.menuItem}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("Whitepaper")}
                    </a>
                  </div>
                  <div>
                    <a
                      href="#API"
                      className={
                        hash === "#API"
                          ? styles.menuItemActive
                          : styles.menuItem
                      }
                    >
                      {t("API")}
                    </a>
                    {hash === "#API" && (
                      <div className="w-6 h-[1px] bg-white" />
                    )}
                  </div>
                  <div>
                    <Language />
                  </div>
                </div>
                <div className="flex">
                  <ActionBtn
                    text={t("Connect Wallet")}
                    action={handleCloseModal}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav> */}
    </>
  );
};

export default MobileNavbar;
