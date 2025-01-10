import TitleBanner from "@/components/generic/title-banner";
import MenuPage from "@/components/menu/menu-page";

const page = () => {
  return (
    <>
      <TitleBanner
        src="/images/relax-atmosphere.jpg"
        subText="Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id."
      >
        Menu
      </TitleBanner>
      <MenuPage />
    </>
  );
};

export default page;
