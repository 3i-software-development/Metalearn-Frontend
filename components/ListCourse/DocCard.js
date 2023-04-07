import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai';


const cx = classNames.bind(styles);

const DocCard = ({data}) => {
  return (
    <div className={cx('course-card')}>
    <Image src='/image/doc.jpg' alt='course' width='500' height='400'/>
    <h4>{data.FileName.replace('.docx','')}</h4>
    <span>{data.CreatedBy}</span>
    <p className={cx('rate')}>5 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span>(99,999)</span></p>
    {/* <p className={cx('price')}>
      {data.price.toLocaleString()}<span>{(data.price*2).toLocaleString()}
    </span> vnd</p> */}
    <p className={cx('best')}>Best Seller</p>
</div>
  )
}

export default DocCard