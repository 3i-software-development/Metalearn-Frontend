import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

const TopCategories = () => {
  return (
    <div className={cx('top-category')}>
         <h1 className={cx('h1')}>Chủ đề nổi bật</h1>
         <div className={cx('list-top-cate')}>
            
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct1.jpg' alt='icon-categori' width={300} height='200'/>
                <p>Thiết kế</p>
            </div>
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct2.jpg' alt='icon-categori' width={300} height='200'/>
                <p>Lập trình</p>
            </div>
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct3.jpg' alt='icon-categori' width={300} height='200'/>
                <p>Marketing</p>
            </div>
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct4.jpg' alt='icon-categori' width={300} height='200'/>
                <p>IT</p>
            </div>
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct5.jpg' alt='icon-categori' width={300} height='200'/>
                <p>Phát trển bản thân</p>
            </div>
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct6.jpg' alt='icon-categori' width={300} height='200'/>
                <p>Kinh doanh</p>
            </div>
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct7.jpg' alt='icon-categori' width={300} height='200'/>
                <p>Nhiếp ảnh</p>
            </div>
            <div className={cx('item-top-cate')}>
                <Image src='/categori/ct8.jpg' alt='icon-categori' width={300} height='200'/>
                <p>Âm nhạc</p>
            </div>
         </div>

    </div>
  )
}

export default TopCategories