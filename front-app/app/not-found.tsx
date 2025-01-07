import Button from "@/components/generic/button";
import Navbar from "@/components/generic/navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="py-20 bg-gray-100">
        <div className="web-container bg-white">
          <div className="p-20 text-center flex flex-col items-center">
            <h2 className="text-7xl font-bold leading-snug">
              This page doesn❜t seem to exist.
            </h2>
            <h3 className="text-2xl font-bold mt-4 text-gray-500">
              It looks like the link pointing here was faulty. Maybe try
              searching?
            </h3>
            <Button
              href="/"
              title="Go back home"
              variant="white"
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
