// TutorialBarItem.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const TutorialBarItem = ({ title, item, handleSelectBarItem }) => {
    return (
        <div
            className={cx('tutorial-bar-item', { 'selected': item === handleSelectBarItem })}
            onClick={() => handleSelectBarItem(item)}
        >
            {title}
        </div>
    );
};

export default TutorialBarItem;
