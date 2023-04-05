import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import { ListHotCourse } from '@/public/data';
import CourseCard from './CourseCard';
// import { SwiperSlide, Swiper } from 'swiper/react';
// import { Autoplay,Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/scss/navigation';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const cx = classNames.bind(styles);

const ListCourses = () => {
  return (
    <div className={cx('list')}>
{/* 
      {ListHotCourse.slice(0,5).map((item,index)=>
      <CourseCard data={item}/>
      )} */}

           {/* <Swiper
                className={cx('hot-slide')}
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
                navigation
            >
              {ListHotCourse.map((item,index)=>
              <SwiperSlide key={index} className={cx('item-slide')}>

      <CourseCard data={item}/>
      </SwiperSlide>
      )}
            </Swiper> */}
  
        {/* </div> */}



        <Slide slidesToScroll={1} slidesToShow={5} indicators={true}>
        {ListHotCourse.map((item,index)=>            
      <CourseCard data={item} key={index}/>
      )}
            </Slide>
    </div>
  )
}

export default ListCourses