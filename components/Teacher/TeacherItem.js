import Image from "next/image";
import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";

const cx = classNames.bind(style);

const TeacherItem = ({data}) => {
    return (
        <div className={cx('teacher-item')}>
            <div><Image className={cx('image')} src={data.avatar} alt="teacher avatar" width={450} height={550}/></div>
            <div>
                <h2>{data.name}</h2>
                <p><i class="fa-solid fa-phone"></i>{data.phoneNumber}</p>
            </div>
            <div className={cx('teacher-interactive')}>
                <p><i class="fa-solid fa-heart"></i>{data.likes} Likes</p>
                <p><i class="fa-regular fa-comments"></i>{data.reviews} Reviews</p>
                <p><i class="fa-regular fa-user"></i>{data.follows} Follows</p>
            </div>
            <div><i class="fa-solid fa-location-dot" style={{color: 'green'}}></i>{data.address}</div>
            <div><i class="fa-solid fa-book" style={{color: '#f5a142', position: 'absolute'}}></i><span style={{display: 'block', paddingLeft: '18px'}}>{data.subjects.join(", ")}</span></div>
        </div>
    )
}

export default TeacherItem;
