"use client";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { decrement, increment, appSelector } from "@/store/slices/appSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import ProductSlider from "@/components/ProductsSlice/View";

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

export default function Home() {
  const appReducer = useSelector(appSelector);

  return (
    <div className="px-[144px] flex flex-col">
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
      <div className="overflow-x-auto scroll-none flex flex-col gap-11 lg:flex-row w-full">
        <div className=" w-[300px] border-r-[1px]  h-[300px] overflow-auto">
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
        <div className="max-w-[900px]  h-[300px]">
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
        <div className="flex items-center gap-4">
          <div className="bg-[#DB4444] rounded-sm w-[20px] h-[40px]"></div>
          <h2 className="font-semibold text-[#DB4444]">Today’s</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-20">
            <h1 className="text-[36px] font-semibold">Flash Sales</h1>
            <div className="flex items-center justify-center bg-gray-50">
              <CountdownTimer targetDate="2025-01-10T00:00:00" />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full p-2 items-center flex justify-center">
              {"<"}
            </div>
            <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full p-2 items-center flex justify-center">
              {">"}
            </div>
          </div>
        </div>{" "}
        <ProductSlider />
      </div>
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
