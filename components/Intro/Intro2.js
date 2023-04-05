import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Intro2 = ({data,rev}) => {
  return (
    <div className={cx('intro2',rev && 'rev')}>
      <Image src={data.img} alt='introduce' width={500} height='500'/>
      <div className={cx('intro-text')}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <Link href={''} >{data.button}</Link>
      </div>
    </div>
  )
}

export default Intro2