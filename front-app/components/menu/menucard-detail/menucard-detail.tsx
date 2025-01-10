"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Button from "@/components/generic/button";
import { menuItems } from "@/lib/constant/menu.constant";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface MenuCardDetailProps {
  item: {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    category: string;
    rating?: number;
    reviews?: number;
  };
}

const MenuCardDetail = ({ item }: MenuCardDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = menuItems
    .filter((menuItem) => menuItem.category === item.category && menuItem.id !== item.id)
    .slice(0, 3);

  return (
    <div className="py-20">
      <div className="web-container">
        <Link 
          href="/menu" 
          className="inline-flex items-center gap-2 mb-6 text-sm hover:text-gray-600 transition-colors"
        >
          <IoArrowBack /> Back to Menu
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full">
              <Image
                src={item.images[selectedImage]}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {item.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-24 aspect-square flex-shrink-0 overflow-hidden border-2 
                  ${selectedImage === index ? "border-black" : "border-transparent"}`}
                >
                  <Image
                    src={img}
                    alt={`${item.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <span className="text-3xl font-bold">${item.price}</span>
              </div>
            </div>

            <p className="text-gray-600">{item.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border rounded-md hover:bg-gray-100"
                >
                  <AiOutlineMinus />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border rounded-md hover:bg-gray-100"
                >
                  <AiOutlinePlus />
                </button>
              </div>

              <div className="space-y-2">
                <Button className="w-full" href="" title="Add to Cart" />
                <Button className="w-full border-blue-500 text-white bg-blue-500 hover:bg-blue-600" href="" title="Buy Now" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Share:</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full border hover:bg-gray-100">
                    <FaFacebookF />
                  </button>
                  <button className="p-2 rounded-full border hover:bg-gray-100">
                    <BsTwitter />
                  </button>
                  <button className="p-2 rounded-full border hover:bg-gray-100">
                    <FaInstagram />
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-600">We Accept</span>
                  <div className="flex gap-1">
                    {["PayPal"].map((payment) => (
                      <div
                        key={payment}
                        className="px-2 py-1 bg-gray-100 rounded text-xs"
                      >
                        {payment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">You may also like</h2>
              <div className="flex gap-2">
                {[1, 2, 3].map((num) => (
                  <span
                    key={num}
                    className={`w-6 h-1 rounded ${
                      num === 1 ? "bg-black" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  href={`/menu/${product.id}`}
                  key={product.id}
                  className="space-y-2 block hover:opacity-80 transition"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{product.name}</span>
                      <span className="font-bold">${product.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCardDetail;
