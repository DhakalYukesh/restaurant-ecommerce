import Link from "next/link";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  href: string;
  variant?: "white" | "black";
  className?: string;
}

const Button = ({
  title,
  onClick,
  href,
  variant = "white",
  className,
}: ButtonProps) => {
  const bgColor =
    variant === "white" ? "text-black border-black" : "text-white border-white";
  const hoverColor =
    variant === "white"
      ? "hover:bg-black hover:text-white"
      : "hover:bg-white hover:text-black";

  return (
    <Link
      href={href}
      className={`${className} text-xs px-8 py-3 uppercase font-bold tracking-wider bg-transparent ${bgColor} text-center flex items-center justify-center w-fit border ${hoverColor} transition-all duration-500 ease-in-out`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default Button;
