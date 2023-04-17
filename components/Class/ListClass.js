import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GetListClass } from "@/pages/api/CallAPI";
import ClassCard from "./ClassCard";

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
      <div className={cx("list")}>
        {ListClass?.data?.Object?.map((item, index) => (
          <div key={index} className={cx("card")}>
            <ClassCard data={item} />
          </div>
        ))}
      </div>
      {loadMore()}
    </div>
  );
};

export default ListClass;
