import React,{useState} from "react";
import ProfileSelect from "../../Select/ProfileSelect";
import Owned from "./Owned";
import Listed from "./Listed";
import Created from "./Created";
const MyNfts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(1);
  const data = [
    {
      value: "Owned by me",
      label: "Owned by me",
      id: 1,
    },
    {
      value: "Created by me",
      label: "Created by me",
      id: 2,
    },
    {
      value: "Listed by me",
      label: "Listed by me",
      id: 3,
    },
  ];
  return (
    <div className="bg-blue-body w-full h-full">

      <div className="mt-3 w-64">

        <ProfileSelect isOpen={isOpen} setIsOpen={setIsOpen} setActive={setActive} active={active} data={data} name="Owned by me" />
      </div>
      <div className="mt-6">
        {active === 1 && (<Owned />)}
        {active === 2 && (<Created />)}
        {active === 3 && (<Listed />)}
      </div>
    </div>
  );
};

export default MyNfts;
