import React from "react";
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const UserPopup = () => {
  return (
    <div className={cx('user-popup')}>
      {/* Nội dung của UserPopup */}
      <p>This is the UserPopup content.</p>
    </div>
  );
};

export default UserPopup;
