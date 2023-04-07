import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.register(ArcElement);
// const labels = ['section 1', 'section 2', 'section 3', 'section 4', 'section 5', 'section 6'];
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'Doughnut chart',
//     data: [10, 70],
//     backgroundColor: [
//       'blue',
//       'white'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'doggerblue'
//     ],
//     borderWidth: 1,
//     hoverBorderWidth: 1,
//     hoverBorderColor: [
//       'blue',
//       'white'],
//   }]
// };

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
  // Dữ liệu cho biểu đồ
  const data = {
    labels: ['28/3','29/3','30/3','1/4', '2/4', '3/4', '4/4', '5/4'],
    datasets: [
      {
        label: 'Câu hỏi đã làm',
        data: [70,78,120,100, 119, 54, 211, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Màu nền cho dữ liệu
        borderColor: 'rgba(75, 192, 192, 1)', // Màu viền cho dữ liệu
        borderWidth: 1 // Độ dày viền cho dữ liệu
      },
      {
        label: 'Câu làm đúng',
        data: [12,30,65,80, 76, 53, 188, 30],
        backgroundColor: 'red', // Màu nền cho dữ liệu
        borderColor: 'red', // Màu viền cho dữ liệu
        borderWidth: 1 // Độ dày viền cho dữ liệu
      }
    ]
  };

  // Tùy chọn cho biểu đồ
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 250 // Giá trị tối đa trên trục y
      }
    }
  };

const cx = classNames.bind(styles);

const Banner = ({ img, title, text }) => {

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
    <div className={cx('banner-slide')}>
      <Swiper
        className={cx('hot-slide')}
        modules={[
          // Autoplay,
           Navigation]}
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

        <SwiperSlide className={cx('item-slide')}>
          <div className={cx('banner')}>
            <Image src={img} alt='banner-metalearn' width='1500' height='1000' className={cx('banner-img')} />
            <div className={cx('text')}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className={cx('item-slide')}>



   


          <div className={cx('banner','banner2')}>

          <Line
      data={data}
      options={options}
    />
    <h2>Theo dõi và nắm bắt sự tiến bộ của bản thân</h2>
            {/* <Image src='/banner/do0.png' alt='banner-metalearn' width='1500' height='1000' className={cx('banner-img','bn2')} />
            <div className={cx('text-dia')}>
              <div className={cx('num-quest')}>
                <div className={cx('count')}>
                  <h1 className={cx('green')}>591.424</h1>
                  <p>Tổng câu hỏi</p>
                </div>
                <div className={cx('diagram')}>
                  <Doughnut
                    data={data}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                  <span className={cx('sp1')}>20%</span>
                  <span className={cx('sp2')}>Làm đúng</span>
                </div>
                <div className={cx('did')}>
                  <div className={cx('did-item')}>
                    <h3 className='blue'>22</h3>
                    <p >Đã làm</p>
                  </div>
                  <div className={cx('hr')} />
                  <div className={cx('did-item')}>
                    <h3 className='red'>0</h3>
                    <p >Thời gian (giờ)</p>
                  </div>

                </div>
              </div>
              <div className={cx('num-quest')}>
                <div className={cx('count')}>
                  <h1 className={cx('orange')}>20.527</h1>
                  <p>Tổng đề thi</p>
                </div>
                <div className={cx('diagram')}>
                  <Doughnut
                    data={data}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                  <span className={cx('sp1')}>20%</span>
                  <span className={cx('sp2')}>Đã làm</span>
                </div>
                <div className={cx('did')}>
                  <div className={cx('did-item')}>
                    <h3 className='purple'>22</h3>
                    <p >Đã làm</p>
                  </div>
                  <div className={cx('hr')} />
                  <div className={cx('did-item')}>
                    <h3 className='red'>0</h3>
                    <p >Thời gian (giờ)</p>
                  </div>

                </div>
              </div>
              <div className={cx('num-quest')}></div>
            </div> */}
          </div>
        </SwiperSlide>

      </Swiper>
      <IoMdArrowDropleftCircle className={cx('prev-button', 'btn-nav')} onClick={handlePrev} />

      <IoMdArrowDroprightCircle className={cx('next-button', 'btn-nav')} onClick={handleNext} />



    </div>

  )
}

export default Banner