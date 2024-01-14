import MainInfo from "./main-info";
import MoreInfo from "./more-info";
import { Navbar } from "./navbar";
import Whitelistbar from "./whitelistbar";
import React from "react";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <MainInfo />
      <MoreInfo />

      <Whitelistbar />
    </>
  );
};

export default LandingPage;
export {
  // DownloadPlusWhitelist,
  // FeatureOne,
  // FeatureTwo,
  // FeatureThree,
  // FeatureFour,
  // FeatureFive,
  // Info,
  // ScrollIndicator,
  // Scrollbar,
  Whitelistbar,
};
