import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai';


const cx = classNames.bind(styles);

const CourseCard = ({data}) => {
  return (
    <div className={cx('course-card')}>
        <Image src={data.img} alt='course' width='500' height='400'/>
        <h4>{data.title}</h4>
        <span>{data.author}</span>
        <p className={cx('rate')}>{data.rate} <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span>(99,999)</span></p>
        <p className={cx('price')}>{data.price.toLocaleString()}<span>{(data.price*2).toLocaleString()}</span> vnd</p>
        <p className={cx('best')}>Best Seller</p>
    </div>
  )
}

export default CourseCard