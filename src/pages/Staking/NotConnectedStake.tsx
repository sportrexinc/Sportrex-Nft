import React,{useState} from 'react'
import ParentLayout from '../../layouts/ParentLayout'
import { ActionBtn,ConnectModal } from '../../components'
import Stake from '../../assets/stake-animation.svg'

const NotConnectedStake = () => {
   const [open, setOpen] = useState(false);
   let current = 1;

   const handleOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
  return (
    <ParentLayout>
      <div className="grid h-screen w-full place-items-center">
        <div className="w-full lg:w-5/12 xl:w-4/12 flex flex-col ">
          <div className="mx-auto w-full">
            <img src={Stake} alt="stake" className="w-[130px] h-auto mx-auto" />
          </div>
          <p className="text-center semibold text-white text-2xl mt-10">
            Track and view all NFTs ranking and market valuation
          </p>
          <div className="w-full mt-10">
            <ActionBtn name="Connect Wallet" action={handleOpen} />
          </div>
        </div>
        <ConnectModal open={open} setOpen={setOpen} />
      </div>
    </ParentLayout>
  );
}

export default NotConnectedStake
