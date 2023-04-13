import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import CourseCard from "./CourseCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

const cx = classNames.bind(styles);

const ListCourses = ({ data, clas, doc, exam }) => {
  const swiperRef = useRef(null);

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
    <div className={cx("list")}>
      {/* <Swiper
        className={cx("hot-slide")}
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
        navigation={false}
        // ref={swiperRef}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className={cx("item-slide")}>
            {clas && <CourseCard data={item} clas />}
            {exam && <CourseCard data={item} exam />}
            {doc && <CourseCard data={item} doc />}
          </SwiperSlide>
        ))}
      </Swiper>
      <IoMdArrowDropleftCircle
        className={cx("prev-button", "btn-nav")}
        onClick={handlePrev}
      />

      <IoMdArrowDroprightCircle
        className={cx("next-button", "btn-nav")}
        onClick={handleNext}
      /> */}
      {data?.map((item, index) => (
        <div key={index}>
          {clas && <CourseCard data={item} clas />}
          {exam && <CourseCard data={item} exam />}
          {doc && <CourseCard data={item} doc />}
        </div>
      ))}
    </div>
  );
};

export default ListCourses;
