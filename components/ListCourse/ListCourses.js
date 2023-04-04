import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import { ListHotCourse } from '@/public/data';
import CourseCard from './CourseCard';

const cx = classNames.bind(styles);

const ListCourses = () => {
  return (
    <div className={cx('list')}>
      {ListHotCourse.slice(0,5).map((item,index)=>
      <CourseCard data={item}/>
      )}
    </div>
  )
}

export default ListCourses