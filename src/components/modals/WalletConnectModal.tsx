import * as React from "react";
import ReUseModal from "./ReUseModal";
import { FaTimes } from "react-icons/fa";
import coinbase from "../../assets/connect/coinbase.png";
import gamerswallet from "../../assets/connect/gamers-wallet.png";
import metamask from "../../assets/connect/metamask.png";
import walletconnect from "../../assets/connect/walletconnect.png";
import trustwallet from "../../assets/connect/trustwallet.png";
import { ModalProps } from "./StakeNftModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#0E1648",
  width: 400,
  borderRadius: "15px",
  ["@media (min-width:780px)"]: {
    // eslint-disable-line no-useless-computed-key

    width: 485,
  },
  bgcolor: "#0E1648",
  border: "none",
  outline: "none",
  boxShadow: 70,
};

export default function ConnectModal({ open, setOpen }: ModalProps) {
  // const [value, setValue] = React.useState("");

  return (
    <div>
      <ReUseModal open={open} setOpen={setOpen}>
        <div className="w-full flex flex-col rounded-[16px] ">
          <div className="div connect-bg ">
            <h1 className="text-white text-center bold text-[22px] ">
              Connect to wallet
            </h1>
          </div>
          <div className="w-full bg-blue-card px-4 flex flex-col space-y-3 mt-4 rounded-[16px]">
            <div className="w-9/12 mx-auto flex flex-col pb-4">
              <p className="text-center text-base regular bold text-white mb-9">
                Connect to your wallet to create an account and start trading
                NFTs
              </p>
              <button className="outline-none border-none mb-4">
                <img src={gamerswallet} alt="gamerswallet" className="w-full" />
              </button>
              <button className="outline-none border-none mb-4">
                <img src={metamask} alt="metamask" className="w-full" />
              </button>
              <button className="outline-none border-none mb-4">
                <img src={coinbase} alt="coinbase" className="w-full" />
              </button>
              <button className="outline-none border-none mb-4">
                <img
                  src={walletconnect}
                  alt="walletconnect"
                  className="w-full"
                />
              </button>
              <button className="outline-none border-none mb-4">
                <img src={trustwallet} alt="trustwallet" className="w-full" />
              </button>
            </div>
          </div>
        </div>
      </ReUseModal>
    </div>
  );
}
