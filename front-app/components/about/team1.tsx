import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  const team = [
    {
      name: "Tony Gordon",
      image: "/images/chef-2.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        youtube: "#",
      },
    },
    {
      name: "Mike Tomskin",
      image: "/images/chef-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        youtube: "#",
      },
    },
    {
      name: "Edward Solo",
      image: "/images/chef-3.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-[#F8F9FA]">
      <div className="web-container px-4 md:px-6">
        <div className="flex justify-between space-y-4">
          <h2 className="text-3xl w-[1500px] md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Meet The Team of NYUS.
          </h2>
          <p className="flex mx-auto w-[1200px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed text-xl:text-xl/relaxed">
            Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
            Bibendum tincidunt a scelerisque consec fotetur ultrices elementum
            pulvinar non. Leo ut id vel nec nisi odio nisi. Auctor egestas nibh
            augue enim, ornare blandit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center space-y-4"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <div className="flex space-x-4">
                <Link
                  href={member.social.facebook}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <FaFacebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href={member.social.twitter}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <BsTwitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href={member.social.youtube}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <BsYoutube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
