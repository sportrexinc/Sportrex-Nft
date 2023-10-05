import React,{useEffect} from 'react';
import {
  DesktopNav,
  Footer,
  
  Subscribe,
  TopCollections,
  BlockhainList,
  MainHero,
  MobileNavbar,
  How,
 
} from '../../components';
import MarketCategory from '../../components/MarketCategory/MarketCategory';
import Community from '../../components/Community/Cummunity';

import Blog from '../../components/LatestBlog/Blog';
import NewNft from '../../components/NFT/newNft';
import TrendingNFT from '../../components/NFT/trandingNft';
const Home = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div className="w-full min-h-screen h-full bg-blue-body text-white">
      <DesktopNav />
      <MobileNavbar />
      <Divider size={78}>
        <MainHero />
      </Divider>
      <Divider size={78}>
        <BlockhainList />
      </Divider>
      {/* <NewCarousel /> */}
      <Divider>
        {/* <PlatformWork /> */}
        <How />
      </Divider>
      <Divider />
      <TrendingNFT />
      <Divider />
      <div>
        <TopCollections />
      </div>
      <Divider size="150px" />

      <NewNft />
      <Divider />
      <div>
        {/* <MarketCategory /> */}
        <MarketCategory />
      </div>
      <Divider size="150px" />

      <Blog />

      <Divider size="150px" />

      <Community />
      {/* <NewNftBg /> */}
      <Divider size="150px" />
      <Subscribe />
      <Divider size="100px" />

      <Footer />
    </div>
  );
};
const Divider = ({ size, children }: { size?: string | number; children?: any; }) => {
  return (
    <div className="w-full h-full" style={{ marginTop: size || '150px' }}>
      {children}
    </div>
  );
};

export default Home;
