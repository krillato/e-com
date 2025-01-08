"use client";
import Image from "next/image";
import React from "react";

interface IProductSlider {
  dataList: {
    id: number;
    name: string;
    price: string;
    oldPrice: string;
    discount: string;
    rating: number;
    reviews: number;
    image: string;
  }[];
  scrollLeft: () => void;
  scrollRight: () => void;
  sliderRef: React.RefObject<HTMLDivElement>;
}

export default function ProductSlider({
  dataList,
  scrollLeft,
  scrollRight,
  sliderRef,
}: IProductSlider) {
  return (
    <div className="relative  w-full">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute w-[50px] h-[50px] top-1/2 left-0 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
      >
        &lt;
      </button>

      {/* Product Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4"
      >
        {dataList?.map((product) => (
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
                className="w-full h-40  rounded-md"
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
        className="absolute  w-[50px] h-[50px] top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
      >
        &gt;
      </button>
    </div>
  );
}
