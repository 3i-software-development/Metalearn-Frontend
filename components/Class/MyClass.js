import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListClass from "./ListClass";
import { useEffect, useState } from "react";
import {GetListMyClass} from "@/pages/api/CallAPI";

const cx = classNames.bind(styles);

const MyClass = () => {

  const [listClass, setListClass] = useState([]);

  useEffect(() => {
    GetListMyClass().then((res) => {
      setListClass(res.Object);
    });
  }, []);

  console.log(listClass);

  return (
    <div className={cx("list-course-container")}>
      <h1>Lớp của tôi</h1>
      <hr />
      <ListClass />
    </div>
  );
};

export default MyClass;
