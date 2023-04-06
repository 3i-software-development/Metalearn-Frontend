import React from 'react'
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import {FaPlay,FaStar} from 'react-icons/fa';
import {GiInfinity} from 'react-icons/gi';
import Section from '../Section/Section';

const cx = classNames.bind(styles);

const Intro1 = () => {
  return (
    <div className={cx('intro-container')}>
      <Section>
        <div className={cx('intro-main')}>
        <div className={cx('intro-item')}>
            <div><FaPlay/></div>
            <p>Nâng cao kiến thức với hơn 100,000 video và tài liệu , đề thi</p>
        </div>
        <div className={cx('intro-item')}>
            <div><FaStar/></div>
            <p>Chọn các lớp học được giảng dạy bởi các chuyên gia trong và ngoài nước</p>
        </div>
        <div className={cx('intro-item')}>
            <div><GiInfinity/></div>
            <p>Học theo thời gian của riêng bạn, với quyền truy cập trọn đời</p>
        </div>
        </div>
      </Section>
    </div>
  )
}

export default Intro1