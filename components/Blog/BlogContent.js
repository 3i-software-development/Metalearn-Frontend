import React from "react";
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const BlogContent = ({ content, item }) => {
    return (
        <div className={cx('blog-content')}>
            <h1>{item.title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default BlogContent;
