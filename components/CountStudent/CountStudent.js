//count-teacher page
import React from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CountStudent = () => {
    //number of teacher data
    const fakeData = {
        countQuestion: 100,
        countPractice: 100,
        countClass: 100,
    }
    return (
        <div className={cx("count-student")}>
            <div className={cx("count-student__title")}>
                <h1>Count Student</h1>
            </div>
            <div className={cx("count-student__content")}>
                <div className={cx("count-student__content__item")}>
                    <h2>Number of Question</h2>
                    <p>{fakeData.countQuestion}</p>
                </div>
                <div className={cx("count-student__content__item")}>
                    <h2>Number of Practice</h2>
                    <p>{fakeData.countPractice}</p>
                </div>
                <div className={cx("count-student__content__item")}>
                    <h2>Number of Class</h2>
                    <p>{fakeData.countClass}</p>
                </div>
            </div>
        </div>
    );
}

export default CountStudent;
