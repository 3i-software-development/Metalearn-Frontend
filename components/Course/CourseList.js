//CourseList.js
import React from 'react'
import CourseItem from './CourseItem'
import style from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

const CourseList = () => {
    const courseData = [
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 90},
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 90},
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 90},
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 90},
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 0},
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 90},
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 100},
        {title: 'test', publisher: 'admin', time: "60 phút", price: 0, owning: "Sở hữu", image: "https://cdn.vietnambiz.vn/2019/10/15/1nvhe7mchqmjbgyvx-uobra-15711056360651103109227.png" , subject: "Toán", completion: 0 },
    ]
    return (
        <div className={cx('course-tab')}>
            <div className={cx("CourseItem-Title")}>Danh sách khóa học</div>
            <div className={cx('course-list')}>
                {courseData.map((course, index) => (
                    <CourseItem data={course} key={index}/>
                ))}
            </div>
        </div>

    )
}

export default CourseList