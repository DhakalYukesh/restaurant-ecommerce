import OurSpeciality from "@/components/about/ourSpeciality";
import OurStory from "@/components/about/ourStory";
import TitleBanner from "@/components/generic/title-banner";

const page = () => {
  return (
    <>
      <TitleBanner
        src="/images/about.jpg"
        subText="PMassa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id."
      >
        About Us
      </TitleBanner>
      <OurStory />
      <OurSpeciality />
    </>
  );
};

export default page;
