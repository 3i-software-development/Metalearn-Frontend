//CourseList.js
import React, { useState, useEffect } from 'react';
import CourseItem from './CourseItem'
import style from './style.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetListCourseWatched } from '@/pages/api/CallAPI01';

import { GetListCourseAssigned, GetLectureQuiz, GetDetailLecture } from "@/pages/api/CallAPI_H";
import { set } from 'react-hook-form';


const cx = classNames.bind(style)

const CourseList = () => {

  const [activeTab, setActiveTab] = useState('assigned');


  const [courses, setCourses] = useState([]);
  const [assigneds, setAssigneds] = useState([]);
  const [lectureQuizSelect, setLectureQuizSelect] = useState([]);
  const [detailLecture, setDetailLecture] = useState([]);
  async function fetchData() {
    try {
      const res = await GetListCourseWatched();
      setCourses(res.Object); // Gán mảng dữ liệu từ API vào state boardData
      const res1 = await GetListCourseAssigned();
      setAssigneds(res1.Object);
      const res2 = await GetLectureQuiz();
      setLectureQuizSelect(res2);
      const res3 = await GetDetailLecture();
      setDetailLecture(res3);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'assigned' && tab !== activeTab) {
      fetchData()
    } else if (tab === 'watched' && tab !== activeTab) {
      fetchData()
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(detailLecture);
  }, [detailLecture]);

  return (
    // <div className={cx('course-tab')}>
    //   <div className={cx("CourseItem-Title")}>Danh sách khóa học</div>
    //   <div className={cx('course-list')}>
    //     {courses.map((course, index) => (
    //       <CourseItem data={course} key={index} />
    //     ))}
    //   </div>
    // </div>
    <div className={cx('Online-page')}>
      <div className={cx('document-layout')}>

        <div className={cx('document-category-name-list')}>
          <div className={cx('tab-bar')}>
            <button
              className={cx('tab-button', { active: activeTab === 'assigned' })}
              onClick={() => handleTabChange('assigned')}
            >
              Tham gia
            </button>
            <button
              className={cx('tab-button', { active: activeTab === 'watched' })}
              onClick={() => handleTabChange('watched')}
            >
              Quản lý
            </button>
          </div>
          <div className={cx('tab-content')}>
            {activeTab === 'assigned' && (
              <div className={cx('course-tab')}>
                <div className={cx("CourseItem-Title")}>Danh sách khóa học</div>
                <div className={cx('course-list')}>
                  {assigneds.map((assigned, index) => (
                    <CourseItem data={assigned} key={index} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'watched' && (
              <div className={cx('course-tab')}>
                <div className={cx("CourseItem-Title")}>Danh sách khóa học</div>
                <div className={cx('course-list')}>
                  {courses.map((course, index) => (
                    <CourseItem data={course} key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default CourseList