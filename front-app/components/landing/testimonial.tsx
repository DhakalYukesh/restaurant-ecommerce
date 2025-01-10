import Image from "next/image";

const TESTIMONIAL = () => {
  return (
    <div className="min-h-64 bg-black/90 flex flex-col items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/images/test.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />

      <div className="web-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <p className="text-white text-sm font-medium mb-6">Testimonial</p>
          <h2 className="text-white text-5xl font-bold">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "EMMA ODINSON",
              image: "/images/pp1.jpeg",
              text: "Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.",
            },
            {
              name: "DIAN ANNAKIN",
              image: "/images/pp2.jpg",
              text: "Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.",
            },
            {
              name: "KYLE SMITH",
              image: "/images/pp3.jpg",
              text: "Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="relative group ">
              <div className="bg-black/95 rounded-2xl p-8 text-center mt-8 relative z-10 h-full transform transition duration-300 group-hover:-translate-y-2">
                <div className="relative w-24 h-24 mx-auto -mt-20 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-400" />
                  <Image
                    src={testimonial.image}
                    width={100}
                    height={100}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                <h3 className="text-white text-sm font-bold tracking-wider ">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TESTIMONIAL;
