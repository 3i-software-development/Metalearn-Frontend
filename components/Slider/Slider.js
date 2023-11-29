import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  const slides = [
    "https://cdn.brvn.vn/topics/1280px/2022/324462_Cover-1200x630_1649988626.jpg",
    "https://cdn.brvn.vn/topics/1280px/2022/324462_Cover-1200x630_1649988626.jpg",
    "https://cdn.brvn.vn/topics/1280px/2022/324462_Cover-1200x630_1649988626.jpg",
  ];
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            width={2000}
            height={2000}
            layout="responsive"
            src={slide}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
