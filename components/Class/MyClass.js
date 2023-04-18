import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListClass from "./ListClass";
import SearchForm from "./SearchForm";
import useTrans from "@/hooks/useTrans";

const cx = classNames.bind(styles);

const MyClass = () => {
  const trans = useTrans();
  return (
    <div className={cx("list-course-container")}>
      <h1>{trans.class.myClass}</h1>
      <hr />
      <ListClass />
    </div>
  );
};

export default MyClass;
