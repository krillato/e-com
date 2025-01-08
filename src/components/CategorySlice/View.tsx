"use client";
import Image from "next/image";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Phones",
    image: "/images/category/Category-CellPhone.svg",
    imageHover: "/images/category/Category-CellPhone-hover.svg",
  },
  {
    id: 2,
    name: "Computers",

    image: "/images/category/Category-Computer.svg",
    imageHover: "/images/category/Category-Computer-hover.svg",
  },
  {
    id: 3,
    name: "SmartWatch",
    image: "/images/category/Category-SmartWatch.svg",
    imageHover: "/images/category/Category-SmartWatch-hover.svg",
  },
  {
    id: 4,
    name: "Camera",
    image: "/images/category/Category-Camera.svg",
    imageHover: "/images/category/Category-Camera-hover.svg",
  },
  {
    id: 5,
    name: "Headphones",
    image: "/images/category/Category-Headphone.svg",
    imageHover: "/images/category/Category-Headphone-hover.svg",
  },
  {
    id: 6,
    name: "Gaming",
    image: "/images/category/Category-Gamepad.svg",
    imageHover: "/images/category/Category-Gamepad-hover.svg",
  },
  // Add more products as needed
];

export default function CategorySlider({
  scrollLeft,
  scrollRight,
  sliderRef,
}: {
  scrollLeft: () => void;
  scrollRight: () => void;
  sliderRef: React.RefObject<HTMLDivElement>;
}) {
  const [over, setOver] = useState({ status: false, index: 0 });
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
        {products.map((product, index) => (
          <div
            onMouseOver={() => setOver({ status: true, index: index })}
            onMouseOut={() => setOver({ status: false, index: 0 })}
            key={product.id}
            className="min-w-[170px] hover:bg-[#DB4444] hover:text-white cursor-pointer h-[145px] border justify-center items-center gap-4 flex flex-col text-center rounded-lg shadow-md bg-white p-4"
          >
            {/* Discount Badge */}
            <div className="relative">
              <Image
                key={product.id}
                src={
                  over?.status && over?.index === index
                    ? product.imageHover
                    : product.image
                }
                //src={product.image}
                alt={product.name}
                width={56}
                height={56}
                className="w-[56px]  h-[56px]  rounded-md"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute w-[50px] h-[50px] top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
      >
        &gt;
      </button>
    </div>
  );
}
