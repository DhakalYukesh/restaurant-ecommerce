import Image from "next/image";
import Button from "../generic/button";

const OurSpeciality = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-4">
      <div className="flex gap-20 max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <h2 className="text-5xl font-bold mb-6">Our Specialties</h2>
          <p className="text-white mb-8 w-[300px]">
            Consequat facilisi ultricies integer eu nibh pellentesque. Morbi ac
            sit ultrices quis dignissim lectus. Pellentesque nisl, ac, bibendum
            arcu vestibulum aliquam.
          </p>
          <Button
            className="text-center"
            href="/viewallmenu"
            title="VIEW ALL MENU"
            variant="black"
          />
        </div>

        <div className="flex mt-28 gap-16 lg:gap-28">
          <div className="text-center">
            <div className="relative w-80 h-80 mx-auto mb-6">
              <Image
                src="/images/breadgrapes.png"
                alt="NYUS Toasted Bread with Grape"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 765px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-sm font-bold mb-2">
              NYUS Toasted Bread with Grape
            </h3>
            <p className="text-gray-400 mb-2">Bread / Cream / Grape</p>
            <p className="text-xl font-bold">8.50</p>
          </div>

          <div className="text-center">
            <div className="relative w-80 h-80 mx-auto mb-6">
              <Image
                src="/images/cakegrapes.png"
                alt="NYUS Cheesy Fruits Cake"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 765px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-sm font-bold mb-2">NYUS Cheesy Fruits Cake</h3>
            <p className="text-gray-400 mb-2">Cake / Fruits / Cheese</p>
            <p className="text-xl font-bold">10.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSpeciality;
