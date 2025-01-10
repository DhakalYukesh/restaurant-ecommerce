import Content from "@/components/landing/content";
import Hero from "@/components/landing/hero";
import Menu from "@/components/landing/menu";
import RESERVATION from "@/components/landing/reservation";
import SIGNATUREMENU from "@/components/landing/signatureMenu";
import TEAM from "@/components/landing/team";
import TESTIMONIAL from "@/components/landing/testimonial";

const page = () => {
  return (
    <>
      <Hero />
      <Content />
      <Menu />
      <SIGNATUREMENU />
      <TEAM />
      <TESTIMONIAL />
      <RESERVATION />
    </>
  );
};

export default page;
