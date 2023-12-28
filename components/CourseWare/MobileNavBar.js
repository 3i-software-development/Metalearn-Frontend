import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);

const MobileNavBar = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <div className={cx("nav-bar-mobile")}>
      <div className="nav-toggle" onClick={toggleNavBar}>
        <i className="fa fa-bars" aria-hidden="true"></i>&nbsp; Navigation
      </div>
      {/* Sử dụng className để kiểm soát hiển thị/ẩn của ul */}
      <ul className={cx({ visible: isNavBarVisible })}>
        {" "}
        {/* Sử dụng cx để áp dụng class từ CSS module */}
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default MobileNavBar;
