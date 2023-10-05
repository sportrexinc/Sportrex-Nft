import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Market from "./pages/Market";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Intro from "./pages/IntroPage";
import FAQ from "./pages/FAQ";
import SelectNft from "./pages/NftCollections/SelectNft";
import SingleNft from "./pages/NftCollections/SingleNft";
import CollectionNft from "./pages/NftCollections/CollectionNft";
import BundleNft from "./pages/NftCollections/BundleNft";
import EditNft from "./pages/NftCollections/EditNft";
import Staking from "./pages/Staking";
import LockedStake from "./pages/Staking/LockedStake";
import UnlockedStake from "./pages/Staking/UnlockedStake";
import NotConnectedStake from "./pages/Staking/NotConnectedStake";
import Testing from "./pages/Testing/Testing";
import Profile from "./pages/Profile";
import MintNft from "./pages/Profile/MintNft";
import EditCreatorProfile from "./pages/Profile/EditCreatorProfile";
import SingleMintNft from "./pages/Market/SingleMintNft";
import CollectionMintNft from "./pages/Market/CollectionMintNft";
import BundleMintNft from "./pages/Market/BundleMintNft";
import ComingSoon from "./pages/ComingSoon";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/select-nft" element={<SelectNft />} />
        <Route path="/single-nft" element={<SingleNft />} />
        <Route path="/collection-nft" element={<CollectionNft />} />
        <Route path="/bundle-nft" element={<BundleNft/>} />
        <Route path="/edit-nft" element={<EditNft/>} />
        <Route path="/staking" element={<Staking/>} />
        <Route path="/locked-stake" element={<LockedStake/>} />
        <Route path="/unlocked-stake" element={<UnlockedStake/>} />
        <Route path="/not-connected-stake" element={<NotConnectedStake/>} />
        <Route path="/testing" element={<Testing/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/mint-nft" element={<MintNft/>} />
        <Route path="/edit-creator-profile" element={<EditCreatorProfile/>} />
        <Route path="/mint-single-nft" element={<SingleMintNft/>} />
        <Route path="/mint-collection-nft" element={<CollectionMintNft/>} />
        <Route path="/mint-bundle-nft" element={<BundleMintNft/>} />
        <Route path="/" element={<ComingSoon/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
