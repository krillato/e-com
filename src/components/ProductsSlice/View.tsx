"use client";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    rating: 4.5,
    reviews: 88,
    image: "/images/product/3.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    rating: 4,
    reviews: 75,
    image: "/images/product/1.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    rating: 4.5,
    reviews: 99,
    image: "/images/product/2.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    rating: 4.5,
    reviews: 99,
    image: "/images/product/4.png",
  },
  {
    id: 5,
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    rating: 4.5,
    reviews: 99,
    image: "/images/product/4.png",
  },
  {
    id: 6,
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    rating: 4.5,
    reviews: 99,
    image: "/images/product/4.png",
  },
  // Add more products as needed
];

export default function ProductSlider({
  scrollLeft,
  scrollRight,
  sliderRef,
}: {
  scrollLeft: () => void;
  scrollRight: () => void;
  sliderRef: React.RefObject<HTMLDivElement>;
}) {
  /*   const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }; */

  return (
    <div className="relative  w-full">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
      >
        &lt;
      </button>

      {/* Product Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[300px] border rounded-lg shadow-md bg-white p-4"
          >
            {/* Discount Badge */}
            <div className="relative">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {product.discount}
              </span>

              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="w-full h-40 hover:object-cover rounded-md"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 font-bold">{product.price}</span>
              <span className="text-gray-500 line-through">
                {product.oldPrice}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center text-yellow-400 mt-2">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="text-gray-500 text-xs ml-2">
                ({product.reviews})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
      >
        &gt;
      </button>
    </div>
  );
}
