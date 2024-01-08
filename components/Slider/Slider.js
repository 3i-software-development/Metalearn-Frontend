import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);

const Slider = () => {
  const slides = ["/image/slider-1.png", "/image/2.png", "/image/3.png"];

  // Hàm xử lý sự kiện điều hướng Swiper sang trang trước
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Hàm xử lý sự kiện điều hướng Swiper sang trang sau
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay, Navigation]}
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

      <div className={cx("display-None")}>
        <IoMdArrowDropleftCircle
          className={cx("prev-button", "btn-nav")}
          onClick={handlePrev}
        />
      </div>

      <div className={cx("display-None")}>
        <IoMdArrowDroprightCircle
          className={cx("next-button", "btn-nav")}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Slider;
