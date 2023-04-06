import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../Section/Section';

const cx = classNames.bind(styles);

const Team = () => {
  return (
    <div className={cx('team')}>
      
     <Section>
     <h2>Được tin tưởng bởi hơn 10,000 tổ chức</h2>
      <p>Các công ty hàng đầu sử dụng các khóa học tương tự để giúp nhân viên giữ cho các kỹ năng của họ luôn mới mẻ.</p>
    
      <div className={cx('list-team')}>
        <Image src='/logo/t1.svg' alt='logo-team' width={50} height={50} />
        <Image src='/logo/t2.svg' alt='logo-team' width={50} height={50} />
        <Image src='/logo/t3.svg' alt='logo-team' width={50} height={50} />
        <Image src='/logo/t4.svg' alt='logo-team' width={50} height={50} />
        <Image src='/logo/t5.svg' alt='logo-team' width={50} height={50} />
        <Image src='/logo/t6.svg' alt='logo-team' width={50} height={50} />
      </div>
    </Section>
    </div>
  )
}

export default Team