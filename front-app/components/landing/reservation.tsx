import Image from "next/image";
import Button from "../generic/button";

interface ReservationProps {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  reservationTitle?: string;
  phoneNumber?: string;
  email?: string;
  imageSrc?: string;
  className?: string;
}

const Reservation = ({
  subtitle = "",
  title = "Reservation",
  description = "Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.",
  buttonText = "BOOK A TABLE",
  buttonLink = "/book",
  reservationTitle = "Telephone Reservations",
  phoneNumber = "12 34 56 7890",
  email = "",
  imageSrc = "/images/cake-image.png",
  className = "bg-white"
}: ReservationProps) => {
  return (
    <section className={`relative overflow-hidden py-16 md:py-24 ${className}`}>
      <div className="web-container">
        <div className="grid grid-cols-1 gap-8 place-items-center">
          <div className="text-center flex flex-col items-center justify-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <span className="tracking-widest text-sm text-bold mb-2">{subtitle}</span>
            <h3 className="text-3xl text-center md:text-5xl font-bold tracking-tight mb-6">
              {title}
            </h3>
            <p className="text-sm text-center text-zinc-500 text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            <Button
              className="text-center"
              href={buttonLink}
              title={buttonText}
              variant="white"
            />
            <div className="mt-12 flex flex-col items-center gap-4">
              <h3 className="text-md text-center font-semibold tracking-widest text-muted-foreground mb-2">
                {reservationTitle}
              </h3>
              <p className="text-4xl md:text-5xl font-bold">{phoneNumber}</p>
              <span className="text-center text-sm text-gray-500">{email}</span>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={imageSrc}
        width={250}
        height={250}
        alt=""
        className="absolute right-[-20px] bottom-[-60px] z-40"
      />
    </section>
  );
};

export default Reservation;
