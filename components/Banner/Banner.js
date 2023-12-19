import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import CountUp from "react-countup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Tùy chọn cho biểu đồ
const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 250, // Giá trị tối đa trên trục y
    },
  },
};

const cx = classNames.bind(styles);

const Banner = () => {
  const swiperRef = useRef(null);

  const data = {
    labels: ["28/3", "29/3", "30/3", "1/4", "2/4", "3/4", "4/4", "5/4"],
    datasets: [
      {
        label: "Câu hỏi đã làm",
        data: [70, 78, 120, 100, 119, 54, 211, 60],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Câu hỏi làm đúng",
        data: [12, 30, 65, 80, 76, 53, 188, 30],
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
    ],
  };

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

  // responsive circular progress
  return (
    <div className={cx("banner-slide")}>
      <Swiper
        className={cx("hot-slide")}
        modules={[
          // Autoplay,
          Navigation,
        ]}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView="auto"
        navigation={false}
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className={cx("")}>
            <Grid
              className={styles.banner1}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={4} className={cx("full-width-grid")}>
                <div className={cx("Display-flex-web-screen")}>
                  <h4 className={cx("Display-title")}>Tổng câu hỏi:</h4>
                  <CountUp
                    start={0}
                    end={549811}
                    duration={2.5}
                    className={cx("banner1H1")}
                  />
                </div>
              </Grid>

              <Grid item xs={4} className={cx("")}>
                <CircularProgress
                  sx={{
                    "--CircularProgress-size": `145px`,
                    "--CircularProgress-trackThickness": "24px",
                    "--CircularProgress-progressThickness": "24px",
                  }}
                  size="lg"
                  className={styles.circular}
                  determinate
                  value={66.67}
                  color="danger"
                  variant="outlined"
                >
                  <div>
                    <h5> Làm đúng</h5>
                    <h6>66.67% </h6>
                  </div>
                </CircularProgress>
              </Grid>

              <Grid item xs={12} sm={4} className={cx("full-width-grid")}>
                <div className={cx("Display-flex")}>
                  <div className={cx("Display-left")}>
                    <div className={cx("Display-flex-web-screen")}>
                      <h4 className={cx("Display-title")}>Đã làm:</h4>
                      <CountUp
                        start={0}
                        end={12}
                        duration={2.5}
                        className={cx("banner1H1")}
                      />
                    </div>
                  </div>
                  <div className={cx("Display-right")}>
                    <div className={cx("Display-flex-web-screen")}>
                      <h4 className={cx("Display-title")}>Thời gian (giờ): </h4>
                      <CountUp
                        start={0}
                        end={120}
                        duration={2.5}
                        className={cx("banner1H12")}
                      />
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={4} className={cx("full-width-grid")}>
                <div className={cx("Display-flex-web-screen")}>
                  <h4 className={cx("Display-title")}>Tổng đề thi: </h4>
                  <CountUp start={0} end={20528} className={cx("banner1H12")} />
                </div>
              </Grid>

              <Grid item xs={4} className={cx("")}>
                <CircularProgress
                  sx={{
                    "--CircularProgress-size": "145px",
                    "--CircularProgress-trackThickness": "24px",
                    "--CircularProgress-progressThickness": "24px",
                  }}
                  className={styles.circular}
                  size="lg"
                  determinate
                  value={80.67}
                  color="success"
                  variant="outlined"
                >
                  <div>
                    <h5>Đã làm </h5>
                    <h6>80.67% </h6>
                  </div>
                </CircularProgress>
              </Grid>

              <Grid item xs={12} sm={4} className={cx("full-width-grid")}>
                <div className={cx("Display-flex")}>
                  <div className={cx("Display-flex-web-screen")}>
                    <h4 className={cx("Display-title")}>Đã làm: </h4>
                    <CountUp
                      start={0}
                      end={12}
                      duration={2.5}
                      className={cx("banner1H1")}
                    />
                  </div>
                  <div className={cx("Display-right")}>
                    <div className={cx("Display-flex-web-screen")}>
                      <h4 className={cx("Display-title")}>Tổng số giờ làm: </h4>
                      <CountUp
                        start={0}
                        end={120}
                        duration={2.5}
                        className={cx("banner1H12")}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </SwiperSlide>

        <SwiperSlide className={cx("item-slide")}>
          <div className={cx("banner", "banner2")}>
            <Line data={data} options={options} />
            <h2>Theo dõi và nắm bắt sự tiến bộ của bản thân</h2>
          </div>
        </SwiperSlide>
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
export default Banner;
