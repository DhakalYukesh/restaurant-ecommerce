import Image from "next/image";
import Button from "../generic/button";

const RESERVATION = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="web-container">
        <div className="grid grid-cols-1 gap-8 place-items-center">
          <div className="text-center flex flex-col items-center justify-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Reservation
            </h3>
            <p className="text-sm text-center text-zinc-500 text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
              Bibendum tincidunt a scelerisque consectetur ultrices elementum
              pulvinar non.
            </p>
            <Button
              className="text-center"
              href="/book"
              title="BOOK A TABLE"
              variant="white"
            />
            <div className="mt-12">
              <h3 className="text-xs text-center font-semibold tracking-wider text-muted-foreground mb-2">
                Telephone Reservations
              </h3>
              <p className="text-4xl md:text-4xl font-bold">12 34 56 7890</p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/cake-image.png"
        width={250}
        height={250}
        alt=""
        className="absolute right-[-20px] bottom-[-60px] z-40"
      />
    </section>
  );
};

export default RESERVATION;
