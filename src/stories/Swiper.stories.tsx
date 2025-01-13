import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Define component metadata
const meta: Meta = {
  title: "Components/Swiper",
  component: Swiper,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

// Template for the story
const Template: StoryFn = (args) => (
  <div className="w-[1000px] h-[300px]">
    <Swiper
      modules={[EffectFade, Autoplay, Pagination]}
      {...args} // Spread the story's args
      className="h-full"
    >
      {[1, 2, 3].map((el) => (
        <SwiperSlide
          key={el}
          className="flex items-center justify-center bg-gray-200"
        >
          <Image
            src={`/images/slice/1.svg`}
            alt={`Slice ${el}`}
            width={1000}
            height={300}
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

// Story: Default Swiper
export const Default = Template.bind({});
Default.args = {
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    clickable: true,
  },
};
