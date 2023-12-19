import React from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

const CourseItem = ({ data }) => {
    const completionPercentage = data.Duration + '%';

    return (
        <div className={cx('course-item')}>
            <div className={cx('image-container')}> {/* Tạo một container cho hình ảnh */}
                <Image src={data.ImgCover} alt="teacher avatar" width={300} height={300} />
            </div>
            <div>
 
                <h1 className={cx("Course-title-01")}>{data.CourseName}</h1>
                <h2 className={cx("Course-title-02")}>{data.CourseCode}</h2>
                <p><i className="fa-solid fa-user"></i>Người tạo: {data.CreatedBy}</p>
                <p><i className="fa-solid fa-clock"></i>Thời lượng: {data.CreatedTime}</p>
                <p><i className="fa-solid fa-money-bill"></i>Giá: {data.Price} Coin [{data.Percent}]</p>
                {/* <p><i className="fa-solid fa-book"></i>Môn học: {data.IsPurchased}</p> */}
                <div className={cx('progress-bar')}>
                    <div className={cx('progress')} style={{ width: `${data.Duration}%` }}>
                    <div className={cx('progress-text')}>
                        <span>{completionPercentage}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem
