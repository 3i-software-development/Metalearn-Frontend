import React from "react";
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const BlogContent = ({ item }) => {
    return (
        <div className={cx('blog-content')}>
            <h1 className={cx('blog-title')}>{item.label}</h1>
            <p className={cx('blog-date')}>{item.date}</p>
            <p className={cx('blog-text')}>{item.content}</p>
            <p className={cx('blog-author')}>{item.author}</p>
        </div>
    )
}

export default BlogContent;
