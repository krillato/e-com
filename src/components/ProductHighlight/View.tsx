"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <div className="flex gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-md"
        >
          <span className="text-xl font-bold">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium">
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

const ProductHighlightView: React.FC = () => {
  return (
    <div className="bg-black p-5 text-white min-h-[500px] flex items-center justify-center">
      <div className="container mx-auto  flex flex-col lg:flex-row items-center justify-between gap-12 px-8">
        {/* Left Section */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <p className="text-green-500 text-lg font-medium">Categories</p>
          <h1 className="text-5xl font-bold leading-snug">
            Enhance Your
            <br />
            Music Experience
          </h1>
          <CountdownTimer targetDate="2025-01-10T00:00:00" />
          <button className="bg-green-500 text-black py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition">
            Buy Now!
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex w-full  min-h-[400px] items-center justify-center relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent w-full h-auto bg-[#ffffffa2] to-black opacity-80 rounded-full"></div>

          {/* Image */}
          <div className="lg:w-1/2 h-full  flex justify-center relative">
            <Image
              src="/images/product/highlight.png" // Replace with actual image path
              alt="JBL Speaker"
              layout="responsive"
              width={300} // Base width
              height={200} // Base height
              className="relative z-10 transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlightView;
