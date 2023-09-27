import React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Comment(props) {
  const { user, content, date } = props;

  return (
    <div className={cx("comment")}>
      <div className={cx("comment-header")}>
        <div className={cx("comment-user")}>{user}</div>
        <div className={cx("comment-date")}>{date}</div>
      </div>
      <div className={cx("comment-content")}>{content}</div>
    </div>
  );
}

export default Comment;
