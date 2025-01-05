import { ButtonProps } from "@/lib/types/generic.type";
import Link from "next/link";

const Button = ({ title, onClick, href, className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${className} text-sm px-8 py-3 bg-[#574A30] text-white text-center flex items-center justify-center w-fit border border-[#574A30] hover:bg-transparent hover:border-white transition-all duration-500 ease-in-out`}
      onClick={onClick}
    >
      {title} →
    </Link>
  );
};

export default Button;
