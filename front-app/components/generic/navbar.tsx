import Link from "next/link";
import { navigationItems } from "@/lib/constant/generic.constant";
import Button from "./button";
import Image from "next/image";

interface NavbarProps {
  solid?: boolean;
}

const Navbar = ({ solid }: NavbarProps) => {
  return (
    <nav
      className={`py-4 z-20 w-full ${
        solid ? "bg-white block" : "absolute top-0"
      }`}
    >
      <div className="web-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
          <Link
            href="/"
            className={`text-2xl font-bold uppercase tracking-widest ${
              solid ? "text-black" : "text-white"
            }`}
          >
            Joofi
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8">
          <ul
            className={`flex items-center justify-center gap-8  ${
              solid ? "text-black" : "text-gray-400"
            }`}
          >
            {navigationItems.map((item) => (
              <li
                key={item.href}
                className={`transition-colors duration-300 ease-in-out ${
                  solid ? "hover:text-blue-400" : "hover:text-white"
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          {solid ? (
            <Button href="/reservation" title="Reservation" variant="white" />
          ) : (
            <Button href="/reservation" title="Reservation" variant="black" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
