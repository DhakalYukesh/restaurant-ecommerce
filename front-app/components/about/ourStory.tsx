import Image from "next/image";
import { FaBoxArchive } from "react-icons/fa6";
import { BsCupHotFill } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";

const OurStory = () => {
  return (
    <section className="web-container px-4 py-16 md:py-24 relative">
      <div className="grid gap-16">
        <div className="flex justify-between mb-16">
          <h1 className="text-5xl font-bold text-center flex">Our Story</h1>
          <div className="flex flex-col w-[746px] gap-4 text-gray-500">
            <p>
              Mattis nisi, ultricies nunc pellentesque pulvinar malesuada
              habitant in. Sed sagittis lectus ut euismod. Mauris, dui viverra a
              tincidunt tellus tempus amet. Posuere massa at ornare nulla
              facilisi. Dignissim volutpat velit ut dignissim aliquet nisi,
              pretium, viverra bibendum.
            </p>
            <p>
              Consequat facilisi ultricies integer eu nibh pellentesque. Morbi
              ac sit ultricies quis dignissim lectus. Pellentesque nisi, ac,
              bibendum arcu vestibulum aliquam.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-cols-[1fr,2fr] gap-8 items-start">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <FaBoxArchive className="text-white" size={20} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Hand-crafted Decoration
              </h3>
              <p className="text-gray-500">
                In total 650m² mix of styles and colors.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <BsCupHotFill className="text-white" size={20} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cozy Place</h3>
              <p className="text-gray-500">
                Feel at home and find your atmosphere.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <SiApplemusic className="text-white" size={20} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Relax Atmosphere</h3>
              <p className="text-gray-500 w-[300px]">
                Take refuge in our greenery and away from the crowds.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-[120px] bottom-[-80px]">
          <Image
            src="/images/story.jpg"
            alt="Aerial view of our cafe interior"
            width={640}
            height={640}
            className="w-full aspect-[4/3] object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
