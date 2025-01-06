import Link from "next/link";
import Button from "./Button";
import { navigationItems } from "@/lib/constant/generic.constant";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 py-4">
      <div className="web-container flex items-center justify-between">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
          Joofi
        </h2>

        <div className="flex items-center justify-center gap-8">
          <ul className="flex items-center justify-center gap-8 text-gray-400">
            {navigationItems.map((item) => (
              <li
                key={item.href}
                className="transition-colors duration-300 ease-in-out hover:text-white"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Button href="/reservation" title="Reservation" variant="black" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
