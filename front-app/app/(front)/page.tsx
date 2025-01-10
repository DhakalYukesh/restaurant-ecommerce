import Content from "@/components/landing/content";
import Hero from "@/components/landing/hero";
import Menu from "@/components/landing/menu";
import Reservation from "@/components/landing/reservation";
import SignatureMenu from "@/components/landing/signatureMenu";
import Team from "@/components/landing/team";
import Testimonial from "@/components/landing/testimonial";

const page = () => {
  return (
    <>
      <Hero />
      <Content />
      <Menu />
      <SignatureMenu />
      <Team />
      <Testimonial />
      <Reservation />
    </>
  );
};

export default page;
