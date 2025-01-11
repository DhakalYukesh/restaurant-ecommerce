import Contact from "@/components/contact/contact";
import TitleBanner from "@/components/generic/title-banner";
import Reservation from "@/components/landing/reservation";

const page = () => {
  return (
    <>
      <TitleBanner
        src="/images/landing.jpg"
        subText="PMassa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id."
      >
        Contact Us
      </TitleBanner>
      <Reservation
        subtitle="Our Location"
        title="3 E 19th St, 123 Fifth Avenue, NY 10160, New York, USA"
        email = "info@example.com"
        className="bg-gray-200"
      />
      <Contact />
    </>
  );
};

export default page;
