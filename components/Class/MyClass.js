import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListClass from "./ListClass";


const cx = classNames.bind(styles);

const MyClass = () => {

  return (
    <div className={cx("list-course-container")}>
      <h1>Lớp của tôi</h1>
      <hr />
      <ListClass />
    </div>
  );
};

export default MyClass;
