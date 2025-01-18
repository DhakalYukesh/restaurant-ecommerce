import Link from "next/link";
import { navigationItems } from "@/lib/constant/generic.constant";
import Button from "./Button";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface NavbarProps {
  solid?: boolean;
}

const Navbar = ({ solid }: NavbarProps) => {
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

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
          <Link
            href="/cart"
            className="relative p-2 hover:bg-gray-100/10 rounded-full transition-colors"
          >
            {totalQuantity === 0 ? (
              ""
            ) : (
              <span className="bg-blue-600 text-white rounded-full text-xs absolute top-0 right-0 w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
            <CiShoppingCart
              className={solid ? "text-black" : "text-white"}
              size={26}
            />
          </Link>
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
