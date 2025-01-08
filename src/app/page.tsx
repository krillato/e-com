"use client";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { decrement, increment, appSelector } from "@/store/slices/appSlice";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import ProductSlider from "@/components/ProductsSlice/View";
import ViewTitleText from "@/components/Label/TittleText/View";
import CategorySlider from "@/components/CategorySlice/View";
import ProductHighlightView from "@/components/ProductHighlight/View";
import ProductsTwoSlice from "@/components/ProductsTwoSlice/View";
import CategoryView from "@/components/ProductsNewArrival/View";

const CounterButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-2 mt-4">
      <button onClick={() => dispatch(decrement())} className="btn">
        Decrement
      </button>
      <button onClick={() => dispatch(increment())} className="btn">
        Increment
      </button>
    </div>
  );
};

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

const bestSeller = [
  {
    id: 1,
    name: "The north coat",
    price: "$260",
    oldPrice: "$360",
    rating: 4.5,
    reviews: 65,
    discount: "-30%",
    image: "/images/product/5.svg",
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1160",
    rating: 4.5,
    reviews: 65,
    discount: "-20%",
    image: "/images/product/6.svg",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    rating: 4.5,
    reviews: 65,
    discount: "-5%",
    image: "/images/product/7.svg",
  },
  {
    id: 4,
    name: "Small BookShelf",
    price: "$360",
    oldPrice: "$400",
    rating: 4.5,
    reviews: 65,
    discount: "-10%",
    image: "/images/product/8.svg",
  },
];

export default function Home() {
  const appReducer = useSelector(appSelector);
  const sliderRef = useRef<HTMLDivElement>(null!);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="px-6 lg:px-[144px] w-auto flex flex-col ">
      {/* Header */}
      <div className="  py-5 h-24 items-center flex justify-between ">
        <div>Exclusive</div>
        <div className=" flex gap-[48px]">
          <div>Home</div>
          <div>Contact</div>
          <div>About</div>
          <div>Sign Up</div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-2">
            <input
              className="outline-none border-none"
              type="text"
              placeholder="What are you looking for?"
            />
            <Image
              src="/images/icons/icon_search.svg"
              alt="Example Image"
              width={16}
              height={16}
            />{" "}
          </div>
          <Image
            src="/images/icons/icon_like.svg"
            alt="Example Image"
            width={20}
            height={18}
          />{" "}
          <Image
            src="/images/icons/icon_shop.svg"
            alt="Example Image"
            width={32}
            height={32}
          />
        </div>
      </div>
      {/* Menu + label */}
      <div className="  flex  gap-11  w-auto">
        <div className="w-1/4 border-r-[1px]  h-[300px] overflow-auto">
          <ul className="gap-6 flex flex-col">
            <li className="flex gap-10 ">
              Woman’s Fashion{" "}
              <Image
                src="/images/icons/icon_expans.svg"
                alt="Example Image"
                width={8}
                height={13}
              />{" "}
            </li>
            <li className="flex gap-10 ">
              Men’s Fashion{" "}
              <Image
                src="/images/icons/icon_expans.svg"
                alt="Example Image"
                width={8}
                height={13}
              />{" "}
            </li>
            <li className="flex gap-10 ">Electronics</li>
            <li className="flex gap-10 ">Home & Lifestyle</li>
            <li className="flex gap-10 ">Medicine</li>
            <li className="flex gap-10 ">Sports & Outdoor</li>
            <li className="flex gap-10 ">Baby’s & Toys</li>
            <li className="flex gap-10 ">Groceries & Pets</li>
            <li className="flex gap-10 ">Health & Beauty</li>
          </ul>
        </div>
        <div className=" w-3/4  h-[300px]">
          {" "}
          {/* Adjust container size as needed */}
          <Swiper
            modules={[EffectFade, Autoplay, Pagination]}
            effect="fade"
            autoplay={{
              delay: 3000, // 3 seconds delay
              disableOnInteraction: false, // Continue autoplay after interaction
            }}
            loop={true} // Enables looping
            pagination={{
              clickable: true, // Enable clicking on dots to navigate
            }}
            className="h-full"
          >
            {[1, 2, 3].map((el) => (
              <SwiperSlide
                key={el}
                className="flex items-center justify-center bg-gray-200"
              >
                <Image
                  src={`/images/slice/1.svg`}
                  alt={`/images/slice/${el}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* flash sales */}
      <div className="mt-[120px] w-full">
        <ViewTitleText Title="Today’s" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <h1 className="text-[36px] font-semibold">Flash Sales</h1>
            <div className="flex items-center justify-center bg-gray-50">
              <CountdownTimer targetDate="2025-01-10T00:00:00" />
            </div>
          </div>

          <div className="flex gap-8">
            <div
              onClick={scrollLeft}
              className="bg-[#F5F5F5] w-[46px] cursor-pointer h-[46px] rounded-full p-2 items-center flex justify-center"
            >
              {"<"}
            </div>
            <div
              onClick={scrollRight}
              className="bg-[#F5F5F5] w-[46px] h-[46px] cursor-pointer rounded-full p-2 items-center flex justify-center"
            >
              {">"}
            </div>
          </div>
        </div>{" "}
        <ProductSlider
          dataList={products}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          sliderRef={sliderRef}
        />
        <div className="m-auto mt-10 bg-[#DB4444] text-white rounded-md flex justify-center items-center text-center p-3 w-[234px] cursor-pointer h-[56px]">
          <h3>View All Products</h3>
        </div>
      </div>
      {/* Categories */}
      <div className="mt-[120px] w-full">
        <ViewTitleText Title="Categories" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <h1 className="text-[36px] font-semibold">Browse By Category</h1>
          </div>

          <div className="flex gap-8">
            <div
              onClick={scrollLeft}
              className="bg-[#F5F5F5] w-[46px] cursor-pointer h-[46px] rounded-full p-2 items-center flex justify-center"
            >
              {"<"}
            </div>
            <div
              onClick={scrollRight}
              className="bg-[#F5F5F5] w-[46px] h-[46px] cursor-pointer rounded-full p-2 items-center flex justify-center"
            >
              {">"}
            </div>
          </div>
        </div>{" "}
        <CategorySlider
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          sliderRef={sliderRef}
        />
      </div>
      {/* Best Selling Products */}
      <div className="mt-[120px] mb-[120px] w-full">
        <ViewTitleText Title="This Month" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
          </div>

          <div className="flex gap-8">
            <div
              onClick={scrollLeft}
              className="bg-[#F5F5F5] w-[46px] cursor-pointer h-[46px] rounded-full p-2 items-center flex justify-center"
            >
              {"<"}
            </div>
            <div
              onClick={scrollRight}
              className="bg-[#F5F5F5] w-[46px] h-[46px] cursor-pointer rounded-full p-2 items-center flex justify-center"
            >
              {">"}
            </div>
          </div>
        </div>{" "}
        <ProductSlider
          dataList={bestSeller}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          sliderRef={sliderRef}
        />
      </div>
      {/* Highlight */}

      <ProductHighlightView />
      {/* Our Products */}
      <div className="mt-[120px] w-full">
        <ViewTitleText Title="Our Products" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <h1 className="text-[36px] font-semibold">Explore Our Products</h1>
          </div>
        </div>{" "}
        <ProductsTwoSlice />
      </div>
      {/* New Arrival */}
      <div className="mt-[120px] w-full">
        <ViewTitleText Title="Featured" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <h1 className="text-[36px] font-semibold">New Arrival</h1>
          </div>
        </div>{" "}
        <CategoryView />
      </div>
      {/* Footer */}
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  icon: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, icon, text }) => (
  <a
    className="flex items-center gap-2 hover:underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src={icon} alt={`${text} icon`} width={16} height={16} />
    {text}
  </a>
);

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-6 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit}>
          <p className="text-sm font-medium text-gray-500">
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </p>
          <div className="flex items-center text-4xl font-bold text-black">
            <span>{String(value).padStart(2, "0")}</span>
            {unit !== "seconds" && <span className="text-red-500 mx-2">:</span>}
          </div>
        </div>
      ))}
    </div>
  );
};
