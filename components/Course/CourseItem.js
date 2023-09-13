import React from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

const CourseItem = ({ data }) => {
    const completionPercentage = data.completion + '%';

    return (
        <div className={cx('course-item')}>
            <div className={cx('image-container')}> {/* Tạo một container cho hình ảnh */}
                <Image src={data.image} alt="teacher avatar" width={300} height={300} />
            </div>
            <div>
                <h1>{data.title}</h1>
                <p><i className="fa-solid fa-user"></i>Người tạo: {data.publisher}</p>
                <p><i className="fa-solid fa-clock"></i>Thời lượng: {data.time}</p>
                <p><i className="fa-solid fa-money-bill"></i>Giá: {data.price} Coin [{data.owning}]</p>
                <p><i className="fa-solid fa-book"></i>Môn học: {data.subject}</p>
                <div className={cx('progress-bar')}>
                    <div className={cx('progress')} style={{ width: `${data.completion}%` }}>
                    <span className={cx('completion')}>{completionPercentage}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem
