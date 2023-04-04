import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

const Banner = ({img,title,text}) => {
  return (
    <div className={cx('banner')}>
      <Image src={img} alt='banner-metalearn' width='1500' height='1000' className={cx('banner-img')}/>
      <div className={cx('text')}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Banner