import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai';


const cx = classNames.bind(styles);

const ExamCard = ({data}) => {
  return (
    <div className={cx('course-card')}>
        <Image src={data.ImageCover} alt='course' width='500' height='400'/>
        <h4>{data.LectName}</h4>
        <span>{data.Teacher}</span>
        <p className={cx('rate')}>5 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span>(99,999)</span></p>
        {/* <p className={cx('price')}>
          {data.price.toLocaleString()}<span>{(data.price*2).toLocaleString()}
        </span> vnd</p> */}
        <p className={cx('best')}>Best Seller</p>
    </div>
  )
}

export default ExamCard