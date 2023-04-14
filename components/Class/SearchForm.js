import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { BsSearch } from "react-icons/bs";
import { Select } from "antd";

const cx = classNames.bind(styles);

const SearchForm = () => {
  const options = [
    {
      value: "Tên lớp học",
      label: "Tên lớp học",
    },
    {
      value: "Ngày bắt đầu",
      label: "Ngày bắt đầu",
    },
    {
      value: "Tên giáo viên",
      label: "Tên giáo viên",
    },
  ];

  return (
    <div className={cx("list-course-container")}>
      <div className={cx("search-container")}>
        <input
          type="text"
          placeholder="Tìm kiếm lớp của tôi"
          className={cx("search-input")}
        />
        <BsSearch />
      </div>

      <div className={cx("sort-container")}>
        <div className={cx("title-sort-container")}>
          <h2>Sắp xếp</h2>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className={cx("content-sort-container")}>
          <p>Sắp xếp theo</p>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>
      </div>

      <div className={cx("sort-container")}>
        <div className={cx("title-sort-container")}>
          <h2>Lọc</h2>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className={cx("content-sort-container")}>
          <p>Môn học</p>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>
        <div className={cx("content-sort-container")}>
          <p>Thời gian bắt đầu</p>
          <span>Từ</span>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
          <span>Đến</span>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
