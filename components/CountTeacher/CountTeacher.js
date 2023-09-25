//count-teacher page
import React from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CountTeacher = () => {
    //number of teacher data
    const fakeData = {
        countQuestion: 100,
        countLeature: 100,
        countStudent: 100,
        countClass: 100,
    }
    return (
        <div className={cx("count-teacher")}>
            <div className={cx("count-teacher__title")}>
                <h1>Count Teacher</h1>
            </div>
            <div className={cx("count-teacher__content")}>
                <div className={cx("count-teacher__content__item")}>
                    <h2>Number of Question</h2>
                    <p>{fakeData.countQuestion}</p>
                </div>
                <div className={cx("count-teacher__content__item")}>
                    <h2>Number of Leature</h2>
                    <p>{fakeData.countLeature}</p>
                </div>
                <div className={cx("count-teacher__content__item")}>
                    <h2>Number of Student</h2>
                    <p>{fakeData.countStudent}</p>
                </div>
                <div className={cx("count-teacher__content__item")}>
                    <h2>Number of Class</h2>
                    <p>{fakeData.countClass}</p>
                </div>
            </div>
        </div>
    );
}

export default CountTeacher;
