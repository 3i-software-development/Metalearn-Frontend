import React from "react";
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const TutorialContent = ({ item }) => {
    return (
        <div className={cx('tutorial-content')}>
            <h1 className={cx('tutorial-title')}>{item.label}</h1>
            <p className={cx('tutorial-text')}>{item.content}</p>
        </div>
    )
}

export default TutorialContent;
