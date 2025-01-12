import AboutUs from "@/components/about/aboutUs";
import OurStory from "@/components/about/ourStory";
import TitleBanner from "@/components/generic/title-banner";
import React from "react";

const page = () => {
  return (
    <>
      <TitleBanner
        src="/images/about.jpg"
        subText="PMassa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id."
      >
        About Us
      </TitleBanner>
      <AboutUs />
      <OurStory />
    </>
  );
};

export default page;
