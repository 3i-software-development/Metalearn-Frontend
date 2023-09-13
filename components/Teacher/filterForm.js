import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { BsSearch } from "react-icons/bs";
import { DatePicker, Select } from "antd";

const cx = classNames.bind(style);

const FilterForm = () => {
  const [openSort, setOpenSort] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);

  const handleDropDown = (id) => {
    switch (id) {
      case "sort":
        setOpenSort((pre) => !pre);
        break;
      case "filter":
        setOpenFilter((pre) => !pre);
        break;
    }
  };
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

  const dateFormat = "DD-MM-YYYY";

  return (
    <div className={cx("form-filter")}>
      <div className={cx("search-container")}>
        <input
          type="text"
          placeholder="Tìm kiếm lớp của tôi"
          className={cx("search-input")}
        />
        <BsSearch />
      </div>
      <div className={cx("sort-container")}>
        <div
          className={cx("title-sort-container")}
          onClick={() => handleDropDown("sort")}
        >
          <h2>Sắp xếp</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        {openSort && (
          <div className={cx("content-sort-container")}>
            <p>Sắp xếp theo</p>
            <Select
              className={cx("select-container")}
              defaultValue="Tên lớp học"
              options={options}
            />
          </div>
        )}
      </div>
      <div className={cx("sort-container")}>
        <div
          className={cx("title-sort-container")}
          onClick={() => handleDropDown("filter")}
        >
          <h2>Lọc</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        {openFilter && (
          <>
            <div className={cx("content-sort-container")}>
              <p>Subject</p>
              <Select
                className={cx("select-container")}
                defaultValue="Tên lớp học"
                options={options}
              />
            </div>
            <div className={cx("content-sort-container")}>
              <p>Thời gian bắt đầu</p>
              <span>Từ</span>
              <DatePicker
                format={dateFormat}
                className={cx("select-container")}
                placeholder="Ngày bắt đầu"
              />
              <span>Đến</span>
              <DatePicker
                format={dateFormat}
                className={cx("select-container")}
                placeholder="Ngày kết thúc"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterForm;
