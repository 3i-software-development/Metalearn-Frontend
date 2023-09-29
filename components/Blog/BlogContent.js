import React from "react";
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { useAuth } from '@/hooks/authContext';

const cx = classNames.bind(styles);

const BlogContent = ({ item }) => {
    const { saveSetting } = useAuth();
    const divStyleTitle = {
        fontSize: saveSetting["Tiêu đề"].size + "px",
        color: saveSetting["Tiêu đề"].color,
        fontFamily: saveSetting["Tiêu đề"].style,
    };
    const divStyleContent = {
        fontSize: saveSetting["Nội dung chữ"].size + "px",
        color: saveSetting["Nội dung chữ"].color,
        fontFamily: saveSetting["Nội dung chữ"].style,
    };

    return (
        <div className={cx('blog-content')}>
            <div className={cx('blog-title')}>
                <text style={divStyleTitle}>
                    {item.label}
                </text>
            </div>
            <p className={cx('blog-date')}>{item.date}</p>
            <p className={cx('blog-text')}>
                <text style={divStyleContent}>
                    {item.content}
                </text>
            </p>
            <p className={cx('blog-author')}>{item.author}</p>
        </div>
    )
}

export default BlogContent;
