import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import ListCourses from '../ListCourse/ListCourses';

const cx = classNames.bind(styles);

const MostView = () => {
  return (

    <div className={cx('most-view')}>
        <h1 className={cx('h1')}>Nhiều người xem nhất</h1>
        <ListCourses/>
    </div>
    
  )
}

export default MostView