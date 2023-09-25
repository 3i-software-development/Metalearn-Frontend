//notification component
import React from 'react';
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Notification = () => {
    const fakeData = [
        {
            id: 1,
            title: 'Toán',
            content: '1 + 1 = ?',
        },
        {
            id: 2,
            title: 'Lý',
            content: '1 + 2 = ?',
        },
    ];
    return (
        <div className={cx("notification")}>
            <div className={cx("notification-list")}>
                {
                    fakeData.map(item => (
                        <div className={cx("notification-item")}>
                            <div className={cx("notification-item-title")}>{item.title}</div>
                            <div className={cx("notification-item-content")}>{item.content}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
