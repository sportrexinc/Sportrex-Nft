import React,{useState} from "react";


import NonControlledLayout from "../../layouts/NonControlledLayout";
import NormalLayout from "../../layouts/NormalLayout";
import {
  ProfileTab,
  ProfileHero,
  MyActivities,
  Collections,
  MyOffer,
  Favourite,
  MyNfts,
} from "../../components";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1);

  return (
    <NonControlledLayout current={1}>
      <div className="mt-10">
        <ProfileHero />
          </div>
          <div className="mt-8">
              <ProfileTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="w-full h-auto mt-2 ">
        <NormalLayout>

      {activeTab === 1 && (<MyNfts />)}
      {activeTab === 2 && (<Collections />)}
      {activeTab === 3 && (<Favourite />)}
      {activeTab === 4 && (<MyOffer />)}
      {activeTab === 5 && (<MyActivities />)}
        </NormalLayout>
      
      </div>
    </NonControlledLayout>
  );
};

export default Profile;
