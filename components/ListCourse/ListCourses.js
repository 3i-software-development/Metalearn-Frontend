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
  return (
    <div className={cx("list")}>
      {data?.map((item, index) => (
        <div key={index} className={cx("card")}>
          {clas && <CourseCard data={item} clas />}
          {exam && <CourseCard data={item} exam />}
          {doc && <CourseCard data={item} doc />}
        </div>
      ))}
    </div>
  );
};

export default ListCourses;
