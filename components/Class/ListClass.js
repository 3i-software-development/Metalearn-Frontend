import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListCourses from "../ListCourse/ListCourses";
import { GetListClass } from "@/pages/api/CallAPI";

const cx = classNames.bind(styles);

const ListClass = () => {
  const ListClass = GetListClass();
  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadMore = () =>
    !initLoading && !loading ? (
      <div className={cx("load-more")}>
        <p>Xem thêm</p>
      </div>
    ) : null;

  return (
    <div className={cx("list-course-container")}>
      {ListClass.data && <ListCourses data={ListClass.data.Object} clas />}

      {loadMore()}
    </div>
  );
};

export default ListClass;
