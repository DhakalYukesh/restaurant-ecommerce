import Image from "next/image";

const Content = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text and Interior Image */}
        <div className="space-y-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Discover the Good
              <br />
              Atmosphere of NYUS.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
              Bibendum tincidunt a scelerisque consectetur ultrices elementum
              pulvinar non. Leo ut id vel nec nis odio mi. Auctor egestas nibh
              augue enim, ornare blandit. Purus augue sagittis, risus phasellus
              egestas ipsum.
            </p>
          </div>

          <div className="space-y-4">
            <Image
              src="/images/good-vibes.jpg"
              alt="Restaurant interior with quilted leather seating"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-xl mb-2">Good Vibes</h3>
              <p className="text-gray-600">
                In total 650m² of hand-crafted decor, mix of styles and colors.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <Image
              src="/images/cozy-place.jpg"
              alt="Outdoor seating area with hanging plants"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-xl mb-2">Cozy Place</h3>
              <p className="text-gray-600">
                To make everyone entering the establishment feel at home and
                find their atmosphere.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Image
              src="/images/relax-atmosphere.jpg"
              alt="Evening ambiance with Relax sign"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-xl mb-2">Relax Atmosphere</h3>
              <p className="text-gray-600">
                Take refuge in our exclusive haven of greenery and away from the
                crowds. Live music and performances every Friday night!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Image
          src="/images/blueberry.png"
          alt="Breakfast dish with blueberries"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default Content;
