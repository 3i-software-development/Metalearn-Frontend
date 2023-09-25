import Image from "next/image";
import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const PracticeItem = ({ data }) => {
    const completionPercentage = data.progress + '%';

    return (
        <div className={cx('practice-container')}>
            <div className={cx('item-container')}>
                <h4 style={{ textDecoration: 'underline', marginLeft: '15px' }}>{data.title}</h4>
                <p style={{ marginRight: '15px' }}><i class="fa-solid fa-plus"></i></p>
            </div>
            <div className={cx('item-container')}>
                <div className={cx('status-container')}>
                    <p className={cx('status1')}>{data.status1}</p>
                    <p className={cx('status2')}>{data.status2}</p>
                </div>
                <p style={{
                    color: 'blue', fontSize: '15px',
                    marginRight: '15px'
                }}>{data.result}</p>
            </div>
            <p style={{
                marginTop: '10px', marginLeft: '15px',
                fontSize: '15px'
            }}>Người giao: {data.job_assigner}</p>
            <div className={cx('progress-bar')}>
                <div className={cx('progress')} style={{ width: `${data.progress}%` }}>
                    <span className={cx('completion')}>{completionPercentage}</span>
                </div>
            </div>
            <p style={{
                marginTop: '10px', marginLeft: '15px',
                fontSize: '15px'
            }}>{data.date}</p>
            <div className={cx('others')}>
                <p><i class="fa-solid fa-pen-to-square"></i></p>
                <p><i class="fa-solid fa-bars-progress"></i></p>
                <p><i class="fa-brands fa-rocketchat"></i></p>
                <p><i class="fa-solid fa-bell"></i></p>
                <p><i class="fa-solid fa-file-lines"></i></p>
                <p><i class="fa-solid fa-trash-can"></i></p>
            </div>
        </div>
    )
}

export default PracticeItem;