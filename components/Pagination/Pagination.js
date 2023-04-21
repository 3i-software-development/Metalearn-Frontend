import React from "react";
import classNames from "classnames/bind";
import style from "../Exam/style.module.scss";
const cx = classNames.bind(style);
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  //   const pages = _.range(1, pageCount + 1);

  return (
    <div className={cx("pagination")}>
      <div >
        <button disabled className={cx("prev")}></button>
        <span onClick={() => onPageChange(page)}>
          Page <b>1</b> of 300
        </span>
        <button className={cx("next")}></button>
      </div>
    </div>
  );
};

export default Pagination;
