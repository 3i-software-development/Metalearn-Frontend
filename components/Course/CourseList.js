//CourseList.js
import React, { useState, useEffect } from 'react';
import CourseItem from './CourseItem'
import style from './style.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetListCourseWatched } from '@/pages/api/CallAPI01';



const cx = classNames.bind(style)

const CourseList = () => {



    const [courses, setCourses] = useState([]);

    async function fetchData() {
        try {
          const res = await GetListCourseWatched();
          setCourses(res.Object); // Gán mảng dữ liệu từ API vào state boardData
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      useEffect(() => {
        fetchData();
      }, []);


    return (
        <div className={cx('course-tab')}>
            <div className={cx("CourseItem-Title")}>Danh sách khóa học</div>
            <div className={cx('course-list')}>
                {courses.map((course, index) => (
                    <CourseItem data={course} key={index}/>
                ))}
            </div>
        </div>

    )
}

export default CourseList