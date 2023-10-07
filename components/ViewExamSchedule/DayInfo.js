import React, { useState } from "react";
import styles from "./ViewExamSchedule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
// DayInfo.js is a component that displays the information of a day

const DayInfo = ({ year, month, day }) => {
    return (
        <div className={cx("day-info")}>
            <h1>{year}-{month}-{day}</h1>
            <div className={cx("exam-item")}>
                <h2>Exam 1</h2>
                <p>Course: </p>
                <p>Time: </p>
                <p>Location: </p>
            </div>
            <div className={cx("exam-item")}>
                <h2>Exam 2</h2>
                <p>Course: </p>
                <p>Time: </p>
                <p>Location: </p>
            </div>
        </div>
    );
}

export default DayInfo;