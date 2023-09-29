//File.js

import React from 'react';
import style from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Questions = () => {
    return (
        <div className={cx('questions-container')}>
            Questions
        </div>
    );
}

export default Questions