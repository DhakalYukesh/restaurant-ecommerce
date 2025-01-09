import Content from "@/components/generic/landing/content";
import Hero from "@/components/generic/landing/hero";
import Menu from "@/components/generic/landing/menu";
import SIGNATUREMENU from "@/components/generic/landing/signatureMenu";
import TEAM from "@/components/generic/landing/team";

const page = () => {
  return (
    <>
      <Hero />
      <Content />
      <Menu />
      <SIGNATUREMENU />
      <TEAM />
    </>
  );
};

export default page;
