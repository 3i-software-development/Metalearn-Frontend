import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Link from 'next/link';
import {BsSearch} from 'react-icons/bs';
import {TiShoppingCart} from 'react-icons/ti';
import {BiWorld} from 'react-icons/bi'

const cx = classNames.bind(styles);

const Header = () => {
    
  return (
    <div className={cx('header')}>
      <div className={cx('logo-container')}>Meta<span>Learn</span></div>

      <Link href='/subjects'>Môn học</Link>

      <div className={cx('search-container')}>
        <input type='text' placeholder='Tìm kiếm' className={cx('search-input')}/>
        <BsSearch/>
      </div>
      
      <Link href='/news'>Tin tức</Link>
      <Link href='/news'>Lớp học trực tuyến</Link>
      <Link href='/documents'>Tài liệu</Link>
      <Link href='/exam'>Đề thi</Link>
     
      
      <TiShoppingCart className={cx('icon')}/>

      <div className={cx('user')}>
        <Link href='/account/login' className={cx('login-btn')}>Log in</Link>
        <Link href='/account/login' className={cx('signup-btn')}>Sign up</Link>
        <div className={cx('change-language')}>
        <BiWorld className={cx('icon')}/>
      </div>
      </div>

      {/* <div className={cx('change-language')}>
        <BiWorld className={cx('icon')}/>
      </div> */}
    </div>
  )
}

export default Header