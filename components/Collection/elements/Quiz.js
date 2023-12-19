//File.js

import React from 'react';
import style from './style.module.scss';
import classNames from 'classnames/bind';
import SelftrainingCard from "../../Card/SelftrainingCard/SelftrainingCard"

const cx = classNames.bind(style);

const Quiz = () => {
    return (
        <div className={cx('quiz-container')}>
            <SelftrainingCard onlyAssignment={true} />
        </div>
    );
}

export default Quiz