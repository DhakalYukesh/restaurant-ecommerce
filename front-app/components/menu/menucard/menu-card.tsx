"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsCart } from "react-icons/bs";

interface MenuCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const MenuCard: FC<MenuCardProps> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  return (
    <div className="group relative border border-gray-100 bg-white">
      <Link href={`/menu/${id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-3">
          <h3 className="text-base font-medium text-gray-900">{name}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-base font-medium text-gray-900">
              ${price.toFixed(2)}
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic here
              }}
              className="text-primary hover:text-primary/90 transition-colors"
            >
              <div className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300"> 
                <BsCart size={16} />
              </div>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuCard;
