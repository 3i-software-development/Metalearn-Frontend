// Loader.js
import React from 'react';

import classNames from 'classnames/bind';
import styles from './load.module.scss';

const cx = classNames.bind(styles);

const Index = () => {
  return <div className={cx("loader")}>Loading...</div>;
};

export default Index;
