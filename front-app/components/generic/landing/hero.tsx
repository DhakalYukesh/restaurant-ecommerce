import { FaAngleDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('/images/landing.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="web-container relative container mx-auto px-4 pt-2">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
            <p className="text-white font-medium mb-6">
              GOOD PLACE. GOOD FOOD.
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-tight mb-6">
              A Really Good Place to Eat
              <br />
              In the City of New York
            </h1>
            <p className="text-gray-200 max-w-2xl mb-12">
              Massa praesent sit suspendisse ac volutpat amet. Commodo elit at
              non neque ullamcorper id.
            </p>

            <div className="absolute bottom-8 text-white flex flex-col items-center animate-bounce">
              <FaAngleDown />
              <span className="text-sm">SCROLL DOWN</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
